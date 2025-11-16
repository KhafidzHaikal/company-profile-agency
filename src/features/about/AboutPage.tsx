'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutUsSection from './sections/AboutUsSection';
import GallerySection from './sections/GallerySection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
        <AboutUsSection />
        <GallerySection />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}