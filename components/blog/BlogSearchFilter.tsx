"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, X, Folder, Tag as TagIcon, Sparkles, SlidersHorizontal, ChevronDown } from "lucide-react";
import { BlogPostMeta, CategoryInfo, TagInfo } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/context/I18nContext";

interface BlogSearchFilterProps {
  posts: BlogPostMeta[];
  categories: CategoryInfo[];
  tags: TagInfo[];
  initialCategory?: string;
  initialTag?: string;
  showCategoryFilters?: boolean;
  showTagFilters?: boolean;
}

function BlogSearchFilterContent({
  posts,
  categories,
  tags,
  initialCategory,
  initialTag,
  showCategoryFilters = true,
  showTagFilters = true,
}: BlogSearchFilterProps) {
  const { t } = useTranslation();
  const searchParams = useSearchParams();

  const paramQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(paramQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [selectedTag, setSelectedTag] = useState<string>(initialTag || "all");

  // Separar etiquetas con 2 o más artículos de las que solo tienen 1
  const { frequentTags, singleTags } = useMemo(() => {
    const frequent: TagInfo[] = [];
    const single: TagInfo[] = [];
    tags.forEach((tag) => {
      if (tag.count >= 2) {
        frequent.push(tag);
      } else {
        single.push(tag);
      }
    });
    return { frequentTags: frequent, singleTags: single };
  }, [tags]);

  const isInitialInSingle = initialTag ? tags.some((t) => t.slug === initialTag && t.count < 2) : false;
  const [showAllTags, setShowAllTags] = useState<boolean>(isInitialInSingle);

  // Filtrado reactivo en memoria
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Filtro por categoría
      if (selectedCategory !== "all" && !post.categorySlugs.includes(selectedCategory)) {
        return false;
      }

      // Filtro por tag
      if (selectedTag !== "all" && !post.tagSlugs.includes(selectedTag)) {
        return false;
      }

      // Filtro por texto de búsqueda
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesCategory = post.categories.some((cat) => cat.toLowerCase().includes(query));
        const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(query));

        if (!matchesTitle && !matchesExcerpt && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [posts, searchQuery, selectedCategory, selectedTag]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    (selectedCategory !== "all" && !initialCategory) ||
    (selectedTag !== "all" && !initialTag);

  const clearAllFilters = () => {
    setSearchQuery("");
    if (!initialCategory) setSelectedCategory("all");
    if (!initialTag) setSelectedTag("all");
  };

  return (
    <div className="w-full space-y-8">
      {/* Barra de Búsqueda y Filtros Rápidos */}
      <div className="bg-card/70 border border-border/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xs space-y-5">
        {/* Campo de Búsqueda */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={(t("blog.searchPlaceholder") as string) || "Buscar artículos por título, contenido, categoría o tag..."}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title="Borrar búsqueda"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Categorías (Pills) */}
        {showCategoryFilters && categories.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              <Folder className="size-3.5" />
              <span>{(t("blog.categories") as string) || "Categorías"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border-border/40"
                }`}
              >
                {(t("blog.allCategories") as string) || "Todas"} ({posts.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.slug
                      ? "bg-primary text-primary-foreground border-primary shadow-xs"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border-border/40"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tags (Chips) */}
        {showTagFilters && tags.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/30">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                <TagIcon className="size-3.5" />
                <span>{(t("blog.tags") as string) || "Etiquetas"}</span>
              </div>
              {singleTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllTags((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline transition-colors cursor-pointer"
                >
                  <span>
                    {showAllTags
                      ? ((t("blog.showLessTags") as string) || "Mostrar menos")
                      : `+${singleTags.length} ${(t("blog.moreTags") as string) || "más (1 artículo)"}`}
                  </span>
                  <ChevronDown
                    className={`size-3 transition-transform duration-200 ${
                      showAllTags ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 items-center">
              {/* Botón #todos */}
              <button
                onClick={() => setSelectedTag("all")}
                className={`text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                  selectedTag === "all"
                    ? "bg-primary/20 text-primary border-primary/50 font-semibold"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border-border/40"
                }`}
              >
                #todos
              </button>

              {/* Etiquetas con 2 o más artículos */}
              {frequentTags.map((tag) => (
                <button
                  key={tag.slug}
                  onClick={() => setSelectedTag(tag.slug)}
                  className={`text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                    selectedTag === tag.slug
                      ? "bg-primary/20 text-primary border-primary/50 font-semibold"
                      : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border-border/40"
                  }`}
                >
                  #{tag.name} ({tag.count})
                </button>
              ))}

              {/* Etiquetas con 1 solo artículo (visibles cuando el toggle está abierto o si está seleccionada) */}
              {showAllTags
                ? singleTags.map((tag) => (
                    <button
                      key={tag.slug}
                      onClick={() => setSelectedTag(tag.slug)}
                      className={`text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                        selectedTag === tag.slug
                          ? "bg-primary/20 text-primary border-primary/50 font-semibold"
                          : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border-border/40"
                      }`}
                    >
                      #{tag.name} ({tag.count})
                    </button>
                  ))
                : singleTags
                    .filter((tag) => selectedTag === tag.slug)
                    .map((tag) => (
                      <button
                        key={tag.slug}
                        onClick={() => setSelectedTag(tag.slug)}
                        className="text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer bg-primary/20 text-primary border-primary/50 font-semibold"
                      >
                        #{tag.name} ({tag.count})
                      </button>
                    ))}

              {/* Toggle Chip al final de la lista */}
              {singleTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllTags((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md border border-dashed border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all cursor-pointer font-medium"
                >
                  <span>
                    {showAllTags
                      ? ((t("blog.showLessTags") as string) || "Mostrar menos")
                      : `+${singleTags.length} ${(t("blog.moreTags") as string) || "más (1 artículo)"}`}
                  </span>
                  <ChevronDown
                    className={`size-3 transition-transform duration-200 ${
                      showAllTags ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Barra de Estado y Limpieza de Filtros */}
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border/30">
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="size-3.5 text-primary" />
            <span>
              <strong>{filteredPosts.length}</strong> {(t("blog.articlesCount") as string) || "artículos encontrados"}
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline cursor-pointer"
            >
              <X className="size-3" />
              <span>{(t("blog.clearFilters") as string) || "Limpiar filtros"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid de Artículos o Estado Vacío */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border bg-card/40 my-8">
          <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Sparkles className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            {(t("blog.noResults") as string) || "No se encontraron artículos"}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            {(t("blog.tryAnotherSearch") as string) || "Intenta ajustar las palabras clave o seleccionar otra categoría/etiqueta."}
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
          >
            {(t("blog.clearFilters") as string) || "Restablecer todos los filtros"}
          </button>
        </div>
      )}
    </div>
  );
}

export function BlogSearchFilter(props: BlogSearchFilterProps) {
  return (
    <Suspense fallback={<div className="text-sm text-muted-foreground py-8 text-center">Cargando buscador...</div>}>
      <BlogSearchFilterContent {...props} />
    </Suspense>
  );
}
