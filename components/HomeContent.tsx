"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import { BlogPostMeta } from "@/lib/blog";
import { useTranslation } from "@/context/I18nContext";

interface PublicationItem {
  title: string;
  tag: string;
  link: string;
  description?: string;
  icon?: string;
}

interface ProjectItem {
  title: string;
  description: string;
  stack: string;
  github: string;
}

interface FoundationItem {
  title: string;
  description: string;
  link: string;
  icon?: string;
  tag: string;
}

interface JobItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface HackathonItem {
  name: string;
  date: string;
}

interface HomeContentProps {
  newsPosts: BlogPostMeta[];
}

export default function HomeContent({ newsPosts }: HomeContentProps) {
  const { t } = useTranslation();

  // Estados para búsqueda y filtrado de publicaciones
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState("all");
  const [showAllPublications, setShowAllPublications] = React.useState(false);

  // Estados para búsqueda y filtrado de fundamentos
  const [searchFoundation, setSearchFoundation] = React.useState("");
  const [selectedFoundationTag, setSelectedFoundationTag] = React.useState("all");
  const [showAllFoundations, setShowAllFoundations] = React.useState(false);

  // Obtener colecciones desde los diccionarios con tipado explícito
  const publicationsList = (t("publications") as PublicationItem[]) || [];
  const projectsList = (t("projects.items") as ProjectItem[]) || [];
  const foundationsList = (t("foundations.items") as FoundationItem[]) || [];
  const jobsList = (t("background.jobs") as JobItem[]) || [];
  const certificationsList = (t("certifications.items") as CertificationItem[]) || [];
  const hackathonsList = (t("hackathons.items") as HackathonItem[]) || [];

  // Extraer tags únicos de las publicaciones
  const allTags = ["all", ...Array.from(new Set(publicationsList.map((p) => p.tag)))];

  // Filtrar publicaciones según búsqueda y tag seleccionado
  const filteredPublications = publicationsList.filter((pub) => {
    const matchesTag = selectedTag === "all" || pub.tag === selectedTag;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub.description && pub.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  // Limitar visualización si es necesario
  const displayedPublications = showAllPublications ? filteredPublications : filteredPublications.slice(0, 6);

  // Extraer tags únicos de los fundamentos
  const allFoundationTags = ["all", ...Array.from(new Set(foundationsList.map((f) => f.tag)))];

  // Filtrar fundamentos según búsqueda y tag seleccionado
  const filteredFoundations = foundationsList.filter((f) => {
    const matchesTag = selectedFoundationTag === "all" || f.tag === selectedFoundationTag;
    const matchesSearch =
      f.title.toLowerCase().includes(searchFoundation.toLowerCase()) ||
      (f.description && f.description.toLowerCase().includes(searchFoundation.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  // Limitar visualización si es necesario
  const displayedFoundations = showAllFoundations ? filteredFoundations : filteredFoundations.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Barra de Navegación */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <header id="hero" className="w-full pt-16 pb-12 md:pt-28 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 relative overflow-hidden">
          {/* Fondo decorativo geométrico */}
          <div className="absolute top-0 ltr:right-0 rtl:left-0 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none ltr:-mr-32 rtl:-ml-32 -mt-32"></div>
          <div className="absolute bottom-0 ltr:left-0 rtl:right-0 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none ltr:-ml-32 rtl:-mr-32 -mb-32"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
            {/* Información Principal */}
            <div className="lg:col-span-7 flex flex-col gap-6 items-start order-1">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-card border border-border/80 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
                <i className="fa-solid fa-code text-primary"></i>
                {t("hero.badge") as string}
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                {t("hero.title") as string}
              </h1>

              <p className="font-heading text-lg sm:text-xl md:text-2xl text-primary font-medium">
                {t("hero.subtitle") as string}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                {t("hero.description") as string}
              </p>
            </div>

            {/* Carrusel de Noticias del Blog (Slider) */}
            <div className="lg:col-span-5 w-full flex flex-col gap-3 order-3 lg:order-2">
              <div className="flex items-center justify-between px-1">
                <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse inline-block"></span>
                  {t("hero.sliderTitle") as string}
                </h2>
                <Link
                  href="/blog/categoria/noticias/"
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{t("hero.viewAllNews") as string}</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
                </Link>
              </div>
              <Slider posts={newsPosts} />
            </div>

            {/* Tarjetas de Redes Sociales y Contacto */}
            <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 w-full pt-4 border-t border-border/40 order-2 lg:order-3">
              <Link
                href="https://www.linkedin.com/in/carlos-baeza-negroni/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-linkedin text-base text-[#0a66c2] group-hover:scale-110 transition-transform"></i>
                <span className="truncate">LinkedIn</span>
              </Link>

              <Link
                href="https://github.com/cjbaezilla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-github text-base text-foreground group-hover:scale-110 transition-transform"></i>
                <span className="truncate">{t("hero.cta") as string}</span>
              </Link>

              <Link
                href="https://x.com/cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-x-twitter text-base text-foreground group-hover:scale-110 transition-transform"></i>
                <span className="truncate">Twitter</span>
              </Link>

              <Link
                href="https://www.youtube.com/@cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-youtube text-base text-[#ff0000] group-hover:scale-110 transition-transform"></i>
                <span className="truncate">YouTube</span>
              </Link>

              <Link
                href="mailto:hola@cbaeza.com"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-solid fa-envelope text-base text-primary group-hover:scale-110 transition-transform"></i>
                <span className="truncate">Email</span>
              </Link>

              <Link
                href="https://wa.me/56985644026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-whatsapp text-base text-[#25d366] group-hover:scale-110 transition-transform"></i>
                <span className="truncate">WhatsApp</span>
              </Link>

              <Link
                href="https://t.me/VELVET_T_99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-accent/80 p-3.5 text-xs font-bold text-foreground transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer group"
              >
                <i className="fa-brands fa-telegram text-base text-[#229ed9] group-hover:scale-110 transition-transform"></i>
                <span className="truncate">Telegram</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Sección Dedicada de Publicaciones */}
        <section id="publications" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 bg-card/10">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="font-heading text-3xl font-black tracking-tight flex items-center gap-3">
              <span>{t("publicationsSection.title") as string}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-bold text-primary">
                {publicationsList.length}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("publicationsSection.subtitle") as string}
            </p>
          </div>

          {/* Buscador y Filtros */}
          <div className="flex flex-col gap-5 mb-8">
            {/* Fila de Búsqueda */}
            <div className="relative w-full sm:w-96">
              <span className="absolute inset-y-0 left-3 flex items-center pl-1 text-muted-foreground pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </span>
              <input
                type="text"
                placeholder={t("publicationsSection.searchPlaceholder") as string}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl border border-border/60 bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-3 flex items-center pr-1 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-circle-xmark text-sm"></i>
                </button>
              )}
            </div>

            {/* Fila de Filtros de Etiquetas */}
            <div className="flex flex-wrap gap-2 items-center overflow-x-auto pb-1 w-full">
              {allTags.map((tag) => {
                const isActive = selectedTag === tag;
                const count = tag === "all" ? publicationsList.length : publicationsList.filter((p) => p.tag === tag).length;
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setShowAllPublications(false);
                    }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground shadow-sm"
                        : "bg-card border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span>{tag === "all" ? (t("publicationsSection.all") as string) : tag}</span>
                    <span className={`inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[10px] font-bold transition-all ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listado de Tarjetas */}
          {displayedPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {displayedPublications.map((pub, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-6 shadow-sm hover:border-border hover:shadow-md transition-all group min-h-[14rem]"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-xl bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {pub.tag}
                      </span>
                      <Link
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 flex items-center justify-center text-primary cursor-pointer transition-colors"
                        aria-label="Article Link"
                      >
                        <i className={`${pub.icon || "fa-solid fa-newspaper"} text-xs`}></i>
                      </Link>
                    </div>

                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer mt-2 inline-block"
                    >
                      <h3 className="font-heading text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors inline">
                        {pub.title}
                      </h3>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs ms-2 text-muted-foreground group-hover:text-primary transition-colors inline-block align-middle"></i>
                    </Link>

                    {pub.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed text-justify line-clamp-3">
                        {pub.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex justify-end">
                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary inline-flex items-center gap-1 cursor-pointer group/link"
                    >
                      {t("publicationsSection.viewOnLinkedin") as string}
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full text-center py-12 rounded-3xl border border-dashed border-border/60 bg-card/20">
              <i className="fa-solid fa-newspaper text-3xl text-muted-foreground/40 mb-3 block"></i>
              <span className="text-sm text-muted-foreground">No se encontraron publicaciones que coincidan con la búsqueda.</span>
            </div>
          )}

          {/* Botón de Mostrar Más / Mostrar Menos */}
          {filteredPublications.length > 6 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllPublications(!showAllPublications)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/80 bg-card hover:bg-accent text-xs font-bold transition-all cursor-pointer"
              >
                <span>
                  {showAllPublications
                    ? (t("publicationsSection.showLess") as string)
                    : (t("publicationsSection.showMore") as string)}
                </span>
                <i
                  className={`fa-solid ${
                    showAllPublications ? "fa-chevron-up" : "fa-chevron-down"
                  } text-[10px]`}
                ></i>
              </button>
            </div>
          )}
        </section>

        {/* Fundamentos (Ensayos Técnicos) */}
        <section id="foundations" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 bg-card/10 relative">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="font-heading text-3xl font-black tracking-tight flex items-center gap-3">
              <span>{t("foundations.title") as string}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-bold text-primary">
                {foundationsList.length}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("foundations.subtitle") as string}
            </p>
          </div>

          {/* Buscador y Filtros */}
          <div className="flex flex-col gap-5 mb-8">
            {/* Fila de Búsqueda */}
            <div className="relative w-full sm:w-96">
              <span className="absolute inset-y-0 left-3 flex items-center pl-1 text-muted-foreground pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </span>
              <input
                type="text"
                placeholder={t("foundations.searchPlaceholder") as string}
                value={searchFoundation}
                onChange={(e) => setSearchFoundation(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl border border-border/60 bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              {searchFoundation && (
                <button
                  onClick={() => setSearchFoundation("")}
                  className="absolute inset-y-0 right-3 flex items-center pr-1 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-circle-xmark text-sm"></i>
                </button>
              )}
            </div>

            {/* Fila de Filtros de Etiquetas */}
            <div className="flex flex-wrap gap-2 items-center overflow-x-auto pb-1 w-full">
              {allFoundationTags.map((tag) => {
                const isActive = selectedFoundationTag === tag;
                const count = tag === "all" ? foundationsList.length : foundationsList.filter((f) => f.tag === tag).length;
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedFoundationTag(tag);
                      setShowAllFoundations(false);
                    }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground shadow-sm"
                        : "bg-card border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span>{tag === "all" ? (t("foundations.all") as string) : tag}</span>
                    <span className={`inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[10px] font-bold transition-all ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listado de Tarjetas */}
          {displayedFoundations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {displayedFoundations.map((foundation: FoundationItem, index: number) => {
                const mathDecorations = [
                  "a^p ≡ a (mod p)",
                  "f(x) = σ(x)",
                  "E[U(x)]",
                  "H(X) = -Σ P(x)log P(x)",
                  "G(x) = (Z_p, +)",
                  "S_n = Σ x_i",
                  "f(k) = c k^{-α}",
                  "Pr(X=k) = p^k",
                  "dL/dx = 0",
                  "σ^2 = E[(X-μ)^2]",
                  "U' > 0, U'' < 0"
                ];
                const mathText = mathDecorations[index % mathDecorations.length];

                return (
                  <div
                    key={index}
                    className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-6 shadow-sm hover:border-border hover:shadow-md transition-all group min-h-[14rem]"
                  >
                    <span className="absolute -bottom-2 -right-3 font-mono text-4xl font-extrabold text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
                      {mathText}
                    </span>

                    <div className="flex flex-col gap-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-xl bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {foundation.tag}
                        </span>
                        <div className="size-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                          <i className={`fa-solid ${foundation.icon || "fa-brain"} text-xs`}></i>
                        </div>
                      </div>

                      <Link
                        href={foundation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer mt-2 inline-block"
                      >
                        <h3 className="font-heading text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors inline">
                          {foundation.title}
                        </h3>
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs ms-2 text-muted-foreground group-hover:text-primary transition-colors inline-block align-middle"></i>
                      </Link>

                      {foundation.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed text-justify line-clamp-3">
                          {foundation.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 pt-4 relative z-10 border-t border-border/40 flex justify-end">
                      <Link
                        href={foundation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group/link cursor-pointer"
                      >
                        {t("foundations.viewArticle") as string}
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full text-center py-12 rounded-3xl border border-dashed border-border/60 bg-card/20">
              <i className="fa-solid fa-brain text-3xl text-muted-foreground/40 mb-3 block"></i>
              <span className="text-sm text-muted-foreground">No se encontraron artículos que coincidan con la búsqueda.</span>
            </div>
          )}

          {/* Botón de Mostrar Más / Mostrar Menos */}
          {filteredFoundations.length > 6 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllFoundations(!showAllFoundations)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/80 bg-card hover:bg-accent text-xs font-bold transition-all cursor-pointer relative z-10"
              >
                <span>
                  {showAllFoundations
                    ? (t("foundations.showLess") as string)
                    : (t("foundations.showMore") as string)}
                </span>
                <i
                  className={`fa-solid ${
                    showAllFoundations ? "fa-chevron-up" : "fa-chevron-down"
                  } text-[10px]`}
                ></i>
              </button>
            </div>
          )}
        </section>

        {/* Repositorios de Proyectos */}
        <section id="projects" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40">
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="font-heading text-3xl font-black tracking-tight">
              {t("projects.title") as string}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("projects.subtitle") as string}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {Array.isArray(projectsList) &&
              projectsList.map((project: ProjectItem, index: number) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-6 shadow-sm hover:border-border hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        <i className="fa-solid fa-code text-sm"></i>
                      </div>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded-lg hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <i className="fa-brands fa-github text-lg"></i>
                      </Link>
                    </div>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer mt-2 inline-block"
                    >
                      <h3 className="font-heading text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors inline">
                        {project.title}
                      </h3>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs ms-2 text-muted-foreground group-hover:text-primary transition-colors inline-block align-middle"></i>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground truncate w-3/4">
                      {project.stack}
                    </span>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary inline-flex items-center gap-1 cursor-pointer"
                    >
                      {t("projects.code") as string}
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Trayectoria Profesional */}
        <section id="background" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl font-black tracking-tight">
                {t("background.title") as string}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t("background.subtitle") as string}
              </p>
            </div>

            {/* Timeline de trabajos */}
            <div className="relative border-s border-border/60 ps-6 ms-2 flex flex-col gap-8">
              {Array.isArray(jobsList) &&
                jobsList.map((job: JobItem, index: number) => (
                  <div key={index} className="relative">
                    <div className="absolute ltr:-left-[31px] rtl:-right-[31px] top-1.5 size-4 rounded-full border border-primary/50 bg-background flex items-center justify-center">
                      <div className="size-2 rounded-full bg-primary"></div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-primary uppercase">
                        {job.period}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {job.role}
                      </h3>
                      <h4 className="text-xs font-semibold text-muted-foreground">
                        {job.company}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Certificaciones & Hackatones */}
        <section id="certifications" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 bg-card/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            {/* Certificaciones */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="font-heading text-2xl font-black tracking-tight mb-2">
                {t("certifications.title") as string}
              </h2>
              <div className="flex flex-col gap-4 w-full">
                {Array.isArray(certificationsList) &&
                  certificationsList.map((cert: CertificationItem, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-4 hover:border-border transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                          <i className="fa-solid fa-certificate"></i>
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xs font-bold text-foreground">
                            {cert.name}
                          </h3>
                          <span className="text-[10px] text-muted-foreground">
                            {cert.issuer} ({cert.date})
                          </span>
                        </div>
                      </div>
                      {cert.link && (
                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="size-7 rounded-lg hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                          aria-label={t("certifications.viewCertificate") as string}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Hackatones */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-2xl font-black tracking-tight">
                  {t("hackathons.title") as string}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {t("hackathons.subtitle") as string}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {Array.isArray(hackathonsList) &&
                  hackathonsList.map((hack: HackathonItem, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3 hover:border-border hover:shadow-sm transition-all group/hack cursor-default"
                    >
                      <div className="size-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/hack:bg-primary/10 transition-colors shrink-0">
                        <i className="fa-solid fa-trophy text-xs"></i>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-foreground truncate group-hover/hack:text-primary transition-colors">
                          {hack.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {hack.date}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <Footer />
    </div>
  );
}
