import Link from 'next/link';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
  { label: 'We are hiring', href: '#careers' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e2026]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-[#ffcc00]">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ffcc00] text-[#1e2026] shadow-[0_0_20px_rgba(255,204,0,0.35)]">
            <span aria-hidden>🛠️</span>
          </span>
          <span className="text-4xl font-extrabold tracking-tight">Fixit 24/7</span>
        </Link>

        <nav className="order-3 flex w-full flex-wrap justify-center gap-x-8 gap-y-2 text-2xl font-semibold text-[#e3b90f] lg:order-none lg:w-auto">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-[#ffcc00]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-2xl font-semibold text-[#ffcc00]">
          <Link href="/login" className="px-2 py-1 transition-colors hover:text-white">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-[#ffcc00] px-6 py-3 font-bold text-[#17191f] transition hover:bg-[#ffd633]"
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}
