import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { Search, X, BookOpen, Layers, FileText, ArrowRight, Compass } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { language } = useLanguage();
  const {
    content,
    isSearchOpen,
    setIsSearchOpen,
    setSelectedProject,
    setSelectedNote,
    setIsDegreeCalcOpen,
    setIsDarchulaMapOpen
  } = useContent();

  const [query, setQuery] = useState('');

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();

  // Search through notes
  const matchedNotes = (content.notes || []).filter((n) => {
    if (!q) return false;
    return (
      n.title.toLowerCase().includes(q) ||
      n.titleNe.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.chapterName.toLowerCase().includes(q) ||
      n.chapterNameNe.toLowerCase().includes(q) ||
      (n.formulas && n.formulas.some((f) => f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)))
    );
  });

  // Search through projects
  const matchedProjects = (content.projects || []).filter((p) => {
    if (!q) return false;
    return (
      p.title.toLowerCase().includes(q) ||
      p.titleNe.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tools.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Search through blog
  const matchedBlog = (content.blog || []).filter((b) => {
    if (!q) return false;
    return (
      b.title.toLowerCase().includes(q) ||
      b.titleNe.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q)
    );
  });

  const totalResults = matchedNotes.length + matchedProjects.length + matchedBlog.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'ne'
                ? 'नोटहरू, सूत्रहरू, परियोजना वा विषयहरू खोज्नुहोस्...'
                : 'Search notes, formulas, projects, or topics...'
            }
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!q ? (
            <div className="text-center py-8 text-xs text-slate-400">
              <Compass className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p>
                {language === 'ne'
                  ? 'कुनै शब्द टाइप गरी खोज्नुहोस्, जस्तै: degree, pascal, pressure, darchula, formulas...'
                  : 'Type a query to search, e.g.: degree, pascal, pressure, darchula, sets, formulas...'}
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">
              <p>
                {language === 'ne'
                  ? `"${query}" को लागि कुनै परिणाम भेटिएन। अर्को शब्द प्रयास गर्नुहोस्।`
                  : `No results found for "${query}". Try searching another keyword.`}
              </p>
            </div>
          ) : (
            <>
              {/* Study Notes & Formulas */}
              {matchedNotes.length > 0 && (
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'सीडीसी अध्ययन नोट तथा सूत्रहरू' : 'CDC Study Notes & Formulas'} ({matchedNotes.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedNotes.map((note) => (
                      <div
                        key={note.id}
                        onClick={() => {
                          setSelectedNote(note);
                          setIsSearchOpen(false);
                        }}
                        className="p-3 rounded-xl bg-slate-950/60 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                            {language === 'ne' ? note.titleNe : note.title}
                          </div>
                          <div className="text-xs text-slate-400 font-mono mt-0.5">
                            {note.chapterName} • {note.subjectId.toUpperCase()}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {matchedProjects.length > 0 && (
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'परियोजनाहरू' : 'Portfolio Projects'} ({matchedProjects.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedProjects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setSelectedProject(p);
                          setIsSearchOpen(false);
                          if (p.id === 'degree-gradian-radian-system') setIsDegreeCalcOpen(true);
                          if (p.id === 'darchula-school-coordinates-explorer') setIsDarchulaMapOpen(true);
                        }}
                        className="p-3 rounded-xl bg-slate-950/60 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-emerald-300">
                            {language === 'ne' ? p.titleNe : p.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {language === 'ne' ? p.categoryNe : p.category}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog articles */}
              {matchedBlog.length > 0 && (
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-purple-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {language === 'ne' ? 'ब्लग तथा लेखहरू' : 'Blog Articles'} ({matchedBlog.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedBlog.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          const el = document.getElementById('blog');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-3 rounded-xl bg-slate-950/60 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-purple-300">
                            {language === 'ne' ? b.titleNe : b.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {b.category} • {b.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
