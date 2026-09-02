import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, MessageCircle, Instagram, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block focus:outline-none">
              <Logo variant="white" size="sm" />
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {CLINIC_INFO.tagline}. Pilates de equipamentos e solo, fisioterapia, liberação miofascial e laserterapia no Jardim das Américas em Curitiba.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram @studio__corpoativo"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços & Tratamentos</a>
              </li>
              <li>
                <a href="#promocao" className="hover:text-emerald-400 transition-colors">Promoção 10% OFF</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre o Studio</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-emerald-400 transition-colors">Conheça a Estrutura</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">Depoimentos no Google</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contatos e Endereço */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Endereço e Contato
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">WhatsApp: {CLINIC_INFO.phones.mainWhatsApp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contato: {CLINIC_INFO.phones.mapsPhone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContactModal()}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                <span>Falar com o Studio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.fullName}. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              <Heart className="w-3.5 h-3.5 text-emerald-500" />
              <span>Saúde e Movimento em Curitiba</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
