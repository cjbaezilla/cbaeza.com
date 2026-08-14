import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  categorySlug: string;
  tags: string[];
  tagSlugs: string[];
  coverImage?: string;
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
  contentRaw: string;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
}

export interface TagInfo {
  name: string;
  slug: string;
  count: number;
}

/**
 * Normaliza una cadena de texto para utilizarla como slug seguro en URLs.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Elimina acentos y diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remueve caracteres no alfanuméricos
    .replace(/[\s_-]+/g, "-") // Reemplaza espacios y guiones bajos por guiones
    .replace(/^-+|-+$/g, ""); // Remueve guiones al inicio y final
}

/**
 * Calcula un tiempo de lectura estimado en minutos a partir del contenido de texto.
 */
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min de lectura`;
}

/**
 * Asegura que el directorio de posts exista para prevenir errores en tiempo de ejecución.
 */
function ensurePostsDirectory(): void {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

/**
 * Obtiene todos los artículos publicados ordenados de más reciente a más antiguo.
 */
export function getAllPosts(): BlogPostMeta[] {
  ensurePostsDirectory();
  const fileNames = fs.readdirSync(postsDirectory);
  const markdownFiles = fileNames.filter((file) => file.endsWith(".md"));

  const allPosts = markdownFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const category = (data.category as string) || "General";
    const categorySlug = slugify(category);
    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
    const tagSlugs = tags.map((tag) => slugify(tag));
    const readTime = (data.readTime as string) || calculateReadingTime(content);

    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || new Date().toISOString().split("T")[0],
      excerpt: (data.excerpt as string) || content.slice(0, 160).trim() + "...",
      author: (data.author as string) || "Carlos Baeza Negroni",
      category,
      categorySlug,
      tags,
      tagSlugs,
      coverImage: data.coverImage as string | undefined,
      readTime,
    };
  });

  // Ordenar cronológicamente descendente
  return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

/**
 * Obtiene el contenido completo y metadatos de un artículo por su slug.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensurePostsDirectory();
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Configuración de marked para renderizado HTML seguro y limpio
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const contentHtml = await marked.parse(content);

  const category = (data.category as string) || "General";
  const categorySlug = slugify(category);
  const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
  const tagSlugs = tags.map((tag) => slugify(tag));
  const readTime = (data.readTime as string) || calculateReadingTime(content);

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || new Date().toISOString().split("T")[0],
    excerpt: (data.excerpt as string) || content.slice(0, 160).trim() + "...",
    author: (data.author as string) || "Carlos Baeza Negroni",
    category,
    categorySlug,
    tags,
    tagSlugs,
    coverImage: data.coverImage as string | undefined,
    readTime,
    contentHtml,
    contentRaw: content,
  };
}

/**
 * Obtiene todas las categorías únicas con su conteo de publicaciones.
 */
export function getAllCategories(): CategoryInfo[] {
  const posts = getAllPosts();
  const categoryMap = new Map<string, { name: string; count: number }>();

  posts.forEach((post) => {
    const slug = post.categorySlug;
    if (categoryMap.has(slug)) {
      categoryMap.get(slug)!.count += 1;
    } else {
      categoryMap.set(slug, { name: post.category, count: 1 });
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, info]) => ({
    slug,
    name: info.name,
    count: info.count,
  })).sort((a, b) => b.count - a.count);
}

/**
 * Obtiene todas las etiquetas (tags) únicas con su conteo de publicaciones.
 */
export function getAllTags(): TagInfo[] {
  const posts = getAllPosts();
  const tagMap = new Map<string, { name: string; count: number }>();

  posts.forEach((post) => {
    post.tags.forEach((tag, idx) => {
      const slug = post.tagSlugs[idx];
      if (tagMap.has(slug)) {
        tagMap.get(slug)!.count += 1;
      } else {
        tagMap.set(slug, { name: tag, count: 1 });
      }
    });
  });

  return Array.from(tagMap.entries()).map(([slug, info]) => ({
    slug,
    name: info.name,
    count: info.count,
  })).sort((a, b) => b.count - a.count);
}

/**
 * Filtra artículos pertenecientes a una categoría específica por su slug.
 */
export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.categorySlug === categorySlug);
}

/**
 * Filtra artículos que contienen una etiqueta específica por su slug.
 */
export function getPostsByTag(tagSlug: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tagSlugs.includes(tagSlug));
}

/**
 * Obtiene artículos recomendados o relacionados basados en tags coincidentes.
 */
export function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit: number = 3
): BlogPostMeta[] {
  const posts = getAllPosts().filter((post) => post.slug !== currentSlug);
  const currentTagSlugs = tags.map((t) => slugify(t));

  const scored = posts.map((post) => {
    const matches = post.tagSlugs.filter((tag) => currentTagSlugs.includes(tag)).length;
    return { post, matches };
  });

  scored.sort((a, b) => b.matches - a.matches);
  return scored.slice(0, limit).map((item) => item.post);
}
