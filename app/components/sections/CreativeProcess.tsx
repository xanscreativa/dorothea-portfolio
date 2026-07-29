"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";
import {
  Compass,
  Search,
  Sparkles,
  Palette,
  Sliders,
  Rocket,
  ArrowUpRight,
  ChevronRight,
  Clock,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  outcome: string;
  deliverables: string[];
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    phase: "PHASE 01 — ALIGNMENT",
    title: "Discover & Immerse",
    tagline: "Uncovering Core DNA & Strategic Foundations",
    description:
      "Deconstructing complex business objectives through executive interviews, brand audits, and target audience mapping to construct an unshakeable design strategy.",
    duration: "1 WEEK",
    outcome: "Unified vision & project roadmap",
    deliverables: ["Brand Audit", "Stakeholder Alignment", "Problem Matrix"],
    icon: Compass,
  },
  {
    number: "02",
    phase: "PHASE 02 — EXPLORATION",
    title: "Research & Benchmark",
    tagline: "Market Intelligence & Visual Topography",
    description:
      "Dissecting industry leaders, analyzing competitive positioning, and curating avant-garde aesthetic benchmarks to reveal high-value creative white space.",
    duration: "1–2 WEEKS",
    outcome: "Distinct positioning vectors",
    deliverables: ["Competitor Audit", "Visual Landscapes", "Trend Mapping"],
    icon: Search,
  },
  {
    number: "03",
    phase: "PHASE 03 — DIRECTION",
    title: "Concept & Strategy",
    tagline: "Translating Insights into Tactile Visions",
    description:
      "Synthesizing raw research into distinct creative paths—distilling spatial moodboards, interactive metaphors, and brand narratives into an inspiring north star.",
    duration: "1–2 WEEKS",
    outcome: "Approved creative direction",
    deliverables: ["Moodboards", "Creative Directions", "Narrative Arc"],
    icon: Sparkles,
  },
  {
    number: "04",
    phase: "PHASE 04 — EXECUTION",
    title: "Design & Craft",
    tagline: "Architecting High-Fidelity Design Systems",
    description:
      "Engineering pixel-perfect screen layouts, bespoke typography, and scalable UI systems backed by rigorous usability principles and modern aesthetic standards.",
    duration: "2–4 WEEKS",
    outcome: "Scalable design blueprint",
    deliverables: ["UI Systems", "Component Libraries", "Typography Scale"],
    icon: Palette,
  },
  {
    number: "05",
    phase: "PHASE 05 — PRECISION",
    title: "Refine & Polish",
    tagline: "Micro-Interactions & Sensory Precision",
    description:
      "Iterating through collaborative critiques, fine-tuning spatial rhythms, and perfecting physics-based motion transitions until every detail feels frictionless.",
    duration: "1 WEEK",
    outcome: "Flawless user experience",
    deliverables: ["Prototyping", "Motion Specs", "Usability Tuning"],
    icon: Sliders,
  },
  {
    number: "06",
    phase: "PHASE 06 — DEPLOYMENT",
    title: "Deliver & Scale",
    tagline: "Production Handoff & Ecosystem Scale",
    description:
      "Packaging production-grade React codebases, design tokens, and comprehensive documentation to guarantee seamless developer handoff and multi-platform consistency.",
    duration: "1 WEEK",
    outcome: "Production-ready handover",
    deliverables: ["React Components", "Token Specs", "Design Guidelines"],
    icon: Rocket,
  },
];

