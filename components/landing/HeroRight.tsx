import Link from 'next/link';

const points = [
  'Free to join — sign up in minutes',
  'Pick the jobs that suit you',
  'Direct messaging with homeowners',
  'Verified profiles build trust',
];

export default function HeroRight() {
  return (
    <aside className="rounded-[2rem] bg-zinc-100 p-8 text-zinc-900 shadow-2xl shadow-black/30 lg:p-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-5xl font-black tracking-tight">Tradies join free</h2>
        <span className="rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-2xl font-bold">100% FREE</span>
      </div>
      <p className="mt-4 text-4xl leading-snug text-zinc-600">Real Aussie jobs in your suburb. No credit card needed.</p>

      <ul className="mt-8 space-y-4">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-4 text-4xl text-zinc-800">
            <span className="text-yellow-500">◉</span>
            {point}
          </li>
        ))}
      </ul>

      <Link
        href="/signup?role=TRADIE"
        className="mt-8 inline-flex w-full items-center justify-center gap-4 rounded-xl bg-zinc-900 px-6 py-4 text-4xl font-bold text-yellow-400"
      >
        Sign up free →
      </Link>

      <p className="mt-4 text-center text-2xl text-zinc-500">Homeowner and tradie accounts are separate for a tailored experience.</p>
    </aside>
  );
}
