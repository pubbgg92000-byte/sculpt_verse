"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Shield,
  Wrench,
  Hand,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Every sculpture is uniquely designed to match your vision and space.",
  },
  {
    icon: Shield,
    title: "Weather Resistant",
    description: "Built to withstand Indian monsoons, extreme heat, and coastal conditions.",
  },
  {
    icon: Wrench,
    title: "Steel Reinforced",
    description: "Galvanized steel framework ensures structural integrity for decades.",
  },
  {
    icon: Hand,
    title: "Handcrafted Finish",
    description: "Every detail is hand-sculpted and painted by master artisans.",
  },
  {
    icon: MapPin,
    title: "On-site Installation",
    description: "Our professional team handles delivery and installation pan-India.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality at competitive prices with flexible payment options.",
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "Our sculptures are built to last 15-25+ years with minimal maintenance.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".feature-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 34,
          scale: 0.97,
          stagger: 0.07,
          duration: 0.6,
          ease: "power3.out",
        });
      });
      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-[clamp(1rem,5vw,4rem)] py-12 md:py-20 lg:py-24"
      id="why-choose-us"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-8 text-center md:mb-10">
          <p className="text-label mb-3">Why SculptVerse</p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-4">
            Craftsmanship You Can Trust
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card group rounded-xl bg-white p-5 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-4 group-hover:bg-forest/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <h3
                  className="text-lg font-bold text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
