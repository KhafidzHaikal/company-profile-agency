'use client';

import { FaCode, FaTools, FaTachometerAlt, FaShieldAlt, FaDatabase, FaPuzzlePiece, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

interface ServiceDetailPageProps {
  slug: string;
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const services = {
    'website-development': {
      title: "Website Development",
      description: "Custom websites built with modern technology",
      icon: FaCode,
      heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      fullDescription: "We create stunning, responsive websites using the latest technologies like React, Next.js, and modern CSS frameworks. Our development process focuses on performance, user experience, and scalability.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX", "Cross-browser Compatible", "Mobile-first Approach"],
      benefits: [
        "Increased online visibility and brand presence",
        "Better user engagement and conversion rates", 
        "Scalable architecture for future growth",
        "Professional design that builds trust"
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping", 
        "Development & Testing",
        "Launch & Optimization"
      ]
    },
    'regular-maintenance': {
      title: "Regular Maintenance",
      description: "Keep your site updated and running smoothly", 
      icon: FaTools,
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      fullDescription: "Our maintenance service ensures your website stays updated, secure, and performs optimally at all times. We handle everything from content updates to security patches.",
      features: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "Content Updates", "Security Patches", "Backup Management"],
      benefits: [
        "Reduced downtime and technical issues",
        "Enhanced security and protection",
        "Improved website performance",
        "Peace of mind with professional support"
      ],
      process: [
        "Initial Site Audit",
        "Maintenance Schedule Setup",
        "Regular Monitoring & Updates", 
        "Monthly Performance Reports"
      ]
    },
    'speed-optimization': {
      title: "Speed Optimization",
      description: "Fast loading times for better user experience",
      icon: FaTachometerAlt,
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      fullDescription: "We optimize your website's performance to achieve lightning-fast loading speeds and better user engagement. Our optimization techniques improve both user experience and search engine rankings.",
      features: ["Image Optimization", "Code Minification", "CDN Setup", "Caching Solutions", "Database Optimization", "Server Configuration"],
      benefits: [
        "Faster page load times (under 3 seconds)",
        "Better search engine rankings",
        "Improved user experience and engagement",
        "Higher conversion rates"
      ],
      process: [
        "Performance Analysis",
        "Optimization Strategy",
        "Implementation & Testing",
        "Ongoing Monitoring"
      ]
    },
    'website-security': {
      title: "Website Security",
      description: "Protect your site from threats and attacks",
      icon: FaShieldAlt,
      heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      fullDescription: "Comprehensive security solutions to protect your website from malware, hackers, and other online threats. We implement multiple layers of security to keep your site and data safe.",
      features: ["SSL Certificates", "Malware Scanning", "Firewall Protection", "Security Monitoring", "Regular Security Audits", "Incident Response"],
      benefits: [
        "Protection against cyber threats",
        "Enhanced customer trust and confidence",
        "Compliance with security standards",
        "24/7 security monitoring"
      ],
      process: [
        "Security Assessment",
        "Implementation of Security Measures",
        "Continuous Monitoring",
        "Regular Security Updates"
      ]
    },
    'automatic-backup': {
      title: "Automatic Backup",
      description: "Daily backups to keep your data safe",
      icon: FaDatabase,
      heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      fullDescription: "Automated backup solutions ensure your website data is always safe and can be restored quickly when needed. We provide multiple backup locations and easy restoration options.",
      features: ["Daily Backups", "Cloud Storage", "One-Click Restore", "Version Control", "Automated Scheduling", "Multiple Backup Locations"],
      benefits: [
        "Complete data protection and recovery",
        "Quick restoration in case of issues",
        "Peace of mind with automated backups",
        "Version history for easy rollbacks"
      ],
      process: [
        "Backup Strategy Planning",
        "Automated Backup Setup",
        "Regular Backup Testing",
        "Disaster Recovery Planning"
      ]
    },
    'plugin-integration': {
      title: "Plugin Integration",
      description: "Seamless integration with essential tools",
      icon: FaPuzzlePiece,
      heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      fullDescription: "We integrate essential plugins and third-party services to enhance your website's functionality and user experience. From payment systems to analytics, we handle all integrations professionally.",
      features: ["API Integration", "Payment Gateways", "Analytics Setup", "Custom Plugins", "Third-party Services", "Performance Optimization"],
      benefits: [
        "Enhanced website functionality",
        "Streamlined business processes",
        "Better data insights and analytics",
        "Improved user experience"
      ],
      process: [
        "Requirements Analysis",
        "Integration Planning",
        "Development & Testing",
        "Deployment & Support"
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
          Back to Services
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
                Get Started Today
              </button>
            </div>
            
            <div className="relative">
              <Image 
                src={service.heroImage}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What's <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Included</span>
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
                Key <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Benefits</span>
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
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss how our {service.title.toLowerCase()} service can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Us Today
            </button>
            <Link 
              href="/services"
              className="text-white hover:text-zinc-300 flex items-center justify-center space-x-2 px-8 py-4 border border-zinc-600 rounded-full hover:border-white transition-all duration-300"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}