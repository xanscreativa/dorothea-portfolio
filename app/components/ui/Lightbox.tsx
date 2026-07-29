"use client";

import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  project: {
    title: string;
    description?: string;
    preview?: string;
    thumbnail: string;
    tags?: string[];
  } | null;
}

export default function Lightbox({
  isOpen,
  onClose,
  onNext,
  onPrev,
  project,
}: LightboxProps) {
  // Handle shortcut Keyboard (ESC, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll saat lightbox terbuka
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
      {/* Backdrop Klik untuk Close */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Main Lightbox Card */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#18151C] border border-white/10 shadow-2xl">
        
        {/* Top Control Bar - Hierarki disamakan dengan Hero */}
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
          <div>
            {project.tags && (
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 sm:tracking-[0.45em] mb-1">
                {project.tags[0]}
              </p>
            )}
            <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Media Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] md:min-h-[500px]">
          {project.preview ? (
            <video
              src={project.preview}
              autoPlay
              controls
              className="max-h-[70vh] w-full object-contain"
            />
          ) : (
            <div className="relative h-[60vh] w-full">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous Project"
          >
            ←
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next Project"
          >
            →
          </button>
        </div>

        {/* Bottom Info */}
        {project.description && (
          <div className="border-t border-white/10 p-6 bg-[#18151C]">
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}