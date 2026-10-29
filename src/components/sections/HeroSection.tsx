import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  Sparkles,
  Bot,
  BookOpen,
  ArrowRight,
  Code2,
  Compass,
  MapPin,
  School,
  Play,
  Calculator,
  Laptop
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    content,
    setIsAiModalOpen,
    setIsDegreeCalcOpen,
    setIsDarchulaMapOpen
  } = useContent();

  const profile = content.profile;

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{language === 'ne' ? 'कक्षा ९, सेक्सन \'ई\' • महेन्द्र नमुना मा.वि.' : 'Grade 9, Section \'E\' • Mahendra Model Sec. School'}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest font-mono text-cyan-400 font-bold">
                {t('heroGreeting')}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {language === 'ne' ? profile.nameNe : profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-300">
                {language === 'ne' ? profile.taglineNe : profile.tagline}
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {language === 'ne' ? profile.aboutBioNe : profile.aboutBio}
            </p>

            {/* District & School badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <button
                onClick={() => setIsDarchulaMapOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'ne' ? 'दार्चुला, सुदूरपश्चिम (२९.८४° N, ८०.५३° E)' : 'Darchula, Nepal (29.84° N, 80.53° E)'}</span>
              </button>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800">
                <School className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'ne' ? 'महेन्द्र नमुना माध्यमिक विद्यालय' : 'Mahendra Model Secondary School'}</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2.5 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition active:scale-95"
              >
                <Bot className="w-4 h-4" />
                <span>{t('heroAskAI')}</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>

              <a
                href="#cdc-library"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-white font-semibold text-sm flex items-center gap-2 border border-slate-700/80 hover:border-cyan-500/40 transition"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{t('heroOpenCDCLibrary')}</span>
              </a>

              <a
                href="#projects"
                className="px-5 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-800 transition"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>{t('heroExploreProjects')}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Card & Quick Simulation Trigger */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-full max-w-md">
              {/* Glowing decorative frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-900 border border-cyan-500/30 p-6 shadow-2xl text-slate-100 space-y-5">
                
                {/* Profile Header within card */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-cyan-400">
                      BJ
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      <span>{language === 'ne' ? profile.nameNe : profile.name}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      {language === 'ne' ? profile.titleNe : profile.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === 'ne' ? 'दार्चुला, नेपाल' : 'Darchula, Nepal'} • 2081/2082 BS
                    </p>
                  </div>
                </div>

                {/* Quick Interactive Tool Highlights */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    {language === 'ne' ? 'प्रत्यक्ष अन्तरक्रियात्मक औजारहरू:' : 'Interactive Educational Tools:'}
                  </span>

                  {/* Degree Gradian Radian quick launch */}
                  <div
                    onClick={() => setIsDegreeCalcOpen(true)}
                    className="p-3 rounded-xl bg-slate-950/70 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                          {language === 'ne' ? 'डिग्री-ग्रेड-रेडियन क्यालकुलेटर' : 'Degree, Grade & Radian System'}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          D / 180 = G / 200 = R / π
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                      {language === 'ne' ? 'चलाउनुहोस्' : 'Launch'}
                    </span>
                  </div>

                  {/* Darchula Coordinates quick launch */}
                  <div
                    onClick={() => setIsDarchulaMapOpen(true)}
                    className="p-3 rounded-xl bg-slate-950/70 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/40 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-300">
                          {language === 'ne' ? 'दार्चुला जीपीएस कोअर्डिनेट नक्सा' : 'Darchula & School Coordinates'}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          School • Api Peak (7,132m) • Mahakali
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold group-hover:bg-blue-500 group-hover:text-slate-950 transition">
                      {language === 'ne' ? 'हेर्नुहोस्' : 'Explore'}
                    </span>
                  </div>

                  {/* Ask Bhupendra AI quick chat prompt */}
                  <div
                    onClick={() => setIsAiModalOpen(true)}
                    className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 hover:from-cyan-900/50 hover:to-indigo-900/50 border border-cyan-500/30 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-200">
                          {language === 'ne' ? 'भुपेन्द्र AI सहायक' : 'Ask Bhupendra AI'}
                        </div>
                        <div className="text-[10px] text-cyan-400 font-mono">
                          {language === 'ne' ? 'सीडीसी पाठ्यक्रम सम्बन्धी सोध्नुहोस्' : 'Trained on Grade 9 CDC syllabus'}
                        </div>
                      </div>
                    </div>
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Academic Quick Stat bar */}
                <div className="pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-950/60">
                    <div className="text-base font-bold text-cyan-400 font-mono">8</div>
                    <div className="text-[9px] text-slate-400 uppercase">CDC Subjects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60">
                    <div className="text-base font-bold text-emerald-400 font-mono">7+</div>
                    <div className="text-[9px] text-slate-400 uppercase">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60">
                    <div className="text-base font-bold text-purple-400 font-mono">24/7</div>
                    <div className="text-[9px] text-slate-400 uppercase">Bhupendra AI</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
