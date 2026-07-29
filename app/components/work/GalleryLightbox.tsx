"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryLightboxProps {
  isOpen: boolean;
  images: { url: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0D0C10] p-4 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header & Close Button */}
            <div className="flex w-full items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-gray-400">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Image Container */}
            <div className="relative my-auto aspect-[16/10] max-h-[70vh] w-full overflow-hidden rounded-2xl bg-black/40">
              <Image
                src={currentImage.url}
                alt={currentImage.caption || "Gallery Preview"}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Navigation Controls */}
            <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 md:flex-row">
              <p className="text-xs text-gray-400 font-medium">
                {currentImage.caption || "Project Visual"}
              </p>

              {images.length > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={onPrev}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-gray-300 transition hover:border-pink-500/50 hover:bg-white/10 hover:text-white"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={onNext}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-gray-300 transition hover:border-pink-500/50 hover:bg-white/10 hover:text-white"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}