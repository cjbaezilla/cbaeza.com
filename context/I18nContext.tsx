"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import es from "@/messages/es.json";
import { LANGUAGES, Language } from "@/lib/languages";

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  currentLanguage: Language;
  languages: Language[];
  t: (key: string) => string | unknown[] | Record<string, unknown>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Helper para manipular las cookies de Google Translate
function setGoogleTranslateCookie(targetLang: string) {
  const host = window.location.hostname;
  const rootDomain = host.replace(/^www\./, "");

  if (targetLang === "es") {
    // Eliminar cookies para restaurar el idioma original
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${rootDomain};`;
    document.cookie = "googtrans=/es/es; path=/;";
  } else {
    document.cookie = `googtrans=/es/${targetLang}; path=/;`;
    document.cookie = `googtrans=/es/${targetLang}; path=/; domain=${host};`;
    document.cookie = `googtrans=/es/${targetLang}; path=/; domain=.${rootDomain};`;
  }
}

// Disparar evento en el combo oculto de Google Translate
function triggerGoogleTranslateCombo(targetLang: string) {
  const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
  if (combo) {
    combo.value = targetLang === "es" ? "es" : targetLang;
    combo.dispatchEvent(new Event("change"));
    return true;
  }
  return false;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<string>("es");

  const currentLanguage = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  useEffect(() => {
    // Leer idioma guardado en localStorage o de la cookie googtrans
    const saved = localStorage.getItem("locale");
    const match = document.cookie.match(/googtrans=\/es\/([^;]+)/);
    const cookieLang = match ? match[1] : null;

    const initialLang = saved || cookieLang || "es";
    const exists = LANGUAGES.some((l) => l.code === initialLang);

    if (exists && initialLang !== "es") {
      setLocaleState(initialLang);
    }
  }, []);

  useEffect(() => {
    const langObj = LANGUAGES.find((l) => l.code === locale);
    document.documentElement.dir = langObj?.dir === "rtl" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    setGoogleTranslateCookie(newLocale);

    const triggered = triggerGoogleTranslateCombo(newLocale);
    // Si el combo aún no estaba listo o se cambia por primera vez y no responde, refrescar suavemente
    if (!triggered) {
      setTimeout(() => {
        const retryTrigger = triggerGoogleTranslateCombo(newLocale);
        if (!retryTrigger) {
          window.location.reload();
        }
      }, 300);
    }
  }, []);

  const t = useCallback(
    (key: string): string | unknown[] | Record<string, unknown> => {
      const dictionary = es as Record<string, unknown>;
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
    },
    []
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, currentLanguage, languages: LANGUAGES, t }}>
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
