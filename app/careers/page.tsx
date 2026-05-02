import Header from '@/components/landing/Header';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-5xl font-extrabold text-yellow-400">We are hiring</h1>
        <p className="mt-4 text-xl text-zinc-300">Join our mission to make urgent repairs easier across Australia.</p>
        <a href="mailto:admin@fixit247.com.au" className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-900">Apply via email</a>
      </section>
    </main>
  );
}
