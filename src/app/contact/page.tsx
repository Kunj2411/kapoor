import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Kapoor Transport",
  description:
    "Get in touch with Kapoor Transport for logistics consultations, quotes, and inquiries.",
};

const offices = [
  {
    name: "Headquarters – Ahmedabad, Gujarat",
    address: SITE.address,
    phone: SITE.phone,
    phone2: SITE.phone2,
    email: SITE.email,
  },
];

const WA_SERVICES = [
  { label: "Industrial Haulage", msg: "Hello, I need a quote for Industrial Haulage." },
  { label: "ODC / Heavy Cargo", msg: "Hello, I need a quote for ODC / Heavy Cargo movement." },
  { label: "Logistics Solutions", msg: "Hello, I need help with end-to-end Logistics Solutions." },
  { label: "Fleet Services", msg: "Hello, I am interested in dedicated Fleet Services." },
  { label: "General Inquiry", msg: "Hello, I have a general logistics inquiry." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
            Let&apos;s Move Your
            <br />
            <span className="text-cta">Business Forward.</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed">
            Our logistics experts are ready to engineer your supply chain solutions.
          </p>
        </div>
      </section>

      {/* Main form + offices */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-ambient-lg p-8 md:p-12 border border-outline-soft">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-cta font-bold uppercase tracking-widest text-sm mb-3">
                  <span className="w-8 h-[2px] bg-cta" />
                  Inquiry Form
                </div>
                <h2 className="text-3xl font-black text-primary tracking-tight">
                  Request a Consultation
                </h2>
                <p className="text-primary/60 mt-2 text-sm">
                  Our logistics strategist will contact you within 2 business hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Offices */}
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="bg-white p-6 rounded-xl border border-outline-soft shadow-ambient"
                >
                  <h3 className="text-base font-black text-primary mb-4">{office.name}</h3>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-3 text-primary/60">
                      <MapPin className="w-4 h-4 text-cta mt-0.5 shrink-0" />
                      {office.address}
                    </p>
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-3 text-primary/60 hover:text-cta transition-colors"
                    >
                      <Phone className="w-4 h-4 text-cta" /> {office.phone}
                    </a>
                    {office.phone2 && (
                      <a
                        href={`tel:${office.phone2}`}
                        className="flex items-center gap-3 text-primary/60 hover:text-cta transition-colors"
                      >
                        <Phone className="w-4 h-4 text-cta" /> {office.phone2}
                      </a>
                    )}
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-primary/60 hover:text-cta transition-colors"
                    >
                      <Mail className="w-4 h-4 text-cta" /> {office.email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="bg-primary text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-cta" />
                  <h3 className="font-black text-base">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <p>Monday – Saturday: 8:00 AM – 8:00 PM IST</p>
                  <p>Sunday: Emergency operations only</p>
                  <p className="text-cta font-bold mt-3">
                    24/7 Emergency: {SITE.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA section */}
      <section className="py-20 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Instant Response
            </span>
            <h2 className="text-3xl font-black text-dark tracking-tight mb-3">
              Prefer WhatsApp?
            </h2>
            <p className="text-primary/60 max-w-lg mx-auto text-sm leading-relaxed">
              Click any service below to open a pre-filled WhatsApp message. Our team typically
              responds within 15 minutes during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {WA_SERVICES.map((item) => (
              <a
                key={item.label}
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-white border border-[#25D366]/20 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 rounded-xl p-5 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <span className="text-xs font-bold text-dark leading-snug">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I need a logistics quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-cta font-black tracking-widest text-xs uppercase mb-2 block">
              Our Location
            </span>
            <h2 className="text-3xl font-black text-dark tracking-tight">
              Headquarters – Ahmedabad, Gujarat
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-ambient-lg border-8 border-white">
            <iframe
              src="https://maps.app.goo.gl/UaYjzkJg6D5gzWSN8"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kapoor Transport Company Headquarters – Ahmedabad, Gujarat"
            />
          </div>
        </div>
      </section>
    </>
  );
}
