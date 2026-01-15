
import React from 'react';

const TrustHub: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-abash-bg rounded-[3rem] p-12 md:p-20 border border-stone-100 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="text-abash-sand text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Credibility First</span>
            <h2 className="font-serif text-4xl text-abash-text mb-8 leading-tight">Your investment, <br/><span className="italic font-normal">vetted by experts.</span></h2>
            <p className="text-stone-500 font-light leading-relaxed mb-8">
              In the Bangladesh real estate market, legal transparency is our cornerstone. We handle every step of the verification process so you can invest with absolute peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Title Vetting', desc: 'Complete "Khatiyan" & Chain-of-ownership verification.' },
                { title: 'RAJUK Approved', desc: 'Ensuring all structures meet capital city regulations.' },
                { title: 'Zero Litigation', desc: 'We only list properties with clean legal standing.' },
                { title: 'REHAB Member', desc: 'Strict adherence to ethical real estate practices.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 flex-shrink-0 bg-abash-sage rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-abash-text">{item.title}</h4>
                    <p className="text-xs text-stone-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-abash-sand opacity-10 rounded-2xl -rotate-3"></div>
             <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" 
              alt="Legal Verification"
              className="relative rounded-2xl shadow-xl grayscale"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustHub;
