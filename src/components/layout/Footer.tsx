'use client';

import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const footerSections = [
    {
      title: t('footer.sections.services.title'),
      links: [
        { text: t('footer.sections.services.links.development'), href: '/services' },
        { text: t('footer.sections.services.links.maintenance'), href: '/services' },
        { text: t('footer.sections.services.links.optimization'), href: '/services' },
        { text: t('footer.sections.services.links.security'), href: '/services' }
      ]
    },
    {
      title: t('footer.sections.company.title'),
      links: [
        { text: t('footer.sections.company.links.about'), href: '/about' },
        { text: t('footer.sections.company.links.portfolio'), href: '/portfolio' },
        { text: t('footer.sections.company.links.services'), href: '/services' },
        { text: t('footer.sections.company.links.faq'), href: '/faq' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:contact@gorosei.com", label: "Email" }
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:max-w-sm">
            <Link href="/" className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded font-bold flex items-center justify-center">
                G
              </div>
              <div>
                <div className="font-bold text-white text-lg">{t('footer.company')}</div>
                <div className="text-sm text-zinc-400">{t('footer.tagline')}</div>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-zinc-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-zinc-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links - Services and Company side by side */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white text-sm transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zinc-400">
              <span>© GOROSEI, 2024. {t('footer.allRightsReserved')}</span>
              <a href="mailto:contact@gorosei.com" className="hover:text-white transition-colors duration-300">
                contact@gorosei.com
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors duration-300">
                {t('footer.backToTop')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}