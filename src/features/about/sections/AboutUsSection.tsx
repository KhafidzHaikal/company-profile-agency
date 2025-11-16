'use client';

import { FaUsers, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { aboutStats } from '@/data/stats';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutUsSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: FaLightbulb,
      title: t('aboutPage.values.innovation.title'),
      description: t('aboutPage.values.innovation.description')
    },
    {
      icon: FaUsers,
      title: t('aboutPage.values.collaboration.title'),
      description: t('aboutPage.values.collaboration.description')
    },
    {
      icon: FaRocket,
      title: t('aboutPage.values.excellence.title'),
      description: t('aboutPage.values.excellence.description')
    },
    {
      icon: FaHeart,
      title: t('aboutPage.values.passion.title'),
      description: t('aboutPage.values.passion.description')
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('aboutPage.title')}
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutPage.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t('aboutPage.mainTitle')}
            </h2>
            
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                {t('aboutPage.description1')}
              </p>
              
              <p>
                {t('aboutPage.description2')}
              </p>
              
              <p>
                {t('aboutPage.description3')}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our Team" 
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lime-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {aboutStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('aboutPage.ourValues')}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {t('aboutPage.valuesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 hover:border-purple-400/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}