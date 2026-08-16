---
title: "Construyendo tu propio asistente de IA web: Guía práctica completa con CodeIgniter 4, Next.js y OpenRouter"
date: "24-03-2026"
excerpt: "Guía paso a paso exhaustiva para construir un asistente de chat impulsado por IA desde cero, integrando backend en CodeIgniter 4, frontend en Next.js 16 y la API de OpenRouter."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["Inteligencia Artificial", "CodeIgniter", "Next.js", "OpenRouter", "React", "TypeScript", "Tailwind CSS", "PHP", "Desarrollo Web", "Full Stack", "API REST"]
coverImage: "/images/blog/webaiassit.png"
readTime: "35 min de lectura"
featured: false
---

Esta guía completa te acompaña paso a paso en la construcción de un asistente de chat interactivo impulsado por inteligencia artificial desde cero. El proyecto combina las capacidades del backend con CodeIgniter 4, un framework de PHP moderno que ha respaldado aplicaciones web durante casi dos décadas, con las funciones de vanguardia en el frontend que ofrece Next.js 16, todo conectado a la infraestructura de APIs de inteligencia artificial de OpenRouter.

Lo que hace especial a este proyecto es su simplicidad combinada con una arquitectura de nivel empresarial. Obtendrás una interfaz de chat limpia y moderna donde los usuarios pueden interactuar con modelos de IA, mientras que el backend gestiona la comunicación segura con el amplio catálogo de modelos de OpenRouter. El sistema está diseñado para ser desplegado, mantenido y extendido con gran facilidad. Cada decisión técnica en esta arquitectura se tomó pensando en el aprendizaje y la personalización, para que nunca te sientas limitado por estructuras rígidas.

Al finalizar esta guía, tendrás una aplicación de chat con IA completamente funcional que podrás ejecutar de forma local, adaptar a tus necesidades específicas y desplegar en producción. Tanto si estás dando tus primeros pasos en el desarrollo web moderno como si eres un desarrollador con experiencia que busca entender cómo se integran estas tecnologías, este proyecto práctico te aportará un valor tangible. Obtendrás código listo para funcionar, una comprensión sólida de cómo encajan todas las piezas y múltiples ideas para extender el sistema en las direcciones que más te interesen.

