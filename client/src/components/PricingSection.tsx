/**
 * PricingSection - Tiered pricing packages
 * Design: Noir Atelier - elegant cards with gold accent on featured package
 */
import { Check } from "lucide-react";

const packages = [
  {
    name: "Intimate",
    subtitle: "Photography Session",
    price: "£350",
    duration: "2 Hours",
    description: "Perfect for individuals or couples looking for a tasteful, professionally shot session.",
    features: [
      "2-hour studio session",
      "Professional photographer",
      "Up to 2 outfit/look changes",
      "Basic lighting setup",
      "30 edited digital images",
      "Private online gallery",
      "Full image rights included",
    ],
    featured: false,
  },
  {
    name: "Signature",
    subtitle: "Photography & Film Package",
    price: "£750",
    duration: "Half Day (4 Hours)",
    description: "Our most popular package combining photography and short-form video content creation.",
    features: [
      "4-hour studio session",
      "Photographer + videographer",
      "Unlimited outfit changes",
      "Full lighting & set design",
      "60 edited digital images",
      "Up to 10 minutes of edited video",
      "Professional colour grading",
      "Hair & makeup artist available (+£150)",
      "Full content rights included",
    ],
    featured: true,
  },
  {
    name: "Production",
    subtitle: "Full Film Day",
    price: "£1,500",
    duration: "Full Day (8 Hours)",
    description: "Comprehensive filmmaking package for professional-grade adult content and feature production.",
    features: [
      "8-hour full production day",
      "Director + cinematographer + crew",
      "Multiple camera angles (4K cinema)",
      "Full set design & art direction",
      "Professional sound recording",
      "100+ edited photographs",
      "Up to 30 minutes of edited film",
      "Full post-production & colour grade",
      "Music licensing assistance",
      "All content rights included",
    ],
    featured: false,
  },
];

const addOns = [
  { name: "Additional hour", price: "£150/hr" },
  { name: "Hair & makeup artist", price: "£150" },
  { name: "Additional performer", price: "£100" },
  { name: "Rush editing (48hr delivery)", price: "£200" },
  { name: "Printed photo album", price: "£120" },
  { name: "Second camera operator", price: "£250" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-velvet/20 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Investment
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Pricing Packages
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Every package includes full content rights
            and absolute confidentiality as standard.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 md:p-10 border transition-all duration-300 hover:border-gold/40 ${
                pkg.featured
                  ? "border-gold/50 bg-card/60 shadow-[0_0_40px_-10px_oklch(0.75_0.1_75_/_0.15)]"
                  : "border-border bg-card/30"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-[var(--font-nav)] text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 bg-gold text-background">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold mb-1">
                  {pkg.name}
                </h3>
                <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-4">
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-gold">
                    {pkg.price}
                  </span>
                </div>
                <p className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground">
                  {pkg.duration}
                </p>
              </div>

              {/* Description */}
              <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="font-[var(--font-body)] text-base text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 active:scale-[0.97] ${
                  pkg.featured
                    ? "bg-gold text-background hover:bg-gold-light"
                    : "border border-gold/50 text-gold hover:bg-gold hover:text-background"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-center mb-8">
            Add-Ons & Extras
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 border border-border/50 bg-card/20 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="font-[var(--font-body)] text-base text-foreground/80">
                  {addon.name}
                </span>
                <span className="font-[var(--font-nav)] text-sm text-gold font-medium">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 p-6 border border-gold/20 bg-card/30 text-center">
            <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed">
              <span className="text-gold font-semibold">Bespoke quotes available</span> — For larger productions,
              multi-day shoots, or specific requirements not covered above, please get in touch for a tailored quotation.
              A 50% deposit is required to confirm all bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
