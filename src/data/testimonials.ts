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
    quote: "The giraffe sculptures have become the most photographed feature of our resort. Guests are absolutely delighted. The craftsmanship is world-class — you'd think they were real from a distance!",
    projectType: "Resort Installation",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Menon",
    role: "Principal",
    company: "Greenfield International School",
    location: "Bangalore",
    quote: "Our playground transformation was incredible. The children are thrilled with the animal sculptures. SculptVerse understood our vision perfectly and delivered beyond expectations — on time and within budget.",
    projectType: "School Playground",
    rating: 5,
  },
  {
    id: "3",
    name: "Arjun Sharma",
    role: "Landscape Architect",
    company: "Terra Design Studios",
    location: "Mumbai",
    quote: "I've worked with many fabrication studios, but SculptVerse is in a league of their own. The attention to anatomical detail, the material quality, and their installation expertise make them my go-to partner for every project.",
    projectType: "Multiple Projects",
    rating: 5,
  },
  {
    id: "4",
    name: "Meera Patel",
    role: "Owner",
    company: "Heritage Villa Estate",
    location: "Rajasthan",
    quote: "The guardian lion sculptures at our estate entrance are simply magnificent. They've weathered two monsoon seasons without a scratch. Every visitor compliments them — they've become the identity of our property.",
    projectType: "Villa Entrance",
    rating: 5,
  },
  {
    id: "5",
    name: "Suresh Nair",
    role: "General Manager",
    company: "Misty Mountain Resort",
    location: "Munnar",
    quote: "The deer and swan sculptures along our garden pathways have elevated our resort's ambiance to a whole new level. Our TripAdvisor reviews consistently mention them. Best investment we've made.",
    projectType: "Resort Garden",
    rating: 5,
  },
  {
    id: "6",
    name: "Kavitha Sundaram",
    role: "Director",
    company: "FunWorld Theme Park",
    location: "Chennai",
    quote: "From dinosaurs to elephants, SculptVerse created an entire world for our theme park. The quality is exceptional — these sculptures handle thousands of excited children every day and still look brand new.",
    projectType: "Theme Park",
    rating: 5,
  },
];
