import React, { useState } from 'react';
import { Briefcase, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

const CareerSection = ({
  heading = "Career with Alight Technologies",
  description = "We always keep our 'GROW MODE' on! We seek young and powerful individuals who are equally excited and curious to break the barriers of stagnancy and adopt novel methodologies!",
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Continuous learning opportunities"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Work with talented teams"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Push boundaries daily"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col gap-12 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 p-8 md:p-12 lg:flex-row lg:items-center">

          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </div>

            <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {heading}
            </h3>

            <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
              {description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer ${hoveredCard === idx ? 'bg-white/10 scale-105 border-blue-500/50' : ''
                    }`}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-blue-400 mb-2">{benefit.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <button className="group mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Opportunities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Logo Box with Animation */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="relative group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>

              {/* Logo Container */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                {/* Company Logo */}
                <div className="text-center">
                  <img
                    src="Logo.png"
                    alt="Alight Technologies Logo"
                    className="w-full h-auto max-w-xs mx-auto"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSection;