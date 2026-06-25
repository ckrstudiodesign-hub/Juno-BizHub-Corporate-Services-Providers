import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ExecutiveSummaryProps {
  summary: string | string[];
  keyFacts: string[];
}

/**
 * GEO / AEO Optimized Component
 * Designed to explicitly provide a "Quick Answer" or "Executive Summary"
 * for AI retrieval and RAG systems.
 */
export default function ExecutiveSummary({ summary, keyFacts }: ExecutiveSummaryProps) {
  return (
    <section className="bg-white/5 border border-gold/30 rounded-3xl p-8 mb-12 shadow-lg shadow-black/50" aria-label="Executive Summary">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
          <Lightbulb className="text-gold w-6 h-6" />
        </div>
        <h2 className="text-2xl font-black text-white uppercase tracking-tight m-0">Quick Answer</h2>
      </div>

      <div className="text-gray-300 text-lg leading-relaxed font-light mb-8 space-y-4">
        {Array.isArray(summary) ? (
          summary.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{summary}</p>
        )}
      </div>

      {keyFacts && keyFacts.length > 0 && (
        <div className="bg-black/50 rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Key Facts</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {keyFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                <span className="text-gray-400 text-sm">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
