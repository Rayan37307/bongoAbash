
import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-stone-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Founder" 
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6 block">Our Visionary</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
            Building a legacy for <br />the next generation.
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed font-light">
            <p>
              Founded by Ar. Tanveer Rahman in 2010, BongoAbash was born out of a desire to create spaces that don't just exist but breathe. 
              Our approach to real estate in Bangladesh is rooted in sustainable luxury and architectural innovation.
            </p>
            <p>
              "We don't build houses; we curate experiences. Every brick laid and every window placed is a deliberate choice to enhance the way 
              our residents interact with the vibrant environment of Dhaka."
            </p>
          </div>
          <div className="mt-12">
            <p className="font-serif text-2xl text-stone-900 italic">Tanveer Rahman</p>
            <p className="text-sm text-stone-400 mt-1 uppercase tracking-widest">Founder & Lead Architect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
