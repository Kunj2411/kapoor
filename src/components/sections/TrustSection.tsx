"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Safety-First Protocol",
    desc: "Military-grade maintenance cycles and advanced telematics tracking for every asset in our 500+ active fleet.",
  },
  {
    num: "02",
    title: "Dynamic Scalability",
    desc: "Inherent capacity to handle sudden volume surges for Fortune 500 industrial clients without service degradation.",
  },
  {
    num: "03",
    title: "Route Intelligence",
    desc: "Proprietary route mapping systems that mitigate risk and optimize transit times across 28 states.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative px-6 lg:px-12">
      <div className="absolute top-0 left-0 opacity-5 pointer-events-none select-none">
        <span className="text-[18rem] font-black leading-none">TRUST</span>
      </div>
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-cta/20 rounded-xl blur-2xl group-hover:bg-cta/30 transition-all" />
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div
                className="w-full h-80 bg-cover bg-center grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')",
                }}
                role="img"
                aria-label="Operational excellence"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark to-transparent">
                <div className="text-4xl font-black text-cta mb-1">99.8%</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-white/60">
                  Operational Reliability Score
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-12">
              The Pillars of <br />
              <span className="text-cta">Industrial Authority</span>
            </h2>
            <div className="space-y-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="text-cta font-black text-2xl group-hover:translate-x-2 transition-transform">
                    {p.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{p.title}</h4>
                    <p className="text-white/50 leading-relaxed font-light text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
