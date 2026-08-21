import Link from "next/link";
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

const experiences = [
  {
    title: "Graphic Design Artist",
    date: "Feb 2024 – Present",
    company: "PT. Tera Infinity Ultima",
  },
  {
    title: "Research Project Assistant",
    date: "Jun 2022 – May 2023",
    company: "Universitas Kristen Satya Wacana (UKSW)",
    description:
      'Served as a research assistant in design and marketing for the "BaTecH" project under the Matching Fund Kedaireka 2022 program. Responsible for activity documentation and creating digital/print designs.',
  },
  {
    title: "Assistant Lecturer (Packaging Design)",
    date: "Sep 2022 – Dec 2022",
    company: "Visual Communication Design Major, SWCU",
  },
  {
    title: "Research Project Assistant",
    date: "Sep 2021 – Aug 2022",
    company: "Universitas Kristen Satya Wacana (UKSW)",
    description:
      'Assisted in design and marketing research for the "Millenial Batik Eco Fashion" project (Matching Fund Kedaireka 2021). Designed the lookbook for sustainable millennial batik fashion products and managed documentation.',
  },
  {
    title: "Graphic Designer",
    date: "Feb 2022 – Apr 2022",
    company: "Biro Promosi, Humas dan Alumni (BPHA) SWCU",
    description:
      "Handled university activity documentation, design planning, Instagram content creation, and photo editing.",
  },
  {
    title: "Assistant Lecturer (Photography)",
    date: "Sep 2021 – Dec 2021",
    company: "Visual Communication Design Major, SWCU",
  },
  {
    title: "Graphic Designer",
    date: "Aug 2021 – Nov 2021",
    company: "Dreams Studio Salatiga",
    description:
      "Collaborated on design briefs with clients, created Instagram posts, and worked as a photographer and photo editor.",
  },
];

const skills = [
  "Graphic Design",
  "Layoutting",
  "Videography",
  "Research",
  "Writing",
  "Photography",
  "Packaging Design",
  "Copywriting",
];

