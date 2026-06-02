/**
 * CookieConsent - GDPR-compliant cookie consent banner
 * Design: Noir Atelier - subtle bottom banner with gold accent
 */
import { useState, useEffect } from "react";

const COOKIE_KEY = "velvet-lens-cookies-accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      // Small delay so it doesn't appear instantly with the age gate
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "essential-only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[80] bg-card/95 backdrop-blur-md border-t border-border p-4 md:p-6 animate-[fadeIn_0.5s_ease-out_both]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-[var(--font-body)] text-base text-foreground/80">
            We use cookies to enhance your browsing experience and analyse site traffic.
            By clicking "Accept All", you consent to our use of cookies.
            See our{" "}
            <a href="#privacy" className="text-gold hover:text-gold-light underline transition-colors">
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="font-[var(--font-nav)] text-xs tracking-[0.1em] uppercase px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="font-[var(--font-nav)] text-xs tracking-[0.1em] uppercase px-5 py-2.5 bg-gold text-background hover:bg-gold-light transition-all duration-300"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
