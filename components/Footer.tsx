"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/I18nContext";

export default function Footer() {
  const { t } = useTranslation();
  const [copiedEth, setCopiedEth] = useState(false);
  const [copiedBtc, setCopiedBtc] = useState(false);

  const handleCopyEth = () => {
    navigator.clipboard.writeText("0x2AEc06E4c3e85672b1BDe46CA45FB6fB574791c2");
    setCopiedEth(true);
    setTimeout(() => setCopiedEth(false), 2000);
  };

  const handleCopyBtc = () => {
    navigator.clipboard.writeText("bc1qnt9a36lfsc8zjzj7mu9m6qexm48xv34z97fmt4");
    setCopiedBtc(true);
    setTimeout(() => setCopiedBtc(false), 2000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer id="contact" className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-t from-card/80 to-card/10 border-t border-border/40 mt-auto relative overflow-hidden">
      {/* Fondo decorativo y gradiente sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-12 border-b border-border/40 relative z-10">
        {/* Columna 1: Identidad */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center">
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

          {/* Redes Sociales */}
          <div className="flex flex-wrap items-center gap-2.5 mt-2">
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
              href="https://github.com/cjbaezilla"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-base"></i>
            </Link>
            <Link
              href="https://x.com/cjbaezilla"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
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
            <Link
              href="mailto:hola@cbaeza.com"
              className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              aria-label="Email de Contacto"
            >
              <i className="fa-solid fa-envelope text-base"></i>
            </Link>
            <Link
              href="https://wa.me/56985644026"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-[#25d366] hover:border-[#25d366]/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              aria-label="WhatsApp Contact"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
            </Link>
            <Link
              href="https://t.me/VELVET_T_99"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-[#229ed9] hover:border-[#229ed9]/40 flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              aria-label="Telegram Contact"
            >
              <i className="fa-brands fa-telegram text-base"></i>
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
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {t("nav.publications") as string}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {t("nav.projects") as string}
              </Link>
            </li>
            <li>
              <Link
                href="#foundations"
                onClick={(e) => handleScrollTo(e, "foundations")}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {t("nav.foundations") as string}
              </Link>
            </li>
            <li>
              <Link
                href="#background"
                onClick={(e) => handleScrollTo(e, "background")}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {t("nav.background") as string}
              </Link>
            </li>
            <li>
              <Link
                href="#certifications"
                onClick={(e) => handleScrollTo(e, "certifications")}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {t("nav.certifications") as string}
              </Link>
            </li>
            <li>
              <Link
                href="/blog/"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <i className="fa-solid fa-chevron-right text-[8px] opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:rotate-180 transition-all"></i>
                {(t("nav.blog") as string) || "Blog"}
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
                    aria-label={t("contact.copy") as string}
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
                0x2AEc06E4c3e85672b1BDe46CA45FB6fB574791c2
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
                    aria-label={t("contact.copyBtc") as string}
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 relative z-10 pt-8 w-full text-center sm:text-start">
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
  );
}
