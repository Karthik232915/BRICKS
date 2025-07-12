
import React from 'react';
import { TrendingUp, Shield, Users, Target, Globe } from 'lucide-react';

export const WhyChoose = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Visibility & Reach",
      description: "Be where your audience is. A well-crafted digital strategy ensures your brand stands out in a crowded market."
    },
    {
      icon: Shield,
      title: "Build Credibility & Trust",
      description: "Consumers trust brands with a strong and consistent online presence. Engaging content, positive reviews, and professional branding establish reliability."
    },
    {
      icon: Target,
      title: "Boost Engagement & Conversions",
      description: "The right digital strategy turns audience interactions into loyal customers. Well-optimized content, ads, and social media engagement drive real results."
    },
    {
      icon: Users,
      title: "Stay Competitive",
      description: "Your competitors are online. A strong digital presence ensures you not only keep up but stay ahead."
    },
    {
      icon: Globe,
      title: "Generate Measurable Growth",
      description: "Unlike traditional marketing, digital strategies provide real-time insights and analytics, helping you refine and maximize your ROI."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D59] mb-6 text-center">
            WHY BRICK'S DIGITAL MARKETING?
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            How much do you invest in your Branding & marketing? Are you happy with the results?
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#1E3D59] to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3D59] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To gain clients, you need the whole picture - a great website, active presence, positive reviews and 
                testimonials, strong social media engagement, ads, and more. If you fail in any of these, you are losing profit.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Investing in your marketing strategies is not a preference anymore. It is mandatory. If you would like 
                to spend your time doing what you do best instead of marketing, we offer complete digital marketing and 
                media services and different pricing models.
              </p>
              
              <div className="bg-gradient-to-r from-[#1E3D59] to-blue-600 text-white p-6 rounded-xl text-center">
                <p className="text-2xl font-bold">
                  With the right digital marketing approach, your brand doesn't just exist online—it thrives!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
