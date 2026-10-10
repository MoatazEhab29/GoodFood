import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/menuData';

export default function Reviews() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
            Loved by Locals
          </span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            What Our Foodies Are Saying
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-300">4.9 / 5 · 2,400+ reviews</span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-charcoal-800/60 p-7 transition-all duration-300 hover:border-ember-500/20 hover:bg-charcoal-800"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-8 w-8 text-ember-500/30" fill="currentColor" />
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>

              <p className="flex-1 text-[15px] leading-relaxed text-stone-300">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-ember-700 font-display text-sm text-white">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-xs text-stone-500">Google Review · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
