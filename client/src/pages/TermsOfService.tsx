/**
 * TermsOfService - Legal terms page
 */
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="font-[var(--font-nav)] text-sm text-muted-foreground mb-12">
          Last updated: June 2025
        </p>

        <div className="space-y-8 font-[var(--font-body)] text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website and/or booking services with Velvet Lens Studio, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">2. Age Requirement</h2>
            <p>
              All clients, participants, and performers must be at least 18 years of age. Valid government-issued
              photo identification is required before any session begins. This requirement is absolute and
              non-negotiable in compliance with UK law and 18 USC § 2257.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">3. Booking & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A 50% non-refundable deposit is required to confirm all bookings.</li>
              <li>The remaining balance is due on the day of the session, prior to commencement.</li>
              <li>Payment methods accepted: bank transfer, cash, or card payment.</li>
              <li>Prices are as quoted at the time of booking and include VAT where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">4. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made more than 48 hours before the session: deposit may be transferred to a new date.</li>
              <li>Cancellations within 48 hours: deposit is forfeited.</li>
              <li>No-shows: full booking fee is forfeited.</li>
              <li>Velvet Lens Studio reserves the right to cancel or reschedule sessions with full refund in exceptional circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">5. Consent & Conduct</h2>
            <p className="mb-4">
              All participants must sign a consent form prior to any session. Consent can be withdrawn at any time
              during a session, at which point all activity will cease immediately.
            </p>
            <p>
              We operate a zero-tolerance policy for any behaviour that is threatening, coercive, or disrespectful.
              Sessions may be terminated immediately without refund if any participant behaves inappropriately.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">6. Content Rights & Usage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unless otherwise agreed in writing, all content rights are transferred to the client upon full payment.</li>
              <li>Velvet Lens Studio retains no copies of client content after delivery unless explicitly agreed.</li>
              <li>We may request permission to use select images (non-explicit) for portfolio purposes — this is always optional.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
            <p>
              All sessions are conducted under strict confidentiality. Staff are bound by NDAs. We will never
              disclose client identities, session details, or content to any third party without explicit written consent.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
            <p>
              Velvet Lens Studio's liability is limited to the value of services paid for. We are not liable for
              any indirect, incidental, or consequential damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
            <p>
              For questions about these terms, please contact us at:<br />
              Email: bookings@velvetlensstudio.co.uk<br />
              Phone: 07345 537141
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
