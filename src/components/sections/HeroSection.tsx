"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import { SITE } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2070&q=80')",
          }}
          role="img"
          aria-label="Industrial logistics fleet on highway"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-cta" />
            <span className="text-cta text-sm font-extrabold tracking-[0.4em] uppercase">
              The Steel Architect of India&apos;s Supply Chain
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            {SITE.tagline.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-cta">
              {SITE.tagline.split(" ").slice(2).join(" ")} India.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl"
          >
            Redefining industrial logistics with a legacy of {new Date().getFullYear() - parseInt(SITE.founded)}+ years.
            From heavy-duty haulage to tech-enabled warehousing, we architect
            movement for India&apos;s giants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton href="/services" size="lg">
              Explore Services <ArrowRight className="w-4 h-4" />
            </CTAButton>
            <CTAButton href="/contact" variant="ghost" size="lg">
              Schedule Consultation
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* ISO badge */}
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6">
        <div className="text-right">
          <div className="text-white font-black text-2xl">ISO 9001:2015</div>
          <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
            Quality Certified Operations
          </div>
        </div>
      </div>
    </section>
  );
}
