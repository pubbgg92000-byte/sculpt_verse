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

export const projects: Project[] = [
  {
    id: "giraffe-family-resort",
    slug: "giraffe-family-resort",
    title: "Giraffe Family — Resort Installation",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: ["/images/image.png", "/images/image copy.png", "/images/image copy 2.png", "/images/image copy 3.png", "/images/image copy 4.png", "/images/image copy 5.png"],
    description: "A stunning family of life-sized giraffe sculptures, hand-sculpted from cement over a reinforced steel framework. Each giraffe features individually painted markings and lifelike detailing, creating a breathtaking natural scene at this coastal resort.",
    materials: ["Cement", "Steel Framework", "Acrylic Paint", "Weather-Resistant Coating"],
    location: "Coastal Resort, Tamil Nadu",
    dimensions: "Adult: 16ft tall, Calf: 8ft tall",
    featured: true,
  },
  {
    id: "giraffe-garden-villa",
    slug: "giraffe-garden-villa",
    title: "Giraffe Pair — Villa Garden",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: ["/images/image copy 6.png", "/images/image copy 7.png", "/images/image copy 8.png"],
    description: "An elegant pair of giraffes placed in a lush villa garden, surrounded by tropical flowering plants. The sculptures bring a safari-like wonder to this private estate, becoming the focal point of the landscape design.",
    materials: ["Cement", "Steel Framework", "Natural Pigments"],
    location: "Private Villa, Karnataka",
    dimensions: "14ft & 10ft tall",
    featured: true,
  },
  {
    id: "elephant-herd-park",
    slug: "elephant-herd-park",
    title: "Elephant Herd — Nature Park",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: ["/images/image copy 35.png", "/images/image copy 36.png", "/images/image copy 37.png"],
    description: "A majestic herd of elephants — two adults and three calves — walking along a garden pathway. Every wrinkle, ear fold, and tusk is meticulously hand-sculpted to achieve photorealistic quality. A showstopper installation in this nature-themed park.",
    materials: ["Cement", "Steel Framework", "Epoxy Coating", "UV-Resistant Paint"],
    location: "Nature Park, Tamil Nadu",
    dimensions: "Adults: 10ft x 14ft, Calves: 5ft x 7ft",
    featured: true,
  },
  {
    id: "horse-sculpture-estate",
    slug: "horse-sculpture-estate",
    title: "Galloping Horse — Estate Entrance",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: ["/images/image copy 15.png", "/images/image copy 16.png"],
    description: "A powerful galloping horse sculpture in stone-grey finish, positioned at the entrance of a Tuscan-style estate. The dynamic pose captures motion and strength, welcoming visitors with a sense of grandeur.",
    materials: ["Cement", "Steel Framework", "Stone-Effect Finish"],
    location: "Private Estate, Kerala",
    dimensions: "8ft x 10ft",
    featured: true,
  },
  {
    id: "peacock-garden-feature",
    slug: "peacock-garden-feature",
    title: "Royal Peacock — Garden Feature",
    category: "garden",
    categoryLabel: "Garden Features",
    images: ["/images/image copy 20.png", "/images/image copy 21.png"],
    description: "A resplendent peacock sculpture with its tail feathers fanned in full display, hand-painted in iridescent blues, greens, and golds. Placed on a stone pedestal along a garden pathway, it creates a stunning focal point for outdoor wedding venues and resort gardens.",
    materials: ["FRP", "Steel Base", "Hand-Painted Finish", "Clear Coat"],
    location: "Wedding Venue, Goa",
    dimensions: "5ft x 6ft",
    featured: true,
  },
  {
    id: "lion-pair-entrance",
    slug: "lion-pair-entrance",
    title: "Guardian Lions — Estate Entrance",
    category: "animals",
    categoryLabel: "Animal Sculptures",
    images: ["/images/image copy 30.png", "/images/image copy 31.png"],
    description: "Two majestic reclining lions guard the entrance of a sprawling estate. Carved in aged stone finish, they exude timeless authority and grandeur, complementing the heritage architecture perfectly.",
    materials: ["Cement", "Steel Framework", "Aged Stone Finish"],
    location: "Heritage Estate, Rajasthan",
    dimensions: "4ft x 8ft each",
    featured: true,
  },
  {
    id: "deer-garden-set",
    slug: "deer-garden-set",
    title: "Deer Family — Garden Collection",
    category: "garden",
    categoryLabel: "Garden Features",
    images: ["/images/image copy 22.png", "/images/image copy 23.png", "/images/image copy 24.png"],
    description: "A graceful family of deer sculptures — buck, doe, and fawn — scattered across a manicured garden. Natural brown and white coloring makes them blend beautifully with the surrounding landscape.",
    materials: ["Cement", "Steel Framework", "Weather-Resistant Paint"],
    location: "Resort Garden, Ooty",
    dimensions: "Varying from 3ft to 6ft",
    featured: false,
  },
  {
    id: "swan-lake-resort",
    slug: "swan-lake-resort",
    title: "Swan Pair — Lake Resort Feature",
    category: "resort",
    categoryLabel: "Resort Installations",
    images: ["/images/image copy 25.png", "/images/image copy 26.png"],
    description: "A pair of elegant white swans positioned near a resort lake, creating a romantic and serene atmosphere. Their graceful necks and detailed feather work make them appear almost alive.",
    materials: ["FRP", "Steel Anchors", "Marine-Grade Paint"],
    location: "Lake Resort, Munnar",
    dimensions: "3ft x 4ft each",
    featured: false,
  },
  {
    id: "crocodile-theme-park",
    slug: "crocodile-theme-park",
    title: "Crocodile — Theme Park Installation",
    category: "playground",
    categoryLabel: "Playground Sculptures",
    images: ["/images/image copy 27.png", "/images/image copy 28.png"],
    description: "A life-sized crocodile sculpture for a nature-themed park. Realistic scaling and coloring make it an exciting discovery for children. Safety-finished with smooth edges and non-toxic coatings.",
    materials: ["Cement", "Steel Framework", "Child-Safe Finish"],
    location: "Theme Park, Chennai",
    dimensions: "2ft x 12ft",
    featured: false,
  },
  {
    id: "resort-landscape-collection",
    slug: "resort-landscape-collection",
    title: "Resort Landscape — Complete Collection",
    category: "resort",
    categoryLabel: "Resort Installations",
    images: ["/images/image copy 32.png", "/images/image copy 33.png", "/images/image copy 34.png"],
    description: "A comprehensive landscape sculpture installation featuring multiple animal and nature elements across a premium resort property. The collection transforms ordinary grounds into an immersive wildlife experience.",
    materials: ["Cement", "Steel", "FRP", "Natural Stone", "Weather-Resistant Finishes"],
    location: "Premium Resort, Pondicherry",
    dimensions: "Full property installation",
    featured: false,
  },
  {
    id: "playground-animal-set",
    slug: "playground-animal-set",
    title: "Animal Kingdom — School Playground",
    category: "playground",
    categoryLabel: "Playground Sculptures",
    images: ["/images/image copy 38.png", "/images/image copy 39.png", "/images/image copy 40.png", "/images/image copy 41.png"],
    description: "A vibrant collection of colorful animal sculptures designed specifically for a school playground. Each piece is child-safe, durable, and educational — turning playtime into an adventure through the animal kingdom.",
    materials: ["Cement", "Steel", "Non-Toxic Paint", "Smooth Safety Finish"],
    location: "International School, Bangalore",
    dimensions: "Various sizes, 3ft-8ft",
    featured: false,
  },
  {
    id: "custom-villa-entrance",
    slug: "custom-villa-entrance",
    title: "Custom Villa Entrance Feature",
    category: "custom",
    categoryLabel: "Custom Projects",
    images: ["/images/image copy 9.png", "/images/image copy 10.png", "/images/image copy 11.png"],
    description: "A bespoke entrance sculpture designed to match the architectural style of a premium villa. Custom-designed from concept to installation, creating a one-of-a-kind welcome statement.",
    materials: ["Cement", "Steel", "Custom Finish"],
    location: "Private Villa, Hyderabad",
    dimensions: "Custom dimensions",
    featured: false,
  },
  {
    id: "garden-landscape-art",
    slug: "garden-landscape-art",
    title: "Landscape Art — Garden Installation",
    category: "garden",
    categoryLabel: "Garden Features",
    images: ["/images/image copy 12.png", "/images/image copy 13.png", "/images/image copy 14.png"],
    description: "Artistic landscape sculptures blending seamlessly with garden architecture. Each piece is designed to enhance the natural beauty of outdoor spaces while adding a touch of artistic sophistication.",
    materials: ["Cement", "Natural Stone", "Bronze Finish"],
    location: "Botanical Garden, Coimbatore",
    dimensions: "Various",
    featured: false,
  },
  {
    id: "metal-art-collection",
    slug: "metal-art-collection",
    title: "Metal Art — Abstract Collection",
    category: "metal",
    categoryLabel: "Metal Art",
    images: ["/images/image copy 17.png", "/images/image copy 18.png", "/images/image copy 19.png"],
    description: "A collection of hand-welded metal art sculptures featuring abstract designs and nature-inspired forms. Created from premium steel and finished with weather-resistant coatings for lasting outdoor display.",
    materials: ["Mild Steel", "Stainless Steel", "Rust-Proof Coating"],
    location: "Art Gallery, Mumbai",
    dimensions: "4ft-8ft pieces",
    featured: false,
  },
  {
    id: "resort-entrance-feature",
    slug: "resort-entrance-feature",
    title: "Grand Resort Entrance Feature",
    category: "resort",
    categoryLabel: "Resort Installations",
    images: ["/images/image copy 29.png"],
    description: "A grand sculptural feature designed for a premium resort entrance, combining multiple elements to create an unforgettable first impression for guests.",
    materials: ["Cement", "Steel", "FRP", "LED Integration"],
    location: "5-Star Resort, Kerala",
    dimensions: "12ft x 20ft",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "animals", label: "Animals" },
  { id: "metal", label: "Metal Art" },
  { id: "resort", label: "Resort" },
  { id: "playground", label: "Playground" },
  { id: "garden", label: "Garden" },
  { id: "custom", label: "Custom" },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