¿Listo para verlo en acción? Puedes explorar el código del proyecto directamente en el [Repositorio en GitHub](https://github.com/cjbaezilla/Building-Your-First-Web-AI-Assistant-Hands-On-Tutorial) y revisarlo mientras avanzas en la lectura de esta guía. Es una excelente forma de orientarte antes de profundizar en los detalles.

![Portada: Guía para construir tu propio asistente de IA web](/images/blog/web-ai-assistant-1.jpg)

![Demostración de uso del asistente](/images/blog/web-ai-assistant-usage.jpg)

## Descripción general del proyecto

Este asistente de chat con IA representa un enfoque moderno para construir aplicaciones web inteligentes. La arquitectura sigue las mejores prácticas de la industria al separar claramente las responsabilidades entre el frontend y el backend, manteniendo canales de comunicación ordenados y eficientes. Esta separación no es solo cuestión de seguir patrones de diseño; se trata de crear un sistema modular donde puedas cambiar o mejorar componentes individuales sin romper el resto de la aplicación.

### Qué hace este proyecto

En su esencia, la aplicación permite a los usuarios enviar mensajes o prompts de texto a un modelo de IA y recibir respuestas inteligentes. El frontend ofrece una interfaz de chat amigable donde los mensajes se organizan en un formato de conversación natural e intuitivo. Cuando un usuario escribe un mensaje y hace clic en enviar, el frontend lo remite a la API del backend, la cual se comunica directamente con los servicios de IA de OpenRouter. La respuesta regresa por el mismo camino y se muestra al usuario con un formato de texto estructurado y elegante.

El sistema gestiona todo el ciclo de vida de la conversación con confiabilidad:

1. Recibe la entrada del usuario y valida que contenga información válida.
2. Transmite de manera segura la solicitud a la API de OpenRouter, evitando que tus claves de API queden expuestas en el navegador del cliente.
3. Procesa la respuesta de la IA, gestionando los diferentes formatos que los diversos modelos pueden retornar.
4. Presenta el resultado en la interfaz de chat, donde la renderización con Markdown garantiza que los bloques de código, listas y estilos tipográficos se visualicen correctamente.

Lo que estás construyendo aquí no es un simple prototipo: es la base para proyectos de mayor escala y una plataforma de lanzamiento ideal para integrar funciones avanzadas de IA en tus desarrollos futuros.

![Interfaz de Chat del Asistente](/images/blog/web-ai-assistant-chat.jpg)

### Pila tecnológica

El backend utiliza [CodeIgniter 4](https://codeigniter.com/user_guide/index.html), un framework de PHP reconocido por su ligereza y su excelente rendimiento. CodeIgniter 4 ofrece una experiencia de desarrollo moderna con soporte para tipado estricto, uso correcto de espacios de nombres (namespaces) y un sistema de enrutamiento que simplifica la creación de APIs RESTful. El framework gestiona las solicitudes HTTP con elegancia, administra los endpoints de la API y se comunica de forma segura con servicios externos sin necesidad de escribir comandos cURL de bajo nivel ni manejar conexiones de sockets manualmente.

CodeIgniter cuenta con una comunidad muy activa que ha construido sobre él desde 2006. Esto se traduce en una documentación clara, respuestas para casi cualquier duda que se te presente y un framework probado en entornos de producción que van desde startups hasta aplicaciones a nivel empresarial. Al elegir CodeIgniter, te integras a un ecosistema maduro y confiable.

El frontend aprovecha [Next.js 16](https://nextjs.org/docs/app/getting-started), la versión más reciente del framework de React desarrollado por Vercel, que incorpora la arquitectura de App Router. Next.js ofrece capacidades de renderizado en el servidor que aceleran la carga de las páginas y optimizan el posicionamiento en buscadores (SEO). Además, proporciona división automática de código (code splitting) para que los usuarios solo descarguen el JavaScript necesario. La experiencia de desarrollo incluye recarga rápida en vivo (hot reloading), mensajes de error claros y un flujo de trabajo ágil.

La interfaz de usuario utiliza [Tailwind CSS](https://tailwindcss.com/docs) para el estilado, un enfoque basado en clases utilitarias que te permite crear diseños personalizados directamente en tu marcado HTML. Para renderizar las respuestas formateadas se emplea React Markdown junto con `remark-gfm`, lo que permite que las respuestas de la IA incluyan bloques de código con formato, texto en negrita, tablas y listas sin requerir configuraciones complejas adicionales.

OpenRouter actúa como la pasarela de IA, brindando acceso a cientos de modelos de múltiples proveedores a través de una API unificada. Este proyecto utiliza por defecto el modelo `nvidia/nemotron-3-nano-30b-a3b:free`, el cual ofrece capacidades sobresalientes sin costo alguno. El nivel gratuito te proporciona un amplio margen para aprender, experimentar y consolidar tus conocimientos antes de invertir en servicios de pago. Cuando desees explorar otros modelos, podrás cambiar fácilmente a cualquiera de las opciones disponibles en el [Catálogo de OpenRouter](https://openrouter.ai/models), desde modelos ultrarrápidos optimizados para baja latencia hasta opciones avanzadas para razonamiento complejo.

### Resumen de la pila tecnológica

| Componente | Tecnología | Propósito |
|---|---|---|
| Framework de Backend | CodeIgniter 4 | Desarrollo de la API RESTful |
| Framework de Frontend | Next.js 16 | Interfaz de usuario basada en React con App Router |
| Estilado | Tailwind CSS | Framework CSS basado en utilidades |
| Proveedor de IA | OpenRouter | Pasarela unificada a múltiples modelos de IA |
| Modelo por defecto | nvidia/nemotron-3-nano-30b-a3b:free | Modelo gratuito con sólidas capacidades |
| Cliente HTTP | Guzzle | Cliente HTTP en PHP para llamadas API |

Cada tecnología de este conjunto ha sido seleccionada cuidadosamente para complementarse entre sí: un backend ligero y potente, un frontend moderno y reactivo, y una integración de IA flexible para evolucionar a futuro.

![Análisis profundo de la arquitectura](/images/blog/web-ai-assistant-2.jpg)

## Análisis profundo de la arquitectura

Comprender la arquitectura te ayuda a entender por qué el sistema funciona de esta manera y hace que las futuras modificaciones resulten intuitivas. Una vez que asimilas el flujo de datos, extender el sistema es un proceso muy directo.

### Cómo se conectan las piezas

La aplicación sigue una arquitectura cliente-servidor con dos componentes principales organizados en carpetas independientes. El directorio `server` contiene la aplicación backend en CodeIgniter 4, mientras que el directorio `client` aloja el frontend en Next.js. Ambos componentes se comunican mediante HTTP a través de endpoints de una API RESTful, utilizando estándares web abiertos y compatibles en cualquier entorno.

Cuando un usuario interactúa con la interfaz de chat, ocurren varios pasos coordinados entre bastidores:

1. El navegador envía una solicitud POST a la ruta de API de Next.js en `/api/chat`.
2. Esta ruta de API actúa como un proxy, reenviando la solicitud al backend de CodeIgniter en `http://localhost:8080/api/chat`.
3. El backend valida la solicitud, adjunta la clave de API de OpenRouter (de forma segura, en el lado del servidor, manteniéndola oculta para el cliente) y envía el prompt al servicio de OpenRouter.
4. Al recibir la respuesta del modelo de IA, esta regresa en sentido inverso a través de la misma cadena de comunicación.

Esta arquitectura proxy ofrece ventajas sustanciales en la práctica:

- **Seguridad para tus credenciales**: La clave de API nunca llega al navegador del usuario, ya que toda la comunicación con OpenRouter ocurre exclusivamente en el servidor.
- **Control de tráfico y límites de tasa (Rate Limiting)**: Puedes implementar límites en la capa del proxy para prevenir abusos de uso.
- **Registro y depuración centralizada**: Facilita agregar logs de auditoría para analizar incidencias sin modificar el frontend.
- **Desacoplamiento total**: El frontend no depende de un proveedor de IA específico, lo que te permite cambiar de OpenRouter a otro proveedor sin tocar una sola línea de código en la interfaz.
- **Capa de almacenamiento en caché**: Permite incorporar fácilmente un mecanismo de caché en el backend para almacenar respuestas frecuentes y reducir el consumo de tokens.

### Ejemplo de flujo de datos

Examinemos un flujo de conversación completo para visualizar con exactitud cómo se desplazan los datos a través de cada capa del sistema:

1. El usuario escribe `"Hola, ¿cómo estás?"` en el campo de entrada del chat y hace clic en Enviar.
2. El componente de React captura la entrada e invoca la función `sendChatMessage` de la biblioteca de API.
3. Dicha función realiza una solicitud POST a `/api/chat` con un cuerpo JSON: `{ "prompt": "Hola, ¿cómo estás?" }`.
4. Next.js recibe la petición en `app/api/chat/route.ts`, extrae el cuerpo y reenvía el mismo JSON hacia `http://localhost:8080/api/chat`.
5. El controlador de CodeIgniter recibe la solicitud, verifica la clave de API de OpenRouter en las variables de entorno, construye el payload en el formato requerido por OpenRouter y utiliza el cliente HTTP Guzzle para enviar la petición a los servidores de OpenRouter.
6. El modelo de IA procesa el prompt y devuelve la respuesta generada. El controlador captura el resultado y lo retorna en formato JSON hacia Next.js.
7. Next.js recibe la respuesta de CodeIgniter y la transmite directamente al frontend.
8. El componente de React procesa la información, extrae el texto y actualiza el estado de los mensajes para renderizar la respuesta de la IA en la interfaz con formato Markdown.

Todo este ciclo ocurre en cuestión de segundos y brinda al usuario una experiencia de conversación fluida.

![Lado del servidor: CodeIgniter 4](/images/blog/web-ai-assistant-3.jpg)

## Lado del servidor: CodeIgniter 4

La aplicación backend reside en el directorio `server` y proporciona la API que alimenta las funciones del asistente de chat. CodeIgniter 4 incorpora prácticas modernas de PHP manteniendo la simplicidad y agilidad que siempre han caracterizado al framework.

### Estructura de directorios

La estructura de CodeIgniter 4 sigue un patrón de organización claro que permite ubicar cualquier archivo con facilidad:

| Directorio | Ubicación | Descripción |
|---|---|---|
| `app/Config` | `server/app/Config` | Archivos de configuración de la aplicación |
| `app/Controllers` | `server/app/Controllers` | Controladores y manejadores de endpoints de la API |
| `app/Filters` | `server/app/Filters` | Filtros de procesamiento para solicitudes y respuestas |
| `public` | `server/public` | Raíz web, punto de entrada para todas las solicitudes |
| `system` | `server/system` | Archivos del núcleo del framework |
| `app` | `client/app` | Páginas y rutas de Next.js App Router |
| `lib` | `client/lib` | Funciones de utilidad y helpers de API |
| `public` | `client/public` | Activos estáticos del frontend |

- **`app/Config`**: Contiene los archivos de configuración principales, tales como `Database.php` para conexiones de bases de datos, `Routes.php` para declarar rutas de la API y `Filters.php` para filtros globales como CORS.
- **`app/Controllers`**: Aloja las clases controladoras de los endpoints. El controlador `OpenRouter.php` gestiona todas las interacciones con la IA, mientras que `Home.php` atiende la página inicial por defecto.
- **`app/Filters`**: Contiene clases de filtro que procesan solicitudes antes de que alcancen a los controladores o respuestas antes de ser devueltas al cliente. El filtro personalizado `Cors.php` gestiona el intercambio de recursos de origen cruzado para que el frontend y el backend se comuniquen sin bloqueos del navegador.
- **`public`**: Es la raíz pública del servidor web accesible por los visitantes. Contiene `index.php` (el punto de entrada central) y el archivo `.htaccess` para reescritura de URLs.

### Archivos clave de configuración

El archivo `.env` almacena variables críticas de configuración: credenciales de base de datos, entorno de ejecución y la clave de API de OpenRouter. Este archivo no debe compartirse públicamente ni incluirse en repositorios de control de versiones.

La configuración de rutas en `app/Config/Routes.php` define qué métodos de los controladores responden a cada URL:

```php
<?php

use CodeIgniter\Router\RouteCollection;

$routes->get('/', 'Home::index');
$routes->post('/api/chat', 'OpenRouter::chat');
$routes->options('/api/chat', 'OpenRouter::options');
```

Esta configuración establece tres rutas: la página de inicio en `/`, el endpoint de chat en `/api/chat` (vía POST) y el endpoint OPTIONS para solicitudes preflight de CORS en `/api/chat`.

La configuración de filtros en `app/Config/Filters.php` administra qué filtros se aplican a las solicitudes:

```php
class Filters extends BaseFilters
{
    public array $aliases = [
        'cors'          => Cors::class,
        'csrf'          => CSRF::class,
        // ... otros alias
    ];

    public array $globals = [
        'before' => [
            'cors',
        ],
        'after' => [
        ],
    ];
}
```

El filtro CORS se registra de forma global en la sección `before`, ejecutándose en cada petición entrante antes de que el controlador procese la lógica.

### El controlador OpenRouter

El controlador `OpenRouter.php` constituye el núcleo del backend para la gestión de IA. A continuación se presenta su implementación completa:

```php
<?php

namespace App\Controllers;

use GuzzleHttp\Client;

class OpenRouter extends BaseController
{
    public function options(): \CodeIgniter\HTTP\Response
    {
        return $this->response
            ->setHeader('Access-Control-Allow-Origin', '*')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type')
            ->setStatusCode(200);
    }

    public function chat(): \CodeIgniter\HTTP\Response
    {
        $this->response->setHeader('Access-Control-Allow-Origin', '*');
        $this->response->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        $this->response->setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if ($this->request->getMethod() === 'options') {
            return $this->response->setStatusCode(200);
        }

        $apiKey = getenv('OPENROUTER_API_KEY');
        
        if (empty($apiKey)) {
            return $this->response->setJSON(['error' => 'API key not configured'])->setStatusCode(500);
        }

        $prompt = $this->request->getVar('prompt') ?? 'Hello';

        $payload = [
            'model' => 'nvidia/nemotron-3-nano-30b-a3b:free',
            'input' => [
                ['role' => 'user', 'content' => $prompt]
            ]
        ];

        $client = new Client();

        try {
            $response = $client->post('https://openrouter.ai/api/v1/responses', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                    'HTTP-Referer' => "https://baeza.ai",
                    'X-Title' => 'Baeza AI',
                ],
                'json' => $payload,
                'timeout' => 120,
                'verify' => false,
            ]);

            $body = json_decode($response->getBody()->getContents(), true);

            return $this->response->setJSON($body);
        } catch (\Exception $e) {
            return $this->response->setJSON(['error' => $e->getMessage()])->setStatusCode(500);
        }
    }
}
```

Detalles destacados de la implementación:

- **Método `options()`**: Gestiona las solicitudes CORS preflight que los navegadores envían antes de realizar peticiones complejas como POST con encabezados personalizados. Retorna código de estado 200 y los encabezados correspondientes.
- **Método `chat()`**: Atiende la conversación con la IA. Configura encabezados CORS, verifica peticiones preflight y obtiene la clave de API con `getenv('OPENROUTER_API_KEY')`. Si la clave no está presente, responde con código 500 y un mensaje de error descriptivo.
- **Extracción del prompt**: Utiliza `$this->request->getVar('prompt')` con un valor por defecto para asegurar que siempre exista contenido a procesar.
- **Estructura del payload**: Define el modelo `nvidia/nemotron-3-nano-30b-a3b:free` y formatea la conversación dentro del array `input`.
- **Llamada HTTP con Guzzle**: Realiza la petición POST a `https://openrouter.ai/api/v1/responses` con un timeout de 120 segundos para soportar consultas complejas. En desarrollo se utiliza `verify => false` para evitar conflictos con certificados locales autofirmados, opción que debe eliminarse en producción para garantizar conexiones seguras.
- **Control de excepciones**: Captura cualquier fallo de conexión o error devuelto por la API y lo entrega como respuesta JSON estructurada con código HTTP 500.

### Configuración de CORS

El intercambio de recursos de origen cruzado (CORS) es un mecanismo de seguridad del navegador que restringe solicitudes HTTP entre dominios o puertos distintos. Dado que Next.js se ejecuta en el puerto 3000 y CodeIgniter en el puerto 8080 de forma local, es indispensable contar con una configuración CORS adecuada.

El proyecto implementa el filtro global `app/Filters/Cors.php`:

```php
<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class Cors implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $response = service('response');
        
        $response->setHeader('Access-Control-Allow-Origin', '*');
        $response->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        $response->setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        if ($request->getMethod() === 'options') {
            return $response->setStatusCode(200);
        }
        
        return null;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        return $response;
    }
}
```

Este filtro establece los encabezados necesarios: `Access-Control-Allow-Origin: *` para permitir peticiones desde cualquier origen durante el desarrollo, `Access-Control-Allow-Methods` para los métodos HTTP permitidos y `Access-Control-Allow-Headers` para encabezados como `Content-Type`.

En entornos de producción, es recomendable sustituir el comodín `*` por el dominio específico del frontend (por ejemplo, `https://tu-dominio.com`) para elevar los estándares de seguridad.

### Endpoints de la API

El backend expone dos endpoints principales:

| Endpoint | Método | Cuerpo de la solicitud | Respuesta | Descripción |
|---|---|---|---|---|
| `/api/chat` | POST | `{"prompt": "mensaje"}` | JSON con respuesta de IA | Endpoint principal de chat |
| `/api/chat` | OPTIONS | Vacío | Encabezados CORS | Manejador preflight de CORS |

El endpoint `POST /api/chat` recibe el prompt del usuario en formato JSON y entrega la respuesta íntegra de OpenRouter con el texto generado, metadatos del modelo y consumo de tokens. El endpoint `OPTIONS /api/chat` responde a las verificaciones previas del navegador retornando código 200 y los encabezados CORS permitidos.

![Lado del cliente: Next.js 16 con App Router](/images/blog/web-ai-assistant-4.jpg)

## Lado del cliente: Next.js 16 con App Router

La aplicación frontend en el directorio `client` ofrece una interfaz reactiva y moderna. Desarrollada con Next.js 16 y el paradigma de App Router, aprovecha componentes de cliente, rutas de API y estilos utilitarios.

### Entendiendo el App Router

En Next.js con App Router, cada archivo dentro de la carpeta `app` representa una ruta del sistema. El archivo `app/page.tsx` corresponde a la raíz `/`, mientras que `app/chat/page.tsx` define la ruta `/chat`.

Los componentes pueden ser de servidor (Server Components, por defecto) o de cliente (Client Components, indicados con la directiva `'use client'`). Los componentes de cliente permiten manejar estados locales con hooks de React, capturar eventos de formularios e interactuar con APIs del navegador.

El archivo `app/layout.tsx` define la plantilla raíz compartida por todas las vistas:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### Archivos clave del frontend

| Archivo | Ruta | Propósito |
|---|---|---|
| Layout raíz | `app/layout.tsx` | Envuelve todas las páginas y define la estructura HTML |
| Página de inicio | `app/page.tsx` | Punto de entrada y bienvenida |
| Página de chat | `app/chat/page.tsx` | Interfaz interactiva de conversación |
| Ruta de API | `app/api/chat/route.ts` | Proxy que reenvía peticiones al backend |
| Biblioteca de API | `lib/api.ts` | Funciones tipadas en TypeScript para llamadas a la API |
| Estilos globales | `app/globals.css` | Importación de Tailwind CSS y variables de tema |

La interfaz principal de chat se encuentra implementada en `app/chat/page.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { sendChatMessage } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatPage() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    const userMessage = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await sendChatMessage(prompt);

      if (response.error) {
        setError(response.error);
      } else {
        const outputText = response.output_text || '';
        const messageItem = response.output?.find((item: any) => item.type === 'message');
        const textContent = messageItem?.content?.find((c: any) => c.type === 'output_text');
        const content = outputText || textContent?.text || 'Sin respuesta';
        const assistantMessage = { role: 'assistant', content };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error');
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chat con Inteligencia Artificial</h1>

      <div className="space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 ml-auto' 
                : 'bg-gray-100'
            }`}
          >
            <p className="font-semibold text-sm capitalize">{message.role}</p>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border rounded-lg"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? 'Pensando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}
```

El archivo `app/api/chat/route.ts` actúa como proxy interno en Next.js:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: 'No se pudo conectar con el servidor backend' },
      { status: 500 }
    );
  }
}
```

La biblioteca auxiliar `lib/api.ts` provee contratos tipados con TypeScript para las comunicaciones:

```typescript
export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  id?: string;
  model?: string;
  output_text?: string;
  output?: Array<{
    type?: string;
    role?: string;
    content?: Array<{
      type: string;
      text?: string;
    }>;
  }>;
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
  };
  error?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function sendChatMessage(prompt: string): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Error HTTP status: ${response.status}`);
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Error de red: No se pudo establecer conexión con el servidor');
    }
    throw error;
  }
}
```

### Estilado con Tailwind CSS

Tailwind CSS permite estructurar el diseño visual mediante clases utilitarias directamente en el código de los componentes. En `globals.css` se definen las directivas de estilos base, variables de color y soporte para temas claro y oscuro, complementado con `@tailwindcss/typography` para el formato limpio de los elementos generados por Markdown.

![Variables de entorno y configuración](/images/blog/web-ai-assistant-5.jpg)

## Variables de entorno y configuración

Las variables de entorno almacenan parámetros sensibles y configuraciones que cambian entre entornos locales y de producción.

### Referencia de variables de entorno

| Variable | Ubicación | Requerida | Descripción |
|---|---|---|---|
| `OPENROUTER_API_KEY` | `server/.env` | Sí | Clave de API para autenticación en OpenRouter |
| `database.default.*` | `server/.env` | No | Configuración de conexión a base de datos |
| `CI_ENVIRONMENT` | `server/.env` | Sí | Establecer en `development` o `production` |
| `NEXT_PUBLIC_API_URL` | `client/.env.local` | Sí | URL base de la API del backend (ej. `http://localhost:8080`) |

