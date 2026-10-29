import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { BlogPost } from '../../types';
import {
  FileText,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  BookOpen,
  Share2
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const { content } = useContent();

  const blogPosts = content.blog || [];
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'ne' ? 'ब्लग तथा लेखहरू' : 'Blog & Articles'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ne' ? 'प्रविधि, गणित र विद्यार्थी सिकाइका विचारहरू' : 'Thoughts on Code, Math & Learning'}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {language === 'ne'
              ? 'दार्चुलाबाट कोडिङ सिक्दाका अनुभव, गणितीय कोण पद्धति र वित्तीय साक्षरताबारे भुपेन्द्रका लेखहरू'
              : 'Articles on learning web development from western Nepal, mathematics insights, and youth financial literacy.'}
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition duration-300 shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                    {language === 'ne' ? post.titleNe : post.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {language === 'ne' ? post.excerptNe : post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-850 flex items-center justify-between">
                  <span className="text-xs text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
                    <span>{language === 'ne' ? 'पूरा लेख पढ्नुहोस्' : 'Read Full Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                  {selectedPost.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {language === 'ne' ? selectedPost.titleNe : selectedPost.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono border-b border-slate-800 pb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    By {selectedPost.author}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed whitespace-pre-line space-y-4">
                {language === 'ne' ? selectedPost.contentNe : selectedPost.content}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800 mt-8">
                {selectedPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-850 text-cyan-400 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
