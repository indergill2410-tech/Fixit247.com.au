export default function TrustBar() {
  return (
    <>
      <section id="how-it-works" className="bg-[#121a27] py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-yellow-400">Step 1</p>
            <h3 className="mt-2 text-2xl font-bold">Post your repair</h3>
            <p className="mt-2 text-zinc-300">Describe the issue, suburb, urgency, and preferred timing in under 2 minutes.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-yellow-400">Step 2</p>
            <h3 className="mt-2 text-2xl font-bold">Get matched fast</h3>
            <p className="mt-2 text-zinc-300">Qualified tradies receive instant in-app notifications and can claim your job.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-yellow-400">Step 3</p>
            <h3 className="mt-2 text-2xl font-bold">Track every step</h3>
            <p className="mt-2 text-zinc-300">Follow progress from posted to completed with full status visibility.</p>
          </article>
        </div>
      </section>

      <section id="categories" className="bg-zinc-950 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-yellow-400">Popular categories</h2>
          <p className="mt-2 text-zinc-300">Plumbing · Electrical · Locksmith · Aircon · Appliance repair · Roofing</p>
        </div>
      </section>

      <section id="about" className="bg-[#151922] py-10 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-yellow-400">About Fixit 24/7</h2>
          <p className="mt-2 max-w-4xl text-zinc-300">We are an Australia-focused home services marketplace helping homeowners find trusted local tradies faster while giving tradies free access to quality job leads.</p>
        </div>
      </section>
    </>
  );
}
