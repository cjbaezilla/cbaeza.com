"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";
import ar from "@/messages/ar.json";
import ru from "@/messages/ru.json";
import ja from "@/messages/ja.json";

type Locale = "es" | "en" | "zh" | "ar" | "ru" | "ja";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | unknown[] | Record<string, unknown>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved === "es" || saved === "en" || saved === "zh" || saved === "ar" || saved === "ru" || saved === "ja") {
      requestAnimationFrame(() => {
        setLocaleState(saved);
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string | unknown[] | Record<string, unknown> => {
    const dictionary = (
      locale === "es"
        ? es
        : locale === "zh"
        ? zh
        : locale === "ar"
        ? ar
        : locale === "ru"
        ? ru
        : locale === "ja"
        ? ja
        : en
    ) as Record<string, unknown>;
    const keys = key.split(".");
    let value: unknown = dictionary;
    for (const k of keys) {
      if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return value as string | unknown[] | Record<string, unknown>;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}

