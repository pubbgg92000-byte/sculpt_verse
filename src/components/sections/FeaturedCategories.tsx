"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Animal Sculptures",
    description: "Life-sized wildlife masterpieces",
    image: "/images/image copy 8.png",
    href: "/portfolio?category=animals",
  },
  {
    title: "Metal Art",
    description: "Hand-welded steel & iron creations",
    image: "/images/image copy 17.png",
    href: "/portfolio?category=metal",
  },
  {
    title: "Playground Sculptures",
    description: "Safe, vibrant & educational",
    image: "/images/image copy 38.png",
    href: "/portfolio?category=playground",
  },
  {
    title: "Garden Features",
    description: "Elegant outdoor art pieces",
    image: "/images/image copy 20.png",
    href: "/portfolio?category=garden",
  },
  {
    title: "Resort Installations",
    description: "Complete landscape transformations",
    image: "/images/image copy 32.png",
    href: "/portfolio?category=resort",
  },
  {
    title: "Custom Projects",
    description: "Your vision, our craftsmanship",
    image: "/images/image copy 9.png",
    href: "/portfolio?category=custom",
  },
];

export function FeaturedCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-warm-white" id="featured-categories">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-label mb-3">What We Create</p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-4">
            Sculpture Categories
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="cat-card image-card group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="overlay" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-xs font-medium uppercase tracking-widest text-bronze-light mb-2">
                  {cat.description}
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold text-warm-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cat.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-warm-white/80 group-hover:text-bronze-light transition-colors duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
