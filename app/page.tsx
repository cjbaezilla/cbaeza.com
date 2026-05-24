"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { useTranslation } from "@/context/I18nContext";

interface PublicationItem {
  title: string;
  tag: string;
  link: string;
  description?: string;
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
  const [copiedEth, setCopiedEth] = React.useState(false);
  const [copiedBtc, setCopiedBtc] = React.useState(false);

  const handleCopyEth = () => {
    navigator.clipboard.writeText("0xa49F135e80A1a2d53D93fF67b848EaF014bB5cEE");
    setCopiedEth(true);
    setTimeout(() => setCopiedEth(false), 2000);
  };

  const handleCopyBtc = () => {
    navigator.clipboard.writeText("bc1qnt9a36lfsc8zjzj7mu9m6qexm48xv34z97fmt4");
    setCopiedBtc(true);
    setTimeout(() => setCopiedBtc(false), 2000);
  };

  // Función para realizar un desplazamiento suave hacia un elemento por su ID o al inicio si es "publications"
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "publications") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

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
      <header id="publications" className="w-full pt-16 pb-12 md:pt-28 md:pb-20 px-4 md:px-[8%] lg:px-[12%] border-b border-border/40 relative overflow-hidden">
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

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
              {t("hero.title") as string}
            </h1>

            <p className="font-heading text-lg sm:text-xl md:text-2xl text-primary font-medium">
              {t("hero.subtitle") as string}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
              {t("hero.description") as string}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="https://www.linkedin.com/in/carlos-baeza-negroni/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
                LinkedIn
              </Link>

              <Link
                href="https://github.com/cjbaezilla/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-github text-base"></i>
                {t("hero.cta") as string}
              </Link>

              <Link
                href="https://x.com/cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-x-twitter text-base"></i>
                Twitter
              </Link>

              <Link
                href="https://www.youtube.com/@cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-youtube text-base"></i>
                YouTube
              </Link>

              <Link
                href="mailto:hola@cbaeza.com"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-solid fa-envelope text-base"></i>
                Email
              </Link>

              <Link
                href="https://wa.me/56985644026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                WhatsApp
              </Link>

              <Link
                href="https://t.me/VELVET_T_99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 hover:bg-accent px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="fa-brands fa-telegram text-base"></i>
                Telegram
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
      <section id="projects" className="w-full py-16 px-4 md:px-[8%] lg:px-[12%] border-b border-border/40">
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
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-2 text-muted-foreground group-hover:text-primary transition-colors inline-block align-middle"></i>
                  </Link>

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
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Fundamentos (Ensayos Técnicos) */}
      <section id="foundations" className="w-full py-16 px-4 md:px-[8%] lg:px-[12%] border-b border-border/40 bg-card/20 relative">
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

                    <Link
                      href={foundation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer mt-2 inline-block"
                    >
                      <h3 className="font-heading text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors inline">
                        {foundation.title}
                      </h3>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-2 text-muted-foreground group-hover:text-primary transition-colors inline-block align-middle"></i>
                    </Link>

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
      <section id="background" className="w-full py-16 px-4 md:px-[8%] lg:px-[12%] border-b border-border/40">
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
      <section className="w-full py-16 px-4 md:px-[8%] lg:px-[12%] border-b border-border/40 bg-card/10">
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

      {/* Footer / Contact Section */}
      <footer id="contact" className="w-full py-16 px-4 md:px-[8%] lg:px-[12%] bg-gradient-to-t from-card/80 to-card/10 border-t border-border/40 mt-auto relative overflow-hidden">
        {/* Fondo decorativo y gradiente sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-12 border-b border-border/40 relative z-10">
          {/* Columna 1: Identidad */}
          <div className="flex flex-col items-start gap-4">
            <Link href="#" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={177}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("hero.subtitle") as string}
            </p>
            {/* POAP Card */}
            <Link
              href="https://collectors.poap.xyz/scan/baeza.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-border/80 bg-card/60 shadow-sm hover:border-primary/30 transition-all group/poap cursor-pointer w-full"
            >
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/poap:bg-primary/10 transition-colors">
                  <i className="fa-solid fa-qrcode text-xs"></i>
                </div>
                <span className="text-xs font-bold text-foreground group-hover/poap:text-primary transition-colors">
                  {t("contact.scans") as string}
                </span>
              </div>
              <i className="fa-solid fa-chevron-right text-[10px] text-muted-foreground group-hover/poap:translate-x-0.5 transition-transform"></i>
            </Link>
            {/* Redes Sociales */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="https://github.com/cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github text-base"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/carlos-baeza-negroni/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-[#0a66c2] hover:border-[#0a66c2]/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
              </Link>
              <Link
                href="https://twitter.com/cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-[#1da1f2] hover:border-[#1da1f2]/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                aria-label="Twitter Profile"
              >
                <i className="fa-brands fa-x-twitter text-base"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@cjbaezilla"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-[#ff0000] hover:border-[#ff0000]/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                aria-label="YouTube Channel"
              >
                <i className="fa-brands fa-youtube text-base"></i>
              </Link>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-heading text-xs font-bold tracking-wider text-foreground uppercase">
              {t("contact.navigation") as string}
            </h3>
            <ul className="flex flex-col gap-3 text-xs font-medium w-full">
              <li>
                <Link
                  href="#publications"
                  onClick={(e) => handleScrollTo(e, "publications")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                  {t("nav.publications") as string}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "projects")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                  {t("nav.projects") as string}
                </Link>
              </li>
              <li>
                <Link
                  href="#foundations"
                  onClick={(e) => handleScrollTo(e, "foundations")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                  {t("nav.foundations") as string}
                </Link>
              </li>
              <li>
                <Link
                  href="#background"
                  onClick={(e) => handleScrollTo(e, "background")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                  {t("nav.background") as string}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos Web3 */}
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="font-heading text-xs font-bold tracking-wider text-foreground uppercase">
              Web3
            </h3>
            <div className="flex flex-col gap-3.5 w-full">
              {/* Wallet Card - Ethereum */}
              <div className="flex flex-col gap-2 p-3.5 rounded-2xl border border-border/80 bg-card/60 shadow-sm relative group/wallet w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                      <i className="fa-solid fa-wallet text-xs"></i>
                    </div>
                    <span className="text-xs font-bold text-foreground">baeza.eth</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleCopyEth}
                      className="size-7 rounded-md hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors relative"
                      title={t("contact.copy") as string}
                    >
                      {copiedEth ? (
                        <i className="fa-solid fa-check text-xs text-emerald-500"></i>
                      ) : (
                        <i className="fa-regular fa-copy text-xs"></i>
                      )}
                    </button>
                    <Link
                      href="https://etherscan.io/address/baeza.eth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-7 rounded-md hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                      title="Etherscan"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </Link>
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono truncate select-all">
                  0xa49F135e80A1a2d53D93fF67b848EaF014bB5cEE
                </span>
              </div>

              {/* Wallet Card - Bitcoin */}
              <div className="flex flex-col gap-2 p-3.5 rounded-2xl border border-border/80 bg-card/60 shadow-sm relative group/wallet w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                      <i className="fa-brands fa-bitcoin text-xs"></i>
                    </div>
                    <span className="text-xs font-bold text-foreground">Bitcoin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleCopyBtc}
                      className="size-7 rounded-md hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors relative"
                      title={t("contact.copyBtc") as string}
                    >
                      {copiedBtc ? (
                        <i className="fa-solid fa-check text-xs text-emerald-500"></i>
                      ) : (
                        <i className="fa-regular fa-copy text-xs"></i>
                      )}
                    </button>
                    <Link
                      href="https://mempool.space/address/bc1qnt9a36lfsc8zjzj7mu9m6qexm48xv34z97fmt4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-7 rounded-md hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                      title="Mempool"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </Link>
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono truncate select-all">
                  bc1qnt9a36lfsc8zjzj7mu9m6qexm48xv34z97fmt4
                </span>
              </div>
            </div>
          </div>

          {/* Columna 4: Conexión */}
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="font-heading text-xs font-bold tracking-wider text-foreground uppercase">
              {t("contact.title") as string}
            </h3>
            <div className="flex flex-col gap-3 w-full">
              {/* Correo */}
              <Link
                href="mailto:hola@cbaeza.com"
                className="flex items-center gap-3 p-3 rounded-2xl border border-border/80 bg-card/60 shadow-sm hover:border-primary/30 transition-all group/email cursor-pointer w-full"
              >
                <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/email:bg-primary/10 transition-colors">
                  <i className="fa-solid fa-envelope text-xs"></i>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider leading-none">Email</span>
                  <span className="text-xs font-bold text-foreground truncate group-hover/email:text-primary transition-colors">
                    hola@cbaeza.com
                  </span>
                </div>
              </Link>

              {/* Telegram */}
              <Link
                href="https://t.me/VELVET_T_99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl border border-border/80 bg-card/60 shadow-sm hover:border-primary/30 transition-all group/tg cursor-pointer w-full"
              >
                <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/tg:bg-primary/10 transition-colors">
                  <i className="fa-brands fa-telegram text-xs"></i>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider leading-none">Telegram</span>
                  <span className="text-xs font-bold text-foreground truncate group-hover/tg:text-primary transition-colors">
                    @VELVET_T_99
                  </span>
                </div>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/56985644026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl border border-border/80 bg-card/60 shadow-sm hover:border-primary/30 transition-all group/wa cursor-pointer w-full"
              >
                <div className="size-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/wa:bg-primary/10 transition-colors">
                  <i className="fa-brands fa-whatsapp text-xs"></i>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider leading-none">WhatsApp</span>
                  <span className="text-xs font-bold text-foreground truncate group-hover/wa:text-primary transition-colors">
                    +56 9 8564 4026
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Sección Inferior: Copyright, créditos y volver arriba */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 relative z-10 pt-8 w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-heading text-sm font-black tracking-tight">cbaeza.com</span>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <span className="text-xs text-muted-foreground">© 2026 Carlos Baeza Negroni.</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            {t("contact.backToTop") as string}
            <i className="fa-solid fa-arrow-up text-[10px] -translate-y-0.5 group-hover:-translate-y-1 transition-transform"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}
