'use client';

import { portfolioStats } from '@/data/stats';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('portfolioPage.title')}
          </h1>
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12">
            {t('portfolioPage.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              {t('portfolioPage.startProject')}
            </button>
            <button className="text-white hover:text-zinc-300 flex items-center justify-center space-x-2 px-8 py-4 border border-zinc-600 rounded-full hover:border-white transition-all duration-300">
              <span>{t('portfolioPage.viewCaseStudies')}</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}