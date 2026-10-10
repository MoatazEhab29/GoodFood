import { useEffect, useState } from 'react';
import { Timer, Users, Gift, ArrowRight } from 'lucide-react';

function useCountdown(targetHours: number) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + targetHours);

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ h: 0, m: 0, s: 0 });
        return;
      }
      setTime({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetHours]);

  return time;
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-charcoal-950/60 font-display text-3xl tabular-nums text-ember-400 sm:h-20 sm:w-20 sm:text-4xl">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="mt-2 text-xs font-bold uppercase tracking-widest text-stone-500">{label}</span>
    </div>
  );
}

const feastItems = [
  '4 Smash Burgers',
  '8 Crispy Tenders',
  '2 Loaded Fries',
  '4 Craft Shakes',
];

export default function SpecialDeals() {
  const time = useCountdown(5);

  return (
    <section id="deals" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-ember-500/20 bg-gradient-to-br from-charcoal-800 via-charcoal-800 to-charcoal-900 p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember-600/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold-500/10 blur-[100px]" />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Deal info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-600/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                <Timer className="h-3.5 w-3.5" />
                Limited Time Offer
              </div>

              <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Family Feast
                <span className="block bg-gradient-to-r from-ember-400 to-gold-400 bg-clip-text text-transparent">
                  Combo
                </span>
              </h2>

              <p className="mt-4 max-w-md text-stone-400">
                Feed the whole crew. Four smash burgers, eight crispy tenders, two loaded fries, and four craft shakes — all in one epic box.
              </p>

              {/* What's included */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {feastItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5"
                  >
                    <Gift className="h-4 w-4 flex-shrink-0 text-ember-400" />
                    <span className="text-sm font-semibold text-stone-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl text-white">$42</span>
                  <span className="text-lg font-semibold text-stone-500 line-through">$56</span>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                    Save 25%
                  </span>
                </div>
                <a
                  href="#order"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-ember-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  Grab This Deal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: Countdown + info card */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-charcoal-950/60 p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-stone-400">
                  <Users className="h-5 w-5 text-ember-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Serves 4–6</span>
                </div>

                <p className="mt-6 text-center text-sm font-semibold text-stone-400">
                  Offer ends in
                </p>

                <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
                  <TimeBox value={time.h} label="Hrs" />
                  <span className="font-display text-3xl text-stone-600">:</span>
                  <TimeBox value={time.m} label="Min" />
                  <span className="font-display text-3xl text-stone-600">:</span>
                  <TimeBox value={time.s} label="Sec" />
                </div>

                <div className="mt-6 rounded-2xl border border-gold-500/20 bg-gold-500/10 px-4 py-3 text-center">
                  <span className="text-sm font-semibold text-gold-300">
                    Also try our Lunch Special — any burger + fries + drink for $13
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
