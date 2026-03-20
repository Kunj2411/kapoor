"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { num: 500, suffix: "+", label: "Active Fleet Vehicles", desc: "Across all categories" },
  { num: 30,  suffix: "+", label: "Years of Excellence",   desc: "Since 1994" },
  { num: 12,  suffix: "K+", label: "Projects Completed",   desc: "On time, every time" },
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
      className="bg-white rounded-2xl p-8 shadow-ambient-lg border-b-4 border-cta group hover:shadow-[0_20px_50px_-15px_rgba(216,144,66,0.25)] transition-shadow duration-500"
    >
      <div className="text-5xl font-black text-primary mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-[11px] font-black uppercase tracking-[0.25em] text-dark mb-1">{label}</div>
      <div className="text-xs text-neutral">{desc}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-20 pb-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <CounterCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