Configuración del backend en `server/.env`:

```env
# Configuración de Base de Datos
database.default.hostname = localhost
database.default.database = tu_base_de_datos
database.default.username = tu_usuario
database.default.password = tu_contraseña
database.default.DBDriver = MySQLi
database.default.port = 3306

# Entorno de la Aplicación
CI_ENVIRONMENT = development

# Clave de API de OpenRouter
OPENROUTER_API_KEY = tu_clave_de_openrouter_aqui
```

Configuración del frontend en `client/.env.local`:

```env
# URL de la API del Backend
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Consideraciones de seguridad

- Mantén tus archivos `.env` y `.env.local` dentro del `.gitignore` para evitar filtraciones accidentales.
- En servidores de producción, carga las variables mediante el panel de control de tu proveedor de hosting en lugar de subir archivos de texto planos.
- Aplica rotación periódica a tus claves de API de OpenRouter y utiliza claves con permisos estrictamente limitados a lo necesario.

![Instalación y configuración](/images/blog/web-ai-assistant-6.jpg)

## Instalación y configuración

A continuación se detalla el proceso para poner en marcha el proyecto en tu entorno local paso a paso.

### Requisitos previos

| Requisito | Backend (CodeIgniter) | Frontend (Next.js) |
|---|---|---|
| Runtime | PHP 8.2 o superior | Node.js 18.17 o superior |
| Gestor de paquetes | Composer | npm (incluido en Node.js) |
| Base de datos | MySQL (opcional) | No requerida |
| Extensiones | `mbstring`, `intl`, `pdo` | Ninguna adicional |

### Instalación del backend (CodeIgniter 4)

1. Abre tu terminal y dirígete al directorio `server`:
   ```bash
   cd ./server
   ```
2. Instala las dependencias de PHP con Composer:
   ```bash
   composer install
   ```
3. Configura tu archivo `.env` en `server/.env` y añade tu clave de API de OpenRouter:
   ```env
   OPENROUTER_API_KEY = tu_clave_real_de_openrouter_aqui
   ```

### Instalación del frontend (Next.js)

1. En otra ventana de la terminal, dirígete al directorio `client`:
   ```bash
   cd ./client
   ```
2. Instala las dependencias de Node.js:
   ```bash
   npm install
   ```

### Ejecución de la aplicación de forma local

Para probar la aplicación completa, necesitarás mantener abiertas dos terminales en paralelo:

**Terminal 1: Iniciar el backend**

```bash
cd ./server
php spark serve
```
El servidor de desarrollo de CodeIgniter iniciará por defecto en `http://localhost:8080`.

