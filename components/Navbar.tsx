"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Layers, Bot, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/context/I18nContext";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para realizar un desplazamiento suave hacia un elemento por su ID o navegar a la ruta
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else {
        // Si no estamos en la página principal, redirigir a /#seccion
        window.location.href = `/${href}`;
      }
    }
  };

  const navLinks = [
    { href: "/", label: (t("nav.home") as string) || "Inicio" },
    { href: "/blog/categoria/tutoriales/", label: (t("nav.tutorials") as string) || "Tutoriales" },
    { href: "/blog/", label: (t("nav.blog") as string) || "Blog" },
  ];

  const ventureLinks = [
    {
      name: "skidhog.com",
      tag: t("ventures.skidhog.tag") as string,
      url: "https://skidhog.com",
      icon: ShieldCheck,
    },
    {
      name: "skidfish.com",
      tag: t("ventures.skidfish.tag") as string,
      url: "https://skidfish.com",
      icon: Layers,
    },
    {
      name: "skidgoose.com",
      tag: t("ventures.skidgoose.tag") as string,
      url: "https://skidgoose.com",
      icon: Bot,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      {/* Barra de Navegación Superior Condensada (Emprendimientos / Ecosistema) */}
      <div className="w-full border-b border-border/30 bg-muted/30 px-2 sm:px-6 md:px-8 lg:px-12 py-1 text-xs">
        <div className="flex items-center gap-2">
          {/* Emprendimientos (Grid de 3 columnas en móvil para auto-ajuste perfecto sin scroll) */}
          <div className="grid grid-cols-3 gap-1 w-full md:w-auto md:flex md:items-center md:gap-2">
            <span className="hidden xl:inline-flex items-center gap-1.5 font-semibold text-muted-foreground/80 pr-2 border-r border-border/50 text-[11px] uppercase tracking-wider shrink-0">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {t("ventures.title") as string}
            </span>
            {ventureLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-1 sm:gap-1.5 px-1 sm:px-2.5 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-card/90 border border-transparent hover:border-border/60 shadow-none hover:shadow-xs transition-all group w-full md:w-auto min-w-0"
                  title={`${item.name} - ${item.tag}`}
                >
                  <Icon className="size-3 sm:size-3.5 text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                  <span className="font-semibold text-foreground/90 group-hover:text-primary transition-colors text-[10.5px] sm:text-xs truncate">
                    {item.name}
                  </span>
                  <span className="hidden lg:inline-block text-[10px] text-muted-foreground/80 bg-background/80 px-1.5 py-0.5 rounded border border-border/40 font-medium whitespace-nowrap">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="size-2.5 sm:size-3 text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-3">
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

          {/* Lado Derecho: Selector de Tema + Selector de Idioma */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="md:hidden mt-3 border border-border/40 rounded-2xl bg-card p-4 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Enlaces de Secciones */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 px-2 pb-1">
                {(t("contact.navigation") as string) || "Navegación"}
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTo(e, link.href);
                  }}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground px-2 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Sección de Emprendimientos en Móvil */}
            <div className="pt-3 border-t border-border/40 flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 px-2 flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                {t("ventures.title") as string}
              </span>
              <div className="flex flex-col gap-1.5">
                {ventureLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-muted/30 hover:bg-muted/60 border border-border/40 hover:border-border/80 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

