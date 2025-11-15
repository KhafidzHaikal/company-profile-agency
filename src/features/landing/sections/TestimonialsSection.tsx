'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);



  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-lime-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Our true winning intention came from all of our clients honest word of our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                services
              </span>
            </h2>
            
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
              <div className="absolute top-6 right-6 text-6xl text-lime-400/20 font-serif">"</div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-lime-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-zinc-300 text-lg leading-relaxed mb-8 relative z-10">
                {testimonials[currentIndex].review}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
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
      </div>
    </section>
  );
}