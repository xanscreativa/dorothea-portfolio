"use client";

import VideoCard from "./work/VideoCard";

const videoWorks = [
  {
    id: "data-wak-atom",
    category: "TRADING CAMPAIGN",
    title: "Data Wak Atom",
    description: "Short-form educational videos for trading campaigns and social media.",
    tags: ["Video Editing", "Motion Graphics", "TikTok", "Reels"],
    duration: "0:18",
    orientation: "portrait",
    videoSrc: "/videos/previews/data-wak-atom.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLC-2LDqQA69k",
  },
  {
    id: "sinyal-ordal",
    category: "FINANCIAL EDUCATION",
    title: "Sinyal Ordal",
    description: "Creative short-form videos for financial education content.",
    tags: ["Video Editing", "Short Form"],
    duration: "0:26",
    orientation: "portrait",
    videoSrc: "/videos/previews/sinyal-ordal.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLBP7Y-YeCoHM",
  },
  {
    id: "raka-trabas",
    category: "TRADING EDUCATION",
    title: "Raka Trabas",
    description: "Creative video editing for educational trading campaigns.",
    tags: ["Video Editing", "Motion Graphics"],
    duration: "0:31",
    orientation: "portrait",
    videoSrc: "/videos/previews/raka-trabas.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLQXQaMgBqo50",
  },
  {
    id: "gte",
    category: "GOLD TRADING EDUCATION",
    title: "GTE",
    description: "Educational videos focused on international gold trading.",
    tags: ["Video Editing", "Educational"],
    duration: "0:24",
    orientation: "portrait",
    videoSrc: "/videos/previews/gte.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLa1ey4tTciqI",
  },
  {
    id: "gpib",
    category: "CHURCH MEDIA",
    title: "GPIB Immanuel Pekanbaru",
    description: "Church announcements, Easter campaigns, Christmas events, and ministry videos.",
    tags: ["Church Media", "Video Editing", "AI Video"],
    duration: "0:20",
    orientation: "landscape",
    videoSrc: "/videos/previews/gpib.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLExudwMXswLA",
  },
];

export default function FilmsSection() {
  return (
    <section id="films" className="relative bg-[#FFFDFC] py-14 sm:py-24 lg:py-32">
      <div className="mx-auto w-[88%] max-w-7xl sm:w-[92%]">
        
        {/* Section Header - Disesuaikan hierarkinya agar selaras dengan Hero */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 sm:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
            PORTFOLIO FILMS
          </p>
          <h2 className="mt-0.5 text-2xl font-black leading-tight tracking-tight text-[#2D2433] sm:mt-2 sm:text-4xl lg:text-5xl">
            Selected Video Works
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {videoWorks.map((project) => {
            const isGPIB = project.id === "gpib" || project.title.toLowerCase().includes("gpib");

            return (
              <div
                key={project.id}
                className={
                  isGPIB
                    ? "md:col-span-2 xl:col-span-2 xl:col-start-2"
                    : ""
                }
              >
                <VideoCard project={project} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}