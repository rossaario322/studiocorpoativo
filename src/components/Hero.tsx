import React from 'react';
import { CLINIC_INFO, PROMOTION_INFO } from '../data/clinicData';
import { Star, MapPin, CheckCircle, MessageCircle, ArrowRight, Sparkles, ShieldCheck, Heart, UserCheck } from 'lucide-react';

interface HeroProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-teal-900/5 via-slate-50 to-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative background subtle gradients */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Google Rating Badge */}
              <a 
                href={CLINIC_INFO.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 px-3 py-1 rounded-full text-xs font-semibold shadow-xs transition-colors"
              >
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>{CLINIC_INFO.googleRating.score.toFixed(1)} no Google Maps</span>
              </a>

              {/* Location Badge */}
              <span className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 border border-teal-200/60 px-3 py-1 rounded-full text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                Jardim das Américas, Curitiba
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] tracking-tight">
                Studio Corpo Ativo <br />
                <span className="text-teal-800 italic font-normal">Pilates & Fisioterapia</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
                Aulas individuais ou em grupo preparadas de forma personalizada para a sua necessidade. Foco na disposição, alívio de dores, postura e qualidade de vida.
              </p>
            </div>

            {/* Special Promotion Highlight Box */}
            <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-4 sm:p-5 shadow-xs relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl" />
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-800 text-white rounded-xl shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-900 bg-teal-200/70 px-2 py-0.5 rounded-md">
                      Destaque de Promoção
                    </span>
                    <span className="text-xs font-bold text-amber-700">10% OFF</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                    Ao contratar o <strong>Plano Trimestral</strong> (1x, 2x ou 3x por semana) ou se alguém da família fizer aula no mesmo horário, receba <strong>10% de desconto</strong> nas duas mensalidades!
                  </p>
                </div>
              </div>
            </div>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pilates de Equipamentos e Solo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fisioterapia & Liberação Miofascial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Laserterapia e Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aparelhos Metalife limpos e conservados</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenContactModal('Aula Experimental de Pilates')}
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base px-6 py-3.5 rounded-2xl shadow-md transition-all duration-200 btn-hover-effect cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Agendar Aula no WhatsApp</span>
              </button>

              <a
                href={CLINIC_INFO.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-medium text-sm px-5 py-3.5 rounded-2xl border border-slate-300 shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>Ver Como Chegar (Google Maps)</span>
              </a>
            </div>

            {/* Address quick note */}
            <p className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{CLINIC_INFO.address.fullFormatted}</span>
            </p>

          </div>

          {/* Right Column: Visual Photo & Studio Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-3.5 sm:p-5 rounded-3xl shadow-xl border border-slate-200/80 space-y-3.5 relative overflow-hidden">
              
              {/* Featured Photo Frame */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900 group">
                <img 
                  src="/3.jpeg" 
                  alt="Studio Corpo Ativo - Espaço e Equipamentos de Pilates" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-emerald-600/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Foto Real do Nosso Espaço</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-serif font-bold text-base drop-shadow-sm">Studio Corpo Ativo</p>
                  <p className="text-xs text-emerald-100 drop-shadow-xs">Equipamentos Metalife e Ambiente Acolhedor no Jardim das Américas</p>
                </div>
              </div>

              {/* Studio Equipment Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-left space-y-0.5">
                  <span className="font-bold text-teal-900 block text-xs">Cadillac & Reformer</span>
                  <span className="text-[11px] text-slate-500 leading-tight block">Molas e resistência postural</span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-left space-y-0.5">
                  <span className="font-bold text-teal-900 block text-xs">Step Chair & Barrel</span>
                  <span className="text-[11px] text-slate-500 leading-tight block">Fortalecimento e mobilidade</span>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="bg-teal-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span className="text-[11px] leading-tight">Ambiente acolhedor, limpo e seguro em Curitiba.</span>
                </div>
                <UserCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
