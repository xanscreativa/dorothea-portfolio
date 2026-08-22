"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

type TranslationKey =
  keyof typeof import("@/data/translations").translations.en;

interface ToolItem {
  name: string;
  levelText: "Expert" | "Advanced" | "Intermediate";
  levelKey: TranslationKey;
  percentage: number;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  categoryKey: TranslationKey;
  categoryIcon: React.ReactNode;
  description: string;
  descriptionKey: TranslationKey;
  tools: ToolItem[];
  isFullWidth?: boolean;
  creativePills?: { label: string; key: TranslationKey }[];
}

// Custom Software SVG Icons
const Icons = {
  Illustrator: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#FF9A00"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.8 17.14h-1.6l-.88-2.68H4.28l-.88 2.68H1.8L5.2 6.86h2.2l3.4 10.28zm-2.08-4.22L6.3 7.42 4.48 12.92h3.64zm8.68 4.22h-1.88v-1.5a2.54 2.54 0 01-1.88.82c-1.48 0-2.32-.96-2.32-2.4 0-1.68 1.12-2.46 2.82-2.52l1.38-.06v-.48c0-.72-.42-1.08-1.24-1.08-.72 0-1.28.26-1.64.68l-1.04-.98c.72-.88 1.84-1.28 3.02-1.28 1.94 0 2.78.96 2.78 2.62v5.58zm-1.88-3.96l-1.08.06c-.84.04-1.32.38-1.32 1.12 0 .66.42 1.08 1.08 1.08.72 0 1.32-.48 1.32-1.26v-1.00z" />
    </svg>
  ),

  Photoshop: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#31A8FF"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-4.3 17.14H5.82V6.86h3.48c2.28 0 3.66 1.12 3.66 3.12 0 2.06-1.42 3.12-3.66 3.12H7.7v4.04zm0-5.8h1.66c1.16 0 1.82-.5 1.82-1.44 0-.96-.66-1.44-1.82-1.44H7.7v2.88zm9.58 3.86a2.72 2.72 0 01-1.92.8c-1.18 0-1.82-.52-1.82-1.32 0-.92.76-1.38 2.06-1.48l1.68-.1v-.32c0-.58-.38-.92-1.12-.92-.62 0-1.14.22-1.52.56l-.88-1.04c.66-.7 1.62-1.02 2.76-1.02 1.76 0 2.64.84 2.64 2.38v3.42h-1.88v-.96zm0-1.22v-.6l-1.22.08c-.56.04-.88.24-.88.6 0 .36.32.58.82.58a1.2 1.2 0 001.28-.66z" />
    </svg>
  ),

  Canva: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#00C4CC"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.88 15.6c-1.38 0-2.48-.82-3.04-2.02a4.4 4.4 0 01-3.62 2.02c-1.82 0-3.08-1.18-3.08-2.92 0-2.38 2.18-4.52 5.18-4.52.88 0 1.62.18 2.18.44v-.32c0-1.08-.72-1.72-1.88-1.72-.92 0-1.76.32-2.34.84l-.84-1.24C9.36 5.5 10.62 5 12.18 5c2.32 0 3.76 1.24 3.76 3.42v4.58c0 .88.38 1.26.92 1.26.4 0 .8-.18 1.16-.48l.68 1.18c-.68.66-1.72 1.04-2.82 1.04zm-1.88-3.8c-.44-.24-1.02-.38-1.62-.38-1.82 0-3.04 1.18-3.04 2.58 0 .82.52 1.34 1.32 1.34 1.12 0 2.22-.88 2.76-2.12v-1.42z" />
    </svg>
  ),

  Premiere: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#EA77FF"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-4.3 17.14H5.82V6.86h3.48c2.28 0 3.66 1.12 3.66 3.12 0 2.06-1.42 3.12-3.66 3.12H7.7v4.04zm0-5.8h1.66c1.16 0 1.82-.5 1.82-1.44 0-.96-.66-1.44-1.82-1.44H7.7v2.88zm8.08 5.8h-1.88v-6.3h1.88v1.02a2.3 2.3 0 011.64-.76c.26 0 .52.04.72.1l-.38 1.76a2.2 2.2 0 00-.62-.08c-.76 0-1.36.46-1.36 1.38v2.88z" />
    </svg>
  ),

  CapCut: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#2D2433"
      aria-hidden="true"
    >
      <path d="M19.5 6h-15C3.12 6 2 7.12 2 8.5v7C2 16.88 3.12 18 4.5 18h15c1.38 0 2.5-1.12 2.5-2.5v-7C22 7.12 20.88 6 19.5 6zm-7.5 8.5L7.5 12 12 9.5v5z" />
    </svg>
  ),

  Figma: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 38 57"
      fill="none"
      aria-hidden="true"
    >
      <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5S19 33.747 19 28.5z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
      <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
      <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
    </svg>
  ),

  VSCode: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#007ACC"
      aria-hidden="true"
    >
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.291L7.859 8.78 3.328 5.342a.747.747 0 00-.916.03L.36 7.155a.747.747 0 00-.03.985l3.89 4.86-3.89 4.86a.747.747 0 00.03.985l2.052 1.783a.747.747 0 00.916.03l4.531-3.438 8.646 8.279c.478.458 1.207.57 1.705.291l4.94-2.377A1.5 1.5 0 0024 22.16V3.84a1.5 1.5 0 00-.85-1.253zM18 16.68l-5.32-4.68L18 7.32v9.36z" />
    </svg>
  ),

  Camera: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E96A98"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),

  Lightroom: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="#31A8FF"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-4.3 17.14H5.82V6.86h1.88v8.42h4.16v1.86H7.7zm8.08 0h-1.88v-6.3h1.88v1.02a2.3 2.3 0 011.64-.76c.26 0 .52.04.72.1l-.38 1.76a2.2 2.2 0 00-.62-.08c-.76 0-1.36.46-1.36 1.38v2.88z" />
    </svg>
  ),

  CreativeSpark: (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tool:scale-110 sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E96A98"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-16l2.5 2.5L17 8l-2.5-2.5L17 3zm0 11l2.5 2.5L17 19l-2.5-2.5L17 14zM9 11l3-3 3 3-3 3-3-3z"
      />
    </svg>
  ),
};

