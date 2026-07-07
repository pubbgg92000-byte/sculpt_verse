"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const featuredImageByProject: Record<string, { src: string; position?: string }> = {
  "mist-fountain-feature": {
    src: "/images/mist-fountain-night-lights-real.png",
    position: "center center",
  },
  "floral-garden-arch": {
    src: "/images/garden-arch-night-real.png",
    position: "center center",
  },
  "giraffe-garden-villa": {
    src: "/images/giraffe-apartment-fence-portrait.png",
    position: "center top",
  },
  "custom-villa-entrance": {
    src: "/images/flower-light-night-real.png",
    position: "center center",
  },
  "playground-animal-set": {
    src: "/images/playhouse-tree-night-real.png",
    position: "center center",
  },
  "metal-art-collection": {
    src: "/images/metal-giraffe-scrap-head.png",
    position: "center center",
  },
};

export function PortfolioShowcase() {
  const featured = getFeaturedProjects();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "previous" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-featured-card]");
    const cardWidth = card?.offsetWidth ?? track.clientWidth * 0.82;
    const gap = 24;

    track.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

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
      <div className="relative">
        <button
          type="button"
          onClick={() => scrollProjects("previous")}
          className="featured-nav-button left-4 hidden md:grid lg:left-6"
          aria-label="Previous featured project"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          type="button"
          onClick={() => scrollProjects("next")}
          className="featured-nav-button right-4 hidden md:grid lg:right-6"
          aria-label="Next featured project"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        <div
          ref={trackRef}
          className="featured-scroll-track relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-5 sm:px-8 md:gap-6 lg:px-10"
        >
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}

          {/* View All Card */}
          <Link
            href="/portfolio"
            className="group flex h-[420px] w-[72vw] max-w-[300px] flex-shrink-0 snap-center flex-col items-center justify-center gap-3 rounded-2xl bg-forest transition-colors duration-300 hover:bg-forest-light sm:h-[500px] md:h-[65vh] md:gap-4"
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
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: ReturnType<typeof getFeaturedProjects>[number];
}) {
  const featuredImage = featuredImageByProject[project.id] ?? {
    src: project.images[1] ?? project.images[0],
    position: "center center",
  };

  return (
    <Link
      data-featured-card
      href={`/portfolio/${project.slug}`}
      className="group image-card relative h-[420px] w-[82vw] max-w-[440px] flex-shrink-0 snap-center overflow-hidden rounded-[1.35rem] sm:h-[500px] md:h-[65vh]"
    >
      <Image
        src={featuredImage.src}
        alt={project.title}
        fill
        unoptimized
        loading="eager"
        sizes="440px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ objectPosition: featuredImage.position ?? "center center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="project-open-icon absolute right-4 top-4 grid h-6 w-6 place-items-center text-white">
        <ArrowUpRight className="h-3 w-3" />
      </div>

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
    </Link>
  );
}
