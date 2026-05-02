export const dynamic = 'force-dynamic';
import { claimLead, getMatchingJobs } from '@/lib/actions/job.actions';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

export default async function TradieDashboard() {
  const jobs = await getMatchingJobs();
  const session = await auth();
  const user = session?.user?.email ? await db.user.findUnique({ where: { email: session.user.email }, include: { notifications: { orderBy: { createdAt: 'desc' }, take: 10 }, tradieProfile: true } }) : null;
  const claims = user?.tradieProfile ? await db.leadClaim.count({ where: { tradieProfileId: user.tradieProfile.id, job: { status: { in: ['OPEN', 'IN_PROGRESS'] } } } }) : 0;

  return <main className='space-y-6 p-6'><h1 className='text-3xl font-bold'>Tradie Dashboard</h1><p>Active leads: {claims}/11</p><section><h2 className='font-semibold text-xl'>Matching jobs for your trade</h2><ul className='space-y-3 mt-2'>{jobs.map(j=><li key={j.id} className='border rounded p-3 flex items-center justify-between'><span>{j.title} · {j.trade} · {j.suburb} · {j.status}</span><form action={async()=>{'use server'; await claimLead(j.id);}}><button className='bg-yellow-400 rounded px-3 py-2 font-semibold'>Claim lead</button></form></li>)}</ul></section><section><h2 className='font-semibold text-xl'>Notifications</h2><ul>{(user?.notifications||[]).map(n=><li key={n.id}>{n.message}</li>)}</ul></section></main>
}
