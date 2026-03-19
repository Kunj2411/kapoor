"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServicePage } from "@/data/services";

export default function ServiceFeatures({ service }: { service: ServicePage }) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — checklist */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
              What's Included
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight leading-tight mb-10">
              Everything you need,<br />
              <span className="text-primary">nothing you don't.</span>
            </h2>

            <ul className="space-y-4">
              {service.features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cta" />
                  </div>
                  <span className="text-primary/80 font-medium leading-snug">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — image with overlay card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-ambient-lg">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
                role="img"
                aria-label={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-ambient-lg p-6 border border-outline-soft">
              <div className="text-3xl font-black text-dark">{service.stats[0].value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral mt-1">
                {service.stats[0].label}
              </div>
            </div>

            {/* Accent dot */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cta/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
