Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🛠️ Pila Tecnológica

Este proyecto utiliza las tecnologías más recientes para garantizar el rendimiento, la escalabilidad y una experiencia de desarrollo óptima:

- **Framework**: Next.js `16.2.6` (App Router).
- **Estilos (CSS)**: Tailwind CSS `^4` (configurado mediante PostCSS).
- **Lenguaje**: TypeScript.
- **Calidad de Código**: ESLint `^9` (`eslint.config.mjs`).

---

## 🚀 Inicio Rápido

### 1. Servidor de Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta uno de los siguientes comandos:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación ejecutándose.

Puedes comenzar a editar la aplicación modificando `app/page.tsx`. La página se actualizará automáticamente a medida que edites el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente la familia de fuentes [Geist](https://vercel.com/font) de Vercel.

### 2. Compilación para Producción

Para generar una compilación de producción optimizada, ejecuta:

```bash
npm run build
```

Para iniciar el servidor en modo de producción tras la compilación:

```bash
npm run start
```

---

## 🤖 Guía para Agentes de IA

Si eres un agente de desarrollo de IA (como Antigravity, Claude Code, Cursor, Copilot, etc.), **debes leer y seguir estrictamente las reglas en [AGENTS.md](AGENTS.md)**.

### Reglas Críticas del Proyecto:
- **Idioma**: Toda comunicación y escritura/modificación de código o archivos debe ser estrictamente en **español**.
- **Cambios en Next.js 16**: Este proyecto utiliza APIs y conceptos nuevos (como **Cache Components** con `"use cache"` y `cacheLife`, navegación instantánea con `unstable_instant`, etc.). Las configuraciones de segmento antiguas como `dynamic = 'force-dynamic'` han sido eliminadas.
- **Documentación Local**: La documentación oficial de esta versión se encuentra empotrada en `node_modules/next/dist/docs/`. Siempre debes consultarla antes de proponer cambios de código.

---

## 📚 Aprender Más

Para obtener más información sobre Next.js, consulta los siguientes recursos:

- [Documentación Oficial de Next.js](https://nextjs.org/docs) - Conoce las características y APIs de Next.js.
- [Aprender Next.js](https://nextjs.org/learn) - Un tutorial interactivo sobre Next.js.
- [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js) - ¡Tus comentarios y contribuciones son bienvenidos!

---

## ⚡ Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar la **plataforma Vercel** de los creadores de Next.js.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para obtener más detalles.
