import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { CDCSubject } from '../../types';
import {
  BookOpen,
  Calculator,
  Atom,
  Languages,
  Compass,
  Laptop,
  Binary,
  Activity,
  ArrowRight,
  Search,
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const CDCLibrarySection: React.FC = () => {
  const { language } = useLanguage();
  const { content, selectedSubject, setSelectedSubject, setSelectedNote } = useContent();

  const [searchQuery, setSearchQuery] = useState('');
  const subjects = content.subjects || [];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return Calculator;
      case 'Atom': return Atom;
      case 'BookOpen': return BookOpen;
      case 'Languages': return Languages;
      case 'Compass': return Compass;
      case 'Laptop': return Laptop;
      case 'Binary': return Binary;
      case 'Activity': return Activity;
      default: return BookOpen;
    }
  };

  const filteredSubjects = subjects.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.nameNe.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <section id="cdc-library" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'सीडीसी नेपाल डिजिटल पुस्तकालय' : 'CDC Nepal Grade 9 Digital Library'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'कक्षा ९ पाठ्यक्रम अध्ययन केन्द्र' : 'Curriculum-Aligned Learning Hub'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'पाठ्यक्रम विकास केन्द्र (CDC) सानोठिमीद्वारा अनुमोदित ८ वटा आधिकारिक विषय, पाठगत शीर्षक तथा सन्दर्भ सामग्री'
              : 'Official subject syllabi, verified chapter lists, essential definitions, formulas, and learning guides.'}
          </p>
        </div>

        {/* Search Bar for Subjects */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ne'
                  ? 'विषय वा कोड खोज्नुहोस् (जस्तै: गणित, Science, MTH-901)...'
                  : 'Search subjects or codes (e.g. Math, Science, MTH-901)...'
              }
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        {/* Subjects 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredSubjects.map((subj) => {
            const Icon = getSubjectIcon(subj.icon);
            const isSelected = selectedSubject?.id === subj.id;

            return (
              <div
                key={subj.id}
                onClick={() => setSelectedSubject(isSelected ? null : subj)}
                className={`p-6 rounded-2xl border transition duration-300 cursor-pointer flex flex-col justify-between group shadow-lg ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-cyan-950/50'
                    : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${subj.color} text-slate-950 font-bold shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                      {subj.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                      {language === 'ne' ? subj.nameNe : subj.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {language === 'ne' ? subj.descriptionNe : subj.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-850 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    {subj.totalChapters} {language === 'ne' ? 'अध्याय' : 'Chapters'}
                  </span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                    <span>{isSelected ? (language === 'ne' ? 'बन्द गर्नुहोस्' : 'Close') : (language === 'ne' ? 'पाठहरू' : 'Chapters')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Subject Expanded Chapter Explorer */}
        {selectedSubject && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-cyan-500/40 shadow-2xl space-y-6 animate-in fade-in duration-200 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedSubject.code} • Verified CDC Nepal Grade 9 Curriculum
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {language === 'ne' ? selectedSubject.nameNe : selectedSubject.name} — {language === 'ne' ? 'सम्पूर्ण पाठहरू' : 'Syllabus & Chapters'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSubject(null)}
                className="self-start sm:self-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
              >
                {language === 'ne' ? 'बन्द गर्नुहोस्' : 'Close Explorer'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedSubject.chapters.map((ch) => (
                <div
                  key={ch.number}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center border border-cyan-500/20 shrink-0">
                      {ch.number}
                    </span>
                    <h4 className="font-bold text-white text-sm">
                      {language === 'ne' ? ch.titleNe : ch.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 pl-8">
                    {ch.topics.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] border border-slate-800"
                      >
                        • {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified with CDC Sanothimi Grade 9 Curriculum Framework</span>
              </span>
              <a
                href="#notes"
                className="text-cyan-400 hover:underline font-semibold flex items-center gap-1"
              >
                <span>{language === 'ne' ? 'यस विषयका विस्तृत नोटहरू पढ्नुहोस्' : 'Read Chapter Notes for this Subject'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Future Expandability Note for Grade 10 & SEE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-950 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm">
                {language === 'ne' ? 'भविष्यको तयारी: कक्षा १० र SEE परीक्षा' : 'Future Expansion: Grade 10 & SEE Preparation'}
              </span>
              <span className="text-slate-400">
                {language === 'ne'
                  ? 'कक्षा ९ सम्पन्न भएपछि यस डिजिटल पुस्तकालयमा कक्षा १० र SEE परीक्षाका नमुना प्रश्नहरू थपिनेछ।'
                  : 'Architected to seamlessly expand to Grade 10 and Secondary Education Examination (SEE) preparation.'}
              </span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider shrink-0">
            Expandable Architecture
          </span>
        </div>

      </div>
    </section>
  );
};
