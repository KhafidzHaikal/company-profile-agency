import LandingPage from '@/features/landing/LandingPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}