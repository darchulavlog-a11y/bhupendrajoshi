import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { Project } from '../../types';
import {
  FolderKanban,
  ExternalLink,
  Layers,
  Play,
  Code2,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const {
    content,
    setSelectedProject,
    setIsDegreeCalcOpen,
    setIsDarchulaMapOpen,
    setIsAiModalOpen
  } = useContent();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const projects = content.projects || [];

  // Available categories based on prompt specification
  const categories = [
    { en: 'All', ne: 'सबै' },
    { en: 'Degree, gradian, and radian systems', ne: 'डिग्री, ग्रेड र रेडियन प्रणाली' },
    { en: 'School geography and coordinates', ne: 'विद्यालय भूगोल तथा कोअर्डिनेट' },
    { en: 'Personal portfolio website', ne: 'व्यक्तिगत पोर्टफोलियो वेबसाइट' },
    { en: 'Scratch Solar System', ne: 'स्क्र्याच सौर्यमण्डल' },
    { en: 'HTML, CSS, and JavaScript projects', ne: 'HTML, CSS र JS परियोजनाहरू' },
    { en: 'Business and entrepreneurship ideas', ne: 'उद्यमशीलता अवधारणाहरू' },
    { en: 'PowerPoint presentations', ne: 'पावरपोइन्ट प्रस्तुतीकरणहरू' }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' ||
      p.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.titleNe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleLaunchInteractive = (proj: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (proj.id === 'degree-gradian-radian-system') {
      setIsDegreeCalcOpen(true);
    } else if (proj.id === 'darchula-school-coordinates-explorer') {
      setIsDarchulaMapOpen(true);
    } else if (proj.id === 'bhupendra-portfolio-hub') {
      setIsAiModalOpen(true);
    } else {
      setSelectedProject(proj);
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'परियोजना पोर्टफोलियो' : 'Projects Portfolio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'सिर्जना गरिएका डिजिटल परियोजनाहरू' : 'Applied Projects & Innovations'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'गणित, विज्ञान, भूगोल र वेब प्रविधिलाई जोड्ने अन्तरक्रियात्मक सफ्टवेयर तथा शैक्षिक औजारहरू'
              : 'Interactive software and educational applications bridging mathematics, physics, and web code.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => {
            const isSelected = activeCategory === cat.en;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {language === 'ne' ? cat.ne : cat.en}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const hasInteractiveTool =
              proj.id === 'degree-gradian-radian-system' ||
              proj.id === 'darchula-school-coordinates-explorer' ||
              proj.id === 'bhupendra-portfolio-hub';

            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition duration-300 shadow-xl overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Project Image & Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                      {language === 'ne' ? proj.categoryNe : proj.category}
                    </span>
                  </div>
                  {hasInteractiveTool && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold shadow-sm animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        Live Demo
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                      {language === 'ne' ? proj.titleNe : proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {language === 'ne' ? proj.descriptionNe : proj.description}
                    </p>
                  </div>

                  {/* Tools list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tools.slice(0, 4).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-cyan-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-semibold group-hover:text-cyan-300 transition flex items-center gap-1">
                      <span>{language === 'ne' ? 'विस्तृत विवरण' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition" />
                    </span>

                    {hasInteractiveTool && (
                      <button
                        onClick={(e) => handleLaunchInteractive(proj, e)}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-bold text-xs border border-cyan-500/30 transition flex items-center gap-1.5"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{language === 'ne' ? 'डेमो' : 'Launch'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