export default function HowIWork() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMobileTabClick = (index: number) => {
    setActiveMobileIndex(index);
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <section className="relative overflow-hidden border-t border-pink-100/70 bg-[#FAF7F8] py-16 sm:py-28 lg:py-36 selection:bg-pink-500 selection:text-white">
      {/* LUXURY BACKGROUND ACCENTS: Glowing orbs + Grid Overlay */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-pink-300/30 to-rose-200/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-pink-200/25 via-rose-100/30 to-transparent blur-[150px]" />
      
      {/* Subtle Grid Accent Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#2D2433 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative mx-auto w-full px-6 sm:w-[92%] sm:px-0 max-w-7xl">
        
        {/* MOBILE HEADER */}
        <div className="mb-10 lg:hidden">
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/80 px-3.5 py-1.5 border border-pink-200/60 shadow-[0_2px_10px_rgba(244,114,182,0.08)] backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.25em] text-pink-600">
                METHODOLOGY
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#2D2433]">
              Anatomy of Execution
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[#6B6570] font-normal">
              A disciplined sequence engineered to transform complexity into timeless digital experiences.
            </p>
          </FadeUp>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: HORIZONTAL CAROUSEL + PILL NAVIGATION       */}
        {/* ========================================================= */}
        <div className="block lg:hidden">
          {/* Mobile Step Selector Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
            {processSteps.map((step, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => handleMobileTabClick(idx)}
                  className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ease-out active:scale-95 ${
                    isActive
                      ? "bg-[#2D2433] text-white shadow-[0_8px_20px_-4px_rgba(45,36,51,0.3)] scale-[1.02]"
                      : "bg-white/90 text-[#6B6570] border border-pink-100/80 shadow-xs hover:border-pink-200"
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-pink-400" : "text-pink-500"}`}>
                    {step.number}
                  </span>
                  <span>{step.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory overflow-x-auto gap-5 pb-8 pt-3 no-scrollbar -mx-6 px-6"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeMobileIndex === index;

              return (
                <div
                  key={step.number}
                  className="w-[88vw] max-w-[360px] shrink-0 snap-center flex flex-col h-full"
                >
                  <div
                    onClick={() => setActiveMobileIndex(index)}
                    className={`relative flex flex-col justify-between h-full min-h-[440px] overflow-hidden rounded-[28px] bg-white p-6 transition-all duration-300 ease-out ${
                      isActive
                        ? "border border-pink-300/80 ring-4 ring-pink-400/10 shadow-[0_20px_40px_-15px_rgba(244,114,182,0.15)]"
                        : "border border-pink-100/80 opacity-85 shadow-sm"
                    }`}
                  >
                    {/* Top Gradient Edge Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 opacity-90" />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-5 mt-1">
                        <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-pink-600 bg-pink-50/80 px-3 py-1 rounded-full border border-pink-200/50">
                          {step.number} / 06
                        </span>
                      </div>

                      {/* Phase Tag */}
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-500">
                        {step.phase}
                      </span>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl font-black tracking-tight text-[#2D2433] mt-1">
                        {step.title}
                      </h3>
                        <p className="text-xs font-medium text-pink-500/90 mt-0.5">
                          {step.tagline}
                        </p>

                      {/* Description */}
                      <p className="mt-3.5 text-xs leading-relaxed text-[#6B6570]">
                        {step.description}
                      </p>
                    </div>

                    {/* Metadata & Deliverables Bottom Section */}
                    <div className="mt-6 pt-4 border-t border-pink-100/80 space-y-4">
                      {/* Outcome & Duration Badge Row */}
                      <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-[#2D2433]">
                        <div className="flex items-center gap-1.5 text-pink-600">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span className="truncate font-semibold text-[#2D2433]">{step.outcome}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 font-mono text-[10px] bg-pink-50 px-2 py-0.5 rounded text-pink-600 font-semibold">
                          <Clock className="h-3 w-3" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      {/* Deliverables Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {step.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg bg-pink-50/60 px-3 py-1.5 text-[10px] font-semibold text-[#2D2433] border border-pink-100/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Swipe Indicator Indicator */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-100/50 px-4 py-1.5 text-[11px] font-semibold text-pink-600 border border-pink-200/40 backdrop-blur-xs">
              <span>Swipe phases</span>
              <ChevronRight className="h-3.5 w-3.5 animate-m-right text-pink-500" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW: STICKY EDITORIAL + TIMELINE DECK            */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: STICKY EDITORIAL HERO */}
          <div className="col-span-5 sticky top-28">
            <FadeUp>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/90 px-4 py-1.5 border border-pink-200/70 shadow-[0_4px_15px_rgba(244,114,182,0.08)] backdrop-blur-md mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-pink-600">
                  CREATIVE WORKFLOW
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#2D2433]">
                Anatomy of <br />
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Execution.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-[#6B6570] font-normal">
                Architecting memorable digital flagships requires precision. Each phase is calculated to fuse strategic clarity with haute-couture digital craftsmanship.
              </p>

              {/* Luxury Callout Container */}
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-white/90 via-pink-50/30 to-white/80 p-7 border border-pink-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-pink-600 mb-3">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Studio Promise
                  </span>
                </div>
                <p className="text-xs text-[#6B6570] leading-relaxed italic">
                  &ldquo;Aesthetics without strategic clarity is decoration. We engineer design systems that drive commercial value.&rdquo;
                </p>
                
                <div className="mt-5 pt-4 border-t border-pink-100/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#9D94A5]">
                    06 DEFINED PHASES
                  </span>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 transition-colors group"
                  >
                    Initiate engagement 
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE TIMELINE DECK */}
          <div className="col-span-7 relative">
            {/* Soft Vertical Guide Line */}
            <div className="absolute left-9 top-8 bottom-12 w-[2px] bg-gradient-to-b from-pink-400 via-pink-300/40 to-transparent -z-0 rounded-full" />

            <div className="space-y-8 relative z-10">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isHovered = activeHoverIndex === index;

                return (
                  <FadeUp key={step.number} delay={index * 0.04}>
                    <div
                      onMouseEnter={() => setActiveHoverIndex(index)}
                      onMouseLeave={() => setActiveHoverIndex(null)}
                      className="group relative flex items-start gap-7"
                    >
                      {/* Icon Container with Floating Glow */}
                      <div className="relative shrink-0 mt-1">
                        <div
                          className={`absolute -inset-2 rounded-3xl bg-pink-400/30 blur-lg transition-all duration-500 ease-out ${
                            isHovered ? "opacity-100 scale-110" : "opacity-0 scale-95"
                          }`}
                        />

                        <div className="relative flex h-18 w-18 items-center justify-center rounded-[22px] bg-white border border-pink-100/90 shadow-[0_4px_20px_rgba(45,36,51,0.04)] transition-all duration-500 group-hover:border-pink-300 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white">
                          <IconComponent className="h-7 w-7 text-pink-500 transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3" />
                        </div>
                      </div>

                      {/* Main Card */}
                      <div className="flex-1 overflow-hidden rounded-[32px] border border-pink-100/80 bg-white/90 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] backdrop-blur-xs transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-pink-300/80 group-hover:bg-white group-hover:shadow-[0_25px_50px_-12px_rgba(244,114,182,0.18)]">
                        {/* Ambient Card Background Glow */}
                        <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-pink-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-10">
                          {/* Card Top Indicator Row */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-pink-500">
                              {step.phase}
                            </span>
                            
                            <span className="text-xs font-mono font-bold tracking-widest text-[#B0A8B8] group-hover:text-pink-500 transition-colors">
                              {step.number} / 06
                            </span>
                          </div>

                          {/* Title & Subtitle */}
                          <h3 className="text-2xl font-black tracking-tight text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600">
                            {step.title}
                          </h3>

                          <p className="text-xs font-semibold text-pink-500/90 mt-0.5">
                            {step.tagline}
                          </p>

                          {/* Description */}
                          <p className="mt-3 text-sm leading-relaxed text-[#6B6570]">
                            {step.description}
                          </p>

                          {/* Key Outcome & Duration Bar */}
                          <div className="mt-5 flex items-center justify-between border-t border-b border-pink-100/60 py-2.5 text-xs">
                            <div className="flex items-center gap-2 font-medium text-[#2D2433]">
                              <CheckCircle2 className="h-4 w-4 text-pink-500" />
                              <span>Outcome: <strong className="font-semibold text-[#2D2433]">{step.outcome}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5 font-mono text-[11px] text-pink-600 font-bold bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                              <Clock className="h-3 w-3" />
                              <span>{step.duration}</span>
                            </div>
                          </div>

                          {/* Interactive Deliverable Tags */}
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            {step.deliverables.map((item, idx) => (
                              <span
                                key={idx}
                                className="rounded-xl bg-pink-50/70 px-3.5 py-1.5 text-xs font-semibold text-[#524B57] border border-pink-100/80 transition-all duration-300 group-hover:border-pink-200 group-hover:bg-pink-50 group-hover:text-[#2D2433] hover:scale-105"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}