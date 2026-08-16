import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string; // Formato de visualización DD-MM-YYYY
  dateIso?: string; // Formato ISO YYYY-MM-DD para SEO/OpenGraph/Schema.org
  excerpt: string;
  author: string;
  categories: string[];
  categorySlugs: string[];
  category: string; // Primera categoría para retrocompatibilidad
  categorySlug: string; // Slug de primera categoría para retrocompatibilidad
  tags: string[];
  tagSlugs: string[];
  coverImage?: string;
  readTime: string;
  featured?: boolean;
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
 * Normaliza las categorías desde el Frontmatter (soporta arrays de strings, strings separados por coma o campos singulares).
 */
export function extractCategories(data: Record<string, unknown>): string[] {
  const raw = data.categories ?? data.category;
  if (Array.isArray(raw)) {
    const list = raw.map((c) => String(c).trim()).filter(Boolean);
    return list.length > 0 ? list : ["General"];
  }
  if (typeof raw === "string" && raw.trim()) {
    if (raw.includes(",")) {
      const list = raw.split(",").map((c) => c.trim()).filter(Boolean);
      return list.length > 0 ? list : ["General"];
    }
    return [raw.trim()];
  }
  return ["General"];
}

/**
 * Normaliza cualquier entrada de fecha (Date, "DD-MM-YYYY", "YYYY-MM-DD", ISO) a un objeto Date de JavaScript.
 */
export function parseDate(dateInput: string | Date | undefined | null): Date {
  if (!dateInput) return new Date();
  if (dateInput instanceof Date) return isNaN(dateInput.getTime()) ? new Date() : dateInput;

  const str = String(dateInput).trim();

  // Coincidencia con formato DD-MM-YYYY o DD/MM/YYYY
  const ddmmyyyyMatch = str.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (ddmmyyyyMatch) {
    const day = parseInt(ddmmyyyyMatch[1], 10);
    const month = parseInt(ddmmyyyyMatch[2], 10) - 1;
    const year = parseInt(ddmmyyyyMatch[3], 10);
    return new Date(year, month, day);
  }

  // Coincidencia con formato YYYY-MM-DD o YYYY/MM/DD
  const yyyymmddMatch = str.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  if (yyyymmddMatch) {
    const year = parseInt(yyyymmddMatch[1], 10);
    const month = parseInt(yyyymmddMatch[2], 10) - 1;
    const day = parseInt(yyyymmddMatch[3], 10);
    return new Date(year, month, day);
  }

  const parsed = new Date(str);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

/**
 * Formatea una fecha a la representación estándar "DD-MM-YYYY".
 */
export function formatDate(dateInput: string | Date | undefined | null): string {
  const d = parseDate(dateInput);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Formatea una fecha a la representación ISO estándar "YYYY-MM-DD" para metadatos y schemas.
 */
export function formatIsoDate(dateInput: string | Date | undefined | null): string {
  const d = parseDate(dateInput);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
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

    const categories = extractCategories(data);
    const categorySlugs = categories.map((cat) => slugify(cat));
    const category = categories[0] || "General";
    const categorySlug = categorySlugs[0] || "general";
    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
    const tagSlugs = tags.map((tag) => slugify(tag));
    const readTime = (data.readTime as string) || calculateReadingTime(content);
    const date = formatDate(data.date);
    const dateIso = formatIsoDate(data.date);
    const featured = Boolean(data.featured ?? data.destacado ?? false);

    return {
      slug,
      title: (data.title as string) || slug,
      date,
      dateIso,
      excerpt: (data.excerpt as string) || content.slice(0, 160).trim() + "...",
      author: (data.author as string) || "Carlos Baeza Negroni",
      categories,
      categorySlugs,
      category,
      categorySlug,
      tags,
      tagSlugs,
      coverImage: data.coverImage as string | undefined,
      readTime,
      featured,
    };
  });

  // Ordenar cronológicamente descendente
  return allPosts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
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

  // Configuración de marked para renderizado HTML seguro, limpio y soporte de diagramas Mermaid
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  marked.use({
    renderer: {
      code({ text, lang }: { text: string; lang?: string }) {
        if (lang === "mermaid") {
          return `<div class="mermaid-wrapper"><pre class="mermaid notranslate">${text}</pre></div>\n`;
        }
        return false as unknown as string;
      },
    },
  });

  const contentHtml = await marked.parse(content);

  const categories = extractCategories(data);
  const categorySlugs = categories.map((cat) => slugify(cat));
  const category = categories[0] || "General";
  const categorySlug = categorySlugs[0] || "general";
  const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
  const tagSlugs = tags.map((tag) => slugify(tag));
  const readTime = (data.readTime as string) || calculateReadingTime(content);
  const date = formatDate(data.date);
  const dateIso = formatIsoDate(data.date);
  const featured = Boolean(data.featured ?? data.destacado ?? false);

  return {
    slug,
    title: (data.title as string) || slug,
    date,
    dateIso,
    excerpt: (data.excerpt as string) || content.slice(0, 160).trim() + "...",
    author: (data.author as string) || "Carlos Baeza Negroni",
    categories,
    categorySlugs,
    category,
    categorySlug,
    tags,
    tagSlugs,
    coverImage: data.coverImage as string | undefined,
    readTime,
    featured,
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
    post.categories.forEach((cat, idx) => {
      const slug = post.categorySlugs[idx];
      if (categoryMap.has(slug)) {
        categoryMap.get(slug)!.count += 1;
      } else {
        categoryMap.set(slug, { name: cat, count: 1 });
      }
    });
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
  return posts.filter((post) => post.categorySlugs.includes(categorySlug));
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
