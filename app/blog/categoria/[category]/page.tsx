import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getPostsByCategory,
} from "@/lib/blog";

export const dynamic = "force-static";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category } = await props.params;
  const categories = getAllCategories();
  const currentCategory = categories.find((c) => c.slug === category);

  const categoryName = currentCategory ? currentCategory.name : category;

  return {
    title: `Categoría: ${categoryName} | Blog`,
    description: `Explora todos los artículos técnicos y publicaciones en la categoría ${categoryName}.`,
    alternates: {
      canonical: `https://cbaeza.com/blog/categoria/${category}/`,
    },
    openGraph: {
      title: `Categoría: ${categoryName} | Blog de Carlos Baeza`,
      description: `Artículos y publicaciones técnicas sobre ${categoryName}.`,
      url: `https://cbaeza.com/blog/categoria/${category}/`,
      type: "website",
    },
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category } = await props.params;
  const categories = getAllCategories();
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const posts = getPostsByCategory(category);
  const allPosts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <BlogHeader
          title={`Categoría: ${currentCategory.name}`}
          description={`Colección de artículos, notas técnicas y análisis enfocados en ${currentCategory.name}.`}
          badgeText="Filtro por Categoría"
          showBackButton
          backHref="/blog/"
          breadcrumbs={[
            { label: "Blog", href: "/blog/" },
            { label: currentCategory.name },
          ]}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl py-10">
          <BlogSearchFilter
            posts={allPosts}
            categories={categories}
            tags={tags}
            initialCategory={currentCategory.slug}
          />
        </div>
      </main>

      <footer className="w-full border-t border-border/40 py-6 text-center text-xs text-muted-foreground bg-muted/20">
        <p>© {new Date().getFullYear()} Carlos Baeza Negroni. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
