"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { TRAVEL_HAWKERS_WHATSAPP_NUMBER } from "@/utils/whatsapp";

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
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Need instant help? <strong>Chat on WhatsApp</strong></span>
          </div>
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

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.977.575 3.824 1.572 5.385L2 22l4.735-1.542a9.98 9.98 0 0 0 5.296 1.573c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.836 14.195c-.244.685-1.42 1.34-1.956 1.378-.512.036-1.168.053-3.766-.995-3.324-1.341-5.467-4.717-5.632-4.939-.166-.221-1.349-1.794-1.349-3.42 0-1.627.854-2.428 1.157-2.76.304-.332.664-.415.886-.415.221 0 .443.003.636.012.208.01.485-.078.758.577.28.669.957 2.333 1.042 2.503.085.171.141.372.028.594-.113.221-.17.36-.339.554-.168.194-.354.433-.506.581-.168.165-.344.346-.148.683.197.337.876 1.442 1.88 2.336 1.293 1.15 2.385 1.506 2.724 1.674.338.168.536.14.734-.088.198-.228.847-.988 1.074-1.326.226-.338.452-.282.758-.168.305.114 1.936.913 2.27 1.08.334.167.557.249.638.388.082.139.082.808-.162 1.493z" />
        </svg>

        {/* Hover Pill for mobile/desktop */}
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
