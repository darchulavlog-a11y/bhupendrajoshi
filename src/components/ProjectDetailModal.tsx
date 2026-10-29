import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { X, ExternalLink, Github, Code, CheckCircle2, AlertCircle, Play, Layers } from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { language } = useLanguage();
  const {
    selectedProject,
    setSelectedProject,
    setIsDegreeCalcOpen,
    setIsDarchulaMapOpen,
    setIsAiModalOpen
  } = useContent();

  if (!selectedProject) return null;

  const handleLaunchDemo = () => {
    if (selectedProject.id === 'degree-gradian-radian-system') {
      setIsDegreeCalcOpen(true);
    } else if (selectedProject.id === 'darchula-school-coordinates-explorer') {
      setIsDarchulaMapOpen(true);
    } else if (selectedProject.id === 'bhupendra-portfolio-hub') {
      setIsAiModalOpen(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image and category */}
        <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 border border-slate-800">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                {language === 'ne' ? selectedProject.categoryNe : selectedProject.category}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 drop-shadow-md">
                {language === 'ne' ? selectedProject.titleNe : selectedProject.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Tools and Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tools.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-mono font-medium"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pb-6 border-b border-slate-800 mb-6">
          {(selectedProject.id === 'degree-gradian-radian-system' ||
            selectedProject.id === 'darchula-school-coordinates-explorer' ||
            selectedProject.id === 'bhupendra-portfolio-hub') && (
            <button
              onClick={handleLaunchDemo}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition"
            >
              <Play className="w-4 h-4 fill-current" />
              {language === 'ne' ? 'प्रत्यक्ष अन्तरक्रियात्मक डेमो सुरु गर्नुहोस्' : 'Launch Interactive Demo'}
            </button>
          )}

          {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
            <a
              href={selectedProject.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 border border-slate-700 transition"
            >
              <ExternalLink className="w-4 h-4" />
              {language === 'ne' ? 'लाइभ डेमो खोल्नुहोस्' : 'External Demo'}
            </a>
          )}

          {selectedProject.githubUrl && (
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 border border-slate-700 transition"
            >
              <Github className="w-4 h-4" />
              {language === 'ne' ? 'स्रोत कोड (Source Code)' : 'View Code'}
            </a>
          )}
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          {/* Overview */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              {language === 'ne' ? 'परियोजना अवलोकन (Overview)' : 'Project Overview'}
            </h3>
            <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-200">
              {language === 'ne' ? selectedProject.descriptionNe : selectedProject.description}
            </p>
          </div>

          {/* Development Process */}
          {selectedProject.detailedProcess && (
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                {language === 'ne' ? 'विकास प्रक्रिया (Development Process)' : 'Development Process & Methodology'}
              </h3>
              <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-300">
                {selectedProject.detailedProcess}
              </p>
            </div>
          )}

          {/* Challenges & Solutions */}
          {selectedProject.challenges && (
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                {language === 'ne' ? 'प्राविधिक चुनौतीहरू र समाधान' : 'Challenges Encountered & Solutions'}
              </h3>
              <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-300">
                {selectedProject.challenges}
              </p>
            </div>
          )}

          {/* Learning Outcomes */}
          {selectedProject.learningOutcomes && (
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                {language === 'ne' ? 'सिकाइ उपलब्धिहरू (Key Learning Outcomes)' : 'Key Learning Outcomes'}
              </h3>
              <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-300">
                {selectedProject.learningOutcomes}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
