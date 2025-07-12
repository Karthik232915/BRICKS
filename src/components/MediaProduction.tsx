
import React from 'react';
import { Camera, Video, Palette, Headphones, Calendar, Megaphone, Lightbulb } from 'lucide-react';

export const MediaProduction = () => {
  const mediaServices = [
    { icon: Palette, title: "Graphic Design", description: "Professional visual design for all your branding needs" },
    { icon: Video, title: "Video Editing", description: "High-quality video production and post-production" },
    { icon: Camera, title: "Short video production", description: "Engaging short-form content for social media" },
    { icon: Headphones, title: "Podcast & Interviews", description: "Professional audio content creation and editing" },
    { icon: Camera, title: "Event Shoots", description: "Comprehensive event photography and videography" },
    { icon: Megaphone, title: "Ad commercials", description: "Compelling commercial content for advertising" },
    { icon: Lightbulb, title: "Concept Ideation", description: "Creative concept development and brainstorming" },
    { icon: Palette, title: "Content writing", description: "Professional copywriting for all media formats" },
    { icon: Calendar, title: "Pre - production", description: "Complete pre-production planning and coordination" },
    { icon: Camera, title: "Product Shoots", description: "Professional product photography and styling" }
  ];

  const graphicDesignServices = [
    "Logo", "Catalogs", "Brochures", "Banners", "Business", "Cards",
    "Social Media Posts", "Promo", "Material", "Marketing",
    "collaterals", "Brand", "Films", "Product Videos", "Social Media",
    "Reels & Shorts", "Corporate", "Videos", "Ad", "Films",
    "Commercials", "Motion", "Graphics", "Explainer", "Videos",
    "Testimonial Videos", "Behind-the-Scenes (BTS) Content"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D59] mb-4 text-center">
              OUR SERVICES
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Media Production
            </h3>
            <div className="w-24 h-1 bg-[#FF6B35] mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {mediaServices.map((service, index) => (
                <div key={index} className="group bg-gray-50 hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-orange-500 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1E3D59] group-hover:bg-white/20 p-3 rounded-lg transition-all duration-300">
                      <service.icon className="w-6 h-6 text-white group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Graphic Design & Video Works Section */}
          <div className="bg-black text-white p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              GRAPHIC DESIGN & VIDEO WORKS
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {graphicDesignServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 hover:bg-[#FF6B35] p-4 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
