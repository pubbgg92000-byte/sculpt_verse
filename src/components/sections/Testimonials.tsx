import { CheckCircle2, Hammer, MapPin, ShieldCheck } from "lucide-react";

const proofPoints = [
  {
    icon: Hammer,
    title: "Practical builds",
    text: "Frames, finishes, and sizes are planned for real sites.",
  },
  {
    icon: ShieldCheck,
    title: "Outdoor ready",
    text: "Coatings and materials are chosen for weather exposure.",
  },
  {
    icon: MapPin,
    title: "Hyderabad based",
    text: "Simple coordination for site visits and local execution.",
  },
  {
    icon: CheckCircle2,
    title: "Clear scope",
    text: "You see what is included before work begins.",
  },
];

export function Testimonials() {
  return (
    <section
      className="section-padding bg-charcoal text-warm-white"
      id="project-proof"
    >
      <div className="container-wide">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label text-bronze-light mb-3">Simple Proof</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built To Be Made, Not Just Imagined
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-6 text-warm-white/75">
            The focus is practical custom work: buildable forms, clear material
            choices, and outdoor finishes that make sense.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-5"
              >
                <Icon className="mb-4 h-6 w-6 text-bronze-light" />
                <h3 className="mb-2 text-base font-semibold text-warm-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-warm-white/72">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
