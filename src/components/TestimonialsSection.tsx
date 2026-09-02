import React from 'react';
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Nota 5.0 no Google Maps ({CLINIC_INFO.googleRating.totalReviews} avaliações)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Depoimentos de Nossos Alunos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Avaliações reais publicadas por alunos do Studio Corpo Ativo no Google Maps.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md flex flex-col justify-between relative group hover:border-teal-300 transition-all duration-200"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-sm font-serif shadow-xs">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{review.author}</h3>
                      {review.role && (
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                          {review.role}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400">{review.timeAgo}</span>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-sans">
                  "{review.text}"
                </p>
              </div>

              {/* Owner Response */}
              {review.ownerReply && (
                <div className="mt-5 pt-4 border-t border-slate-100 bg-teal-50/60 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-900 mb-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-teal-700" />
                    <span>Resposta do Studio:</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "{review.ownerReply}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link to Google Maps Reviews */}
        <div className="mt-10 text-center">
          <a
            href={CLINIC_INFO.social.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-xs hover:shadow-md transition-all"
          >
            <span>Ver todas as avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-teal-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
