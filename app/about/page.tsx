import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "About | Dorothea Alexandra Manuputty",
  description:
    "Professional Graphic Designer & Video Editor specialized in visual storytelling, problem-solving, collaboration, and modern digital design systems.",
};

const careerTimeline = [
  {
    year: "2022",
    title: "Started Freelance Graphic Design",
    description: "Began partnering with clients and studios to deliver tailored visual identities, branding collateral, and digital assets.",
  },
  {
    year: "2023",
    title: "Expanded into Video Editing",
    description: "Integrated motion and video production into creative workflows, producing engaging multimedia and social content.",
  },
  {
    year: "2024",
    title: "Professional Graphic Designer",
    description: "Stepped into full-scale professional roles, managing complex digital deliverables, design systems, and cross-functional campaigns.",
  },
  {
    year: "Present",
    title: "Open to Full-Time Opportunities",
    description: "Actively seeking recruiter connections and full-time roles as a Graphic Designer & Video Editor.",
  },
];

const professionalExperience = [
  {
    title: "Graphic Designer",
    company: "Tera Infinity Ultima",
    duration: "2024 — Present",
    description: "Engineered comprehensive digital assets and visual identities that scaled brand recognition while accelerating campaign turnaround times.",
  },
  {
    title: "Video Editor & Creative Assistant",
    company: "Media & Studio Organization",
    duration: "2023 — 2024",
    description: "Produced high-impact video content, promotional reels, and multimedia narratives aligned with strategic brand objectives.",
  },
  {
    title: "Freelance Designer & Multimedia Creator",
    company: "Independent / Various Clients",
    duration: "2022 — Present",
    description: "Delivered end-to-end branding, packaging design, photo editing, and social media campaigns for diverse commercial clients.",
  },
];

const educationCard = {
  school: "Universitas Kristen Satya Wacana",
  degree: "Sarjana Desain (S.Ds) — Desain Komunikasi Visual",
  year: "2018 — 2023",
  description: "Focused on human-centered design principles, typography, semiotics, and systematic problem-solving.",
};

const certifications = [
  {
    name: "Pre-Employment Program: UI/UX Design at Figma",
    issuer: "Kementerian Ketenagakerjaan RI",
    year: "2023",
  },
  {
    name: "SHIMA (Entrepreneurship in Animation)",
    issuer: "Kemenparekraf & AINAKI",
    year: "2020",
  },
  {
    name: "National Design Competition Winner",
    issuer: "FESTFORATIKA #3",
    year: "2022",
  },
];

const softwareStack = [
  {
    category: "Graphic Design",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"],
  },
  {
    category: "Video Editing",
    tools: ["Adobe Premiere Pro", "CapCut", "After Effects", "DaVinci Resolve"],
  },
  {
    category: "UI Design",
    tools: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    category: "Productivity",
    tools: ["Notion", "Google Workspace", "Trello", "Slack"],
  },
];

