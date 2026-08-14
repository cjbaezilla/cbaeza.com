import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog & Artículos Técnicos",
  description:
    "Artículos, guías técnicas, seguridad en contratos inteligentes, arquitectura Web3 y desarrollo de software por Carlos Baeza Negroni.",
  alternates: {
    canonical: "https://cbaeza.com/blog/",
  },
  openGraph: {
    title: "Blog & Artículos Técnicos | Carlos Baeza Negroni",
    description:
      "Artículos, guías técnicas, seguridad en contratos inteligentes, arquitectura Web3 y desarrollo de software por Carlos Baeza Negroni.",
    url: "https://cbaeza.com/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Cabecera del Blog */}
        <BlogHeader
          title="Blog & Artículos Técnicos"
          description="Espacio dedicado a la divulgación de ingeniería de software, arquitectura de sistemas descentralizados, seguridad EVM y herramientas Web3."
          badgeText="Artículos & Publicaciones"
          breadcrumbs={[{ label: "Blog" }]}
        />

        {/* Contenido Principal con Buscador y Filtros */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl py-10">
          <BlogSearchFilter
            posts={posts}
            categories={categories}
            tags={tags}
          />
        </div>
      </main>

      {/* Pie de página condensado */}
      <footer className="w-full border-t border-border/40 py-6 text-center text-xs text-muted-foreground bg-muted/20">
        <p>© {new Date().getFullYear()} Carlos Baeza Negroni. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
