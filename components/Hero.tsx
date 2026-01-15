
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-abash-bg">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture Bangladesh" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-abash-bg/40 to-abash-bg"></div>
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-5xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-abash-text mb-8 leading-tight">
          Find Your Home in the <br />
          <span className="italic text-abash-sand font-normal">Heart of Bangladesh</span>
        </h1>
        
        {/* Search Bar Integration */}
        <div className="bg-white/90 backdrop-blur-xl p-2 md:p-4 rounded-full md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto mt-12 border border-white">
          <div className="flex-1 w-full px-6 text-left border-b md:border-b-0 md:border-r border-stone-100 py-2">
            <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Location</label>
            <select className="w-full bg-transparent text-sm font-medium focus:outline-none text-abash-text cursor-pointer">
              <option>Gulshan, Dhaka</option>
              <option>Banani, Dhaka</option>
              <option>Baridhara, Dhaka</option>
              <option>Dhanmondi, Dhaka</option>
              <option>Purbachal, Dhaka</option>
              <option>Khulshi, Chattogram</option>
            </select>
          </div>
          <div className="flex-1 w-full px-6 text-left border-b md:border-b-0 md:border-r border-stone-100 py-2">
            <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Type</label>
            <select className="w-full bg-transparent text-sm font-medium focus:outline-none text-abash-text cursor-pointer">
              <option>Apartment</option>
              <option>Penthouse</option>
              <option>Duplex</option>
              <option>Commercial</option>
            </select>
          </div>
          <div className="flex-1 w-full px-6 text-left py-2">
            <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Price Range</label>
            <select className="w-full bg-transparent text-sm font-medium focus:outline-none text-abash-text cursor-pointer">
              <option>৳ 1Cr - 5Cr</option>
              <option>৳ 5Cr - 10Cr</option>
              <option>৳ 10Cr +</option>
            </select>
          </div>
          <button className="bg-abash-sage text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-abash-sand transition-all w-full md:w-auto shadow-lg shadow-abash-sage/20">
            Search
          </button>
        </div>

        <p className="mt-12 text-stone-500 text-sm tracking-widest uppercase font-medium">
          Trusted by 850+ families across the nation
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-abash-sand to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