const software = [
  "Adobe Illustrator (Ai)",
  "Adobe Photoshop (Ps)",
  "Adobe Premiere Pro (Pr)",
  "Adobe InDesign (Id)",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#FFFDFC] text-[#2D2433] px-6 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-10 lg:px-10">
      <div className="mx-auto max-w-5xl">

        {/* =========================================
            TOP NAVIGATION
        ========================================== */}
        <div className="mb-6 flex items-center justify-start sm:mb-8 sm:justify-between">

          {/* Back to Home */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#77717A] transition-colors hover:text-pink-600 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Desktop Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-[11px] font-bold text-white shadow-lg shadow-pink-200 transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl sm:inline-flex sm:px-6 sm:py-3 sm:text-xs"
          >
            <Download className="h-4 w-4" />
            Download PDF Resume
          </a>

        </div>

        {/* =========================================
            MAIN RESUME CARD
        ========================================== */}
        <div className="overflow-hidden rounded-[26px] border border-pink-100 bg-white shadow-[0_20px_60px_rgba(45,36,51,0.10)]">

          {/* =========================================
              HEADER
          ========================================== */}
          <header className="relative overflow-hidden border-b border-pink-100 px-5 py-7 sm:px-10 sm:py-10 lg:px-12">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-100/70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-pink-50 blur-3xl" />

            <div className="relative">

              {/* Creative Professional Label */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-600">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                Creative Professional
              </div>

              <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

                {/* NAME */}
                <div>

                  <h1 className="max-w-2xl text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                    Dorothea Alexandra
                    <span className="block text-pink-500">
                      Manuputty, S.Ds
                    </span>
                  </h1>

                  <p className="mt-3 text-sm font-semibold text-[#77717A] sm:text-base">
                    Graphic Designer
                    <span className="mx-1 text-pink-300">|</span>
                    Layoutter
                    <span className="mx-1 text-pink-300">|</span>
                    Video Editor
                  </p>

                </div>

                {/* CONTACT */}
                <div className="grid gap-2.5 text-[11px] text-[#6B6570] sm:text-xs">

                  {/* Email */}
                  <a
                    href="mailto:alexandra.dorothea16@gmail.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-pink-600"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                      <Mail className="h-3.5 w-3.5" />
                    </span>

                    <span className="break-all">
                      alexandra.dorothea16@gmail.com
                    </span>
                  </a>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                      <Phone className="h-3.5 w-3.5" />
                    </span>

                    +62 851 8000 1184
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>

                    Pekanbaru, Riau, Indonesia
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-2 pt-1">

                    <a
                      href="https://www.linkedin.com/in/dorotheaalexandra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                    >
                      <span className="text-[10px] font-bold">in</span>
                      LinkedIn
                    </a>

                    <a
                      href="https://behance.com/dorotheaalexand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 px-3 py-1.5 font-medium text-[#6B6570] transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                    >
                      <Globe className="h-3 w-3" />
                      Behance
                    </a>

                  </div>

                </div>

              </div>

            </div>
          </header>

          {/* =========================================
              CONTENT
          ========================================== */}
          <div className="px-5 py-7 sm:px-10 sm:py-10 lg:px-12">

            {/* PROFESSIONAL SUMMARY */}
            <section className="mb-10">

              <SectionTitle
                icon={<BookOpen className="h-4 w-4" />}
                title="Professional Summary"
              />

              <div className="rounded-2xl bg-pink-50/60 p-4 sm:p-5">

                <p className="text-[11px] leading-[1.7] text-[#6B6570] sm:text-sm sm:leading-relaxed">
                  A Graphic Designer, Layoutter, and Video Editor with a
                  background in Visual Communication Design. Highly interested
                  in graphic design, packaging design, layout, digital
                  marketing, photography, videography, research, and
                  copywriting. Able to work independently or within a team,
                  highly adaptive, and enthusiastic about continuous learning.
                </p>

              </div>

            </section>

            {/* =========================================
                WORK EXPERIENCE
            ========================================== */}
            <section className="mb-10">

              <SectionTitle
                icon={<Briefcase className="h-4 w-4" />}
                title="Work Experience"
              />

              <div className="relative ml-1 space-y-7 border-l border-pink-200 pl-5 sm:ml-2 sm:pl-7">

                {experiences.map((experience, index) => (
                  <div
                    key={`${experience.title}-${index}`}
                    className="relative"
                  >

                    {/* Timeline Dot */}
                    <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-500 shadow-[0_0_0_3px_rgba(244,114,182,0.15)] sm:-left-[35px]" />

                    <div className="rounded-xl transition-colors hover:bg-pink-50/40 sm:p-1">

                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                        <div>

                          <h3 className="text-sm font-bold leading-snug text-[#2D2433] sm:text-base">
                            {experience.title}
                          </h3>

                          <p className="mt-1 text-[11px] font-semibold text-pink-600 sm:text-xs">
                            {experience.company}
                          </p>

                        </div>

                        <span className="w-fit shrink-0 rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">
                          {experience.date}
                        </span>

                      </div>

                      {experience.description && (
                        <p className="mt-2.5 max-w-3xl text-[10.5px] leading-[1.65] text-[#77717A] sm:text-xs sm:leading-relaxed">
                          {experience.description}
                        </p>
                      )}

                    </div>

                  </div>
                ))}

                {/* Freelance & Organizational */}
                <div className="relative">

                  <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-500 shadow-[0_0_0_3px_rgba(244,114,182,0.15)] sm:-left-[35px]" />

                  <div className="rounded-xl sm:p-1">

                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                      <h3 className="text-sm font-bold leading-snug text-[#2D2433] sm:text-base">
                        Freelance & Organizational Experience
                      </h3>

                      <span className="w-fit shrink-0 rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">
                        2018 – Present
                      </span>

                    </div>

                    <ul className="mt-3 space-y-1.5 text-[10.5px] leading-[1.6] text-[#77717A] sm:text-xs">

                      <li className="flex gap-2">
                        <span className="text-pink-400">•</span>
                        <span>
                          Graphic Design Freelancer (2022 – Present)
                        </span>
                      </li>

                      <li className="flex gap-2">
                        <span className="text-pink-400">•</span>
                        <span>
                          Content Creator at Pelkat PA GPIB Taman Sari
                          Salatiga (2018 – 2021)
                        </span>
                      </li>

                      <li className="flex gap-2">
                        <span className="text-pink-400">•</span>
                        <span>
                          Spirituality Ministry Content at SIMS Working Group
                          GPIB Children's Ministry Council (2023)
                        </span>
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </section>

            {/* =========================================
                EDUCATION
            ========================================== */}
            <section className="mb-10">

              <SectionTitle
                icon={<GraduationCap className="h-4 w-4" />}
                title="Education"
              />

              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-5">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <h3 className="text-sm font-bold text-[#2D2433] sm:text-base">
                      Satya Wacana Christian University (UKSW)
                    </h3>

                    <p className="mt-1 text-[10px] font-semibold text-pink-600 sm:text-xs">
                      Bachelor's Degree in Visual Communication Design (S.Ds)
                    </p>

                  </div>

                  <span className="w-fit rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-bold text-pink-600 sm:text-[10px]">
                    2018 – 2023
                  </span>

                </div>

              </div>

            </section>

            {/* =========================================
                SKILLS & SOFTWARE
            ========================================== */}
            <section className="mb-10">

              <SectionTitle
                icon={<Wrench className="h-4 w-4" />}
                title="Skills & Software"
              />

              <div className="grid gap-4 sm:grid-cols-2">

                {/* TOP SKILLS */}
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">

                  <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">
                    Top Skills
                  </p>

                  <div className="flex flex-wrap gap-1.5">

                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                {/* SOFTWARE */}
                <div className="rounded-2xl border border-pink-100 bg-pink-50/40 p-4 sm:p-5">

                  <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A828C]">
                    Software
                  </p>

                  <div className="flex flex-wrap gap-1.5">

                    {software.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-pink-100 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-pink-700 shadow-sm sm:text-[10px]"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </section>

            {/* =========================================
                CERTIFICATIONS & AWARDS
            ========================================== */}
            <div className="grid gap-5 lg:grid-cols-2">

              {/* CERTIFICATIONS */}
              <section>

                <SectionTitle
                  icon={<Award className="h-4 w-4" />}
                  title="Certifications"
                />

                <div className="space-y-3">

                  <AchievementCard
                    title="SHIMA (Entrepreneurship in Animation)"
                    subtitle="2020 by Kemenparekraf & AINAKI"
                  />

                  <AchievementCard
                    title="Creating UI/UX Design at Figma"
                    subtitle="2023 by Kementerian Ketenagakerjaan RI"
                  />

                </div>

              </section>

              {/* AWARDS */}
              <section>

                <SectionTitle
                  icon={<Award className="h-4 w-4" />}
                  title="Awards & Honors"
                />

                <div className="space-y-3">

                  <AchievementCard
                    title="1st Place - Logo Design Competition"
                    subtitle="63rd National Anniversary of Pelkat PA GPIB (2022)"
                  />

                  <AchievementCard
                    title="1st Place - Packaging Design"
                    subtitle="Festforatika #3 National Level (2022)"
                  />

                </div>

              </section>

            </div>

          </div>

          {/* BOTTOM PINK ACCENT */}
          <div className="h-1.5 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300" />

        </div>

        {/* =========================================
            FOOTER
        ========================================== */}
        <p className="mt-5 text-center text-[9px] font-medium text-[#A39CA5]">
          Dorothea Alexandra Manuputty · Graphic Designer · Portfolio Resume
        </p>

      </div>

      {/* =========================================
          MOBILE FLOATING DOWNLOAD BUTTON
      ========================================== */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:hidden">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/70 bg-pink-500 px-4 py-2.5 text-[10px] font-bold text-white shadow-[0_8px_30px_rgba(236,72,153,0.35)] backdrop-blur-md transition-all active:scale-95"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download Resume</span>
        </a>

      </div>

    </main>
  );
}

/* =========================================
   SECTION TITLE
========================================= */

function SectionTitle({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-sm shadow-pink-200">
        {icon}
      </div>

      <div className="flex-1">

        <h2 className="text-sm font-extrabold tracking-tight text-[#2D2433] sm:text-lg">
          {title}
        </h2>

        <div className="mt-1 h-px w-full bg-pink-100" />

      </div>

    </div>
  );
}

/* =========================================
   ACHIEVEMENT CARD
========================================= */

function AchievementCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group rounded-2xl border border-pink-100 bg-pink-50/40 p-4 transition-all hover:-translate-y-0.5 hover:border-pink-200 hover:bg-pink-50 sm:p-5">

      <div className="flex gap-3">

        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-pink-500" />

        <div>

          <p className="text-[11px] font-bold leading-snug text-[#2D2433] sm:text-xs">
            {title}
          </p>

          <p className="mt-1 text-[9px] font-medium leading-relaxed text-pink-600 sm:text-[10px]">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}