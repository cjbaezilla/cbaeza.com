<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Guía de Desarrollo para Agentes de IA en cbaeza.com

Esta guía contiene directrices de desarrollo y un análisis real del repositorio para guiar a los agentes de IA en el mantenimiento y la creación de características de este proyecto de manera óptima.

---

## REGLA FUNDAMENTAL MANDATORIA
- **Idioma Oficial del Agente**: Toda comunicación con el usuario y escritura/modificación de archivos (código, comentarios, documentación, etc.) debe realizarse estrictamente en **español**. Esta es una regla fundamental y mandatoria.

---

## 🛠️ Análisis de la Pila Tecnológica del Repositorio

- **Framework**: Next.js `16.2.6` (App Router).
- **Modo de Compilación**: **Exportación Estática** (`output: "export"` en `next.config.ts`).
- **Runtime**: React `19.2.4` / Node.js.
- **CSS / Estilado**: Tailwind CSS `^4` (configurado mediante PostCSS).
- **TypeScript**: Habilitado (`tsconfig.json`).
- **Calidad de Código**: ESLint `^9` (`eslint.config.mjs`).

---

## ⚠️ Implicaciones de la Exportación Estática (Crucial)

Dado que el proyecto está configurado con `output: "export"` en `next.config.ts`, debes tener en cuenta las siguientes restricciones y reglas durante el desarrollo:
1. **Sin APIs ni Componentes de Servidor Dinámicos**: No puedes utilizar funciones como `cookies()`, `headers()`, ni rutas API de Next.js basadas en servidor que requieran ejecución en tiempo de solicitud.
2. **Imágenes Desoptimizadas**: Las imágenes locales y externas deben utilizar la propiedad `unoptimized: true` (configurado globalmente en `next.config.ts`) para permitir la exportación de archivos HTML y activos independientes.
3. **Interactividad del Cliente**: Toda la lógica que dependa del estado del usuario, cambio de idiomas o interacciones debe estar envuelta en componentes de cliente (`"use client"`).

*Nota: Aunque Next.js 16 introduce características de servidor como Cache Components y `unstable_instant`, no aplican directamente ni están habilitadas en esta aplicación debido a la compilación estática.*

---

## 🌐 Sistema de Internacionalización (I18n)

El proyecto utiliza **Google Website Translator** en el cliente junto a un catálogo de más de 80 idiomas soportados y un único diccionario maestro en español:

### Reglas para Modificar Textos o Idiomas:
- **Diccionario Maestro**: La única fuente de verdad es `messages/es.json`. No se requieren archivos JSON para otros idiomas.
- **Traducción Automática**: Google Translate traduce dinámicamente el DOM en tiempo de ejecución en base a la selección del usuario.
- **Selector de Idiomas**: Implementado en `components/LanguageSelector.tsx` con soporte para búsqueda, categorías regionales, chips populares y diseño móvil-first con flags de `country-flag-icons`.
- **Direccionalidad (RTL / LTR)**: El contexto `I18nProvider` (en `context/I18nContext.tsx`) y el selector ajustan automáticamente la dirección del documento (`dir="rtl"` para árabe, hebreo, persa, etc., y `"ltr"` para los demás).
- **Estructuras Complejas**: La función `t()` resuelve claves anidadas a partir de `messages/es.json` para renderizar el contenido base que luego Google Translate traduce en vivo.

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

1. **Prioridad Absoluta de la Documentación Local**: Antes de proponer o escribir cualquier código relacionado con Next.js, lee la documentación empotrada en `node_modules/next/dist/docs/`.
2. **Validación de Compilación**: Siempre que realices cambios en componentes o layouts, ejecuta localmente `npm run build` para garantizar que la exportación estática de Next.js funcione correctamente y no haya fallos de TypeScript o de ESLint.

