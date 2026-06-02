/**
 * FAQSection - Frequently Asked Questions
 * Design: Noir Atelier - accordion-style FAQ with gold accents
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my privacy guaranteed?",
    answer: "Absolutely. Discretion is the cornerstone of our business. We operate under strict NDAs, our studio has no external signage, and we offer private parking. Your identity, images, and any content produced are never shared without your explicit written consent. All data is stored securely and encrypted.",
  },
  {
    question: "Do I need modelling experience?",
    answer: "Not at all. The majority of our clients have no prior modelling or on-camera experience. Our team specialises in making you feel comfortable and confident, providing full direction throughout your session. We'll guide you through poses, expressions, and movement.",
  },
  {
    question: "What should I bring to my session?",
    answer: "We recommend bringing a selection of outfits, lingerie, or accessories you'd like to wear. We have a changing room with mirrors and good lighting for preparation. If you've booked hair and makeup, arrive with clean skin and dry hair. We provide refreshments, robes, and everything else you'll need.",
  },
  {
    question: "How do I receive my images/videos?",
    answer: "All deliverables are provided via a secure, password-protected private online gallery or encrypted file transfer. Standard delivery is within 7-10 working days. Rush delivery (48 hours) is available as an add-on. Physical prints and albums can also be arranged.",
  },
  {
    question: "Can I bring a friend or partner for support?",
    answer: "Yes, you're welcome to bring one companion for moral support. They can wait in our comfortable lounge area or be present during the shoot if you prefer. For couples shoots, both participants must provide valid ID and sign consent forms.",
  },
  {
    question: "What are your age verification requirements?",
    answer: "All participants must be 18 years or older and provide valid government-issued photo ID (passport or driving licence) before any session begins. This is a legal requirement and is non-negotiable. ID is checked on arrival and details are recorded for 2257 compliance.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 48 hours' notice for cancellations or rescheduling. Cancellations within 48 hours forfeit the 50% deposit. No-shows forfeit the full booking fee. We understand emergencies happen — please contact us as soon as possible and we'll do our best to accommodate.",
  },
  {
    question: "Do you offer content for specific platforms?",
    answer: "Yes. We produce content optimised for all major platforms including OnlyFans, Fansly, ManyVids, and personal websites. We understand the technical requirements, aspect ratios, and content guidelines for each platform and can advise on content strategy.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Common Questions
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            FAQ
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before booking. Can't find your answer? Get in touch directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 bg-card/20 hover:border-gold/20 transition-colors duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-[var(--font-display)] text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 font-[var(--font-body)] text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
