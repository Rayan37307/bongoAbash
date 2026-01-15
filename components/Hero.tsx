
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-100">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/20 to-stone-50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-8 leading-tight">
          Redefining <br />
          <span className="italic">Urban Elegance</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Bangladesh's premier boutique real estate developer, crafting luxury living spaces 
          that merge modern aesthetics with timeless comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#works" 
            className="bg-stone-900 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:scale-105"
          >
            Explore Projects
          </a>
          <a 
            href="#contact" 
            className="bg-white text-stone-900 border border-stone-200 px-10 py-4 rounded-full text-sm font-medium hover:bg-stone-50 transition-all"
          >
            Book a Viewing
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
