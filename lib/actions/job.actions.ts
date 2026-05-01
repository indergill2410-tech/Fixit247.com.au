'use server';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

export async function claimLead(jobId: string) {
  const session = await auth();
  if (!session?.user?.email) throw new Error('Unauthorized');
  const user = await db.user.findUnique({ where: { email: session.user.email }, include: { tradieProfile: true } });
  if (!user?.tradieProfile) throw new Error('Tradie profile required');
  const claimedCount = await db.leadClaim.count({ where: { tradieProfileId: user.tradieProfile.id } });
  if (claimedCount >= 11) throw new Error('Lead claim limit reached (11).');
  const job = await db.job.findUnique({ where: { id: jobId } });
  if (!job) throw new Error('Job not found');
  if (!user.tradieProfile.trades.includes(job.trade)) throw new Error('Trade mismatch');
  const claim = await db.leadClaim.create({ data: { tradieProfileId: user.tradieProfile.id, jobId } });
  await db.notification.create({ data: { userId: user.id, message: `New matching ${job.trade} job claimed: ${job.title}` } });
  return claim;
}

export async function getMatchingJobs() {
  const session = await auth();
  if (!session?.user?.email) return [];
  const user = await db.user.findUnique({ where: { email: session.user.email }, include: { tradieProfile: true } });
  if (!user?.tradieProfile) return [];
  return db.job.findMany({ where: { status: 'OPEN', trade: { in: user.tradieProfile.trades } }, orderBy: { createdAt: 'desc' } });
}
