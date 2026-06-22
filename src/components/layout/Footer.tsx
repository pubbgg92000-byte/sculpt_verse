import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Our Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#animal-sculptures", label: "Animal Sculptures" },
  { href: "/services#garden-sculptures", label: "Garden Sculptures" },
  { href: "/services#metal-sculptures", label: "Metal Sculptures" },
  { href: "/services#resort-installations", label: "Resort Installations" },
  { href: "/services#custom-fabrication", label: "Custom Fabrication" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80">
      {/* Main Footer */}
      <div className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="group mb-6 flex items-center gap-4">
                <span className="relative grid h-20 w-20 place-items-center rounded-full border border-bronze-light/30 bg-[radial-gradient(circle,rgba(196,164,90,0.24),rgba(196,164,90,0.05)_58%,transparent_72%)] shadow-[0_0_38px_rgba(196,164,90,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(196,164,90,0.32)]">
                  <Image
                    src="/logo-mark.png"
                    alt="SculptVerse"
                    width={64}
                    height={76}
                    className="h-14 w-auto object-contain drop-shadow-[0_8px_18px_rgba(196,164,90,0.28)]"
                  />
                </span>
                <div>
                  <span
                    className="text-xl font-bold text-warm-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    SculptVerse
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-warm-white/60 mb-6">
                Transforming spaces into living art. Premium custom sculptures
                for resorts, villas, parks, and institutions across India.
              </p>
              <div className="divider mb-6" />
              <p
                className="text-lg text-warm-white/40"
                style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
              >
                &ldquo;Where Imagination Meets Craftsmanship&rdquo;
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-widest text-warm-white mb-6"
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-white/60 hover:text-bronze-light transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-widest text-warm-white mb-6"
              >
                Our Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-white/60 hover:text-bronze-light transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-widest text-warm-white mb-6"
              >
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-bronze-light mt-0.5 shrink-0" />
                  <div>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-warm-white/80 hover:text-bronze-light transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-bronze-light mt-0.5 shrink-0" />
                  <a
                    href="mailto:hello@sculptverse.in"
                    className="text-sm text-warm-white/80 hover:text-bronze-light transition-colors"
                  >
                    hello@sculptverse.in
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-bronze-light mt-0.5 shrink-0" />
                  <span className="text-sm text-warm-white/60">
                    Hyderabad, Telangana, India
                    <br />
                    Custom sculptures for homes, parks & businesses
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container-wide px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-white/40">
            &copy; {new Date().getFullYear()} SculptVerse. All rights reserved.
          </p>
          <p className="text-xs text-warm-white/30">
            Crafted with passion in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
