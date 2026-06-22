"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pricingTiers } from "@/data/pricing";
import { Check, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function PricingOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pricing-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 36,
          scale: 0.96,
          stagger: 0.1,
          duration: 0.65,
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
      className="bg-warm-white px-[clamp(1rem,5vw,4rem)] py-12 md:py-20 lg:py-24"
      id="pricing-overview"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-9 text-center md:mb-10">
          <p className="text-label mb-3">Investment</p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-4">
            Transparent Pricing
          </h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto">
            Quality craftsmanship at fair prices. Every project includes design,
            fabrication, finishing, and installation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 sm:p-6 ${
                tier.popular
                  ? "bg-forest text-warm-white shadow-dramatic ring-2 ring-bronze"
                  : "bg-white shadow-card hover:shadow-elevated"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-bronze rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-warm-white fill-warm-white" />
                  <span className="text-xs font-bold text-warm-white uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    tier.popular ? "text-warm-white" : "text-charcoal"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.popular ? "text-warm-white/70" : "text-charcoal-light"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <p
                  className={`text-2xl font-bold ${
                    tier.popular ? "gradient-text-bronze" : "text-forest"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.priceRange}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    tier.popular ? "text-warm-white/50" : "text-charcoal-light"
                  }`}
                >
                  {tier.sizeRange}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        tier.popular ? "text-bronze-light" : "text-forest"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.popular ? "text-warm-white/80" : "text-charcoal-light"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center text-sm font-semibold uppercase tracking-wider py-3 rounded-lg transition-all duration-300 ${
                  tier.popular
                    ? "bg-bronze text-warm-white hover:bg-bronze-light"
                    : "bg-forest/10 text-forest hover:bg-forest hover:text-warm-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-charcoal-light mt-10">
          All prices are indicative. Final pricing depends on design complexity,
          materials, and site requirements.{" "}
          <Link href="/pricing" className="text-forest font-medium hover:text-bronze transition-colors">
            View detailed pricing →
          </Link>
        </p>
      </div>
    </section>
  );
}
