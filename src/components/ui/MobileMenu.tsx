"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menuElement = document.querySelector('[data-mobile-menu]');
      const hamburgerButton = document.querySelector('[data-hamburger-button]');
      
      if (isOpen && menuElement && !menuElement.contains(target) && !hamburgerButton?.contains(target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 md:hidden" 
      style={{
        zIndex: 999999,
        isolation: 'isolate'
      }}
    >
      <div
        onClick={onClose}
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      />

      <div 
        className="absolute left-0 top-0 h-screen w-full max-w-[320px] bg-zinc-900 border-r border-zinc-700"
        style={{zIndex: 1}}
        data-mobile-menu
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded font-bold flex items-center justify-center text-sm">
              G
            </div>
            <div>
              <div className="font-bold text-white">GOROSEI</div>
              <div className="text-xs text-zinc-400">Digital Solutions</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={onClose}
              className="block py-3 px-4 text-white hover:text-purple-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 font-medium"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              className="block py-3 px-4 text-white hover:text-purple-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 font-medium"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/portfolio"
              onClick={onClose}
              className="block py-3 px-4 text-white hover:text-purple-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 font-medium"
            >
              {t("nav.portfolio")}
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block py-3 px-4 text-white hover:text-purple-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 font-medium"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/faq"
              onClick={onClose}
              className="block py-3 px-4 text-white hover:text-purple-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 font-medium"
            >
              {t("nav.faq")}
            </Link>
          </div>
        </nav>

        {/* Language Buttons */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage("id")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                language === "id"
                  ? "bg-white text-black"
                  : "border border-zinc-600 text-white hover:border-purple-400"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                language === "en"
                  ? "bg-white text-black"
                  : "border border-zinc-600 text-white hover:border-purple-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
