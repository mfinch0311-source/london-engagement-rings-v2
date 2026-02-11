
import React from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="About The Guide" subtitle="Independent Advocacy for the First-Time Buyer" />
        
        <div className="space-y-20">
          {/* Origin Story */}
          <div>
            <h3 className="text-3xl font-medium mb-8 serif-heading text-zinc-900">The Origin of The Guide</h3>
            <p className="text-zinc-600 leading-relaxed font-light text-xl italic serif-heading mb-8">
              "This project began out of a shared observation: that for most men, the process of buying an engagement ring is defined more by marketing noise than by technical clarity."
            </p>
            <p className="text-zinc-500 leading-relaxed font-light text-lg mb-6">
              Founded by Londoners in our mid-30s, the guide was born from our own recent experiences navigating the city's jewellery districts. Following a recent proposal within our group, it became clear that while London offers some of the world's finest artisans, finding them requires a level of persistence and insider knowledge that few first-time buyers possess.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light text-lg">
              We noticed a significant gap between the high-pressure sales environments of the traditional showrooms and the reality of what a buyer actually needs: a calm, technical, and objective perspective.
            </p>
          </div>

          {/* Peer-Informed Guidance */}
          <div>
            <h3 className="text-3xl font-medium mb-8 serif-heading text-zinc-900">A Shared Perspective</h3>
            <p className="text-zinc-500 leading-relaxed font-light text-lg mb-6">
              The guidance provided here is not based on a single viewpoint. It is informed by an ongoing dialogue and a shared set of notes between friends, colleagues, and trusted professional contacts who have recently navigated the same process across varying budgets and locations.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light text-lg">
              By consolidating these experiences—comparing everything from initial consultations to final appraisals—we have been able to identify consistent patterns. This peer-informed approach allows us to pinpoint where value and craftsmanship truly reside.
            </p>
          </div>

          {/* Editorial Selection & Our Pick */}
          <div>
            <h3 className="text-3xl font-medium mb-8 serif-heading text-zinc-900">The Selection Process</h3>
            <p className="text-zinc-500 leading-relaxed font-light text-lg mb-8">
              We are an editorial guide, not a retailer. Our recommendations are formed through a vetting process that relies on repeat positive signals: direct experience, trusted referrals, and consistent buyer feedback.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="p-10 bg-[#F9F8F6] rounded-sm shadow-sm border border-zinc-50">
                <h4 className="text-[11px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">The "Our Pick" Logic</h4>
                <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                  For each district, we identify a single, editorially preferred option. This isn't based on hype or showroom aesthetic, but on a supplier's ability to consistently deliver technical excellence and a respectful client experience.
                </p>
              </div>
              <div className="p-10 bg-[#F9F8F6] rounded-sm shadow-sm border border-zinc-50">
                <h4 className="text-[11px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">Integrity & Disclosure</h4>
                <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                  To keep the guide free for buyers, we partner with selected jewellers for sponsored features. However, editorial judgement remains independent; our reputation rests on providing guidance that we would (and do) follow ourselves.
                </p>
              </div>
            </div>
          </div>

          {/* Final Reassurance */}
          <div className="pt-16 text-center border-t border-zinc-100">
            <h3 className="text-2xl font-medium mb-6 serif-heading text-zinc-900 italic">"Written by men, for men. Our goal is simple: to help you choose properly, without the stress."</h3>
            <div className="h-px w-20 bg-amber-800/20 mx-auto mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
