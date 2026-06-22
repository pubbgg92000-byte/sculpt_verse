import {
  Palette,
  Shield,
  Wrench,
  Hand,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Idea-Friendly Design",
    description: "We can begin with a rough photo, sketch, or reference and shape it into a practical sculpture plan.",
  },
  {
    icon: Shield,
    title: "Outdoor-Ready Choices",
    description: "Material, coating, and base decisions are suggested according to where the piece will live.",
  },
  {
    icon: Wrench,
    title: "Local Fabrication Support",
    description: "For metal, frame, transport, and site work, we coordinate with suitable local makers when needed.",
  },
  {
    icon: Hand,
    title: "Hand-Shaped Character",
    description: "The goal is not factory sameness — it is a sculpture with presence, personality, and care.",
  },
  {
    icon: MapPin,
    title: "Hyderabad Based",
    description: "Easy coordination for Hyderabad and Telangana projects, with transport discussions for other locations.",
  },
  {
    icon: DollarSign,
    title: "Budget-Aware Planning",
    description: "We suggest size, material, and finish options according to your budget instead of forcing one package.",
  },
  {
    icon: Clock,
    title: "Care Guidance",
    description: "You get simple guidance for cleaning, repainting, touch-ups, and keeping outdoor pieces looking good.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="bg-cream px-[clamp(1rem,5vw,4rem)] py-10 md:py-14 lg:py-16"
      id="why-choose-us"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-8">
          <p className="text-label mb-2">Why SculptVerse</p>
          <h2 className="heading-section mb-3 text-3xl md:text-4xl lg:text-5xl">
            Craftsmanship You Can Trust
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card trust-card group rounded-xl p-5 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-6"
              >
                <div className="trust-icon mb-5 flex h-13 w-13 items-center justify-center rounded-xl transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="trust-card-title mb-2 text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="trust-card-copy text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
