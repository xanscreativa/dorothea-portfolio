"use client";

import { useState } from "react";
import FadeUp from "@/app/components/animation/FadeUp";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", handle: "Inquire Profile" },
  { name: "YouTube", href: "https://youtube.com", handle: "Showreel & Edits" },
  { name: "Instagram", href: "https://instagram.com", handle: "Daily Visuals" },
  { name: "Behance", href: "https://behance.net", handle: "Case Studies" },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "hello@xanscreativa.com"; // Email utama XANS CREATIVA

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0D0C10] py-32 text-white border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 bottom-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        
        {/* Availability Badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2.5 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-300">
              Available for Freelance & Remote Worldwide
            </span>
          </div>
        </FadeUp>

        {/* Main Title & Subtitle */}
        <FadeUp delay={0.1}>
          <h2 className="mt-8 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl tracking-tight">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500">memorable.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl leading-relaxed">
            Punya proyek baru, butuh ideasi visual, atau ingin berdiskusi seputar motion & branding? Mari terhubung!
          </p>
        </FadeUp>

        {/* Action Buttons */}
        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            {/* Primary Mailto Link */}
            <a
              href={`mailto:${email}`}
              className="group relative inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] active:scale-95"
            >
              <span>Send an Email</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10 active:scale-95"
            >
              <span>{copied ? "✓ Email Copied!" : "Copy Email Address"}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-emerald-400 px-4 py-2"
            >
              <span>💬 Chat via WhatsApp</span>
            </a>
          </div>
        </FadeUp>

        {/* Social Links Grid */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <FadeUp delay={0.3}>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-500 font-bold mb-8">
              Connect Across Platforms
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-pink-400 transition">
                      {link.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{link.handle}</p>
                  </div>
                  <span className="text-gray-500 transition-all duration-300 group-hover:text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}