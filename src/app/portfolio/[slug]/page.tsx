import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { ArrowLeft, MapPin, Ruler, Layers, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

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
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  fill
                  unoptimized
                  loading={i === 0 ? undefined : "eager"}
                  sizes={i === 0 ? "100vw" : "50vw"}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
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
                  Get a free quote for your custom sculpture project. We&apos;ll
                  design something perfect for your space.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/portfolio/${r.slug}`}
                  className="group image-card rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={r.images[0]}
                      alt={r.title}
                      fill
                      unoptimized
                      loading="eager"
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-lg font-bold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
                        {r.title}
                      </h3>
                    </div>
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