**Terminal 2: Iniciar el frontend**

```bash
cd ./client
npm run dev
```
Next.js iniciará el servidor de desarrollo en `http://localhost:3000`.

**Probando la interfaz de chat**

Abre tu navegador y entra a `http://localhost:3000/chat`. Escribe un mensaje como `"Hola, ¿cómo estás?"` y presiona Enviar. Tras un breve instante, verás tu mensaje en la pantalla seguido por la respuesta generada por la IA con formato Markdown.

![Entendiendo cómo funciona el código en conjunto](/images/blog/web-ai-assistant-7.jpg)

## Entendiendo cómo funciona el código en conjunto

Analicemos con mayor profundidad la interacción entre el cliente y el servidor para facilitar diagnósticos y futuras personalizaciones.

### La cadena de llamadas a la API en el frontend

1. El usuario introduce texto en el campo de entrada, lo cual actualiza el estado `prompt`.
2. Al enviar el formulario, `handleSubmit` previene la recarga de página y activa el estado de carga.
3. Se invoca `sendChatMessage` desde `lib/api.ts`, realizando una petición POST a `/api/chat` en Next.js.
4. La ruta en `app/api/chat/route.ts` actúa como proxy, leyendo el cuerpo y reenviándolo hacia el backend en `http://localhost:8080/api/chat`.

