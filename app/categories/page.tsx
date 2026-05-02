import Header from '@/components/landing/Header';

const categories = ['Plumbing', 'Electrical', 'Locksmith', 'Roofing', 'Appliance Repair', 'Handyman'];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-extrabold text-yellow-400">Service categories</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat} className="rounded-xl border border-white/15 bg-white/5 p-5 text-xl font-semibold">{cat}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
