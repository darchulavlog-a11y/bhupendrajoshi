import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Shield, Lock, FileCheck, AlertTriangle } from 'lucide-react';

export const PrivacyTermsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="privacy" className="py-20 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'गोपनीयता नीति तथा सर्तहरू' : 'Privacy Policy & Terms of Use'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'डिजिटल नैतिकता, गोपनीयता र प्रयोगका सर्तहरू' : 'Student Privacy, Ethics & Educational Terms'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {language === 'ne'
              ? 'विद्यार्थी सुरक्षा, डाटा गोपनीयता र शैक्षिक निष्ठा सम्बन्धी हाम्रा प्रतिबद्धताहरू'
              : 'Our commitment to student safety, data protection, and open educational integrity.'}
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* Privacy Block */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>{language === 'ne' ? '१. गोपनीयता नीति (Privacy Protection)' : '1. Privacy Protection'}</span>
            </h3>
            <p>
              {language === 'ne'
                ? 'हामी प्रयोगकर्ताको व्यक्तिगत गोपनीयताको सम्मान गर्दछौं। यस वेबसाइटमा सम्पर्क फारममार्फत पठाइएका सन्देशहरू केवल भुपेन्द्र जोशीसँग सीधा संवादका लागि प्रयोग गरिन्छ। तपाईंको नाम वा इमेल ठेगाना कुनै पनि तेस्रो पक्षलाई बिक्री वा साझेदारी गरिने छैन।'
                : 'We strictly protect visitor privacy. Any messages sent through the contact form are stored privately on the server solely for Bhupendra Joshi to read and reply. We do not sell, rent, or share personal contact data with third-party advertising brokers.'}
            </p>
          </div>

          {/* AI Usage & Educational Fair Use */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ne' ? '२. भुपेन्द्र AI तथा शैक्षिक सामग्रीको प्रयोग' : '2. Bhupendra AI Assistant & Fair Use'}</span>
            </h3>
            <p>
              {language === 'ne'
                ? 'भुपेन्द्र AI सहायक विद्यार्थीहरूलाई कक्षा ९ को पाठ्यक्रम बुझ्न, सूत्र सम्झन र अभ्यास गर्न मद्दत पुर्याउने उद्देश्यले निर्माण गरिएको हो। यद्यपि यो एक सहायक प्रविधि हो, आधिकारिक बोर्ड परीक्षा र उत्तरपुस्तिकाको लागि विद्यार्थीहरूले आफ्ना विद्यालयका शिक्षकहरूको मार्गदर्शनलाई नै अन्तिम आधार मान्नुपर्छ।'
                : 'Bhupendra AI is designed to augment classroom learning by providing instant explanations of CDC Grade 9 formulas, principles, and concepts. While grounded in verified curriculum data, students should always refer to their school teachers and official textbooks for final examination grading.'}
            </p>
          </div>

          {/* Copyright & Curriculum Disclaimer */}
          <div id="terms" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>{language === 'ne' ? '३. प्रतिलिपि अधिकार तथा पाठ्यपुस्तक नीति' : '3. Copyright & CDC Textbook Notice'}</span>
            </h3>
            <p>
              {language === 'ne'
                ? 'यस वेबसाइटमा प्रस्तुत गरिएका सम्पूर्ण पाठगत नोटहरू, सूत्र तालिका, र परियोजना कोड भुपेन्द्र जोशीद्वारा शैक्षिक प्रयोजनका लागि तयार पारिएका हुन्। नेपाल सरकार पाठ्यक्रम विकास केन्द्र (CDC) को प्रतिलिपि अधिकारलाई पूर्ण सम्मान गरिएको छ र कुनै पनि अनाधिकृत पुस्तकहरू बिक्री वा प्रतिलिपि गरिएको छैन।'
                : 'All study summaries, custom software widgets, and formula organizers are created as free educational study aids. Full respect is accorded to the Curriculum Development Centre (CDC), Sanothimi, Bhaktapur. No proprietary commercial textbooks are unlawfully duplicated.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
