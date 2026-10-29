import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  Award,
  CheckCircle2,
  Calendar,
  School,
  Medal,
  ShieldCheck
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();
  const achievements = content.achievements || [];

  return (
    <section id="achievements" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'उपलब्धि तथा सहभागिता' : 'Achievements & Milestones'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'विद्यालयस्तरीय उपलब्धि तथा प्रमाणपत्र' : 'Academic & Co-Curricular Milestones'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'महेन्द्र नमुना माध्यमिक विद्यालयमा हासिल गरिएका वास्तविक सम्मान र शैक्षिक कोशेढुङ्गाहरू'
              : 'Authentic school participation, exhibition demonstrations, and academic records.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition shadow-xl space-y-3 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold w-fit">
                  {item.year}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'ne' ? 'प्रमाणित अभिलेख' : 'Verified School Record'}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {language === 'ne' ? item.titleNe : item.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <School className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'ne' ? item.organizationNe : item.organization}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                {language === 'ne' ? item.descriptionNe : item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authenticity Guarantee Notice */}
        <div className="max-w-3xl mx-auto mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
          <p>
            {language === 'ne'
              ? 'नैतिकता र सत्यनिष्ठा: यस प्रोफाइलमा कुनै पनि बनावटी वा अप्रमाणित उपाधि राखिएको छैन। सबै सहभागिता वास्तविक विद्यार्थी विवरणमा आधारित छन्।'
              : 'Academic Integrity Notice: In accordance with high ethical standards, no invented certifications or unverified titles are listed.'}
          </p>
        </div>

      </div>
    </section>
  );
};
