export default function HeroLeft() {
  return (
    <div className="relative z-10">
      <p className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xl font-semibold text-[#ffcc00]">
        <span className="h-4 w-4 rounded-full bg-[#ffcc00]" />
        Urgent Fix 24/7 — tradies online now
      </p>

      <h1 className="mt-10 text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
        Emergency
        <br />
        repairs,
        <br />
        <span className="text-[#ffcc00]">fixed fast.</span>
      </h1>

      <p className="mt-10 max-w-3xl text-3xl leading-tight text-[#ffcc00]">
        Plumbing, electrical, locksmith and more — get matched with verified local tradies, day or
        night, anywhere in Australia.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_18px_40px_rgba(7,8,12,0.45)]">
        <label className="flex flex-wrap items-center gap-4 p-2 pl-6" htmlFor="suburb">
          <span className="text-2xl text-[#ffcc00]" aria-hidden>
            📍
          </span>
          <span className="text-4xl font-semibold text-white/75">Your suburb</span>
          <input
            id="suburb"
            name="suburb"
            type="text"
            placeholder="e.g. Bondi, 2026"
            className="min-w-[220px] flex-1 bg-transparent text-4xl text-white/70 placeholder:text-white/45 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-2xl bg-[#ffcc00] px-10 py-5 text-3xl font-bold text-[#151820] transition hover:bg-[#ffd633]"
          >
            Find tradies
          </button>
        </label>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="rounded-2xl bg-[#ffcc00] px-9 py-5 text-3xl font-bold text-[#17191f] shadow-[0_10px_30px_rgba(255,204,0,0.35)] transition hover:bg-[#ffd633]">
          Create account &amp; post a job &nbsp; →
        </button>
        <button className="rounded-2xl border border-white/60 bg-white/10 px-9 py-5 text-3xl font-bold text-white transition hover:bg-white/20">
          Tradies — join FREE
        </button>
      </div>
    </div>
  );
}
