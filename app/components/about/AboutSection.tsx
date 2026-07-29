"use client";

import FadeUp from "../animation/FadeUp";

const skills = [
  {
    category: "Motion & Video",
    items: ["Video Editing", "Motion Graphics", "3D Motion", "Short-Form Content", "AI Assisted Visuals"],
  },
  {
    category: "Branding & Identity",
    items: ["Visual Identity", "Brand Strategy", "Logo Systems", "Brand Guidelines", "Design Systems"],
  },
  {
    category: "Digital & Social",
    items: ["Campaign Visuals", "Social Media Kits", "Poster Design", "Church Media & Livestream Visuals"],
  },
];

const tools = [
  "After Effects",
  "Premiere Pro",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Blender",
  "Midjourney",
  "DaVinci Resolve",
];

const workflow = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Memahami esensi merek, menganalisis audiens, dan menetapkan fondasi konsep visual yang kuat.",
  },
  {
    step: "02",
    title: "Concept & Direction",
    description: "Merancang moodboard, kembangan gaya visual, storyboard, serta eksplorasi elemen motion.",
  },
  {
    step: "03",
    title: "Execution & Motion",
    description: "Memroduksi aset, proses editing, animasi, color grading, dan pengasahan detail hingga presisi.",
  },
  {
    step: "04",
    title: "Delivery & Impact",
    description: "Menyerahkan aset akhir multi-format yang siap pakai untuk ekosistem media digital.",
  },
];

const experiences = [
  {
    role: "Lead Creative & Motion Designer",
    company: "Creative Studio / Freelance",
    period: "2023 — Present",
    description: "Memimpin pembuatan identitas merek, kampanye visual, dan video motion untuk berbagai klien.",
  },
  {
    role: "Media & Motion Designer",
    company: "Church Media Team",
    period: "2021 — 2023",
    description: "Bertanggung jawab atas visual panggung, *livestream graphics*, serta materi promosi mingguan.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0D0C10] py-32 text-white">
      {/* Background Subtle Ambient Light */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl">
        {/* 1. MANIFESTO / HEADLINE */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500 font-bold">
            ABOUT THE STUDIO
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Designing meaningful visual experiences through branding, motion, and storytelling.
          </h2>
        </FadeUp>

        {/* 2. PHILOSOPHY & STORY */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 border-b border-white/10 pb-20">
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-300">
                Setiap frame, bentuk, dan gerakan memiliki peran penting dalam menyampaikan pesan. Pendekatan saya berfokus pada penggabungan fondasi desain grafis yang kuat dengan dinamika *motion design* modern untuk menciptakan karya yang tidak hanya estetik, tetapi juga fungsional.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Baik itu membangun identitas visual baru dari awal, merancang animasi promo, maupun memproduksi media kreatif untuk kebutuhan gereja dan korporat, fokus utamanya selalu sama: memberikan dampak visual yang memorable bagi audiens.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <FadeUp delay={0.2}>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">Status</p>
                <p className="text-2xl font-bold text-white">Available for Freelance & Remote Projects</p>
                <p className="text-sm text-gray-400">Berbasis di Indonesia • Melayani klien di seluruh dunia.</p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* 3. SKILLS & TOOLS */}
        <div className="mt-20 border-b border-white/10 pb-20">
          <FadeUp>
            <h3 className="text-2xl font-bold text-white mb-10">Capabilities & Tools</h3>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Core Skills */}
            <div className="lg:col-span-8 grid gap-8 md:grid-cols-3">
              {skills.map((group, idx) => (
                <FadeUp key={group.category} delay={idx * 0.1}>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-pink-500 font-bold mb-4">
                      {group.category}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Tools Stack */}
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-8">
              <FadeUp delay={0.3}>
                <h4 className="text-sm uppercase tracking-wider text-pink-500 font-bold mb-4">
                  Tools & Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-gray-200 transition hover:border-pink-500/50 hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* 4. WORKFLOW */}
        <div className="mt-20 border-b border-white/10 pb-20">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-pink-500 font-bold">Process</p>
            <h3 className="mt-2 text-3xl font-black text-white">How I Work</h3>
          </FadeUp>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, idx) => (
              <FadeUp key={item.step} delay={idx * 0.1}>
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 h-full flex flex-col justify-between hover:border-pink-500/30 transition">
                  <div>
                    <span className="text-4xl font-black text-pink-500/40">{item.step}</span>
                    <h4 className="mt-4 text-xl font-bold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* 5. EXPERIENCE */}
        <div className="mt-20">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-pink-500 font-bold">Journey</p>
            <h3 className="mt-2 text-3xl font-black text-white">Selected Experience</h3>
          </FadeUp>

          <div className="mt-10 space-y-6">
            {experiences.map((exp, idx) => (
              <FadeUp key={exp.role} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/[0.07]">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-sm text-pink-400 mt-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-2 max-w-xl">{exp.description}</p>
                  </div>
                  <span className="mt-4 md:mt-0 text-xs font-mono text-gray-500 bg-white/10 px-4 py-2 rounded-full w-max">
                    {exp.period}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}