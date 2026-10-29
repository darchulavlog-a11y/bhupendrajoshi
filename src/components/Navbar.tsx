import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useContent } from '../context/ContentContext';
import {
  Search,
  Moon,
  Sun,
  Globe,
  Bot,
  Menu,
  X,
  Sparkles,
  BookOpen,
  FolderKanban,
  User,
  GraduationCap
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { setIsAiModalOpen, setIsSearchOpen } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#about', label: t('navAbout') },
    { href: '#education', label: t('navEducation') },
    { href: '#skills', label: t('navSkills') },
    { href: '#projects', label: t('navProjects') },
    { href: '#cdc-library', label: t('navCDCLibrary') },
    { href: '#notes', label: t('navNotes') },
    { href: '#model-questions', label: t('navModelQuestions') },
    { href: '#blog', label: t('navBlog') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#achievements', label: t('navAchievements') },
    { href: '#resources', label: t('navResources') },
    { href: '#contact', label: t('navContact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-slate-950/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-cyan-400 text-base">
              BJ
            </div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>{language === 'ne' ? 'भुपेन्द्र जोशी' : 'Bhupendra Joshi'}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
            </div>
            <p className="text-[10px] text-cyan-400 font-mono hidden sm:block">
              {language === 'ne' ? 'कक्षा ९ • दार्चुला, नेपाल' : 'Grade 9 • Darchula, Nepal'}
            </p>
          </div>
        </a>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-slate-300">
          <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navAbout')}
          </a>
          <a href="#education" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navEducation')}
          </a>
          <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navSkills')}
          </a>
          <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navProjects')}
          </a>
          <a href="#cdc-library" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition font-semibold text-cyan-400">
            {t('navCDCLibrary')}
          </a>
          <a href="#notes" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navNotes')}
          </a>
          <a href="#model-questions" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navModelQuestions')}
          </a>
          <a href="#blog" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navBlog')}
          </a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-850 transition">
            {t('navContact')}
          </a>
        </nav>

        {/* Utility Controls (Search, Lang, Theme, AI Chat) */}
        <div className="flex items-center gap-2">
          
          {/* Quick Search trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition text-xs"
            title="Search site (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline">{language === 'ne' ? 'खोज्नुहोस्' : 'Search'}</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-slate-950 rounded text-slate-500 font-mono border border-slate-800">
              Ctrl+K
            </kbd>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-semibold transition"
            title={language === 'en' ? 'नेपालीमा हेर्नुहोस्' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{language === 'en' ? '🇳🇵 नेपाली' : '🇬🇧 EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition text-xs"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Bhupendra AI Direct Button */}
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition"
          >
            <Bot className="w-4 h-4" />
            <span>{t('aiChatTitle')}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-950/50 text-slate-200 hover:text-cyan-300 text-xs font-medium border border-slate-800 hover:border-cyan-500/30 transition flex items-center gap-2"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAiModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-500/30"
            >
              <Bot className="w-4 h-4" />
              <span>{language === 'ne' ? 'भुपेन्द्र एआई सहायक खोल्नुहोस्' : 'Open Bhupendra AI'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
