import Link from 'next/link';

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-end pb-4">
      <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xl font-semibold text-yellow-300">
        <span className="mr-3 text-2xl">●</span>Urgent Fix 24/7 — tradies online now
      </p>

      <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
        Emergency
        <br />
        repairs,
        <br />
        <span className="text-yellow-400">fixed fast.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-3xl leading-snug text-yellow-300/95">
        Plumbing, electrical, locksmith and more — get matched with verified local tradies, day or night, anywhere in Australia.
      </p>

      <form action="/categories" className="mt-10 flex max-w-4xl items-center rounded-2xl border border-white/20 bg-slate-700/35 p-2 backdrop-blur">
        <div className="flex flex-1 items-center gap-3 px-4 text-zinc-100">
          <span className="text-yellow-400">📍</span>
          <label htmlFor="suburb" className="text-3xl font-semibold">Your suburb</label>
          <input id="suburb" name="suburb" placeholder="e.g. Bondi, 2026" className="w-full bg-transparent text-3xl text-zinc-300 outline-none" />
        </div>
        <button type="submit" className="rounded-xl bg-yellow-400 px-8 py-4 text-3xl font-bold text-zinc-900 hover:bg-yellow-300">Find tradies</button>
      </form>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/signup?role=homeowner" className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 text-3xl font-bold text-zinc-900">
          Create account & post a job →
        </Link>
        <Link href="/signup?role=tradie" className="rounded-xl border border-white/30 bg-slate-800/45 px-7 py-4 text-3xl font-bold text-white">
          Tradies — join FREE
        </Link>
      </div>
    </div>
  );
}
