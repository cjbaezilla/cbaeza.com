# 🌐 cbaeza.com — Portafolio Personal Profesional & Blog Técnico

![Captura de pantalla de cbaeza.com](public/images/screenshot.jpeg)

Este es el repositorio oficial del sitio web, portafolio profesional y blog técnico de **Carlos Baeza Negroni**, Ingeniero Consultor Senior especializado en Blockchain, Contratos Inteligentes (Solidity, EVM), DeFi, DAOs, NFTs, RWA y mecanismos avanzados de staking.

El sitio es una aplicación web moderna, rápida y completamente internacionalizada (soporte para más de 80 idiomas), construida sobre la última versión de Next.js y diseñada con una estética visual premium, interactiva y responsiva.

---

## 🛠️ Pila Tecnológica

El proyecto utiliza tecnologías de vanguardia para garantizar la escalabilidad, el rendimiento óptimo y una excelente experiencia tanto de desarrollo como de usuario final:

- **Framework**: [Next.js `16.2.6`](https://nextjs.org/) utilizando la arquitectura **App Router**.
- **Motor de Renderizado**: Compilación y exportación estática optimizada (`output: "export"` y `trailingSlash: true` en `next.config.ts`), lista para despliegues descentralizados, CDNs y **servidores compartidos de hosting** (Apache/cPanel/Nginx).
- **Runtime**: React `19.2.4` / Node.js.
- **Motor de Blog Estático**: Markdown (`.md`) con metadatos Frontmatter procesados mediante `gray-matter` y compilación ultra rápida a HTML con `marked` (cero bases de datos externas requeridas).
- **Estilos (CSS)**: [Tailwind CSS `^4`](https://tailwindcss.com/) configurado mediante `@tailwindcss/postcss`. No requiere `tailwind.config.ts`, ya que la tematización e inline variables se gestionan directamente a nivel CSS en `app/globals.css`.
- **Componentes de Interfaz**: [shadcn/ui](https://ui.shadcn.com) (preset `base-nova`), construido sobre componentes primitivos de `@base-ui/react`.
- **Iconografía**: [Lucide React](https://lucide.dev/) y [FontAwesome v6](https://fontawesome.com/) para una amplia variedad de iconos sociales y de interfaz.
- **Tipografía**: Fuentes modernas optimizadas a través de `next/font`: *Plus Jakarta Sans* (cuerpo), *Outfit* (títulos) y *Geist Mono* (fuentes monoespaciadas).

---

## 📁 Estructura del Proyecto

El repositorio está organizado de forma modular siguiendo los estándares modernos del App Router de Next.js:

```bash
├── .agents/               # Habilidades y configuraciones para agentes de IA
├── app/                   # Directorio raíz de la aplicación (App Router)
│   ├── blog/              # Vistas y enrutamiento del Blog Estático
│   │   ├── page.tsx       # Catálogo general con buscador interactivo
│   │   ├── [slug]/        # Vista individual del artículo (generación estática por slug)
│   │   ├── categoria/     # Vistas estáticas pre-renderizadas por categoría
│   │   └── tag/           # Vistas estáticas pre-renderizadas por etiqueta
│   ├── colors/            # Paleta de colores y tokens de diseño
│   ├── favicon.ico        # Icono de pestaña del sitio
│   ├── globals.css        # Estilos globales, variables de tema y estilos .prose-blog
│   ├── layout.tsx         # Layout raíz (metadatos globales, SEO, tipografías y JSON-LD)
│   ├── page.tsx           # Página principal (portafolio profesional)
│   ├── robots.ts          # Configuración del archivo robots.txt para buscadores
│   └── sitemap.ts         # Generación dinámica del mapa del sitio para SEO (incluye rutas del blog)
├── components/            # Componentes de React compartidos
│   ├── blog/              # Componentes dedicados para el blog (SearchFilter, BlogCard, BlogHeader, ShareButton)
│   ├── Navbar.tsx         # Barra de navegación con soporte para anclas y rutas internas
│   ├── LanguageSelector.tsx # Selector moderno de idiomas (mobile-first, buscador, categorías y banderas)
│   ├── GoogleTranslate.tsx # Integración con Google Website Translator
│   ├── Slider.tsx         # Carrusel interactivo y responsivo para publicaciones del Hero
│   └── ui/                # Componentes base e independientes de shadcn/ui
├── content/               # Contenido estático del sitio
│   └── posts/             # Artículos del blog en formato Markdown (.md)
├── context/               # Contextos globales de React (I18n, Theme)
├── lib/                   # Funciones utilitarias del sistema
│   ├── blog.ts            # Capa de datos, lectura de Markdown, categorización y cálculo de tiempos
│   ├── languages.ts       # Catálogo estructurado de +80 idiomas globales soportados
│   └── utils.ts           # Utilidades compartidas (ej. fusión de clases con tailwind-merge)
├── messages/              # Diccionario maestro en español
│   └── es.json
├── public/                # Recursos estáticos (imágenes, logos, etc.)
│   └── images/
├── next.config.ts         # Configuración del compilador y exportación estática
├── tsconfig.json          # Configuración del compilador de TypeScript
└── package.json           # Dependencias y scripts del proyecto
```

---

## 📰 Sistema de Blog Estático (Markdown + Frontmatter)

El sitio implementa un sistema de publicaciones técnicas basado en archivos Markdown (`.md`) sin dependencia de bases de datos externas:

- **100% Estático y Servible en Hosting Compartido**: Todas las páginas (`/blog/`, `/blog/categoria/[category]/`, `/blog/tag/[tag]/` y `/blog/[slug]/`) se pre-renderizan a archivos `index.html` estáticos durante `npm run build`.
- **Buscador en Tiempo Real**: Filtrado instantáneo en el cliente por texto, categoría y etiquetas con soporte para URLs directas.
- **Internacionalización Dinámica**: Redactando los artículos en español en `content/posts/`, el motor de Google Translate los traduce automáticamente a los más de 80 idiomas disponibles en el selector.
- **SEO y Metadatos**: Generación dinámica de `title`, `description`, etiquetas OpenGraph, Twitter Cards y marcado enriquecido JSON-LD `BlogPosting` para cada post.

### Cómo Crear un Nuevo Artículo

Para publicar un nuevo artículo, crea un archivo `.md` en la carpeta `content/posts/` (por ejemplo `content/posts/mi-nuevo-articulo.md`) con la siguiente estructura de Frontmatter:

```markdown
---
title: "Título de la Publicación"
date: "14-08-2026"
excerpt: "Breve resumen explicativo del artículo..."
author: "Carlos Baeza Negroni"
categories: ["Blockchain", "Seguridad"]
tags: ["Ethereum", "Solidity", "Web3"]
coverImage: "/images/logo.png"
readTime: "4 min de lectura"
---

# Título Principal

Aquí puedes escribir todo el contenido usando formato Markdown estándar (listas, tablas, citas, fragmentos de código, etc.).
```

---

## 🌍 Sistema de Internacionalización (I18n)

El portafolio integra **Google Website Translator** junto a un catálogo de más de 80 idiomas globales con banderas y selector responsive:

- **Fuente Única de Contenido**: Solo se mantiene `messages/es.json`.
- **Selector Moderno & Mobile-First**: `components/LanguageSelector.tsx` ofrece un modal/drawer intuitivo, barra de búsqueda en tiempo real, chips de acceso rápido a idiomas populares y banderas de alta fidelidad.
- **Traducción Dinámica**: Las traducciones se generan de forma nativa en el navegador mediante el motor de Google Translate.
- **Direccionalidad Inteligente**: Soporte automático para lenguajes RTL (Árabe, Hebreo, Persa, etc.) configurando `document.documentElement.dir = "rtl"`.
- **Persistencia**: Recuerda las preferencias del usuario a través de cookies de Google Translate (`googtrans`) y `localStorage`.

---

## 🚀 Inicio Rápido y Desarrollo

### Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión v18 o superior recomendada) y tu gestor de paquetes (`npm`, `yarn`, `pnpm` o `bun`).

### 1. Instalación de Dependencias
```bash
npm install
```

### 2. Servidor de Desarrollo
Para levantar el servidor de desarrollo local con soporte para Fast Refresh:
```bash
npm run dev
```
Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilación y Exportación Estática
Para generar la compilación de producción optimizada y exportar los archivos HTML/CSS/JS estáticos a la carpeta `out/`:
```bash
npm run build
```

---

## 🤖 Guía para Agentes de IA y Colaboradores

Si eres un desarrollador humano o un agente de inteligencia artificial colaborando en este repositorio, **debes seguir estrictamente las directrices del archivo [AGENTS.md](AGENTS.md)**:

1. **Idioma Oficial**: Toda comunicación y cambios en archivos de código, comentarios y documentación deben realizarse **estrictamente en español**.
2. **Exportación Estática**: Respeta la arquitectura estática (`output: "export"` y `trailingSlash: true`). Todas las rutas dinámicas deben proveer `generateStaticParams()`.
3. **Estilos y Componentes**: Utiliza la clase utilitaria `cn` y componentes de `@/components/ui/`. Los estilos tipográficos de artículos deben utilizar la clase `.prose-blog` de `app/globals.css`.
