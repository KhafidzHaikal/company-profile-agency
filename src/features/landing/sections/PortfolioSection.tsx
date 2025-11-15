import { FaCode, FaCog, FaRobot, FaMobile, FaDatabase, FaCloud } from 'react-icons/fa';
import Image from 'next/image';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Web Development",
      description: "Modern responsive websites with cutting-edge technology",
      icon: FaCode,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center",
      category: "Development"
    },
    {
      title: "API Integration",
      description: "Seamless API connections for enhanced functionality",
      icon: FaDatabase,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
      category: "Backend"
    },
    {
      title: "Automation AI",
      description: "Smart automation solutions powered by artificial intelligence",
      icon: FaRobot,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
      category: "AI/ML"
    },
    {
      title: "Web & Mobile Design",
      description: "Beautiful user interfaces for web and mobile platforms",
      icon: FaMobile,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      category: "Design"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      icon: FaCloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      category: "Infrastructure"
    },
    {
      title: "System Integration",
      description: "Complex system integrations and workflow automation",
      icon: FaCog,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center",
      category: "Integration"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rotate-45"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-lime-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Showcase <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of projects showcasing innovation, creativity, and technical excellence across various industries and technologies.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:border-purple-400/30">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <button className="flex items-center space-x-2 text-white hover:text-lime-400 transition-colors duration-300 group">
                      <span className="text-sm font-medium">View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}