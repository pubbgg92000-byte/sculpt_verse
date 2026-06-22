"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const featured = getFeaturedProjects();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const scrollWidth = track.scrollWidth - track.clientWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-cream"
      id="portfolio-showcase"
    >
      {/* Section Header - pinned */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-12 pb-4 px-6 lg:px-10 bg-gradient-to-b from-cream via-cream to-transparent">
        <div className="container-wide flex items-end justify-between">
          <div>
            <p className="text-label mb-2">Our Work</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-forest hover:text-bronze transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-6 px-6 lg:px-10 pt-28"
        style={{ width: `${featured.length * 480 + 100}px` }}
      >
        {featured.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative flex-shrink-0 w-[380px] md:w-[440px] h-[65vh] rounded-2xl overflow-hidden"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="440px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1 bg-forest/80 text-warm-white text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                {project.categoryLabel}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold text-warm-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h3>
              <p className="text-sm text-warm-white/60 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-warm-white/50">
                <span>{project.materials.slice(0, 2).join(" · ")}</span>
                <span>•</span>
                <span>{project.location}</span>
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-warm-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-warm-white" />
            </div>
          </Link>
        ))}

        {/* View All Card */}
        <Link
          href="/portfolio"
          className="flex-shrink-0 w-[300px] h-[65vh] rounded-2xl bg-forest flex flex-col items-center justify-center gap-4 group hover:bg-forest-light transition-colors duration-300"
        >
          <div className="w-16 h-16 rounded-full border-2 border-warm-white/30 flex items-center justify-center group-hover:border-warm-white/60 transition-colors">
            <ArrowRight className="w-7 h-7 text-warm-white group-hover:translate-x-1 transition-transform" />
          </div>
          <span
            className="text-xl font-bold text-warm-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            View All Projects
          </span>
          <span className="text-sm text-warm-white/60">
            {featured.length}+ completed works
          </span>
        </Link>
      </div>
    </section>
  );
}
