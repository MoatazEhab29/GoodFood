import { useEffect, useState } from 'react';
import { Menu, X, Flame, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Special Offers', href: '#deals' },
  { label: 'Location & Hours', href: '#location' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-700 transition-transform group-hover:scale-110">
            <Flame className="h-6 w-6 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl text-white tracking-wide">URBAN BITES</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ember-500">
              Burgers & Chicken
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-stone-300 transition-colors hover:text-ember-400 group"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-ember-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-ember-500/25 transition-all hover:shadow-ember-500/40 hover:scale-105 active:scale-95 sm:flex"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-charcoal-900/95 p-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-300 transition-colors hover:bg-white/5 hover:text-ember-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ember-500 to-ember-600 px-5 py-3 text-sm font-bold text-white"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
