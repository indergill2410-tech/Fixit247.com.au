const points = [
  'Free to join — sign up in minutes',
  'Pick the jobs that suit you',
  'Direct messaging with homeowners',
  'Verified profiles build trust',
];

export default function HeroRight() {
  return (
    <aside className="relative z-10 self-end rounded-[2.25rem] bg-[#f3f3f3] p-8 text-[#1b1d22] shadow-[0_35px_70px_rgba(0,0,0,0.35)] md:p-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-5xl font-extrabold tracking-tight">Tradies join free</h2>
        <span className="rounded-full border border-[#e8c64b] bg-[#efe7c7] px-5 py-2 text-xl font-bold">100% FREE</span>
      </div>

      <p className="mt-4 text-4xl text-[#666]">Real Aussie jobs in your suburb. No credit card needed.</p>

      <ul className="mt-8 space-y-5">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-4 text-[2rem] text-[#2a2d33]">
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#efbd09] text-[#efbd09]">✓</span>
            {point}
          </li>
        ))}
      </ul>

      <button className="mt-10 w-full rounded-xl border border-[#efbd09] bg-[#111316] px-8 py-5 text-4xl font-bold text-[#ffcc00] transition hover:bg-[#1d2128]">
        Sign up free &nbsp; →
      </button>
      <p className="mt-4 text-center text-xl text-[#666]">
        Homeowner and tradie accounts are separate for a tailored experience.
      </p>
    </aside>
  );
}
