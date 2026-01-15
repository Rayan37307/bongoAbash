
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-abash-text">
                Bongo<span className="text-abash-sand">Abash</span>
              </span>
            </a>
            <p className="text-stone-500 font-light text-sm max-w-xs leading-relaxed">
              Curating luxury experiences for the discerning few. From the heart of Dhaka to the serene valleys of Sylhet, we build the future of Bangladesh.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-abash-text mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-stone-500 font-medium">
              <li><a href="#works" className="hover:text-abash-sand transition-colors">Elite Collection</a></li>
              <li><a href="#about" className="hover:text-abash-sand transition-colors">Our Philosophy</a></li>
              <li><a href="#founder" className="hover:text-abash-sand transition-colors">The Visionary</a></li>
              <li><a href="#contact" className="hover:text-abash-sand transition-colors">Private Viewing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-abash-text mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-stone-500 font-medium">
              <li><p className="text-xs">RAJUK Reg: #9201-B</p></li>
              <li><p className="text-xs">REHAB Member: #2033</p></li>
              <li><a href="#" className="hover:text-abash-sand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-abash-sand transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-stone-400 font-medium">
            &copy; {new Date().getFullYear()} BongoAbash Developments Ltd. Handcrafted in Dhaka.
          </p>
          <div className="flex gap-8">
            <img src="https://img.icons8.com/ios-filled/50/2d2d2d/mastercard.png" className="h-6 opacity-20" alt="Payment" />
            <img src="https://img.icons8.com/ios-filled/50/2d2d2d/visa.png" className="h-6 opacity-20" alt="Payment" />
            <img src="https://img.icons8.com/ios-filled/50/2d2d2d/bank.png" className="h-6 opacity-20" alt="Payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
