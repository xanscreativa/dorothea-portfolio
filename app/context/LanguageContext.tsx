// context/LanguageContext.tsx (atau app/context/LanguageContext.tsx)
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/data/translations";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: keyof typeof translations.en) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}