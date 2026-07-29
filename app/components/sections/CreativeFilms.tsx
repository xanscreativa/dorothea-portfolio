"use client";

import { useState } from "react";
import FadeUp from "../animation/FadeUp";
import VideoCard from "../work/VideoCard";
import ProjectDetailModal from "../ui/ProjectDetailModal";
import { films, Film } from "@/app/data/film";

function VideoCardWrapper({
  project,
  onOpenModal,
  className = "",
  index = 0,
}: {
  project: Film;
  onOpenModal: () => void;
  className?: string;
  index?: number;
}) {
  return (
    <FadeUp delay={index * 0.08} className="h-full">
      <div
        onClick={onOpenModal}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenModal();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title || "project"}`}
        className={`group relative flex flex-col h-full cursor-pointer outline-none transition-all duration-500 ease-out hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFFDFC] rounded-3xl ${className}`}
      >
        <VideoCard project={project} />
      </div>
    </FadeUp>
  );
}

export default function CreativeFilms() {
  const [selectedProject, setSelectedProject] = useState<Film | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Film) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-16 sm:py-24 lg:py-32 selection:bg-pink-500 selection:text-white">
      {/* LUXURY AMBIENT BACKGROUND GLOWS & ACCENTS */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-300/30 to-rose-200/20 blur-[140px] sm:h-[480px] sm:w-[480px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-gradient-to-bl from-pink-200/25 via-rose-100/30 to-transparent blur-[160px] sm:h-[550px] sm:w-[550px]" />
      
      {/* Subtle Micro-Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay -z-10"
        style={{
          backgroundImage: `radial-gradient(#2D2433 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto w-[90%] max-w-7xl sm:w-[92%]">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/90 px-4 py-1.5 border border-pink-200/70 shadow-[0_4px_20px_rgba(244,114,182,0.08)] backdrop-blur-md mb-4 sm:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                CURATED SHOWREEL
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
              Every frame is crafted <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                to tell a story.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#6B6570] font-normal">
              A masterclass collection of advanced video editing, motion systems, AI-augmented visuals, and high-impact cinematic storytelling.
            </p>
          </div>
        </FadeUp>

        {/* SELECTED VIDEO WORKS GRID SECTION */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Subheader with Premium Counter Badge */}
          <div className="mb-6 sm:mb-10 flex items-center justify-between border-b border-pink-100/80 pb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-2xl font-black tracking-tight text-[#2D2433]">
                Selected Video Works
              </h3>
              {films && films.length > 0 && (
                <span className="rounded-full bg-gradient-to-r from-pink-50 to-rose-50 px-3 py-1 text-xs font-mono font-extrabold text-pink-600 border border-pink-200/60 shadow-xs">
                  {films.length < 10 ? `0${films.length}` : films.length}
                </span>
              )}
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-medium text-[#9D94A5]">
              <span>HOVER TO PREVIEW</span>
              <span className="h-1 w-1 rounded-full bg-pink-400"></span>
              <span>CLICK FOR CASE STUDY</span>
            </div>
          </div>

          {/* Cards Grid with Increased Breathing Room & Balanced Heights */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
            {films && films.length > 0 ? (
              films.map((film, index) => {
                const isGPIB =
                  film.title?.toLowerCase().includes("gpib") ||
                  film.title?.toLowerCase().includes("immanuel");

                return (
                  <VideoCardWrapper
                    key={film.title || index}
                    project={film}
                    index={index}
                    onOpenModal={() => handleOpenModal(film)}
                    className={
                      isGPIB
                        ? "md:col-span-2 xl:col-span-2 xl:col-start-2"
                        : ""
                    }
                  />
                );
              })
            ) : (
              <p className="col-span-full py-16 text-center text-xs font-medium text-[#6B6570]">
                No cinematic projects found at the moment.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL DETAIL PROJECT */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}