const designPhilosophy = [
  {
    theme: "Empathy",
    quote: "Understanding audience needs and human emotion is the cornerstone of every impactful visual experience.",
  },
  {
    theme: "Clarity",
    quote: "Great design communicates its core message instantly before adding decorative layers.",
  },
  {
    theme: "Purpose",
    quote: "Every color choice, font weight, and transition must serve a clear strategic intention.",
  },
  {
    theme: "Storytelling",
    quote: "Visuals and motion weave narratives that forge deep connections between brands and people.",
  },
  {
    theme: "Consistency",
    quote: "Robust design systems and disciplined execution build enduring, memorable brand equity.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDFC] text-[#2D2433] selection:bg-pink-100 selection:text-pink-600 overflow-x-hidden">
      
      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-pink-100 blur-[160px] opacity-15 pointer-events-none" />
        <div className="absolute right-[-10%] top-[-5%] h-[420px] w-[420px] rounded-full bg-pink-200/20 blur-[180px] opacity-25 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            
            <div className="order-2 lg:order-1 lg:col-span-7">
              <FadeUp>
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-pink-500 mb-3.5">
                    PROFESSIONAL RESUME
                  </span>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#2D2433]">
                    About Me
                  </h1>
                  
                  <p className="mt-3 text-lg sm:text-xl font-bold text-pink-500 tracking-tight">
                    Graphic Designer &amp; Video Editor
                  </p>
                  
                  <p className="mt-6 text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                    Dedicated creative professional specializing in visual storytelling, systematic problem-solving, and cross-functional collaboration. Passionate about translating complex commercial objectives into clean, engaging, and high-impact design systems and video productions.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-pink-500 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_15px_30px_rgba(236,72,153,0.4)]"
                    >
                      Download Resume
                    </a>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-7 py-4 text-xs sm:text-sm font-bold text-[#2D2433] shadow-xs transition-all duration-300 hover:border-pink-400 hover:bg-pink-50/50"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <FadeUp>
                <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none overflow-hidden rounded-[36px] border border-pink-100/90 bg-white p-3.5 shadow-[0_24px_70px_rgba(229,135,176,0.12)]">
                  <Image
                    src="/hero/profile.png"
                    alt="Dorothea Alexandra Manuputty"
                    width={800}
                    height={950}
                    className="h-[320px] w-full rounded-[28px] object-cover object-top sm:h-[420px] lg:h-[480px]"
                    priority
                  />
                  <div className="absolute bottom-6 right-6 z-10 rounded-2xl border border-pink-100/90 bg-white/95 px-5 py-4 shadow-[0_15px_35px_rgba(45,36,51,0.08)] backdrop-blur-md">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 mb-0.5">
                      EXPERIENCE
                    </span>
                    <p className="text-3xl font-black tracking-tighter text-[#2D2433]">
                      4+ Years
                    </p>
                    <span className="block text-[11px] font-medium text-[#6B6570] tracking-wide">
                      Design &amp; Media
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Career Timeline */}
      <section className="py-20 bg-[#FFF8FA] border-y border-pink-100/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                MILESTONES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Career Timeline
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {careerTimeline.map((item, index) => (
              <FadeUp key={item.year} delay={index * 0.08}>
                <div className="h-full rounded-[26px] border border-pink-100/80 bg-white p-6 shadow-[0_10px_30px_rgba(229,135,176,.05)] flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-pink-50 px-3.5 py-1 text-xs font-black text-pink-500 mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-base font-black text-[#2D2433] mb-2">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#6B6570]">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Professional Experience */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                WORK HISTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Professional Experience
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalExperience.map((exp, index) => (
              <FadeUp key={exp.title} delay={index * 0.1}>
                <div className="h-full rounded-[30px] border border-pink-100/90 bg-[#FFFDFC] p-8 shadow-[0_15px_40px_rgba(229,135,176,.06)] flex flex-col justify-between hover:border-pink-300 transition-all duration-300">
                  <div>
                    <span className="inline-block rounded-full bg-pink-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-500 mb-4">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-black text-[#2D2433] tracking-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-pink-500 mb-4">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Education */}
      <section className="py-20 bg-[#FFF8FA] border-t border-pink-100/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                ACADEMIC BACKGROUND
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Education
              </h2>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="rounded-[32px] border border-pink-100/80 bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(229,135,176,.06)] max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <span className="inline-flex rounded-full bg-pink-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-pink-500 w-fit">
                  {educationCard.year}
                </span>
                <span className="text-xs font-bold text-[#6B6570] uppercase tracking-widest">
                  {educationCard.school}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#2D2433] tracking-tight mb-3">
                {educationCard.degree}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                {educationCard.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 5: Certifications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                CREDENTIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Certifications &amp; Recognition
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <FadeUp key={cert.name} delay={index * 0.08}>
                <div className="h-full rounded-[26px] border border-pink-100/80 bg-[#FFFDFC] p-7 shadow-[0_10px_30px_rgba(229,135,176,.04)] flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pink-500 mb-3">
                      {cert.year}
                    </span>
                    <h3 className="text-base font-black text-[#2D2433] mb-2">{cert.name}</h3>
                    <p className="text-xs font-medium text-[#6B6570]">{cert.issuer}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Software Stack */}
      <section className="py-20 bg-[#FFF8FA] border-y border-pink-100/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                EXPERTISE &amp; TOOLS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Software Stack
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareStack.map((stack, index) => (
              <FadeUp key={stack.category} delay={index * 0.08}>
                <div className="h-full rounded-[28px] border border-pink-100/80 bg-white p-7 shadow-[0_15px_40px_rgba(229,135,176,.05)]">
                  <h3 className="text-base font-black text-[#2D2433] mb-4 pb-3 border-b border-pink-50">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-pink-50/80 px-3 py-1.5 text-xs font-semibold text-[#2D2433] border border-pink-100/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Design Philosophy */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-2">
                EDITORIAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2D2433]">
                Design Philosophy
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {designPhilosophy.map((item, index) => (
              <FadeUp key={item.theme} delay={index * 0.06}>
                <div className="h-full rounded-[26px] border border-pink-100/80 bg-[#FFFDFC] p-6 shadow-[0_10px_30px_rgba(229,135,176,.04)] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500 block mb-3">
                      {item.theme}
                    </span>
                    <p className="text-xs leading-relaxed text-[#6B6570] italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="relative overflow-hidden bg-[#FFF8FA] py-20 sm:py-28 lg:py-32 border-t border-pink-100/60">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="rounded-[36px] border border-pink-100/80 bg-white p-8 sm:p-14 lg:p-16 text-center shadow-[0_30px_70px_rgba(229,135,176,.1)]">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-3">
                READY FOR THE NEXT STEP
              </span>
              
              <h2 className="mx-auto mt-2 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#2D2433]">
                Let&apos;s Create Something Meaningful
              </h2>
              
              <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#6B6570]">
                Whether you are looking for a dedicated Graphic Designer, Video Editor, or a creative team member, let&apos;s connect.
              </p>
              
              <div className="mt-8 flex flex-row items-center justify-center gap-3.5 w-full max-w-sm mx-auto">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_15px_30px_rgba(236,72,153,0.4)] text-center whitespace-nowrap"
                >
                  Download Resume
                </a>
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-6 py-4 text-xs sm:text-sm font-bold text-[#2D2433] shadow-xs transition-all duration-300 hover:border-pink-400 hover:bg-pink-50/50 text-center whitespace-nowrap"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}