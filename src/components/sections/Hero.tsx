"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { getWhatsAppLink } from "@/lib/utils";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 34,
        stagger: 0.11,
        duration: 0.85,
        delay: 0.25,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="hero-environment relative isolate min-h-[680px] h-[100svh] max-h-[980px] overflow-hidden"
    >
      <div className="hero-ambient absolute inset-0" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="absolute inset-y-0 right-0 z-[1] w-full lg:w-[64%]">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251d] via-[#10251d]/75 to-transparent lg:bg-gradient-to-r lg:from-[#132b22] lg:via-transparent lg:to-transparent" />
      </div>

      <div className="relative z-[2] container-wide mx-auto flex h-full items-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:items-center lg:px-10 lg:pb-0">
        <div ref={contentRef} className="max-w-[690px] text-center lg:text-left">
          <div className="hero-reveal mb-5 inline-flex items-center gap-3 rounded-full border border-bronze-light/25 bg-black/15 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-bronze-light sm:text-xs">
              Sculpted by hand · Built to endure
            </span>
          </div>

          <h1 className="hero-reveal text-[clamp(2.65rem,9.5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-warm-white lg:text-[5.6rem]" style={{ fontFamily: "var(--font-heading)" }}>
            We turn imagination into <span className="text-bronze-light">monumental art.</span>
          </h1>

          <p className="hero-reveal mx-auto mt-6 max-w-xl text-sm leading-6 text-warm-white/68 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
            Bespoke cement, metal and landscape sculptures crafted for resorts,
            villas, parks and unforgettable public spaces.
          </p>

          <div className="hero-reveal mt-8 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center lg:justify-start">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-bronze min-h-12 px-7 text-xs">
              Start a sculpture
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/portfolio" className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-warm-white/35 bg-warm-white/5 px-7 text-xs font-semibold uppercase tracking-[0.05em] text-warm-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-warm-white hover:text-charcoal hover:shadow-elevated">
              Explore our work
            </Link>
          </div>

          <div className="hero-reveal mt-7 flex items-center justify-center gap-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 lg:justify-start">
            <span>Cement</span><span className="h-1 w-1 rounded-full bg-bronze-light" /><span>Metal</span><span className="h-1 w-1 rounded-full bg-bronze-light" /><span>Landscape</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-[2] hidden items-center gap-3 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.25em] text-warm-white/45">Move cursor · Discover</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/20">
          <ArrowDown className="h-4 w-4 animate-bounce-gentle text-warm-white/60" />
        </span>
      </div>
    </section>
  );
}
