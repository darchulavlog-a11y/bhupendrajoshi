import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ContentProvider, useContent } from './context/ContentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Section components
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CDCLibrarySection } from './components/sections/CDCLibrarySection';
import { StudyNotesSection } from './components/sections/StudyNotesSection';
import { ModelQuestionsSection } from './components/sections/ModelQuestionsSection';
import { BlogSection } from './components/sections/BlogSection';
import { GallerySection } from './components/sections/GallerySection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { ContactSection } from './components/sections/ContactSection';
import { PrivacyTermsSection } from './components/sections/PrivacyTermsSection';

// Modals and Interactive Tools
import { BhupendraAIModal } from './components/BhupendraAIModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { DegreeAngleCalculatorModal } from './components/DegreeAngleCalculatorModal';
import { DarchulaCoordinatesModal } from './components/DarchulaCoordinatesModal';

import { Compass, AlertOctagon, Home } from 'lucide-react';

const MainApp: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const {
    isDegreeCalcOpen,
    setIsDegreeCalcOpen,
    isDarchulaMapOpen,
    setIsDarchulaMapOpen
  } = useContent();

  const [is404Active, setIs404Active] = useState(false);

  // Simple hash router check for testing 404
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#404') {
        setIs404Active(true);
      } else {
        setIs404Active(false);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className={`min-h-screen text-slate-100 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-900'}`}>
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      {is404Active ? (
        /* Custom 404 View */
        <main className="min-h-[80vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto">
              <AlertOctagon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold text-white">404</h1>
            <h2 className="text-lg font-bold text-cyan-300">
              {language === 'ne' ? 'पृष्ठ फेला परेन' : 'Page Not Found'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'ne'
                ? 'तपाईंले खोज्नुभएको पृष्ठ फेला परेन। कृपया गृहपृष्ठमा फर्कनुहोस् वा सीडीसी पुस्तकालय हेर्नुहोस्।'
                : 'The page you are looking for does not exist or has been relocated. Head back home or explore the CDC digital library.'}
            </p>
            <a
              href="#home"
              onClick={() => setIs404Active(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
            >
              <Home className="w-4 h-4" />
              <span>{language === 'ne' ? 'गृहपृष्ठमा फर्कनुहोस्' : 'Return to Home'}</span>
            </a>
          </div>
        </main>
      ) : (
        <main className="relative">
          {/* 1. Home Section */}
          <HeroSection />

          {/* 2. About Me Section */}
          <AboutSection />

          {/* 3. Education Section */}
          <EducationSection />

          {/* 4. Skills and Technologies */}
          <SkillsSection />

          {/* 5. Projects Portfolio */}
          <ProjectsSection />

          {/* 7. CDC Nepal Grade 9 Digital Library */}
          <CDCLibrarySection />

          {/* 8. Study Notes and Learning Hub */}
          <StudyNotesSection />

          {/* 9. Model Questions and Exam Preparation */}
          <ModelQuestionsSection />

          {/* 10. Blog and Articles */}
          <BlogSection />

          {/* 11. Gallery and Media */}
          <GallerySection />

          {/* 12. Achievements and Certificates */}
          <AchievementsSection />

          {/* 13. Useful Educational Resources */}
          <ResourcesSection />

          {/* 14. Contact Me */}
          <ContactSection />

          {/* 15. Privacy Policy & Terms */}
          <PrivacyTermsSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Floating Bhupendra AI Assistant */}
      <BhupendraAIModal />

      {/* Modals & Tools */}
      <ProjectDetailModal />
      <GlobalSearchModal />
      <AdminDashboardModal />
      <DegreeAngleCalculatorModal
        isOpen={isDegreeCalcOpen}
        onClose={() => setIsDegreeCalcOpen(false)}
      />
      <DarchulaCoordinatesModal
        isOpen={isDarchulaMapOpen}
        onClose={() => setIsDarchulaMapOpen(false)}
      />

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ContentProvider>
          <MainApp />
        </ContentProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
