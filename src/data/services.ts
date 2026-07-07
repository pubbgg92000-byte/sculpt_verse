export interface Service {
  id: string;
  title: string;
  description: string;
  applications: string[];
  materials: string[];
  priceRange: string;
  image: string;
  imagePosition?: string;
}

export const services: Service[] = [
  {
    id: "animal-sculptures",
    title: "Animal Sculptures",
    description: "Outdoor animal sculptures handcrafted from cement, FRP, and steel. Each piece is planned with practical structure, painted details, and a weather-ready finish.",
    applications: ["Resorts & Hotels", "Theme Parks", "Zoos & Nature Parks", "Villa Gardens", "Schools & Playgrounds"],
    materials: ["Cement", "FRP", "Steel Framework", "Acrylic Paint"],
    priceRange: "₹25,000 — ₹5,00,000+",
    image: "/images/hero-giraffe-landscape.jpeg",
  },
  {
    id: "garden-sculptures",
    title: "Garden Sculptures",
    description: "Garden arches, floral features, decorative figures, and outdoor focal points designed to fit real lawns, walkways, and event spaces.",
    applications: ["Villa Gardens", "Resort Landscapes", "Public Parks", "Botanical Gardens", "Wedding Venues"],
    materials: ["Cement", "Natural Stone", "Bronze Finish", "FRP"],
    priceRange: "₹15,000 — ₹3,00,000+",
    image: "/images/garden-arch-day-real.png",
  },
  {
    id: "metal-sculptures",
    title: "Metal Sculptures",
    description: "Welded metal features for outdoor and indoor display. We discuss frame strength, finish, rust protection, and where the piece will be installed.",
    applications: ["Art Galleries", "Corporate Offices", "Resort Lobbies", "Villa Entrances", "Public Spaces"],
    materials: ["Mild Steel", "Stainless Steel", "Corten Steel", "Copper"],
    priceRange: "₹20,000 — ₹4,00,000+",
    image: "/images/metal-giraffe-scrap-head.png",
    imagePosition: "center center",
  },
  {
    id: "resort-installations",
    title: "Resort Installations",
    description: "Landscape features for resorts and hotels, including fountains, lit arches, garden structures, and practical outdoor installations.",
    applications: ["Beach Resorts", "Mountain Retreats", "Heritage Hotels", "Eco Resorts", "Luxury Villas"],
    materials: ["Cement", "Steel", "FRP", "Natural Stone", "Marine-Grade Finishes"],
    priceRange: "₹2,00,000 — ₹25,00,000+",
    image: "/images/mist-fountain-day-real.png",
  },
  {
    id: "playground-installations",
    title: "Playground Installations",
    description: "Child-safe, vibrant, and educational sculpture installations for schools, parks, and recreational spaces. Every piece is finished with non-toxic coatings and smooth safety edges.",
    applications: ["Schools", "Public Parks", "Theme Parks", "Children's Museums", "Residential Communities"],
    materials: ["Cement", "FRP", "Non-Toxic Paint", "Safety Finish"],
    priceRange: "₹15,000 — ₹2,00,000+",
    image: "/images/playhouse-tree-main-real.png",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    description: "Share a reference, sketch, or rough idea. We help convert it into a practical scope with material, size, finish, and installation choices.",
    applications: ["Any Space", "Brand Installations", "Memorial Sculptures", "Entrance Features", "Exhibition Pieces"],
    materials: ["All Materials Available", "Mixed Media", "Custom Finishes"],
    priceRange: "₹50,000 — ₹50,00,000+",
    image: "/images/flower-light-day-real.png",
  },
  {
    id: "landscape-art",
    title: "Landscape Art",
    description: "Outdoor features planned around paths, lawns, planting, lighting, and maintenance. Useful for gardens, resorts, farmhouses, and public areas.",
    applications: ["Farmhouses", "Estate Gardens", "Public Parks", "Corporate Campuses", "Wellness Retreats"],
    materials: ["Natural Stone", "Cement", "Water Features", "Integrated Lighting"],
    priceRange: "₹30,000 — ₹8,00,000+",
    image: "/images/floral-heart-arch-day-real.png",
  },
  {
    id: "theme-park-features",
    title: "Theme Park Features",
    description: "Themed installations for amusement parks, adventure zones, and entertainment venues, built with strong frames, safe finishes, and practical painted forms.",
    applications: ["Amusement Parks", "Adventure Parks", "Water Parks", "Entertainment Zones", "Exhibition Centers"],
    materials: ["FRP", "Cement", "Steel", "LED Integration", "Special Effects"],
    priceRange: "₹1,00,000 — ₹30,00,000+",
    image: "/images/crocodile-playground-closeup.png",
  },
  {
    id: "public-art",
    title: "Public Art Installations",
    description: "Larger sculpture work for public-facing spaces. Scope, drawings, structure, transport, and site support are discussed before commitment.",
    applications: ["City Centers", "Government Buildings", "University Campuses", "Hospitals", "Religious Institutions"],
    materials: ["Cement", "Bronze", "Stainless Steel", "Natural Stone"],
    priceRange: "₹1,00,000 — ₹1,00,00,000+",
    image: "/images/giraffe-villa-garden-portrait.png",
  },
];
