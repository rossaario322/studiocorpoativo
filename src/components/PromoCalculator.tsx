import React, { useState } from 'react';
import { PROMOTION_INFO } from '../data/clinicData';
import { Sparkles, Check, Users, Calendar, Percent, MessageCircle, ShieldCheck } from 'lucide-react';

interface PromoCalculatorProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const PromoCalculator: React.FC<PromoCalculatorProps> = ({ onOpenContactModal }) => {
  const [frequency, setFrequency] = useState<'1x' | '2x' | '3x'>('2x');
  const [isQuarterly, setIsQuarterly] = useState(true);
  const [isFamilyMember, setIsFamilyMember] = useState(false);

  const isEligibleForDiscount = isQuarterly || isFamilyMember;

  const handleWhatsAppDiscount = () => {
    let text = `Olá! Gostaria de consultar sobre a promoção de Pilates para a frequência de ${frequency} por semana no Studio Corpo Ativo.`;
    if (isQuarterly) text += ` Tenho interesse no Plano Trimestral.`;
    if (isFamilyMember) text += ` Pretendo fazer junto com um familiar no mesmo horário.`;
    if (isEligibleForDiscount) text += ` Gostaria de garantir os 10% de desconto nas mensalidades.`;

    const url = `https://wa.me/5541988031567?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="promocoes" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-teal-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Promotion Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Promoção Exclusiva Studio Corpo Ativo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              10% de Desconto nas Mensalidades
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Valorizamos a sua constância e a saúde de toda a sua família. Conheça as condições reais para garantir seu desconto de 10% no Pilates:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-50 text-teal-800 rounded-xl shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">1. Plano Trimestral</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Ao fechar qualquer plano trimestral (1x, 2x ou 3x por semana), você ganha <strong>10% de desconto</strong> nas duas mensalidades.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-50 text-teal-800 rounded-xl shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">2. Plano Familiar (Mesmo Horário)</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Se alguém da sua família fizer aulas de Pilates no mesmo horário que você, ambos recebem <strong>10% de desconto</strong> nas duas mensalidades!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Desconto aplicado de forma transparente diretamente nas mensalidades contratadas.</span>
            </div>
          </div>

          {/* Right Column: Interactive Discount Eligibility Estimator */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-slate-900 text-lg">
                    Simulador de Desconto
                  </h3>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    10% OFF
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione os critérios para verificar a aplicação do desconto
                </p>
              </div>

              {/* Step 1: Select Frequency */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  1. Frequência Semanal Desejada:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['1x', '2x', '3x'] as const).map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        frequency === freq
                          ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-300'
                      }`}
                    >
                      {freq} por semana
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Conditions */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  2. Condições para Ganhar Desconto:
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100/80 transition-colors">
                  <input
                    type="checkbox"
                    checked={isQuarterly}
                    onChange={(e) => setIsQuarterly(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-teal-700 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800 block">Contratar Plano Trimestral</span>
                    <span className="text-slate-500">Validade garantida para qualquer frequência semanal (1x, 2x ou 3x).</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100/80 transition-colors">
                  <input
                    type="checkbox"
                    checked={isFamilyMember}
                    onChange={(e) => setIsFamilyMember(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-teal-700 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800 block">Fazer no mesmo horário com alguém da família</span>
                    <span className="text-slate-500">Garante 10% de desconto nas duas mensalidades para ambos os familiares.</span>
                  </div>
                </label>
              </div>

              {/* Discount Outcome Box */}
              <div className={`p-4 rounded-2xl border transition-all ${
                isEligibleForDiscount
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}>
                {isEligibleForDiscount ? (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-600 text-white rounded-xl font-bold text-lg">
                      <Percent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                        Elegibilidade Confirmada!
                      </div>
                      <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                        Você atendeu aos requisitos e tem direito a <strong>10% de desconto</strong> nas duas mensalidades!
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 text-center">
                    Selecione ao menos uma das opções acima para ativar o cupom de 10% de desconto nas mensalidades.
                  </p>
                )}
              </div>

              {/* Direct Action Button */}
              <button
                onClick={handleWhatsAppDiscount}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-4 rounded-2xl shadow-md transition-all cursor-pointer btn-hover-effect"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Garantir 10% de Desconto via WhatsApp</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
