
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-abash-text">
            Bongo<span className="text-abash-sand">Abash</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-abash-sage transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
              className="text-xs font-bold border border-stone-200 px-2 py-1 rounded hover:bg-stone-100 transition-colors"
            >
              {lang}
            </button>
            <button className="bg-abash-sand text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-abash-sage transition-all shadow-md">
              List Property
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-abash-text">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
