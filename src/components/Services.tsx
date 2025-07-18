
import React from 'react';
import { Globe, Users, TrendingUp, Search, Video, Megaphone, Building, Code, Target, Mail, Star, Share2 } from 'lucide-react';

export const Services = () => {
  const digitalMarketingServices = [
    { icon: Star, title: "Branding", description: "Complete brand identity and strategy development" },
    { icon: Share2, title: "Social Media Managing", description: "End-to-end social media management and strategy" },
    { icon: Megaphone, title: "Social Media Marketing", description: "Targeted campaigns to boost engagement and reach" },
    { icon: Building, title: "Franchise management", description: "Comprehensive franchise development, operations optimization, and multi-location business scaling strategies" },
    { icon: Code, title: "Website building", description: "Custom website development and design" },
    { icon: TrendingUp, title: "Website Maintenance", description: "Ongoing website updates and optimization" },
    { icon: Building, title: "Business Management & Development", description: "Strategic business growth consulting" },
    { icon: Users, title: "Manpower supply", description: "Professional staffing solutions and skilled workforce recruitment for your business needs" },
    { icon: Target, title: "Lead Conversion", description: "Optimize your sales funnel for better conversions" },
    { icon: Mail, title: "Marketing Collaterals", description: "Professional marketing materials and content" },
    { icon: Globe, title: "Joint ventures", description: "Strategic business partnerships and collaborative ventures for mutual growth and market expansion" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D59] mb-4 text-center">
            OUR SERVICES
          </h2>
          
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Digital marketing
            </h3>
            <div className="w-24 h-1 bg-[#FF6B35] mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalMarketingServices.map((service, index) => (
                <div key={index} className="group bg-gray-50 hover:bg-gradient-to-br hover:from-[#1E3D59] hover:to-blue-600 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FF6B35] group-hover:bg-white/20 p-3 rounded-lg transition-all duration-300">
                      <service.icon className="w-6 h-6 text-white group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
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
