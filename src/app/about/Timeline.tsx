"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TIMELINE } from "@/data/site";

export default function Timeline() {
  const [active, setActive] = useState(TIMELINE.length - 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Year selector */}
      <div className="lg:col-span-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-outline-soft" />

          <div className="space-y-1">
            {TIMELINE.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setActive(i)}
                className={`relative w-full text-left pl-12 pr-4 py-4 rounded-xl transition-all duration-200 group ${
                  active === i ? "bg-primary" : "hover:bg-surface"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${
                    active === i
                      ? "bg-cta border-cta"
                      : "bg-white border-outline-soft group-hover:border-primary"
                  }`}
                />
                <span
                  className={`text-2xl font-black tracking-tight transition-colors ${
                    active === i ? "text-white" : "text-primary/40 group-hover:text-primary"
                  }`}
                >
                  {item.year}
                </span>
                {active === i && (
                  <p className={`text-xs font-bold mt-0.5 text-white/70 leading-snug`}>
                    {item.title}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:col-span-8">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-10 border border-outline-soft shadow-ambient"
        >
          <div className="text-6xl font-black text-primary/10 mb-2 leading-none">
            {TIMELINE[active].year}
          </div>
          <h3 className="text-2xl font-black text-dark mb-4 -mt-4">
            {TIMELINE[active].title}
          </h3>
          <p className="text-primary/70 leading-relaxed text-base">
            {TIMELINE[active].desc}
          </p>

          {/* Progress indicator */}
          <div className="flex gap-1.5 mt-8">
            {TIMELINE.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "bg-cta w-8" : "bg-outline-soft w-4 hover:bg-primary/20"
                }`}
                aria-label={`Go to ${TIMELINE[i].year}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
