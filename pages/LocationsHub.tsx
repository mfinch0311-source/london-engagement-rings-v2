
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { LOCATIONS } from '../constants';

const LocationsHub: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section - Text Only Minimalist */}
      <section className="relative h-[50vh] flex items-center bg-zinc-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[11px] ui-label uppercase tracking-[0.6em] text-amber-500 font-bold mb-8">Editorial Curation</span>
            <h1 className="text-5xl md:text-[5.5rem] font-medium text-white mb-8 leading-tight serif-heading tracking-tight">
              London District Guides
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light italic serif-heading">
              A considered directory of the city's premier jewellery enclaves, from heritage districts to modern artisanal workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Minimalist Grid */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <SectionHeading 
            title="The Premier Districts" 
            subtitle="Expert Guidance by Geography"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {LOCATIONS.map((loc) => {
              const ourPick = loc.suppliers.find(s => s.rank === 1);
              return (
                <Link 
                  key={loc.slug} 
                  to={`/locations/${loc.slug}`}
                  className="group block border border-zinc-50 p-10 hover:border-amber-900/10 hover:shadow-xl transition-all duration-500 bg-[#FAF9F6]"
                >
                  <div className="mb-10">
                    <span className="text-[10px] ui-label text-amber-800 uppercase tracking-[0.4em] font-bold block mb-4">District</span>
                    <h3 className="text-4xl font-medium text-zinc-900 serif-heading group-hover:text-amber-900 transition-colors">
                      {loc.name}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-500 text-[16px] font-light leading-relaxed mb-10 h-20 line-clamp-3 italic">
                    {loc.description}
                  </p>

                  {ourPick && (
                    <div className="bg-white p-6 border-l border-amber-900/30 mb-10">
                      <span className="block text-[9px] ui-label text-zinc-400 uppercase tracking-widest font-bold mb-2">Editor's Pick</span>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-zinc-800">{ourPick.name}</span>
                        <span className="text-[10px] ui-label text-zinc-400 font-bold uppercase tracking-tighter">Verified</span>
                      </div>
                    </div>
                  )}

                  <div className="inline-flex items-center text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                    <span className="border-b border-amber-900/20 pb-1">Enter District Guide</span>
                    <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Call to Action - Minimalist */}
      <section className="py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium text-zinc-900 serif-heading mb-8">Need further assistance?</h2>
          <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12">
            Our Knowledge Hub provides the technical benchmarks required to navigate these districts with absolute confidence.
          </p>
          <Link 
            to="/knowledge-hub"
            className="inline-block bg-zinc-900 text-white px-12 py-5 rounded-sm text-[10px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all shadow-lg"
          >
            Explore Knowledge Hub
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocationsHub;
