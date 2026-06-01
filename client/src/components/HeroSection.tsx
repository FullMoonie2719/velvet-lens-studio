/**
 * HeroSection - Full-screen cinematic landing
 * Design: Noir Atelier - dramatic parallax hero with velvet texture overlay
 * Uses generated hero-bg image with gold accent typography
 */
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/hero-bg-fzzDJR8aoecELmwCA4fs5o.webp";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden velvet-overlay">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      {/* Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Decorative Line */}
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/60 mb-8 animate-[fadeIn_1s_ease-out_0.3s_both]" />

        {/* Tagline */}
        <p className="font-[var(--font-nav)] text-xs sm:text-sm tracking-[0.4em] uppercase text-gold/80 mb-6 animate-[fadeIn_1s_ease-out_0.5s_both]">
          Premium Adult Photography & Filmmaking
        </p>

        {/* Main Title */}
        <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-[fadeIn_1s_ease-out_0.7s_both]">
          <span className="gold-gradient">Velvet Lens</span>
        </h1>
        <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-light italic text-foreground/90 mb-8 animate-[fadeIn_1s_ease-out_0.9s_both]">
          Studio
        </h2>

        {/* Subtitle */}
        <p className="font-[var(--font-body)] text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed animate-[fadeIn_1s_ease-out_1.1s_both]">
          Where artistry meets intimacy. A bespoke studio experience in the heart of Kent.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-[fadeIn_1s_ease-out_1.3s_both]">
          <a
            href="#services"
            className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300 active:scale-[0.97]"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-10 py-4 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-all duration-300 active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-gold/60 hover:text-gold transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-gold/20 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r border-b border-gold/20 hidden lg:block" />
    </section>
  );
}
