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
    title: "Idea-Friendly Design",
    description: "We can begin with a rough photo, sketch, or reference and shape it into a practical sculpture plan.",
  },
  {
    icon: Shield,
    title: "Outdoor-Ready Choices",
    description: "Material, coating, and base decisions are suggested according to where the piece will live.",
  },
  {
    icon: Wrench,
    title: "Local Fabrication Support",
    description: "For metal, frame, transport, and site work, we coordinate with suitable local makers when needed.",
  },
  {
    icon: Hand,
    title: "Hand-Shaped Character",
    description: "The goal is not factory sameness — it is a sculpture with presence, personality, and care.",
  },
  {
    icon: MapPin,
    title: "Hyderabad Based",
    description: "Easy coordination for Hyderabad and Telangana projects, with transport discussions for other locations.",
  },
  {
    icon: DollarSign,
    title: "Budget-Aware Planning",
    description: "We suggest size, material, and finish options according to your budget instead of forcing one package.",
  },
  {
    icon: Clock,
    title: "Care Guidance",
    description: "You get simple guidance for cleaning, repainting, touch-ups, and keeping outdoor pieces looking good.",
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
