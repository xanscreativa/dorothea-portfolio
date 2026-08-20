// components/ui/LanguageToggle.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase border border-neutral-300 rounded-full hover:border-black dark:border-neutral-700 dark:hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer bg-transparent"
      title="Switch Language"
    >
      <span>{lang === "en" ? "ID 🇮🇩" : "EN 🇬🇧"}</span>
    </button>
  );
}