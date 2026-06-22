import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingOverview } from "@/components/sections/PricingOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <PortfolioShowcase />
      <ProcessSection />
      <WhyChooseUs />
      <PricingOverview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
