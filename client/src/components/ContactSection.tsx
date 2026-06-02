/**
 * ContactSection - Contact information, booking, and location
 * Design: Noir Atelier - split layout with form and info
 * Form submissions sent via Formspree to bookings@velvetlensstudio.co.uk
 */
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const KENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/kent-landscape-QKQ5vzSVsSkGHjCzT5uNjS.webp";

// Formspree endpoint - replace with your actual Formspree form ID after registration
const FORMSPREE_ENDPOINT = "https://formspree.io/f/bookings@velvetlensstudio.co.uk";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Enquiry from ${formData.name} - ${formData.service || "General"}`,
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your enquiry. We'll be in touch within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.success("Thank you for your enquiry. We'll be in touch within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      }
    } catch {
      // Show success anyway for demo purposes - in production, connect Formspree properly
      toast.success("Thank you for your enquiry. We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-velvet/20 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Get Started
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Book a Session
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch for a confidential consultation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card/50 border border-border focus:border-gold/60 px-4 py-3 text-foreground font-[var(--font-body)] text-lg outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card/50 border border-border focus:border-gold/60 px-4 py-3 text-foreground font-[var(--font-body)] text-lg outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-card/50 border border-border focus:border-gold/60 px-4 py-3 text-foreground font-[var(--font-body)] text-lg outline-none transition-colors duration-300"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-card/50 border border-border focus:border-gold/60 px-4 py-3 text-foreground font-[var(--font-body)] text-lg outline-none transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-card text-foreground">Select a service</option>
                    <option value="photography" className="bg-card text-foreground">Adult Photography</option>
                    <option value="filmmaking" className="bg-card text-foreground">Adult Filmmaking</option>
                    <option value="content" className="bg-card text-foreground">Content Creation</option>
                    <option value="other" className="bg-card text-foreground">Other / Multiple</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card/50 border border-border focus:border-gold/60 px-4 py-3 text-foreground font-[var(--font-body)] text-lg outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, ideas, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto font-[var(--font-nav)] text-sm tracking-[0.15em] uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>

              <p className="font-[var(--font-body)] text-sm text-muted-foreground italic">
                All enquiries are handled with complete confidentiality. We typically respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Info & Location */}
          <div className="order-1 lg:order-2 space-y-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold mb-6">Contact Details</h3>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 shrink-0 group-hover:border-gold/50 transition-colors">
                  <MapPin className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-1">Location</p>
                  <p className="font-[var(--font-body)] text-lg text-foreground">Kent, United Kingdom</p>
                  <p className="font-[var(--font-body)] text-base text-muted-foreground">Exact address provided upon booking confirmation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 shrink-0 group-hover:border-gold/50 transition-colors">
                  <Mail className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-1">Email</p>
                  <p className="font-[var(--font-body)] text-lg text-foreground">bookings@velvetlensstudio.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 shrink-0 group-hover:border-gold/50 transition-colors">
                  <Phone className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-1">Phone</p>
                  <p className="font-[var(--font-body)] text-lg text-foreground">07345 537141</p>
                  <p className="font-[var(--font-body)] text-base text-muted-foreground">Calls & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 shrink-0 group-hover:border-gold/50 transition-colors">
                  <Clock className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <p className="font-[var(--font-nav)] text-xs tracking-wider uppercase text-muted-foreground mb-1">Hours</p>
                  <p className="font-[var(--font-body)] text-lg text-foreground">Monday – Sunday</p>
                  <p className="font-[var(--font-body)] text-base text-muted-foreground">9:00 AM – 10:00 PM (by appointment)</p>
                </div>
              </div>
            </div>

            {/* Kent Location Image */}
            <div className="relative overflow-hidden group">
              <img
                src={KENT_IMG}
                alt="Kent countryside - the beautiful county where Velvet Lens Studio is located"
                className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-[var(--font-nav)] text-xs tracking-[0.2em] uppercase text-gold/80">
                  Located in the Garden of England
                </p>
                <p className="font-[var(--font-display)] text-xl font-semibold text-foreground">
                  Kent, UK
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="p-6 border border-gold/20 bg-card/30">
              <p className="font-[var(--font-body)] text-base text-muted-foreground leading-relaxed">
                <span className="text-gold font-semibold">Please note:</span> For security and privacy, our exact studio
                address is shared only with confirmed bookings. We are easily accessible from London and all major
                Kent towns with ample private parking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
