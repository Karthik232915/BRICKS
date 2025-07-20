import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-[#1E3D59]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3D59]/90 to-blue-900/90"></div>
        <div 
          ref={heroRef}
          className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF6B35 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #1E3D59 0%, transparent 50%)`,
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B35]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full text-white/90 text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Award-Winning Digital Agency</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-[#FF6B35] to-yellow-400 bg-clip-text text-transparent">
                  DREAM'S
                </span>
                with Us
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your business with cutting-edge digital solutions. We create stunning websites, 
                powerful brands, and marketing strategies that drive real results.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Lead Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">80%</div>
                  <div className="text-gray-400 text-sm">Conversion Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
                >
                  <Play className="w-5 h-5" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Elements */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#FF6B35] to-orange-500 p-6 rounded-2xl text-white">
                      <Users className="w-8 h-8 mb-4"/>
                      <div className="text-2xl font-bold animate-fade-in">
                        <CountUp end={50} duration={2} />+
                      </div>
                      <div className="text-sm opacity-90">Happy Clients</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500 to-[#1E3D59] p-6 rounded-2xl text-white">
                      <Award className="w-8 h-8 mb-4" />
                      <div className="text-2xl font-bold animate-fade-in">4.5</div>
                      <div className="text-sm opacity-90">Ratings</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                      <TrendingUp className="w-8 h-8 mb-4" />
                      <div className="text-2xl font-bold animate-fade-in">300%</div>
                      <div className="text-sm opacity-90">ROI Average</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
                      <Star className="w-8 h-8 mb-4" />
                      <div className="text-2xl font-bold animate-fade-in">4.5</div>
                      <div className="text-sm opacity-90">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-2xl animate-bounce delay-500">
                  <div className="text-2xl">🚀</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-pink-500 p-4 rounded-2xl animate-bounce delay-1000">
                  <div className="text-2xl">💎</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
