import { getPostsByCategory } from "@/lib/blog";
import HomeContent from "@/components/HomeContent";

export const dynamic = "force-static";

export default function Home() {
  // Obtener los artículos de blog con categoría "noticias" para el carrusel de la portada
  const newsPosts = getPostsByCategory("noticias");

  return <HomeContent newsPosts={newsPosts} />;
}
