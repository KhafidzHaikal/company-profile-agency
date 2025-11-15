import Image from 'next/image';

export default function IntroductionSection() {
  const services = [
    {
      title: "Professional Website Development",
      description: "We provide custom website development services tailored to your business needs. From concept to implementation using cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center",
      alt: "Website Development"
    },
    {
      title: "Website Maintenance & Support",
      description: "Comprehensive maintenance services including updates, fixes, and modifications to keep your website performing at its best.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      alt: "Website Maintenance"
    },
    {
      title: "Website Migration & Transfer",
      description: "Safe and efficient website migration process with minimal downtime. We ensure your data and functionality remain intact.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      alt: "Website Migration"
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
          <p className="text-zinc-400 text-sm mb-4">Introduction</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our Premium<br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-lime-400 transition-colors duration-300 group mt-auto">
                    <span className="text-sm font-medium">Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}