import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; ne: string }> = {
  // Navigation
  navHome: { en: "Home", ne: "गृहपृष्ठ" },
  navAbout: { en: "About Me", ne: "मेरो परिचय" },
  navEducation: { en: "Education", ne: "शैक्षिक विवरण" },
  navSkills: { en: "Skills & Tech", ne: "सीप तथा प्रविधि" },
  navProjects: { en: "Projects", ne: "परियोजनाहरू" },
  navCDCLibrary: { en: "CDC Grade 9 Library", ne: "सीडीसी कक्षा ९ पुस्तकालय" },
  navNotes: { en: "Study Notes", ne: "अध्ययन नोटहरू" },
  navModelQuestions: { en: "Model Questions", ne: "नमुना प्रश्नहरू" },
  navBlog: { en: "Blog", ne: "लेखहरू" },
  navGallery: { en: "Gallery", ne: "तस्बिरहरू" },
  navAchievements: { en: "Achievements", ne: "उपलब्धिहरू" },
  navResources: { en: "Resources", ne: "शैक्षिक स्रोतहरू" },
  navContact: { en: "Contact Me", ne: "सम्पर्क" },
  navPrivacy: { en: "Privacy & Terms", ne: "गोपनीयता नीति" },
  navAdmin: { en: "Admin", ne: "व्यवस्थापक" },

  // Hero Section
  heroGreeting: { en: "Hi, I am", ne: "नमस्ते, म हुँ" },
  heroClass: { en: "Grade 9 (Section E) Student & Tech Explorer", ne: "कक्षा ९ (सेक्सन 'ई') का विद्यार्थी तथा प्रविधि अन्वेषक" },
  heroSchool: { en: "Mahendra Model Secondary School, Darchula, Nepal", ne: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला, नेपाल" },
  heroTagline: { en: "Learning, Creating, and Building the Future", ne: "सिक्दै, सिर्जना गर्दै र भविष्य निर्माण गर्दै" },
  heroDescription: {
    en: "Welcome to my digital space where I showcase my coding and mathematics projects alongside a comprehensive, curriculum-aligned CDC Nepal Grade 9 study hub.",
    ne: "मेरो डिजिटल वेबसाइटमा स्वागत छ जहाँ म मेरा कोडिङ तथा गणितीय परियोजनाहरू र पाठ्यक्रम विकास केन्द्र (CDC) नेपालको कक्षा ९ का उपयोगी अध्ययन सामग्री प्रस्तुत गर्दछु।"
  },
  heroExploreProjects: { en: "Explore Projects", ne: "परियोजनाहरू हेर्नुहोस्" },
  heroOpenCDCLibrary: { en: "Open Grade 9 Library", ne: "कक्षा ९ लाइब्रेरी खोल्नुहोस्" },
  heroAskAI: { en: "Ask Bhupendra AI", ne: "भुपेन्द्र एआईसँग सोध्नुहोस्" },

  // Stats
  statGrade: { en: "Grade 9, Section E", ne: "कक्षा ९, सेक्सन 'ई'" },
  statSchool: { en: "Mahendra Model Sec. School", ne: "महेन्द्र नमुना मा.वि., दार्चुला" },
  statSubjects: { en: "8 Verified CDC Subjects", ne: "८ वटा आधिकारिक पाठ्यक्रम विषय" },
  statProjects: { en: "7+ Digital Projects", ne: "७+ डिजिटल परियोजनाहरू" },

  // Sections
  featuredProjectsTitle: { en: "Featured Projects & Innovations", ne: "प्रमुख परियोजनाहरू तथा आविष्कार" },
  featuredProjectsSubtitle: { en: "Applied mathematics, web technology, and educational tools crafted by Bhupendra", ne: "भुपेन्द्रद्वारा निर्मित व्यावहारिक गणित, वेब प्रविधि र शैक्षिक औजारहरू" },
  latestNotesTitle: { en: "CDC Grade 9 Learning Hub", ne: "सीडीसी कक्षा ९ डिजिटल सिकाइ केन्द्र" },
  latestNotesSubtitle: { en: "Curriculum-aligned chapter notes, essential formulas, definitions, and worked solutions", ne: "पाठ्यक्रममा आधारित पाठगत नोटहरू, मुख्य सूत्र, परिभाषा र समाधानहरू" },

  // Search & Global
  searchPlaceholder: { en: "Search notes, formulas, projects, or subjects (Ctrl+K)...", ne: "नोटहरू, सूत्रहरू, परियोजना वा विषयहरू खोज्नुहोस् (Ctrl+K)..." },
  allCategories: { en: "All Categories", ne: "सबै विधा" },
  viewDetails: { en: "View Details", ne: "विस्तृत विवरण" },
  tryInteractiveDemo: { en: "Try Interactive Demo", ne: "प्रत्यक्ष चलाएर हेर्नुहोस्" },
  filterBySubject: { en: "Filter by Subject", ne: "विषयअनुसार छान्नुहोस्" },

  // Chat Widget
  aiChatTitle: { en: "Bhupendra AI", ne: "भुपेन्द्र एआई" },
  aiChatSubtitle: { en: "Your Smart Personal AI Assistant", ne: "तपाईंको आफ्नै स्मार्ट AI सहायक" },
  aiWelcomeMessage: {
    en: "Namaste! I am Bhupendra AI. Ask me about Bhupendra's projects, school in Darchula, or any CDC Nepal Grade 9 mathematics, science, or computer lessons!",
    ne: "नमस्ते! म भुपेन्द्र एआई हुँ। मलाई भुपेन्द्रका परियोजनाहरू, दार्चुलाको विद्यालय वा कक्षा ९ को गणित, विज्ञान र कम्प्युटरका पाठहरूबारे सोध्नुहोस्!"
  },
  aiInputPlaceholder: { en: "Ask a question in English or नेपाली...", ne: "अंग्रेजी वा नेपालीमा प्रश्न सोध्नुहोस्..." },
  aiClearChat: { en: "Clear Chat", ne: "कुराकानी हटाउनुहोस्" },
  aiSuggestedPrompt: { en: "Suggested Queries", ne: "सुझाव गरिएका प्रश्नहरू" },
  aiCitations: { en: "Verified Sources & References", ne: "प्रमाणित स्रोत तथा सन्दर्भ" },

  // Common UI
  readMore: { en: "Read More", ne: "थप पढ्नुहोस्" },
  learnMore: { en: "Learn More", ne: "विस्तृत जान्नुहोस्" },
  loading: { en: "Loading...", ne: "लोड हुँदैछ..." },
  contactUs: { en: "Get In Touch", ne: "सम्पर्क गर्नुहोस्" },
  sendMsg: { en: "Send Message", ne: "सन्देश पठाउनुहोस्" },
  name: { en: "Your Name", ne: "तपाईंको नाम" },
  email: { en: "Email Address", ne: "इमेल ठेगाना" },
  subject: { en: "Subject", ne: "विषय" },
  message: { en: "Message", ne: "सन्देश" },
  successMsg: { en: "Thank you! Your message has been sent successfully.", ne: "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।" },
  footerRights: { en: "All rights reserved. Built with passion from Darchula, Nepal.", ne: "सबै अधिकार सुरक्षित। दार्चुला, नेपालबाट माया र लगनका साथ निर्मित।" }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: () => ''
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bhupendra_lang');
    return (saved === 'ne' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bhupendra_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ne' : 'en';
    setLanguage(next);
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en;
    }
    return key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
