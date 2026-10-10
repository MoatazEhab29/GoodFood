import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import SpecialDeals from '@/components/SpecialDeals';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-950 text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <SpecialDeals />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