### El procesamiento en el backend

1. El router de CodeIgniter canaliza la solicitud hacia `OpenRouter::chat`.
2. El controlador fija los encabezados CORS en la respuesta.
3. Se recupera la clave `OPENROUTER_API_KEY` y se estructura el payload con el modelo elegido.
4. El cliente Guzzle ejecuta la llamada POST a la API de OpenRouter con timeout de 120 segundos.
5. Se decodifica la respuesta JSON y se entrega al cliente con `$this->response->setJSON($body)`.

### Manejo de la respuesta de vuelta al frontend

1. La ruta de Next.js recibe el JSON de CodeIgniter y lo retorna al cliente preservando los códigos de estado.
2. `sendChatMessage` valida que la respuesta sea correcta (`response.ok`) y la entrega al componente de chat.
3. El componente de React extrae el texto del mensaje y lo añade a la lista de mensajes, provocando una re-renderización automática de la vista.

### Manejo de errores

| Tipo de error | Ubicación | Mensaje para el usuario | Solución de problemas |
|---|---|---|---|
| Error de red | API frontend | "Error de red: No se pudo establecer conexión con el servidor" | Verificar que el backend esté ejecutándose en el puerto 8080 |
| Clave ausente | Backend | "API key not configured" | Comprobar `OPENROUTER_API_KEY` en el archivo `.env` |
| Error de API | Backend | Mensaje retornado por OpenRouter | Verificar validez de la clave y cuotas del modelo |
| Timeout | Backend | Mensaje de excepción de Guzzle | Aumentar el tiempo límite o elegir un modelo más rápido |
| Error de CORS | Consola del navegador | Bloqueo por origen cruzado | Confirmar que el filtro CORS esté registrado y activo |

