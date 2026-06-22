import type { Metadata } from "next";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn about our proven 6-step process for creating custom sculptures — from initial consultation and design through steel framework, sculpting, finishing, and professional installation.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            How It Works
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Process
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-white/60 max-w-xl mx-auto">
            Every custom piece follows a practical six-step journey — from your
            first call to the final installation. No surprises, just excellence.
          </p>
        </div>
      </section>

      <ProcessSection />
      <ContactCTA />
    </>
  );
}
