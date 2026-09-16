import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/properties';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(
    "Hello Ambition Real Estate, I am looking for property options in Ujjain / Indore Road. Please share current available listings."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-3.5 select-none animate-float">
      {/* 1. Circular Call Button (Top) */}
      <a
        href={`tel:${businessInfo.rawPhone1}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-luxury-darkest text-luxury-gold border-2 border-luxury-gold shadow-2xl shadow-black/60 hover:bg-luxury-gold hover:text-luxury-darkest hover:scale-110 active:scale-95 transition-all duration-300"
        title={`Call Advisor: ${businessInfo.phone1}`}
        aria-label="Call Advisor"
      >
        <Phone size={22} className="transition-transform duration-300 group-hover:rotate-12" />

        {/* Desktop hover tooltip */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-luxury-darkest/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-luxury-gold/40 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Call: {businessInfo.phone1}
        </span>
      </a>

      {/* 2. Circular WhatsApp Button (Bottom) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/50 hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
        title="Chat with Advisor on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="fill-white transition-transform duration-300 group-hover:scale-110" />

        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-white"></span>
        </span>

        {/* Desktop hover tooltip */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-luxury-darkest/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-emerald-500/40 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
