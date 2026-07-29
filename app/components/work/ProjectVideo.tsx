"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { LightboxVideo } from "./LightboxVideo";

interface Props {
  thumbnail: string;
  youtubeId: string;
  title?: string;
}

export default function ProjectVideo({
  thumbnail,
  youtubeId,
  title = "Project Reel",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#FFFDFB] py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
            Project Reel
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#2D2433]">
            Watch the Project
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="group relative mt-12 block w-full overflow-hidden rounded-[30px]"
          >
            <Image
              src={thumbnail}
              alt={title}
              width={1600}
              height={900}
              className="w-full transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-xl transition duration-300 group-hover:scale-110">
                <Play
                  size={42}
                  fill="currentColor"
                  className="ml-1 text-[#2D2433]"
                />
              </div>
            </div>
          </button>
        </div>
      </section>

      <LightboxVideo
        open={open}
        youtubeId={youtubeId}
        title={title}
        onClose={() => setOpen(false)}
      />
    </>
  );
}