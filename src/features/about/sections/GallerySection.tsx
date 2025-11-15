'use client';

import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);



  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Take a glimpse into our creative workspace, team culture, and the passion that drives our work every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-purple-400 font-medium mb-1">
                    {image.category}
                  </div>
                  <div className="text-white font-semibold">
                    {image.alt}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch and let's discuss how we can bring your vision to life.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaTimes />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              loading="eager"
              priority
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4">
              <div className="text-purple-400 text-sm font-medium mb-1">
                {galleryImages[selectedImage].category}
              </div>
              <div className="text-white font-semibold">
                {galleryImages[selectedImage].alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}