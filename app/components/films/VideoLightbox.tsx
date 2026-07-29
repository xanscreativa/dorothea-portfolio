"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FilmItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
}

interface VideoLightboxProps {
  isOpen: boolean;
  films: FilmItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function VideoLightbox({
  isOpen,
  films,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: VideoLightboxProps) {
  const currentFilm = films[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll when open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentFilm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0D0C10] p-4 shadow-2xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Info & Close Button */}
            <div className="flex w-full items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-pink-500 font-semibold">
                  {currentFilm.category}
                </p>
                <h3 className="text-xl font-bold text-white md:text-2xl mt-0.5">
                  {currentFilm.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                key={currentFilm.videoUrl}
                src={currentFilm.videoUrl}
                poster={currentFilm.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            {/* Lightbox Controls */}
            {films.length > 1 && (
              <div className="mt-4 flex w-full items-center justify-between">
                <button
                  onClick={onPrev}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300 transition hover:border-pink-500/50 hover:bg-white/10 hover:text-white"
                >
                  ← Previous
                </button>
                <span className="text-xs text-gray-500 font-mono">
                  {currentIndex + 1} / {films.length}
                </span>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300 transition hover:border-pink-500/50 hover:bg-white/10 hover:text-white"
                >
                  Next →
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}