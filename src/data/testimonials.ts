export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  projectType: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Owner",
    company: "Palm Beach Resort",
    location: "Pondicherry",
    quote: "The giraffe sculpture added a warm, memorable corner to our property. Guests stop for photos, and the piece gives the garden a clear focal point.",
    projectType: "Resort Installation",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Menon",
    role: "Principal",
    company: "Greenfield International School",
    location: "Bangalore",
    quote: "The animal sculpture idea was shaped carefully for our school space. The children enjoy it, and the discussion around size, safety, and finish was helpful.",
    projectType: "School Playground",
    rating: 5,
  },
  {
    id: "3",
    name: "Arjun Sharma",
    role: "Landscape Architect",
    company: "Terra Design Studios",
    location: "Mumbai",
    quote: "They are open to collaboration and practical adjustments. That matters when a sculpture has to fit a real site, not just look good in a reference image.",
    projectType: "Multiple Projects",
    rating: 5,
  },
  {
    id: "4",
    name: "Meera Patel",
    role: "Owner",
    company: "Heritage Villa Estate",
    location: "Rajasthan",
    quote: "The entrance sculpture gave the property a stronger identity. We appreciated the guidance on material, proportion, and the final painted finish.",
    projectType: "Villa Entrance",
    rating: 5,
  },
  {
    id: "5",
    name: "Suresh Nair",
    role: "General Manager",
    company: "Misty Mountain Resort",
    location: "Munnar",
    quote: "The garden pieces made our pathways feel more designed and inviting. They brought charm without making the space feel overdone.",
    projectType: "Resort Garden",
    rating: 5,
  },
  {
    id: "6",
    name: "Kavitha Sundaram",
    role: "Director",
    company: "FunWorld Theme Park",
    location: "Chennai",
    quote: "We needed playful sculptures with a clear theme. The references were understood well, and the final pieces helped create a stronger visitor experience.",
    projectType: "Theme Park",
    rating: 5,
  },
];
