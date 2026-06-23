"use client";

import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function PortfolioShowcase() {
  const featured = getFeaturedProjects();

  return (
    <section
      className="relative overflow-hidden bg-cream py-16"
      id="portfolio-showcase"
    >
      {/* Section Header */}
      <div className="portfolio-showcase-header relative z-10 px-5 pb-8 sm:px-8 lg:px-10">
        <div className="container-wide flex items-end justify-between">
          <div>
            <p className="text-label mb-2">Our Work</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="portfolio-showcase-link hidden md:flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 sm:px-8 md:gap-6 lg:px-10"
      >
        {featured.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative h-[420px] w-[82vw] max-w-[440px] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[500px] md:h-[65vh]"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              unoptimized
              loading="eager"
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
          className="group flex h-[420px] w-[72vw] max-w-[300px] flex-shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-2xl bg-forest transition-colors duration-300 hover:bg-forest-light sm:h-[500px] md:h-[65vh] md:gap-4"
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
            Selected sculpture ideas
          </span>
        </Link>
      </div>
    </section>
  );
}
