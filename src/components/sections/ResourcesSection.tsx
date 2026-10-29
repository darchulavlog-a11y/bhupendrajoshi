import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  ExternalLink,
  BookMarked,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();

  const resources = content.resources || [];
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Resources', labelNe: 'सबै स्रोतहरू' },
    { id: 'official-cdc', label: 'Official CDC & Nepal Gov', labelNe: 'आधिकारिक सीडीसी पोर्टल' },
    { id: 'math', label: 'Mathematics Tools', labelNe: 'गणितीय औजार' },
    { id: 'science', label: 'Science Simulations', labelNe: 'विज्ञान सिमुलेसन' },
    { id: 'coding', label: 'Programming & Web', labelNe: 'कोडिङ तथा वेब' }
  ];

  const filteredResources = resources.filter((r) => {
    if (activeFilter === 'all') return true;
    return r.category === activeFilter;
  });

  return (
    <section id="resources" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <BookMarked className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'उपयोगी शैक्षिक स्रोतहरू' : 'Useful Educational Resources'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'आधिकारिक पोर्टल तथा सिकाइ निर्देशिका' : 'Curated Learning Directory & Portals'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'पाठ्यक्रम विकास केन्द्रको आधिकारिक वेबसाइट, राष्ट्रिय ई-पुस्तकालय, र अन्तर्राष्ट्रिय अध्ययन मञ्चहरू'
              : 'Direct links to official CDC Nepal portals, national open libraries, and STEM documentation.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {language === 'ne' ? tab.labelNe : tab.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <a
              key={res.id}
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono border ${
                      res.isOfficial
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {res.badge}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {language === 'ne' ? res.titleNe : res.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ne' ? res.descriptionNe : res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 mt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="truncate max-w-[200px]">{res.url.replace('https://', '')}</span>
                <span className="text-cyan-400 group-hover:underline">Visit Portal</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
