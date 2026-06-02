import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AgeGate />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </div>
  );
}
