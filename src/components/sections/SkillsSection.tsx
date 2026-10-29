import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Code,
  Calculator,
  Atom,
  Laptop,
  Palette,
  Coins,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  const skillGroups = [
    {
      title: "Web Development & Coding",
      titleNe: "वेब विकास तथा कोडिङ",
      icon: Code,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "HTML5 Semantic Markup", level: "Advanced" },
        { name: "CSS3 Flexbox, Grid & Animations", level: "Advanced" },
        { name: "Modern JavaScript (ES6+)", level: "Proficient" },
        { name: "React 19 & Component Architecture", level: "Intermediate" },
        { name: "Tailwind CSS Styling", level: "Proficient" },
        { name: "Vite & Node.js / Express basics", level: "Intermediate" }
      ]
    },
    {
      title: "Mathematics & Analytical Thinking",
      titleNe: "गणित तथा कोण मापन पद्धति",
      icon: Calculator,
      color: "from-blue-600 to-indigo-600",
      skills: [
        { name: "Angle Systems (Degree, Grade, Radian)", level: "Expert (Grade 9)" },
        { name: "Trigonometric Ratios & Proofs", level: "Advanced" },
        { name: "Mensuration & Geometric Theorems", level: "Proficient" },
        { name: "Algebra & Simultaneous Equations", level: "Proficient" },
        { name: "Statistical Calculations & Quartiles", level: "Advanced" }
      ]
    },
    {
      title: "Science & Physical Simulations",
      titleNe: "विज्ञान तथा भौतिक सिमुलेसन",
      icon: Atom,
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Pascal's Law & Hydraulic Machines", level: "Applied" },
        { name: "Archimedes' Principle & Upthrust", level: "Applied" },
        { name: "Equations of Motion & Force", level: "Proficient" },
        { name: "Solar System Dynamics & Kepler laws", level: "Simulated" },
        { name: "Circuits & Ohm's Law (V = IR)", level: "Working" }
      ]
    },
    {
      title: "Computer Studies & Cybersecurity",
      titleNe: "कम्प्युटर विज्ञान र साइबर सुरक्षा",
      icon: Laptop,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "Binary, Decimal & Number Systems", level: "Advanced" },
        { name: "Algorithms & Flowchart Logic", level: "Proficient" },
        { name: "Cyber Safety & Password Hygiene", level: "Advocate" },
        { name: "Nepal Electronic Transactions Act", level: "Awareness" },
        { name: "Computer Hardware & Architecture", level: "Proficient" }
      ]
    },
    {
      title: "Creative Computing & Design",
      titleNe: "सिर्जनात्मक कोडिङ र डिजाइन",
      icon: Palette,
      color: "from-rose-500 to-pink-600",
      skills: [
        { name: "Scratch 3.0 Interactive Animations", level: "Advanced" },
        { name: "PowerPoint Presentation Decks", level: "Advanced" },
        { name: "Canva & Digital Poster Making", level: "Proficient" },
        { name: "SVG Arc & Circle Geometry", level: "Applied" }
      ]
    },
    {
      title: "Financial Literacy & Entrepreneurship",
      titleNe: "वित्तीय साक्षरता र उद्यमशीलता",
      icon: Coins,
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "Student Budgeting & Expense Tracking", level: "Applied" },
        { name: "Simple vs Compound Interest Logic", level: "Proficient" },
        { name: "Digital Wallet & Payment Safety", level: "Awareness" },
        { name: "Local Agro & Tech Enterprise Ideas", level: "Conceptual" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'सीप तथा प्रविधि' : 'Skills & Technologies'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'प्राविधिक दक्षता तथा अध्ययन क्षमता' : 'Technical Proficiencies & Capabilities'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'वेब विकास, गणितीय विश्लेषण, विज्ञान सिमुलेसन र कम्प्युटर अध्ययनमा हासिल गरिएका सीपहरू'
              : 'Skillsets built across real code, mathematical applications, and science visualizations.'}
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition shadow-lg space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${group.color} text-slate-950 font-bold shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {language === 'ne' ? group.titleNe : group.title}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {group.skills.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-200 font-medium">{s.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-850 text-cyan-400 font-mono border border-slate-700/60">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
