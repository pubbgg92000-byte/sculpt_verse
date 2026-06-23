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
    description: "Life-sized and larger-than-life animal sculptures handcrafted from cement, FRP, and steel. From majestic elephants to graceful deer, each piece is sculpted with photorealistic detail and finished to withstand the elements.",
    applications: ["Resorts & Hotels", "Theme Parks", "Zoos & Nature Parks", "Villa Gardens", "Schools & Playgrounds"],
    materials: ["Cement", "FRP", "Steel Framework", "Acrylic Paint"],
    priceRange: "₹25,000 — ₹5,00,000+",
    image: "/images/hero-giraffe-landscape.jpeg",
  },
  {
    id: "garden-sculptures",
    title: "Garden Sculptures",
    description: "Elegant sculptures designed to complement and elevate garden landscapes. From classical forms to contemporary pieces, each sculpture adds artistic sophistication to outdoor spaces.",
    applications: ["Villa Gardens", "Resort Landscapes", "Public Parks", "Botanical Gardens", "Wedding Venues"],
    materials: ["Cement", "Natural Stone", "Bronze Finish", "FRP"],
    priceRange: "₹15,000 — ₹3,00,000+",
    image: "/images/peacock-garden-pavilion.png",
  },
  {
    id: "metal-sculptures",
    title: "Metal Sculptures",
    description: "Hand-welded metal art featuring abstract designs, tree-of-life motifs, and nature-inspired forms. Each piece is a unique work of art created from premium steel with weather-resistant finishes.",
    applications: ["Art Galleries", "Corporate Offices", "Resort Lobbies", "Villa Entrances", "Public Spaces"],
    materials: ["Mild Steel", "Stainless Steel", "Corten Steel", "Copper"],
    priceRange: "₹20,000 — ₹4,00,000+",
    image: "/images/metal-giraffe-scrap-head.png",
    imagePosition: "center center",
  },
  {
    id: "resort-installations",
    title: "Resort Installations",
    description: "Complete landscape sculpture packages for resorts and hotels. We design, fabricate, and install comprehensive collections that transform resort grounds into immersive art destinations.",
    applications: ["Beach Resorts", "Mountain Retreats", "Heritage Hotels", "Eco Resorts", "Luxury Villas"],
    materials: ["Cement", "Steel", "FRP", "Natural Stone", "Marine-Grade Finishes"],
    priceRange: "₹2,00,000 — ₹25,00,000+",
    image: "/images/peacock-pool-garden-square.png",
  },
  {
    id: "playground-installations",
    title: "Playground Installations",
    description: "Child-safe, vibrant, and educational sculpture installations for schools, parks, and recreational spaces. Every piece is finished with non-toxic coatings and smooth safety edges.",
    applications: ["Schools", "Public Parks", "Theme Parks", "Children's Museums", "Residential Communities"],
    materials: ["Cement", "FRP", "Non-Toxic Paint", "Safety Finish"],
    priceRange: "₹15,000 — ₹2,00,000+",
    image: "/images/deer-school-playground-wide.png",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    description: "Bring your vision to life with our bespoke fabrication service. From concept sketches to final installation, our artisans create one-of-a-kind sculptures tailored to your space, style, and story.",
    applications: ["Any Space", "Brand Installations", "Memorial Sculptures", "Entrance Features", "Exhibition Pieces"],
    materials: ["All Materials Available", "Mixed Media", "Custom Finishes"],
    priceRange: "₹50,000 — ₹50,00,000+",
    image: "/images/giraffe-villa-garden-portrait.png",
  },
  {
    id: "landscape-art",
    title: "Landscape Art",
    description: "Artistic installations that blend with natural landscapes, enhancing the beauty of outdoor environments. From rock formations to water features, we create harmony between art and nature.",
    applications: ["Farmhouses", "Estate Gardens", "Public Parks", "Corporate Campuses", "Wellness Retreats"],
    materials: ["Natural Stone", "Cement", "Water Features", "Integrated Lighting"],
    priceRange: "₹30,000 — ₹8,00,000+",
    image: "/images/elephant-family-courtyard.png",
  },
  {
    id: "theme-park-features",
    title: "Theme Park Features",
    description: "Large-scale themed installations for amusement parks, adventure zones, and entertainment venues. We create immersive worlds with life-sized characters, dinosaurs, and fantasy elements.",
    applications: ["Amusement Parks", "Adventure Parks", "Water Parks", "Entertainment Zones", "Exhibition Centers"],
    materials: ["FRP", "Cement", "Steel", "LED Integration", "Special Effects"],
    priceRange: "₹1,00,000 — ₹30,00,000+",
    image: "/images/crocodile-playground-pool-portrait.png",
  },
  {
    id: "public-art",
    title: "Public Art Installations",
    description: "Monument-scale sculptures for public spaces, government projects, and civic landmarks. We work with architects and urban planners to create pieces that inspire community pride.",
    applications: ["City Centers", "Government Buildings", "University Campuses", "Hospitals", "Religious Institutions"],
    materials: ["Cement", "Bronze", "Stainless Steel", "Natural Stone"],
    priceRange: "₹1,00,000 — ₹1,00,00,000+",
    image: "/images/lion-estate-garden-wide.png",
  },
];
