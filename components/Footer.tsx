
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
              Bongo<span className="text-stone-400">Abash</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-stone-500 font-medium">
            <a href="#works" className="hover:text-stone-900">Works</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#founder" className="hover:text-stone-900">Founder</a>
            <a href="#contact" className="hover:text-stone-900">Privacy Policy</a>
          </div>

          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} BongoAbash Developments Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
