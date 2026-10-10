import { Flame, Clock, Star, ArrowRight, UtensilsCrossed, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34407509/pexels-photo-34407509.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Juicy double cheeseburger with bacon"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
      </div>

      {/* Decorative glows */}
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-ember-600/20 blur-[120px]" />
      <div className="absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-gold-500/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div
            className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-4 py-2 backdrop-blur-sm"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-200">
              4.9 · 2,400+ Google Reviews
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl leading-[1.05] text-white text-balance animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Juicy Burgers & Crispy Chicken,
            <span className="block bg-gradient-to-r from-ember-400 via-ember-500 to-gold-400 bg-clip-text text-transparent">
              Delivered Fast.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300 animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            Fresh, never-frozen ingredients. Bold flavors made to order. Hot at
            your door in <span className="font-bold text-ember-400">30 minutes or less</span>.
          </p>

          {/* Feature pills */}
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.45s', opacity: 0 }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Clock className="h-4 w-4 text-ember-400" />
              <span className="text-sm font-semibold text-stone-200">30-min delivery</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Flame className="h-4 w-4 text-ember-400" />
              <span className="text-sm font-semibold text-stone-200">Fresh, never frozen</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <UtensilsCrossed className="h-4 w-4 text-ember-400" />
              <span className="text-sm font-semibold text-stone-200">Made to order</span>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-ember-500/25 transition-all hover:scale-105 hover:shadow-ember-500/40 active:scale-95"
            >
              View Menu
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#order"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-ember-500/50 hover:bg-ember-500/10 active:scale-95"
            >
              <Truck className="h-5 w-5 text-ember-400" />
              Order Delivery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-stone-600 p-1.5">
          <div className="h-2 w-1 animate-bounce-slow rounded-full bg-ember-500" />
        </div>
      </div>
    </section>
  );
}
