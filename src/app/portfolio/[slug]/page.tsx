import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, MapPin, Ruler, Layers, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { ProjectGallery } from "@/components/sections/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: project.title,
      description: project.description,
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id)
    .sort((a, b) => {
      if (a.category === project.category && b.category !== project.category) return -1;
      if (a.category !== project.category && b.category === project.category) return 1;
      return 0;
    })
    .slice(0, 5);

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-8 bg-charcoal">
        <div className="container-narrow px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-warm-white/60 hover:text-warm-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="inline-block px-3 py-1 bg-forest/80 text-warm-white text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            {project.categoryLabel}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-warm-white/60">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-bronze-light" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-bronze-light" />
              {project.dimensions}
            </span>
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-bronze-light" />
              {project.materials.join(", ")}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-warm-white py-12">
        <div className="container-wide px-6">
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* Description + CTA */}
      <section className="section-padding-sm bg-cream">
        <div className="container-narrow px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="heading-section text-2xl md:text-3xl mb-6">
                About This Project
              </h2>
              <p className="text-charcoal-light leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow-card sticky top-28">
                <h3
                  className="text-lg font-bold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Interested in a Similar Project?
                </h3>
                <p className="text-sm text-charcoal-light mb-6">
                  Share your reference, site size and budget range. We&apos;ll
                  discuss practical material and installation options.
                </p>
                <a
                  href={getWhatsAppLink(
                    `Hi! I'm interested in a project similar to "${project.title}". Can you share more details?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center block"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-padding-sm bg-warm-white">
          <div className="container-wide px-6">
            <h2 className="heading-section text-2xl md:text-3xl mb-8">
              Related Projects
            </h2>
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/portfolio/${r.slug}`}
                  className="group image-card relative h-[360px] w-[78vw] max-w-[360px] flex-shrink-0 snap-center overflow-hidden rounded-xl sm:w-[46vw] lg:w-[30vw]"
                >
                  <Image
                    src={r.images[0]}
                    alt={r.title}
                    fill
                    unoptimized
                    loading="eager"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      objectPosition: r.category === "animals" ? "center top" : "center center",
                    }}
                  />
                  <div className="overlay" />
                  <div className="project-open-icon absolute right-4 top-4 z-10 grid h-6 w-6 place-items-center text-white">
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                    <span className="mb-2 inline-block rounded bg-forest/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-warm-white">
                      {r.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-warm-white/70">
                      View this project
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
