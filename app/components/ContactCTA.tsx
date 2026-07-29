"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import FadeUp from "@/app/components/animation/FadeUp";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const email = "dorotheaalexandra@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <FadeUp>
          <div
            id="contact"
            className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[28px] xs:rounded-[36px] sm:rounded-[48px] border border-pink-200/80 bg-gradient-to-b from-white/95 via-white/80 to-pink-50/50 p-8 sm:p-14 lg:p-16 text-center shadow-[0_32px_80px_-16px_rgba(233,106,152,0.12)] backdrop-blur-xl"
          >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-gradient-to-tr from-pink-200/30 to-transparent blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#2D2433]">
                  Available for Selected Projects
                </span>
              </div>

              <h2 className="mt-6 sm:mt-8 max-w-3xl text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#2D2433]">
                Have a visual story in mind? <br />
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                  Let’s create something iconic.
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 max-w-xl text-xs xs:text-sm sm:text-base leading-relaxed text-[#6B6570]">
                Whether you need strategic graphic design, cinematic video editing, or end-to-end visual identity—let’s build something that resonates.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <a
                  href={`mailto:${email}`}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#2D2433] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#2D2433]/15 transition-all duration-300 hover:bg-pink-600 hover:shadow-pink-500/25 active:scale-95"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={handleCopy}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3.5 text-xs font-bold text-[#2D2433] shadow-xs transition-all duration-300 hover:border-pink-300 hover:bg-pink-50/60 active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600 animate-in zoom-in-50" />
                      <span className="text-emerald-700">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-pink-500 transition-transform group-hover:scale-110" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}