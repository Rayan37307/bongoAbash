
import React, { useState } from 'react';
import { PROPERTIES } from '../constants.tsx';
import { Property } from '../types';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-abash-bg mb-6">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full text-abash-text shadow-sm border border-white">
            {property.type}
          </span>
          <span className={`text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm border border-white ${
            property.status === 'Ready' ? 'bg-green-50 text-green-700' : 
            property.status === 'Upcoming' ? 'bg-blue-50 text-blue-700' : 'bg-abash-sand/10 text-abash-sand'
          }`}>
            {property.status}
          </span>
        </div>
      </div>
      <div className="px-2">
        <h3 className="font-serif text-2xl text-abash-text group-hover:text-abash-sand transition-colors mb-2">
          {property.title}
        </h3>
        <p className="text-sm text-stone-500 flex items-center gap-1.5 mb-4 font-light">
          <svg className="w-4 h-4 text-abash-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {property.location}
        </p>
        <div className="flex justify-between items-end border-t border-stone-100 pt-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Price</p>
            <p className="text-lg font-bold text-abash-text">{property.price}</p>
          </div>
          <div className="flex gap-4 text-xs font-medium text-stone-500">
            {property.beds && <span>{property.beds} Bed</span>}
            <span>{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Apartment', 'Penthouse', 'Commercial', 'Plot'];

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-abash-sand text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Handpicked Selections</span>
            <h2 className="font-serif text-4xl md:text-5xl text-abash-text leading-tight">Elite Real Estate <br/><span className="italic font-normal">Across Bangladesh</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all uppercase ${
                  filter === cat 
                    ? 'bg-abash-text text-white shadow-xl' 
                    : 'bg-abash-bg text-stone-500 hover:bg-stone-100 border border-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-4 text-abash-text font-bold text-sm tracking-[0.2em] border-b-2 border-abash-text pb-2 hover:text-abash-sand hover:border-abash-sand transition-all group">
            DISCOVER ALL LISTINGS
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
