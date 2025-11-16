'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import { portfolioTestimonials } from '@/data/testimonials';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsPortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();



  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioTestimonials.length) % portfolioTestimonials.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('portfolioPage.clientSuccessStories')}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {t('portfolioPage.clientTestimonialDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Navigation & Stats */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('portfolioPage.provenResults')}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {t('portfolioPage.portfolioShowcase')}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div className="text-2xl font-bold text-lime-400 mb-2">$2M+</div>
                <div className="text-zinc-400 text-sm">{t('portfolioPage.metrics.revenueGenerated')}</div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div className="text-2xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-zinc-400 text-sm">{t('portfolioPage.metrics.clientSatisfaction')}</div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div className="text-2xl font-bold text-cyan-400 mb-2">150%</div>
                <div className="text-zinc-400 text-sm">{t('portfolioPage.metrics.avgROI')}</div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div className="text-2xl font-bold text-lime-400 mb-2">24/7</div>
                <div className="text-zinc-400 text-sm">{t('portfolioPage.metrics.supportAvailable')}</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center border border-zinc-700 hover:border-purple-400/50 transition-all duration-300"
              >
                <FaChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 relative overflow-hidden">
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-purple-400/20" />
              
              {/* Project Value Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {portfolioTestimonials[currentIndex].projectValue} Project
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-6 mt-12">
                {[...Array(portfolioTestimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-lime-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-zinc-300 text-lg leading-relaxed mb-6 relative z-10">
                "{portfolioTestimonials[currentIndex].review}"
              </blockquote>

              {/* Results Badge */}
              <div className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-4 mb-6">
                <div className="text-lime-400 font-semibold text-sm mb-1">{t('portfolioPage.projectResults')}:</div>
                <div className="text-white font-medium">{portfolioTestimonials[currentIndex].results}</div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src={portfolioTestimonials[currentIndex].avatar}
                  alt={portfolioTestimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {portfolioTestimonials[currentIndex].name}
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    {portfolioTestimonials[currentIndex].position}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    {portfolioTestimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {portfolioTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                      : 'bg-zinc-700 hover:bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('portfolioPage.readyToJoin')}
            </h3>
            <p className="text-zinc-300 mb-8">
              {t('portfolioPage.createMeasurableResults')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                {t('portfolioPage.getFreeConsultation')}
              </button>
              <button className="text-white hover:text-zinc-300 flex items-center justify-center space-x-2 px-8 py-4 border border-zinc-600 rounded-full hover:border-white transition-all duration-300">
                <span>{t('portfolioPage.viewAllCaseStudies')}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}