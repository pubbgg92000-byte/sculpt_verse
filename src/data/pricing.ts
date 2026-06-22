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
      "Delivery included (local)",
      "1-year warranty",
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
      "Professional installation",
      "Pan-India delivery",
      "2-year warranty",
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
      "Photo-realistic detailing",
      "On-site installation team",
      "Pan-India delivery & setup",
      "Foundation work included",
      "3-year warranty",
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
      "Concept design & 3D preview",
      "Any material combination",
      "Multiple sculptures",
      "Landscape integration",
      "LED & water features",
      "Project management",
      "Dedicated installation team",
      "5-year warranty",
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
    answer: "Depending on size and complexity, most sculptures take 2-6 weeks from design approval to completion. Large installations or multi-piece projects may take 2-3 months. Rush orders can be accommodated for an additional fee.",
  },
  {
    question: "Do you deliver and install across India?",
    answer: "Yes! We deliver and install pan-India. Our professional installation team travels to your site with all necessary equipment. Delivery and installation costs are included for most medium and large projects.",
  },
  {
    question: "What materials are most weather-resistant?",
    answer: "All our sculptures are built to withstand Indian weather conditions including monsoons, extreme heat, and coastal salt air. We use marine-grade coatings, UV-resistant paints, and galvanized steel frameworks. FRP sculptures are inherently weather-resistant.",
  },
  {
    question: "Can you create custom designs from a photo or sketch?",
    answer: "Absolutely! We love bringing unique visions to life. Simply share your reference images, sketches, or descriptions, and our design team will create detailed proposals with 3D previews before any fabrication begins.",
  },
  {
    question: "What is the warranty on your sculptures?",
    answer: "We offer 1-3 year warranties depending on the project tier. Our sculptures are built to last 15-25+ years with minimal maintenance. We also provide maintenance guidelines and offer touch-up services.",
  },
  {
    question: "Do you work on government and institutional projects?",
    answer: "Yes, we regularly work with government bodies, universities, hospitals, and religious institutions. We handle all documentation, provide detailed quotations for tender processes, and can work with architect specifications.",
  },
];
