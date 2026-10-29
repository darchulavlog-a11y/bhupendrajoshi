import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { Lock, Heart, Shield, BookOpen, MapPin, Mail, School, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { setIsAdminOpen, setIsAiModalOpen, setIsDegreeCalcOpen, setIsDarchulaMapOpen } = useContent();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm border border-cyan-500/30">
                BJ
              </div>
              <span className="text-base font-bold text-white">
                {language === 'ne' ? 'भुपेन्द्र जोशी' : 'Bhupendra Joshi'}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              {language === 'ne'
                ? 'कक्षा ९ का विद्यार्थी, प्रविधि अन्वेषक तथा डिजिटल सिकाइ मञ्चका निर्माता। दार्चुला, नेपाल।'
                : 'Grade 9 student, tech explorer, and builder of digital learning tools from Darchula, Sudurpashchim, Nepal.'}
            </p>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px]">
              <Mail className="w-3.5 h-3.5" />
              <span>darchulavlog@gmail.com</span>
            </div>
          </div>

          {/* Col 2: School & District Profile */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <School className="w-4 h-4 text-cyan-400" />
              {language === 'ne' ? 'शैक्षिक संस्था' : 'Academic Profile'}
            </h4>
            <div className="space-y-1 text-slate-300">
              <div className="font-semibold text-white">
                {language === 'ne' ? 'महेन्द्र नमुना माध्यमिक विद्यालय' : 'Mahendra Model Secondary School'}
              </div>
              <div>{language === 'ne' ? 'कक्षा ९, सेक्सन \'ई\'' : 'Grade 9, Section \'E\''}</div>
              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Khalanga, Darchula, Nepal</span>
              </div>
              <button
                onClick={() => setIsDarchulaMapOpen(true)}
                className="mt-1 text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>{language === 'ne' ? 'नक्सा कोअर्डिनेट हेर्नुहोस्' : 'Explore GPS Coordinates'}</span>
              </button>
            </div>
          </div>

          {/* Col 3: CDC Digital Library Quick Access */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              {language === 'ne' ? 'कक्षा ९ डिजिटल लाइब्रेरी' : 'CDC Grade 9 Hub'}
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#cdc-library" className="hover:text-cyan-300 transition">
                  {language === 'ne' ? 'गणित तथा कोण प्रणाली' : 'Mathematics & Angles'}
                </a>
              </li>
              <li>
                <a href="#cdc-library" className="hover:text-cyan-300 transition">
                  {language === 'ne' ? 'विज्ञान तथा प्रविधि नोटहरू' : 'Science & Tech Notes'}
                </a>
              </li>
              <li>
                <a href="#model-questions" className="hover:text-cyan-300 transition">
                  {language === 'ne' ? 'नमुना प्रश्नपत्र (Model Sets)' : 'CDC Model Questions'}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsDegreeCalcOpen(true)}
                  className="text-cyan-400 hover:underline text-left"
                >
                  {language === 'ne' ? 'डिग्री-ग्रेड-रेडियन क्यालकुलेटर' : 'Degree-Grade-Radian Calculator'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Bhupendra AI & Administration */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              {language === 'ne' ? 'भुपेन्द्र AI तथा व्यवस्थापन' : 'Bhupendra AI & CMS'}
            </h4>
            <p className="text-xs text-slate-400">
              {language === 'ne'
                ? 'वेबसाइटमै एकीकृत स्मार्ट एआई सहायक जसले कक्षा ९ का प्रश्नहरू तत्काल समाधान गर्छ।'
                : 'Smart assistant integrated directly into the website with CDC RAG knowledge.'}
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="w-full py-2 px-3 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition text-center"
              >
                {language === 'ne' ? 'AI सहायकसँग सोध्नुहोस्' : 'Chat with Bhupendra AI'}
              </button>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-xs transition flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{language === 'ne' ? 'व्यवस्थापक पोर्टल (Admin)' : 'Admin Dashboard'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* CDC Nepal Curriculum & Ethics Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-slate-300 mb-1">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>
              {language === 'ne'
                ? 'पाठ्यक्रम विकास केन्द्र (CDC) नेपाल सम्बन्धी जानकारी तथा प्रतिलिपि अधिकार'
                : 'CDC Nepal Curriculum Alignment & Educational Fair Use Notice'}
            </span>
          </div>
          <p>
            {language === 'ne'
              ? 'यस वेबसाइटमा प्रस्तुत गरिएका अध्ययन नोटहरू, सूत्रहरू र नमुना प्रश्नहरू नेपाल सरकार, शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय अन्तर्गतको पाठ्यक्रम विकास केन्द्र (CDC), सानोठिमी, भक्तपुरद्वारा स्वीकृत कक्षा ९ को पाठ्यक्रम ढाँचामा आधारित छन्। कुनै पनि प्रतिलिपि अधिकारयुक्त पूर्ण पुस्तकहरू अनुमतिबिना पुनरुत्पादन गरिएको छैन। सबै सामग्री विद्यार्थीहरूको निःशुल्क सिकाइ र अभ्यासका लागि मात्र हुन्।'
              : 'Study notes, mathematical formulas, and practice questions hosted on this portal strictly adhere to the Grade 9 curriculum framework designed by the Curriculum Development Centre (CDC), Sanothimi, Bhaktapur, Ministry of Education, Science and Technology, Nepal. No copyrighted textbooks are reproduced without authorization. All educational materials are authored as open study guides for student practice.'}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            © {new Date().getFullYear()} Bhupendra Joshi. {t('footerRights')}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-cyan-300 transition">
              {language === 'ne' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-cyan-300 transition">
              {language === 'ne' ? 'प्रयोगका सर्तहरू' : 'Terms of Use'}
            </a>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> in Darchula
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
