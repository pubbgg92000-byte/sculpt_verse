"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
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
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring" />
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 h-7 w-7 text-white"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.02 3.2A12.76 12.76 0 0 0 5.2 22.73L4 29l6.4-1.68a12.73 12.73 0 0 0 5.62 1.3h.01A12.72 12.72 0 0 0 28.8 15.9 12.8 12.8 0 0 0 16.02 3.2Zm0 23.25h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.8 1 1.02-3.7-.25-.39a10.58 10.58 0 1 1 8.81 4.79Zm5.8-7.9c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.56.16-.18.21-.31.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-warm-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
