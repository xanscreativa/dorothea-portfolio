import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "About | XANS CREATIVA",
  description:
    "Dorothea Alexandra Manuputty is a Graphic Designer and Video Editor based in Indonesia, creating branding, motion graphics, social media, and visual storytelling with clarity and purpose.",
};

const journeySteps = [
  {
    year: "2020",
    title: "The Foundation",
    description: "Started studying Visual Communication Design, exploring the fundamentals of typography, semiotics, and human perception.",
  },
  {
    year: "2021",
    title: "Early Practice",
    description: "Began freelancing and working with local design studios, translating classroom theories into real-world commercial deliverables.",
  },
  {
    year: "2022",
    title: "Research & Academic Growth",
    description: "Engaged in national research projects (Kedaireka) and won recognition for packaging design and institutional branding.",
  },
  {
    year: "2024",
    title: "Professional Practice",
    description: "Stepped into professional graphic design roles at scale, handling complex digital assets and cross-functional brand systems.",
  },
  {
    year: "Today",
    title: "Purpose-Driven Craft",
    description: "Helping brands communicate through structured visual storytelling, rigorous research, and timeless execution.",
  },
];

const experienceBlocks = [
  {
    title: "Graphic Design Artist",
    subtitle: "Tera Infinity Ultima",
    timeline: "Februari 2024 — Present",
    achievements: [
      "Engineered comprehensive digital assets and visual identities that scaled brand recognition.",
      "Streamlined visual communication workflows to accelerate campaign turnaround times.",
      "Elevated social media storytelling consistency across multiple commercial channels.",
    ],
  },
  {
    title: "Research Project Assistant",
    subtitle: "Project 'BaTecH' Matching Fund Kedaireka 2022 at SWCU",
    timeline: "Juni 2022 — Mei 2023",
    achievements: [
      "Spearheaded design and marketing strategies for a national research initiative.",
      "Produced comprehensive activity documentation and high-impact digital/print collateral.",
    ],
  },
  {
    title: "Assistant Lecturer",
    subtitle: "Universitas Kristen Satya Wacana",
    timeline: "September 2022 — Desember 2022",
    achievements: [
      "Mentored students in practical design execution, layout theory, and software proficiency.",
      "Bridged academic concepts with industry-standard production requirements.",
    ],
  },
  {
    title: "Research Project Assistant",
    subtitle: "Project 'Millenial Batik Eco Fashion' Matching Fund Kedaireka 2021 at SWCU",
    timeline: "September 2021 — Agustus 2022",
    achievements: [
      "Designed visual lookbooks and marketing assets bridging traditional heritage with modern fashion design.",
      "Managed visual documentation and cross-disciplinary promotional campaigns.",
    ],
  },
  {
    title: "Graphic Designer",
    subtitle: "Biro Promosi, Humas dan Alumni (BPHA) SWCU",
    timeline: "Februari 2022 — April 2022",
    achievements: [
      "Planned and executed institutional communication campaigns for university-wide events.",
      "Directed photo editing and Instagram visual assets reaching thousands of prospective students.",
    ],
  },
  {
    title: "Assistant Lecturer",
    subtitle: "Universitas Kristen Satya Wacana",
    timeline: "September 2021 — Desember 2021",
    achievements: [
      "Supported studio lab sessions, providing technical guidance on graphic workflows.",
    ],
  },
  {
    title: "Graphic Designer",
    subtitle: "Dreams Studio Salatiga",
    timeline: "Agustus 2021 — November 2021",
    achievements: [
      "Translated client briefs into cohesive social media grid strategies.",
      "Executed commercial photography and professional photo editing for studio accounts.",
    ],
  },
];

const education = {
  degree: "Sarjana Desain (S.Ds) — Desain Komunikasi Visual",
  institution: "Universitas Kristen Satya Wacana",
  location: "Salatiga, Indonesia",
  period: "2018 — 2023",
  learned: "Learned to view design not as mere styling, but as a systematic language for solving human and commercial problems.",
};

const certifications = [
  {
    title: "SHIMA (Entrepreneurship in Animation)",
    issuer: "Kemenparekraf & AINAKI",
    year: "2020",
  },
  {
    title: "Pre-Employment Program: UI/UX Design at Figma",
    issuer: "Kementerian Ketenagakerjaan RI",
    year: "2023",
  },
];

