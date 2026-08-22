"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Film } from "@/data/film";
import { useLanguage } from "@/context/LanguageContext";

interface ModalProjectData {
  industry?: string;
  year?: string;
  platform?: string;
  format?: string;
  challenge?: string;
  summary?: string;
  tagline?: string;
  creativeDirection?: {
    visualStyle?: string;
    editingStyle?: string;
    colorMood?: string;
    pacing?: string;
    typography?: string;
    motionLanguage?: string;
  };
  editingBreakdown?: Array<{ title: string; desc: string }>;
  softwareUsed?: string[];
  deliverables?: string[];
  outcome?: string;
  reflection?: string;
  process?: {
    delivery?: string;
    preProduction?: string;
    production?: string;
    postProduction?: string;
  };
}

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
  const { t } = useLanguage();

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
  const p = project as Film & ModalProjectData;

  // Metadata fallbacks for recruiter-focused case study
  const client = project.client || "Personal Production";
  const industry = p.industry || "Digital Media & Brand Storytelling";
  const role = project.role || "Video Editor & Motion Designer";
  const year = p.year || "2026";
  const duration = p.duration || "60 Seconds";
  const format = p.format || (isPortrait ? "9:16 Vertical HD" : "16:9 Landscape 4K");
  const platform = p.platform || "Instagram, TikTok, & YouTube";
  const summary = p.tagline || p.summary || project.description.slice(0, 140) + "...";
  const challenge = p.challenge || "Capturing audience attention within the critical first 3 seconds while maintaining high aesthetic standards and clear brand messaging across fast-paced digital feeds.";
  
  const creativeDirection = p.creativeDirection || {
    visualStyle: "Clean, modern editorial look with high contrast and polished color grading.",
    editingStyle: "Dynamic, rhythm-driven cuts synchronized precisely with audio beats.",
    colorMood: "Warm cinematic tones accented with vibrant brand-aligned pink highlights.",
    pacing: "Fast hook leading into an engaging, breathable narrative arc.",
    typography: "Bold sans-serif kinetic text for maximum legibility and emphasis.",
    motionLanguage: "Smooth keyframed transitions and subtle organic motion graphics."
  };

  const editingBreakdown = p.editingBreakdown || [
    { title: "Precision Editing", desc: "Rhythmic cutting, framing optimization, and narrative flow structuring." },
    { title: "Color Grading", desc: "Custom LUT application, white balance correction, and skin tone balancing." },
    { title: "Motion Graphics", desc: "Kinetic typography, lower thirds, and animated overlays." },
    { title: "Sound Design", desc: "Audio mixing, dialogue cleanup, SFX layer integration, and beat syncing." }
  ];

  const softwareUsed = p.softwareUsed || ["Adobe Premiere Pro", "After Effects", "Adobe Photoshop", "Adobe Audition", "CapCut"];
  const deliverablesList = p.deliverables || ["Instagram Reel (9:16)", "TikTok Video (9:16)", "YouTube Shorts (9:16)", "Primary Campaign Master (16:9)"];
  const outcomeText = p.outcome || "Successfully elevated brand engagement, improved audience retention rates, and delivered a professional-grade multimedia presentation that resonated with target demographics.";
  const reflectionText = p.reflection || "This project emphasized the critical balance between technical post-production execution and compelling visual storytelling. Every transition and audio cue must serve a distinct strategic purpose.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 lg:px-16">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Container Modal Pop-up */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-x-hidden overflow-y-auto rounded-[28px] border border-pink-100/60 bg-white p-5 shadow-2xl sm:rounded-[36px] sm:p-10 lg:p-12">
        
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 font-bold text-[#2D2433] transition-all hover:bg-pink-500 hover:text-white shadow-xs cursor-pointer"
          aria-label={t("closeModalAria")}
        >
          ✕
        </button>

        {/* SECTION 1: HERO (Video Left, Content Right on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Video Preview */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className={`w-full overflow-hidden rounded-2xl bg-black shadow-lg border border-pink-100/40 ${
              isPortrait ? "aspect-[9/16] max-w-[280px] mx-auto" : "aspect-video"
            }`}>
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
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-pink-500 mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2D2433] leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base font-medium text-[#6B6570] leading-relaxed">
              {summary}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-600 border border-pink-100/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 sm:my-14 h-px w-full bg-pink-100/80" />

        {/* CASE STUDY CONTENT SECTIONS */}
        <div className="space-y-12 sm:space-y-16">

          {/* SECTION 2: Project Overview */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              01 / OVERVIEW
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433]">
              {t("projectOverview")}
            </h3>
            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-[#6B6570]">
              {project.description}
            </p>
          </div>

          {/* SECTION 3: Project Information (Metadata Grid) */}
          <div className="rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-pink-50/40 p-6 sm:p-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs block mb-4">
              02 / {t("metadataSpecs")}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("client")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{client}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("industry")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{industry}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("role")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{role}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("year")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{year}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("duration")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{duration}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("format")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{format}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t("platforms")}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">{platform}</p>
              </div>
            </div>
          </div>

          {/* SECTION 4: Creative Challenge */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              03 / STRATEGY
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433]">
              {t("creativeChallenge")}
            </h3>
            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-[#6B6570]">
              {challenge}
            </p>
          </div>

          {/* SECTION 5: Creative Direction */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              04 / AESTHETICS
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
              {t("creativeDirection")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("visualStyle")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.visualStyle}</p>
              </div>
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("editingStyle")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.editingStyle}</p>
              </div>
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("colorMood")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.colorMood}</p>
              </div>
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("pacing")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.pacing}</p>
              </div>
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("typography")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.typography}</p>
              </div>
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1.5">{t("motionLanguage")}</h4>
                <p className="text-xs text-[#6B6570] leading-relaxed">{creativeDirection.motionLanguage}</p>
              </div>
            </div>
          </div>

          {/* SECTION 6: Production Workflow (Horizontal Timeline) */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              05 / EXECUTION
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
              {t("productionWorkflow")}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Pre-production */}
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-black text-pink-500 mb-3">
                    01 / {t("preProduction")}
                  </span>
                  <p className="text-xs leading-relaxed text-[#6B6570]">
                    {project.process?.preProduction || "Concept scoping, moodboarding, storyboard drafting, and asset organization."}
                  </p>
                </div>
              </div>

              {/* Production */}
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-black text-pink-500 mb-3">
                    02 / {t("production")}
                  </span>
                  <p className="text-xs leading-relaxed text-[#6B6570]">
                    {project.process?.production || "A-roll/B-roll capturing, lighting setup, audio recording, and initial media ingestion."}
                  </p>
                </div>
              </div>

              {/* Post-production */}
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-black text-pink-500 mb-3">
                    03 / {t("postProduction")}
                  </span>
                  <p className="text-xs leading-relaxed text-[#6B6570]">
                    {project.process?.postProduction || "Rough cuts, fine tuning, color grading, sound mixing, and graphic overlays."}
                  </p>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-pink-100/80 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-black text-pink-500 mb-3">
                    04 / {t("delivery")}
                  </span>
                  <p className="text-xs leading-relaxed text-[#6B6570]">
                    {p.process?.delivery || "Multi-format exporting, bitrate optimization, caption embedding, and final handoff."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 7: Editing Breakdown */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              06 / CRAFTMANSHIP
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
              {t("editingBreakdown")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {editingBreakdown.map((item: { title: string; desc: string }, idx: number) => (
                <div key={idx} className="rounded-2xl border border-pink-100/80 bg-[#FFFDFC] p-6 shadow-xs">
                  <h4 className="text-sm font-black text-[#2D2433] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-pink-500" />
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#6B6570]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 8: Software Used */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              07 / TOOLKIT
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
              {t("softwareUsed")}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softwareUsed.map((tool: string) => (
                <span
                  key={tool}
                  className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2D2433] border border-pink-200 shadow-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* SECTION 9: Deliverables */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              08 / OUTPUTS
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
              Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliverablesList.map((item: string, idx: number) => (
                <div key={idx} className="rounded-2xl border border-pink-100/80 bg-pink-50/30 p-4 text-center">
                  <p className="text-xs font-bold text-[#2D2433]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 10: Project Outcome */}
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-b from-pink-50/80 to-white p-8 sm:p-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              09 / IMPACT
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#2D2433]">
              {t("projectOutcome")}
            </h3>
            <p className="mt-4 text-xs sm:text-base leading-relaxed text-[#6B6570] max-w-2xl mx-auto">
              {outcomeText}
            </p>
          </div>

          {/* SECTION 11: Reflection */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              10 / REFLECTION
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433]">
              {t("whatILearned")}
            </h3>
            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-[#6B6570]">
              {reflectionText}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}