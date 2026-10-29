import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  FileCheck2,
  Clock,
  Award,
  BookOpen,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export const ModelQuestionsSection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();

  const modelSets = content.modelQuestions || [];
  const [activeSetId, setActiveSetId] = useState<string>(modelSets[0]?.id || '');
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});

  const currentSet = modelSets.find((s) => s.id === activeSetId) || modelSets[0];

  const toggleHint = (qId: string) => {
    setRevealedHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <section id="model-questions" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'नमुना प्रश्नपत्र तथा परीक्षा तयारी' : 'Model Questions & Exam Prep'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'सीडीसी कक्षा ९ नमुना प्रश्न सेटहरू' : 'CDC Grade 9 Model Question Sets'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'पाठ्यक्रम विकास केन्द्रको आधिकारिक परीक्षा संरचना अनुसार समूह क, ख र ग का प्रश्नहरू'
              : 'Standardized examination sets formatted per the CDC specification grid (Groups A, B, and C).'}
          </p>
        </div>

        {/* Set Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {modelSets.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSetId(s.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeSetId === s.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {language === 'ne' ? s.titleNe : s.title}
            </button>
          ))}
        </div>

        {/* Current Set Display */}
        {currentSet && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-8">
            
            {/* Exam Specification Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/20 text-xs">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {language === 'ne' ? currentSet.titleNe : currentSet.title}
                </h3>
                <span className="text-cyan-400 font-mono">Academic Session {currentSet.year}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 font-mono">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Full Marks: {currentSet.fullMarks} (Pass: {currentSet.passMarks})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Time: {currentSet.timeLimit}</span>
                </div>
              </div>
            </div>

            {/* Questions by Sections */}
            <div className="space-y-6">
              {currentSet.sections.map((sec, secIdx) => (
                <div key={secIdx} className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h4 className="font-bold text-white text-sm sm:text-base text-cyan-300">
                      {language === 'ne' ? sec.nameNe : sec.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">
                      {sec.marksPerQuestion} Mark{sec.marksPerQuestion > 1 ? 's' : ''} each
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {sec.questions.map((q, qIdx) => {
                      const isRevealed = revealedHints[q.id];

                      return (
                        <div
                          key={q.id}
                          className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-xs space-y-2"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-2.5">
                              <span className="font-mono text-cyan-400 font-bold">
                                Q{qIdx + 1}.
                              </span>
                              <span className="font-medium text-slate-200 leading-relaxed text-sm">
                                {language === 'ne' ? q.qNe : q.q}
                              </span>
                            </div>
                            {q.answerHint && (
                              <button
                                onClick={() => toggleHint(q.id)}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition shrink-0"
                                title="Toggle hint / answer"
                              >
                                {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            )}
                          </div>

                          {isRevealed && q.answerHint && (
                            <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 font-mono text-[11px] flex items-start gap-2 animate-in fade-in duration-150">
                              <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold block text-cyan-300">
                                  {language === 'ne' ? 'समाधान संकेत:' : 'Answer Hint / Solution Outline:'}
                                </span>
                                <span>{language === 'ne' ? q.answerHintNe : q.answerHint}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Exam Tips Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
              <h5 className="font-bold text-amber-300 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>{language === 'ne' ? 'कक्षा ९ परीक्षा तयारी महत्त्वपूर्ण सुझावहरू:' : 'Grade 9 CDC Board Exam Success Tips:'}</span>
              </h5>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>
                  {language === 'ne'
                    ? 'गणितमा सूत्र र एकाइ (जस्तै °, g, rad, Pa, N/m²) अनिवार्य रूपमा स्पष्ट लेख्नुहोस्।'
                    : 'In Mathematics & Science, always state the core formula and proper units (e.g., °, rad, Pa, N).'}
                </li>
                <li>
                  {language === 'ne'
                    ? 'समूह \'क\' का अति संक्षिप्त प्रश्नहरूमा सिधै मुख्य सूत्र वा परिभाषा १-२ वाक्यमा लेख्नुहोस्।'
                    : 'In Group A (1 mark), keep answers crisp and direct without lengthy introductory text.'}
                </li>
                <li>
                  {language === 'ne'
                    ? 'विज्ञानका रेखाचित्रहरू (जस्तै पास्कलको लिफ्ट वा आँखाको बनोट) सफा र पेन्सिलले नामकरण गर्नुहोस्।'
                    : 'Draw neat scientific diagrams (Hydraulic Lift, Archimedes apparatus) with clear labels using pencil.'}
                </li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
