"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/I18nContext";
import { ES, US } from "country-flag-icons/react/3x2";
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
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md px-4 md:px-[8%] lg:px-[12%] py-3">
      <div className="flex items-center justify-between">
        {/* Logo de Carlos */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={177}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

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

        {/* Acciones y Controles (Escritorio) */}
        <div className="hidden md:flex items-center gap-4">
          <Select value={locale} onValueChange={(val) => setLocale(val as "es" | "en")}>
            <SelectTrigger className="w-[125px] h-9 text-sm cursor-pointer">
              <span className="flex items-center gap-2">
                {locale === "es" ? (
                  <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                ) : (
                  <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                )}
                <SelectValue>
                  {(value: string | null) => (value === "es" ? "Español" : "English")}
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
            </SelectContent>
          </Select>
        </div>

        {/* Controles para Móvil */}
        <div className="flex md:hidden items-center gap-3">
          <Select value={locale} onValueChange={(val) => setLocale(val as "es" | "en")}>
            <SelectTrigger className="w-[120px] h-8 text-xs cursor-pointer">
              <span className="flex items-center gap-1.5">
                {locale === "es" ? (
                  <ES className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                ) : (
                  <US className="h-3 w-4.5 rounded-[1px] object-cover shrink-0" />
                )}
                <SelectValue>
                  {(value: string | null) => (value === "es" ? "Español" : "English")}
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
            </SelectContent>
          </Select>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent cursor-pointer transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} size-4 flex items-center justify-center`}></i>
          </button>
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
