export interface PricingTier {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  sizeRange: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "small",
    name: "Small Sculptures",
    description: "Perfect for gardens, entrances, and small outdoor spaces.",
    priceRange: "₹15,000 — ₹75,000",
    sizeRange: "Up to 3 feet",
    features: [
      "Single sculpture piece",
      "Cement or FRP material",
      "Weather-resistant finish",
      "Basic painting & detailing",
      "Local delivery discussed separately",
      "Basic care guidance",
    ],
    popular: false,
    cta: "Get Quote",
  },
  {
    id: "medium",
    name: "Medium Sculptures",
    description: "Ideal for resorts, villas, and commercial spaces.",
    priceRange: "₹75,000 — ₹2,50,000",
    sizeRange: "3 to 8 feet",
    features: [
      "Single or paired sculpture",
      "Steel-reinforced framework",
      "Premium cement or FRP",
      "Detailed hand-painting",
      "Installation support as needed",
      "Transport planning guidance",
      "Touch-up guidance",
    ],
    popular: true,
    cta: "Most Popular — Get Quote",
  },
  {
    id: "large",
    name: "Large Installations",
    description: "Statement pieces for resorts, theme parks, and landmarks.",
    priceRange: "₹2,50,000 — ₹10,00,000",
    sizeRange: "8 to 20+ feet",
    features: [
      "Life-sized or larger",
      "Heavy-duty steel framework",
      "Premium materials & finishes",
      "Detailed shaping & painting",
      "Site coordination support",
      "Transport & setup planned separately",
      "Foundation discussion if required",
      "Maintenance guidance",
    ],
    popular: false,
    cta: "Get Quote",
  },
  {
    id: "custom",
    name: "Custom Projects",
    description: "Complete bespoke fabrication from concept to installation.",
    priceRange: "Custom Pricing",
    sizeRange: "Any size",
    features: [
      "Concept sketch or 3D direction",
      "Any material combination",
      "Multiple sculptures",
      "Landscape integration",
      "LED & water features",
      "Vendor coordination support",
      "Installation planning",
      "After-work touch-up discussion",
    ],
    popular: false,
    cta: "Discuss Your Project",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How long does a typical sculpture take to complete?",
    answer: "Timelines depend on size, detailing, material, drying/curing time, painting, transport, and site readiness. Small pieces may move faster, while larger work needs a proper discussion before promising dates.",
  },
  {
    question: "Do you deliver and install across India?",
    answer: "We are Hyderabad based and can discuss transport or installation support for other locations. For bigger work, delivery and site setup are planned case by case with the client.",
  },
  {
    question: "What materials are most weather-resistant?",
    answer: "For outdoor pieces, FRP, cement, steel framework, primers, exterior paints, and coatings can be suggested according to the site. The best material depends on size, exposure, budget, and maintenance expectations.",
  },
  {
    question: "Can you create custom designs from a photo or sketch?",
    answer: "Yes. You can share photos, sketches, AI references, or simple descriptions. We can discuss what is practical, what material suits it, and what level of detail fits your budget.",
  },
  {
    question: "What is the warranty on your sculptures?",
    answer: "Warranty and touch-up support depend on the material, site conditions, and project scope. We prefer to explain care and maintenance clearly before final quotation.",
  },
  {
    question: "Do you work on government and institutional projects?",
    answer: "We can discuss institutional, commercial, and public-facing sculpture requirements. If drawings, measurements, vendor coordination, or documentation are needed, we review the scope before committing.",
  },
];