![Despliegue en producción](/images/blog/web-ai-assistant-8.jpg)

## Despliegue en producción

Cuando decidas publicar tu aplicación en la web, deberás configurar el despliegue del backend y del frontend según tu infraestructura de alojamiento.

### Despliegue del backend

El backend en CodeIgniter 4 requiere un entorno con PHP 8.2 o superior:

1. Sube el directorio `server` a tu servidor de hosting.
2. Asegúrate de que la raíz web pública apunte a la carpeta `public` (o `public_html`).
3. Configura las variables de entorno en el panel del servidor y establece `CI_ENVIRONMENT = production`.
4. Verifica que el archivo `.htaccess` esté activo en servidores Apache o configura las directivas equivalentes en Nginx.
5. Asigna permisos de escritura adecuados (por ejemplo 755 o 775) al directorio `writable` para permitir el almacenamiento de logs y caché.

### Despliegue del frontend

| Método | Ideal para | Dificultad | Backend requerido |
|---|---|---|---|
| Vercel | Aplicaciones Next.js completas con despliegue continuo | Mínima | Hosting PHP independiente |
| Exportación estática | Servidores de hosting compartido con cPanel | Fácil | Hosting PHP integrado |
| Aplicación Node.js | Servidores VPS dedicados | Media | Servidor Node.js activo |

#### Opción 1: Despliegue en Vercel

Conecta tu repositorio de GitHub a Vercel. La plataforma detectará automáticamente la aplicación Next.js. Configura la variable de entorno `NEXT_PUBLIC_API_URL` apuntando a la URL pública de tu backend desplegado.

#### Opción 2: Exportación estática para hosting compartido

Si dispones de un hosting tradicional sin soporte para Node.js, puedes compilar Next.js como HTML y activos estáticos puros.

Configura `next.config.ts` para exportación estática:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Genera los archivos de producción:

```bash
npm run build
```

Este comando creará el directorio `out` con archivos estáticos (HTML, CSS, JS). Sube todo el contenido de `out` a la carpeta pública de tu hosting (`public_html`).

#### Opción 3: Aplicación Node.js en VPS

Si cuentas con un servidor VPS con Node.js instalado, puedes ejecutar el servidor en producción con un gestor de procesos como PM2:

```bash
npm run build
npm start
```

### Consideraciones para hosting compartido

