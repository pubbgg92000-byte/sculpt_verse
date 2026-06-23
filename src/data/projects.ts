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
    images: ["/images/giraffe-resort-wall-portrait.png", "/images/giraffe-resort-fence-portrait.png", "/images/giraffe-building-fence-portrait.png", "/images/giraffe-apartment-fence-portrait.png", "/images/giraffe-chainlink-fence-portrait.png", "/images/crocodile-playground-worksite-portrait.png"],
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
    images: ["/images/giraffe-villa-garden-portrait.png", "/images/giraffe-apartment-fence-portrait.png", "/images/giraffe-building-fence-portrait.png"],
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
    images: ["/images/elephant-resort-garden-portrait.png", "/images/elephant-herd-safari-wide.png", "/images/deer-garden-portrait.png"],
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
    images: ["/images/galloping-horse-estate-entrance.png", "/images/dinosaur-playground-head.png"],
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
    images: ["/images/peacock-garden-pavilion.png", "/images/peacock-resort-lawn.png"],
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
    images: ["/images/lion-estate-garden-wide.png", "/images/horse-garden-portrait.png"],
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
    images: ["/images/deer-family-cabin-garden.png", "/images/deer-family-woodland-wide.png", "/images/deer-garden-family-wide.png"],
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
    images: ["/images/swans-lake-resort-wide.png", "/images/swan-resort-pond-portrait.png", "/images/swan-lake-reeds.png"],
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
    images: ["/images/crocodile-playground-pool-portrait.png", "/images/guardian-lions-garden-wide.png"],
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
    images: ["/images/peacock-pool-garden-square.png", "/images/swan-resort-pond-portrait.png", "/images/swans-lake-resort-wide.png"],
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
    images: ["/images/dinosaur-playground-head.png", "/images/lion-playground-wide.png", "/images/crocodile-playground-closeup.png", "/images/deer-school-playground-wide.png"],
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
    images: ["/images/elephant-family-villa-walkway.png", "/images/elephant-family-villa-driveway.png", "/images/giraffe-villa-garden-portrait.png"],
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
    images: ["/images/elephant-family-courtyard.png", "/images/horse-villa-garden-profile.png", "/images/horse-villa-garden-camera.png"],
    description: "Artistic landscape sculptures blending seamlessly with garden architecture. Each piece is designed to enhance the natural beauty of outdoor spaces while adding a touch of artistic sophistication.",
    materials: ["Cement", "Natural Stone", "Bronze Finish"],
    location: "Botanical Garden, Coimbatore",
    dimensions: "Various",
    featured: false,
  },
  {
    id: "metal-art-collection",
    slug: "metal-art-collection",
    title: "Scrap Metal Horse — Art Feature",
    category: "metal",
    categoryLabel: "Metal Art",
    images: ["/images/metal-scrap-horse-portrait.png", "/images/horse-banyan-tree-bronze.png", "/images/horse-under-tree-landscape.png"],
    description: "A hand-finished scrap metal horse sculpture designed as a strong outdoor focal point. Created from reclaimed metal elements and finished for expressive, weather-resistant display.",
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
    images: ["/images/resort-entrance-loin-pair-fence.png"],
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
  const featuredOrder = [
    "horse-sculpture-estate",
    "peacock-garden-feature",
    "lion-pair-entrance",
    "elephant-herd-park",
    "playground-animal-set",
    "resort-landscape-collection",
    "giraffe-family-resort",
  ];

  return featuredOrder
    .map((id) => projects.find((p) => p.id === id))
    .filter((project): project is Project => Boolean(project));
}
