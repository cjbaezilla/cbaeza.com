export interface Language {
  code: string; // Código de Google Translate (ej. 'en', 'zh-CN', 'ar', etc.)
  name: string; // Nombre en Español
  nativeName: string; // Nombre en el idioma nativo
  countryCode: string; // Código ISO para la bandera de country-flag-icons
  region: "popular" | "europe" | "asia" | "americas" | "middle_east_africa";
  dir?: "ltr" | "rtl";
}

export const LANGUAGES: Language[] = [
  // Idiomas Populares / Principales
  { code: "es", name: "Español", nativeName: "Español", countryCode: "ES", region: "popular", dir: "ltr" },
  { code: "en", name: "Inglés", nativeName: "English", countryCode: "US", region: "popular", dir: "ltr" },
  { code: "zh-CN", name: "Chino Simplificado", nativeName: "简体中文", countryCode: "CN", region: "popular", dir: "ltr" },
  { code: "pt", name: "Portugués", nativeName: "Português", countryCode: "BR", region: "popular", dir: "ltr" },
  { code: "fr", name: "Francés", nativeName: "Français", countryCode: "FR", region: "popular", dir: "ltr" },
  { code: "de", name: "Alemán", nativeName: "Deutsch", countryCode: "DE", region: "popular", dir: "ltr" },
  { code: "ja", name: "Japonés", nativeName: "日本語", countryCode: "JP", region: "popular", dir: "ltr" },
  { code: "ar", name: "Árabe", nativeName: "العربية", countryCode: "SA", region: "popular", dir: "rtl" },
  { code: "ru", name: "Ruso", nativeName: "Русский", countryCode: "RU", region: "popular", dir: "ltr" },
  { code: "ko", name: "Coreano", nativeName: "한국어", countryCode: "KR", region: "popular", dir: "ltr" },
  { code: "it", name: "Italiano", nativeName: "Italiano", countryCode: "IT", region: "popular", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", region: "popular", dir: "ltr" },

  // Europa
  { code: "nl", name: "Holandés", nativeName: "Nederlands", countryCode: "NL", region: "europe", dir: "ltr" },
  { code: "pl", name: "Polaco", nativeName: "Polski", countryCode: "PL", region: "europe", dir: "ltr" },
  { code: "sv", name: "Sueco", nativeName: "Svenska", countryCode: "SE", region: "europe", dir: "ltr" },
  { code: "no", name: "Noruego", nativeName: "Norsk", countryCode: "NO", region: "europe", dir: "ltr" },
  { code: "da", name: "Danés", nativeName: "Dansk", countryCode: "DK", region: "europe", dir: "ltr" },
  { code: "fi", name: "Finlandés", nativeName: "Suomi", countryCode: "FI", region: "europe", dir: "ltr" },
  { code: "el", name: "Griego", nativeName: "Ελληνικά", countryCode: "GR", region: "europe", dir: "ltr" },
  { code: "cs", name: "Checo", nativeName: "Čeština", countryCode: "CZ", region: "europe", dir: "ltr" },
  { code: "ro", name: "Rumano", nativeName: "Română", countryCode: "RO", region: "europe", dir: "ltr" },
  { code: "hu", name: "Húngaro", nativeName: "Magyar", countryCode: "HU", region: "europe", dir: "ltr" },
  { code: "uk", name: "Ucraniano", nativeName: "Українська", countryCode: "UA", region: "europe", dir: "ltr" },

  // Asia y Pacífico
  { code: "zh-TW", name: "Chino Tradicional", nativeName: "繁體中文", countryCode: "TW", region: "asia", dir: "ltr" },
  { code: "vi", name: "Vietnamita", nativeName: "Tiếng Việt", countryCode: "VN", region: "asia", dir: "ltr" },
  { code: "th", name: "Tailandés", nativeName: "ไทย", countryCode: "TH", region: "asia", dir: "ltr" },
  { code: "id", name: "Indonesio", nativeName: "Bahasa Indonesia", countryCode: "ID", region: "asia", dir: "ltr" },
  { code: "tl", name: "Filipino (Tagalo)", nativeName: "Tagalog", countryCode: "PH", region: "asia", dir: "ltr" },
  { code: "ms", name: "Malayo", nativeName: "Bahasa Melayu", countryCode: "MY", region: "asia", dir: "ltr" },
  { code: "bn", name: "Bengalí", nativeName: "বাংলা", countryCode: "BD", region: "asia", dir: "ltr" },

  // Medio Oriente y África
  { code: "tr", name: "Turco", nativeName: "Türkçe", countryCode: "TR", region: "middle_east_africa", dir: "ltr" },
  { code: "he", name: "Hebreo", nativeName: "עברית", countryCode: "IL", region: "middle_east_africa", dir: "rtl" },
  { code: "fa", name: "Persa", nativeName: "فارسی", countryCode: "IR", region: "middle_east_africa", dir: "rtl" },
  { code: "sw", name: "Suajili", nativeName: "Kiswahili", countryCode: "KE", region: "middle_east_africa", dir: "ltr" }
];

export const REGION_NAMES: Record<Language["region"], string> = {
  popular: "Idiomas Populares",
  europe: "Europa",
  asia: "Asia y Pacífico",
  americas: "América",
  middle_east_africa: "Medio Oriente y África",
};
