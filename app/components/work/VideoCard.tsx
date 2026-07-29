"use client";

import { useRef, useState } from "react";
import Link from "next/link";

type VideoCardProject = {
  videoSrc?: string;
  preview?: string;
  projectUrl?: string;
  href?: string;
  playlistUrl?: string;
  playlist?: string;
  orientation?: string;
  duration?: string;
  category?: string;
  title?: string;
  description?: string;
  tags?: string[];
};

export default function VideoCard({ project }: { project: VideoCardProject }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSource = project.videoSrc || project.preview;
  const projectLink = project.projectUrl || project.href;
  const playlistLink = project.playlistUrl || project.playlist;
  const isLandscape = project.orientation === "landscape";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-pink-100/80 bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(233,106,152,0.12)]">
      
      {/* Video Container */}
      <div
        className={`relative w-full overflow-hidden rounded-[22px] bg-[#1E1B22] ${
          isLandscape ? "aspect-16/9" : "aspect-9/16"
        }`}
      >
        {videoSource ? (
          <video
            ref={videoRef}
            src={videoSource}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            onLoadedData={() => {
              videoRef.current
                ?.play()
                .then(() => setIsPlaying(true))
                .catch((err) => {
                  console.error("Autoplay diblokir:", err);
                  setIsPlaying(false);
                });
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-white/50">
            No Video Source
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
          {project.duration}
        </div>

        {/* Status Indicator */}
        <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-md">
          {isPlaying ? (
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500"></span>
            </span>
          ) : (
            <svg className="h-3 w-3 text-[#2D2433] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col justify-between p-3.5 pt-4">
        <div>
          {/* Hierarki kategori disamakan dengan bagian Hero */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500 sm:tracking-[0.25em]">
            {project.category}
          </span>
          <h3 className="mt-1 text-base sm:text-lg font-black text-[#2D2433] transition-colors group-hover:text-pink-500">
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#6B6570] line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-pink-50/80 px-2.5 py-1 text-[10px] font-medium text-pink-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2 pt-2">
          {projectLink && (
            <Link
              href={projectLink}
              className="flex-1 rounded-full bg-[#E96A98] py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#d85886]"
            >
              View Project →
            </Link>
          )}
          {playlistLink && (
            <a
              href={playlistLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink-200 bg-white py-2.5 px-4 text-center text-xs font-semibold text-[#2D2433] transition hover:bg-pink-50"
            >
              Playlist →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}