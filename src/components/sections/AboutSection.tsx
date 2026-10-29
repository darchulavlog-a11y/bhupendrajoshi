import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  User,
  MapPin,
  School,
  Heart,
  Sparkles,
  CheckCircle2,
  Code2,
  Calculator,
  Compass,
  Laptop
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const { content, setIsDarchulaMapOpen } = useContent();
  const profile = content.profile;

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <User className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'मेरो परिचय' : 'About Me'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'भुपेन्द्र जोशी: विद्यार्थी तथा प्रविधि अन्वेषक' : 'Bhupendra Joshi: Student & Tech Explorer'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'सुदूरपश्चिम प्रदेशको हिमाली जिल्ला दार्चुलाबाट डिजिटल संसारमा आफ्नो यात्रा र उद्देश्य'
              : 'Journey from the Himalayan foothills of Darchula into modern web programming and mathematics.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 leading-relaxed text-slate-300 text-sm">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{language === 'ne' ? 'मेरो पृष्ठभूमि र दृष्टिकोण' : 'Background & Vision'}</span>
              </h3>
              
              <p>
                {language === 'ne'
                  ? 'म भुपेन्द्र जोशी, दार्चुलाको खलङ्गामा अवस्थित महेन्द्र नमुना माध्यमिक विद्यालयमा कक्षा ९ (सेक्सन ई) मा अध्ययनरत छु। सुदूरपश्चिम नेपालको प्राकृतिक सौन्दर्य र महाकाली नदीको किनारमा हुर्कँदै गर्दा मलाई विज्ञान, प्रविधि र कम्प्युटरले सानैदेखि आकर्षित गर्यो।'
                  : 'I am Bhupendra Joshi, studying in Grade 9 (Section E) at Mahendra Model Secondary School in Khalanga, Darchula. Growing up in the picturesque Sudurpashchim province along the Mahakali river, I developed a deep fascination for mathematics, computer science, and technology.'}
              </p>

              <p>
                {language === 'ne'
                  ? 'धेरैलाई लाग्छ कि प्रविधि र सफ्टवेयर निर्माण गर्न ठूला सहर वा विदेशमै पुग्नुपर्छ। तर आजको डिजिटल युगमा यदि हामीसँग लगनशीलता र सिक्ने चाहना छ भने दुर्गम भूगोलबाट पनि विश्वस्तरीय ज्ञान हासिल गर्न सकिन्छ। मैले साथीहरूलाई गणितका सूत्रहरू (विशेष गरी डिग्री, ग्रेड र रेडियन) बुझाउन र विज्ञानका कठिन नियमहरू सहज बनाउन वेब प्रविधिको सहारा लिएँ।'
                  : 'People often think that software development and web technology only happen in major metropolises. But in this digital age, passion and curiosity transcend geography. I started coding to solve real problems for my classmates—visualizing abstract mathematical angle conversions, simulating planetary physics, and building an accessible Grade 9 CDC study library.'}
              </p>

              {/* Geographic Callout */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-cyan-300 font-bold block">
                    {language === 'ne' ? 'दार्चुला जिल्ला प्रोफाइल:' : 'Darchula District Profile:'}
                  </span>
                  <span className="text-slate-400">
                    29.8408° N, 80.5348° E • Sudurpashchim Province, Nepal
                  </span>
                </div>
                <button
                  onClick={() => setIsDarchulaMapOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold transition"
                >
                  {language === 'ne' ? 'नक्सा कोअर्डिनेट अन्वेषक' : 'Open Coordinates Map'}
                </button>
              </div>
            </div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-2">
                  1
                </div>
                <div className="font-bold text-white text-sm">
                  {language === 'ne' ? 'सिक्ने निरन्तरता' : 'Continuous Learning'}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ne' ? 'हरेक दिन नयाँ कोड र गणितीय नियम सिक्ने' : 'Exploring code, math concepts, and science daily.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-2">
                  2
                </div>
                <div className="font-bold text-white text-sm">
                  {language === 'ne' ? 'सकारात्मक सिर्जना' : 'Purposeful Creation'}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ne' ? 'साथीहरू र समाजका लागि उपयोगी औजार बनाउने' : 'Building educational tools that help classmates learn.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-2">
                  3
                </div>
                <div className="font-bold text-white text-sm">
                  {language === 'ne' ? 'भविष्य निर्माण' : 'Future Building'}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ne' ? 'नेपालको शैक्षिक प्रविधिमा योगदान पुर्याउने' : 'Advancing digital education in rural Nepal.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interests & Verified Information Checklist */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interests checklist */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Heart className="w-4 h-4 text-cyan-400" />
                <span>{language === 'ne' ? 'रुचि तथा अध्ययनका क्षेत्रहरू' : 'Core Interests & Fields'}</span>
              </h3>
              <div className="space-y-2.5">
                {profile.interests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{language === 'ne' ? item.ne : item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authenticity statement */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed space-y-2">
              <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{language === 'ne' ? 'प्रमाणित शैक्षिक जानकारी' : 'Authentic Profile Verification'}</span>
              </div>
              <p>
                {language === 'ne'
                  ? 'यस वेबसाइटमा उल्लिखित सबै विवरण भुपेन्द्र जोशीको वास्तविक विद्यालय, कक्षा ९ र सिर्जना गरिएका परियोजनाहरूमा आधारित छन्। कुनै पनि कृत्रिम वा अप्रमाणित उपाधि समावेश गरिएको छैन।'
                  : 'All information presented on this portfolio reflects authentic academic standing at Mahendra Model Secondary School, verified Grade 9 coursework, and original student creations.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
