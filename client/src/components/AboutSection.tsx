/**
 * AboutSection - Studio introduction
 * Design: Noir Atelier - asymmetric layout with image and text
 * Uses studio-interior image with gold accent details
 */
const STUDIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/studio-interior-EVrpvhz7pSL6V4CKhnAkuT.webp";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      {/* Section background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-velvet/30 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Est. 2024
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            About the Studio
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Content Grid - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image - Takes 7 columns */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden">
              <img
                src={STUDIO_IMG}
                alt="Velvet Lens Studio interior - luxurious photography studio with professional lighting"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10 hidden md:block" />
          </div>

          {/* Text Content - Takes 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-[var(--font-body)] text-xl md:text-2xl leading-relaxed text-foreground/90">
              Velvet Lens Studio is Kent's premier destination for adult photography and filmmaking. We provide a
              discreet, professional environment where creativity flourishes and boundaries are respected.
            </p>
            <p className="font-[var(--font-body)] text-lg leading-relaxed text-muted-foreground">
              Founded on the principles of artistry, professionalism, and absolute discretion, our studio
              offers a sanctuary for those seeking to explore and capture their most intimate expressions.
              Every session is tailored to your vision, guided by experienced professionals who understand
              the nuances of adult content creation.
            </p>
            <p className="font-[var(--font-body)] text-lg leading-relaxed text-muted-foreground">
              Our team brings decades of combined experience in photography, cinematography, and creative
              direction. We believe that adult content, when crafted with care and expertise, is a legitimate
              and powerful art form.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-gold">10+</p>
                <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-gold">500+</p>
                <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-gold">100%</p>
                <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mt-1">Discretion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
