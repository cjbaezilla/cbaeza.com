import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cbaeza.com";
  const now = new Date();

  // Rutas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Rutas dinámicas de Artículos del Blog
  const posts = getAllPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Rutas de Categorías
  const categories = getAllCategories();
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/blog/categoria/${cat.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Rutas de Tags
  const tags = getAllTags();
  const tagRoutes: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes, ...tagRoutes];
}
