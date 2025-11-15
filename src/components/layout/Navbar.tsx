'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="w-10 h-10 bg-white text-black rounded font-bold flex items-center justify-center">
            CA
          </div>
          <div>
            <div className="font-bold">Creative Agency</div>
            <div className="text-sm text-zinc-400">Design the future</div>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <Link href="/services" className="hover:text-zinc-300">Services</Link>
          <Link href="/portfolio" className="hover:text-zinc-300">Portfolio</Link>
          <Link href="/about" className="hover:text-zinc-300">About</Link>
        </nav>

        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-zinc-600 rounded text-sm">ID</button>
          <button className="px-3 py-1 bg-white text-black rounded text-sm">EN</button>
        </div>
      </div>
    </header>
  );
}