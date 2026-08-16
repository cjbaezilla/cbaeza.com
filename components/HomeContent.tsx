"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostMeta } from "@/lib/blog";
import { useTranslation } from "@/context/I18nContext";


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
  tutorialPosts: BlogPostMeta[];
}

export default function HomeContent({ newsPosts, tutorialPosts = [] }: HomeContentProps) {
  const { t } = useTranslation();

  // Obtener colecciones desde los diccionarios con tipado explícito
  const certificationsList = (t("certifications.items") as CertificationItem[]) || [];
  const hackathonsList = (t("hackathons.items") as HackathonItem[]) || [];

  // Mostrar únicamente 2 filas de resultados con los más nuevos (4 columnas x 2 filas = 8 artículos)
  const latestTutorials = tutorialPosts.slice(0, 8);

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-10 lg:gap-y-6 items-center w-full relative z-10">
            {/* Información Principal (Lado Izquierdo - Fila 1 en escritorio) */}
            <div className="order-1 lg:col-span-7 lg:row-start-1 flex flex-col gap-6 items-start">
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

            {/* Carrusel de Noticias del Blog (Slider - Orden 2 en móvil; Lado Derecho / Fila 1-2 en escritorio) */}
            <div className="order-2 lg:order-3 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 w-full flex flex-col gap-3 lg:self-center">
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

            {/* Tarjetas de Redes Sociales y Contacto (Orden 3 en móvil; Lado Izquierdo / Fila 2 en escritorio) */}
            <div className="order-3 lg:order-2 lg:col-span-7 lg:row-start-2 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2 lg:pt-0">
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

        {/* Sección de Tutoriales del Blog */}
        {tutorialPosts && tutorialPosts.length > 0 && (
          <section id="tutorials" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 relative overflow-hidden bg-card/20">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-10 relative z-10 w-full">
              {/* Cabecera de la Sección */}
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm w-fit">
                  <i className="fa-solid fa-graduation-cap text-primary"></i>
                  {t("tutorialsSection.badge") as string}
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                    {t("tutorialsSection.title") as string}
                  </h2>

                  {/* Enlace directo a la categoría de tutoriales alineado con el título */}
                  <Link
                    href="/blog/categoria/tutoriales/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-4 py-2.5 rounded-xl border border-primary/20 transition-all group shrink-0 w-fit"
                  >
                    <span>{t("tutorialsSection.viewAll") as string} ({tutorialPosts.length})</span>
                    <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {t("tutorialsSection.subtitle") as string}
                </p>
              </div>

              {/* Grid de Artículos de Tutoriales (4 tarjetas por fila, 2 filas) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {latestTutorials.map((post) => (
                  <BlogCard key={post.slug} post={post} showTags={false} />
                ))}
              </div>
            </div>
          </section>
        )}

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
