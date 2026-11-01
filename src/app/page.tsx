import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { TransitionStrip } from "@/components/TransitionStrip";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-softWhite selection:bg-brand-orange selection:text-white">
      {/* 01: Header / Navigation */}
      <Header />

      {/* 02: Hero Section */}
      <HeroSection />

      {/* 03: Portfolio Section */}
      <PortfolioSection />

      {/* 04: Services Section */}
      <ServicesSection />

      {/* 05: Testimonials Section */}
      <TestimonialsSection />

      {/* 06: Pricing Section */}
      <PricingSection />

      {/* 07: Full-Width Closing CTA */}
     

      {/* Distinct Transition Strip */}
      

      {/* 08: Extended Premium Footer (Layers A, B, C, D) */}
      <Footer />
    </main>
  );
}
