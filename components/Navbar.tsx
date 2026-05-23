"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/I18nContext";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative size-8 overflow-hidden rounded-lg bg-card border border-border/80">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="font-heading text-lg font-black tracking-tight text-foreground sm:block hidden">
            cbaeza.com
          </span>
        </Link>

        {/* Links Escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Acciones y Controles (Escritorio) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/colors"
            className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/60 hover:border-border hover:bg-accent px-4 py-2 text-xs font-semibold text-foreground transition-all cursor-pointer"
          >
            <i className="fa-solid fa-palette"></i>
            {t("nav.colors") as string}
          </Link>
          
          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="px-3 py-2 rounded-xl border border-border bg-card hover:bg-accent text-xs font-bold cursor-pointer transition-colors"
            aria-label="Switch Language"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Controles para Móvil */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="px-2.5 py-1.5 rounded-lg border border-border bg-card hover:bg-accent text-xs font-bold cursor-pointer transition-colors"
            aria-label="Switch Language"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          
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
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border/60 pt-3">
            <Link
              href="/colors"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 text-xs font-bold transition-all cursor-pointer"
            >
              <i className="fa-solid fa-palette"></i>
              {t("nav.colors") as string}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
