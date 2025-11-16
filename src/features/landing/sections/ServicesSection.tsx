'use client';

import { FaCode, FaTools, FaTachometerAlt, FaShieldAlt, FaDatabase, FaPuzzlePiece } from 'react-icons/fa';
import Link from 'next/link';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  
  const iconMap = {
    'website-development': FaCode,
    'regular-maintenance': FaTools,
    'speed-optimization': FaTachometerAlt,
    'website-security': FaShieldAlt,
    'automatic-backup': FaDatabase,
    'plugin-integration': FaPuzzlePiece,
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('services.title')}
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Central 3D Cube */}
            <div className="relative z-10">
              <div className="w-64 h-64 relative transform-gpu perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 relative">
                  <div className="absolute inset-4 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                  <div className="absolute inset-8 bg-white/20 rounded-xl backdrop-blur-md"></div>
                  <div className="absolute inset-12 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Service Items Positioned Around Cube */}
            {services.map((service, index) => {
              const IconComponent = iconMap[service.id as keyof typeof iconMap];
              const positions = [
                "top-8 left-16",      // Website Development
                "top-8 right-16",     // Regular Maintenance  
                "top-1/2 -translate-y-1/2 left-8",   // Speed Optimization
                "top-1/2 -translate-y-1/2 right-8",  // Website Security
                "bottom-8 left-16",   // Automatic Backup
                "bottom-8 right-16"   // Plugin Integration
              ];
              
              return (
                <div
                  key={index}
                  className={`absolute ${positions[index]} group cursor-pointer z-20`}
                >
                  <div className="bg-zinc-800/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-zinc-700/50 hover:border-purple-400/50 hover:bg-zinc-700/90 transition-all duration-300 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white text-base font-medium group-hover:text-purple-300 transition-colors duration-300">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed ml-13 mb-3">
                      {service.description}
                    </p>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium ml-13 inline-flex items-center transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Central Cube for Mobile */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl shadow-2xl transform rotate-12 relative">
                <div className="absolute inset-3 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="absolute inset-6 bg-white/20 rounded-xl backdrop-blur-md"></div>
                <div className="absolute inset-9 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Services Grid for Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.id as keyof typeof iconMap];
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-zinc-800/90 backdrop-blur-md rounded-2xl px-6 py-5 border border-zinc-700/50 hover:border-purple-400/50 hover:bg-zinc-700/90 transition-all duration-300 shadow-lg">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-lg font-medium group-hover:text-purple-300 transition-colors duration-300">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t('services.benefits.title')}
            </h3>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
              {t('services.benefits.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">⏰</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('services.benefits.onTime')}</h4>
                <p className="text-zinc-400 text-sm">{t('services.benefits.onTimeDesc')}</p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">🛡️</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('services.benefits.security')}</h4>
                <p className="text-zinc-400 text-sm">{t('services.benefits.securityDesc')}</p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('services.benefits.scalable')}</h4>
                <p className="text-zinc-400 text-sm">{t('services.benefits.scalableDesc')}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>{t('services.benefits.experience')}</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('services.benefits.ux')}</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span>{t('services.benefits.support')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}