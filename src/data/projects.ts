export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "animals" | "metal" | "resort" | "playground" | "garden" | "custom";
  categoryLabel: string;
  images: string[];
  description: string;
  materials: string[];
  location: string;
  dimensions: string;
  featured: boolean;
}

// To add a manual image: place it in public/images, then add "/images/file-name.png"
// to a project's images list. The first image is used as the main card image.
export const projects: Project[] = [
  {
    id: "giraffe-garden-villa",
    slug: "giraffe-garden-villa",
    title: "Giraffe Pair — Garden Display",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: [
      "/images/giraffe-villa-garden-portrait.png",
      "/images/giraffe-apartment-fence-portrait.png",
    ],
    description: "A cement and steel giraffe pair made for a garden setting. The shape, markings, and finish are kept decorative and practical, so the piece feels achievable for a real outdoor installation.",
    materials: ["Cement", "Steel Framework", "Exterior Paint"],
    location: "Private Villa, Karnataka",
    dimensions: "14ft & 10ft tall",
    featured: true,
  },
  {
    id: "floral-garden-arch",
    slug: "floral-garden-arch",
    title: "Floral Arch — Garden Feature",
    category: "garden",
    categoryLabel: "Garden Features",
    images: [
      "/images/garden-arch-day-real.png",
      "/images/garden-arch-night-real.png",
      "/images/floral-photo-arch-day-real.png",
      "/images/floral-heart-arch-night-real.png",
    ],
    description: "A decorative garden arch built with a metal frame, flower detailing, and exterior lighting. It is a clear, buildable feature for entrances, lawns, and event spaces.",
    materials: ["Mild Steel", "Exterior Paint", "Decorative Lights", "Artificial Flowers"],
    location: "Event Lawn, Hyderabad",
    dimensions: "Custom size",
    featured: true,
  },
  {
    id: "mist-fountain-feature",
    slug: "mist-fountain-feature",
    title: "Mist Fountain — Garden Installation",
    category: "resort",
    categoryLabel: "Resort Installations",
    images: [
      "/images/mist-fountain-day-real.png",
      "/images/mist-fountain-night-lights-real.png",
      "/images/mist-fountain-evening-water-real.png",
      "/images/mist-fountain-night-water-real.png",
    ],
    description: "A central fountain feature with a steel canopy form, water mist, and a painted base. The design is simple enough to fabricate and strong enough for parks, resorts, and public gardens.",
    materials: ["Mild Steel", "Water Line", "Exterior Paint", "Lighting Provision"],
    location: "Garden Park, Hyderabad",
    dimensions: "Custom size",
    featured: true,
  },
  {
    id: "crocodile-theme-park",
    slug: "crocodile-theme-park",
    title: "Crocodile — Playground Sculpture",
    category: "playground",
    categoryLabel: "Playground Sculptures",
    images: ["/images/crocodile-playground-closeup.png"],
    description: "A low-height crocodile sculpture for a playground or garden corner. The finish is playful and durable, with rounded edges planned for child-friendly spaces.",
    materials: ["Cement", "Steel Framework", "Child-Safe Exterior Paint"],
    location: "Theme Park, Chennai",
    dimensions: "2ft x 12ft",
    featured: false,
  },
  {
    id: "playground-animal-set",
    slug: "playground-animal-set",
    title: "Garden Playhouse — Kids' Feature",
    category: "playground",
    categoryLabel: "Playground Sculptures",
    images: [
      "/images/playhouse-tree-main-real.png",
      "/images/playhouse-tree-angle-real.png",
      "/images/playhouse-tree-night-real.png",
      "/images/playhouse-tree-wide-night-real.png",
    ],
    description: "A compact raised playhouse feature for parks and school landscapes. The structure uses practical fabrication, bright paint, and garden placement instead of unrealistic fantasy detailing.",
    materials: ["Steel", "Wood Finish Panels", "Exterior Paint", "Safety Railings"],
    location: "International School, Bangalore",
    dimensions: "Custom size",
    featured: false,
  },
  {
    id: "custom-villa-entrance",
    slug: "custom-villa-entrance",
    title: "Flower Light — Custom Garden Feature",
    category: "custom",
    categoryLabel: "Custom Projects",
    images: [
      "/images/flower-light-day-real.png",
      "/images/flower-light-night-real.png",
    ],
    description: "A custom floral light feature made for an outdoor garden. The design uses a metal stem, shaped petals, and lighting so the final piece can be fabricated, installed, and maintained easily.",
    materials: ["Mild Steel", "Acrylic Paint", "Outdoor Lights", "Electrical Fitting"],
    location: "Private Villa, Hyderabad",
    dimensions: "Custom dimensions",
    featured: false,
  },
  {
    id: "garden-landscape-art",
    slug: "garden-landscape-art",
    title: "Lighted Arch — Walkway Feature",
    category: "garden",
    categoryLabel: "Garden Features",
    images: [
      "/images/floral-heart-arch-day-real.png",
      "/images/floral-heart-arch-night-real.png",
      "/images/floral-photo-arch-day-real.png",
    ],
    description: "A simple walkway arch with a metal frame and warm outdoor lighting. It is suitable for resorts, lawns, farmhouses, and photo points.",
    materials: ["Mild Steel", "Outdoor Lights", "Powder-Coated Finish"],
    location: "Botanical Garden, Coimbatore",
    dimensions: "Custom size",
    featured: false,
  },
  {
    id: "metal-art-collection",
    slug: "metal-art-collection",
    title: "Scrap Metal Horse — Art Piece",
    category: "metal",
    categoryLabel: "Metal Art",
    images: ["/images/metal-scrap-horse-portrait.png", "/images/metal-giraffe-scrap-head.png"],
    description: "A hand-finished scrap metal sculpture made from welded metal elements. The visible joints and crafted surface make it feel like real workshop-made art.",
    materials: ["Mild Steel", "Scrap Metal", "Rust-Proof Coating"],
    location: "Art Gallery, Mumbai",
    dimensions: "4ft-8ft pieces",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "animals", label: "Animals" },
  { id: "resort", label: "Resort" },
  { id: "playground", label: "Playground" },
  { id: "garden", label: "Garden" },
  { id: "custom", label: "Custom" },
  { id: "metal", label: "Metal Art" },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  const featuredOrder = [
    "mist-fountain-feature",
    "floral-garden-arch",
    "giraffe-garden-villa",
    "custom-villa-entrance",
    "playground-animal-set",
    "metal-art-collection",
  ];

  return featuredOrder
    .map((id) => projects.find((p) => p.id === id))
    .filter((project): project is Project => Boolean(project));
}
