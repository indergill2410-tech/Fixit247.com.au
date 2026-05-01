import { getMatchingJobs } from '@/lib/actions/job.actions';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
export default async function TradieDashboard(){
 const jobs = await getMatchingJobs();
 const session = await auth();
 const user = session?.user?.email ? await db.user.findUnique({where:{email:session.user.email},include:{notifications:true,tradieProfile:true}}):null;
 const claims = user?.tradieProfile ? await db.leadClaim.count({where:{tradieProfileId:user.tradieProfile.id}}):0;
 return <main className='space-y-6'><h1 className='text-3xl font-bold'>Tradie Dashboard</h1><p>Leads claimed: {claims}/11</p><section><h2 className='font-semibold'>Matching jobs for your trade</h2><ul>{jobs.map(j=><li key={j.id}>{j.title} · {j.trade} · {j.suburb}</li>)}</ul></section><section><h2 className='font-semibold'>Notifications</h2><ul>{(user?.notifications||[]).map(n=><li key={n.id}>{n.message}</li>)}</ul></section></main>
}
