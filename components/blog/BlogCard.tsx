"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Tag as TagIcon, Folder } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/context/I18nContext";

interface BlogCardProps {
  post: BlogPostMeta;
  showTags?: boolean;
  showDate?: boolean;
}

export function BlogCard({ post, showTags = false, showDate = true }: BlogCardProps) {
  const { t } = useTranslation();

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 backdrop-blur-xs overflow-hidden">
      {/* Imagen de Portada completa en la cabecera de la tarjeta */}
      {post.coverImage && (
        <Link
          href={`/blog/${post.slug}/`}
          className="block relative w-full aspect-[16/9] overflow-hidden bg-muted/20 border-b border-border/40 flex items-center justify-center"
        >
          {/* Fondo ambiental sutil para portadas con diferentes proporciones */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={post.coverImage}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover blur-lg scale-125 opacity-25"
            />
          </div>
          {/* Imagen frontal desplegada completamente sin recorte */}
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      )}

      {/* Contenido de la Tarjeta */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Categorías y Tiempo de lectura */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {post.categories.map((cat, idx) => {
                const catSlug = post.categorySlugs[idx];
                return (
                  <Link
                    key={catSlug}
                    href={`/blog/categoria/${catSlug}/`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    <Folder className="size-3" />
                    <span>{cat}</span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
              <Clock className="size-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Título del artículo */}
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2.5 line-clamp-2">
            <Link href={`/blog/${post.slug}/`} className="focus:outline-hidden">
              {post.title}
            </Link>
          </h3>

          {/* Extracto */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Pie de tarjeta: Fecha, Tags (opcional) y Botón de lectura */}
        <div className="pt-3.5 border-t border-border/40 mt-auto flex flex-col gap-2.5">
          {/* Tags */}
          {showTags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 items-center">
              <TagIcon className="size-3 text-muted-foreground/60 shrink-0" />
              {post.tags.map((tag, idx) => {
                const tagSlug = post.tagSlugs[idx];
                return (
                  <Link key={tagSlug} href={`/blog/tag/${tagSlug}/`}>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal py-0 px-2 rounded-md hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Fecha y Enlace */}
          <div
            className={`flex items-center pt-0.5 text-xs text-muted-foreground ${
              showDate ? "justify-between" : "justify-start"
            }`}
          >
            {showDate && (
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                <time dateTime={post.dateIso || post.date}>{post.date}</time>
              </div>
            )}
            <Link
              href={`/blog/${post.slug}/`}
              className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-0.5 transition-transform text-xs"
            >
              <span>{(t("blog.readArticle") as string) || "Leer más"}</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
