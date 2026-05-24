"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/I18nContext";
import { ES, US, CN, SA, RU, JP, BR } from "country-flag-icons/react/3x2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para realizar un desplazamiento suave hacia un elemento por su ID o al inicio si es "publications"
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    if (id === "publications") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", href);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  const navLinks = [
    { href: "#publications", label: t("nav.publications") as string },
    { href: "#projects", label: t("nav.projects") as string },
    { href: "#foundations", label: t("nav.foundations") as string },
    { href: "#background", label: t("nav.background") as string },
    { href: "#certifications", label: t("nav.certifications") as string },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md px-4 md:px-[8%] lg:px-[12%] py-3">
      <div className="flex items-center justify-between">
        {/* Contenedor Izquierdo: Botón Menú Móvil + Logo */}
        <div className="flex items-center gap-3">
          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent cursor-pointer transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} size-4 flex items-center justify-center`}></i>
          </button>

          {/* Logo de Carlos */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={177}
              height={32}
              className="h-6 md:h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Links Escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Lado Derecho: Controles (Escritorio y Móvil) */}
        <div className="flex items-center gap-4">
          {/* Acciones y Controles (Escritorio) */}
          <div className="hidden md:block">
            <Select value={locale} onValueChange={(val) => setLocale(val as "es" | "en" | "zh" | "ar" | "ru" | "ja" | "pt")}>
              <SelectTrigger className="w-[130px] h-9 text-sm cursor-pointer">
                <span className="flex items-center gap-2">
                  {locale === "es" ? (
                    <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "zh" ? (
                    <CN className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ar" ? (
                    <SA className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ru" ? (
                    <RU className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ja" ? (
                    <JP className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "pt" ? (
                    <BR className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : (
                    <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  )}
                  <SelectValue>
                    {(value: string | null) =>
                      value === "es" ? "Español" : value === "zh" ? "简体中文" : value === "ar" ? "العربية" : value === "ru" ? "Русский" : value === "ja" ? "日本語" : value === "pt" ? "Português" : "English"
                    }
                  </SelectValue>
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Español</span>
                  </span>
                </SelectItem>
                <SelectItem value="en" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>English</span>
                  </span>
                </SelectItem>
                <SelectItem value="zh" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <CN className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>简体中文</span>
                  </span>
                </SelectItem>
                <SelectItem value="ar" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <SA className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>العربية</span>
                  </span>
                </SelectItem>
                <SelectItem value="ru" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <RU className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Русский</span>
                  </span>
                </SelectItem>
                <SelectItem value="ja" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <JP className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>日本語</span>
                  </span>
                </SelectItem>
                <SelectItem value="pt" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <BR className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Português</span>
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Selector de Idioma (Móvil) */}
          <div className="block md:hidden">
            <Select value={locale} onValueChange={(val) => setLocale(val as "es" | "en" | "zh" | "ar" | "ru" | "ja" | "pt")}>
              <SelectTrigger className="w-[120px] h-8 text-xs cursor-pointer">
                <span className="flex items-center gap-1.5">
                  {locale === "es" ? (
                    <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "zh" ? (
                    <CN className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ar" ? (
                    <SA className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ru" ? (
                    <RU className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "ja" ? (
                    <JP className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : locale === "pt" ? (
                    <BR className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  ) : (
                    <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                  )}
                  <SelectValue>
                    {(value: string | null) =>
                      value === "es" ? "Español" : value === "zh" ? "简体中文" : value === "ar" ? "العربية" : value === "ru" ? "Русский" : value === "ja" ? "日本語" : value === "pt" ? "Português" : "English"
                    }
                  </SelectValue>
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Español</span>
                  </span>
                </SelectItem>
                <SelectItem value="en" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>English</span>
                  </span>
                </SelectItem>
                <SelectItem value="zh" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <CN className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>简体中文</span>
                  </span>
                </SelectItem>
                <SelectItem value="ar" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <SA className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>العربية</span>
                  </span>
                </SelectItem>
                <SelectItem value="ru" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <RU className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Русский</span>
                  </span>
                </SelectItem>
                <SelectItem value="ja" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <JP className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>日本語</span>
                  </span>
                </SelectItem>
                <SelectItem value="pt" className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <BR className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                    <span>Português</span>
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden mt-3 border border-border/40 rounded-2xl bg-card p-4 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleScrollTo(e, link.href);
                }}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
