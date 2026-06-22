"use client";

import { useState } from "react";
import Link from "next/link";
import { pricingTiers, faqs } from "@/data/pricing";
import { Check, Star, ChevronDown, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            Pricing
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transparent Pricing
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-white/60 max-w-xl mx-auto">
            Fair, project-wise pricing for custom sculpture work. Cost depends on
            size, material, finish, transport, and installation needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  tier.popular
                    ? "bg-forest text-warm-white shadow-dramatic ring-2 ring-bronze scale-[1.02] lg:scale-105"
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
                  {tier.features.map((feature) => (
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

          <p className="text-center text-sm text-charcoal-light mt-10 max-w-2xl mx-auto">
            All prices are indicative and may vary based on design complexity,
            material choices, and site-specific requirements. Contact us for an
            accurate quote tailored to your project.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6">
          <div className="text-center mb-12">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="heading-section text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-subtle"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-light shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-charcoal-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-forest text-center">
        <div className="container-narrow px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-warm-white/60 mb-8 max-w-lg mx-auto">
            Send your reference, size idea, location, and budget range. We&apos;ll
            discuss the practical options before sharing a quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-bronze text-sm px-8 py-4"
            >
              Get Free Quote
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/35 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-forest hover:shadow-elevated"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
