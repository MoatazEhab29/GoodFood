import { Clock, MapPin, Phone, Navigation, Bike } from 'lucide-react';

const hours = [
  { day: 'Sunday', time: '12 PM – 2 AM' },
  { day: 'Monday', time: '12 PM – 2 AM' },
  { day: 'Tuesday', time: '12 PM – 2 AM' },
  { day: 'Wednesday', time: '12 PM – 2 AM' },
  { day: 'Thursday', time: '12 PM – 2 AM' },
  { day: 'Friday', time: '12 PM – 3 AM' },
  { day: 'Saturday', time: '12 PM – 3 AM' },
];

const deliveryZones = [
  'Downtown',
  'Arts District',
  'Riverside',
  'Midtown',
  'Old Town',
  'Harbor Side',
];

export default function Location() {
  const today = new Date().getDay();

  return (
    <section id="location" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ember-400">
            Find Us
          </span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Location, Hours & Contact
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: Info cards */}
          <div className="flex flex-col gap-6">
            {/* Hours */}
            <div className="rounded-3xl border border-white/5 bg-charcoal-800/60 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/15">
                  <Clock className="h-5 w-5 text-ember-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">Opening Hours</h3>
                  <p className="text-sm text-stone-500">Open Daily 12 PM – 2 AM</p>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                {hours.map((entry, idx) => {
                  const isActive = idx === today;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-ember-500/10 ring-1 ring-inset ring-ember-500/20'
                          : ''
                      }`}
                    >
                      <span className={`font-semibold ${isActive ? 'text-ember-400' : 'text-stone-400'}`}>
                        {entry.day}
                        {isActive && <span className="ml-2 text-[10px] uppercase tracking-wider">Today</span>}
                      </span>
                      <span className={isActive ? 'font-bold text-white' : 'font-medium text-stone-500'}>
                        {entry.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address + Contact */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-charcoal-800/60 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/15">
                  <MapPin className="h-5 w-5 text-ember-400" />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">Visit Us</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  142 Grill Street<br />
                  Downtown Food District<br />
                  Open since 2019
                </p>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Delivery Zone
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {deliveryZones.map((zone) => (
                      <span
                        key={zone}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300"
                      >
                        <Bike className="h-3 w-3 text-ember-400" />
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-charcoal-800/60 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/15">
                  <Phone className="h-5 w-5 text-ember-400" />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">Order by Phone</h3>
                <a
                  href="tel:+18005550199"
                  className="mt-2 block font-display text-2xl text-ember-400 transition-colors hover:text-ember-300"
                >
                  (800) 555-0199
                </a>
                <p className="mt-2 text-sm text-stone-400">
                  Call ahead for pickup or large group orders. We'll have it hot and ready.
                </p>
                <a
                  href="tel:+18005550199"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all hover:border-ember-500/30 hover:bg-ember-500/10"
                >
                  <Phone className="h-4 w-4 text-ember-400" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Right: Mock Map */}
          <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/60">
            {/* Map grid background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Roads */}
            <div className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 bg-stone-700/40" />
            <div className="absolute bottom-0 left-1/3 top-0 w-3 bg-stone-700/40" />
            <div className="absolute left-0 right-0 top-1/4 h-2 bg-stone-700/30" />
            <div className="absolute bottom-0 right-1/4 top-0 w-2 bg-stone-700/30" />

            {/* Blocks */}
            <div className="absolute left-4 top-4 h-20 w-28 rounded-lg bg-stone-800/40" />
            <div className="absolute right-4 top-4 h-16 w-24 rounded-lg bg-stone-800/40" />
            <div className="absolute bottom-4 left-4 h-24 w-32 rounded-lg bg-stone-800/40" />
            <div className="absolute bottom-4 right-4 h-20 w-28 rounded-lg bg-stone-800/40" />

            {/* Park / Green */}
            <div className="absolute right-1/3 top-1/4 h-16 w-20 rounded-lg bg-green-900/20" />

            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex flex-col items-center">
                <div className="absolute -inset-4 animate-ping rounded-full bg-ember-500/20" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-ember-700 shadow-2xl shadow-ember-500/40 ring-4 ring-charcoal-950">
                  <MapPin className="h-7 w-7 text-white" fill="white" />
                </div>
                <div className="mt-3 rounded-xl border border-white/10 bg-charcoal-900/90 px-4 py-2 backdrop-blur-md">
                  <p className="font-display text-sm text-white">Urban Bites</p>
                  <p className="text-xs text-stone-400">142 Grill Street</p>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="#location"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-charcoal-900/90 px-5 py-3 text-sm font-bold text-white shadow-xl backdrop-blur-md transition-all hover:scale-105"
            >
              <Navigation className="h-4 w-4 text-ember-400" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
