export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';

export default async function AdminDashboard() {
  const [users, jobs, claims] = await Promise.all([
    db.user.count(),
    db.job.count(),
    db.leadClaim.count(),
  ]);

  const recentJobs = await db.job.findMany({ orderBy: { createdAt: 'desc' }, take: 15, include: { claims: true } });

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-4">Users: {users}</div>
        <div className="border rounded p-4">Jobs: {jobs}</div>
        <div className="border rounded p-4">Claims: {claims}</div>
      </div>
      <section>
        <h2 className="text-xl font-semibold">Recent Jobs</h2>
        <ul className="space-y-2 mt-2">
          {recentJobs.map((j) => <li key={j.id} className="border rounded p-2">{j.title} · {j.status} · Claims {j.claims.length}/5</li>)}
        </ul>
      </section>
    </main>
  );
}
