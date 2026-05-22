<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Guía de Desarrollo para Agentes de IA en cbaeza.com

Esta guía contiene directrices de desarrollo y un análisis del repositorio para guiar a los agentes de IA en el mantenimiento y la creación de características de este proyecto.

---

## REGLA FUNDAMENTAL MANDATORIA
- **Idioma Oficial del Agente**: Toda comunicación con el usuario y escritura/modificación de archivos (código, comentarios, documentación, etc.) debe realizarse estrictamente en **español**. Esta es una regla fundamental y mandatoria.

---

## 🛠️ Análisis de la Pila Tecnológica del Repositorio

- **Framework**: Next.js `16.2.6` (App Router).
- **Runtime**: Node.js por defecto (Requerido por Cache Components. No se admite `runtime = 'edge'`).
- **CSS / Estilado**: Tailwind CSS `^4` (configurado mediante PostCSS).
- **TypeScript**: Habilitado (`tsconfig.json`).
- **Calidad de Código**: ESLint `^9` (`eslint.config.mjs`).

---

## 🚀 Cambios Críticos y Nuevas APIs (Next.js 16+)

Este proyecto utiliza una versión de Next.js que incluye cambios importantes respecto a versiones anteriores. Las directrices clave para los agentes son:

### 1. Sistema de Caché (Cache Components)
El sistema de caché tradicional de Next.js ha sido reemplazado por **Cache Components** (que debe ser habilitado con `cacheComponents: true` en `next.config.ts`).
- **Remoción de configuraciones antiguas**: Si `cacheComponents` está activo, se han ELIMINADO las variables de configuración de segmento de ruta como `dynamic`, `dynamicParams`, `revalidate` y `fetchCache`.
- **Dinámico por defecto**: No utilices `export const dynamic = 'force-dynamic'`. Todas las páginas son dinámicas por defecto a menos que se cacheen de forma explícita.
- **Directiva `"use cache"`**: Para cachear funciones, componentes o archivos enteros, añade `"use cache"` al principio del ámbito correspondiente. Todos los retornos e inputs deben ser serializables.
- **Perfiles de ciclo de vida con `cacheLife`**: En lugar de `revalidate` de segmento, importa `cacheLife` de `'next/cache'` y llámalo dentro del ámbito cacheado (ej. `cacheLife('hours')` o perfiles personalizados en `next.config.ts`).
- **Caché en el Cliente y Remota**:
  - `"use cache: private"`: Almacena en la memoria del navegador; permite acceder a `cookies()` y `headers()`. Nunca se guarda en el servidor.
  - `"use cache: remote"`: Almacena en un almacenamiento persistente compartido (Redis/KV). Útil fuera del shell estático para APIs con límite de tarifa o consultas pesadas de base de datos.
  - **Regla de anidamiento**: Las cachés remotas se pueden anidar en otras cachés normales o remotas, pero nunca dentro de una caché privada. Las cachés privadas tampoco pueden anidarse en remotas.

### 2. Navegación Instantánea (`unstable_instant`)
- Exporta `unstable_instant = { prefetch: 'static' }` desde rutas que requieran navegación instantánea. Esto activa la validación en desarrollo y compilación para asegurar que la página produzca una concha estática funcional (Partial Prerendering).
- No uses `unstable_instant` en Componentes de Cliente.
- Para excluir layouts dinámicos (como tableros de control con lectura de cookies obligatoria en el primer acceso), usa `unstable_instant = false`.
- En `next.config.ts`, puedes habilitar la herramienta de depuración en desarrollo con `experimental.instantNavigationDevToolsToggle: true`.

### 3. Nuevas Funciones de Ciclo de Vida y Control
- **`connection()`** de `next/server`: Reemplaza a `unstable_noStore()`. Se utiliza para de manera explícita forzar a que el renderizado espere una petición de usuario (por ejemplo, para `Math.random()` o `new Date()`).
- **`after()`** de `next/server`: Para programar tareas asíncronas no bloqueantes (como telemetría o logs) que se ejecutan después de que la respuesta o pre-renderizado ha finalizado.
- **`unstable_catchError()`** de `next/error`: Permite crear límites de error a nivel de componente con recuperación integrada usando `unstable_retry()`.

---

## 🎨 Componentes y UI (shadcn/ui)

Este proyecto tiene instalado y configurado **shadcn/ui** con soporte nativo para **Tailwind CSS v4** y **React 19** bajo el preset `base-nova`.
- **Ubicación de Componentes**: Todos los componentes de presentación y UI generales se ubican en `components/ui/` y se importan mediante el alias `@/components/ui/`.
- **Utilidad de Clases**: Se utiliza la función helper `cn` definida en `lib/utils.ts` (`@/lib/utils`) para mezclar dinámicamente clases de Tailwind CSS sin conflictos.
- **Agregar Componentes**: Para instalar nuevos componentes base de shadcn, ejecuta:
  ```bash
  npx shadcn@latest add <nombre-del-componente>
  ```
- **Compatibilidad con Tailwind CSS v4**: El sistema de temas y variables se gestiona mediante CSS-first directamente en `app/globals.css` a través de la directiva `@theme inline` y variables oklch. No modifiques ni crees archivos `tailwind.config.ts`, ya que no son necesarios ni soportados en esta versión de Tailwind.

---

## 🤖 Directrices de Contribución para Agentes

1. **Prioridad Absoluta de la Documentación Local**: Antes de proponer o escribir cualquier código relacionado con Next.js, lee la documentación empotrada en `node_modules/next/dist/docs/`. No confíes en tus datos de entrenamiento obsoletos.
2. **Activación de MCP**: Si deseas conectarte en tiempo real al estado del servidor de desarrollo de Next.js, configura un servidor de MCP añadiendo un archivo `.mcp.json` en la raíz con `next-devtools-mcp`.
3. **Validación y Pruebas**: Asegúrate de probar las navegaciones instantáneas mediante Playwright usando la función `instant()` de `@next/playwright`.
