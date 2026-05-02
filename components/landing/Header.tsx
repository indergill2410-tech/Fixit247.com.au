'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Categories', href: '/#categories' },
  { label: 'About', href: '/#about' },
  { label: 'We are hiring', href: '/careers' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-yellow-300/80 bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-500/20">🔧</span>
          <span className="text-3xl font-extrabold tracking-tight text-yellow-400">Fixit 24/7</span>
        </Link>

        <nav className="hidden items-center gap-10 text-xl font-medium text-yellow-400 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-yellow-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="px-4 py-2 text-lg font-semibold text-yellow-300 transition hover:text-yellow-200">Sign in</Link>
          <Link href="/signup" className="rounded-xl bg-yellow-400 px-6 py-2.5 text-lg font-bold text-zinc-900 transition hover:bg-yellow-300">Create account</Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-white/20 px-3 py-2 text-yellow-300 lg:hidden" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-yellow-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1">
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="py-1">Sign in</Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="rounded-lg bg-yellow-400 px-4 py-2 font-bold text-zinc-900 text-center">Create account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
