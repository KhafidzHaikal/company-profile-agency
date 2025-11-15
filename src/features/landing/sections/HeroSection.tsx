import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-8 sm:py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            We craft <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">digital</span><br />
            experiences that <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">inspire</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-lg mx-auto lg:mx-0">
            Your premier creative agency for innovative web solutions, stunning designs, and powerful digital strategies that drive results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start your project
            </button>
            <button className="text-white hover:text-zinc-300 flex items-center justify-center space-x-2 px-6 py-3 sm:py-4 border border-zinc-600 rounded-full hover:border-white transition-all duration-300">
              <span>Learn more</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Content - Modern Visual */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="relative">
            {/* Main Image Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop&crop=center" 
                alt="Creative Team Working" 
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white text-black p-2 sm:p-4 rounded-xl shadow-lg">
              <div className="text-lg sm:text-2xl font-bold">500+</div>
              <div className="text-xs sm:text-sm text-zinc-600">Projects Done</div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-lime-400 text-black p-2 sm:p-4 rounded-xl shadow-lg">
              <div className="text-lg sm:text-2xl font-bold">98%</div>
              <div className="text-xs sm:text-sm">Client Satisfaction</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-4 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 sm:-right-8 w-6 h-6 sm:w-12 sm:h-12 bg-cyan-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}