const achievements = [
  {
    title: "Juara 1 / Pemenang Desain Logo HUT ke-63 Pelkat PA",
    event: "National Level Competition",
    year: "2022",
  },
  {
    title: "First Place Packaging Design",
    event: "FESTFORATIKA #3 (National)",
    year: "2022",
  },
];

const philosophy = [
  {
    title: "Clarity",
    description: "Every design should communicate clearly before it decorates.",
  },
  {
    title: "Purpose",
    description: "Every visual decision should have meaning and intention.",
  },
  {
    title: "Consistency",
    description: "Strong visual systems create memorable brands.",
  },
  {
    title: "Storytelling",
    description: "Meaningful visuals build emotional connections.",
  },
];

const expertiseCapabilities = [
  { title: "Brand Identity", level: "Expert" },
  { title: "Visual Storytelling", level: "Expert" },
  { title: "Editorial Design", level: "Expert" },
  { title: "Motion Graphics", level: "Advanced" },
  { title: "Creative Direction", level: "Advanced" },
  { title: "Packaging Design", level: "Expert" },
];

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "Figma",
  "CapCut",
  "Canva",
];

const workingPrinciples = [
  "Strategic thinking before execution",
  "Organized, transparent workflow",
  "Clear, proactive communication",
  "Rigorous attention to detail",
  "Absolute deadline commitment",
];

