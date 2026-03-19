"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FLEET_EXTENDED, FLEET_CATEGORIES } from "@/data/site";

export default function FleetGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? FLEET_EXTENDED
      : FLEET_EXTENDED.filter((v) => v.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-12">
        {FLEET_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-200 ${
              active === cat
                ? "bg-primary text-white shadow-ambient"
                : "bg-white border border-outline-soft text-primary/60 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden border border-outline-soft hover:border-cta/30 hover:shadow-ambient-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                  role="img"
                  aria-label={vehicle.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary/90 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {vehicle.badge}
                </span>
                <span className="absolute bottom-4 right-4 bg-cta text-white text-[10px] font-black px-3 py-1 rounded-full">
                  {(vehicle.specs as unknown as Record<string, string | undefined>)["Count"] ?? Object.values(vehicle.specs).find(Boolean)}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="text-[9px] font-black uppercase tracking-widest text-cta mb-1">
                  {vehicle.category}
                </div>
                <h3 className="text-lg font-black text-dark mb-2">{vehicle.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed mb-5">{vehicle.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 border-t border-outline-soft pt-5 mb-5">
                  {Object.entries(vehicle.specs)
                    .filter(([k]) => k !== "Count")
                    .map(([key, val]) => (
                      <div key={key}>
                        <span className="text-[9px] font-black uppercase tracking-widest text-neutral block mb-0.5">
                          {key}
                        </span>
                        <span className="text-sm font-bold text-dark">{val}</span>
                      </div>
                    ))}
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-primary/70">
                      <CheckCircle className="w-3.5 h-3.5 text-cta shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
