'use client';

import { FaCode, FaTools, FaTachometerAlt, FaShieldAlt, FaDatabase, FaPuzzlePiece } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ServicesPage() {
  const services = [
    {
      id: 'website-development',
      title: "Website Development",
      description: "Custom websites built with modern technology",
      icon: FaCode,
      fullDescription: "We create stunning, responsive websites using the latest technologies like React, Next.js, and modern CSS frameworks.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      id: 'regular-maintenance',
      title: "Regular Maintenance", 
      description: "Keep your site updated and running smoothly",
      icon: FaTools,
      fullDescription: "Our maintenance service ensures your website stays updated, secure, and performs optimally at all times.",
      features: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "Content Updates"]
    },
    {
      id: 'speed-optimization',
      title: "Speed Optimization",
      description: "Fast loading times for better user experience",
      icon: FaTachometerAlt,
      fullDescription: "We optimize your website's performance to achieve lightning-fast loading speeds and better user engagement.",
      features: ["Image Optimization", "Code Minification", "CDN Setup", "Caching Solutions"]
    },
    {
      id: 'website-security',
      title: "Website Security",
      description: "Protect your site from threats and attacks",
      icon: FaShieldAlt,
      fullDescription: "Comprehensive security solutions to protect your website from malware, hackers, and other online threats.",
      features: ["SSL Certificates", "Malware Scanning", "Firewall Protection", "Security Monitoring"]
    },
    {
      id: 'automatic-backup',
      title: "Automatic Backup",
      description: "Daily backups to keep your data safe",
      icon: FaDatabase,
      fullDescription: "Automated backup solutions ensure your website data is always safe and can be restored quickly when needed.",
      features: ["Daily Backups", "Cloud Storage", "One-Click Restore", "Version Control"]
    },
    {
      id: 'plugin-integration',
      title: "Plugin Integration",
      description: "Seamless integration with essential tools",
      icon: FaPuzzlePiece,
      fullDescription: "We integrate essential plugins and third-party services to enhance your website's functionality and user experience.",
      features: ["API Integration", "Payment Gateways", "Analytics Setup", "Custom Plugins"]
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
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Comprehensive web solutions designed to elevate your digital presence and drive business growth
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
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}