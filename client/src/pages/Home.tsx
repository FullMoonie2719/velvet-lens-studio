import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AgeGate />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
