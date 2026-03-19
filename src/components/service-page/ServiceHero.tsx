"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import type { ServicePage } from "@/data/services";
import { SITE } from "@/data/site";

export default function ServiceHero({ service }: { service: ServicePage }) {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-dark pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
          role="img"
          aria-label={service.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-10"
        >
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-cta">{service.title}</span>
        </motion.nav>

        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-cta" />
            <span className="text-cta text-[10px] font-black tracking-[0.45em] uppercase">
              {service.heroTag}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-black text-white leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            {service.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl"
          >
            {service.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => openModal(service.title)}
              className="group inline-flex items-center gap-2.5 bg-cta hover:bg-cta-dark text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(216,144,66,0.35)] hover:-translate-y-0.5"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hello%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.title)}.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl hover:bg-[#25D366]/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mt-16"
        >
          {service.stats.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur-sm px-8 py-6">
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
