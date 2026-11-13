'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      {/* Floating Call Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:9100328050"
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 text-white shadow-xl hover:shadow-2xl border-2 border-gold-400 transform hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Call Sri Lakshmi Narasimha Marriage Bureau"
        >
          {/* Subtle Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-maroon-600 opacity-40 animate-ping pointer-events-none" />
          
          <Phone className="w-6 h-6 text-gold-300 fill-gold-400" />
          
          {/* Tooltip */}
          <span className="absolute left-16 bg-maroon-950 text-gold-200 text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold-500/50 shadow-lg">
            Call: 9100328050
          </span>
        </a>
      </div>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919100328050?text=Namaste%20Sri%20Lakshmi%20Narasimha%20Marriage%20Bureau.%20I%20would%20like%20to%20enquire%20about%20matrimonial%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl border-2 border-gold-400 transform hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat with Sri Lakshmi Narasimha Marriage Bureau on WhatsApp"
        >
          {/* Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.563 5.375L2.25 22l4.75-1.281c1.5 .875 3.25 1.344 5.031 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.594 0-3.156-.438-4.5-1.25l-.313-.188-3.344.906.906-3.25-.219-.344C3.719 14.78 3.25 13.438 3.25 12.03c0-4.844 3.938-8.781 8.781-8.781 4.844 0 8.781 3.938 8.781 8.781 0 4.844-3.938 8.781-8.781 8.781zm4.813-6.562c-.281-.156-1.594-.781-1.844-.875-.25-.094-.438-.156-.625.156s-.719.875-.875 1.063-.313.188-.594.031-1.188-.438-2.281-1.406c-.844-.75-1.406-1.688-1.563-1.969s-.031-.438.125-.594c.125-.125.281-.344.438-.5.156-.156.219-.281.313-.469s.031-.344-.031-.5c-.063-.156-.625-1.5-.844-2.063-.219-.531-.438-.469-.625-.469h-.531c-.188 0-.5.063-.781.344s-1.063 1.031-1.063 2.531 1.094 2.938 1.25 3.125c.156.188 2.156 3.281 5.219 4.594.719.313 1.281.5 1.719.656.719.219 1.375.188 1.875.125.563-.094 1.594-.656 1.813-1.281.219-.625.219-1.188.156-1.281-.063-.094-.25-.156-.531-.281z" />
          </svg>

          {/* Tooltip */}
          <span className="absolute right-16 bg-[#128C7E] text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/30 shadow-lg">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}

