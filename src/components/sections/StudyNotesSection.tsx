import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { StudyNote } from '../../types';
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const StudyNotesSection: React.FC = () => {
  const { language } = useLanguage();
  const { content, selectedNote, setSelectedNote, setIsDegreeCalcOpen } = useContent();

  const [activeSubjectFilter, setActiveSubjectFilter] = useState<string>('all');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  const notes = content.notes || [];

  const filteredNotes = notes.filter((n) => {
    if (activeSubjectFilter === 'all') return true;
    return n.subjectId === activeSubjectFilter;
  });

  const toggleSolution = (key: string) => {
    setExpandedSolutions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="notes" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'अध्ययन नोटहरू र सूत्रहरू' : 'Study Notes & Formulas'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'कक्षा ९ अध्यायगत नोटहरू र समाधान' : 'Curriculum Notes & Worked Solutions'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'मुख्य परिभाषाहरू, गणितका सूत्रहरू, विज्ञानका नियमहरू र चरणबद्ध समाधान'
              : 'Essential definitions, core formulas, scientific principles, and worked examination examples.'}
          </p>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Subjects', labelNe: 'सबै विषय' },
            { id: 'mathematics', label: 'Mathematics', labelNe: 'गणित' },
            { id: 'science', label: 'Science & Tech', labelNe: 'विज्ञान तथा प्रविधि' },
            { id: 'nepali', label: 'Nepali Byakaran', labelNe: 'नेपाली व्याकरण' },
            { id: 'computer-science', label: 'Computer Science', labelNe: 'कम्प्युटर विज्ञान' }
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubjectFilter(sub.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                activeSubjectFilter === sub.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {language === 'ne' ? sub.labelNe : sub.label}
            </button>
          ))}
        </div>

        {/* Study Notes Cards */}
        <div className="space-y-8">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition shadow-xl space-y-6"
            >
              {/* Note Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <span>{note.chapterName}</span>
                    <span>•</span>
                    <span className="uppercase">{note.subjectId}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {language === 'ne' ? note.titleNe : note.title}
                  </h3>
                </div>
                {note.subjectId === 'mathematics' && (
                  <button
                    onClick={() => setIsDegreeCalcOpen(true)}
                    className="self-start sm:self-center px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-bold text-xs border border-cyan-500/30 transition flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>{language === 'ne' ? 'कोण क्यालकुलेटर खोल्नुहोस्' : 'Open Angle Calculator'}</span>
                  </button>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                {language === 'ne' ? note.summaryNe : note.summary}
              </p>

              {/* Formulas Grid if any */}
              {note.formulas && note.formulas.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'मुख्य सूत्रहरू (Essential Formulas):' : 'Key Mathematical / Scientific Formulas:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {note.formulas.map((f, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 space-y-1.5"
                      >
                        <span className="text-xs font-semibold text-slate-300 block">{f.name}</span>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 font-mono text-cyan-300 text-sm font-bold text-center">
                          {f.formula}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {language === 'ne' ? f.explanationNe : f.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Definitions */}
              {note.definitions && note.definitions.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'महत्त्वपूर्ण परिभाषाहरू (Important Definitions):' : 'Important Definitions:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {note.definitions.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1"
                      >
                        <span className="font-bold text-white block">
                          {language === 'ne' ? d.termNe : d.term}
                        </span>
                        <p className="text-slate-300 leading-relaxed">
                          {language === 'ne' ? d.meaningNe : d.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Worked Examples */}
              {note.workedExamples && note.workedExamples.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'हल गरिएका उदाहरणहरू (Worked Examples):' : 'Worked Examples & Step-by-Step Solutions:'}
                  </h4>
                  <div className="space-y-3">
                    {note.workedExamples.map((ex, exIdx) => {
                      const exKey = `${note.id}-ex-${exIdx}`;
                      const isExpanded = expandedSolutions[exKey] ?? true;

                      return (
                        <div
                          key={exIdx}
                          className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2 font-semibold text-white">
                            <span>
                              {language === 'ne' ? ex.questionNe : ex.question}
                            </span>
                            <button
                              onClick={() => toggleSolution(exKey)}
                              className="text-cyan-400 hover:text-cyan-300 shrink-0"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 font-mono text-cyan-200 whitespace-pre-line text-[11px] leading-relaxed">
                              {language === 'ne' ? ex.solutionNe : ex.solution}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Practice Questions */}
              {note.practiceQuestions && note.practiceQuestions.length > 0 && (
                <div className="space-y-3 border-t border-slate-800 pt-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-purple-400 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'परीक्षा अभ्यास प्रश्नहरू (Practice Questions):' : 'Exam Practice Questions:'}
                  </h4>
                  <div className="space-y-2">
                    {note.practiceQuestions.map((pq, pqIdx) => {
                      const pqKey = `${note.id}-pq-${pqIdx}`;
                      const showAnswer = expandedSolutions[pqKey];

                      return (
                        <div
                          key={pqIdx}
                          className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-slate-200">
                              {language === 'ne' ? pq.questionNe : pq.question}
                            </span>
                            <button
                              onClick={() => toggleSolution(pqKey)}
                              className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-cyan-400 hover:bg-slate-700 transition shrink-0"
                            >
                              {showAnswer
                                ? (language === 'ne' ? 'उत्तर लुकाउनुहोस्' : 'Hide Answer')
                                : (language === 'ne' ? 'उत्तर हेर्नुहोस्' : 'Show Answer')}
                            </button>
                          </div>

                          {showAnswer && (
                            <div className="p-3 rounded bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                              {language === 'ne' ? pq.answerNe : pq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Official Reference Footer */}
              {note.officialReference && (
                <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Reference: {note.officialReference}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified CDC Framework
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
