'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HamburgerButton from '@/components/ui/HamburgerButton';
import MobileMenu from '@/components/ui/MobileMenu';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded font-bold flex items-center justify-center">
            G
          </div>
          <div>
            <div className="font-bold">GOROSEI</div>
            <div className="text-sm text-zinc-400">Digital Solutions</div>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-zinc-300">{t('nav.home')}</Link>
          <Link href="/services" className="hover:text-zinc-300">{t('nav.services')}</Link>
          <Link href="/portfolio" className="hover:text-zinc-300">{t('nav.portfolio')}</Link>
          <Link href="/about" className="hover:text-zinc-300">{t('nav.about')}</Link>
          <Link href="/faq" className="hover:text-zinc-300">{t('nav.faq')}</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                language === 'id' ? 'bg-white text-black' : 'border border-zinc-600 text-white hover:border-zinc-400'
              }`}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                language === 'en' ? 'bg-white text-black' : 'border border-zinc-600 text-white hover:border-zinc-400'
              }`}
            >
              EN
            </button>
          </div>
          
          <div data-hamburger-button>
            <HamburgerButton 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}