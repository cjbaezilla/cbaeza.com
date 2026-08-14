import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10">
          <BlogSearchFilter
            posts={posts}
            categories={categories}
            tags={tags}
          />
        </div>
      </main>

      {/* Footer completo del sitio */}
      <Footer />
    </div>
  );
}
