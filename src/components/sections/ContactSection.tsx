import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import {
  Mail,
  Send,
  MapPin,
  School,
  Bot,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { content, setIsAiModalOpen, setIsDarchulaMapOpen } = useContent();
  const profile = content.profile;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({
        type: 'error',
        message: language === 'ne' ? 'कृपया सबै अनिवार्य विवरण भर्नुहोस्।' : 'Please fill all required fields.'
      });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setFeedback({
          type: 'success',
          message:
            language === 'ne'
              ? 'धन्यवाद! तपाईंको सन्देश भुपेन्द्र जोशीकहाँ सुरक्षित रूपमा पुगेको छ।'
              : 'Thank you! Your message has been sent successfully to Bhupendra Joshi.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err.message || (language === 'ne' ? 'सन्देश पठाउन सकिएन।' : 'Failed to send message.')
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'सम्पर्क' : 'Contact Me'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'सम्पर्क तथा सुझाव पठाउनुहोस्' : 'Get in Touch with Bhupendra'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'शैक्षिक सहकार्य, परियोजना सल्लाह, वा कक्षा ९ का अध्ययन सामग्री सम्बन्धी सन्देश पठाउनुहोस्'
              : 'Feel free to reach out for student collaboration, feedback, or curriculum inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & AI Assistant prompt */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white">
                {language === 'ne' ? 'सम्पर्क विवरण' : 'Direct Contact Information'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-mono">Official Email</span>
                    <a
                      href="mailto:darchulavlog@gmail.com"
                      className="text-white font-medium hover:text-cyan-300 transition"
                    >
                      darchulavlog@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <School className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-mono">School</span>
                    <span className="text-white font-medium">
                      {language === 'ne' ? profile.schoolNe : profile.school}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-mono">Location</span>
                    <span className="text-white font-medium">
                      {language === 'ne' ? profile.locationNe : profile.location}
                    </span>
                    <button
                      onClick={() => setIsDarchulaMapOpen(true)}
                      className="text-cyan-400 text-xs hover:underline block mt-1"
                    >
                      {language === 'ne' ? 'जीपीएस नक्सा हेर्नुहोस्' : 'View GPS Coordinates'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant AI Chat Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>{language === 'ne' ? 'तुरुन्त उत्तर चाहिन्छ?' : 'Need Immediate Answers?'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ne'
                  ? 'इमेलको प्रतीक्षा गर्नु पर्दैन — भुपेन्द्र एआईले कक्षा ९ का गणित, विज्ञान तथा पाठ्यक्रम सम्बन्धी प्रश्नको तत्काल जवाफ दिन्छ।'
                  : 'Skip waiting for an email reply — Bhupendra AI is online 24/7 to answer your CDC Grade 9 study questions instantly.'}
              </p>
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20"
              >
                {language === 'ne' ? 'भुपेन्द्र एआईसँग कुरा गर्नुहोस्' : 'Launch Bhupendra AI Assistant'}
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'ne' ? 'सन्देश फारम' : 'Send a Direct Message'}
              </h3>

              {feedback && (
                <div
                  className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                      : 'bg-red-950/60 border border-red-500/40 text-red-200'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{feedback.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                    {language === 'ne' ? 'तपाईंको नाम *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Shrestha"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                    {language === 'ne' ? 'इमेल ठेगाना *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                  {language === 'ne' ? 'विषय' : 'Subject'}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question about Grade 9 Math Quiz App"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                  {language === 'ne' ? 'सन्देश *' : 'Message *'}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'ne'
                      ? 'तपाईंको विचार, प्रतिक्रिया वा जिज्ञासा यहाँ लेख्नुहोस्...'
                      : 'Write your thoughts, feedback, or inquiry here...'
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {submitting
                    ? (language === 'ne' ? 'पठाउँदैछ...' : 'Sending...')
                    : (language === 'ne' ? 'सन्देश पठाउनुहोस्' : 'Send Message')}
                </span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
