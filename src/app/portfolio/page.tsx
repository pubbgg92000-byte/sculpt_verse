"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, categories } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const projectOrder = [
  "giraffe-family-resort",
  "lion-pair-entrance",
  "playground-animal-set",
  "custom-villa-entrance",
  "elephant-herd-park",
  "swan-lake-resort",
  "horse-sculpture-estate",
  "crocodile-theme-park",
  "metal-art-collection",
  "peacock-garden-feature",
  "resort-landscape-collection",
  "deer-garden-set",
  "garden-landscape-art",
  "giraffe-garden-villa",
  "resort-entrance-feature",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const orderedProjects = [...projects].sort(
    (a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)
  );

  const filtered =
    activeCategory === "all"
      ? orderedProjects
      : orderedProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            Portfolio
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Masterpieces
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-white/60 max-w-xl mx-auto">
            Browse our collection of handcrafted sculptures installed across
            India&apos;s finest resorts, villas, parks, and institutions.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-forest text-warm-white shadow-card"
                    : "bg-cream text-charcoal-light hover:bg-stone-light hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project, index) => {
              const isLarge = index % 5 === 0;
              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group block break-inside-avoid image-card rounded-xl overflow-hidden"
                >
                  <div
                    className={`relative ${
                      isLarge ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      unoptimized
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="overlay" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2.5 py-1 bg-forest/70 backdrop-blur-sm text-warm-white text-xs font-medium uppercase tracking-wider rounded mb-2">
                        {project.categoryLabel}
                      </span>
                      <h3
                        className="text-lg font-bold text-warm-white mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-warm-white/60">
                        <span>{project.location}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-bronze-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
