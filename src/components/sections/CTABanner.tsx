"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { SITE } from "@/data/site";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Your project, engineered for success.",
  subtitle = "Consult with our logistics experts today for a technical feasibility report and a tailored industrial quote.",
}: CTABannerProps) {
  const { openModal } = useModal();

  return (
    <section className="py-28 px-6 lg:px-12 bg-primary relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,144,66,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[900px] mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block"
        >
          Ready to Move?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => openModal()}
            className="group inline-flex items-center justify-center gap-2.5 bg-cta hover:bg-cta-dark text-white font-black uppercase tracking-widest text-[12px] px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(216,144,66,0.4)] hover:shadow-[0_12px_40px_rgba(216,144,66,0.55)] hover:-translate-y-0.5"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hello%2C%20I%20need%20a%20logistics%20quote.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-black uppercase tracking-widest text-[12px] px-10 py-5 rounded-xl hover:bg-[#25D366]/30 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
