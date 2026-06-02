/**
 * Footer - Site footer with branding, social links, and legal info
 * Design: Noir Atelier - minimal, elegant footer with gold accents
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold">
              <span className="gold-gradient">Velvet Lens</span>
              <span className="text-foreground/80 font-light italic ml-2">Studio</span>
            </h3>
            <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed">
              Kent's premier adult photography and filmmaking studio. Professional, discreet, and dedicated to your vision.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://twitter.com/velvetlensstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-gold/50 hover:text-gold text-muted-foreground transition-all duration-300"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/velvetlensstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-gold/50 hover:text-gold text-muted-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://onlyfans.com/velvetlensstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-gold/50 hover:text-gold text-muted-foreground transition-all duration-300"
                aria-label="OnlyFans"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zm0-10.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              </a>
            </div>
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
              <a href="#gallery" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Portfolio
              </a>
              <a href="#pricing" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Pricing
              </a>
              <a href="#facilities" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Facilities
              </a>
              <a href="#contact" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Contact & Booking
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-gold/70">
              Support
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#faq" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                FAQ
              </a>
              <a href="#testimonials" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Testimonials
              </a>
              <a href="/privacy" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="font-[var(--font-body)] text-base text-muted-foreground hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Legal & Info */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-gold/70">
              Compliance
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
              <p className="font-[var(--font-body)] text-base text-muted-foreground">
                ICO registered. UK GDPR compliant.
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
            <a href="/privacy" className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="font-[var(--font-nav)] text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </a>
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
