
import React from 'react';
import { Search, BarChart, Lightbulb, Edit, Image, Calendar, CheckCircle, Share2, Target, TrendingUp, FileText } from 'lucide-react';

export const WorkFlow = () => {
  const workflowSteps = [
    { icon: Search, title: "Case study of the brand", description: "Comprehensive analysis of your business and market position" },
    { icon: BarChart, title: "Competitor Analysis", description: "In-depth research of your competition and market landscape" },
    { icon: Lightbulb, title: "Content ideation", description: "Creative brainstorming for engaging content strategies" },
    { icon: Edit, title: "Content writing", description: "Professional copywriting for all marketing materials" },
    { icon: Image, title: "Poster & Video creation", description: "Eye-catching visuals and engaging video content" },
    { icon: Calendar, title: "Delivery of the next month's posting set along with the calendar", description: "Complete content calendar with scheduled posts" },
    { icon: CheckCircle, title: "Approval from the client", description: "Client review and approval process" },
    { icon: Share2, title: "Posting process", description: "Strategic content distribution across platforms" },
    { icon: Target, title: "Social Media Management", description: "Ongoing community management and engagement" },
    { icon: TrendingUp, title: "Strategy creation with the collected data", description: "Data-driven strategy optimization" },
    { icon: Target, title: "Campaign - Creation & Testing", description: "A/B testing for optimal campaign performance" },
    { icon: TrendingUp, title: "Running Ads & Campaign Optimization", description: "Continuous monitoring and optimization" },
    { icon: FileText, title: "Month end report & Ad report", description: "Comprehensive performance analytics and insights" }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className=" text-[#1E3D59] px-6 py-3 rounded-lg inline-block mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  BRICKS WORK FLOW
                </h2>
              </div>
              
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-[#FF6B35] p-2 rounded-lg flex-shrink-0 group-hover:bg-[#1E3D59] transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-[#1E3D59] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Animated workflow illustration */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1E3D59] to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                        <BarChart className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                        <Edit className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                        <Share2 className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Process Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6B35] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#1E3D59] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
