import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Clock, Building2 } from 'lucide-react';

interface LocationSectionProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200 inline-block">
            Localização e Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Como Chegar ao Studio Corpo Ativo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Fácil acesso no bairro Jardim das Américas em Curitiba, com estacionamento e estrutura acolhedora.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 bg-teal-800 text-white rounded-2xl shrink-0 shadow-xs">
                  <Building2 className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Pilates e Fisioterapia
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Endereço Oficial:
                </span>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.number}
                </p>
                <p className="text-xs text-slate-600">
                  {CLINIC_INFO.address.neighborhood} - {CLINIC_INFO.address.city} / {CLINIC_INFO.address.state}
                </p>
                <p className="text-xs text-slate-500">
                  CEP: {CLINIC_INFO.address.zipCode}
                </p>
              </div>

              {/* Plus code */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-medium text-slate-700">Plus Code:</span>
                <span className="font-mono text-xs font-bold text-teal-800">{CLINIC_INFO.address.plusCode}</span>
              </div>

              {/* Telefone & WhatsApp */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Telefones para Agendamento:
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp: {CLINIC_INFO.phones.mainWhatsApp}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Contato Alternativo: {CLINIC_INFO.phones.mapsPhone}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href={CLINIC_INFO.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 px-4 rounded-2xl shadow-sm transition-all btn-hover-effect"
              >
                <Navigation className="w-4 h-4 text-emerald-200" />
                <span>Abrir Rota no Google Maps</span>
              </a>

              <button
                onClick={() => onOpenContactModal('Agendamento de Consulta / Aula')}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Falar Diretamente pelo WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Interactive Map & Real Facade Visualizer */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Real Building Façade Photo Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4 group">
              <div className="relative w-full sm:w-48 h-40 sm:h-32 rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                <img 
                  src="/WhatsApp Image 2026-08-22 at 11.51.44.jpeg" 
                  alt="Fachada do Studio Corpo Ativo no Jardim das Américas" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 bg-emerald-700/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  Fachada do Local
                </span>
              </div>
              <div className="space-y-1.5 text-left flex-grow">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal-900 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded-full">
                    Fácil Acesso
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Jardim das Américas</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                  Identificação da Entrada do Prédio
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prédio comercial localizado na Rua Joaquim Amaral, 276. Conta com vagas para estacionar em frente e ambiente seguro.
                </p>
              </div>
            </div>

            {/* Interactive Google Map Frame */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden p-2 flex-grow">
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Google Maps Studio Corpo Ativo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.483182604856!2d-49.2330925!3d-25.4652634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5cc8256125f%3A0xb2a5c80791d56848!2sStudio%20Corpo%20Ativo%20-%20Pilates%20e%20Fisioterapia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                ></iframe>

                {/* Map Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-lg text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-teal-900">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Studio Corpo Ativo</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Rua Joaquim Amaral, 276 - Jardim das Américas
                  </p>
                  <a
                    href={CLINIC_INFO.social.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline pt-1"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
