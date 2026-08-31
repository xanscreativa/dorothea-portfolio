"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Jika halaman sudah selesai dimuat
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Tunggu sampai halaman benar-benar selesai loading
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFDFC]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
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
              duration: 0.5,
              ease: "easeOut",
            }}
            className="px-4 text-center"
          >
            {/* Logo */}
            <h1 className="text-3xl font-black tracking-[0.2em] text-[#2D2433] sm:text-6xl sm:tracking-[0.3em]">
              XANS
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:mt-3 sm:text-sm sm:tracking-[0.45em]">
              Creative Studio
            </p>

            {/* Loading indicator */}
            <motion.div
              className="mx-auto mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-pink-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full w-1/2 bg-pink-500"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}