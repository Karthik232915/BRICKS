
import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { WhyChoose } from '../components/WhyChoose';
import { WorkFlow } from '../components/WorkFlow';
import { MediaProduction } from '../components/MediaProduction';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#1E3D59] to-[#FF6B35] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <WorkFlow />
      <MediaProduction />
      <Portfolio />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
