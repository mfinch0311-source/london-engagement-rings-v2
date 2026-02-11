
import React from 'react';
import SectionHeading from '../components/SectionHeading';

const SupplierOfMonth: React.FC = () => {
  return (
    <div className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] ui-label uppercase tracking-[0.6em] text-amber-700 font-bold mb-8 block">Editorial Feature</span>
          <h1 className="text-6xl md:text-7xl font-medium mb-10 serif-heading text-zinc-900 leading-tight">Gemima: A Masterclass in the Personal Atélier.</h1>
          <p className="text-zinc-400 uppercase tracking-[0.4em] text-[11px] ui-label font-bold">Exceptional Craftsmanship & Direct Sourcing</p>
        </div>

        <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl mb-24">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200" 
            alt="Inside the Gemima Atelier" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-3xl text-zinc-900 leading-relaxed mb-16 serif-heading italic border-l-4 border-amber-800/10 pl-10 py-4">
            "Gemima represents a return to true bespoke. Their ability to manage the journey from stone discovery to final hallmarking with such discretion is why they are our primary recommendation."
          </p>
          
          <h2 className="text-4xl font-medium mb-8 serif-heading text-zinc-900">The Atélier Philosophy</h2>
          <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-light">
            In an era of mass-production, Gemima’s commitment to the blank-page commission is refreshing. Every piece begins not with a catalogue, but with a conversation and a curated selection of ethically-sourced stones. This ensures that every creation is technically superior and emotionally resonant.
          </p>

          <h2 className="text-4xl font-medium mb-8 serif-heading text-zinc-900">A Discerning Client Experience</h2>
          <p className="text-xl text-zinc-500 mb-16 leading-relaxed font-light">
            For the first-time buyer, Gemima offers a low-pressure, highly educational environment. Consultations focus on technical intelligence—helping you understand the nuances of the 4Cs and setting styles without the typical retail intensity. It is an experience defined by competence and calm.
          </p>

          <div className="bg-[#F9F8F6] p-16 mb-20 shadow-sm rounded-sm">
            <h3 className="text-2xl font-medium mb-8 serif-heading text-zinc-900">Key Distinctions:</h3>
            <ul className="space-y-6">
              {[
                'Exceptional direct stone sourcing',
                'Master-tier London hallmarking',
                'Personal, non-transactional style',
                'Absolute transparency in timelines'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-[17px] text-zinc-600 font-light">
                  <span className="text-amber-800 mr-5 opacity-40">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-16">
            <a 
              href="https://gemima.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-zinc-900 text-white px-14 py-6 rounded-sm text-[11px] ui-label uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all inline-block shadow-2xl"
            >
              Visit Gemima Online
            </a>
            <p className="mt-10 text-[10px] ui-label uppercase tracking-[0.3em] text-zinc-400 font-bold">gemima.co.uk &bull; By Appointment Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierOfMonth;
