"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES, CASE_STUDY_INDUSTRIES } from "@/data/site";

export default function CaseStudies() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.industry === active);

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {CASE_STUDY_INDUSTRIES.map((ind) => (
          <button
            key={ind}
            onClick={() => setActive(ind)}
            className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-200 ${
              active === ind
                ? "bg-primary text-white shadow-ambient"
                : "bg-white border border-outline-soft text-primary/60 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((cs) => (
            <motion.div
              key={cs.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="group bg-white rounded-2xl overflow-hidden border border-outline-soft hover:border-cta/30 hover:shadow-ambient-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${cs.image}')` }}
                  role="img"
                  aria-label={cs.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white text-[9px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full">
                    {cs.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cta">
                    {cs.client}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-black text-dark mb-3 leading-snug">{cs.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed mb-6">{cs.desc}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-soft pt-6">
                  {cs.stats.map((s) => (
                    <div key={s.label} className="text-center min-w-0">
                      <div className="text-base font-black text-dark leading-none mb-1 truncate">{s.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-neutral leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