const skills: SkillCategory[] = [
  {
    category: "Graphic Design",
    categoryKey: "skillsGraphicDesign",
    description: "Visual identity, typography, & marketing assets.",
    descriptionKey: "skillsGraphicDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Adobe Illustrator",
        levelText: "Expert",
        levelKey: "levelExpert",
        percentage: 95,
        icon: Icons.Illustrator,
      },
      {
        name: "Adobe Photoshop",
        levelText: "Expert",
        levelKey: "levelExpert",
        percentage: 92,
        icon: Icons.Photoshop,
      },
      {
        name: "Canva",
        levelText: "Expert",
        levelKey: "levelExpert",
        percentage: 90,
        icon: Icons.Canva,
      },
    ],
  },

  {
    category: "Video Editing",
    categoryKey: "skillsVideoEditing",
    description: "Motion graphics, pacing & color grading.",
    descriptionKey: "skillsVideoDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Adobe Premiere Pro",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        percentage: 86,
        icon: Icons.Premiere,
      },
      {
        name: "CapCut",
        levelText: "Expert",
        levelKey: "levelExpert",
        percentage: 92,
        icon: Icons.CapCut,
      },
    ],
  },

  {
    category: "UI / UX",
    categoryKey: "skillsUiUx",
    description: "Wireframing & layout prototyping.",
    descriptionKey: "skillsUiUxDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: [
      {
        name: "Figma",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        percentage: 85,
        icon: Icons.Figma,
      },
      {
        name: "VS Code",
        levelText: "Intermediate",
        levelKey: "levelIntermediate",
        percentage: 76,
        icon: Icons.VSCode,
      },
    ],
  },

  {
    category: "Photography",
    categoryKey: "skillsPhotography",
    description: "Composition, lighting & photo retouching.",
    descriptionKey: "skillsPhotographyDescription",
    categoryIcon: (
      <svg
        className="h-3.5 w-3.5 text-pink-500 sm:h-5 sm:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    tools: [
      {
        name: "DSLR & Mirrorless",
        levelText: "Expert",
        levelKey: "levelExpert",
        percentage: 90,
        icon: Icons.Camera,
      },
      {
        name: "Adobe Lightroom",
        levelText: "Advanced",
        levelKey: "levelAdvanced",
        percentage: 85,
        icon: Icons.Lightroom,
      },
    ],
  },

  {
    category: "Creative Competencies",
    categoryKey: "skillsCreative",
    description: "Core design disciplines informing every project.",
    descriptionKey: "skillsCreativeDescription",
    categoryIcon: Icons.CreativeSpark,
    isFullWidth: true,
    tools: [],
    creativePills: [
      {
        label: "Brand Identity Systems",
        key: "skillBrandSystems",
      },
      {
        label: "Layout & Typography",
        key: "skillLayoutTypography",
      },
      {
        label: "Packaging Design",
        key: "skillPackaging",
      },
      {
        label: "Digital Illustration",
        key: "skillIllustration",
      },
      {
        label: "Editorial Photography",
        key: "skillEditorialPhotography",
      },
      {
        label: "Creative Copywriting",
        key: "skillCreativeCopywriting",
      },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFB] via-[#FFFFFF] to-[#FFF7FB] pt-12 pb-20 sm:py-32 lg:pt-36 lg:pb-44"
    >
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-pink-100/40 blur-[120px] sm:-left-44 sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-pink-100/35 blur-[120px] sm:-right-44 sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl sm:w-[92%]">

        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-20 lg:mb-24">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/90 px-3 py-1 shadow-2xs backdrop-blur-md sm:mb-4 sm:px-4 sm:py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>

              <span className="text-[9px] font-mono font-extrabold uppercase tracking-[0.2em] text-pink-600 sm:text-xs">
                {t("skillsBadge")}
              </span>
            </div>

            <FadeUp delay={0.16}>
              <h2 className="text-xl font-black leading-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                {t("skillsTitlePrefix")}{" "}
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  {t("skillsTitleHighlight")}
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mx-auto mt-2 max-w-xl text-xs leading-normal text-[#6B6570] sm:mt-4 sm:text-base sm:leading-relaxed">
                {t("skillsDescription")}
              </p>
            </FadeUp>

          </div>
        </FadeUp>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">

          {skills.map((skillCategory, index) => {
            const cardDelay = 0.2 + index * 0.08;

            return (
              <div
                key={skillCategory.category}
                className={
                  skillCategory.isFullWidth
                    ? "col-span-2"
                    : "col-span-1"
                }
              >
                <FadeUp delay={cardDelay}>

                  <div
                    className={`group relative rounded-[20px] border border-pink-200/70 bg-white/95 p-3.5 shadow-[0_10px_30px_rgba(45,36,51,0.03)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-pink-400/60 hover:bg-gradient-to-b hover:from-white hover:to-pink-50/20 hover:shadow-[0_20px_45px_rgba(233,106,152,0.12)] sm:rounded-[32px] sm:p-7 ${
                      skillCategory.isFullWidth ? "sm:p-8" : ""
                    }`}
                  >

                    <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-pink-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[32px]" />

                    {/* CARD HEADER */}
                    <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-3">

                      <div className="min-w-0">

                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-pink-200/80 bg-pink-50/80 text-pink-500 shadow-2xs transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                            {skillCategory.categoryIcon}
                          </div>

                          <h3 className="min-w-0 text-xs font-black tracking-tight text-[#2D2433] sm:text-xl">
                            {t(skillCategory.categoryKey)}
                          </h3>

                        </div>

                        <p className="mt-1.5 text-[11px] leading-tight text-[#6B6570] sm:mt-2 sm:text-sm sm:leading-relaxed">
                          {t(skillCategory.descriptionKey)}
                        </p>

                      </div>

                    </div>

                    {/* CREATIVE SKILLS BADGES */}
                    {skillCategory.isFullWidth &&
                      skillCategory.creativePills && (
                        <div className="relative z-10 mt-3 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-3">

                          {skillCategory.creativePills.map((pill) => (
                            <span
                              key={pill.key}
                              className="inline-flex items-center rounded-lg border border-pink-200/70 bg-pink-50/70 px-2.5 py-1 text-[11px] font-semibold text-[#6B6570] shadow-[0_2px_8px_rgba(45,36,51,0.01)] transition-all duration-300 hover:border-pink-300 hover:bg-white hover:text-[#2D2433] sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs"
                            >
                              {t(pill.key)}
                            </span>
                          ))}

                        </div>
                      )}

                    {/* SOFTWARE ITEMS */}
                    {skillCategory.tools.length > 0 && (
                      <div className="relative z-10 mt-3.5 space-y-2.5 sm:mt-7 sm:space-y-4">

                        {skillCategory.tools.map((tool, toolIdx) => (
                          <div
                            key={tool.name}
                            className="group/tool rounded-xl border border-pink-100/80 bg-pink-50/30 p-2 transition-all duration-300 hover:border-pink-300/80 hover:bg-pink-50/60 sm:rounded-2xl sm:p-4"
                          >

                            <div className="flex items-center gap-1.5 sm:gap-3">

                              {/* TOOL ICON + NAME */}
                              <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-3">

                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-pink-200/70 bg-white shadow-2xs transition-transform duration-300 sm:h-9 sm:w-9 sm:rounded-xl">
                                  {tool.icon}
                                </div>

                                {/* FIX: no truncate, text can wrap naturally */}
                                <span className="min-w-0 flex-1 break-words text-[10px] font-bold leading-tight text-[#2D2433] sm:text-sm">
                                  {tool.name}
                                </span>

                              </div>

                              {/* LEVEL BADGE */}
                              <span className="shrink-0 rounded-full border border-pink-200/80 bg-pink-50/90 px-1.5 py-0.5 text-[9px] font-mono font-extrabold uppercase tracking-widest text-pink-600 shadow-2xs sm:px-3 sm:py-1 sm:text-[10px]">

                                <span className="sm:hidden">
                                  {t(
                                    tool.levelKey === "levelExpert"
                                      ? "levelExpertShort"
                                      : tool.levelKey === "levelAdvanced"
                                      ? "levelAdvancedShort"
                                      : "levelIntermediateShort"
                                  )}
                                </span>

                                <span className="hidden sm:inline">
                                  {t(tool.levelKey)}
                                </span>

                              </span>

                            </div>

                            {/* PROGRESS BAR */}
                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-pink-100/80 p-0.5 sm:mt-3.5 sm:h-2">

                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${tool.percentage}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1.1,
                                  delay:
                                    cardDelay +
                                    0.1 +
                                    toolIdx * 0.08,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                              />

                            </div>

                          </div>
                        ))}

                      </div>
                    )}

                  </div>

                </FadeUp>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}