export interface Language {
  code: string; // Código de Google Translate
  name: string; // Nombre en Español
  nativeName: string; // Nombre en el idioma nativo
  countryCode: string; // Código ISO para la bandera de country-flag-icons
  region: "popular" | "europe" | "asia" | "americas" | "middle_east_africa";
  dir?: "ltr" | "rtl";
}

export const LANGUAGES: Language[] = [
  // ==========================================
  // 1. Idiomas Populares / Globales
  // ==========================================
  { code: "es", name: "Español", nativeName: "Español", countryCode: "ES", region: "popular", dir: "ltr" },
  { code: "en", name: "Inglés", nativeName: "English", countryCode: "US", region: "popular", dir: "ltr" },
  { code: "zh-CN", name: "Chino Simplificado", nativeName: "简体中文", countryCode: "CN", region: "popular", dir: "ltr" },
  { code: "zh-TW", name: "Chino Tradicional", nativeName: "繁體中文", countryCode: "TW", region: "popular", dir: "ltr" },
  { code: "pt", name: "Portugués", nativeName: "Português", countryCode: "BR", region: "popular", dir: "ltr" },
  { code: "fr", name: "Francés", nativeName: "Français", countryCode: "FR", region: "popular", dir: "ltr" },
  { code: "de", name: "Alemán", nativeName: "Deutsch", countryCode: "DE", region: "popular", dir: "ltr" },
  { code: "ja", name: "Japonés", nativeName: "日本語", countryCode: "JP", region: "popular", dir: "ltr" },
  { code: "ar", name: "Árabe", nativeName: "العربية", countryCode: "SA", region: "popular", dir: "rtl" },
  { code: "ru", name: "Ruso", nativeName: "Русский", countryCode: "RU", region: "popular", dir: "ltr" },
  { code: "ko", name: "Coreano", nativeName: "한국어", countryCode: "KR", region: "popular", dir: "ltr" },
  { code: "it", name: "Italiano", nativeName: "Italiano", countryCode: "IT", region: "popular", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", region: "popular", dir: "ltr" },
  { code: "tr", name: "Turco", nativeName: "Türkçe", countryCode: "TR", region: "popular", dir: "ltr" },
  { code: "nl", name: "Holandés", nativeName: "Nederlands", countryCode: "NL", region: "popular", dir: "ltr" },
  { code: "pl", name: "Polaco", nativeName: "Polski", countryCode: "PL", region: "popular", dir: "ltr" },
  { code: "id", name: "Indonesio", nativeName: "Bahasa Indonesia", countryCode: "ID", region: "popular", dir: "ltr" },
  { code: "vi", name: "Vietnamita", nativeName: "Tiếng Việt", countryCode: "VN", region: "popular", dir: "ltr" },
  { code: "th", name: "Tailandés", nativeName: "ไทย", countryCode: "TH", region: "popular", dir: "ltr" },

  // ==========================================
  // 2. Europa
  // ==========================================
  { code: "sv", name: "Sueco", nativeName: "Svenska", countryCode: "SE", region: "europe", dir: "ltr" },
  { code: "no", name: "Noruego", nativeName: "Norsk", countryCode: "NO", region: "europe", dir: "ltr" },
  { code: "da", name: "Danés", nativeName: "Dansk", countryCode: "DK", region: "europe", dir: "ltr" },
  { code: "fi", name: "Finlandés", nativeName: "Suomi", countryCode: "FI", region: "europe", dir: "ltr" },
  { code: "is", name: "Islandés", nativeName: "Íslenska", countryCode: "IS", region: "europe", dir: "ltr" },
  { code: "el", name: "Griego", nativeName: "Ελληνικά", countryCode: "GR", region: "europe", dir: "ltr" },
  { code: "cs", name: "Checo", nativeName: "Čeština", countryCode: "CZ", region: "europe", dir: "ltr" },
  { code: "sk", name: "Eslovaco", nativeName: "Slovenčina", countryCode: "SK", region: "europe", dir: "ltr" },
  { code: "hu", name: "Húngaro", nativeName: "Magyar", countryCode: "HU", region: "europe", dir: "ltr" },
  { code: "ro", name: "Rumano", nativeName: "Română", countryCode: "RO", region: "europe", dir: "ltr" },
  { code: "bg", name: "Búlgaro", nativeName: "Български", countryCode: "BG", region: "europe", dir: "ltr" },
  { code: "uk", name: "Ucraniano", nativeName: "Українська", countryCode: "UA", region: "europe", dir: "ltr" },
  { code: "be", name: "Bielorruso", nativeName: "Беларуская", countryCode: "BY", region: "europe", dir: "ltr" },
  { code: "hr", name: "Croata", nativeName: "Hrvatski", countryCode: "HR", region: "europe", dir: "ltr" },
  { code: "sr", name: "Serbio", nativeName: "Српски", countryCode: "RS", region: "europe", dir: "ltr" },
  { code: "bs", name: "Bosnio", nativeName: "Bosanski", countryCode: "BA", region: "europe", dir: "ltr" },
  { code: "sl", name: "Esloveno", nativeName: "Slovenščina", countryCode: "SI", region: "europe", dir: "ltr" },
  { code: "mk", name: "Macedonio", nativeName: "Македонски", countryCode: "MK", region: "europe", dir: "ltr" },
  { code: "sq", name: "Albanés", nativeName: "Shqip", countryCode: "AL", region: "europe", dir: "ltr" },
  { code: "lt", name: "Lituano", nativeName: "Lietuvių", countryCode: "LT", region: "europe", dir: "ltr" },
  { code: "lv", name: "Letón", nativeName: "Latviešu", countryCode: "LV", region: "europe", dir: "ltr" },
  { code: "et", name: "Estonio", nativeName: "Eesti", countryCode: "EE", region: "europe", dir: "ltr" },
  { code: "ga", name: "Irlandés", nativeName: "Gaeilge", countryCode: "IE", region: "europe", dir: "ltr" },
  { code: "cy", name: "Galés", nativeName: "Cymraeg", countryCode: "GB", region: "europe", dir: "ltr" },
  { code: "ca", name: "Catalán", nativeName: "Català", countryCode: "AD", region: "europe", dir: "ltr" },
  { code: "eu", name: "Euskera (Vasco)", nativeName: "Euskara", countryCode: "ES", region: "europe", dir: "ltr" },
  { code: "gl", name: "Gallego", nativeName: "Galego", countryCode: "ES", region: "europe", dir: "ltr" },
  { code: "mt", name: "Maltés", nativeName: "Malti", countryCode: "MT", region: "europe", dir: "ltr" },
  { code: "lb", name: "Luxemburgués", nativeName: "Lëtzebuergesch", countryCode: "LU", region: "europe", dir: "ltr" },
  { code: "la", name: "Latín", nativeName: "Latina", countryCode: "VA", region: "europe", dir: "ltr" },

  // ==========================================
  // 3. Asia y Pacífico
  // ==========================================
  { code: "tl", name: "Filipino (Tagalo)", nativeName: "Tagalog", countryCode: "PH", region: "asia", dir: "ltr" },
  { code: "ms", name: "Malayo", nativeName: "Bahasa Melayu", countryCode: "MY", region: "asia", dir: "ltr" },
  { code: "bn", name: "Bengalí", nativeName: "বাংলা", countryCode: "BD", region: "asia", dir: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", countryCode: "PK", region: "asia", dir: "rtl" },
  { code: "my", name: "Birmano", nativeName: "မြန်မာစာ", countryCode: "MM", region: "asia", dir: "ltr" },
  { code: "km", name: "Jemer (Camboyano)", nativeName: "ភាសាខ្មែរ", countryCode: "KH", region: "asia", dir: "ltr" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ", countryCode: "LA", region: "asia", dir: "ltr" },
  { code: "mn", name: "Mongol", nativeName: "Монгол", countryCode: "MN", region: "asia", dir: "ltr" },
  { code: "pa", name: "Panyabí", nativeName: "ਪੰਜਾਬੀ", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "gu", name: "Guyaratí", nativeName: "ગુજરાતી", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "mr", name: "Maratí", nativeName: "मराठी", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "kn", name: "Canarés", nativeName: "ಕನ್ನಡ", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", countryCode: "IN", region: "asia", dir: "ltr" },
  { code: "si", name: "Cingalés", nativeName: "සිංහල", countryCode: "LK", region: "asia", dir: "ltr" },
  { code: "ne", name: "Nepalí", nativeName: "नेपाली", countryCode: "NP", region: "asia", dir: "ltr" },
  { code: "kk", name: "Kazajo", nativeName: "Қазақша", countryCode: "KZ", region: "asia", dir: "ltr" },
  { code: "uz", name: "Uzbeko", nativeName: "Oʻzbekcha", countryCode: "UZ", region: "asia", dir: "ltr" },
  { code: "az", name: "Azerbaiyano", nativeName: "Azərbaycanca", countryCode: "AZ", region: "asia", dir: "ltr" },
  { code: "ka", name: "Georgiano", nativeName: "ქართული", countryCode: "GE", region: "asia", dir: "ltr" },
  { code: "hy", name: "Armenio", nativeName: "Հայերեն", countryCode: "AM", region: "asia", dir: "ltr" },

  // ==========================================
  // 4. Medio Oriente y África
  // ==========================================
  { code: "he", name: "Hebreo", nativeName: "עברית", countryCode: "IL", region: "middle_east_africa", dir: "rtl" },
  { code: "fa", name: "Persa", nativeName: "فارسی", countryCode: "IR", region: "middle_east_africa", dir: "rtl" },
  { code: "ps", name: "Pastún", nativeName: "پښتو", countryCode: "AF", region: "middle_east_africa", dir: "rtl" },
  { code: "ku", name: "Kurdo", nativeName: "Kurdî", countryCode: "TR", region: "middle_east_africa", dir: "rtl" },
  { code: "sw", name: "Suajili", nativeName: "Kiswahili", countryCode: "KE", region: "middle_east_africa", dir: "ltr" },
  { code: "am", name: "Amárico", nativeName: "አማርኛ", countryCode: "ET", region: "middle_east_africa", dir: "ltr" },
  { code: "yo", name: "Yoruba", nativeName: "Èdè Yorùbá", countryCode: "NG", region: "middle_east_africa", dir: "ltr" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo", countryCode: "NG", region: "middle_east_africa", dir: "ltr" },
  { code: "ha", name: "Hausa", nativeName: "Harshen Hausa", countryCode: "NG", region: "middle_east_africa", dir: "ltr" },
  { code: "zu", name: "Zulú", nativeName: "isiZulu", countryCode: "ZA", region: "middle_east_africa", dir: "ltr" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", countryCode: "ZA", region: "middle_east_africa", dir: "ltr" },
  { code: "af", name: "Afrikáans", nativeName: "Afrikaans", countryCode: "ZA", region: "middle_east_africa", dir: "ltr" },
  { code: "so", name: "Somalí", nativeName: "Af Soomaali", countryCode: "SO", region: "middle_east_africa", dir: "ltr" },
  { code: "mg", name: "Malgache", nativeName: "Malagasy", countryCode: "MG", region: "middle_east_africa", dir: "ltr" },

  // ==========================================
  // 5. América (Lenguas originarias y criollas)
  // ==========================================
  { code: "qu", name: "Quechua", nativeName: "Runa Simi", countryCode: "PE", region: "americas", dir: "ltr" },
  { code: "gn", name: "Guaraní", nativeName: "Avañe'ẽ", countryCode: "PY", region: "americas", dir: "ltr" },
  { code: "ay", name: "Aimara", nativeName: "Aymar aru", countryCode: "BO", region: "americas", dir: "ltr" },
  { code: "ht", name: "Criollo Haitiano", nativeName: "Kreyòl Ayisyen", countryCode: "HT", region: "americas", dir: "ltr" }
];

export const REGION_NAMES: Record<Language["region"], string> = {
  popular: "🔥 Populares y Globales",
  europe: "🇪🇺 Europa",
  asia: "🌏 Asia y Pacífico",
  middle_east_africa: "🌍 Medio Oriente y África",
  americas: "🌎 América (Lenguas Originarias y Regionales)",
};
