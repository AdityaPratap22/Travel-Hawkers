"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TRAVEL_HAWKERS_WHATSAPP_NUMBER } from "@/utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultText = encodeURIComponent(
    "Hello Travel Hawkers! I am exploring your website and would like to plan a trip. Please connect with me."
  );
  const whatsappUrl = `https://wa.me/${TRAVEL_HAWKERS_WHATSAPP_NUMBER}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Pop-up Greeting Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <WhatsAppIcon variant="green" className="w-4 h-4 shrink-0" />
          <span>Need instant help? <strong>Chat on WhatsApp</strong></span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss tooltip"
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Travel Hawkers on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        {/* Subtle Pulse Waves */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Official WhatsApp Icon */}
        <WhatsAppIcon
          variant="white"
          className="w-8 h-8 text-white relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />

        {/* Screen Reader Label */}
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
