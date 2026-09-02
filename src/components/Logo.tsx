import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'full',
  showSubtitle = true,
  size = 'md'
}) => {
  const [logoError, setLogoError] = useState(false);
  const [nomeError, setNomeError] = useState(false);
  
  const isWhite = variant === 'white';

  // Size classes for logo symbol
  const logoSizeClass = size === 'lg' 
    ? 'h-16 sm:h-20 md:h-24' 
    : size === 'sm' 
      ? 'h-10 sm:h-12' 
      : 'h-12 sm:h-14 md:h-16';

  // Size classes for name image
  const nameSizeClass = size === 'lg'
    ? 'h-9 sm:h-11 md:h-13'
    : size === 'sm'
      ? 'h-6 sm:h-7'
      : 'h-8 sm:h-10 md:h-11';

  if (isWhite) {
    return (
      <div className={`inline-flex items-center gap-3 bg-white p-2.5 px-4 rounded-2xl shadow-lg border border-white/30 transition-all hover:bg-slate-50 ${className}`}>
        {/* Logo Symbol */}
        {!logoError ? (
          <img 
            src="/logo corpo ativo.png" 
            alt="Logo Studio Corpo Ativo" 
            onError={() => setLogoError(true)}
            className={`${logoSizeClass} w-auto object-contain shrink-0`}
          />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold text-base shrink-0">
            CA
          </div>
        )}
        
        {/* Name Image or Text */}
        {!nomeError ? (
          <img 
            src="/nome.png" 
            alt="Studio Corpo Ativo" 
            onError={() => setNomeError(true)}
            className={`${nameSizeClass} w-auto object-contain shrink-0`}
          />
        ) : (
          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-[0.18em] text-sm sm:text-base leading-none text-teal-950 font-sans uppercase">
              CORPO ATIVO
            </span>
            {showSubtitle && (
              <span className="text-[10px] tracking-[0.2em] mt-1 font-semibold text-teal-800 font-sans lowercase">
                fisioterapia e pilates
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 ${className}`}>
      {/* Logo Symbol Image */}
      {!logoError ? (
        <img 
          src="/logo corpo ativo.png" 
          alt="Logo Studio Corpo Ativo" 
          onError={() => setLogoError(true)}
          className={`${logoSizeClass} w-auto object-contain shrink-0 transition-transform duration-200 hover:scale-105`}
        />
      ) : (
        <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold text-lg shrink-0">
          CA
        </div>
      )}

      {/* Name Image or Styled Text side by side */}
      <div className="flex flex-col justify-center">
        {!nomeError ? (
          <img 
            src="/nome.png" 
            alt="Studio Corpo Ativo" 
            onError={() => setNomeError(true)}
            className={`${nameSizeClass} w-auto object-contain shrink-0`}
          />
        ) : (
          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-[0.18em] text-lg sm:text-xl md:text-2xl leading-none text-teal-900 font-sans uppercase">
              CORPO ATIVO
            </span>
            {showSubtitle && (
              <span className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.22em] mt-1 font-semibold text-teal-700 font-sans lowercase">
                fisioterapia e pilates
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