| Consideración | Backend (PHP) | Frontend (Estático) |
|---|---|---|
| Versión de PHP | Verificar soporte para PHP 8.2 o superior | No aplica |
| Dependencias | Subir la carpeta `vendor` si Composer no está disponible | Utilizar exportación estática (`out`) |
| Límites de memoria | Ajustar `memory_limit` en `.htaccess` o php.ini | No aplica |
| Reescritura de URLs | Probar reglas en `.htaccess` para `index.php` | Funciona de forma predeterminada con archivos `.html` |
| Ubicación de archivos | `public_html/api/` | `public_html/` |

Estructura típica en hosting compartido:

```text
public_html/
  ├── index.html          (Entrada principal de Next.js)
  ├── chat/
  │   └── index.html     (Página de chat)
  └── api/               (Backend de CodeIgniter)
      └── index.php
```

![Personalización y extensiones](/images/blog/web-ai-assistant-9.jpg)

## Personalización y extensiones

La arquitectura modular del proyecto permite añadir nuevas funciones sin complicaciones.

### Opciones de extensión

| Característica | Complejidad | Cambios en Backend | Cambios en Frontend |
|---|---|---|---|
| Cambiar modelo de IA | Fácil | Modificar el campo `model` en el controlador | Ninguno requerido |
| Historial de conversación | Media | Aceptar array de mensajes en el request | Enviar historial completo |
| Autenticación de usuarios | Media | Integrar CodeIgniter Shield | Agregar formularios de login/logout |
| Límite de tasa (Rate Limiting) | Media | Agregar contadores en Redis o base de datos | Ninguno requerido |
| Respuestas en streaming | Avanzada | Implementar respuestas en fragmentos (chunks) | Manejar streams en tiempo real |
| Indicador de escritura | Fácil | Ninguno requerido | Agregar animación de "escribiendo..." |
| Resaltado de sintaxis | Fácil | Ninguno requerido | Incorporar librerías como Prism o highlight.js |
| Exportación de chat | Fácil | Ninguno requerido | Añadir exportación a PDF o texto plano |

### Cambiar el modelo de IA

OpenRouter ofrece cientos de modelos de lenguaje con diferentes costos, velocidades y niveles de especialización.

![Catálogo de Modelos de OpenRouter](/images/blog/web-ai-assistant-models.jpg)

Para cambiar el modelo, edita el valor de `model` en el array `$payload` del controlador de CodeIgniter.

Para utilizar Claude de Anthropic:

```php
'model' => 'anthropic/claude-3-haiku',
```

Para utilizar GPT de OpenAI:

```php
'model' => 'openai/gpt-4-turbo',
```

### Agregar historial de conversación

Para que la IA recuerde mensajes previos en lugar de responder de forma aislada, puedes enviar el array completo de mensajes desde el frontend:

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages }),
});
```

En el backend, actualiza el controlador para recibir el array `messages` y asignarlo directamente al campo `input` del payload de OpenRouter.

### Implementación de autenticación de usuarios

Para incorporar cuentas de usuario y control de acceso, puedes integrar CodeIgniter Shield, la biblioteca oficial de autenticación para CodeIgniter 4 que provee registro, inicio de sesión y gestión de sesiones de manera integrada.

### Funcionalidades avanzadas de OpenRouter

La API Responses de OpenRouter permite acceder a capacidades de última generación descritas en su [Documentación de la API Responses](https://openrouter.ai/docs/api-reference/responses/basic-usage).

#### 1. Capacidades de razonamiento (Reasoning)

Algunos modelos avanzados ofrecen trazas de razonamiento interno antes de responder. Puedes configurar el nivel de esfuerzo (`minimal`, `low`, `medium`, `high`) en la solicitud:

```php
$payload = [
    'model' => 'openai/o4-mini',
    'input' => [
        ['role' => 'user', 'content' => $prompt]
    ],
    'reasoning' => [
        'effort' => 'high'
    ],
    'max_output_tokens' => 9000,
];

$response = $client->post('https://openrouter.ai/api/v1/responses', [
    'headers' => [
        'Authorization' => 'Bearer ' . $apiKey,
        'Content-Type' => 'application/json',
    ],
    'json' => $payload,
    'timeout' => 120,
]);
```

#### 2. Llamada a herramientas (Tool Calling)

Permite que el modelo invoque funciones definidas por ti en el servidor, tales como consultar el clima, buscar en bases de datos o invocar APIs externas:

```php
$weatherTool = [
    'type' => 'function',
    'name' => 'get_weather',
    'description' => 'Obtiene el clima actual en una ubicación específica',
    'strict' => null,
    'parameters' => [
        'type' => 'object',
        'properties' => [
            'location' => [
                'type' => 'string',
                'description' => 'La ciudad y estado, ej. Santiago, Chile o Buenos Aires, Argentina',
            ],
            'unit' => [
                'type' => 'string',
                'enum' => ['celsius', 'fahrenheit'],
            ],
        ],
        'required' => ['location'],
    ],
];

$payload = [
    'model' => 'openai/o4-mini',
    'input' => [
        [
            'type' => 'message',
            'role' => 'user',
            'content' => [
                ['type' => 'input_text', 'text' => '¿Cuál es el clima en Santiago?']
            ]
        ]
    ],
    'tools' => [$weatherTool],
    'tool_choice' => 'auto',
    'max_output_tokens' => 9000,
];
```

#### 3. Búsqueda web en tiempo real (Web Search)

Permite al modelo consultar información actualizada en internet, superando los límites de su fecha de corte de conocimiento:

```php
$payload = [
    'model' => 'openai/o4-mini',
    'input' => [
        ['role' => 'user', 'content' => '¿Cuál es la última versión estable de Next.js?']
    ],
    'plugins' => [
        ['id' => 'web', 'max_results' => 3]
    ],
    'max_output_tokens' => 9000,
];

