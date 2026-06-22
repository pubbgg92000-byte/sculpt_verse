"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled
          ? "glass shadow-subtle py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
          <Image
            src="/logo.png"
            alt="SculptVerse"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span
              className="text-lg md:text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className={scrolled ? "text-forest" : "text-white"}>
                Sculpt
              </span>
              <span className="gradient-text-bronze">Verse</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-bronze ${
                scrolled ? "text-charcoal" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white/90"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+91 98765 43210</span>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5"
            id="nav-cta"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass shadow-elevated transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base font-medium text-charcoal hover:text-forest hover:bg-cream rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-stone-light/30 mt-4 space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 py-3 px-4 text-charcoal"
            >
              <Phone className="w-5 h-5 text-forest" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
