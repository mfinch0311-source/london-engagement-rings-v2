
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { FAQS } from '../constants';

const KnowledgeHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Process', 'Budget', 'Diamonds', 'Practical'];
  
  const filteredFaqs = activeCategory === 'All' 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <SectionHeading 
          title="The Men's Guide" 
          subtitle="Clarity, Reassurance, and Expert Guidance."
        />

        <div className="max-w-4xl mx-auto mb-32 text-center">
          <p className="text-2xl text-zinc-500 font-light leading-relaxed mb-16 italic serif-heading">
            Most guides are written for the wearer. This is written for the buyer. We provide the technical benchmarks and logistical clarity required to navigate a significant purchase with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="p-16 border border-zinc-50 hover:border-amber-100 transition-colors rounded-sm shadow-sm group bg-[#F9F8F6]">
              <h3 className="text-3xl font-medium mb-6 serif-heading text-zinc-900 group-hover:text-amber-900 transition-colors">Bespoke vs. Ready-to-Wear</h3>
              <p className="text-zinc-500 mb-10 leading-relaxed font-light text-[17px]">
                Commissioning a piece of history requires a different timeline and mindset than choosing from a collection. We outline what to expect from the bespoke journey.
              </p>
              <span className="text-[10px] ui-label uppercase tracking-[0.3em] font-bold text-amber-800 hover:text-amber-900 cursor-pointer border-b border-amber-800/20 pb-1">View the Analysis</span>
            </div>
            <div className="p-16 border border-zinc-50 hover:border-amber-100 transition-colors rounded-sm shadow-sm group bg-[#F9F8F6]">
              <h3 className="text-3xl font-medium mb-6 serif-heading text-zinc-900 group-hover:text-amber-900 transition-colors">Stone Quality Benchmarks</h3>
              <p className="text-zinc-500 mb-10 leading-relaxed font-light text-[17px]">
                Understand which technical characteristics truly drive value and visual brilliance, allowing you to allocate your budget effectively.
              </p>
              <span className="text-[10px] ui-label uppercase tracking-[0.3em] font-bold text-amber-800 hover:text-amber-900 cursor-pointer border-b border-amber-800/20 pb-1">Technical Deep Dive</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto bg-[#F9F8F6] p-16 md:p-24 rounded-sm shadow-sm">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium text-zinc-900 mb-8 serif-heading">Essential Intelligence</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 text-[9px] ui-label uppercase tracking-[0.35em] font-bold border transition-all rounded-full ${
                    activeCategory === cat 
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-xl' 
                    : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300 hover:text-zinc-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="group border-b border-zinc-200 pb-16 last:border-0">
                <h4 className="text-2xl font-medium mb-5 text-zinc-900 serif-heading group-hover:text-amber-900 transition-colors leading-tight">{faq.question}</h4>
                <p className="text-zinc-500 leading-relaxed font-light text-[18px]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
