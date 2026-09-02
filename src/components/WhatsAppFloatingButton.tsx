import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onOpenContactModal }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>Agendar no WhatsApp</span>
      </div>

      <button
        onClick={() => onOpenContactModal()}
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-white/20"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};
