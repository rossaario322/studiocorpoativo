import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { Service } from '../types';
import { Activity, UserCheck, HeartPulse, Sparkles, Zap, Footprints, Check, MessageCircle, ChevronRight, Info } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-teal-700" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-teal-700" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-700" />;
      case 'Zap': return <Zap className="w-6 h-6 text-teal-700" />;
      case 'Footprints': return <Footprints className="w-6 h-6 text-amber-600" />;
      default: return <Activity className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Tratamentos e Modalidades do Studio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Conheça todos os procedimentos oferecidos no Studio Corpo Ativo. Todos os atendimentos são personalizados para a sua necessidade individual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative group ${
                service.isUpcoming
                  ? 'bg-amber-50/60 border border-amber-200/80 hover:border-amber-300'
                  : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-teal-200 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl ${service.isUpcoming ? 'bg-amber-100 text-amber-800' : 'bg-teal-50 text-teal-800'}`}>
                    {getIcon(service.iconName)}
                  </div>

                  {service.isUpcoming ? (
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Em Breve
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                      Especialidade
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-teal-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-1 uppercase tracking-wider font-sans">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Specific Equipment or Tools */}
                {service.equipmentOrTools && service.equipmentOrTools.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      Aparelhos / Acessórios:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.equipmentOrTools.map((item, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details List */}
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                {!service.isUpcoming ? (
                  <button
                    onClick={() => onOpenContactModal(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>Consultar / Agendar</span>
                    <ChevronRight className="w-4 h-4 text-teal-700" />
                  </button>
                ) : (
                  <span className="text-xs font-medium text-amber-800 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    Novidade em planejamento
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Real Attendance Showcase in Action */}
        <div className="mt-12 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] max-h-[420px] mx-auto bg-slate-900 group">
                <img 
                  src="/WhatsApp Image 2026-08-26 at 19.39.14.jpeg" 
                  alt="Atendimento e Prática de Pilates no Studio Corpo Ativo" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-flex items-center gap-1 bg-emerald-700/90 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] font-semibold mb-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Atendimento Real
                  </span>
                  <p className="text-xs text-emerald-100 font-medium">Exercício guiado no Step Chair para postura e fortalecimento</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200 inline-block">
                Cuidado na Prática
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Acompanhamento Cuidadoso para Cada Fase da Sua Vida
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                Seja para aliviar dores musculares e articulares, recuperar a mobilidade ou desenvolver força e equilíbrio, cada exercício é orientado de acordo com os seus limites e objetivos individuais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Ajuste de molas e cargas para cada condição física</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Foco em estabilidade articular e prevenção de lesões</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Correção postural contínua em cada movimento</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Ambiente tranquilo e seguro para seu treino</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenContactModal('Avaliação e Pilates de Equipamentos')}
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Agendar Aula ou Avaliação</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner for Classes Info */}
        <div className="mt-12 bg-gradient-to-r from-teal-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold">
              Prefere aulas individuais ou em grupo de duas pessoas?
            </h4>
            <p className="text-xs sm:text-sm text-teal-100 max-w-2xl">
              No Studio Corpo Ativo atendemos de um ou dois alunos por horário (que é o máximo que o espaço suporta), garantindo acompanhamento próximo e atenção focada na sua evolução.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('Informações de Aulas e Horários')}
            className="inline-flex items-center gap-2 bg-white text-teal-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Consultar Horários Disponíveis</span>
          </button>
        </div>

      </div>
    </section>
  );
};
