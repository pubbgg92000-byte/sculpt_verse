import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, Check } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom sculpture services including animal sculptures, garden features, metal art, resort installations, playground installations, and bespoke fabrication.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            Our Services
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Create
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-white/60 max-w-xl mx-auto">
            From intimate garden features to monumental public installations,
            our artisans bring every vision to life with unmatched skill.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${isReversed ? "md:order-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-elevated">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        style={{
                          objectPosition:
                            service.imagePosition ?? "center center",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReversed ? "md:order-1" : ""}>
                    <span className="text-label mb-3 block">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className="heading-section text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                      {service.title}
                    </h2>
                    <p className="text-charcoal-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1.5 bg-cream text-xs font-medium text-charcoal-light rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Materials */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">
                        Materials
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {service.materials.map((mat) => (
                          <span
                            key={mat}
                            className="flex items-center gap-1.5 text-sm text-charcoal-light"
                          >
                            <Check className="w-3.5 h-3.5 text-forest" />
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center gap-6 flex-wrap">
                      <div>
                        <p className="text-xs text-charcoal-light mb-1">
                          Starting from
                        </p>
                        <p
                          className="text-lg font-bold text-forest"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {service.priceRange}
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="btn-primary text-xs py-3 px-6 flex items-center gap-2"
                      >
                        Inquire Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
