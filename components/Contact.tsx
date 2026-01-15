
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6 block">Get in Touch</span>
            <h2 className="font-serif text-4xl text-stone-900 mb-8">Let's discuss your future home.</h2>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Office Address</p>
                <p className="text-stone-700 font-light">
                  Suite 4B, Crystal Palace, <br />
                  Plot 22, Road 140, Gulshan 1, Dhaka
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Contact Details</p>
                <p className="text-stone-700 font-light">+880 1712 345678</p>
                <p className="text-stone-700 font-light">info@bongoabash.com</p>
              </div>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-sm text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest font-medium">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-50 p-10 md:p-16 rounded-3xl">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Project Interest</label>
                <select className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors">
                  <option>Select a project</option>
                  <option>The Azure Residence (Gulshan)</option>
                  <option>Skyline Penthouse (Banani)</option>
                  <option>Heritage Manor (Baridhara)</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-stone-900 text-white px-12 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-all w-full md:w-auto">
                  Send Message
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
