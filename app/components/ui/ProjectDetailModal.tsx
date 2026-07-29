"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Film } from "@/app/data/film";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Film | null;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto pause video saat modal ditutup
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  // Nonaktifkan scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const isPortrait = project.orientation === "portrait";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 lg:px-20">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Container Modal Pop-up */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-full min-w-0 overflow-x-hidden overflow-y-auto rounded-[24px] border border-pink-100/40 bg-white p-4 shadow-2xl sm:rounded-[32px] sm:p-8 lg:max-w-4xl lg:p-12 lg:overflow-visible">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="fixed right-4 top-4 z-20 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-pink-50 font-bold text-[#2D2433] transition-all hover:bg-pink-500 hover:text-white lg:absolute lg:right-6 lg:top-6 lg:h-10 lg:w-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid min-w-0 gap-4 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* SISI KIRI / ATAS: Video / Media Preview (Grid span dikembalikan untuk desktop) */}
          <div
            className={`mb-3 flex min-w-0 items-center justify-center overflow-hidden rounded-2xl bg-black shadow-md lg:mb-0 lg:rounded-3xl ${
              isPortrait
                ? "mx-auto aspect-[9/16] w-full max-w-[240px] sm:max-w-[280px] lg:col-span-5 lg:max-w-none lg:w-full"
                : "mx-auto aspect-video w-full max-w-full lg:col-span-12"
            }`}
          >
            {project.preview ? (
              <video
                ref={videoRef}
                src={project.preview}
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* SISI KANAN / BAWAH: Detail Informasi Project */}
          <div
            className={`flex min-w-0 flex-col ${
              isPortrait ? "lg:col-span-7" : "mt-2 lg:col-span-12"
            }`}
          >
            {/* Kategori */}
            <span className="block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500 sm:tracking-[0.3em] lg:tracking-[0.45em]">
              {project.category}
            </span>
            {/* Judul Utama */}
            <h2 className="mt-1 text-center break-words text-2xl font-black leading-[1.1] text-[#2D2433] sm:text-3xl lg:text-5xl lg:leading-[1.05]">
              {project.title}
            </h2>

            {/* Info Metadata (Client & Role) */}
            <div className="mt-4 flex w-full min-w-0 flex-col gap-3 rounded-2xl border border-pink-100/80 bg-pink-50/50 p-3 sm:mt-5 lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:p-4">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 lg:text-[10px] lg:tracking-[0.25em]">
                  Client
                </p>
                <p className="break-words text-xs font-bold text-[#2D2433] lg:text-sm">
                  {project.client || "Personal Project"}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 lg:text-[10px] lg:tracking-[0.25em]">
                  Role
                </p>
                <p className="break-words text-xs font-bold text-[#2D2433] lg:text-sm">
                  {project.role || "Video Editor"}
                </p>
              </div>
            </div>

            {/* Deskripsi utama */}
            <p className="mt-4 max-w-prose break-words text-xs leading-relaxed text-[#6B6570] text-justify lg:mt-5 lg:text-sm lg:leading-relaxed">
              {project.description}
            </p>

            {/* Badges / Tags */}
            <div className="mt-4 flex min-w-0 flex-wrap justify-center gap-2 lg:mt-5 lg:gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="max-w-full rounded-full bg-pink-100/60 px-3 py-1 text-[10px] font-semibold text-pink-700 lg:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* PROSES EDITING & PRODUKSI */}
            {project.process && (
              <div className="mt-5 w-full min-w-0 border-t border-gray-100 pt-4 lg:mt-6 lg:pt-5">
                <h4 className="mb-3 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2D2433] lg:mb-4 lg:text-[11px] lg:tracking-[0.3em]">
                  Creative &amp; Production Process
                </h4>

                <div className="w-full min-w-0 space-y-2.5 text-xs lg:space-y-3">
                  {project.process.preProduction && (
                    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-3.5 lg:p-4">
                      <span className="mb-1 block text-xs font-bold tracking-wider text-pink-500 lg:text-sm">
                        🎬 1. Pre-Production
                      </span>
                      <p className="max-w-full overflow-hidden break-words text-xs leading-relaxed text-[#6B6570] text-justify lg:text-sm">
                        {project.process.preProduction}
                      </p>
                    </div>
                  )}

                  {project.process.production && (
                    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-3.5 lg:p-4">
                      <span className="mb-1 block text-xs font-bold tracking-wider text-pink-500 lg:text-sm">
                        📹 2. Production
                      </span>
                      <p className="max-w-full overflow-hidden break-words text-xs leading-relaxed text-[#6B6570] text-justify lg:text-sm">
                        {project.process.production}
                      </p>
                    </div>
                  )}

                  {project.process.postProduction && (
                    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-3.5 lg:p-4">
                      <span className="mb-1 block text-xs font-bold tracking-wider text-pink-500 lg:text-sm">
                        ✂️ 3. Post-Production
                      </span>
                      <p className="max-w-full overflow-hidden break-words text-xs leading-relaxed text-[#6B6570] text-justify lg:text-sm">
                        {project.process.postProduction}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}