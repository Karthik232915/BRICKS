import React from 'react';
import { CheckCircle, Target, Zap, Shield, ChevronsLeftRightEllipsis, Users } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies that deliver measurable results"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Your projects are safe with our proven methodologies"
    },
    {
      icon: ChevronsLeftRightEllipsis,
      title: "Web Development",
      description: "Your projects are safe with our proven methodologies"
    },
    {
      icon: ChevronsLeftRightEllipsis,
      title: "Franchise management",
      description: "Streamlined solutions for managing, scaling, and optimizing multi-location franchise businesses"
    },
    {
      icon: Users,
      title: "Manpower supply",
      description: "Professional staffing and workforce solutions to meet your business needs efficiently"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full text-[#FF6B35] text-sm font-medium">
                  <span>About BRICKS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D59] leading-tight">
                  Building Digital
                  <span className="block text-[#FF6B35]">Success Stories</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  At <span className="font-bold text-[#1E3D59]">BRICKS</span>, we don't just create digital solutions - 
                  we craft experiences that transform businesses and drive growth.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every client brings unique challenges and opportunities. Our role is to listen, strategize, 
                  and deliver solutions that not only meet your needs but exceed your expectations. We believe 
                  in partnerships that grow with you.
                </p>

                <div className="grid gap-4">
                  {[
                    "Innovative design solutions",
                    "Result-driven marketing strategies",
                    "24/7 dedicated support",
                    "Transparent pricing & communication"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1E3D59] to-blue-600 text-white p-6 rounded-2xl">
                <p className="text-xl font-semibold text-center">
                  "Pay as you grow, Scale as you succeed!"
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#FF6B35] to-orange-500 p-3 rounded-xl">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E3D59] mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
