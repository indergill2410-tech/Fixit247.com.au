export const dynamic = 'force-dynamic';
import { createJob, getHomeownerJobs } from '@/lib/actions/job.actions';

export default async function HomeownerDashboard() {
  const jobs = await getHomeownerJobs();

  async function submit(formData: FormData) {
    'use server';
    await createJob({
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
      suburb: String(formData.get('suburb') || ''),
      trade: String(formData.get('trade') || '')
    });
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Homeowner Dashboard</h1>
      <form action={submit} className="grid gap-3 max-w-xl">
        <input name="title" placeholder="Job title" className="border p-2 rounded" required />
        <textarea name="description" placeholder="Describe the issue" className="border p-2 rounded" required />
        <input name="suburb" placeholder="Suburb" className="border p-2 rounded" required />
        <select name="trade" className="border p-2 rounded" required>
          <option value="">Select trade</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="locksmith">Locksmith</option>
        </select>
        <button className="bg-yellow-400 px-4 py-2 rounded font-semibold">Post Job</button>
      </form>

      <section>
        <h2 className="text-xl font-semibold">Your Jobs</h2>
        <ul className="space-y-2 mt-2">
          {jobs.map((j) => (
            <li key={j.id} className="border rounded p-3">{j.title} · {j.trade} · {j.suburb} · {j.status} · Claims: {j.claims.length}/5</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
