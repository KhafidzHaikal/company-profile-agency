'use client';

import { useState } from 'react';
import { faqData, faqCategories, FAQItem } from '@/data/faq';
import { FaChevronDown, FaChevronUp, FaSearch, FaQuestionCircle } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();
  
  // Get translated FAQ data
  const getTranslatedFAQs = () => {
    return faqData.map(faq => ({
      ...faq,
      question: t(`faqData.${faq.id}.question`),
      answer: t(`faqData.${faq.id}.answer`)
    }));
  };

  const translatedFAQs = getTranslatedFAQs();

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = translatedFAQs.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <FaQuestionCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          {/* Search and Filter */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative mb-8">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('faq.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {t('faq.categories.all')}
              </button>
              {Object.entries(faqCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {t(`faq.categories.${key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-zinc-400 text-lg">{t('faq.noResults')}</p>
              </div>
            ) : (
              filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-zinc-800 transition-colors duration-300"
                  >
                    <span className="text-white font-medium text-lg pr-4">{item.question}</span>
                    {openItems.includes(item.id) ? (
                      <FaChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-zinc-700 pt-4">
                        <p className="text-zinc-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('faq.stillHaveQuestions')}
              </h3>
              <p className="text-zinc-400 mb-6">
                {t('faq.contactDescription')}
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                {t('faq.freeConsultation')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}