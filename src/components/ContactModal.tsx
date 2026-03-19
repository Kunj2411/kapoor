"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Phone, Mail, MessageCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";
import { useContactForm, SERVICES_OPTIONS } from "@/hooks/useContactForm";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
      <AlertCircle className="w-3 h-3 shrink-0" /> {msg}
    </p>
  );
}

export default function ContactModal({ open, onClose, defaultService = "" }: ContactModalProps) {
  const { form, fieldErrors, status, serverError, handleChange, handleSubmit, reset } = useContactForm(defaultService);

  // Sync defaultService + reset when modal opens
  useEffect(() => {
    if (open) reset(defaultService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, defaultService]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const field = (err?: string) =>
    cn("w-full border-b-2 bg-transparent py-3 text-white placeholder:text-white/40 focus:outline-none transition-colors text-sm",
      err ? "border-red-400" : "border-white/20 focus:border-cta");
  const label = "block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5";

  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a quote for ${form.service || "logistics services"}.`)}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-dark/80 backdrop-blur-sm"
            onClick={onClose} aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog" aria-modal="true" aria-label="Contact form"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg z-[201] bg-primary-dark overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cta mb-0.5">Quick Inquiry</p>
                <h2 className="text-xl font-black text-white tracking-tight">Get a Free Quote</h2>
              </div>
              <button onClick={onClose}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-8 py-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-5 py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-cta/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-cta" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Inquiry Received!</h3>
                  <p className="text-white/60 leading-relaxed max-w-xs">
                    Our logistics strategist will contact you within 2 business hours.
                  </p>
                  <a
                    href={waLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-black uppercase tracking-widest text-[11px] px-6 py-3 rounded-xl hover:bg-[#25D366]/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => reset(defaultService)}
                    className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    Submit Another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label className={label}>Full Name *</label>
                    <input name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name" className={field(fieldErrors.name)} aria-invalid={!!fieldErrors.name} />
                    <FieldError msg={fieldErrors.name} />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className={label}>Phone *</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX" className={field(fieldErrors.phone)} aria-invalid={!!fieldErrors.phone} />
                      <FieldError msg={fieldErrors.phone} />
                    </div>
                    <div>
                      <label className={label}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="you@company.com" className={field(fieldErrors.email)} aria-invalid={!!fieldErrors.email} />
                      <FieldError msg={fieldErrors.email} />
                    </div>
                  </div>
                  <div>
                    <label className={label}>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className={cn(field(fieldErrors.service), "appearance-none cursor-pointer")} aria-invalid={!!fieldErrors.service}>
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <FieldError msg={fieldErrors.service} />
                  </div>
                  <div>
                    <label className={label}>Project Details</label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                      placeholder="Describe your requirements..." className={cn(field(), "resize-none")} />
                  </div>

                  {serverError && (
                    <p className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {serverError}
                    </p>
                  )}

                  <button
                    type="submit" disabled={status === "loading"}
                    className="w-full bg-cta hover:bg-cta-dark text-white font-black uppercase tracking-widest text-[12px] py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_8px_30px_rgba(216,144,66,0.3)]"
                  >
                    {status === "loading" ? "Sending..." : "Submit Inquiry"}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* WhatsApp alternative */}
                  <a
                    href={waLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-[#25D366] font-bold text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity pt-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Or chat on WhatsApp instead
                  </a>
                </form>
              )}

              {/* Quick contact strip */}
              <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Or reach us directly</p>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-cta shrink-0" /> {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 text-cta shrink-0" /> {SITE.email}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