$response = $client->post('https://openrouter.ai/api/v1/responses', [
    'headers' => [
        'Authorization' => 'Bearer ' . $apiKey,
        'Content-Type' => 'application/json',
    ],
    'json' => $payload,
    'timeout' => 120,
]);
```

### Parámetros de la API Responses

| Parámetro | Tipo | Descripción |
|---|---|---|
| `model` | string | El modelo de IA seleccionado para generar la respuesta |
| `input` | array | Array de mensajes que conforman la conversación |
| `reasoning` | object | Configuración del esfuerzo de razonamiento (`minimal`, `low`, `medium`, `high`) |
| `tools` | array | Lista de definiciones de herramientas para ejecución de funciones |
| `tool_choice` | string / object | Controla qué herramientas puede invocar el modelo |
| `plugins` | array | Extensiones como búsqueda web (ej. `[{ id: 'web', max_results: 3 }]`) |
| `max_output_tokens` | integer | Límite máximo de tokens a generar en la respuesta |
| `temperature` | float | Controla la creatividad y aleatoriedad de la respuesta (de 0.0 a 2.0) |
| `stream` | boolean | Activa la transmisión de respuestas en tiempo real por streaming |
| `metadata` | object | Metadatos personalizados para seguimiento y métricas de uso |

Para profundizar en todos los parámetros disponibles, puedes consultar la [Documentación completa de parámetros de OpenRouter](https://openrouter.ai/docs/api-reference/responses/create-responses).

## Solución de problemas comunes

| Problema | Mensaje de error | Solución |
|---|---|---|
| Conexión rechazada | "Connection refused" | Verificar que el backend esté activo en el puerto 8080 |
| Clave de API ausente | "API key not configured" | Revisar la variable `OPENROUTER_API_KEY` en el archivo `.env` |
| Errores de CORS | Error de CORS en la consola | Verificar el filtro `Cors.php` y los encabezados en el controlador |
| Respuestas lentas | Tiempos de espera excesivos | Probar un modelo más liviano o revisar la conexión de red |
| Errores de SSL | Fallo en verificación de certificado | Actualizar los certificados CA del servidor |
| Error 404 al desplegar | Página no encontrada al recargar | Revisar la configuración de `.htaccess` para rutas en servidor |

### Errores de conexión rechazada

Si el cliente reporta que la conexión fue rechazada, verifica que el comando `php spark serve` esté corriendo en la terminal del backend y que ningún firewall o puerto ocupado esté interfiriendo con el puerto 8080.

### Errores con la clave de API

Si recibes el error "API key not configured", comprueba que el archivo `server/.env` contenga la línea `OPENROUTER_API_KEY = tu_clave`. Recuerda reiniciar el servidor de desarrollo (`php spark serve`) tras modificar variables de entorno para que los cambios surtan efecto.

### Errores de CORS

Si la consola del navegador muestra advertencias de origen cruzado, confirma que el filtro `Cors.php` esté habilitado en `app/Config/Filters.php` y que el método `options()` en el controlador responda correctamente a las peticiones preflight.

### Tiempos de respuesta lentos

El procesamiento de modelos de IA puede demorar dependiendo de la carga del servidor o la complejidad de la consulta. Si buscas respuestas más ágiles, puedes optar por modelos compactos de baja latencia en el catálogo de OpenRouter.

### Errores de certificado SSL

En caso de advertencias con certificados SSL en producción, asegúrate de mantener actualizados los certificados CA de tu sistema operativo y activa `verify => true` en Guzzle para garantizar comunicaciones cifradas seguras.

## Recursos adicionales

- [Referencia de la API de OpenRouter](https://openrouter.ai/docs/api/reference/overview): Documentación completa sobre endpoints, formatos de solicitud y autenticación.
- [Parámetros de la API Responses de OpenRouter](https://openrouter.ai/docs/api-reference/responses/create-responses): Detalle de todas las opciones de personalización de solicitudes.
- [Catálogo de Modelos de OpenRouter](https://openrouter.ai/models): Explorador de modelos con precios, latencias y capacidades.
- [Guía de Usuario de CodeIgniter 4](https://codeigniter.com/user_guide/index.html): Manual oficial que cubre controladores, rutas, filtros y buenas prácticas.
- [Documentación de Next.js App Router](https://nextjs.org/docs/app/getting-started): Arquitectura, componentes de servidor, rutas de API y despliegue.
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs): Catálogo de utilidades de diseño y configuración de temas.
- [Repositorio del Proyecto en GitHub](https://github.com/cjbaezilla/Building-Your-First-Web-AI-Assistant-Hands-On-Tutorial): Código fuente completo y listo para clonar.

## Conclusión

Ahora dispones de una guía práctica y una arquitectura completa para crear tu propio asistente de chat impulsado por inteligencia artificial. El proyecto integra una separación clara entre frontend y backend, protección de credenciales de API en el servidor y una base extensible para incorporar funcionalidades avanzadas.

Las tecnologías aplicadas (CodeIgniter 4 para el backend en PHP y Next.js 16 con App Router para el frontend en React) son altamente transferibles a múltiples proyectos en tu carrera profesional.

Te invitamos a explorar el [Repositorio en GitHub](https://github.com/cjbaezilla/Building-Your-First-Web-AI-Assistant-Hands-On-Tutorial), experimentar con distintos modelos y construir aplicaciones web inteligentes adaptadas a tus propias ideas.
