
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-6 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              A decade of crafting <br />
              <span className="text-stone-500">unparalleled</span> experiences.
            </h2>
            <div className="space-y-6 text-stone-400 leading-relaxed font-light text-lg">
              <p>
                At BongoAbash, we believe that luxury is not about extravagance but about precision and peace of mind. 
                Our journey started in the heart of Dhaka, aiming to bridge the gap between world-class engineering and local heritage.
              </p>
              <p>
                Every project we undertake is a commitment to the landscape of Bangladesh. We use high-grade sustainable materials 
                and partner with the brightest architectural minds to ensure our buildings stand as landmarks for centuries.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: 'Completed Projects', value: '45+' },
              { label: 'Years of Experience', value: '14' },
              { label: 'Happy Families', value: '850+' },
              { label: 'Design Awards', value: '12' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-800">
                <h3 className="text-4xl md:text-5xl font-serif mb-2">{stat.value}</h3>
                <p className="text-sm text-stone-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
