/**
 * TestimonialsSection - Client reviews/testimonials
 * Design: Noir Atelier - elegant quote cards with gold accents
 */
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "From the moment I walked in, I felt completely at ease. The team were incredibly professional, respectful, and made me feel like a star. The final images exceeded every expectation.",
    name: "Sophie M.",
    service: "Boudoir Photography",
    stars: 5,
  },
  {
    quote: "We'd been nervous about our first professional shoot together, but the Velvet Lens team made it an unforgettable experience. The quality of the video content was absolutely cinema-grade.",
    name: "James & Laura",
    service: "Couples Content Creation",
    stars: 5,
  },
  {
    quote: "As a content creator, I need consistent, high-quality output. Velvet Lens delivers every single time. The studio is gorgeous, the equipment is top-tier, and the team genuinely care about the final product.",
    name: "Amber K.",
    service: "OnlyFans Content Package",
    stars: 5,
  },
  {
    quote: "The discretion and professionalism here is unmatched. Private parking, no signage, NDA as standard — they understand exactly what their clients need. Plus the results are stunning.",
    name: "Daniel R.",
    service: "Adult Film Production",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-velvet/20 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Client Experiences
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Testimonials
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced the Velvet Lens difference. All testimonials shared with permission.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 border border-border/50 bg-card/30 hover:border-gold/30 transition-all duration-300 relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 font-[var(--font-display)] text-6xl text-gold/10 leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-[var(--font-body)] text-lg leading-relaxed text-foreground/85 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-[var(--font-nav)] text-xs text-gold font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-nav)] text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-[var(--font-nav)] text-xs text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
