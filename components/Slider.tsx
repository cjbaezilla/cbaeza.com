"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "@/lib/blog";
import { useTranslation } from "@/context/I18nContext";
import {
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Newspaper,
} from "lucide-react";

export interface SliderProps {
  posts?: BlogPostMeta[];
  items?: Array<{
    title: string;
    tag: string;
    link: string;
    description?: string;
    icon?: string;
    coverImage?: string;
  }>;
}

export default function Slider({ posts = [], items }: SliderProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Normalizar las entradas a una lista unificada
  const slides = React.useMemo(() => {
    if (posts && posts.length > 0) {
      return posts.map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category || "Noticias",
        categorySlug: post.categorySlug || "noticias",
        date: post.date,
        readTime: post.readTime,
        coverImage: post.coverImage,
        tags: post.tags || [],
        link: `/blog/${post.slug}/`,
      }));
    }

    if (items && items.length > 0) {
      return items.map((item, index) => ({
        slug: `item-${index}`,
        title: item.title,
        excerpt: item.description || "",
        category: item.tag || "Noticias",
        categorySlug: "noticias",
        date: "",
        readTime: "",
        coverImage: item.coverImage,
        tags: [],
        link: item.link,
      }));
    }

    return [];
  }, [posts, items]);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    if (totalSlides === 0) return;
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    if (totalSlides === 0) return;
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [totalSlides, isPaused, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (totalSlides === 0) return null;

  const currentSlide = slides[activeIndex];

  return (
    <div
      className="relative w-full rounded-3xl border border-border/80 bg-card/95 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Carrusel de Noticias"
    >
      {/* Contenedor relativo de diapositivas */}
      <div className="relative w-full flex flex-col justify-between">
        {slides.map((slide, index) => {
          const isCurrent = index === activeIndex;

          return (
            <div
              key={slide.slug || index}
              className={`w-full flex flex-col justify-between transition-all duration-500 ease-in-out ${
                isCurrent
                  ? "relative opacity-100 translate-x-0 scale-100 z-10"
                  : "absolute inset-0 w-full h-full opacity-0 translate-x-4 scale-98 pointer-events-none z-0"
              }`}
              aria-hidden={!isCurrent}
            >
              <div className="flex flex-col">
                {/* Imagen de Portada completa en la cabecera de la tarjeta */}
                <Link
                  href={slide.link}
                  className="block relative w-full aspect-[16/9] overflow-hidden bg-muted/20 border-b border-border/40 flex items-center justify-center group/img focus:outline-none focus:ring-2 focus:ring-primary/40"
                  tabIndex={isCurrent ? 0 : -1}
                >
                  {slide.coverImage ? (
                    <>
                      {/* Fondo ambiental sutil para portadas con diferentes proporciones */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Image
                          src={slide.coverImage}
                          alt=""
                          fill
                          unoptimized
                          aria-hidden="true"
                          className="object-cover blur-lg scale-125 opacity-25"
                        />
                      </div>
                      {/* Imagen frontal desplegada completamente sin recorte */}
                      <Image
                        src={slide.coverImage}
                        alt={slide.title}
                        fill
                        unoptimized
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                        className="relative z-10 object-contain transition-transform duration-500 group-hover/img:scale-105"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/15 via-accent to-background text-primary p-6">
                      <Newspaper className="size-12 opacity-40 mb-2" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        cbaeza.com / blog
                      </span>
                    </div>
                  )}
                </Link>

                {/* Contenido de la Tarjeta con espaciado interno */}
                <div className="p-4 sm:p-5 flex flex-col gap-3">
                  {/* Título de la Noticia */}
                  <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug line-clamp-2 hover:text-primary transition-colors">
                    <Link
                      href={slide.link}
                      className="hover:text-primary transition-colors inline-block focus:outline-none focus:text-primary"
                      tabIndex={isCurrent ? 0 : -1}
                    >
                      {slide.title}
                    </Link>
                  </h3>

                  {/* Fila de Metadatos: Fecha, Categoría y Tiempo de Lectura */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground font-medium">
                    {slide.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" />
                        <span>{slide.date}</span>
                      </div>
                    )}

                    {slide.category && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-border/80 hidden sm:inline">•</span>
                        <Link
                          href={`/blog/categoria/${slide.categorySlug}/`}
                          className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                          tabIndex={isCurrent ? 0 : -1}
                        >
                          <Sparkles className="size-3" />
                          <span>{slide.category}</span>
                        </Link>
                      </div>
                    )}

                    {slide.readTime && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-border/80 hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3.5 text-primary" />
                          <span>{slide.readTime}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Extracto descriptivo */}
                  {slide.excerpt && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {slide.excerpt}
                    </p>
                  )}

                  {/* Etiquetas secundarias */}
                  {slide.tags && slide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {slide.tags.slice(0, 3).map((tag, tagIdx) => (
                        <Link
                          key={tagIdx}
                          href={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}/`}
                          className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary/80 hover:bg-secondary text-[10px] font-semibold text-secondary-foreground border border-border/40 transition-colors"
                          tabIndex={isCurrent ? 0 : -1}
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Barra de Controles y Navegación Inferior */}
      <div className="flex items-center justify-between px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-border/50 mt-auto">
        {/* Indicadores de Diapositiva y Contador */}
        <div className="flex items-center gap-3">
          {/* Puntos interactivos con expansión activa */}
          <div className="flex gap-1.5 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary ${
                  index === activeIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2"
                }`}
                aria-label={`Ir a noticia ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          {/* Contador numérico */}
          <span className="text-[11px] font-mono font-bold text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        </div>

        {/* Acciones: Enlace al artículo y Botones de Flechas */}
        <div className="flex items-center gap-2">
          {currentSlide && (
            <Link
              href={currentSlide.link}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 transition-all group/btn"
              aria-label={`Leer artículo: ${currentSlide.title}`}
            >
              <span>{t("hero.readMore") as string || "Leer más"}</span>
              <ArrowRight className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          )}

          <div className="flex gap-1">
            <button
              onClick={handlePrev}
              className="size-8 rounded-xl border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Noticia anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={handleNext}
              className="size-8 rounded-xl border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Siguiente noticia"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
