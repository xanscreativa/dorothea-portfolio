// context/LanguageContext.tsx (atau app/context/LanguageContext.tsx)
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations } from "@/data/translations";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: keyof typeof translations.en, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("xans-language");
    if (savedLanguage === "en" || savedLanguage === "id") setLang(savedLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("xans-language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: keyof typeof translations.en, values?: Record<string, string | number>) => {
    const template = translations[lang][key] || translations.en[key] || String(key);

    return values
      ? template.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`))
      : template;
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