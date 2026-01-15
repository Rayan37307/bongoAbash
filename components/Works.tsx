
import React, { useState } from 'react';
import { PROPERTIES } from '../constants.tsx';
import { Property } from '../types';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 mb-4">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-stone-900">
            {property.type}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            property.status === 'Ready' ? 'bg-green-100 text-green-700' : 
            property.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {property.status}
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-xl text-stone-900 group-hover:text-stone-600 transition-colors">
          {property.title}
        </h3>
        <p className="text-sm text-stone-500 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {property.location}
        </p>
        <div className="flex justify-between items-center pt-2">
          <p className="text-sm font-semibold text-stone-900">{property.price}</p>
          <div className="flex gap-3 text-xs text-stone-400">
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
    <section id="works" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-4 block">Our Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">Featured Projects</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === cat 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 text-stone-900 font-medium border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-all">
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
