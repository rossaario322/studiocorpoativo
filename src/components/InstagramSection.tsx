import React from 'react';
import { CLINIC_INFO, INSTAGRAM_HIGHLIGHTS } from '../data/clinicData';
import { Instagram, ExternalLink, Heart, MessageCircle, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
              Redes Sociais
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Siga nosso Instagram
            </h2>
            <p className="text-slate-600 text-sm font-sans max-w-xl">
              Acompanhe novidades, rotina das aulas de Pilates, dicas de saúde e exercícios no perfil oficial do studio.
            </p>
          </div>

          <a
            href={CLINIC_INFO.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-900 hover:to-teal-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-sm transition-all btn-hover-effect shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-amber-200" />
            <span>Seguir {CLINIC_INFO.social.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Instagram Posts Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((post) => (
            <a
              key={post.id}
              href={CLINIC_INFO.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-3xl p-5 hover:bg-white hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 px-2.5 py-0.5 rounded-md">
                    {post.category}
                  </span>
                  <Instagram className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </div>

                <h3 className="font-serif font-bold text-slate-900 text-lg group-hover:text-teal-900">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {post.caption}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-teal-800 font-medium">
                <span className="flex items-center gap-1 text-[11px]">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Ver no Instagram
                </span>
                <span className="text-xs">→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
