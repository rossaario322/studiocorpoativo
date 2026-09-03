import React from 'react';
import { Sparkles, Calendar, Users, MessageCircle } from 'lucide-react';

interface PromoBannerProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenContactModal }) => {
  return (
    <section id="promocao" className="py-12 md:py-16 bg-gradient-to-r from-teal-900 via-emerald-900 to-teal-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Content */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Desconto Especial</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              10% de Desconto nas Mensalidades
            </h2>

            <p className="text-emerald-100 text-sm leading-relaxed font-sans">
              Garantimos <strong>10% de desconto</strong> nas mensalidades no <strong>Plano Trimestral</strong> ou no <strong>Plano Familiar</strong> (quando 2 ou mais pessoas da família treinam juntas no mesmo horário, o desconto de 10% é aplicado nas mensalidades de cada assinatura).
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Plano Trimestral</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-300" />
                <span>Plano Familiar (duas pessoas no mesmo horário)</span>
              </div>
            </div>

            <p className="text-[11px] text-emerald-300/90 italic pt-1">
              📌 <strong>Aviso</strong>: O desconto familiar aplica-se a duas pessoas da mesma família treinando juntas no mesmo horário (capacidade máxima de 2 alunos por horário).
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onOpenContactModal('Plano Trimestral com 10% de Desconto')}
            className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-teal-950 font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-200 shrink-0 cursor-pointer hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Garantir Desconto no WhatsApp</span>
          </button>

        </div>

      </div>
    </section>
  );
};
