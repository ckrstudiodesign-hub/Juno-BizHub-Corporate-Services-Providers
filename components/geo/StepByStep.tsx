import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  title: string;
  steps: Step[];
}

/**
 * GEO / AEO Optimized Component
 * Explicitly structures linear processes for "How-To" AI extractions.
 */
export default function StepByStep({ title, steps }: StepByStepProps) {
  return (
    <section className="mb-12" aria-label={title}>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-8 h-px bg-electric-sapphire"></div>
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight m-0">{title}</h2>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-electric-sapphire before:via-white/10 before:to-transparent">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline marker */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030303] bg-electric-sapphire text-black font-black text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              {idx + 1}
            </div>
            
            {/* Content box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:border-electric-sapphire/30 transition-colors shadow-lg">
              <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
