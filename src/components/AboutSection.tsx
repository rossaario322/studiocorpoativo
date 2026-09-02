import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Heart, Sparkles, Shield, Award, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase: Real Attendance Photo & Studio Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {/* Real attendance photo */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <img 
                src="/WhatsApp Image 2026-08-27 at 09.53.13.jpeg" 
                alt="Acompanhamento de Pilates no Ladder Barrel - Studio Corpo Ativo" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-teal-800/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Atendimento Personalizado</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-serif font-bold text-sm sm:text-base drop-shadow-sm">Consciência Corporal & Postura</p>
                <p className="text-[11px] sm:text-xs text-emerald-100 drop-shadow-xs">Exercício guiado no Ladder Barrel para fortalecimento do core</p>
              </div>
            </div>

            {/* Studio Card */}
            <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white rounded-3xl p-6 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/60 px-3 py-0.5 rounded-full border border-emerald-500/30 inline-block">
                  Studio Corpo Ativo
                </span>
                <span className="text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Jardim das Américas
                </span>
              </div>
              
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                Nosso espaço foi planejado para proporcionar conforto, tranquilidade e segurança. Contamos com aparelhos Metalife higienizados e um ambiente acolhedor.
              </p>

              {/* Differential Highlight */}
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-start gap-3">
                <div className="p-2 bg-emerald-600/80 text-white rounded-xl shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                </div>
                <div className="space-y-0.5">
                  <strong className="text-white text-xs sm:text-sm font-bold block">Foco na Sua Evolução</strong>
                  <p className="text-emerald-100 text-xs">
                    Treinos montados individualmente respeitando os limites e o alívio de dores de cada aluno.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
              Sobre o Studio
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Cuidado Atencioso para Seu Bem-Estar e Saúde
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              O <strong>Studio Corpo Ativo - Pilates e Fisioterapia</strong> oferece tratamentos e aulas no solo e nos aparelhos clássicos (Cadillac, Reformer, Step Chair e Ladder Barrel). Cada aluno recebe atenção individualizada, focando na prevenção de dores de coluna e joelho, reabilitação articular e equilíbrio corporal.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">Aulas em aparelhos Metalife e solo</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">Foco em dores de joelho e coluna</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">Fisioterapia e Liberação Miofascial</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">Laserterapia e atendimento humanizado</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
