"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/context/I18nContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogHeaderProps {
  title: string;
  description?: string;
  badgeText?: string;
  breadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  backHref?: string;
}

export function BlogHeader({
  title,
  description,
  badgeText,
  breadcrumbs,
  showBackButton = false,
  backHref = "/blog/",
}: BlogHeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="relative w-full py-10 sm:py-14 border-b border-border/40 bg-gradient-to-b from-muted/40 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        {/* Migas de pan (Breadcrumbs) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <Home className="size-3.5" />
                  <span>{(t("blog.backToHome") as string) || "Inicio"}</span>
                </Link>
              </li>
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center gap-1.5">
                    <ChevronRight className="size-3 text-muted-foreground/50 shrink-0" />
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs">
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Botón de retroceso opcional */}
        {showBackButton && (
          <div className="mb-4">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors py-1 px-2.5 rounded-lg bg-muted/50 hover:bg-muted border border-border/40"
            >
              <ArrowLeft className="size-3.5" />
              <span>{(t("blog.backToBlog") as string) || "Volver al Blog"}</span>
            </Link>
          </div>
        )}

        {/* Badge superior */}
        {badgeText && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {badgeText}
            </span>
          </div>
        )}

        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-4">
          {title}
        </h1>

        {/* Descripción */}
        {description && (
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
