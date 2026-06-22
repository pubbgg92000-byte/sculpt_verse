"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/testimonials";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-charcoal text-warm-white"
      id="testimonials"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-label text-bronze-light mb-3">Testimonials</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Clients Say
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-bronze/30 mb-6" />

          <div className="min-h-[200px]">
            <p
              className="text-xl md:text-2xl text-warm-white/90 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center text-warm-white font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-warm-white">{t.name}</p>
                <p className="text-sm text-warm-white/60">
                  {t.role}, {t.company}
                </p>
                <p className="text-xs text-warm-white/40">{t.location}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-bronze fill-bronze"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-warm-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-bronze w-6"
                      : "bg-warm-white/30 hover:bg-warm-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-warm-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
