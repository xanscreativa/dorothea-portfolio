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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-[28px] border border-pink-100/80 bg-white p-2.5 sm:p-3 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(233,106,152,0.12)]">
      
      {/* Video Container */}
      <div
        className={`relative w-full overflow-hidden rounded-xl sm:rounded-[22px] bg-[#1E1B22] ${
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
        {project.duration && (
          <div className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-xs">
            {project.duration}
          </div>
        )}

        {/* Status Indicator */}
        <div className="absolute top-2.5 right-2.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-md">
          {isPlaying ? (
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-pink-500"></span>
            </span>
          ) : (
            <svg className="h-3 w-3 text-[#2D2433] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col justify-between p-2 pt-3 sm:p-3.5 sm:pt-4">
        <div>
          {/* Category / Subtitle */}
          {project.category && (
            <span className="text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-pink-500 block mb-0.5">
              {project.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xs sm:text-base lg:text-lg font-black text-[#2D2433] transition-colors group-hover:text-pink-500 line-clamp-1">
            {project.title}
          </h3>

          {/* Tags / Badges */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-pink-50/80 border border-pink-100/80 px-1.5 py-0.5 text-[7px] sm:text-[9px] font-mono font-medium text-pink-600/90 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons (2 Columns Side-by-Side) */}
        <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2 border-t border-pink-100/60">
          {projectLink && (
            <Link
              href={projectLink}
              className="w-full rounded-full bg-pink-500 py-1.5 px-1 text-center text-[7.5px] sm:text-xs font-bold uppercase tracking-tighter sm:tracking-wider text-white transition hover:bg-pink-600 shadow-xs truncate"
            >
              View Project
            </Link>
          )}
          {playlistLink && (
            <a
              href={playlistLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-pink-200/80 bg-white py-1.5 px-1 text-center text-[7.5px] sm:text-xs font-bold uppercase tracking-tighter sm:tracking-wider text-[#2D2433] transition hover:bg-pink-50 truncate"
            >
              Playlist
            </a>
          )}
        </div>
      </div>
    </div>
  );
}