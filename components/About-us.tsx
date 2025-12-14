import React from 'react';

export default function Aboutus() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10 bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Why Choose Alight Technologies?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Alight Technologies, we embrace people, process and technology, like no one else! We believe in developing a community of bright minds who will break the barriers of stagnancy in technology and provide new outcomes that will open new frontiers of innovation! Our exceptional services will connect you with technology like never before!
            </p>

            <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-8 text-lg font-medium group">
              Learn More
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Digital Technology Network"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
