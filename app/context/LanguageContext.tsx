// context/LanguageContext.tsx (atau app/context/LanguageContext.tsx)
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Locale, translations } from "@/data/translations";

type Language = Locale;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function resolveTranslation(locale: Language, key: string): string | undefined {
  const path = key.split(".");

  const lookupByPath = (value: unknown, segments: string[]): string | undefined => {
    if (!value || typeof value !== "object") return undefined;

    let current: any = value;
    for (const segment of segments) {
      if (!current || typeof current !== "object" || !(segment in current)) return undefined;
      current = current[segment];
    }

    return typeof current === "string" ? current : undefined;
  };

  const lookupByName = (value: unknown, target: string): string | undefined => {
    if (!value || typeof value !== "object") return undefined;

    if (target in (value as Record<string, unknown>)) {
      const candidate = (value as Record<string, unknown>)[target];
      if (typeof candidate === "string") return candidate;
    }

    for (const child of Object.values(value as Record<string, unknown>)) {
      const found = lookupByName(child, target);
      if (found) return found;
    }

    return undefined;
  };

  return lookupByPath(translations[locale], path) ?? lookupByName(translations[locale], key) ?? undefined;
}

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

  const t = (key: string, values?: Record<string, string | number>) => {
    const template =
      resolveTranslation(lang, key) ??
      resolveTranslation("en", key) ??
      String(key);

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