
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-medium mb-5 text-zinc-900 serif-heading leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-2xl mx-auto text-[11px] ui-label uppercase tracking-[0.4em] font-bold">
          {subtitle}
        </p>
      )}
      <div className={`h-px w-20 bg-amber-800/20 mt-8 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
