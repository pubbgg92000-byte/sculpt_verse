"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      id="contact-cta"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(196,164,90,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(196,164,90,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center cta-content">
        <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
          Start Your Project
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-warm-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s Create Something Extraordinary Together
        </h2>
        <p
          className="text-lg md:text-xl text-warm-white/60 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
        >
          From a simple garden sculpture to a complete resort landscape — we
          bring your vision to life with passion and precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="btn-bronze text-sm px-8 py-4 flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white hover:text-forest text-sm px-8 py-4 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-warm-white/70 hover:text-warm-white transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </div>

        <p className="text-xs text-warm-white/30">
          Free consultation • No commitment • Pan-India service
        </p>
      </div>
    </section>
  );
}
