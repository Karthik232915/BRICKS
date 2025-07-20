import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-5 ${
        isScrolled
          ? 'bg-white/90 shadow-xl backdrop-blur-lg'
          : 'bg-white/70 shadow-md backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          className="flex items-center group focus:outline-none"
          onClick={() => scrollToSection('home')}
          aria-label="Go to Home"
        >
          <img
            src="/BRICKS.png"
            alt="Bricks Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-3xl font-bold bg-gradient-to-r from-[#1E3D59] to-[#FF6B35] bg-clip-text text-transparent group-hover:underline">
            BRICKS
          </span>
          <span className="ml-4 text-3x2 text-gray-600 hidden md:block">
            Build Your Dream With Us.
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-9">
          {[ 'About', 'Services', 'Process', 'Portfolio', 'Contact'].map((name) => (
            <button
              key={name}
              onClick={() => scrollToSection(name.toLowerCase())}
              className="relative text-gray-700 hover:text-[#FF6B35] transition-all duration-300 font-medium py-2 px-4 group focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent"
            >
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#1E3D59] group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            Get Quote
          </button>
          <button
            onClick={() => window.open('tel:+91 9514940379')}
            className="bg-[#1E3D59] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#2a4e70] hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            Call Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/90 backdrop-blur-md border-t shadow-inner`}
      >
        <div className="px-4 py-6 space-y-4">
          {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Contact'].map((name) => (
            <button
              key={name}
              onClick={() => scrollToSection(name.toLowerCase())}
              className="block w-full text-left text-gray-700 hover:text-[#FF6B35] transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-transparent active:bg-transparent focus:outline-none focus:ring-0"
            >
              {name}
            </button>
          ))}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex-1 bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white py-3 rounded-full font-semibold"
            >
              Get Quote
            </button>
            <button
              onClick={() => window.open('tel:+91 9514940379')}
              className="flex-1 bg-[#1E3D59] text-white py-3 rounded-full font-semibold"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
