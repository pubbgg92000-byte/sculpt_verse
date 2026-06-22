"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Moon, Sun, Palette, ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/portfolio", label: "Portfolio", index: "03" },
  { href: "/services", label: "Services", index: "04" },
  { href: "/process", label: "Process", index: "05" },
  { href: "/pricing", label: "Pricing", index: "06" },
  { href: "/contact", label: "Contact", index: "07" },
];

type ThemeName = "day" | "clay" | "night";

const themes: { id: ThemeName; label: string; description: string; Icon: typeof Sun }[] = [
  { id: "day", label: "Forest Day", description: "Fresh green daylight", Icon: Sun },
  { id: "clay", label: "Warm Clay", description: "Earthy studio glow", Icon: Palette },
  { id: "night", label: "Night Studio", description: "Deep gallery mood", Icon: Moon },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("day");

  useEffect(() => {
    const saved = window.localStorage.getItem("sculptverse-theme");
    const nextTheme: ThemeName = saved === "night" || saved === "clay" ? saved : "day";
    document.documentElement.dataset.theme = nextTheme;
    document.body.dataset.theme = nextTheme;
    document.body.classList.remove("theme-day", "theme-clay", "theme-night");
    document.body.classList.add(`theme-${nextTheme}`);
    const frame = window.requestAnimationFrame(() => setTheme(nextTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const currentIndex = themes.findIndex((item) => item.id === theme);
    const next = themes[(currentIndex + 1) % themes.length].id;
    selectTheme(next);
  };

  const selectTheme = (next: ThemeName) => {
    setTheme(next);
    window.requestAnimationFrame(() => {
      document.documentElement.dataset.theme = next;
      document.body.dataset.theme = next;
      document.body.classList.remove("theme-day", "theme-clay", "theme-night");
      document.body.classList.add(`theme-${next}`);
      window.localStorage.setItem("sculptverse-theme", next);
    });
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const ActiveThemeIcon = themes.find((item) => item.id === theme)?.Icon ?? Sun;
  const activeThemeLabel = themes.find((item) => item.id === theme)?.label ?? "Forest Day";

  return (
    <header
      id="main-navbar"
      className={`fixed inset-x-0 top-0 z-[600] transition-all duration-500 ${
        scrolled || isOpen ? "nav-surface py-2.5 shadow-subtle" : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" id="nav-logo" aria-label="SculptVerse home">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-sm bg-white shadow-subtle md:h-12 md:w-12">
            <Image src="/logo.png" alt="SculptVerse logo" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="hidden sm:block text-lg font-bold tracking-tight md:text-xl" style={{ fontFamily: "var(--font-heading)" }}>
            <span className={scrolled || isOpen ? "text-forest" : "text-white"}>Sculpt</span>
            <span className="gradient-text-bronze">Verse</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`relative py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  active
                    ? "text-bronze"
                    : scrolled
                      ? "text-charcoal hover:text-bronze"
                      : "text-white/82 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute inset-x-0 bottom-1 h-px origin-left bg-bronze transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`} />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 hover:rotate-12 ${
              scrolled || isOpen ? "border-forest/15 bg-forest/5 text-forest" : "border-white/20 bg-white/10 text-white"
            }`}
            aria-label={`Switch theme. Current theme is ${activeThemeLabel}`}
            title={`Theme: ${activeThemeLabel}`}
          >
            <ActiveThemeIcon className="h-4 w-4" />
          </button>

          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary !hidden px-5 py-2.5 text-[10px] xl:!inline-flex">
            Get Free Quote
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled || isOpen ? "bg-forest text-white" : "bg-white/10 text-white"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[64px] overflow-y-auto bg-[#10271e] transition-all duration-500 lg:hidden ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(185,128,54,0.24),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(93,139,109,0.25),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-full max-w-2xl flex-col px-6 pb-8 pt-8 sm:px-10">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze-light">Navigate the studio</p>
          <div className="border-t border-white/10">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{ transitionDelay: isOpen ? `${index * 35}ms` : "0ms" }}
                  className={`menu-link group flex items-center gap-4 border-b border-white/10 py-3.5 transition-all duration-500 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                >
                  <span className={`text-[10px] font-semibold tracking-widest ${active ? "text-bronze-light" : "text-white/35"}`}>{link.index}</span>
                  <span className={`text-[clamp(1.45rem,7vw,2.1rem)] font-semibold leading-none ${active ? "text-bronze-light" : "text-white/88 group-hover:text-white"}`} style={{ fontFamily: "var(--font-heading)" }}>
                    {link.label}
                  </span>
                  <ArrowUpRight className={`ml-auto h-4 w-4 transition-all ${active ? "text-bronze-light" : "text-white/30 group-hover:text-white"}`} />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">Choose mood</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {themes.map(({ id, label, description, Icon }) => {
                const selected = id === theme;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => selectTheme(id)}
                    className={`rounded-xl border p-3 text-left transition-all duration-300 ${
                      selected ? "border-bronze-light bg-bronze/20 text-white" : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:bg-white/[0.08]"
                    }`}
                    aria-pressed={selected}
                  >
                    <Icon className="mb-2 h-4 w-4 text-bronze-light" />
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="mt-1 block text-[11px] leading-4 text-white/45">{description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
            <a href="tel:+919876543210" className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 text-sm font-medium text-white/85">
              <Phone className="h-4 w-4 text-bronze-light" /> +91 98765 43210
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-bronze min-h-12 text-xs">
              Start your project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
