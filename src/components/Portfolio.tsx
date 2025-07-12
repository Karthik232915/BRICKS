import React from 'react';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D59] mb-16 text-center">
            OUR PORTFOLIO
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                A Social Media Grid That Speaks for Your Brand
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We'll make sure your <span className="font-bold text-[#FF6B35]">social media</span> exudes your 
                brand identity, feels authentic, and connects with the right audience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From aesthetic visuals to engaging content and real conversations, we'll turn your brand into 
                something people love to follow and interact with
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img 
                className="rounded-xl w-full max-w-5xl h-full object-cover" 
                src="/src/components/BRICK.gif" 
                alt="BRICKS Animation"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              Your social media profile is your brand's digital storefront, and we ensure it looks stunning, 
              professional, and cohesive. We'll make your social media grid look clean, cohesive, and on-brand—so 
              every post flows seamlessly and tells your story. With the right mix of content and a visually 
              appealing layout, your profile won't just look good—it'll keep people coming back
            </p>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};
