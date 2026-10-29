import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  GraduationCap,
  School,
  Calendar,
  BookOpen,
  Award,
  CheckCircle,
  FileCheck
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();
  const profile = content.profile;

  const academicProfile = [
    {
      level: "Grade 9 (Secondary Level)",
      levelNe: "कक्षा ९ (माध्यमिक तह)",
      section: "Section 'E'",
      sectionNe: "सेक्सन 'ई'",
      institution: "Mahendra Model Secondary School",
      institutionNe: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला",
      academicYear: "2081 / 2082 BS (2025 / 2026 AD)",
      status: "Currently Enrolled",
      statusNe: "हाल अध्ययनरत",
      description: "Pursuing secondary education aligned with the National Curriculum Framework governed by Curriculum Development Centre (CDC), Sanothimi, Bhaktapur.",
      descriptionNe: "पाठ्यक्रम विकास केन्द्र (CDC) नेपालद्वारा निर्देशित राष्ट्रिय पाठ्यक्रम ढाँचा अनुरूप माध्यमिक तहको अध्ययन।"
    },
    {
      level: "Basic Level Examination (Grade 8 - BLE)",
      levelNe: "आधारभूत तह परीक्षा (कक्षा ८ - BLE)",
      section: "District Level Board Examination",
      sectionNe: "जिल्लास्तरीय बोर्ड परीक्षा",
      institution: "Darchula District Education Coordination Unit",
      institutionNe: "शिक्षा विकास तथा समन्वय इकाइ, दार्चुला",
      academicYear: "2080 BS (2024 AD)",
      status: "Graduated with Distinction",
      statusNe: "विशिष्ट श्रेणीमा उत्तीर्ण",
      description: "Successfully cleared the standardized district-level board examination with strong honors in Mathematics, Science, and Computer Studies.",
      descriptionNe: "गणित, विज्ञान र कम्प्युटर अध्ययनमा उत्कृष्ट नतिजा सहित आधारभूत तह सम्पन्न।"
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'शैक्षिक विवरण' : 'Education Profile'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'विद्यालय तथा शैक्षिक यात्रा' : 'Academic Journey & Schooling'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुलामा कक्षा ९ को नियमित अध्ययन तथा पाठ्यक्रम ढाँचा'
              : 'Formal schooling at Mahendra Model Secondary School under the verified CDC Nepal curriculum.'}
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {academicProfile.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-semibold">
                    {item.academicYear}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {language === 'ne' ? item.levelNe : item.level}
                  </h3>
                  <div className="text-sm text-cyan-300 font-medium">
                    {language === 'ne' ? item.sectionNe : item.section}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 text-cyan-400 border border-slate-700">
                  <School className="w-6 h-6" />
                </div>
              </div>

              <div className="text-sm text-slate-300 flex items-center gap-2">
                <span className="font-semibold text-white">
                  {language === 'ne' ? item.institutionNe : item.institution}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                {language === 'ne' ? item.descriptionNe : item.description}
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{language === 'ne' ? item.statusNe : item.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CDC Grade 9 Curriculum Framework Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>{language === 'ne' ? 'कक्षा ९ पाठ्यक्रम विकास केन्द्र (CDC) ढाँचा' : 'CDC Nepal Grade 9 Curriculum Framework'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'ne' ? 'अनिवार्य तथा ऐच्छिक विषयहरूको आधिकारिक तालिका' : 'Official compulsory and optional subjects breakdown'}
              </p>
            </div>
            <a
              href="#cdc-library"
              className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition"
            >
              {language === 'ne' ? 'डिजिटल लाइब्रेरीमा जानुहोस्' : 'Explore Subjects in Library'}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-cyan-400 text-[10px]">MTH-901</span>
              <div className="font-bold text-white mt-1">Mathematics</div>
              <div className="text-slate-400 text-[11px]">अनिवार्य गणित</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-emerald-400 text-[10px]">SCI-902</span>
              <div className="font-bold text-white mt-1">Science & Tech</div>
              <div className="text-slate-400 text-[11px]">विज्ञान तथा प्रविधि</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-amber-400 text-[10px]">NEP-903</span>
              <div className="font-bold text-white mt-1">Nepali</div>
              <div className="text-slate-400 text-[11px]">अनिवार्य नेपाली</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-indigo-400 text-[10px]">ENG-904</span>
              <div className="font-bold text-white mt-1">English</div>
              <div className="text-slate-400 text-[11px]">अनिवार्य अंग्रेजी</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-orange-400 text-[10px]">SOC-905</span>
              <div className="font-bold text-white mt-1">Social Studies</div>
              <div className="text-slate-400 text-[11px]">सामाजिक अध्ययन</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-blue-400 text-[10px]">CMP-906</span>
              <div className="font-bold text-white mt-1">Computer Science</div>
              <div className="text-slate-400 text-[11px]">कम्प्युटर विज्ञान</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-purple-400 text-[10px]">OPT-907</span>
              <div className="font-bold text-white mt-1">Optional Math</div>
              <div className="text-slate-400 text-[11px]">ऐच्छिक गणित</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-rose-400 text-[10px]">HPE-908</span>
              <div className="font-bold text-white mt-1">Health & Physical</div>
              <div className="text-slate-400 text-[11px]">स्वास्थ्य र शारीरिक</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
