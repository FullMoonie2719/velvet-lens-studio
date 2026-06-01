/**
 * FacilitiesSection - Studio facilities and amenities
 * Design: Noir Atelier - feature grid with elegant presentation
 */
import { Aperture, Lightbulb, Sofa, Lock, Wifi, Car } from "lucide-react";

const STUDIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/studio-interior-HQPRempEGmmFYAMQ9qujBA.png";

const facilities = [
  {
    icon: Aperture,
    title: "Professional Equipment",
    description: "State-of-the-art cameras, lenses, and cinema-grade recording equipment available for every session.",
  },
  {
    icon: Lightbulb,
    title: "Studio Lighting",
    description: "Full professional lighting rigs including softboxes, ring lights, LED panels, and atmospheric effects.",
  },
  {
    icon: Sofa,
    title: "Multiple Sets",
    description: "Versatile shooting environments including bedroom sets, lounge areas, shower facilities, and customisable backdrops.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Completely private premises with secure access. No walk-ins, appointment only. Your comfort and safety are guaranteed.",
  },
  {
    icon: Wifi,
    title: "Editing Suite",
    description: "On-site post-production facilities for immediate review, colour grading, and professional editing.",
  },
  {
    icon: Car,
    title: "Discreet Parking",
    description: "Private, off-street parking with no visible studio signage. Arrive and depart with complete anonymity.",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-28 md:py-36">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Our Space
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Studio Facilities
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A purpose-built space designed for comfort, creativity, and absolute privacy.
          </p>
        </div>

        {/* Full-width Studio Image */}
        <div className="relative mb-20 overflow-hidden group">
          <img
            src={STUDIO_IMG}
            alt="Velvet Lens Studio - professional photography studio with luxury furnishings"
            className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Overlay Text */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-gold/80 mb-2">
              2,500 sq ft
            </p>
            <p className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-foreground">
              Purpose-Built for Perfection
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="group flex gap-5 p-6 border border-border/50 hover:border-gold/30 bg-card/30 backdrop-blur-sm transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                  <facility.icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h4 className="font-[var(--font-display)] text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {facility.title}
                </h4>
                <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
