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
}

export function BlogCard({ post }: BlogCardProps) {
  const { t } = useTranslation();

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card/80 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 backdrop-blur-xs overflow-hidden">
      <div>
        {/* Imagen de Portada */}
        {post.coverImage && (
          <Link
            href={`/blog/${post.slug}/`}
            className="block relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-muted/30 border border-border/40"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        )}

        {/* Categoría y Tiempo de lectura */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <Link
            href={`/blog/categoria/${post.categorySlug}/`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <Folder className="size-3.5" />
            <span>{post.category}</span>
          </Link>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
            <Clock className="size-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Título del artículo */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}/`} className="focus:outline-hidden">
            {post.title}
          </Link>
        </h3>

        {/* Extracto */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>
      </div>

      {/* Pie de tarjeta: Fecha, Tags y Botón de lectura */}
      <div className="pt-4 border-t border-border/40 mt-auto flex flex-col gap-3">
        {/* Tags */}
        {post.tags.length > 0 && (
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
        <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <Link
            href={`/blog/${post.slug}/`}
            className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-0.5 transition-transform"
          >
            <span>{(t("blog.readArticle") as string) || "Leer más"}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
