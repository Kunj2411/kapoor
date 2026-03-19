"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Minimal inline truck SVG — no external dependency
function TruckIcon() {
  return (
    <svg
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-8"
      aria-hidden="true"
    >
      {/* Trailer */}
      <rect x="0" y="6" width="38" height="18" rx="2" fill="#495D6E" />
      {/* Cab */}
      <path d="M38 10 L38 24 L56 24 L56 16 L50 10 Z" fill="#324556" />
      {/* Windshield */}
      <path d="M40 11.5 L40 16 L50 16 L50 11.5 L46 11.5 Z" fill="#D89042" opacity="0.6" />
      {/* Wheels */}
      <circle cx="10" cy="26" r="4" fill="#212223" />
      <circle cx="10" cy="26" r="2" fill="#7F7E7C" />
      <circle cx="28" cy="26" r="4" fill="#212223" />
      <circle cx="28" cy="26" r="2" fill="#7F7E7C" />
      <circle cx="50" cy="26" r="4" fill="#212223" />
      <circle cx="50" cy="26" r="2" fill="#7F7E7C" />
    </svg>
  );
}

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after page is interactive
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center gap-8"
          aria-label="Loading"
          role="status"
        >
          {/* Road track */}
          <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-cta rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Truck driving across */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute"
            style={{ top: "calc(50% - 20px)" }}
          >
            <TruckIcon />
          </motion.div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.45em] text-cta mb-1">
              Kapoor Transport
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">
              Driving Trust Across India
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
