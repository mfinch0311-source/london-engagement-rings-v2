
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { LOCATIONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#101010] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549232375-857b28d7332b?auto=format&fit=crop&q=80&w=1920" 
            alt="London Luxury Streetscape - Mayfair" 
            className="w-full h-full object-cover opacity-40 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] ui-label uppercase tracking-[0.6em] text-amber-600 font-bold mb-10">A Gentleman’s Guide to London Ateliers</span>
            <h1 className="text-5xl md:text-[5.5rem] font-medium text-white mb-12 leading-[1.05] serif-heading tracking-tight">
              The Considered Path to a Perfect Choice.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-14 leading-relaxed font-light max-w-2xl">
              High-stakes decisions shouldn't be made under pressure. We provide the technical clarity and editorial independence needed to find the right stone, from the right artisan, at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link 
                to="/best-london-rings" 
                className="bg-amber-900/90 text-white px-10 py-5 rounded-sm text-[10px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-amber-800 transition-all text-center shadow-2xl"
              >
                The Top Specialists
              </Link>
              <Link 
                to="/knowledge-hub" 
                className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-sm text-[10px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-white/10 transition-all text-center"
              >
                The Men's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Introduction */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <SectionHeading 
              title="A Protective Perspective" 
              subtitle="Written for Men. Focused on Transparency."
            />
            <p className="text-zinc-600 leading-relaxed text-2xl font-light italic serif-heading mt-10 max-w-3xl mx-auto">
              "Most men navigate this market with significant expectations but limited technical knowledge. We act as a protective layer, ensuring your investment is backed by craftsmanship rather than marketing."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="group">
              <div className="h-px w-16 bg-amber-800/20 mb-10 group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-[10px] ui-label uppercase tracking-[0.3em] font-bold text-zinc-900 mb-6">Expert Vetting</h4>
              <p className="text-lg text-zinc-500 leading-relaxed font-light">We are not retailers. Our recommendations are earned through technical merit and client integrity.</p>
            </div>
            <div className="group">
              <div className="h-px w-16 bg-amber-800/20 mb-10 group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-[10px] ui-label uppercase tracking-[0.3em] font-bold text-zinc-900 mb-6">Risk Reduction</h4>
              <p className="text-lg text-zinc-500 leading-relaxed font-light">We focus on the benchmarks that prevent costly mistakes, from stone grading to workshop reputation.</p>
            </div>
            <div className="group">
              <div className="h-px w-16 bg-amber-800/20 mb-10 group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-[10px] ui-label uppercase tracking-[0.3em] font-bold text-zinc-900 mb-4">London Authority</h4>
              <p className="text-lg text-zinc-500 leading-relaxed font-light">Navigating the city's premier districts with an insider's view on heritage and modern excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Hub Preview */}
      <section className="py-40 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-medium text-zinc-900 serif-heading">The Districts</h2>
              <p className="text-zinc-400 text-[10px] ui-label uppercase tracking-[0.4em] font-bold mt-4">A practical guide to the city</p>
            </div>
            <Link to="/locations" className="text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-amber-900 hover:text-amber-700 transition-colors flex items-center border-b border-amber-900/20 pb-1">
              View All Districts <span className="ml-3">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LOCATIONS.slice(0, 3).map((loc) => (
              <Link 
                key={loc.slug} 
                to={`/locations/${loc.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-zinc-900 rounded-sm">
                  <img 
                    src={loc.imageUrl} 
                    alt={loc.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-medium text-zinc-900 mb-4 serif-heading group-hover:text-amber-900 transition-colors">{loc.name}</h3>
                <p className="text-zinc-500 text-[16px] line-clamp-2 mb-6 font-light leading-relaxed">{loc.description}</p>
                <div className="flex items-center text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-amber-800">
                  Explore District
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Spotlight */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 overflow-hidden bg-zinc-100 rounded-sm aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Jeweller Atelier" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center py-10">
              <span className="text-[10px] ui-label uppercase tracking-[0.6em] text-amber-700 font-bold mb-8 block">Supplier Spotlight</span>
              <h2 className="text-5xl md:text-6xl font-medium mb-10 serif-heading leading-tight text-zinc-900">A Masterclass in the Personal Atélier.</h2>
              <p className="text-zinc-500 mb-12 leading-relaxed font-light text-xl italic serif-heading">
                "Gemima represents the pinnacle of London bespoke. Their dedication to direct sourcing and technical excellence makes them a premier choice for the discerning buyer."
              </p>
              <Link 
                to="/supplier-of-the-month" 
                className="inline-block bg-zinc-900 text-white px-12 py-5 rounded-sm text-[10px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all self-start shadow-xl shadow-zinc-900/10"
              >
                Read the Feature
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
