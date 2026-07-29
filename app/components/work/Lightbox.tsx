"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  title,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {currentIndex + 1} / {images.length}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  ← → Navigate &nbsp;&nbsp; • &nbsp;&nbsp; ESC Close
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={(e) => {
  e.stopPropagation();
  onClose();
}}
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={images[currentIndex]}
                alt={`${title}-${currentIndex + 1}`}
                width={1800}
                height={1800}
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="max-h-[82vh] w-auto rounded-3xl object-contain shadow-[0_40px_120px_rgba(0,0,0,.45)]"
              />
            </div>

            {/* Previous */}
            {images.length > 1 && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={(e) => {
  e.stopPropagation();
  onPrev();
}}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={(e) => {
  e.stopPropagation();
  onNext();
}}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronRight size={28} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}