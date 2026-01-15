
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8801712345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-[55] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-3"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.041-.54c.731.429 1.629.769 2.574.77h.001c3.182 0 5.768-2.586 5.769-5.766 0-3.18-2.587-5.766-5.767-5.766zm3.444 8.134c-.145.405-.828.733-1.129.778-.266.04-.6.048-.971-.072-.258-.083-.585-.192-1.025-.384-1.871-.817-3.085-2.735-3.179-2.86-.093-.125-.762-.914-.762-1.745 0-.831.437-1.238.591-1.404.155-.166.338-.207.451-.207h.338c.112 0 .263-.042.414.321.155.374.529 1.288.575 1.383.046.095.076.205.015.321-.06.116-.091.19-.181.294-.091.104-.191.233-.272.312-.091.088-.186.183-.081.365.105.181.467.766.997 1.24.685.61 1.258.8 1.438.891.181.091.287.076.392-.046.105-.121.451-.527.572-.708.121-.181.242-.152.407-.091.165.061 1.047.494 1.228.585.181.091.301.136.346.213.045.076.045.441-.1.846z"/></svg>
        <span className="hidden md:inline font-medium text-sm">WhatsApp Us</span>
      </a>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/3">
            <span className="text-abash-sand text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Get in Touch</span>
            <h2 className="font-serif text-4xl text-abash-text mb-8 leading-tight">Your legacy begins with a conversation.</h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Primary Office</p>
                <p className="text-abash-text font-light leading-relaxed">
                  Suite 4B, Crystal Palace, <br />
                  Plot 22, Road 140, Gulshan 1, Dhaka
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Connect Directly</p>
                <p className="text-abash-text font-bold">+880 1712 345678</p>
                <p className="text-stone-500 font-light">concierge@bongoabash.com</p>
              </div>
              <div className="flex gap-6">
                {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-xs text-stone-400 hover:text-abash-sand transition-colors uppercase tracking-[0.2em] font-bold">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-abash-bg p-10 md:p-16 rounded-[3rem] border border-stone-100 shadow-sm">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-abash-sand transition-colors text-abash-text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-abash-sand transition-colors text-abash-text"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Preferred Location</label>
                <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-abash-sand transition-colors text-abash-text appearance-none cursor-pointer">
                  <option>Gulshan</option>
                  <option>Banani</option>
                  <option>Baridhara</option>
                  <option>Dhanmondi</option>
                  <option>Bashundhara</option>
                  <option>Purbachal</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-abash-sand transition-colors resize-none text-abash-text"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-abash-text text-white px-12 py-4 rounded-full text-sm font-bold hover:bg-abash-sand transition-all w-full md:w-auto shadow-xl">
                  Request Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
