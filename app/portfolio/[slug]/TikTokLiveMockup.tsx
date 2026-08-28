import Image from "next/image";
import { Heart, MessageCircle, Share2, Gift, MoreHorizontal, Send, Users } from "lucide-react";
import { GalleryItem } from "./portfolio-data";

export function TikTokLiveMockup({
  item,
  username,
  avatarImage,
  avatarText,
  avatarBg,
  title,
}: {
  item: GalleryItem;
  username: string;
  avatarImage?: string;
  avatarText: string;
  avatarBg: string;
  title: string;
}) {
  return (
    <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-[18px] bg-black shadow-[0_18px_45px_-15px_rgba(45,36,51,0.28)] sm:rounded-[22px] transform-gpu">
      {/* VIDEO / IMAGE */}
      {item.isVideo ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transform-gpu will-change-transform"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt || title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
          className="object-cover"
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-[38%] to-black/40" />

      {/* TOP HEADER */}
      <div className="absolute left-2 right-2 top-2 z-20">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-1.5">
            <div className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-gradient-to-tr shadow-lg sm:h-8 sm:w-8">
              {avatarImage ? (
                <Image
                  src={avatarImage}
                  alt={`@${username}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tr ${avatarBg} text-[7px] font-black text-white`}
                >
                  {avatarText}
                </div>
              )}
            </div>

            <div className="flex min-w-0 items-center gap-1">
              <span className="max-w-[70px] truncate text-[7px] font-bold text-white drop-shadow-md sm:max-w-[90px] sm:text-[8px]">
                @{username}
              </span>

              <span className="rounded-[3px] bg-[#FE2C55] px-1 py-[2px] text-[5px] font-black leading-none text-white sm:text-[6px]">
                LIVE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex h-5 items-center gap-1 rounded-full bg-black/25 px-1.5 text-white backdrop-blur-sm sm:h-6">
              <Users className="h-2.5 w-2.5" />
              <span className="text-[5px] font-medium sm:text-[6px]">
                1.2K
              </span>
            </div>

            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm sm:h-6 sm:w-6">
              <MoreHorizontal className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="absolute right-1 top-1/2 z-20 flex -translate-y-[20%] flex-col items-center gap-[5px] sm:right-1.5 sm:gap-[6px]">
        <div className="flex flex-col items-center">
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-[2px] sm:h-6 sm:w-6">
            <Heart
              className="h-[11px] w-[11px] fill-white sm:h-3 sm:w-3"
              strokeWidth={2.3}
            />
          </div>
          <span className="mt-[1px] text-[4px] font-semibold leading-none text-white drop-shadow-md sm:text-[5px]">
            24.8K
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-[2px] sm:h-6 sm:w-6">
            <MessageCircle
              className="h-[11px] w-[11px] fill-white sm:h-3 sm:w-3"
              strokeWidth={2.3}
            />
          </div>
          <span className="mt-[1px] text-[4px] font-semibold leading-none text-white drop-shadow-md sm:text-[5px]">
            1.8K
          </span>
        </div>

        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-[2px] sm:h-6 sm:w-6">
          <Gift
            className="h-[11px] w-[11px] sm:h-3 sm:w-3"
            strokeWidth={2.2}
          />
        </div>

        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-[2px] sm:h-6 sm:w-6">
          <Share2
            className="h-[10px] w-[10px] sm:h-[11px] sm:w-[11px]"
            strokeWidth={2.2}
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div className="absolute bottom-10 left-2 right-10 z-20 space-y-1 sm:bottom-11 sm:left-2.5">
        <div className="w-fit max-w-[90%] rounded-lg bg-black/35 px-1.5 py-1 backdrop-blur-sm">
          <p className="text-[5px] leading-tight text-white sm:text-[6px]">
            <span className="font-bold">@{username}</span> lagi live nih 🔥
          </p>
        </div>
        <div className="w-fit max-w-[90%] rounded-lg bg-black/35 px-1.5 py-1 backdrop-blur-sm">
          <p className="text-[5px] leading-tight text-white sm:text-[6px]">
            <span className="font-bold">@viewer</span> keren banget!
          </p>
        </div>
      </div>

      {/* BOTTOM INPUT */}
      <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center gap-1">
        <div className="flex h-6 flex-1 items-center rounded-full border border-white/25 bg-black/30 px-2 backdrop-blur-md sm:h-7">
          <span className="text-[5px] text-white/70 sm:text-[6px]">
            Say something...
          </span>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md sm:h-7 sm:w-7">
          <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </div>
      </div>

      {/* HOVER LABEL */}
      <div className="pointer-events-none absolute bottom-14 left-1/2 z-30 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="whitespace-nowrap rounded-full bg-white/95 px-2 py-1 text-[6px] font-mono font-bold uppercase tracking-wider text-[#2D2433] shadow-xl sm:text-[7px]">
          {title}
        </span>
      </div>
    </div>
  );
}