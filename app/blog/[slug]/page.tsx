import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Folder, Tag as TagIcon, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButton } from "@/components/blog/ShareButton";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

export const dynamic = "force-static";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Blog",
    };
  }

  const url = `https://cbaeza.com/blog/${slug}/`;
  const imageUrl = post.coverImage || "/images/logo.png";

  return {
    title: `${post.title} | Carlos Baeza Negroni`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://cbaeza.com" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@cjbaezilla",
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage ? `https://cbaeza.com${post.coverImage}` : "https://cbaeza.com/images/logo.png",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://cbaeza.com",
    },
    "publisher": {
      "@type": "Person",
      "name": "Carlos Baeza Negroni",
      "url": "https://cbaeza.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cbaeza.com/blog/${post.slug}/`,
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Cabecera del Artículo */}
        <header className="relative w-full py-10 sm:py-14 border-b border-border/40 bg-gradient-to-b from-muted/40 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
            {/* Navegación y Botón Volver */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-lg bg-muted/50 hover:bg-muted border border-border/40"
              >
                <ArrowLeft className="size-3.5" />
                <span>Volver al Blog</span>
              </Link>
              <ShareButton title={post.title} />
            </div>

            {/* Categoría */}
            <div className="mb-4">
              <Link href={`/blog/categoria/${post.categorySlug}/`}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                  <Folder className="size-3" />
                  {post.category}
                </span>
              </Link>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Metadatos (Autor, Fecha, Tiempo de lectura) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground pt-4 border-t border-border/40">
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <User className="size-3.5 text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Cuerpo del Artículo */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl py-10">
          <article className="prose-blog bg-card/40 border border-border/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs backdrop-blur-xs">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>

          {/* Tags al pie del artículo */}
          {post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mr-2">
                <TagIcon className="size-3.5" />
                <span>Etiquetas:</span>
              </div>
              {post.tags.map((tag, idx) => {
                const tagSlug = post.tagSlugs[idx];
                return (
                  <Link key={tagSlug} href={`/blog/tag/${tagSlug}/`}>
                    <Badge
                      variant="outline"
                      className="text-xs py-1 px-3 rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Tarjeta de Perfil del Autor */}
          <div className="mt-10 p-6 rounded-2xl bg-muted/30 border border-border/40 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="size-16 rounded-2xl bg-card border border-border flex items-center justify-center p-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Carlos Baeza"
                width={64}
                height={64}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground mb-1">
                Carlos Baeza Negroni
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Ingeniero Consultor Senior Especializado en Blockchain, EVM, Seguridad en Smart Contracts, DeFi y Arquitecturas Descentralizadas. Docente en USACH.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <Link
                  href="/"
                  className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Sparkles className="size-3" />
                  Ver perfil y proyectos
                </Link>
                <span className="text-muted-foreground/40">•</span>
                <Link
                  href="/blog/"
                  className="font-semibold text-muted-foreground hover:text-foreground"
                >
                  Más artículos
                </Link>
              </div>
            </div>
          </div>

          {/* Artículos Relacionados */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border/40">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground font-heading">
                  Artículos Relacionados
                </h3>
                <Link
                  href="/blog/"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Ver todos
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.slug} post={rPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Pie de página */}
      <footer className="w-full border-t border-border/40 py-6 text-center text-xs text-muted-foreground bg-muted/20">
        <p>© {new Date().getFullYear()} Carlos Baeza Negroni. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
