"use client";

import { useState, useRef, useEffect } from "react";
import FadeUp from "../animation/FadeUp";
import VideoLightbox, { FilmItem } from "./VideoLightbox";

// Sample / Default Creative Films Data
const sampleFilms: FilmItem[] = [
  {
    id: "featured-1",
    title: "Aura Creative Studio — Brand Anthem",
    category: "Motion Brand Reel",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "film-2",
    title: "GMS Church Youth Visuals 2025",
    category: "Stage & Livestream",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800",
  },
  {
    id: "film-3",
    title: "Cyberpunk Aesthetic Motion Series",
    category: "3D & VFX",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
  },
  {
    id: "film-4",
    title: "Short-Form Social Campaign Reel",
    category: "Commercial Edit",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800",
  },
];

export default function CreativeFilmsSection() {
  const [films] = useState<FilmItem[]>(sampleFilms);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // IntersectionObserver logic for auto pause/play when in/out of viewport
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle potential autoplay restrictions gracefully
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setVideoRef = (id: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el);
    } else {
      videoRefs.current.delete(id);
    }
  };

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setSelectedIndex((prev) => (prev === 0 ? films.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setSelectedIndex((prev) => (prev === films.length - 1 ? 0 : prev + 1));
  };

  const featuredFilm = films[0];
  const gridFilms = films.slice(1);

  return (
    <section id="films" className="relative bg-[#0D0C10] py-32 text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Section Header */}
        <FadeUp>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-500">
            CREATIVE FILMS & MOTION
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl max-w-3xl leading-tight">
            Selected motion graphics, commercial edits, and stage visuals.
          </h2>
        </FadeUp>

        {/* 1. FEATURED VIDEO CARD */}
        {featuredFilm && (
          <FadeUp delay={0.1}>
            <div
              onClick={() => handleOpenLightbox(0)}
              className="group relative mt-12 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:border-pink-500/50"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                <video
                  ref={(el) => setVideoRef(featuredFilm.id, el)}
                  src={featuredFilm.videoUrl}
                  poster={featuredFilm.thumbnailUrl}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                
                {/* Play Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-pink-500/80 text-white backdrop-blur-md shadow-2xl transition duration-300 group-hover:scale-110">
                    <span className="ml-1 text-2xl">▶</span>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                    Featured Work • {featuredFilm.category}
                  </p>
                </div>
              </div>

              {/* Title Info */}
              <div className="flex items-center justify-between p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-pink-400 md:text-3xl">
                    {featuredFilm.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Click to launch high-resolution player & audio controls
                  </p>
                </div>
                <span className="hidden text-sm font-semibold text-pink-400 md:block group-hover:underline">
                  Watch Full Screen →
                </span>
              </div>
            </div>
          </FadeUp>
        )}

        {/* 2. VIDEO CARDS GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {gridFilms.map((film, idx) => {
            const globalIndex = idx + 1;
            return (
              <FadeUp key={film.id} delay={0.1 * globalIndex}>
                <div
                  onClick={() => handleOpenLightbox(globalIndex)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:border-pink-500/40 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <video
                      ref={(el) => setVideoRef(film.id, el)}
                      src={film.videoUrl}
                      poster={film.thumbnailUrl}
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Small Play Badge */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-pink-500/80 text-white backdrop-blur-md shadow-lg">
                        <span className="ml-0.5 text-sm">▶</span>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-pink-400">
                        {film.category}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white transition group-hover:text-pink-400">
                      {film.title}
                    </h4>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Component */}
      <VideoLightbox
        isOpen={lightboxOpen}
        films={films}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </section>
  );
}