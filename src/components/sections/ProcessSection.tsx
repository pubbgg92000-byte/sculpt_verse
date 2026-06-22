"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  Pencil,
  Wrench,
  Hammer,
  Paintbrush,
  Truck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Share your vision, space details, and requirements. We listen, advise, and understand your project goals.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our artists create detailed sketches and 3D previews. You approve the design before any work begins.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Steel Framework",
    description:
      "A robust galvanized steel skeleton is hand-welded to form the core structure for strength and longevity.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Concrete Sculpting",
    description:
      "Layer by layer, cement is applied and hand-sculpted to achieve photorealistic detail and form.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Finishing",
    description:
      "Multiple coats of weather-resistant paint and UV coatings are applied for a stunning, lasting finish.",
    icon: Paintbrush,
  },
  {
    number: "06",
    title: "Installation",
    description:
      "Our team travels to your site for professional installation, including foundation work and final touches.",
    icon: Truck,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Animate each step
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-warm-white"
      id="process-section"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-label mb-3">How We Work</p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-4">
            From Vision to Reality
          </h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto">
            Every sculpture follows our proven six-step process, ensuring
            quality, transparency, and stunning results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-forest via-bronze to-forest" />
          </div>

          {/* Mobile Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-forest via-bronze to-forest" />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`process-step relative flex items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot - Mobile */}
                  <div className="absolute left-6 w-3 h-3 rounded-full bg-bronze -translate-x-1/2 md:hidden z-10" />

                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className={`bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 ${isEven ? "md:ml-auto" : ""} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-forest" />
                        </div>
                        <span className="text-sm font-bold text-bronze uppercase tracking-widest">
                          Step {step.number}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-charcoal mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-charcoal-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-bronze border-4 border-warm-white shadow-subtle z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
