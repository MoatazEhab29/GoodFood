import { useState } from 'react';
import { Plus, Flame, Star, Zap, Crown, Check } from 'lucide-react';
import { categories, type CategoryId, type MenuItem, type Badge } from '@/data/menuData';

const badgeStyles: Record<Badge, { bg: string; text: string; icon: typeof Flame }> = {
  Bestseller: { bg: 'bg-ember-500', text: 'text-white', icon: Star },
  Spicy: { bg: 'bg-red-600', text: 'text-white', icon: Flame },
  New: { bg: 'bg-green-600', text: 'text-white', icon: Zap },
  "Chef's Pick": { bg: 'bg-gold-500', text: 'charcoal-950', icon: Crown },
};

function MenuCard({ item, onAdd }: { item: MenuItem; onAdd: (name: string) => void }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/80 transition-all duration-300 hover:border-ember-500/30 hover:bg-charcoal-800">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />

        {/* Badges */}
        {item.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {item.badges.map((badge) => {
              const style = badgeStyles[badge];
              const Icon = style.icon;
              return (
                <span
                  key={badge}
                  className={`inline-flex items-center gap-1 rounded-full ${style.bg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${style.text} shadow-lg backdrop-blur-sm`}
                >
                  <Icon className="h-3 w-3" fill="currentColor" />
                  {badge}
                </span>
              );
            })}
          </div>
        )}

        {/* Calories */}
        <span className="absolute right-3 top-3 rounded-full bg-charcoal-950/80 px-2.5 py-1 text-[10px] font-semibold text-stone-400 backdrop-blur-sm">
          {item.calories} cal
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-white tracking-wide">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-400">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-2xl text-ember-400">${item.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(item.name)}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-ember-500/10 px-4 py-2.5 text-sm font-bold text-ember-400 ring-1 ring-inset ring-ember-500/20 transition-all hover:bg-ember-500 hover:text-white active:scale-95"
          >
            <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('burgers');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const activeCat = categories.find((c) => c.id === activeCategory)!;

  const handleAdd = (name: string) => {
    setAddedItem(name);
    window.setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section id="menu" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ember-400">
            Our Menu
          </span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Fan Favorites, Made Fresh
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-stone-400">
            Every item is crafted to order with locally sourced ingredients. Pick a category and build your order.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="flex gap-2 rounded-2xl border border-white/10 bg-charcoal-800/60 p-2 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-ember-500 to-ember-600 text-white shadow-lg shadow-ember-500/20'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div
          key={activeCategory}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {activeCat.items.map((item, idx) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${idx * 0.08}s`, opacity: 0 }}
            >
              <MenuCard item={item} onAdd={handleAdd} />
            </div>
          ))}
        </div>

        {/* Toast notification */}
        <div
          className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
            addedItem
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-16 opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-charcoal-800 px-5 py-3.5 shadow-2xl backdrop-blur-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <Check className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-sm font-semibold text-white">
              {addedItem} added to your order
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
