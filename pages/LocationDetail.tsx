
import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import SectionHeading from '../components/SectionHeading';

const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (location) {
      document.title = location.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', location.metaDesc);
      }
    }
  }, [location]);

  if (!location) {
    return <Navigate to="/locations" />;
  }

  const primaryPick = location.suppliers.find(s => s.rank === 1);
  const alternatives = location.suppliers.filter(s => s.rank === 2 || s.rank === 3);
  const additionalOptions = location.suppliers.filter(s => s.rank === 4 || s.rank === 5);

  const scrollToCard = (id: string) => {
    cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Generate varied FAQs based on location
  const localFaqs = [
    {
      question: `What should I expect from engagement ring suppliers in ${location.name}?`,
      answer: `Suppliers in ${location.name} typically offer a high-tier, appointment-led service. You can expect technical clarity, a focus on stone quality, and an environment designed to remove buying pressure.`
    },
    {
      question: `How long do bespoke engagement rings take in ${location.name}?`,
      answer: `Most ateliers in this district manage their own workshops. A standard bespoke timeline is usually 6 to 8 weeks, covering everything from stone selection to final hallmarking.`
    },
    {
      question: `Is it necessary to book an appointment in ${location.name}?`,
      answer: `While some showrooms allow walk-ins, we strongly recommend booking. It ensures you have the dedicated time of a specialist and a curated selection of stones ready for your budget.`
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-zinc-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={location.imageUrl} alt={location.name} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold mb-6 block ui-label">London District Guide</span>
          <h1 className="text-5xl md:text-7xl font-medium mb-8 serif-heading">{location.name} Engagement Rings</h1>
          <p className="text-zinc-300 max-w-3xl mx-auto text-xl font-light leading-relaxed serif-heading italic">
            {location.description}
          </p>
        </div>
      </section>

      {/* Breadcrumbs/Links */}
      <div className="bg-white border-b border-zinc-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center space-x-6 text-[10px] ui-label uppercase tracking-widest font-bold text-zinc-400">
          <Link to="/locations" className="hover:text-amber-900 transition-colors">All Locations</Link>
          <span>/</span>
          <Link to="/best-london-rings" className="hover:text-amber-900 transition-colors">Best London Rings</Link>
          <span>/</span>
          <span className="text-zinc-900 uppercase tracking-widest">{location.name}</span>
        </div>
      </div>

      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title={`Expert Selection for ${location.name}`} 
            subtitle="The Editorial Hierarchy"
          />

          {/* Row 1: Primary Recommendation (Full Width) */}
          {primaryPick && (
            <div className="mb-24">
              <div 
                ref={el => cardRefs.current[primaryPick.id] = el}
                className="bg-white border border-zinc-100 p-10 md:p-20 shadow-sm rounded-sm transition-all duration-500 hover:shadow-xl max-w-5xl mx-auto relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
                    <div className="flex-1">
                      <span className="inline-block text-[9px] ui-label uppercase tracking-[0.4em] font-bold text-amber-800 bg-amber-50 px-4 py-1.5 mb-6">
                        Our pick for {location.name}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-medium text-zinc-900 serif-heading mb-3">
                        {primaryPick.website ? (
                          <a href={primaryPick.website} target="_blank" rel="noopener noreferrer" className="hover:text-amber-900 transition-colors">
                            {primaryPick.name}
                          </a>
                        ) : primaryPick.name}
                      </h3>
                      <p className="text-[11px] ui-label text-zinc-400 font-medium tracking-widest uppercase">{primaryPick.address}</p>
                    </div>
                    
                    <div className="flex space-x-10 border-l border-zinc-100 pl-10">
                      <div className="text-center">
                        <span className="block text-[9px] ui-label text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Google Rating</span>
                        <span className="text-2xl font-medium text-zinc-800 tracking-wider">{primaryPick.googleRating}</span>
                      </div>
                      {primaryPick.trustpilotRating && (
                        <div className="text-center">
                          <span className="block text-[9px] ui-label text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Trustpilot</span>
                          <span className="text-2xl font-medium text-zinc-800 tracking-wider">{primaryPick.trustpilotRating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-600 text-xl md:text-2xl font-light leading-relaxed mb-10 italic serif-heading">
                    "{primaryPick.description}"
                  </p>

                  {primaryPick.whyWeLikeIt && (
                    <div className="mb-12 p-8 bg-amber-50/20 border-l-2 border-amber-800/20 rounded-sm">
                      <span className="block text-[9px] ui-label uppercase tracking-[0.4em] font-bold text-amber-900 mb-3">Why we like it</span>
                      <p className="text-[16px] text-zinc-600 font-light leading-relaxed italic">
                        "{primaryPick.whyWeLikeIt}"
                      </p>
                    </div>
                  )}

                  <button 
                    onClick={() => scrollToCard(primaryPick.id)}
                    className="text-[10px] ui-label uppercase tracking-[0.4em] font-bold text-amber-900 hover:text-amber-700 transition-colors border-b border-amber-900/20 pb-1"
                  >
                    View Atelier Details
                  </button>
                </div>
                
                {/* Decorative rank number */}
                <div className="absolute -bottom-10 -right-6 text-[15rem] font-medium text-zinc-50 serif-heading z-0 pointer-events-none select-none opacity-40">01</div>
              </div>
            </div>
          )}

          {/* Row 2: Strong Alternatives (Two Equal Columns) */}
          {alternatives.length > 0 && (
            <div className="mb-24">
              <h3 className="text-[11px] ui-label uppercase tracking-[0.5em] font-bold text-zinc-400 mb-12 text-center">Strong Alternatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {alternatives.map((s) => (
                  <div 
                    key={s.id} 
                    ref={el => cardRefs.current[s.id] = el}
                    className="bg-white border border-zinc-100 p-12 shadow-sm rounded-sm flex flex-col hover:shadow-lg transition-all duration-500"
                  >
                    <div className="mb-8">
                      <h4 className="text-3xl font-medium text-zinc-900 serif-heading mb-2">
                        {s.website ? (
                          <a href={s.website} target="_blank" rel="noopener noreferrer" className="hover:text-amber-900 transition-colors">
                            {s.name}
                          </a>
                        ) : s.name}
                      </h4>
                      <p className="text-[10px] ui-label text-zinc-400 font-medium tracking-widest uppercase">{s.address}</p>
                    </div>

                    <div className="flex space-x-8 mb-8 border-y border-zinc-50 py-4">
                      <div>
                        <span className="block text-[9px] ui-label text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Google</span>
                        <span className="text-lg font-medium text-zinc-800 tracking-wider">{s.googleRating}</span>
                      </div>
                      {s.trustpilotRating && (
                        <div className="border-l border-zinc-50 pl-8">
                          <span className="block text-[9px] ui-label text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Trustpilot</span>
                          <span className="text-lg font-medium text-zinc-800 tracking-wider">{s.trustpilotRating}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-zinc-500 text-[15px] font-light leading-relaxed mb-10 flex-grow opacity-90 line-clamp-4 italic serif-heading">
                      "{s.description}"
                    </p>

                    <button 
                      onClick={() => scrollToCard(s.id)}
                      className="text-[9px] ui-label uppercase tracking-[0.3em] font-bold text-amber-900 border-b border-amber-900/10 pb-1 self-start"
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Row 3: More Reputable Options (Minimal Layout) */}
          {additionalOptions.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-[11px] ui-label uppercase tracking-[0.5em] font-bold text-zinc-400 mb-10 text-center">More Reputable Options</h3>
              <div className="space-y-4">
                {additionalOptions.map(s => (
                  <div 
                    key={s.id} 
                    className="bg-white border border-zinc-100 px-10 py-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-zinc-200 transition-colors"
                  >
                    <div>
                      <h4 className="text-xl font-medium text-zinc-900 serif-heading group-hover:text-amber-900 transition-colors">{s.name}</h4>
                      <p className="text-[10px] ui-label text-zinc-400 uppercase tracking-widest font-medium">{s.address}</p>
                    </div>
                    <div className="flex items-center space-x-12">
                      <div className="text-right">
                        <span className="block text-[8px] ui-label text-zinc-400 uppercase tracking-tighter font-bold">Google Rating</span>
                        <span className="text-sm font-medium text-zinc-800 tracking-widest">{s.googleRating} ★</span>
                      </div>
                      <div className="h-8 w-px bg-zinc-100 hidden md:block"></div>
                      <span className="text-[9px] ui-label uppercase tracking-[0.3em] font-bold text-zinc-300">Reputable</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title={`${location.name} Buyer FAQs`} subtitle="Logistical Reassurance" />
          <div className="space-y-16 mt-20">
            {localFaqs.map((faq, i) => (
              <div key={i} className="group border-b border-zinc-100 pb-12 last:border-0">
                <h4 className="text-2xl font-medium mb-6 text-zinc-900 serif-heading group-hover:text-amber-900 transition-colors">{faq.question}</h4>
                <p className="text-zinc-500 leading-relaxed font-light text-[18px]">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-24 pt-16 border-t border-zinc-100 text-center">
            <p className="text-zinc-400 text-sm mb-10 italic font-light">Still researching? Start with our definitive technical guide.</p>
            <Link 
              to="/knowledge-hub" 
              className="inline-block bg-zinc-900 text-white px-12 py-5 rounded-sm text-[10px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10"
            >
              Enter Knowledge Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetail;
