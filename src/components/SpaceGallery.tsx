import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, CheckCircle2, Maximize2, X } from 'lucide-react';

interface SpaceGalleryProps {
  onOpenContactModal?: (serviceTitle?: string) => void;
}

export const SpaceGallery: React.FC<SpaceGalleryProps> = ({ onOpenContactModal }) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const photos = [
    {
      src: '/3.jpeg',
      alt: 'Studio Corpo Ativo - Sala de Pilates com Cadillac, Reformer e Acessórios',
      title: 'Estrutura Completa de Pilates',
      description: 'Aparelhos Metalife (Cadillac, Reformer, Step Chair e Barrel) higienizados e conservados para treinos seguros.',
      tag: 'Aparelhos Clássicos',
      span: 'md:col-span-2'
    },
    {
      src: '/2.jpeg',
      alt: 'Studio Corpo Ativo - Reformer e Ladder Barrel com Espelho',
      title: 'Espaço para Consciência e Postura',
      description: 'Ambiente com espelho amplo e tatames para correção postural contínua em cada movimento.',
      tag: 'Reformer & Barrel',
      span: 'md:col-span-1'
    },
    {
      src: '/5.jpeg',
      alt: 'Studio Corpo Ativo - Princípios e Filosofia do Pilates',
      title: 'Ambiente Aconchegante e Inspirador',
      description: 'Espaço calmo e dedicado ao bem-estar, focado na respiração, controle, fluidez e alinhamento.',
      tag: 'Ambiente e Detalhes',
      span: 'md:col-span-1'
    },
    {
      src: '/4.jpeg',
      alt: 'Studio Corpo Ativo - Fisioterapia e Pilates',
      title: 'Identificação Studio Corpo Ativo',
      description: 'Localizado no Jardim das Américas em Curitiba, pronto para receber você com toda atenção.',
      tag: 'Recepção',
      span: 'md:col-span-2'
    },
  ];

  return (
    <section id="estrutura" className="py-16 sm:py-24 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 border border-teal-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-teal-700" />
            <span>Nosso Espaço</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Conheça a Estrutura do Studio
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans">
            Aparelhos de Pilates Metalife limpos e higienizados em um ambiente calmo, seguro e aconchegante no Jardim das Américas.
          </p>
        </div>

        {/* Photos Grid - 4 Real Studio Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${photo.span}`}
            >
              <div 
                className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActivePhoto(photo.src)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Tag pill */}
                <div className="absolute top-4 left-4 bg-teal-800/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{photo.tag}</span>
                </div>

                {/* Expand indicator button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhoto(photo.src);
                  }}
                  className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-transform duration-200 group-hover:scale-110 cursor-pointer"
                  title="Ampliar imagem"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-bold font-serif text-lg sm:text-xl text-white drop-shadow-sm">
                    {photo.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {photo.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-800 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Aparelhos prontos para aula individual ou em grupo reduzido</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for photo zoom */}
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
              <button 
                onClick={() => setActivePhoto(null)}
                className="absolute -top-12 right-0 text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={activePhoto} 
                alt="Foto ampliada do Studio" 
                className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
