"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, AlertCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { useContactForm, SERVICES_OPTIONS } from "@/hooks/useContactForm";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
      <AlertCircle className="w-3 h-3 shrink-0" /> {msg}
    </p>
  );
}

export default function ContactSection() {
  const { form, fieldErrors, status, serverError, handleChange, handleSubmit, reset } =
    useContactForm();

  const inputCls = (err?: string) =>
    `w-full border-b-2 ${err ? "border-red-400" : "border-gray-200"} bg-transparent py-3 text-dark placeholder:text-neutral/50 focus:outline-none focus:border-cta transition-colors text-sm`;

  const labelCls = "block text-[10px] font-black uppercase tracking-widest text-primary/50 mb-1.5";
  const waLink = `https://wa.me/${SITE.whatsapp}?text=Hello%2C%20I%20need%20a%20logistics%20quote.`;

  return (
    <section className="py-28 px-6 lg:px-12 bg-white" id="contact-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">Get In Touch</span>
              <h2 className="text-4xl font-black text-dark tracking-tight leading-tight">
                Let&apos;s Move Your<br /><span className="text-cta">Business Forward.</span>
              </h2>
              <p className="text-primary/60 mt-4 text-sm leading-relaxed">Our logistics strategist will contact you within 2 business hours.</p>
            </div>
            <div className="space-y-4">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-cta/15 transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-cta transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral">Phone</p>
                  <p className="text-sm font-bold text-dark">{SITE.phone}</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-cta/15 transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-cta transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral">Email</p>
                  <p className="text-sm font-bold text-dark">{SITE.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral">HQ</p>
                  <p className="text-sm font-bold text-dark leading-relaxed">{SITE.address}</p>
                </div>
              </div>
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-black uppercase tracking-widest text-[11px] px-6 py-4 rounded-xl hover:bg-[#25D366]/20 transition-all w-full justify-center">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 bg-surface rounded-2xl p-10 border border-outline-soft"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-5 py-16">
                <div className="w-20 h-20 rounded-full bg-cta/15 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-cta" />
                </div>
                <h3 className="text-2xl font-black text-dark">Inquiry Received!</h3>
                <p className="text-primary/60">We&apos;ll be in touch within 2 business hours.</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-black uppercase tracking-widest text-[11px] px-6 py-3 rounded-xl hover:bg-[#25D366]/20 transition-all">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <button onClick={() => reset()} className="text-[11px] font-bold uppercase tracking-widest text-cta hover:text-primary transition-colors">Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls(fieldErrors.name)} aria-invalid={!!fieldErrors.name} />
                    <FieldError msg={fieldErrors.name} />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="business@company.com" className={inputCls(fieldErrors.email)} aria-invalid={!!fieldErrors.email} />
                    <FieldError msg={fieldErrors.email} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls(fieldErrors.phone)} aria-invalid={!!fieldErrors.phone} />
                    <FieldError msg={fieldErrors.phone} />
                  </div>
                  <div>
                    <label className={labelCls}>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputCls(fieldErrors.service) + " appearance-none cursor-pointer"} aria-invalid={!!fieldErrors.service}>
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <FieldError msg={fieldErrors.service} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Project Details</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Describe your logistics requirements..." className={inputCls() + " resize-none"} />
                </div>
                {serverError && (
                  <p className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" /> {serverError}
                  </p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="group inline-flex items-center gap-2.5 bg-cta hover:bg-cta-dark text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(216,144,66,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}