"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { getWhatsAppLink } from "@/lib/utils";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.15 });
      timeline
        .from(imageRef.current, { scale: 1.08, duration: 1.8, ease: "power3.out" })
        .from(".hero-line", { scaleX: 0, transformOrigin: "left", duration: 0.65, ease: "power3.out" }, "-=1.25")
        .from(".hero-reveal", { opacity: 0, y: 34, stagger: 0.1, duration: 0.75, ease: "power3.out" }, "-=0.95");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero-section" className="relative isolate min-h-[680px] h-[100svh] max-h-[960px] overflow-hidden bg-[#0a1711]">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/hero-giraffe-portrait.png"
          alt="Handcrafted giraffe sculptures in a landscaped garden"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-[58%_30%] md:hidden"
        />
        <Image
          src="/hero-giraffe-landscape.jpeg"
          alt="Handcrafted giraffe sculptures in a landscaped garden"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 0px"
          className="hidden object-cover object-center md:block"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 lg:bg-gradient-to-r lg:from-black/82 lg:via-black/48 lg:to-black/12" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,transparent_0%,transparent_24%,rgba(0,0,0,0.14)_65%,rgba(0,0,0,0.34)_100%)]" />
      <HeroScene />

      <div className="relative z-[3] container-wide mx-auto flex h-full items-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:items-center lg:px-10 lg:pb-0">
        <div className="max-w-[760px] text-left">
          <div className="hero-reveal mb-5 flex items-center gap-3">
            <span className="hero-line h-px w-10 bg-bronze-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze-light sm:text-xs">
              Custom sculpture · Hyderabad
            </span>
          </div>

          <h1 className="hero-reveal max-w-3xl text-[clamp(3.25rem,12vw,5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white lg:text-[6.5rem]" style={{ fontFamily: "var(--font-heading)" }}>
            Ideas, shaped into <span className="text-bronze-light">art.</span>
          </h1>

          <p className="hero-reveal mt-6 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
            Made-to-order sculptures for spaces people remember.
          </p>

          <div className="hero-reveal mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hero-primary group inline-flex min-h-13 items-center justify-center gap-2 rounded-md bg-bronze px-7 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_55px_rgba(173,105,21,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-bronze-light hover:shadow-[0_24px_65px_rgba(173,105,21,0.46)]">
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              Discuss your idea
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <Link href="/portfolio" className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-md border border-white/35 bg-black/10 px-7 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-charcoal">
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 z-[3] hidden items-center gap-3 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.26em] text-white/55">Scroll to explore</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-black/10 backdrop-blur-sm">
          <ArrowDown className="h-4 w-4 animate-bounce-gentle text-white/75" />
        </span>
      </div>
    </section>
  );
}
