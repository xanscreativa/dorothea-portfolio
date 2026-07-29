"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  ArrowUp,
  Globe,
  Clock,
} from "lucide-react";

// Inline Brand Icon Components to avoid lucide-react brand export issues
const InstagramIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const BehanceIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 8h4.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0 5H3V8z" />
    <path d="M3 13h4.5" />
    <path d="M14 13.5a2.5 2.5 0 1 1 5 0V16h-5a2.5 2.5 0 0 0 2.5 2.5c1.1 0 2-.6 2.3-1.5" />
    <path d="M14.5 9.5h4" />
  </svg>
);

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavLink {
  label: string;
  href: string;
}

const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/xansstudio", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/dorotheaalexandra/", icon: LinkedinIcon },
  { label: "Behance", href: "https://behance.net/dorothealexand", icon: BehanceIcon },
  { label: "YouTube", href: "https://youtube.com/@xans.creativa", icon: YoutubeIcon },
];

const navLinks: NavLink[] = [
  { label: "Work", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const [time, setTime] = useState<string>("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FB] to-[#FFFDFC] pt-12 text-[#2D2433] border-t border-pink-100/80">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-100/60 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-100/60 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* MAIN FOOTER GRID */}
        <div className="py-10 xs:py-12 sm:py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-center lg:text-left items-center lg:items-start">
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500 text-white shadow-xs">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-black tracking-[0.2em] text-[#2D2433]">
                  XANS
                </h3>
              </div>
              <p className="mt-3 text-xs font-semibold text-pink-500 tracking-wider uppercase">
                Graphic Designer &amp; Video Editor
              </p>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#6B6570]">
                Elevating brands through clean editorial design, strategic motion, and high-impact visual storytelling.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/70 px-3.5 py-2 backdrop-blur-sm shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B6570]">
                <Globe className="h-3.5 w-3.5 text-pink-500" />
                <span>Indonesia</span>
              </div>
              <div className="h-3 w-px bg-pink-200" />
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#2D2433]">
                <Clock className="h-3.5 w-3.5 text-pink-400" />
                <span>{time || "WIB"}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3 text-center lg:text-left">
            <h4 className="text-[10px] xs:text-xs font-bold uppercase tracking-[0.25em] text-[#8B8590]">
              Navigation
            </h4>
            <ul className="flex flex-wrap justify-center lg:flex-col gap-3 lg:gap-2 text-xs font-semibold text-[#2D2433]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block transition-all duration-200 hover:text-pink-500 hover:translate-x-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <h4 className="text-[10px] xs:text-xs font-bold uppercase tracking-[0.25em] text-[#8B8590]">
              Let&apos;s Connect
            </h4>
            
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto lg:mx-0 w-full">
              {socials.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-pink-200/80 bg-white/90 p-2.5 text-xs font-semibold text-[#2D2433] shadow-2xs transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <IconComp className="h-3.5 w-3.5 text-pink-500 group-hover:text-white transition-colors" />
                      <span className="text-[11px]">{item.label}</span>
                    </div>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-200/80 to-transparent" />

        {/* BOTTOM UTILITY */}
        <div className="mt-6 flex flex-col items-center gap-4 text-center text-[11px] font-medium text-[#8B8590] xs:text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left py-4">
          <p>© {currentYear} XANS Studio. All rights reserved.</p>

          <p className="flex items-center justify-center gap-1.5">
            <span>Designed &amp; Built with</span>
            <span className="text-pink-500 animate-pulse">❤️</span>
            <span>
              by <strong className="font-bold text-[#2D2433]">XANS</strong> in Indonesia
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2D2433] transition-all duration-300 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 shadow-2xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-pink-500 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* WATERMARK */}
        <div className="pointer-events-none select-none pb-2 pt-2 text-center overflow-hidden">
          <h1 className="text-[16vw] font-black leading-none tracking-tight text-pink-200/25 sm:text-[15vw]">
            XANS
          </h1>
        </div>

      </div>
    </footer>
  );
}