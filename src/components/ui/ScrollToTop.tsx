'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}