'use server';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

async function getCurrentUser() {
  const session = await auth();
  if (!session?.user?.email) throw new Error('Unauthorized');
  const user = await db.user.findUnique({ where: { email: session.user.email }, include: { tradieProfile: true, homeownerProfile: true } });
  if (!user) throw new Error('Unauthorized');
  return user;
}

export async function createJob(input: { title: string; description: string; suburb: string; trade: string }) {
  const user = await getCurrentUser();
  if (!user.homeownerProfile) throw new Error('Homeowner profile required');

  const job = await db.job.create({
    data: {
      ...input,
      homeownerProfileId: user.homeownerProfile.id,
      status: 'OPEN'
    }
  });

  const tradies = await db.tradieProfile.findMany({
    where: { suburb: input.suburb, trades: { has: input.trade } },
    include: { user: true }
  });

  const ranked = tradies
    .sort((a, b) => b.profileComplete - a.profileComplete)
    .slice(0, 5);

  await db.notification.createMany({
    data: ranked.map((t) => ({ userId: t.userId, message: `New ${input.trade} job in ${input.suburb}: ${input.title}` }))
  });

  return { ok: true, jobId: job.id, matchedTradies: ranked.length };
}

export async function claimLead(jobId: string) {
  const user = await getCurrentUser();
  if (!user.tradieProfile) throw new Error('Tradie profile required');

  return db.$transaction(async (tx) => {
    const job = await tx.job.findUnique({ where: { id: jobId }, include: { claims: true } });
    if (!job) throw new Error('Job not found');
    if (!['OPEN', 'IN_PROGRESS'].includes(job.status)) throw new Error('Job no longer claimable');
    if (!user.tradieProfile!.trades.includes(job.trade)) throw new Error('Trade mismatch');
    if (job.claims.length >= 5) throw new Error('Claim limit reached for this job (5).');

    const activeCount = await tx.leadClaim.count({
      where: {
        tradieProfileId: user.tradieProfile!.id,
        job: { status: { in: ['OPEN', 'IN_PROGRESS'] } }
      }
    });
    if (activeCount >= 11) throw new Error('Active job limit reached (11).');

    const existing = await tx.leadClaim.findUnique({ where: { tradieProfileId_jobId: { tradieProfileId: user.tradieProfile!.id, jobId } } });
    if (existing) return existing;

    const claim = await tx.leadClaim.create({ data: { tradieProfileId: user.tradieProfile!.id, jobId } });
    await tx.job.update({ where: { id: jobId }, data: { status: 'IN_PROGRESS' } });
    await tx.notification.create({ data: { userId: user.id, message: `Claim submitted: ${job.title}` } });
    return claim;
  });
}

export async function getMatchingJobs() {
  const user = await getCurrentUser();
  if (!user.tradieProfile) return [];
  return db.job.findMany({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] }, trade: { in: user.tradieProfile.trades }, suburb: user.tradieProfile.suburb || undefined }, orderBy: { createdAt: 'desc' } });
}

export async function getHomeownerJobs() {
  const user = await getCurrentUser();
  if (!user.homeownerProfile) return [];
  return db.job.findMany({ where: { homeownerProfileId: user.homeownerProfile.id }, include: { claims: true }, orderBy: { createdAt: 'desc' } });
}
