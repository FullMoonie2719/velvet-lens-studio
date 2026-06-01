/**
 * Footer - Site footer with branding and legal info
 * Design: Noir Atelier - minimal, elegant footer with gold accents
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold">
              <span className="gold-gradient">Velvet Lens</span>
              <span className="text-foreground/80 font-light italic ml-2">Studio</span>
            </h3>
            <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed max-w-xs">
              Kent's premier adult photography and filmmaking studio. Professional, discreet, and dedicated to your vision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-gold/70">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                About Us
              </a>
              <a href="#services" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Services
              </a>
              <a href="#facilities" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Facilities
              </a>
              <a href="#contact" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Contact & Booking
              </a>
            </nav>
          </div>

          {/* Legal & Info */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-gold/70">
              Information
            </h4>
            <div className="space-y-3">
              <p className="font-[var(--font-body)] text-base text-muted-foreground">
                All performers must be 18+ with valid ID.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground">
                2257 compliant. All content produced legally and ethically.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground">
                Full consent protocols in place for all sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground">
            &copy; {currentYear} Velvet Lens Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>

      {/* Age Verification Notice */}
      <div className="bg-card/50 border-t border-border/30">
        <div className="container py-4 text-center">
          <p className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground">
            This website contains information about adult services. You must be 18 years or older to enquire about our services.
          </p>
        </div>
      </div>
    </footer>
  );
}
