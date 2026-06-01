/**
 * AgeGate - 18+ age verification modal
 * Design: Noir Atelier - full-screen overlay requiring age confirmation
 * Uses localStorage to remember returning visitors
 */
import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

const STORAGE_KEY = "velvet-lens-age-verified";

export default function AgeGate() {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVerified(true);
  };

  const handleDecline = () => {
    setDeclined(true);
  };

  // Still loading from localStorage
  if (verified === null) return null;

  // Already verified
  if (verified) return null;

  // Declined
  if (declined) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold mb-4 text-foreground">
            Access Denied
          </h2>
          <p className="font-[var(--font-body)] text-lg text-muted-foreground mb-8">
            You must be 18 years or older to access this website. Please close this tab or navigate away.
          </p>
          <a
            href="https://www.google.com"
            className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-8 py-3 border border-border text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Leave Site
          </a>
        </div>
      </div>
    );
  }

  // Show age gate
  return (
    <div className="fixed inset-0 z-[9999] bg-background/98 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold mb-2">
            <span className="gold-gradient">Velvet Lens</span>
            <span className="text-foreground/80 font-light italic ml-2">Studio</span>
          </h1>
          <p className="font-[var(--font-nav)] text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Kent, UK
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mx-auto mb-8" />

        {/* Shield Icon */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gold/30 rounded-full mb-6">
          <ShieldCheck className="w-8 h-8 text-gold" />
        </div>

        {/* Message */}
        <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold mb-4">
          Age Verification Required
        </h2>
        <p className="font-[var(--font-body)] text-lg text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
          This website contains information about adult services and is intended for individuals aged 18 and over only.
          By entering, you confirm that you are at least 18 years of age.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleConfirm}
            className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300 active:scale-[0.97]"
          >
            I Am 18 or Older — Enter
          </button>
          <button
            onClick={handleDecline}
            className="font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-10 py-4 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 active:scale-[0.97]"
          >
            I Am Under 18 — Leave
          </button>
        </div>

        {/* Legal Note */}
        <p className="font-[var(--font-body)] text-sm text-muted-foreground/70 max-w-sm mx-auto">
          By clicking "Enter", you confirm you are of legal age in your jurisdiction to view adult content
          and agree to our terms of service.
        </p>
      </div>
    </div>
  );
}
