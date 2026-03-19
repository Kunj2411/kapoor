"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Clock, Award, HeadphonesIcon } from "lucide-react";

const REASONS = [
  {
    icon: Shield,
    title: "Safety-First Protocol",
    desc: "Military-grade maintenance cycles and advanced telematics for every asset in our 500+ fleet.",
    stat: "Zero",
    statLabel: "Major Incidents",
  },
  {
    icon: Zap,
    title: "Dynamic Scalability",
    desc: "Surge capacity for Fortune 500 clients — scale from 10 to 500 vehicles without service degradation.",
    stat: "48hr",
    statLabel: "Scale-Up Time",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    desc: "Proprietary route intelligence across 28 states, optimizing transit times through complex terrains.",
    stat: "28",
    statLabel: "States Covered",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "99.8% on-time delivery record backed by real-time GPS tracking and proactive exception management.",
    stat: "99.8%",
    statLabel: "On-Time Rate",
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Every process audited and certified — from driver training to vehicle maintenance to documentation.",
    stat: "ISO",
    statLabel: "9001:2015",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Command Center",
    desc: "Dedicated operations team monitoring every shipment around the clock with instant escalation protocols.",
    stat: "24/7",
    statLabel: "Live Support",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-dark overflow-hidden relative" id="why-us">
      {/* Background text */}
      <div className="absolute top-0 left-0 opacity-[0.03] select-none pointer-events-none leading-none font-black text-[20rem] text-white">
        TRUST
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — headline */}
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8"
            >
              The Pillars of<br />
              <span className="text-cta">Industrial Authority</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/50 leading-relaxed text-base max-w-md"
            >
              Three decades of building India&apos;s most trusted logistics infrastructure.
              Every metric, every process, every promise — engineered for excellence.
            </motion.p>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="text-6xl font-black text-cta mb-2">99.8%</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-white/40">
                Operational Reliability Score — Industry Leading
              </div>
            </motion.div>
          </div>

          {/* Right — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-cta/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cta/15 flex items-center justify-center shrink-0 group-hover:bg-cta/25 transition-colors">
                    <r.icon className="w-5 h-5 text-cta" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white mb-1.5 uppercase tracking-wide">{r.title}</h4>
                    <p className="text-white/45 text-xs leading-relaxed">{r.desc}</p>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-cta">{r.stat}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{r.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
