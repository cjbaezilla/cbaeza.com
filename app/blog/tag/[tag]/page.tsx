import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getPostsByTag,
} from "@/lib/blog";

export const dynamic = "force-static";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
  const { tag } = await props.params;
  const tags = getAllTags();
  const currentTag = tags.find((t) => t.slug === tag);

  const tagName = currentTag ? currentTag.name : tag;

  return {
    title: `Etiqueta: #${tagName} | Blog`,
    description: `Publicaciones y tutoriales técnicos etiquetados con #${tagName}.`,
    alternates: {
      canonical: `https://cbaeza.com/blog/tag/${tag}/`,
    },
    openGraph: {
      title: `Etiqueta: #${tagName} | Blog de Carlos Baeza`,
      description: `Artículos y notas técnicas con la etiqueta #${tagName}.`,
      url: `https://cbaeza.com/blog/tag/${tag}/`,
      type: "website",
    },
  };
}

export default async function TagPage(props: TagPageProps) {
  const { tag } = await props.params;
  const tags = getAllTags();
  const currentTag = tags.find((t) => t.slug === tag);

  if (!currentTag) {
    notFound();
  }

  const posts = getPostsByTag(tag);
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <BlogHeader
          title={`Etiqueta: #${currentTag.name}`}
          description={`Listado de artículos y temas relacionados con #${currentTag.name}.`}
          badgeText="Filtro por Etiqueta"
          showBackButton
          backHref="/blog/"
          breadcrumbs={[
            { label: "Blog", href: "/blog/" },
            { label: `#${currentTag.name}` },
          ]}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl py-10">
          <BlogSearchFilter
            posts={allPosts}
            categories={categories}
            tags={tags}
            initialTag={currentTag.slug}
          />
        </div>
      </main>

      <footer className="w-full border-t border-border/40 py-6 text-center text-xs text-muted-foreground bg-muted/20">
        <p>© {new Date().getFullYear()} Carlos Baeza Negroni. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
