"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FFFDFB]"
        >
          <div className="text-center">
            <div className="inline-block">
              <motion.h1
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
                className="text-2xl sm:text-7xl font-black tracking-[0.25em] text-[#2D2433] pl-[0.25em]"
              >
                XANS
              </motion.h1>

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="mt-4 sm:mt-8 h-[3px] w-full origin-center rounded-full bg-[#E85D8E]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}