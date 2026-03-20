"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/data/site";

export default function ClientsStrip() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface-low border-y border-outline-soft" id="clients">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-[10px] font-black text-primary/30 uppercase tracking-[0.5em] mb-12"
        >
          Trusted by the Architects of Modern India
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-1.5 bg-white border border-outline-soft rounded-xl px-4 py-6 group hover:border-cta/30 hover:shadow-ambient transition-all"
            >
              <span className="text-base font-black tracking-tight text-primary/30 group-hover:text-primary/70 transition-colors duration-300 text-center leading-tight grayscale group-hover:grayscale-0">
                {client.name}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral/40 group-hover:text-cta transition-colors">
                {client.sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
