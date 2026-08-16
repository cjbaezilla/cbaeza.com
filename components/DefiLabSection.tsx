"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  BookOpen,
  BarChart3,
  Shield,
  Layers,
  Award,
  Sparkles,
  Trophy,
  Flame,
  CheckCircle2,
  LockOpen,
} from "lucide-react";
import { useTranslation } from "@/context/I18nContext";

interface MetricItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface PerkItem {
  title: string;
  desc: string;
}

export default function DefiLabSection() {
  const { t } = useTranslation();

  const metrics = (t("defiLabSection.metrics") as MetricItem[]) || [];
  const features = (t("defiLabSection.features") as FeatureItem[]) || [];
  const perks = (t("defiLabSection.perks") as PerkItem[]) || [];

  return (
    <section
      id="defi-lab"
      className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-border/40 relative overflow-hidden bg-gradient-to-b from-background via-card/10 to-background"
    >
      {/* Fondos y Efectos de Iluminación Ambiental */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 ltr:right-0 rtl:left-0 size-[450px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-12 sm:gap-16 relative z-10 w-full max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* CABECERA PRINCIPAL: Título, Badge, Subtítulo y Pills de Valor */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
          {/* Badge Destacado */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs animate-in fade-in duration-500">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>{(t("defiLabSection.badge") as string) || "Laboratorio DeFi Web3 On-Chain"}</span>
          </div>

          {/* Título Principal */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
            {(t("defiLabSection.title") as string) ||
              "Aprende Web3 y DeFi desde Cero en Ethereum Sepolia"}
          </h2>

          {/* Subtítulo Descriptivo */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {(t("defiLabSection.subtitle") as string) ||
              "Plataforma educativa y curso interactivo 100% gratuito y libre de riesgo financiero. Diseñado para estudiantes, desarrolladores y cualquier persona curiosa que desee dominar contratos inteligentes, creación de tokens, piscinas de liquidez AMM y validación criptográfica en un entorno descentralizado real."}
          </p>

          {/* Pills / Tags de Propuesta de Valor */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-medium text-foreground shadow-2xs">
              <LockOpen className="size-3.5 text-primary" />
              {(t("defiLabSection.tags.free") as string) || "100% Gratuito y Abierto"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-medium text-foreground shadow-2xs">
              <i className="fa-brands fa-ethereum text-primary text-xs" />
              {(t("defiLabSection.tags.testnet") as string) || "Ethereum Sepolia Testnet"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-medium text-foreground shadow-2xs">
              <Shield className="size-3.5 text-emerald-500" />
              {(t("defiLabSection.tags.noRisk") as string) || "Sin Riesgo de Capital"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-medium text-foreground shadow-2xs">
              <Layers className="size-3.5 text-primary" />
              {(t("defiLabSection.tags.onChain") as string) || "Arquitectura 100% On-Chain"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-medium text-foreground shadow-2xs">
              <Award className="size-3.5 text-amber-500" />
              {(t("defiLabSection.tags.relics") as string) || "10 Desafíos & Reliquias NFT"}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BANNER PRINCIPAL & LLAMADOS A LA ACCIÓN (HERO CARD) */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Fondo sutil interno */}
          <div className="absolute top-0 right-0 size-72 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          {/* Lado Izquierdo: Descripción, Beneficios Inmediatos y CTAs */}
          <div className="flex flex-col gap-6 lg:w-1/2 z-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Sparkles className="size-3.5" />
                {(t("defiLabSection.actions.learnFromZero") as string) || "Comenzar Gratis desde Cero"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-heading">
                Laboratorio Práctico Totalmente Abierto
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sin registros en bases de datos centralizadas ni cobros ocultos. Sólo necesitas una billetera Web3 (MetaMask, Rainbow, Coinbase Wallet o WalletConnect) configurada en la red Sepolia con fondos gratuitos de grifo para interactuar directamente con la Máquina Virtual de Ethereum (EVM).
              </p>
            </div>

            {/* Lista Rápida de Ventajas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 font-medium leading-snug">
                  Crea y despliega tus propios tokens ERC-20
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 font-medium leading-snug">
                  Provee liquidez y opera en el AMM DEX
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 font-medium leading-snug">
                  Gana 10 Reliquias NFT con firmas ECDSA
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 font-medium leading-snug">
                  Compite en el ranking de liquidez en vivo
                </span>
              </div>
            </div>

            {/* Grupo de Botones de Acción */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Botón Principal: Lanzar dApp */}
              <a
                href="https://web3-usach-lab.cbaeza.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm px-5 py-3 hover:bg-primary/90 shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <Flame className="size-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>{(t("defiLabSection.actions.launchApp") as string) || "Abrir Laboratorio Web3"}</span>
                <ExternalLink className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Botón Ranking */}
              <a
                href="https://web3-usach-lab.cbaeza.com/ranking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border/80 text-foreground font-semibold text-xs sm:text-sm px-4 py-3 hover:bg-accent hover:border-primary/40 transition-all cursor-pointer group"
              >
                <Trophy className="size-4 text-amber-500" />
                <span>{(t("defiLabSection.actions.openRanking") as string) || "Ver Ranking en Vivo"}</span>
              </a>
            </div>

            {/* Enlaces a los Artículos Técnicos del Blog y Repositorios */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-border/50 text-xs text-muted-foreground">
              <Link
                href="/blog/laboratorio-web3-usach-dapp-defi-smart-contracts-sepolia/"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold transition-colors"
              >
                <BookOpen className="size-3.5" />
                <span>{(t("defiLabSection.actions.readArchitecture") as string) || "Guía de Arquitectura"}</span>
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/blog/resultados-laboratorio-defi-web3-usach-metricas-onchain-sepolia/"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold transition-colors"
              >
                <BarChart3 className="size-3.5" />
                <span>{(t("defiLabSection.actions.readResults") as string) || "Reporte de Métricas"}</span>
              </Link>
              <span className="text-border">•</span>
              <a
                href="https://github.com/cjbaezilla/diplomado-usach-training-dapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary font-semibold transition-colors"
              >
                <i className="fa-brands fa-github text-xs" />
                <span>GitHub Frontend</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="https://github.com/cjbaezilla/diplomado-usach-training-dapp-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary font-semibold transition-colors"
              >
                <i className="fa-brands fa-github text-xs" />
                <span>GitHub Contratos</span>
              </a>
            </div>
          </div>

          {/* Lado Derecho: Imagen Ilustrativa de la dApp con Efecto Glassmorphism */}
          <div className="w-full lg:w-1/2 relative group z-10">
            <div className="relative rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card/80 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-2xl">
              <Image
                src="/images/blog/usach-lab/hero_page.png"
                alt="Laboratorio Web3 DeFi USACH en Ethereum Sepolia"
                width={800}
                height={480}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                unoptimized
              />
              {/* Badge Flotante sobre la imagen */}
              <div className="absolute top-3 ltr:left-3 rtl:right-3 bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-foreground">Ethereum Sepolia (Chain ID 11155111)</span>
              </div>
              <div className="absolute bottom-3 ltr:right-3 rtl:left-3 bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                <i className="fa-solid fa-server text-xs text-primary" />
                <span className="text-[11px] font-bold text-foreground">100% Serverless On-Chain</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MÉTRICAS ON-CHAIN EN VIVO / RESULTADOS VALIDADOS */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-start">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground font-heading flex items-center justify-center sm:justify-start gap-2.5">
              <BarChart3 className="size-5 text-primary" />
              {(t("defiLabSection.metricsTitle") as string) || "Métricas On-Chain y Resultados Reales"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {(t("defiLabSection.metricsSubtitle") as string) ||
                "Datos verificables en el historial inmutable de Ethereum Sepolia durante las sesiones formativas:"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-start p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:bg-card/90 shadow-2xs hover:shadow-sm transition-all group"
              >
                <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-3">
                  <i className={`${metric.icon} text-sm`} />
                </div>
                <span className="text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-foreground/90 mt-0.5 leading-snug">
                  {metric.label}
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 leading-tight">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MÓDULOS Y ARQUITECTURA TÉCNICA (6 CARDS GRID) */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-start">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground font-heading flex items-center justify-center sm:justify-start gap-2.5">
              <Layers className="size-5 text-primary" />
              {(t("defiLabSection.featuresTitle") as string) || "Módulos Interactivos y Arquitectura On-Chain"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {(t("defiLabSection.featuresSubtitle") as string) ||
                "Un entorno completo que opera sin servidores ni bases de datos tradicionales: la blockchain es la única fuente de verdad."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border/70 hover:border-primary/50 hover:bg-card/90 shadow-2xs hover:shadow-md transition-all group"
              >
                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <i className={`${feature.icon} text-base`} />
                </div>
                <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* POR QUÉ UNIRSE / BENEFICIOS (PERKS) */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-border/60 bg-muted/20 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-start">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Formación Práctica de Alto Nivel
            </span>
            <h3 className="text-2xl font-black tracking-tight text-foreground font-heading">
              {(t("defiLabSection.perksTitle") as string) || "¿Por qué unirte a la experiencia?"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 rounded-2xl bg-card border border-border/60 shadow-2xs"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                  <div className="size-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-black">
                    {index + 1}
                  </div>
                  <span>{perk.title}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-8">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
