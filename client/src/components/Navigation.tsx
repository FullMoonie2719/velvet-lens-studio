/**
 * Navigation - Fixed top navigation bar
 * Design: Noir Atelier - transparent on scroll top, solid on scroll
 * Typography: Montserrat for nav items, Playfair Display for logo
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#facilities", label: "Facilities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-[var(--font-display)] text-xl md:text-2xl font-semibold tracking-wide text-foreground group-hover:text-gold transition-colors duration-300">
            Velvet Lens
          </span>
          <span className="hidden sm:inline-block w-px h-6 bg-gold/40" />
          <span className="hidden sm:inline-block font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-[var(--font-nav)] text-sm tracking-[0.1em] uppercase px-6 py-2.5 border border-gold/60 text-gold hover:bg-gold hover:text-background transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="font-[var(--font-nav)] text-sm tracking-[0.1em] uppercase px-6 py-2.5 border border-gold/60 text-gold hover:bg-gold hover:text-background transition-all duration-300 text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
