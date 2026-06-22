"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[500] flex flex-col gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Phone Button */}
      <a
        href={getPhoneLink()}
        id="floating-phone-cta"
        className="relative w-14 h-14 rounded-full bg-forest flex items-center justify-center shadow-elevated hover:bg-forest-light transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-warm-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-warm-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-cta"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-warm-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
