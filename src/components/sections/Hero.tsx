"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { getWhatsAppLink } from "@/lib/utils";

gsap.registerPlugin(SplitText);

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading text
      const split = new SplitText(headingRef.current!, {
        type: "chars,words",
      });

      const tl = gsap.timeline({ delay: 0.5 });

      // Animate heading characters
      tl.from(split.chars, {
        opacity: 0,
        y: 60,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Animate subheadline
      tl.from(
        subRef.current!,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Animate CTAs
      tl.from(
        ctaRef.current!.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Animate scroll indicator
      tl.from(
        scrollRef.current!,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2"
      );

      return () => {
        split.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal z-0" />

      {/* Three.js Scene */}
      <HeroScene />

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-label text-bronze-light mb-6 tracking-[0.25em]">
          Premium Custom Sculptures
        </p>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-warm-white mb-6 leading-[1.05]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Transforming Spaces Into Living Art
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-lg md:text-xl text-warm-white/70 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
        >
          Custom Cement, Metal & Landscape Sculptures For Resorts, Villas,
          Parks & Schools
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bronze text-sm px-8 py-4"
            id="hero-cta-primary"
          >
            Get Free Quote
          </a>
          <Link
            href="/portfolio"
            className="btn-secondary text-sm px-8 py-4 border-warm-white/40 text-warm-white hover:bg-warm-white hover:text-charcoal"
            id="hero-cta-secondary"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-xs text-warm-white/50 uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="w-5 h-5 text-warm-white/50 animate-bounce-gentle" />
      </div>
    </section>
  );
}
