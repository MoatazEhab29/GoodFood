import { Flame, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const deliveryPartners = [
  { name: 'UberEats', initials: 'UE' },
  { name: 'Talabat', initials: 'TB' },
  { name: 'DoorDash', initials: 'DD' },
];

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Special Offers', href: '#deals' },
  { label: 'Location & Hours', href: '#location' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-charcoal-950 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Delivery partners banner */}
        <div className="mb-12 flex flex-col items-center gap-6 rounded-3xl border border-white/5 bg-charcoal-900/60 p-8 lg:flex-row lg:justify-between">
          <div>
            <h3 className="font-display text-2xl text-white">Prefer a delivery app?</h3>
            <p className="mt-2 text-sm text-stone-400">
              We're partnered with all your favorites. Search "Urban Bites" and get it delivered.
            </p>
          </div>
          <div className="flex gap-4">
            {deliveryPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all hover:scale-105 hover:border-ember-500/30"
              >
                <span className="font-display text-lg text-ember-400">{partner.initials}</span>
                <span className="mt-0.5 text-[9px] font-semibold text-stone-500">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 pb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-700">
                <Flame className="h-6 w-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl text-white tracking-wide">URBAN BITES</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ember-500">
                  Burgers & Chicken
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Locally crafted smash burgers and crispy fried chicken. Fresh, bold, and always made to order.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-400 transition-all hover:scale-110 hover:border-ember-500/30 hover:bg-ember-500/10 hover:text-ember-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-display text-sm uppercase tracking-widest text-stone-300">Explore</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-ember-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#order"
                  className="text-sm text-stone-500 transition-colors hover:text-ember-400"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="font-display text-sm uppercase tracking-widest text-stone-300">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Phone className="h-4 w-4 flex-shrink-0 text-ember-400" />
                <a href="tel:+18005550199" className="transition-colors hover:text-ember-400">
                  (800) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Mail className="h-4 w-4 flex-shrink-0 text-ember-400" />
                <a href="mailto:hello@urbanbites.co" className="transition-colors hover:text-ember-400">
                  hello@urbanbites.co
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <MapPin className="h-4 w-4 flex-shrink-0 text-ember-400" />
                142 Grill Street, Downtown
              </li>
            </ul>
          </div>
        </div>

        {/* Allergy disclaimer */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-stone-600">
            <span className="font-bold text-stone-500">Allergy Notice:</span> Our food is prepared in
            kitchens that handle wheat, dairy, eggs, soy, peanuts, tree nuts, fish, and shellfish.
            While we take precautions, cross-contamination may occur. Please inform our staff of any
            allergies before ordering. Nutritional information is approximate and may vary.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Urban Bites. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-stone-600 transition-colors hover:text-ember-400">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-stone-600 transition-colors hover:text-ember-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