const hobbies = [
  "Drawing",
  "Photography",
  "Crafting",
  "Children Ministry",
  "Minimalism",
  "Reading",
];

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDFC] text-[#2D2433] selection:bg-pink-100 selection:text-pink-600 overflow-x-hidden">
      
      {/* 1. Personal Manifesto (Hero) */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-pink-100 blur-[160px] opacity-15 pointer-events-none" />
        <div className="absolute right-[-10%] top-[-5%] h-[420px] w-[420px] rounded-full bg-pink-200/20 blur-[180px] opacity-25 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            
            <div className="order-2 lg:order-1 lg:col-span-7">
              <FadeUp>
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-pink-500 mb-3.5">
                    PERSONAL MANIFESTO
                  </span>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight text-[#2D2433]">
                    I believe great design is not about making things beautiful—it is about making ideas <span className="text-pink-500">meaningful</span>.
                  </h1>
                  
                  <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                    <p className="font-medium text-[#2D2433]">
                      Hi, I&apos;m Dorothea Alexandra Manuputty, S.Ds. Rooted in Indonesia, my practice bridges structured research with empathetic visual systems.
                    </p>
                    <p>
                      Across commercial studios, national research initiatives, and institutional branding, my goal remains consistent: transforming complex narratives into clear, timeless, and intentional design systems.
                    </p>
                  </div>

                  <hr className="my-8 border-pink-100/80" />

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 mb-1.5">
                        BASED IN
                      </span>
                      <p className="text-base sm:text-lg font-bold text-[#2D2433]">
                        Pekanbaru, Indonesia
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 mb-1.5">
                        STATUS
                      </span>
                      <p className="text-base sm:text-lg font-bold text-[#2D2433]">
                        Open to Collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <FadeUp>
                <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none overflow-hidden rounded-[36px] border border-pink-100/90 bg-white p-3.5 shadow-[0_24px_70px_rgba(229,135,176,0.12)]">
                  <Image
                    src="/hero/profile.png"
                    alt="Portrait of Dorothea Alexandra Manuputty"
                    width={800}
                    height={950}
                    className="h-[320px] w-full rounded-[28px] object-cover object-top sm:h-[420px] lg:h-[480px]"
                    priority
                  />
                  <div className="absolute bottom-6 right-6 z-10 rounded-2xl border border-pink-100/90 bg-white/95 px-5 py-4 shadow-[0_15px_35px_rgba(45,36,51,0.08)] backdrop-blur-md">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 mb-0.5">
                      PRACTICE
                    </span>
                    <p className="text-3xl font-black tracking-tighter text-[#2D2433]">
                      4+
                    </p>
                    <span className="block text-[11px] font-medium text-[#6B6570] tracking-wide">
                      Years Experience
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 2. My Journey (Visual Timeline) */}
      <section className="py-20 bg-[#FFF8FA] border-y border-pink-100/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                The Journey So Far
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {journeySteps.map((step, index) => (
              <FadeUp key={step.year} delay={index * 0.08}>
                <div className="h-full rounded-[26px] border border-pink-100/80 bg-white p-6 shadow-[0_10px_30px_rgba(229,135,176,.05)] flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-black text-pink-500 mb-3">
                      {step.year}
                    </span>
                    <h3 className="text-base font-black text-[#2D2433] mb-2">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-[#6B6570]">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Professional Impact */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "50+", title: "Completed Projects", desc: "Helping brands communicate visually across digital and print mediums." },
                { value: "8+", title: "Brands & Institutions", desc: "Collaborating with universities, studios, and commercial enterprises." },
                { value: "4+", title: "Years in Practice", desc: "Refining visual discipline, methodology, and creative direction." },
                { value: "2+", title: "National Awards", desc: "Recognized nationally for packaging design and logo excellence." },
              ].map((stat) => (
                <div key={stat.title} className="rounded-[28px] border border-pink-100/80 bg-[#FFFDFC] p-7 shadow-[0_15px_40px_rgba(229,135,176,.05)]">
                  <p className="text-4xl font-black tracking-tighter text-[#2D2433]">{stat.value}</p>
                  <h3 className="mt-2 text-sm font-bold text-pink-500 tracking-wide uppercase">{stat.title}</h3>
                  <p className="mt-1 text-xs text-[#6B6570] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 4. Career Experience & 5. Education & 6. Certifications & 7. Awards */}
      <section className="py-20 sm:py-28 lg:py-32 border-t border-pink-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Left Column: Career Experience */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                    WORK HISTORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2D2433]">
                    Career Experience
                  </h2>

                  <div className="mt-10 rounded-[32px] border border-pink-100/80 bg-white p-6 sm:p-10 shadow-[0_20px_60px_rgba(229,135,176,.05)]">
                    <div className="space-y-10">
                      {experienceBlocks.map((block) => (
                        <div key={`${block.title}-${block.timeline}`} className="relative pl-6 sm:pl-8 border-l-2 border-pink-200/80">
                          <span className="absolute -left-1.75 top-1.5 h-3.5 w-3.5 rounded-full bg-pink-500 ring-4 ring-white" />
                          
                          <div className="space-y-1 mb-3">
                            <span className="inline-flex rounded-full bg-pink-50 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-pink-500">
                              {block.timeline}
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#2D2433] tracking-tight">
                              {block.title}
                            </h3>
                            <span className="block text-xs sm:text-sm font-bold tracking-wide text-pink-500/90">
                              {block.subtitle}
                            </span>
                          </div>

                          <ul className="space-y-2">
                            {block.achievements.map((ach, idx) => (
                              <li key={idx} className="text-xs sm:text-sm leading-relaxed text-[#6B6570] flex items-start gap-2">
                                <span className="text-pink-400 font-bold">•</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Education, Certifications, Awards */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Education */}
              <FadeUp>
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                    ACADEMIC FOUNDATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2D2433]">
                    Education
                  </h2>

                  <div className="mt-6 rounded-[26px] border border-pink-100/80 bg-white p-6 sm:p-7 shadow-[0_15px_40px_rgba(229,135,176,.05)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-pink-500">
                        {education.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#2D2433] tracking-tight">
                      {education.degree}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-[#2D2433]">
                      {education.institution}
                    </p>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B6570] mt-0.5 mb-4">
                      {education.location}
                    </span>
                    <p className="text-xs text-[#6B6570] italic border-t border-pink-50 pt-3">
                      &ldquo;{education.learned}&rdquo;
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Certifications */}
              <FadeUp>
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                    CREDENTIALS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2D2433]">
                    Certifications
                  </h2>

                  <div className="mt-6 space-y-3.5">
                    {certifications.map((cert) => (
                      <div key={cert.title} className="rounded-[22px] border border-pink-100/80 bg-white p-5 shadow-[0_10px_30px_rgba(229,135,176,.04)]">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500">{cert.year}</span>
                        <h3 className="text-sm font-bold text-[#2D2433] mt-1">{cert.title}</h3>
                        <p className="text-xs text-[#6B6570] mt-0.5">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Awards */}
              <FadeUp>
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                    RECOGNITION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2D2433]">
                    Awards &amp; Competitions
                  </h2>

                  <div className="mt-6 space-y-3.5">
                    {achievements.map((ach) => (
                      <div key={ach.title} className="rounded-[22px] border border-pink-100/80 bg-white p-5 shadow-[0_10px_30px_rgba(229,135,176,.04)]">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500">{ach.year}</span>
                        <h3 className="text-sm font-bold text-[#2D2433] mt-1">{ach.title}</h3>
                        <p className="text-xs text-[#6B6570] mt-0.5">{ach.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

            </div>

          </div>
        </div>
      </section>

      {/* 8. Design Philosophy */}
      <section className="relative overflow-hidden bg-[#FFF8FA] py-20 sm:py-26 lg:py-32 border-y border-pink-100/60">
        <div className="absolute left-1/2 top-1/2 -z-10 h-75 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/40 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                DESIGN PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Core principles guiding every visual system.
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col justify-between rounded-[26px] border border-pink-100/80 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-300 hover:shadow-[0_20px_40px_rgba(229,135,176,.12)] shadow-[0_10px_30px_rgba(229,135,176,.05)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-pink-50 pb-3.5">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
                        {item.title}
                      </span>
                      <span className="text-xs font-black text-pink-200 transition-colors duration-300 group-hover:text-pink-400">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 h-1 w-8 rounded-full bg-pink-100 transition-all duration-300 group-hover:w-full group-hover:bg-pink-400" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Creative Expertise & 10. Tools */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Creative Expertise */}
            <div className="lg:col-span-8">
              <FadeUp>
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                    CAPABILITIES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433] mb-8">
                    Creative Expertise
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {expertiseCapabilities.map((cap) => (
                      <div key={cap.title} className="flex items-center justify-between rounded-[22px] border border-pink-100/80 bg-white p-5 shadow-[0_10px_30px_rgba(229,135,176,.04)]">
                        <span className="text-sm font-bold text-[#2D2433]">{cap.title}</span>
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pink-500">
                          {cap.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Tools */}
            <div className="lg:col-span-4">
              <FadeUp>
                <div className="h-full rounded-[28px] border border-pink-100/80 bg-white p-6 sm:p-8 shadow-[0_15px_40px_rgba(229,135,176,.05)] flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                      TOOLKIT
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#2D2433] mb-6">
                      Software
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-pink-50/70 px-3.5 py-1.5 text-xs font-medium text-[#2D2433] border border-pink-100/60">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 text-[11px] text-[#6B6570] italic">
                    *Tools change; strategic design thinking remains constant.
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>

        </div>
      </section>

      {/* 11. Working With Me */}
      <section className="py-20 bg-white border-t border-pink-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                COLLABORATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                How I Collaborate
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#6B6570]">
                Building trust through clear standards and professional commitment.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workingPrinciples.map((principle, index) => (
              <FadeUp key={principle} delay={index * 0.05}>
                <div className="rounded-[24px] border border-pink-100/80 bg-[#FFFDFC] p-6 shadow-[0_10px_30px_rgba(229,135,176,.04)] flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-500 font-bold text-sm">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-[#2D2433]">{principle}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Beyond Design */}
      <section className="py-20 bg-[#FFF8FA] border-t border-pink-100/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                HUMAN ELEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433] mb-6">
                Beyond the Screen
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6B6570] mb-8 font-medium">
                Design is deeply human, and inspiration lives outside the pixels. Whether I am sketching new concepts in a notebook, capturing organic textures through photography, or serving in children&apos;s ministry, these experiences ground my worldview and infuse authenticity into my creative work.
              </p>

              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#2D2433] border border-pink-100 shadow-xs">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="rounded-[36px] border border-pink-100/80 bg-[#FFFDFC] p-8 sm:p-14 lg:p-16 text-center shadow-[0_30px_70px_rgba(229,135,176,.1)]">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-3">
                LET&apos;S BUILD SOMETHING MEANINGFUL TOGETHER
              </span>
              
              <h2 className="mx-auto mt-2 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#2D2433]">
                Every memorable brand starts with a thoughtful conversation.
              </h2>
              
              <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                Whether you have a full-time position, a brand identity project, or a creative partnership in mind, my inbox is always open.
              </p>
              
              <div className="mt-8 flex flex-row items-center justify-center gap-3.5 w-full max-w-sm mx-auto">
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_15px_30px_rgba(236,72,153,0.4)] text-center whitespace-nowrap"
                >
                  Start a Project
                </Link>
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-6 py-4 text-xs sm:text-sm font-bold text-[#2D2433] shadow-xs transition-all duration-300 hover:border-pink-400 hover:bg-pink-50/50 text-center whitespace-nowrap"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}