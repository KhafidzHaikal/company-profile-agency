'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PortfolioHeroSection from './sections/PortfolioHeroSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsPortfolioSection from './sections/TestimonialsPortfolioSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
        <PortfolioHeroSection />
        <ProjectsSection />
        <TestimonialsPortfolioSection />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}