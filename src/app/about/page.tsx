import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, MapPin, Clock } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet SculptVerse, a Hyderabad-based custom sculpture studio shaped by craft, ideas, local collaboration, and made-to-order work.",
};

const stats = [
  { icon: Award, value: "Craft", label: "Hands-on Skill" },
  { icon: Users, value: "Custom", label: "Made To Order" },
  { icon: MapPin, value: "Hyd", label: "Hyderabad Based" },
  { icon: Clock, value: "Clear", label: "Practical Timelines" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/image copy 35.png"
            alt="SculptVerse Workshop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Craft-Led Dream.
            <br />
            Shaped Into Sculpture.
          </h1>
          <div className="divider mx-auto mb-6" />
          <p
            className="text-lg text-warm-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
          >
            A personal passion for sculptural work, supported by practical making,
            local collaboration, and a sincere eye for memorable spaces.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-forest py-8">
        <div className="container-wide px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-6 h-6 text-bronze-light mx-auto mb-2" />
                  <p
                    className="text-3xl md:text-4xl font-bold text-warm-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-warm-white/60">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-warm-white">
        <div className="container-narrow px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-label mb-4">Who We Are</p>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                Skill, Patience & A Practical Way To Build
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  SculptVerse is built around a simple belief: a good sculpture
                  does not need to come from a huge studio. It can begin with one
                  person&apos;s idea, a reference image, a space that needs character,
                  and patient hands willing to shape it.
                </p>
                <p>
                  We plan each piece according to the client&apos;s space, budget, and
                  material needs. For framework, fabrication, finishing, transport,
                  or site support, we collaborate with suitable local makers and
                  shops when a project needs extra hands.
                </p>
                <p>
                  The work is custom, honest, and made step by step — from small
                  garden features to animal figures, entrance pieces, themed
                  corners, and decorative sculptures for businesses and homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-dramatic">
                <Image
                  src="/images/image copy 8.png"
                  alt="SculptVerse craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-bronze/10 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-forest/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-dramatic">
                <Image
                  src="/images/image copy 15.png"
                  alt="SculptVerse installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-label mb-4">Our Mission</p>
              <h2 className="heading-section text-3xl md:text-4xl mb-6">
                Turning Rough Ideas Into Real, Touchable Forms
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  We don&apos;t treat sculpture as a catalogue item. We help shape a
                  concept into something that fits the site, feels personal, and
                  can be made with the right mix of cement, FRP, metal, paint,
                  texture, and practical support.
                </p>
                <p>
                  Our aim is to make custom sculptural work approachable for homes,
                  schools, parks, resorts, cafés, builders, and businesses — with
                  pricing and timelines discussed clearly before work begins.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Custom Ideas",
                  "Hyderabad Based",
                  "Material Guidance",
                  "Local Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-charcoal"
                  >
                    <div className="w-2 h-2 rounded-full bg-bronze shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
