
import React, { useState } from 'react';

const MortgageCalculator: React.FC = () => {
  const [amount, setAmount] = useState(10000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(15);

  const calculateEMI = () => {
    const r = rate / (12 * 100);
    const n = years * 12;
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toLocaleString('en-BD', { maximumFractionDigits: 0 });
  };

  return (
    <section className="py-24 bg-abash-sage text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-abash-sand text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Financial Planning</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Estimate your <br/><span className="italic font-normal">monthly investment.</span></h2>
            <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-md">
              Plan your home purchase with our simple EMI calculator. Partnered with major local banks like City Bank and DBH for seamless financing.
            </p>
            <div className="flex gap-8">
               <img src="https://upload.wikimedia.org/wikipedia/en/2/23/City_Bank_Limited_Logo.svg" alt="Partner Bank" className="h-8 opacity-50 grayscale invert" />
               <img src="https://www.dbhfinance.com/images/logo.png" alt="Partner Bank" className="h-8 opacity-50 grayscale invert" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs uppercase tracking-widest text-stone-300">Loan Amount (৳)</label>
                  <span className="text-sm font-bold">৳ {(amount/10000000).toFixed(1)} Cr</span>
                </div>
                <input 
                  type="range" min="1000000" max="100000000" step="1000000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-abash-sand h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs uppercase tracking-widest text-stone-300">Interest Rate (%)</label>
                  <span className="text-sm font-bold">{rate}%</span>
                </div>
                <input 
                  type="range" min="5" max="15" step="0.1"
                  value={rate} onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-abash-sand h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs uppercase tracking-widest text-stone-300">Duration (Years)</label>
                  <span className="text-sm font-bold">{years} Years</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="1"
                  value={years} onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-abash-sand h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="pt-8 mt-8 border-t border-white/10 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-300 mb-2">Estimated Monthly EMI</p>
                <p className="text-5xl font-serif text-abash-sand">৳ {calculateEMI()}</p>
                <button className="mt-8 bg-white text-abash-sage w-full py-4 rounded-full text-sm font-bold hover:bg-abash-sand hover:text-white transition-all">
                  Request Financing Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
