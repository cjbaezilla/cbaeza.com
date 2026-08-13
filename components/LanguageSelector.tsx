"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "@/context/I18nContext";
import { Language, REGION_NAMES } from "@/lib/languages";
import * as Flags from "country-flag-icons/react/3x2";
import { Globe, Search, X, Check, Sparkles } from "lucide-react";

// Componente para renderizar la bandera dinámica
function FlagIcon({ countryCode, className = "h-3.5 w-5 rounded-[2px] object-cover shrink-0" }: { countryCode: string; className?: string }) {
  const Flag = (Flags as Record<string, React.ComponentType<{ className?: string }>>)[countryCode];
  if (Flag) {
    return <Flag className={className} />;
  }
  return <Globe className="size-4 text-muted-foreground shrink-0" />;
}

export default function LanguageSelector() {
  const { locale, setLocale, currentLanguage, languages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Asegurar montaje en cliente para React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Cerrar al presionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Enfocar input al abrir y prevenir scroll en body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = "";
      setSearchQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Filtrado de idiomas por búsqueda
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return languages;
    const query = searchQuery.toLowerCase().trim();
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.nativeName.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query)
    );
  }, [languages, searchQuery]);

  // Agrupación por regiones cuando no hay búsqueda activa
  const groupedLanguages = useMemo(() => {
    if (searchQuery.trim()) {
      return [{ key: "results", title: `Resultados (${filteredLanguages.length})`, items: filteredLanguages }];
    }

    const regions: Array<{ key: Language["region"]; title: string; items: Language[] }> = [
      { key: "popular", title: REGION_NAMES.popular, items: languages.filter((l) => l.region === "popular") },
      { key: "europe", title: REGION_NAMES.europe, items: languages.filter((l) => l.region === "europe") },
      { key: "asia", title: REGION_NAMES.asia, items: languages.filter((l) => l.region === "asia") },
      { key: "middle_east_africa", title: REGION_NAMES.middle_east_africa, items: languages.filter((l) => l.region === "middle_east_africa") },
      { key: "americas", title: REGION_NAMES.americas, items: languages.filter((l) => l.region === "americas") },
    ];

    return regions.filter((group) => group.items.length > 0);
  }, [languages, searchQuery, filteredLanguages]);

  const handleSelect = (langCode: string) => {
    setLocale(langCode);
    setIsOpen(false);
  };

  const modalContent = isOpen && mounted ? (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop con Blur */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-200"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Contenedor del Modal / Sheet */}
      <div
        className="relative w-full max-w-xl bg-card/95 backdrop-blur-2xl border border-border/80 rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 flex flex-col max-h-[85dvh] sm:max-h-[80vh] overflow-hidden transition-all duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-modal-title"
      >
        {/* Indicador de arrastre para dispositivos móviles */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
        </div>

        {/* Header del Modal */}
        <div className="px-4 py-3 sm:p-5 border-b border-border/50 flex items-center justify-between gap-3 bg-card/50">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Globe className="size-5" />
            </div>
            <div>
              <h3 id="language-modal-title" className="text-base font-semibold text-foreground flex items-center gap-1.5">
                Seleccionar Idioma
                <Sparkles className="size-3.5 text-amber-500 fill-amber-500/20" />
              </h3>
              <p className="text-xs text-muted-foreground">
                Traducción instantánea (+{languages.length} idiomas)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="size-8 rounded-full border border-border/60 hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Barra de Búsqueda */}
        <div className="p-4 bg-muted/20 border-b border-border/40">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 size-4 text-muted-foreground pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar idioma (ej. Inglés, English, 日本語)..."
              className="w-full h-10 pl-10 pr-9 bg-background/90 border border-border/70 rounded-xl text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-muted-foreground hover:text-foreground p-0.5 rounded-full"
                aria-label="Limpiar búsqueda"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Lista Desplazable de Idiomas */}
        <div className="p-4 overflow-y-auto space-y-5 flex-1 divide-y divide-border/20">
          {groupedLanguages.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <Globe className="size-8 text-muted-foreground mx-auto opacity-50" />
              <p className="text-sm text-foreground font-medium">No se encontraron idiomas</p>
              <p className="text-xs text-muted-foreground">Prueba buscando con otro término</p>
            </div>
          ) : (
            groupedLanguages.map((group) => (
              <div key={group.key} className="space-y-2.5 pt-3 first:pt-0">
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase px-1">
                  {group.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {group.items.map((lang) => {
                    const isSelected = locale === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelect(lang.code)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-primary/10 border-primary/50 text-foreground shadow-xs ring-1 ring-primary/30"
                            : "bg-card/60 hover:bg-accent/80 border-border/40 text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <FlagIcon
                            countryCode={lang.countryCode}
                            className="h-4 w-6 rounded-[2px] object-cover shrink-0 shadow-xs"
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-semibold truncate leading-tight">
                              {lang.nativeName}
                            </div>
                            <div className="text-[11px] text-muted-foreground truncate">
                              {lang.name}
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="size-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 ml-2">
                            <Check className="size-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer con Indicador de Proveedor */}
        <div className="p-3 bg-muted/30 border-t border-border/40 text-center">
          <span className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
            <i className="fa-brands fa-google text-primary/80"></i>
            Traducido automáticamente con tecnología de Google Website Translator
          </span>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Botón Trigger Moderno (Mobile & Desktop) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-card/80 hover:bg-accent/80 hover:border-primary/40 text-foreground transition-all duration-200 shadow-sm cursor-pointer active:scale-95 group"
        aria-label="Cambiar idioma / Select language"
      >
        <FlagIcon countryCode={currentLanguage.countryCode} className="h-3.5 w-5 rounded-[2px] object-cover shrink-0 shadow-xs" />
        <span className="text-xs md:text-sm font-medium tracking-tight truncate max-w-[90px] sm:max-w-[120px]">
          {currentLanguage.nativeName}
        </span>
        <i className="fa-solid fa-chevron-down text-[10px] text-muted-foreground group-hover:text-foreground transition-transform duration-200"></i>
      </button>

      {/* Renderizado en Portal en document.body para evitar conflictos de stacking context con backdrop-filter del navbar */}
      {mounted && typeof document !== "undefined" && createPortal(modalContent, document.body)}
    </>
  );
}
