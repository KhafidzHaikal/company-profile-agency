'use client';

import { FaCode, FaTools, FaTachometerAlt, FaShieldAlt, FaDatabase, FaPuzzlePiece, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDetailPageProps {
  slug: string;
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const { t } = useLanguage();
  
  const services = {
    'website-development': {
      title: t('serviceDetail.development.title'),
      description: t('serviceDetail.development.description'),
      icon: FaCode,
      heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.development.fullDescription'),
      features: [
        t('serviceDetail.development.features.0'),
        t('serviceDetail.development.features.1'),
        t('serviceDetail.development.features.2'),
        t('serviceDetail.development.features.3'),
        t('serviceDetail.development.features.4'),
        t('serviceDetail.development.features.5')
      ],
      benefits: [
        t('serviceDetail.development.benefits.0'),
        t('serviceDetail.development.benefits.1'),
        t('serviceDetail.development.benefits.2'),
        t('serviceDetail.development.benefits.3')
      ],
      process: [
        t('serviceDetail.development.process.0'),
        t('serviceDetail.development.process.1'),
        t('serviceDetail.development.process.2'),
        t('serviceDetail.development.process.3')
      ]
    },
    'regular-maintenance': {
      title: t('serviceDetail.maintenance.title'),
      description: t('serviceDetail.maintenance.description'),
      icon: FaTools,
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.maintenance.fullDescription'),
      features: [
        t('serviceDetail.maintenance.features.0'),
        t('serviceDetail.maintenance.features.1'),
        t('serviceDetail.maintenance.features.2'),
        t('serviceDetail.maintenance.features.3'),
        t('serviceDetail.maintenance.features.4'),
        t('serviceDetail.maintenance.features.5')
      ],
      benefits: [
        t('serviceDetail.maintenance.benefits.0'),
        t('serviceDetail.maintenance.benefits.1'),
        t('serviceDetail.maintenance.benefits.2'),
        t('serviceDetail.maintenance.benefits.3')
      ],
      process: [
        t('serviceDetail.maintenance.process.0'),
        t('serviceDetail.maintenance.process.1'),
        t('serviceDetail.maintenance.process.2'),
        t('serviceDetail.maintenance.process.3')
      ]
    },
    'speed-optimization': {
      title: t('serviceDetail.optimization.title'),
      description: t('serviceDetail.optimization.description'),
      icon: FaTachometerAlt,
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.optimization.fullDescription'),
      features: [
        t('serviceDetail.optimization.features.0'),
        t('serviceDetail.optimization.features.1'),
        t('serviceDetail.optimization.features.2'),
        t('serviceDetail.optimization.features.3'),
        t('serviceDetail.optimization.features.4'),
        t('serviceDetail.optimization.features.5')
      ],
      benefits: [
        t('serviceDetail.optimization.benefits.0'),
        t('serviceDetail.optimization.benefits.1'),
        t('serviceDetail.optimization.benefits.2'),
        t('serviceDetail.optimization.benefits.3')
      ],
      process: [
        t('serviceDetail.optimization.process.0'),
        t('serviceDetail.optimization.process.1'),
        t('serviceDetail.optimization.process.2'),
        t('serviceDetail.optimization.process.3')
      ]
    },
    'website-security': {
      title: t('serviceDetail.security.title'),
      description: t('serviceDetail.security.description'),
      icon: FaShieldAlt,
      heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.security.fullDescription'),
      features: [
        t('serviceDetail.security.features.0'),
        t('serviceDetail.security.features.1'),
        t('serviceDetail.security.features.2'),
        t('serviceDetail.security.features.3'),
        t('serviceDetail.security.features.4'),
        t('serviceDetail.security.features.5')
      ],
      benefits: [
        t('serviceDetail.security.benefits.0'),
        t('serviceDetail.security.benefits.1'),
        t('serviceDetail.security.benefits.2'),
        t('serviceDetail.security.benefits.3')
      ],
      process: [
        t('serviceDetail.security.process.0'),
        t('serviceDetail.security.process.1'),
        t('serviceDetail.security.process.2'),
        t('serviceDetail.security.process.3')
      ]
    },
    'automatic-backup': {
      title: t('serviceDetail.backup.title'),
      description: t('serviceDetail.backup.description'),
      icon: FaDatabase,
      heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.backup.fullDescription'),
      features: [
        t('serviceDetail.backup.features.0'),
        t('serviceDetail.backup.features.1'),
        t('serviceDetail.backup.features.2'),
        t('serviceDetail.backup.features.3'),
        t('serviceDetail.backup.features.4'),
        t('serviceDetail.backup.features.5')
      ],
      benefits: [
        t('serviceDetail.backup.benefits.0'),
        t('serviceDetail.backup.benefits.1'),
        t('serviceDetail.backup.benefits.2'),
        t('serviceDetail.backup.benefits.3')
      ],
      process: [
        t('serviceDetail.backup.process.0'),
        t('serviceDetail.backup.process.1'),
        t('serviceDetail.backup.process.2'),
        t('serviceDetail.backup.process.3')
      ]
    },
    'plugin-integration': {
      title: t('serviceDetail.integration.title'),
      description: t('serviceDetail.integration.description'),
      icon: FaPuzzlePiece,
      heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      fullDescription: t('serviceDetail.integration.fullDescription'),
      features: [
        t('serviceDetail.integration.features.0'),
        t('serviceDetail.integration.features.1'),
        t('serviceDetail.integration.features.2'),
        t('serviceDetail.integration.features.3'),
        t('serviceDetail.integration.features.4'),
        t('serviceDetail.integration.features.5')
      ],
      benefits: [
        t('serviceDetail.integration.benefits.0'),
        t('serviceDetail.integration.benefits.1'),
        t('serviceDetail.integration.benefits.2'),
        t('serviceDetail.integration.benefits.3')
      ],
      process: [
        t('serviceDetail.integration.process.0'),
        t('serviceDetail.integration.process.1'),
        t('serviceDetail.integration.process.2'),
        t('serviceDetail.integration.process.3')
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link 
          href="/services"
          className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          {t('serviceDetail.backToServices')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-8">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                {t('serviceDetail.getStarted')}
              </button>
            </div>
            
            <div className="relative">
              <Image 
                src={service.heroImage}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('serviceDetail.whatsIncluded')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-zinc-800/50 p-4 rounded-xl">
                <FaCheck className="text-lime-400 flex-shrink-0" />
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('serviceDetail.keyBenefits')}
              </h2>
              
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('serviceDetail.ourProcess')}
              </h2>
              
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zinc-800 border-2 border-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 font-bold">{index + 1}</span>
                    </div>
                    <span className="text-white text-lg font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('serviceDetail.readyToStart')}
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            {t('serviceDetail.discussService')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              {t('serviceDetail.contactUs')}
            </button>
            <Link 
              href="/services"
              className="text-white hover:text-zinc-300 flex items-center justify-center space-x-2 px-8 py-4 border border-zinc-600 rounded-full hover:border-white transition-all duration-300"
            >
              <span>{t('serviceDetail.viewAllServices')}</span>
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}