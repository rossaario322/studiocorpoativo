import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { X, MessageCircle, Sparkles, CheckCircle2, Info, Users, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

type PlanType = 'mensal' | 'trimestral' | 'familiar';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Pilates de Equipamentos');
  const [planOption, setPlanOption] = useState<PlanType>('mensal');
  const [frequency, setFrequency] = useState('2x por semana');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (defaultService) {
      if (defaultService.includes('Trimestral') || defaultService.includes('10%')) {
        setSelectedService('Pilates de Equipamentos');
        setPlanOption('trimestral');
      } else if (defaultService.includes('Familiar')) {
        setSelectedService('Pilates de Equipamentos');
        setPlanOption('familiar');
      } else {
        setSelectedService(defaultService);
        setPlanOption('mensal');
      }
    } else {
      setSelectedService('Pilates de Equipamentos');
      setPlanOption('mensal');
    }
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const isDiscountEligible = planOption === 'trimestral' || planOption === 'familiar';

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Olá! Meu nome é ${name || 'Interessado(a)'}.\n`;
    message += `Gostaria de informações sobre: *${selectedService}*.\n`;
    message += `Frequência pretendida: *${frequency}*.\n`;

    if (planOption === 'trimestral') {
      message += `Modalidade do Plano: *Plano Trimestral (Com 10% de desconto)*.\n`;
    } else if (planOption === 'familiar') {
      message += `Modalidade do Plano: *Plano Familiar / 2+ Pessoas no mesmo horário (Com 10% de desconto)*.\n`;
    } else {
      message += `Modalidade do Plano: *Plano Mensal Padrão*.\n`;
    }

    if (notes.trim()) {
      message += `Observações: ${notes.trim()}\n`;
    }
    message += `\nVim pelo site oficial do Studio Corpo Ativo.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541988031567?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-teal-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
              Contato Direto
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold">
            Agendar Aula / Consulta
          </h3>
          <p className="text-xs text-emerald-100/90 mt-1 font-sans">
            Preencha abaixo para abrir o WhatsApp oficial do Studio Corpo Ativo com sua solicitação.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 text-left">
          
          {/* Nome */}
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Seu Nome:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Maria Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
            />
          </div>

          {/* Serviço Escolhido */}
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Serviço de Interesse:
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent bg-white"
            >
              <option value="Pilates de Equipamentos">Pilates de Equipamentos</option>
              <option value="Pilates de Solo">Pilates de Solo</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Liberação Miofascial">Liberação Miofascial</option>
              <option value="Laserterapia">Laserterapia</option>
              <option value="Dúvidas Gerais">Dúvidas / Informações Gerais</option>
            </select>
          </div>

          {/* Frequência */}
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Frequência Pretendida:
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent bg-white"
            >
              <option value="1x por semana">1x por semana</option>
              <option value="2x por semana">2x por semana</option>
              <option value="3x por semana">3x por semana</option>
              <option value="Avaliação / Consulta">Avaliação Inicial</option>
            </select>
          </div>

          {/* Modalidade / Plano (Condição obrigatória para desconto de 10%) */}
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Modalidade do Plano:
            </label>
            <select
              value={planOption}
              onChange={(e) => setPlanOption(e.target.value as PlanType)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent bg-white font-medium"
            >
              <option value="mensal">Plano Mensal (Padrão)</option>
              <option value="trimestral">Plano Trimestral (10% OFF em todas as mensalidades)</option>
              <option value="familiar">Plano Familiar / Dupla (10% OFF para 2+ pessoas no mesmo horário)</option>
            </select>
          </div>

          {/* Indicador do Desconto de 10% e Aviso */}
          {isDiscountEligible ? (
            <div className="flex items-start gap-2.5 p-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 text-xs">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold block text-emerald-900">
                  Desconto de 10% Ativado!
                </span>
                <span className="text-emerald-800 text-[11px] block">
                  {planOption === 'trimestral' 
                    ? '10% de desconto garantido no contrato do Plano Trimestral.' 
                    : '10% de desconto garantido ao praticar em grupo familiar no mesmo horário.'}
                </span>
                {planOption === 'familiar' && (
                  <span className="text-[10px] text-teal-800 font-semibold bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300/60 block mt-1">
                    📌 <strong>Aviso</strong>: Válido para 2 ou mais pessoas da mesma família realizando as aulas no mesmo horário. O desconto de 10% é aplicado na mensalidade de cada aluno.
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 text-[11px]">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Para ativar <strong>10% de desconto</strong>, escolha o <strong>Plano Trimestral</strong> ou o <strong>Plano Familiar</strong> (mínimo de 2 pessoas no mesmo horário).
              </span>
            </div>
          )}

          {/* Observações */}
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Alguma observação ou dor específica? (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de alinhar postura / dores no joelho..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-200" />
            <span>Enviar Mensagem pelo WhatsApp</span>
          </button>

          <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Resposta rápida no WhatsApp oficial: {CLINIC_INFO.phones.mainWhatsApp}</span>
          </p>

        </form>

      </div>
    </div>
  );
};

