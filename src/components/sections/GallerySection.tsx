import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { GalleryItem } from '../../types';
import {
  Image as ImageIcon,
  X,
  Calendar,
  Layers,
  ZoomIn
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();

  const galleryItems = content.gallery || [];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Media', labelNe: 'सबै तस्बिरहरू' },
    { id: 'school', label: 'School & Darchula', labelNe: 'विद्यालय र दार्चुला' },
    { id: 'projects', label: 'Projects & Code', labelNe: 'परियोजनाहरू' },
    { id: 'presentations', label: 'Presentations', labelNe: 'प्रस्तुतीकरण' },
    { id: 'certificates', label: 'Exhibitions & Awards', labelNe: 'प्रदर्शनी तथा सम्मान' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'तस्बिर तथा मिडिया ग्यालरी' : 'Gallery & Media'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'शैक्षिक तथा परियोजना दृश्यहरू' : 'Visual Highlights & School Moments'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'महेन्द्र नमुना माध्यमिक विद्यालय, विज्ञान प्रदर्शनी, सफ्टवेयर सिमुलेसन र दार्चुलाका तस्बिरहरू'
              : 'School campus, science exhibition presentations, code screenshots, and local topography.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {language === 'ne' ? cat.labelNe : cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer shadow-lg transition duration-300 h-64"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-95 transition" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                  {language === 'ne' ? item.categoryNe : item.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <div className="p-2 rounded-xl bg-slate-950/80 text-cyan-400">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {language === 'ne' ? item.titleNe : item.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  {language === 'ne' ? item.captionNe : item.caption}
                </p>
                <span className="text-[10px] text-slate-500 font-mono block">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-80 sm:h-96 w-full bg-slate-950">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 space-y-2 bg-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    {language === 'ne' ? selectedItem.categoryNe : selectedItem.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{selectedItem.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {language === 'ne' ? selectedItem.titleNe : selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'ne' ? selectedItem.captionNe : selectedItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
