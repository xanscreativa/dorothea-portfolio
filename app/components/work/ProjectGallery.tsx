"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeUp from "../animation/FadeUp";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
  caption?: string;
  aspectRatio?: "landscape" | "portrait" | "wide" | "square";
}

interface ProjectGalleryProps {
  items: GalleryItem[];
}

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard Navigation untuk Lightbox Galeri
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + items.length) % items.length : null
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, items.length]);

  // Fungsi penentu class CSS layout berdasarkan indeks (Dynamic Rhythm)
  const getLayoutClass = (index: number, ratio?: string) => {
    if (ratio === "wide") return "col-span-12 aspect-[21/9]";
    if (ratio === "portrait") return "col-span-12 md:col-span-6 aspect-[4/5]";
    if (ratio === "landscape") return "col-span-12 md:col-span-6 aspect-[16/10]";

    // Default Pattern berdasarkan urutan indeks
    const pattern = index % 5;
    switch (pattern) {
      case 0:
        return "col-span-12 aspect-[16/9]"; // 1 Gambar Besar
      case 1:
      case 2:
        return "col-span-12 md:col-span-6 aspect-[4/3]"; // 2 Gambar Sejajar
      case 3:
        return "col-span-12 aspect-[21/9]"; // 1 Landscape Wide
      case 4:
        return "col-span-12 md:col-span-6 aspect-[4/5]"; // Portrait
      default:
        return "col-span-12 md:col-span-6 aspect-[16/9]";
    }
  };

  return (
    <section className="mt-20 border-b border-white/10 pb-20">
      <FadeUp>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-500 font-bold">
            Visual Showcase
          </p>
          <h3 className="mt-2 text-3xl font-black text-white">Project Gallery</h3>
        </div>
      </FadeUp>

      {/* Dynamic Asymmetric Grid */}
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <FadeUp key={idx} delay={(idx % 3) * 0.1}>
            <div
              onClick={() => setSelectedIndex(idx)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 cursor-pointer ${getLayoutClass(
                idx,
                item.aspectRatio
              )}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={item.caption || `Gallery item ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Hover Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6 md:p-8">
                {item.caption && (
                  <p className="text-sm font-medium text-white tracking-wide">
                    {item.caption}
                  </p>
                )}
                <span className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  🔍
                </span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Fullscreen Image/Video Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedIndex(null)}
          />

          <div className="relative z-10 flex max-h-[95vh] w-full max-w-6xl flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              ✕
            </button>

            {/* Media Content */}
            <div className="relative h-[75vh] w-full overflow-hidden rounded-2xl">
              {items[selectedIndex].type === "image" ? (
                <Image
                  src={items[selectedIndex].url}
                  alt={items[selectedIndex].caption || "Enlarged preview"}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                />
              ) : (
                <video
                  src={items[selectedIndex].url}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              )}
            </div>

            {/* Caption & Navigation */}
            <div className="mt-4 flex w-full items-center justify-between px-4 text-white">
              <p className="text-sm font-medium text-gray-300">
                {items[selectedIndex].caption}
              </p>
              <p className="text-xs text-gray-500 font-mono">
                {selectedIndex + 1} / {items.length}
              </p>
            </div>

            {/* Prev/Next Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev - 1 + items.length) % items.length : null
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white backdrop-blur-md hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev + 1) % items.length : null
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white backdrop-blur-md hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}