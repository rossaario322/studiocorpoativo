import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Menu, X, MessageCircle, Sparkles, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Promoção 10% OFF', href: '#promocao' },
    { name: 'Sobre o Studio', href: '#sobre' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/5541988031567?text=${encodeURIComponent(
    'Olá! Vim pelo site do Studio Corpo Ativo e gostaria de agendar uma aula experimental de Pilates / Fisioterapia.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border border-emerald-400/30">
              <Sparkles className="w-3 h-3 text-amber-300" />
              PROMOÇÃO
            </span>
            <span className="font-medium text-emerald-50 text-[11px] sm:text-xs">
              <strong>10% de Desconto</strong> no Plano Trimestral e Planos Familiares no mesmo horário!
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-emerald-100/90">
            <a 
              href={CLINIC_INFO.social.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 hidden md:flex"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              Jardim das Américas, Curitiba
            </a>
            <a 
              href={CLINIC_INFO.social.instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3 h-3 text-emerald-400" />
              {CLINIC_INFO.social.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3' 
            : 'bg-white border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center focus:outline-none py-1">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-teal-800 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContactModal()}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98] btn-hover-effect cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Agendar Aula</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenContactModal()}
              className="sm:hidden p-2 text-emerald-800 bg-emerald-50 rounded-lg"
              title="Agendar pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-800 focus:outline-none rounded-lg hover:bg-slate-100"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-slate-700 hover:text-teal-800 py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm py-3 rounded-xl shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Falar no WhatsApp</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs text-slate-600 hover:text-teal-800 py-2 border border-slate-200 rounded-xl font-medium"
                >
                  Ligação / Contato Direto: {CLINIC_INFO.phones.mainWhatsApp}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
