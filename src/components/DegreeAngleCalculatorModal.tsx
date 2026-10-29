import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, RefreshCw, Calculator, BookOpen, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DegreeAngleCalculatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [degree, setDegree] = useState<number>(45);
  const [selectedPreset, setSelectedPreset] = useState<number>(45);
  const [showPractice, setShowPractice] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  if (!isOpen) return null;

  // Conversions
  const grade = Number(((degree * 10) / 9).toFixed(4));
  const radian = Number(((degree * Math.PI) / 180).toFixed(4));
  const piFraction = Number((degree / 180).toFixed(4));

  // DMS breakdown
  const dInt = Math.floor(degree);
  const mRemainder = (degree - dInt) * 60;
  const mInt = Math.floor(mRemainder);
  const sRemainder = Number(((mRemainder - mInt) * 60).toFixed(1));

  // Circle SVG math
  const radius = 90;
  const cx = 110;
  const cy = 110;
  const rad = (degree * Math.PI) / 180;
  const endX = cx + radius * Math.cos(-rad);
  const endY = cy + radius * Math.sin(-rad);
  const largeArcFlag = degree > 180 ? 1 : 0;
  const pathD = degree >= 360
    ? `M ${cx + radius} ${cy} A ${radius} ${radius} 0 1 0 ${cx - radius} ${cy} A ${radius} ${radius} 0 1 0 ${cx + radius} ${cy}`
    : `M ${cx} ${cy} L ${cx + radius} ${cy} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY} Z`;

  const presets = [30, 45, 60, 90, 120, 135, 180, 270, 360];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'ne' ? 'डिग्री, ग्रेड र रेडियन अन्तरक्रियात्मक प्रणाली' : 'Degree, Gradian & Radian Angle System'}
              </h2>
              <p className="text-xs text-cyan-400 font-mono">
                CDC Nepal Grade 9 Compulsory & Optional Math Interactive Tool
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Visualizer & Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Arc Canvas */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <svg width="220" height="220" viewBox="0 0 220 220" className="drop-shadow-lg">
              {/* Outer guide circle */}
              <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              {/* Angle sector */}
              <path d={pathD} fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2.5" />
              {/* Base line (0°) */}
              <line x1={cx} y1={cy} x2={cx + radius} y2={cy} stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              {/* Angle Ray */}
              <line x1={cx} y1={cy} x2={endX} y2={endY} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              {/* Center point */}
              <circle cx={cx} cy={cy} r="4" fill="#06b6d4" />
              <text x={cx + 10} y={cy - 8} fill="#38bdf8" fontSize="12" fontWeight="bold">
                {degree}°
              </text>
            </svg>
            <div className="mt-2 text-center text-xs text-slate-400">
              {language === 'ne' ? `चापको कोण: ${degree}°` : `Angle Arc: ${degree}°`}
            </div>
          </div>

          {/* Slider & Presets */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">
                  {language === 'ne' ? 'कोण मान (डिग्री):' : 'Angle Value (Degrees):'}
                </span>
                <span className="text-cyan-400 font-bold font-mono">{degree}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={degree}
                onChange={(e) => {
                  setDegree(Number(e.target.value));
                  setSelectedPreset(-1);
                }}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Presets */}
            <div>
              <span className="text-xs text-slate-400 block mb-2">
                {language === 'ne' ? 'मानक कोणहरू (Quick Presets):' : 'Standard Angles (Quick Presets):'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setDegree(p);
                      setSelectedPreset(p);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-lg font-mono transition ${
                      selectedPreset === p || degree === p
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {p}°
                  </button>
                ))}
              </div>
            </div>

            {/* Sexagesimal DMS Breakdown */}
            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 font-mono text-xs text-slate-300">
              <span className="text-cyan-400 font-semibold block mb-1">
                {language === 'ne' ? 'डिग्री, मिनेट, सेकेन्ड (DMS):' : 'Sexagesimal Form (DMS):'}
              </span>
              {dInt}° {mInt}' {sRemainder}''
            </div>
          </div>
        </div>

        {/* Real-time Equivalent Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20">
            <span className="text-xs text-cyan-400 uppercase font-semibold tracking-wider">
              {language === 'ne' ? '१. षष्टिक (Degree System)' : '1. Sexagesimal (Degree)'}
            </span>
            <div className="text-2xl font-bold font-mono text-white mt-1">{degree}°</div>
            <p className="text-xs text-slate-400 mt-1">1 Right Angle = 90°</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
            <span className="text-xs text-emerald-400 uppercase font-semibold tracking-wider">
              {language === 'ne' ? '२. शतिक (Grade System)' : '2. Centesimal (Grade)'}
            </span>
            <div className="text-2xl font-bold font-mono text-white mt-1">{grade}g</div>
            <p className="text-xs text-slate-400 mt-1">1 Right Angle = 100g</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-purple-500/20">
            <span className="text-xs text-purple-400 uppercase font-semibold tracking-wider">
              {language === 'ne' ? '३. वृत्तीय (Radian System)' : '3. Circular (Radian)'}
            </span>
            <div className="text-2xl font-bold font-mono text-white mt-1">
              {radian} <span className="text-sm font-normal text-purple-300">rad</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">≈ {piFraction}π rad</p>
          </div>
        </div>

        {/* Formula breakdown */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 mb-6">
          <h4 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {language === 'ne' ? 'पाठ्यक्रम विकास केन्द्र (CDC) रूपान्तरण सूत्र:' : 'CDC Curriculum Fundamental Conversion Relation:'}
          </h4>
          <div className="bg-slate-950/80 p-3 rounded-lg font-mono text-center text-cyan-200 text-sm md:text-base border border-cyan-500/30">
            D / 180 = G / 200 = R / π
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-slate-300">
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="font-bold text-cyan-400">D ➔ G:</span> G = {degree} × (10 / 9) = <strong>{grade}g</strong>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="font-bold text-purple-400">D ➔ R:</span> R = {degree} × (π / 180) = <strong>{radian} rad</strong>
            </div>
          </div>
        </div>

        {/* Practice question generator */}
        <div className="border-t border-slate-800 pt-4">
          <button
            onClick={() => {
              setShowPractice(!showPractice);
              setShowAnswer(false);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-sm font-semibold flex items-center justify-center gap-2 transition"
          >
            <RefreshCw className="w-4 h-4" />
            {showPractice
              ? (language === 'ne' ? 'अभ्यास प्रश्न बन्द गर्नुहोस्' : 'Hide Practice Question')
              : (language === 'ne' ? 'कक्षा ९ परीक्षा अभ्यास प्रश्न हेर्नुहोस्' : 'Try CDC Exam Practice Drill')}
          </button>

          {showPractice && (
            <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm">
              <div className="font-semibold text-slate-200 mb-2">
                {language === 'ne'
                  ? 'प्रश्न: कुनै त्रिभुजका दुई कोणहरू क्रमशः ५४° र ५०g छन् भने तेस्रो कोणको मान रेडियनमा पत्ता लगाउनुहोस्।'
                  : 'Problem: If two angles of a triangle are 54° and 50g respectively, find the third angle in radians.'}
              </div>
              {showAnswer ? (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 space-y-1 text-xs font-mono">
                  <div className="flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'ne' ? 'समाधान चरणहरू:' : 'Solution Steps:'}
                  </div>
                  <div>1. Convert 50g to degrees: 50 × (9/10) = 45°</div>
                  <div>2. Third angle in degrees = 180° - (54° + 45°) = 81°</div>
                  <div>3. Convert 81° to radians: 81 × (π / 180) = 9π / 20 radians (approx 1.4137 rad).</div>
                </div>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-lg text-xs transition"
                >
                  {language === 'ne' ? 'उत्तर र समाधान देखाउनुहोस्' : 'Reveal Worked Solution'}
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
