/**
 * ServicesSection - Adult photography and filmmaking services
 * Design: Noir Atelier - card-based layout with gold accents
 * Uses camera-detail image and velvet texture
 */
import { Camera, Film, Sparkles, Users, Shield, Clock } from "lucide-react";

const CAMERA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/camera-detail-SraswSpccpwUsVJzqoeagv.webp";
const VELVET_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/velvet-texture-hzFkfCayzvPcWzj3hyU63Z.webp";

const services = [
  {
    icon: Camera,
    title: "Adult Photography",
    description:
      "Professional photo shoots ranging from tasteful boudoir and glamour to explicit adult content. We offer individual, couples, and group sessions with full creative direction.",
    features: ["Boudoir & Glamour", "Explicit Content", "Couples Photography", "Portfolio Building"],
  },
  {
    icon: Film,
    title: "Adult Filmmaking",
    description:
      "Full-service adult film production including scripting, directing, cinematography, and post-production. From short-form content to feature-length productions.",
    features: ["Short-Form Content", "Feature Productions", "Solo & Multi-Performer", "Post-Production"],
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description:
      "Tailored content packages for independent creators and platforms. We help you produce high-quality material for OnlyFans, subscription sites, and personal branding.",
    features: ["OnlyFans Content", "Platform-Ready Media", "Brand Development", "Regular Packages"],
  },
];

const values = [
  {
    icon: Shield,
    title: "Absolute Discretion",
    description: "Your privacy is paramount. All sessions are conducted with the utmost confidentiality.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced photographers and filmmakers who specialise in adult content creation.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Sessions available seven days a week, including evenings, to suit your schedule.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${VELVET_BG})` }}
      />
      <div className="absolute inset-0 bg-background/92" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            What We Offer
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Our Services
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate photography to full-scale film production, we deliver exceptional results
            with professionalism and artistry.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-gold/40 p-8 md:p-10 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border border-gold/30 mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-semibold mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-[var(--font-body)] text-lg text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
                    <span className="font-[var(--font-nav)] text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Camera Image Divider */}
        <div className="relative mb-24 overflow-hidden h-[300px] md:h-[400px]">
          <img
            src={CAMERA_IMG}
            alt="Professional cinema camera with anamorphic lens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <blockquote className="text-center max-w-3xl px-4">
              <p className="font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl italic text-foreground/90">
                "Every frame tells a story. Every image captures a moment of authentic expression."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Values / Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gold/20 rounded-full mb-5 group-hover:border-gold/50 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h4 className="font-[var(--font-display)] text-xl font-semibold mb-3">{value.title}</h4>
              <p className="font-[var(--font-body)] text-lg text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
