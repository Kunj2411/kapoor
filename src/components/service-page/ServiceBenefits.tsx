"use client";

import { motion } from "framer-motion";
import type { ServicePage } from "@/data/services";

export default function ServiceBenefits({ service }: { service: ServicePage }) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,144,66,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Why It Matters
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            The Kapoor Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cta/30 transition-colors group"
            >
              <div className="flex items-start gap-6">
                {/* Stat callout */}
                {b.stat && (
                  <div className="shrink-0 text-center">
                    <div className="text-3xl font-black text-cta leading-none">{b.stat}</div>
                    {b.statLabel && (
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">
                        {b.statLabel}
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-black text-white mb-2">{b.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
