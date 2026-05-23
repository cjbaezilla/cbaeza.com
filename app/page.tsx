"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { useTranslation } from "@/context/I18nContext";

interface PublicationItem {
  title: string;
  tag: string;
  link: string;
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

export default function Home() {
  const { t } = useTranslation();

  // Obtener colecciones desde los diccionarios con tipado explícito
  const publicationsList = (t("publications") as PublicationItem[]) || [];
  const projectsList = (t("projects.items") as ProjectItem[]) || [];
  const foundationsList = (t("foundations.items") as FoundationItem[]) || [];
  const jobsList = (t("background.jobs") as JobItem[]) || [];
  const certificationsList = (t("certifications.items") as CertificationItem[]) || [];
  const hackathonsList = (t("hackathons.items") as HackathonItem[]) || [];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Barra de Navegación */}
      <Navbar />

      {/* Hero Section */}
      <header className="w-full py-12 md:py-20 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] border-b border-border/40 relative overflow-hidden">
        {/* Fondo decorativo geométrico */}
        <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
          {/* Información Principal */}
          <div className="lg:col-span-7 flex flex-col gap-6 items-start">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-card border border-border/80 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
              <i className="fa-solid fa-code text-primary"></i>
              {t("hero.badge") as string}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
              {t("hero.title") as string}
            </h1>

            <p className="font-heading text-lg sm:text-xl md:text-2xl text-primary font-medium">
              {t("hero.subtitle") as string}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("hero.description") as string}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                {t("hero.cta") as string}
                <i className="fa-solid fa-arrow-down"></i>
              </Link>

              <Link
                href="https://www.linkedin.com/in/carlos-baeza-negroni/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Carrusel de Publicaciones */}
          <div className="lg:col-span-5 w-full flex flex-col gap-3">
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
              {t("hero.sliderTitle") as string}
            </h2>
            <Slider items={publicationsList} />
          </div>
        </div>
      </header>

      {/* Repositorios de Proyectos */}
      <section id="projects" className="w-full py-16 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] border-b border-border/40">
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

                  <h3 className="font-heading text-lg font-bold tracking-tight text-foreground mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
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
                    Code
                    <i className="fa-solid fa-chevron-right text-[8px] translate-x-0 group-hover:translate-x-0.5 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Fundamentos (Ensayos Técnicos) */}
      <section id="foundations" className="w-full py-16 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] border-b border-border/40 bg-card/20 relative">
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="font-heading text-3xl font-black tracking-tight">
            {t("foundations.title") as string}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("foundations.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Array.isArray(foundationsList) &&
            foundationsList.map((foundation: FoundationItem, index: number) => {
              // Fórmulas matemáticas de decoración para cada tarjeta
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
                  className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-6 shadow-sm hover:border-border hover:shadow-md transition-all group min-h-[12rem]"
                >
                  {/* Elemento decorativo matemático */}
                  <span className="absolute -bottom-2 -right-3 font-mono text-4xl font-extrabold text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
                    {mathText}
                  </span>

                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="size-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                      <i className={`fa-solid ${foundation.icon || "fa-brain"} text-sm`}></i>
                    </div>

                    <h3 className="font-heading text-base font-bold tracking-tight text-foreground mt-2">
                      {foundation.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {foundation.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 relative z-10 flex justify-end">
                    <Link
                      href={foundation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group/link cursor-pointer"
                    >
                      Ver Artículo
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Trayectoria Profesional */}
      <section id="background" className="w-full py-16 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] border-b border-border/40">
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
          <div className="relative border-l border-border/60 pl-6 ml-2 flex flex-col gap-8">
            {Array.isArray(jobsList) &&
              jobsList.map((job: JobItem, index: number) => (
                <div key={index} className="relative">
                  {/* Nodo de la línea de tiempo */}
                  <div className="absolute -left-[31px] top-1.5 size-4 rounded-full border border-primary/50 bg-background flex items-center justify-center">
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
      <section className="w-full py-16 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] border-b border-border/40 bg-card/10">
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
                        aria-label="Ver Certificado"
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

            <div className="flex flex-wrap gap-2 w-full">
              {Array.isArray(hackathonsList) &&
                hackathonsList.map((hack: HackathonItem, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-sm hover:border-border hover:text-foreground transition-all"
                  >
                    <div className="size-1.5 rounded-full bg-primary"></div>
                    <span className="font-medium">{hack.name}</span>
                    <span className="text-[10px] font-mono text-muted-foreground">({hack.date})</span>
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="w-full py-12 px-4 sm:px-[6%] md:px-[10%] lg:px-[12%] xl:px-[16%] bg-card border-t border-border/40 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full pb-8 border-b border-border/40">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-black tracking-tight">
              {t("contact.title") as string}
            </h2>
            <p className="text-xs text-muted-foreground">
              hola@cbaeza.com
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            {/* ENS Address */}
            <Link
              href="https://etherscan.io/address/baeza.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background hover:bg-accent px-4 py-2.5 text-xs font-semibold text-foreground transition-all cursor-pointer"
            >
              <i className="fa-solid fa-wallet text-primary"></i>
              <span>baeza.eth</span>
            </Link>

            {/* POAPs Link */}
            <Link
              href="https://collectors.poap.xyz/scan/baeza.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background hover:bg-accent px-4 py-2.5 text-xs font-semibold text-foreground transition-all cursor-pointer"
            >
              <i className="fa-solid fa-qrcode text-primary"></i>
              <span>{t("contact.scans") as string}</span>
            </Link>
          </div>
        </div>

        {/* Derechos de autor y redes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-2.5">
            <span className="font-heading text-sm font-bold">cbaeza.com</span>
            <span className="text-xs text-muted-foreground">© 2026</span>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/cjbaezilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-lg transition-colors cursor-pointer"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </Link>

            <Link
              href="https://www.linkedin.com/in/carlos-baeza-negroni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0a66c2] text-lg transition-colors cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>

            <Link
              href="https://twitter.com/cjbaezilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1da1f2] text-lg transition-colors cursor-pointer"
              aria-label="Twitter Profile"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link
              href="https://www.youtube.com/@cjbaezilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#ff0000] text-lg transition-colors cursor-pointer"
              aria-label="YouTube Channel"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
