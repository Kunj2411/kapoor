"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import { SITE } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { num: 500, suffix: "+",  label: "Active Fleet Vehicles", desc: "Across all categories" },
  { num: 30,  suffix: "+",  label: "Years of Excellence",   desc: "Since 1994" },
  { num: 12,  suffix: "K+", label: "Projects Completed",    desc: "On time, every time" },
  { num: 28,  suffix: "",   label: "States Covered",        desc: "Pan-India network" },
];

function CounterCard({
  num, suffix, label, desc, delay,
}: { num: number; suffix: string; label: string; desc: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 2200, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="bg-white rounded-2xl p-8 shadow-ambient-lg border-b-4 border-cta hover:shadow-[0_20px_50px_-15px_rgba(216,144,66,0.25)] transition-shadow duration-500"
    >
      <div className="text-5xl font-black text-primary mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-[11px] font-black uppercase tracking-[0.25em] text-dark mb-1">{label}</div>
      <div className="text-xs text-neutral">{desc}</div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-dark pb-0">
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-16">
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
            Driving Trust
            <br />
            <span className="text-cta">Across India.</span>
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
            className="flex flex-col sm:flex-row gap-4 relative z-10"
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

      {/* Stats — sits at the bottom of the hero, overlapping the next section */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 w-full -mb-20 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <CounterCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Spacer so the hero is tall enough to show the overlapping cards */}
      <div className="h-24" />
    </section>
  );
}
