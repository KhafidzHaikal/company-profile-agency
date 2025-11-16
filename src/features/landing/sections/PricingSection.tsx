/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const pricingPlans = [
    {
      name: "Basic",
      price: "50,000,000",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom website design",
        "Responsive layout",
        "Basic SEO optimization",
        "Contact form integration",
        "3 months support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "50,000,000",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Everything in Basic",
        "E-commerce functionality",
        "Advanced SEO features",
        "Analytics integration",
        "6 months support",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "50,000,000",
      description: "Comprehensive solution for large organizations",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Advanced security",
        "Priority support",
        "12 months support",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: "SEO Optimization",
      price: "50,000,000",
      description: "Boost your search engine rankings"
    },
    {
      name: "Maintenance Enterprise",
      price: "50,000,000", 
      description: "Ongoing website maintenance and updates"
    },
    {
      name: "Migration Enterprise",
      price: "50,000,000",
      description: "Seamless website migration services"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-lime-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            {t('pricing.subtitle')}
          </p>
          <p className="text-zinc-300 text-base">
            {t('pricing.description')}
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              
              <div className={`bg-zinc-800 rounded-2xl p-8 border transition-all duration-300 h-full ${
                plan.popular 
                  ? 'border-purple-400/50 shadow-lg shadow-purple-500/20' 
                  : 'border-zinc-700 hover:border-purple-400/30'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">Rp {plan.price}</span>
                    <span className="text-zinc-400 text-sm ml-2">/ project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-zinc-700 text-white hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50'
                }`}>
                  {t('pricing.getStarted')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="border-t border-zinc-800 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('pricing.additionalServices')}</h3>
            <p className="text-zinc-400 text-lg">{t('pricing.additionalDescription')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 hover:border-purple-400/30 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">Rp {service.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300">
                    {t('pricing.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 mb-6">{t('pricing.customSolution')}</p>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            {t('pricing.contactSales')}
          </button>
        </div>
      </div>
    </section>
  );
}