
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SUPPLIERS } from '../constants';

const BestRings: React.FC = () => {
  return (
    <div className="py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <SectionHeading 
          title="London’s Premier Specialists" 
          subtitle="A Curated Selection for the Discerning Buyer"
        />

        {/* Editorial Standards */}
        <div className="bg-white border border-zinc-100 p-12 md:p-20 mb-32 text-center shadow-sm rounded-sm max-w-5xl mx-auto">
          <h3 className="text-3xl font-medium mb-10 text-zinc-900 serif-heading">Our Selection Criteria</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {[
              { label: 'Bespoke Ability', icon: '✦' },
              { label: 'Stone Sourcing', icon: '✦' },
              { label: 'Client Trust', icon: '✦' },
              { label: 'Discretion', icon: '✦' },
              { label: 'Atelier Quality', icon: '✦' },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-amber-800 text-xl mb-4 opacity-50">{item.icon}</span>
                <span className="text-[9px] ui-label uppercase tracking-[0.3em] font-bold text-zinc-500 leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[13px] text-zinc-400 italic font-light">
            Editorial Note: We maintain absolute independence. While some partners are sponsored, our recommendations remain purely performance-based.
          </p>
        </div>

        {/* The List */}
        <div className="space-y-40">
          {SUPPLIERS.map((supplier, index) => (
            <div key={supplier.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-24`}>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-6 text-[10rem] font-medium text-zinc-50 serif-heading z-0 pointer-events-none opacity-50">0{index + 1}</div>
                  <img 
                    src={supplier.image} 
                    alt={supplier.name} 
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-[10px] ui-label uppercase tracking-[0.5em] text-amber-800 font-bold mb-6 block">{supplier.specialty}</span>
                <h3 className="text-5xl md:text-6xl font-medium mb-10 text-zinc-900 serif-heading">{supplier.name}</h3>
                <p className="text-zinc-600 text-xl mb-10 leading-relaxed font-light italic serif-heading">"{supplier.description}"</p>
                <div className="bg-[#F9F8F6] p-8 border-l-2 border-amber-900 shadow-sm mb-12">
                  <h4 className="text-[9px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-400 mb-4 uppercase">Editorial View:</h4>
                  <p className="text-[17px] text-zinc-600 font-light leading-relaxed">"{supplier.reasoning}"</p>
                </div>
                <div className="flex items-center gap-10">
                  <a 
                    href={supplier.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-900 border-b border-amber-900/30 pb-1 hover:text-amber-900 transition-colors"
                  >
                    View Atelier
                  </a>
                  <span className="text-zinc-200">|</span>
                  <span className="text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-400">{supplier.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestRings;
