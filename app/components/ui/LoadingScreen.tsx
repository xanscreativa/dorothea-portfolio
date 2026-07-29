"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFDFC]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="px-4 text-center"
          >
            {/* Teks Logo: text-3xl di mobile, text-6xl di desktop */}
            <h1 className="text-3xl font-black tracking-[0.2em] text-[#2D2433] sm:text-6xl sm:tracking-[0.3em]">
              XANS
            </h1>

            {/* Subtitle: text-[10px] di mobile, text-sm di desktop */}
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:mt-3 sm:text-sm sm:tracking-[0.45em]">
              Creative Studio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}