"use client";

import { TRAVEL_HAWKERS_WHATSAPP_NUMBER } from "@/utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  const defaultText = encodeURIComponent(
    "Hello Travel Hawkers! I am exploring your website and would like to plan a trip. Please connect with me."
  );
  const whatsappUrl = `https://wa.me/${TRAVEL_HAWKERS_WHATSAPP_NUMBER}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
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
