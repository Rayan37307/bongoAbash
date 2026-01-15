
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-abash-bg text-abash-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <span className="text-abash-sand text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              A decade of crafting <br />
              <span className="text-abash-sand italic font-normal">unparalleled</span> residences.
            </h2>
            <div className="space-y-6 text-stone-500 leading-relaxed font-light text-lg max-w-lg">
              <p>
                At BongoAbash, we believe that luxury is not about extravagance but about precision and peace of mind. 
                Our journey started in the heart of Dhaka, aiming to bridge the gap between world-class engineering and local heritage.
              </p>
              <p>
                Every project we undertake is a commitment to the landscape of Bangladesh. We use high-grade sustainable materials 
                and partner with the brightest architectural minds.
              </p>
            </div>
            <div className="mt-12 flex gap-10">
               <div>
                  <p className="text-3xl font-serif text-abash-text">14+</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Years</p>
               </div>
               <div>
                  <p className="text-3xl font-serif text-abash-text">850+</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Homes</p>
               </div>
               <div>
                  <p className="text-3xl font-serif text-abash-text">12</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Awards</p>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
             <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Architecture"
                />
                <div className="absolute inset-0 bg-abash-sand/10"></div>
             </div>
             <div className="bg-abash-sage p-12 rounded-[3rem] text-white">
                <h4 className="font-serif text-2xl mb-4 italic">Sustainability Focus</h4>
                <p className="text-stone-300 font-light text-sm leading-relaxed">
                  We integrate rainwater harvesting and solar energy in 90% of our upcoming projects, leading the green revolution in Dhaka's architecture.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
