'use client';

import { FaCode, FaTools, FaTachometerAlt, FaShieldAlt, FaDatabase, FaPuzzlePiece } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'website-development',
      title: t('servicesPage.services.development.title'),
      description: t('servicesPage.services.development.description'),
      icon: FaCode,
      fullDescription: t('servicesPage.services.development.fullDescription'),
      features: [
        t('servicesPage.services.development.features.0'),
        t('servicesPage.services.development.features.1'),
        t('servicesPage.services.development.features.2'),
        t('servicesPage.services.development.features.3')
      ]
    },
    {
      id: 'regular-maintenance',
      title: t('servicesPage.services.maintenance.title'),
      description: t('servicesPage.services.maintenance.description'),
      icon: FaTools,
      fullDescription: t('servicesPage.services.maintenance.fullDescription'),
      features: [
        t('servicesPage.services.maintenance.features.0'),
        t('servicesPage.services.maintenance.features.1'),
        t('servicesPage.services.maintenance.features.2'),
        t('servicesPage.services.maintenance.features.3')
      ]
    },
    {
      id: 'speed-optimization',
      title: t('servicesPage.services.optimization.title'),
      description: t('servicesPage.services.optimization.description'),
      icon: FaTachometerAlt,
      fullDescription: t('servicesPage.services.optimization.fullDescription'),
      features: [
        t('servicesPage.services.optimization.features.0'),
        t('servicesPage.services.optimization.features.1'),
        t('servicesPage.services.optimization.features.2'),
        t('servicesPage.services.optimization.features.3')
      ]
    },
    {
      id: 'website-security',
      title: t('servicesPage.services.security.title'),
      description: t('servicesPage.services.security.description'),
      icon: FaShieldAlt,
      fullDescription: t('servicesPage.services.security.fullDescription'),
      features: [
        t('servicesPage.services.security.features.0'),
        t('servicesPage.services.security.features.1'),
        t('servicesPage.services.security.features.2'),
        t('servicesPage.services.security.features.3')
      ]
    },
    {
      id: 'automatic-backup',
      title: t('servicesPage.services.backup.title'),
      description: t('servicesPage.services.backup.description'),
      icon: FaDatabase,
      fullDescription: t('servicesPage.services.backup.fullDescription'),
      features: [
        t('servicesPage.services.backup.features.0'),
        t('servicesPage.services.backup.features.1'),
        t('servicesPage.services.backup.features.2'),
        t('servicesPage.services.backup.features.3')
      ]
    },
    {
      id: 'plugin-integration',
      title: t('servicesPage.services.integration.title'),
      description: t('servicesPage.services.integration.description'),
      icon: FaPuzzlePiece,
      fullDescription: t('servicesPage.services.integration.fullDescription'),
      features: [
        t('servicesPage.services.integration.features.0'),
        t('servicesPage.services.integration.features.1'),
        t('servicesPage.services.integration.features.2'),
        t('servicesPage.services.integration.features.3')
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('servicesPage.title')}
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            {t('servicesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zinc-300">
                        <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center bg-linear-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {t('servicesPage.learnMore')}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}