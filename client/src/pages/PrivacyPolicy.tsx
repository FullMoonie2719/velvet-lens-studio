/**
 * PrivacyPolicy - Legal privacy policy page
 */
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-24 max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-[var(--font-nav)] text-sm text-muted-foreground hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold mb-4">
          Privacy Policy
        </h1>
        <p className="font-[var(--font-nav)] text-sm text-muted-foreground mb-12">
          Last updated: June 2025
        </p>

        <div className="space-y-8 font-[var(--font-body)] text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              Velvet Lens Studio ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services. We operate in compliance with the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you voluntarily provide through our contact form or booking process.</li>
              <li><strong>Identity Verification:</strong> Government-issued photo ID details as required by law (18 USC § 2257) for all participants in adult content production.</li>
              <li><strong>Usage Data:</strong> Anonymous analytics data including pages visited, time spent, and referral sources.</li>
              <li><strong>Cookies:</strong> Essential and analytical cookies as described in our Cookie Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your enquiries and process bookings</li>
              <li>To provide and improve our services</li>
              <li>To comply with legal obligations (including 2257 record-keeping)</li>
              <li>To communicate with you about your sessions</li>
              <li>To analyse website usage and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. All sensitive data is encrypted both in
              transit and at rest. Physical records are stored in locked, secure facilities.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfil the purposes for which it was
              collected, or as required by law. 2257 records are retained as required by applicable legislation.
              Contact form submissions are retained for 12 months unless a booking is made.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p>
              For any privacy-related enquiries or to exercise your rights, please contact us at:<br />
              Email: bookings@velvetlensstudio.co.uk<br />
              Phone: 07345 537141
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
