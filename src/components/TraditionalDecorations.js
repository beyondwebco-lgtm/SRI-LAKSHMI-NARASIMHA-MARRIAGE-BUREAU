import React from 'react';

// Ornate Indian Mandala / Floral Divider - Fully Responsive
export function MandalaDivider({ className = "", gold = true }) {
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 select-none px-2 ${className}`}>
      <div className={`h-[1.5px] w-8 xs:w-14 sm:w-28 md:w-40 ${gold ? 'bg-gradient-to-r from-transparent via-gold-500 to-gold-600' : 'bg-gradient-to-r from-transparent via-maroon-400 to-maroon-600'}`} />
      <div className="mx-2 sm:mx-3 flex items-center space-x-1 sm:space-x-1.5 text-gold-500 flex-shrink-0">
        <span className="text-[10px] sm:text-xs">✦</span>
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-gold-500 transform rotate-45">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" />
          <circle cx="20" cy="20" r="4" className="fill-maroon-700" />
        </svg>
        <span className="text-[10px] sm:text-xs">✦</span>
      </div>
      <div className={`h-[1.5px] w-8 xs:w-14 sm:w-28 md:w-40 ${gold ? 'bg-gradient-to-l from-transparent via-gold-500 to-gold-600' : 'bg-gradient-to-l from-transparent via-maroon-400 to-maroon-600'}`} />
    </div>
  );
}

// Sacred Kalash Icon (Auspicious Indian Matrimonial Symbol)
export function KalashIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mango Leaves */}
      <path d="M32 10 C28 4, 18 12, 22 22 C26 20, 29 16, 32 10 Z" fill="#2E8058" />
      <path d="M32 10 C36 4, 46 12, 42 22 C38 20, 35 16, 32 10 Z" fill="#2E8058" />
      <path d="M32 6 C29 0, 35 0, 32 6 Z" fill="#1B4D3E" />
      <path d="M32 12 C26 8, 20 18, 27 24 Z" fill="#1F6744" />
      <path d="M32 12 C38 8, 44 18, 37 24 Z" fill="#1F6744" />
      
      {/* Coconut on top */}
      <ellipse cx="32" cy="18" rx="8" ry="10" fill="#8B4513" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="32" cy="12" r="2.5" fill="#D4AF37" />
      
      {/* Kalash Pot (Gold) */}
      <path d="M22 26 L42 26 L45 32 L48 42 C48 50, 42 56, 32 56 C22 56, 16 50, 16 42 L19 32 Z" fill="#D4AF37" stroke="#947217" strokeWidth="1.5" />
      <path d="M20 26 C20 23, 44 23, 44 26 L42 30 L22 30 Z" fill="#F8F1D2" stroke="#B89325" strokeWidth="1" />
      
      {/* Red Swastika / Auspicious mark on Kalash */}
      <path d="M29 38 H35 M32 35 V41 M29 35 V37 M35 39 V41 M29 41 H31 M33 35 H35" stroke="#800000" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Sacred Thread (Mauli/Kalawa) */}
      <rect x="22" y="28" width="20" height="3" fill="#800000" rx="1.5" />
      <rect x="24" y="32" width="16" height="1.5" fill="#C59B27" />
    </svg>
  );
}

// Traditional Diya Lamp (Golden Brass Oil Lamp)
export function DiyaIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Glow */}
      <ellipse cx="32" cy="18" rx="14" ry="14" fill="rgba(255, 215, 0, 0.25)" filter="blur(4px)" />
      
      {/* Flame */}
      <path d="M32 6 C35 12, 38 18, 36 22 C34 26, 30 26, 28 22 C26 18, 29 12, 32 6 Z" fill="#FF8C00" className="diya-pulse" />
      <path d="M32 10 C34 14, 35 18, 34 20 C33 22, 31 22, 30 20 C29 18, 30 14, 32 10 Z" fill="#FFD700" />
      
      {/* Brass Lamp Bowl */}
      <path d="M14 30 C18 28, 46 28, 50 30 C49 42, 40 48, 32 48 C24 48, 15 42, 14 30 Z" fill="#D4AF37" stroke="#947217" strokeWidth="1.5" />
      <ellipse cx="32" cy="30" rx="18" ry="4" fill="#E6C247" stroke="#947217" strokeWidth="1" />
      
      {/* Diya Base */}
      <path d="M26 48 L22 56 L42 56 L38 48 Z" fill="#B89325" stroke="#755815" strokeWidth="1" />
    </svg>
  );
}

// Auspicious Marigold and Mango Leaves Toran Banner - Mobile & Tablet Optimized
export function ToranBanner() {
  return (
    <div className="w-full overflow-hidden bg-maroon-900 border-b border-gold-500/40 py-1.5 px-3 sm:px-4 text-center select-none shadow-sm relative">
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
      <div className="relative max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gold-300">
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="text-yellow-400 text-xs">॥</span>
          <span className="tracking-wider sm:tracking-widest uppercase font-serif text-[10px] sm:text-xs text-gold-200">
            శ్రీ లక్ష్మీ నరసింహ స్వామి ప్రసన్నః
          </span>
          <span className="hidden md:inline text-gold-400">|</span>
          <span className="hidden md:inline text-gold-300 text-xs font-serif">
            Regd. No: 596/2026
          </span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
          <span className="hidden lg:inline bg-gold-500/20 text-gold-200 px-2.5 py-0.5 rounded-full border border-gold-500/40 text-[11px]">
            Sivashakthi Marriage Bureau Welfare Association
          </span>
          <a
            href="tel:9100328050"
            className="flex items-center space-x-1 text-gold-300 hover:text-white transition-colors font-semibold text-[11px] sm:text-xs py-0.5"
          >
            <span>📞</span>
            <span>+91 91003 28050</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Gold Corner Filigree
export function GoldCorner({ position = "top-left" }) {
  const getStyle = () => {
    switch(position) {
      case "top-right":
        return "top-2 right-2 rotate-90";
      case "bottom-left":
        return "bottom-2 left-2 -rotate-90";
      case "bottom-right":
        return "bottom-2 right-2 rotate-180";
      default:
        return "top-2 left-2";
    }
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`absolute w-4 h-4 sm:w-5 sm:h-5 pointer-events-none text-gold-500/70 ${getStyle()}`}
    >
      <path d="M2 22 V6 C2 3.79086 3.79086 2 6 2 H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 18 V8 C6 6.89543 6.89543 6 8 6 H18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}
