---
title: "Fundamentos de Agentes en OpenCode: Crea, Configura y Despliega Agentes Personalizados y Flujos Automatizados"
date: "03-05-2026"
excerpt: "Guía completa y exhaustiva sobre agentes en OpenCode: aprende a utilizar el equipo integrado, crear agentes personalizados, configurar herramientas, permisos y optimizar flujos de trabajo en tu editor de código."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["OpenCode", "Agentes de IA", "Automatización", "Productividad", "Desarrollo", "Prompt Engineering", "IA", "Programación"]
coverImage: "/images/blog/opencode_cover.png"
readTime: "35 min de lectura"
featured: false
---

Comencemos con los fundamentos esenciales. OpenCode es un asistente de programación que vive directamente dentro de tu editor de texto. Imagínalo como tener un compañero de programación experimentado sentado junto a ti en tu escritorio, listo para ayudarte en cualquier momento con cualquier tarea de código en la que estés trabajando. Pero aquí es donde se vuelve verdaderamente poderoso: en lugar de ser una sola persona con conocimientos generales, puedes construir un equipo completo de asistentes especializados, cada uno con su propia experiencia, fortalezas y herramientas dedicadas.

Imagina que estás remodelando una casa. No confiarías en una sola persona para encargarse de todo. Necesitarías un arquitecto para planificar la obra y crear los planos. Necesitarías electricistas y plomeros para tareas técnicas altamente especializadas. Necesitarías un contratista general que construya y coordine el trabajo diario. Y necesitarías un inspector que revise la calidad del trabajo y garantice que todo cumpla con las normativas. Los agentes de OpenCode funcionan exactamente como ese equipo multidisciplinario. Cada agente tiene un rol específico, una experiencia particular y un conjunto de herramientas dedicado que puede utilizar. Esta guía te enseñará cómo usar los agentes que vienen integrados por defecto en OpenCode y, lo que es aún más importante, cómo crear tus propios agentes personalizados cuando requieras ayuda especializada que vaya más allá de las opciones predeterminadas.

La idea clave que hace que OpenCode sea tan efectivo es la siguiente: la ayuda de inteligencia artificial de propósito general es aceptable, pero contar con un equipo de especialistas es mucho más potente para obtener resultados consistentes y de alta calidad adaptados a tus necesidades particulares. Cuando trabajas con un agente especializado al que se le han dado instrucciones precisas y únicamente las herramientas que necesita, obtienes una asistencia enfocada y confiable que entiende a fondo los matices de su dominio específico.

![Portada del Documento: Fundamentos de Agentes en OpenCode](/images/blog/opencode-agents-1.jpg)

## Conceptos básicos: Modelos, asistentes de IA y proveedores

Antes de profundizar en cómo funcionan los agentes de OpenCode, aclaremos algunos conceptos fundamentales que suelen generar confusión cuando recién comienzas a usar herramientas potenciadas por IA. Hablaremos de cuatro ideas clave: qué es un "modelo", en qué se diferencia de un "agente", qué es exactamente un asistente de programación con IA y qué se entiende por "proveedor" (provider). Estos términos aparecen constantemente, y comprenderlos con claridad facilitará todo lo demás en esta guía.

### ¿Cuál es la diferencia entre "Modelo" y "Agente"?

Este es uno de los puntos de confusión más comunes, y es fundamental dejarlo claro porque se trata de conceptos diferentes, aunque trabajen juntos de forma continua.

Piénsalo de esta manera: un modelo es como el motor de un automóvil. Es la fuente de potencia bruta, el componente que realiza el procesamiento lógico y genera las respuestas. Modelos como Claude Sonnet, GPT-4, GPT-5 u otros motores de IA son redes neuronales masivas entrenadas con cantidades gigantescas de texto y código. Pueden escribir código, responder preguntas, analizar documentos y ejecutar muchas otras tareas. Sin embargo, por sí solos son solo motores esperando que alguien les asigne un trabajo y les indique cómo llevarlo a cabo.

Un agente, por otra parte, es como el automóvil completo con su conductor al volante. Es un paquete integral que incluye el modelo (el motor), más un conjunto de instrucciones específicas (las directrices del conductor), más capacidades concretas (el volante, los pedales y las herramientas), más un rol definido (¿vamos al supermercado o estamos compitiendo en una pista de carreras?). El agente es la entidad con la que realmente interactúas en OpenCode. Cuando le envías un mensaje al agente de construcción (build), no estás hablando directamente con un modelo: estás hablando con un agente que utiliza un modelo detrás de escena, siguiendo instrucciones estrictas y manipulando herramientas específicas para realizar el trabajo.

Veamos un ejemplo concreto para ilustrarlo. El modelo "claude-sonnet-4-5" es un motor de IA específico desarrollado por Anthropic. Podrías usar ese mismo modelo para redactar poesía, analizar informes médicos o generar textos de marketing: el modelo en sí es un motor de razonamiento de propósito general. Pero cuando configuras un agente de OpenCode con `model: "anthropic/claude-sonnet-4-5"`, un prompt que dice "Eres un auditor de seguridad senior que encuentra vulnerabilidades en el código" y herramientas que incluyen lectura y búsqueda (`read` y `grep`) pero no escritura (`write`), acabas de crear un agente especializado cuyo único objetivo es la revisión de seguridad. Ese mismo modelo, con un prompt distinto y herramientas diferentes, se convierte en un redactor de documentación o en un asistente de depuración. El modelo representa la capacidad bruta; el agente es la forma en que esa capacidad se especializa, se dirige y se hace segura para un propósito determinado.

Esta relación puede visualizarse como una pila de capas. En la base se encuentra el modelo: el motor de razonamiento de IA puro. Sobre esa base se asienta la configuración del agente, que incluye el prompt (instrucciones sobre rol y comportamiento), las herramientas (lo que el agente tiene permitido hacer), los permisos (cuándo requiere tu aprobación) y la temperatura (qué tan creativo o predecible debe ser). El agente es lo que utilizas en tu día a día: es una instancia configurada de un modelo con una descripción de trabajo y capacidades bien delimitadas.

¿Por qué importa esta distinción en la práctica? Porque cuando creas un agente personalizado, tu esfuerzo principal se centra en el rol del agente y en sus instrucciones, no en cambiar constantemente de modelo. El modelo es un detalle de implementación: lo seleccionas según consideraciones de costo, velocidad y capacidad de razonamiento, pero la mayor parte de tu trabajo consiste en diseñar un prompt excelente y seleccionar las herramientas adecuadas. Podrías utilizar el mismo prompt con distintos modelos y obtener resultados similares, tal vez con ligeras variaciones en calidad o rapidez. Del mismo modo, podrías usar un único modelo para alimentar decenas de agentes diferentes, cada uno con comportamientos y especialidades totalmente distintas. La especialización ocurre a nivel de agente mediante su configuración, no a nivel de modelo.

| Aspecto | Modelo | Agente |
|---|---|---|
| **Qué es** | Un motor de razonamiento de IA puro (Claude, GPT, etc.) | Un asistente configurado con un rol y herramientas específicas |
| **Analogía** | El motor de un automóvil | El automóvil completo con su conductor y un destino fijado |
| **Con qué interactúas** | No interactúas directamente con modelos en OpenCode | Conversas directamente con agentes |
| **Qué determina** | Nivel general de capacidad, velocidad y costo | Comportamiento específico, experiencia y acciones permitidas |
| **¿Mismo modelo en múltiples agentes?** | Sí: un mismo modelo puede potenciar muchos agentes | Cada agente posee su propia configuración de modelo |
| **Qué configuras** | Seleccionas qué modelo usar de las opciones disponibles | Defines prompt, herramientas, permisos y temperatura |
| **Impacto de cambios** | Características de rendimiento (rapidez, calidad de razonamiento) | Comportamiento, seguridad, capacidades y formato de salida |
| **Ejemplo** | anthropic/claude-sonnet-4-5 | Un auditor de seguridad que usa Sonnet y solo lee código |

La conclusión práctica es clara: al diseñar un agente, enfócate en su propósito: ¿qué trabajo debe realizar?, ¿qué instrucciones lo harán efectivo?, ¿qué herramientas debe tener disponibles?, ¿qué nivel de creatividad requiere? La selección del modelo es importante pero secundaria. Comienza con el modelo sugerido por defecto, haz que tu agente sea sobresaliente a través de un buen diseño de prompt y ajusta el modelo únicamente si tienes motivos puntuales relacionados con costos, velocidad o requerimientos avanzados de razonamiento.

### ¿Qué es un asistente de programación con IA?

Un asistente de programación con IA es una herramienta de software que utiliza inteligencia artificial para ayudarte a escribir, comprender, modificar y depurar código. En lugar de tener que resolver cada problema por tu cuenta o navegar por interminables páginas de documentación, cuentas con un compañero capacitado que te asiste en lenguaje natural. Describes lo que necesitas en tus propias palabras y la IA te ayuda a convertirlo en código funcional.

OpenCode es un tipo específico de asistente de código que opera directamente dentro de tu entorno de desarrollo. Para apreciar lo que lo hace especial, conviene repasar primero lo que hacen estos asistentes en general.

Las capacidades centrales de un asistente de programación incluyen diversas categorías:
- **Generación de código**: Es lo primero que suele venir a la mente. Pides "crea una función que valide direcciones de correo electrónico" y la IA genera código listo para usar.
- **Explicación de código**: Puedes seleccionar una función compleja y preguntar "¿qué hace exactamente este fragmento?" para recibir una explicación clara y desglosada.
- **Traducción entre lenguajes**: Convierte lógica de un lenguaje a otro (por ejemplo, de Python a TypeScript o de JavaScript a Go).
- **Refactorización**: Toma código funcional y lo reorganiza para que sea más limpio, eficiente, modular o acorde a mejores patrones de diseño sin alterar su comportamiento externo.
- **Detección y corrección de errores (debugging)**: Describes un problema o pegas un mensaje de error y el asistente ayuda a identificar la causa raíz y propone una solución.
- **Escritura de pruebas**: Genera pruebas unitarias, de integración o casos borde para código existente.
- **Documentación**: Añade comentarios explicativos, genera documentación de funciones o crea archivos README completos.
- **Navegación y búsqueda**: Explora el proyecto para encontrar dónde están definidas ciertas entidades y entender cómo interactúan los distintos módulos.
- **Consultas conceptuales**: Responde dudas sobre buenas prácticas, arquitecturas y uso de librerías o frameworks.

Lo que hace verdaderamente eficaces a los asistentes modernos es su capacidad de comprender el contexto. Pueden ver los archivos que tienes abiertos, analizar la estructura general de tu proyecto y leer archivos de configuración y dependencias. Esta conciencia contextual les permite brindar respuestas pertinentes y específicas en lugar de consejos genéricos. Si preguntas "¿cómo debería manejar la autenticación en este proyecto?", un buen asistente revisará cómo está implementada actualmente la autenticación en tu código, qué librerías utilizas y propondrá una solución compatible con tu arquitectura real.

OpenCode lleva esto un paso más allá al introducir el concepto de equipo de agentes especializados. En lugar de un único asistente que intenta abarcar todo con resultados promedio, OpenCode te permite organizar un equipo donde cada integrante tiene una especialidad concreta: un agente constructor para escribir y modificar código, un agente planificador para revisar y diseñar arquitecturas, y especialistas para seguridad, documentación, depuración e investigación. Esto replica la dinámica de los equipos de desarrollo reales, donde no le pides a la misma persona que construya una funcionalidad a toda prisa y que al mismo tiempo realice la auditoría de seguridad exhaustiva.

El flujo de trabajo es conversacional e iterativo. No lanzas una sola instrucción esperando un resultado mágico e impecable. Mantienes un diálogo continuo: solicitas una tarea, la IA genera el código o análisis, tú lo revisas, pides ajustes, consultas la opinión de otro agente o convocas a un especialista. Es una colaboración activa donde tú mantienes el control, tomas las decisiones arquitectónicas y validas el resultado final.

La tecnología detrás de estos asistentes se fundamenta en modelos de lenguaje masivos (LLMs), entrenados con volúmenes inmensos de texto y código fuente. Estos modelos aprenden patrones estadísticos sobre cómo se estructura el software, cómo se resuelven problemas comunes y cómo traducir especificaciones humanas a instrucciones de máquina. No "entienden" el código como un humano, pero sus sugerencias basadas en patrones suelen ser sorprendentemente precisas y útiles.

¿Cuáles son sus limitaciones? Pueden cometer errores sutiles, malinterpretar requerimientos ambiguos, sugerir APIs obsoletas o mostrarse excesivamente seguros al dar información incorrecta. Además, tienen cortes de conocimiento temporal y no pueden ejecutar mentalmente el código para garantizar su funcionamiento sin errores en tiempo de ejecución. Por eso el ciclo de construcción, revisión y validación humana es indispensable. La mejor manera de trabajar con un asistente de IA es tratarlo como un desarrollador junior sumamente rápido y talentoso: requiere directrices claras, supervisión cuidadosa y retroalimentación constante.

### ¿Qué es un "Proveedor" (Provider)?

Cuando se habla de proveedores (providers) en herramientas como OpenCode, se hace referencia a las empresas que crean, entrenan y alojan los modelos de IA que utilizas. Anthropic, OpenAI, Google y el propio OpenCode son ejemplos de proveedores. Son las entidades que gestionan la infraestructura de cómputo, ejecutan los modelos y ofrecen acceso mediante interfaces de programación (APIs).

Comprender el concepto de proveedor es importante porque influye en los costos, el rendimiento, las características disponibles y la forma en que configuras OpenCode. Cada proveedor ofrece diversos modelos con distintas prestaciones, tarifas y velocidades. Además, necesitas credenciales de acceso (API keys) de cada proveedor que desees utilizar.

Un proveedor es, en esencia, un servicio en la nube al que le envías solicitudes a través de internet; sus servidores procesan la consulta en sus modelos de IA y te devuelven el resultado. La mayoría de los usuarios utiliza IA en la nube porque ejecutar modelos grandes de manera local requiere hardware sumamente costoso, aunque también existen opciones locales como Ollama o LM Studio para casos particulares.

El proveedor determina varios factores clave:
- **Estructura de precios**: Cobro por millón de tokens procesados (palabras/fragmentos), suscripciones mensuales o esquemas híbridos.
- **Especialización de modelos**: Modelos optimizados para código, razonamiento matemático, velocidad, visión o creatividad.
- **Velocidad y latencia**: Modelos ligeros que responden en fracciones de segundo frente a modelos de razonamiento profundo que toman más tiempo.
- **Límites de uso (rate limits)**: Cantidad de solicitudes permitidas por minuto o por día.
- **Políticas de privacidad y retención de datos**: Aspecto fundamental en entornos profesionales y corporativos.

Para utilizar OpenCode con un proveedor determinado, conectas tu cuenta mediante el comando `/connect` e introduces tu clave de API correspondiente. Una vez conectado, puedes referenciar los modelos en la configuración de tus agentes utilizando el formato `proveedor/identificador-del-modelo`. Por ejemplo, `anthropic/claude-sonnet-4-5` indica el modelo Claude Sonnet provisto por Anthropic, mientras que `openai/gpt-5` indica el modelo de OpenAI.

Esta convención de nomenclatura `proveedor/modelo` es consistente en todo el ecosistema de OpenCode. La verás en archivos de configuración, en el comando `/models` y en los mensajes del sistema. Comprenderla te permitirá tomar decisiones fundamentadas: por ejemplo, puedes asignar un modelo potente y detallado a un agente de auditoría de seguridad y un modelo más ligero y económico a un agente de tareas rápidas.

![Tus primeros 10 minutos con los agentes de OpenCode](/images/blog/opencode-agents-2.jpg)

## Tus primeros 10 minutos con los agentes de OpenCode

Antes de continuar con la lectura técnica, te recomendamos probar estos sencillos pasos prácticos en OpenCode. Esta experiencia directa te brindará una comprensión intuitiva de cómo interactúan los agentes:

1. **Presiona la tecla Tab**: Esta tecla te permite alternar entre los agentes disponibles en la rotación principal. Verás nombres como `build` y `plan` aparecer en la interfaz conforme presionas Tab repetidamente. El agente `build` es tu asistente predeterminado, por lo que suele ser el primero en mostrarse.
2. **Crea un archivo con el agente build**: Sin cambiar de agente, escribe el siguiente mensaje:
   > "Crea un script simple en Python que imprima 'Hola Mundo' y guárdalo en hello.py."
   Observa cómo el agente `build` se pone en marcha, crea el archivo y escribe el código Python correspondiente.
3. **Cambia al agente plan**: Presiona la tecla Tab hasta que veas `plan` en la interfaz. Escribe:
   > "Revisa el archivo hello.py que acabamos de crear y sugiere mejoras."
   El agente `plan` leerá el archivo y te entregará observaciones estructuradas sobre buenas prácticas, manejo de errores o convenciones de código sin alterar el archivo original.
4. **Vuelve al agente build para aplicar las mejoras**: Presiona Tab nuevamente para regresar al agente `build` y escribe:
   > "Aplica los cambios sugeridos por el agente plan."
   El agente `build` tomará las recomendaciones de `plan` y modificará `hello.py` para implementarlas.

Este flujo de ida y vuelta representa el 80% del uso cotidiano de OpenCode: el agente `build` construye y modifica, mientras que el agente `plan` analiza y revisa. Alternas entre ellos con la tecla Tab de forma fluida y natural.

![Parte 1: Entendiendo el equipo de agentes integrados](/images/blog/opencode-agents-3.jpg)

## Parte 1: Entendiendo el equipo de agentes integrados

OpenCode incluye siete agentes preinstalados desde el primer momento. Utilizarás dos de ellos de manera constante en tu trabajo diario, convocarás a otros dos ocasionalmente para tareas específicas y tres operarán automáticamente en segundo plano sin que tengas que intervenir.

### Los dos que usarás todos los días

Estos son los pilares fundamentales de tu trabajo en OpenCode:

#### 1. El agente `build` (Constructor)
Es tu ayudante principal por defecto. Escribe código nuevo, edita archivos existentes, ejecuta comandos en la terminal, busca patrones en el proyecto y puede consultar páginas web si es necesario. Posee todas las capacidades prácticas para manipular el proyecto directamente. Para hablar con él, basta con escribir tu petición, ya que es el agente activo por defecto. Si estás en otro agente, presiona Tab hasta seleccionarlo.
- **Ejemplos de uso**: *"Agrega autenticación JWT a esta API"* o *"Extrae esta lógica repetida en una función reutilizable"*.

#### 2. El agente `plan` (Planificador y Revisor)
Es tu especialista en control de calidad, análisis y diseño. Examina código y genera planes detallados, pero no realiza modificaciones destructivas sin tu autorización explícita. Actúa como tu segundo par de ojos y red de seguridad. Puedes pedirle que revise tu trabajo antes de subirlo a producción, que planifique la arquitectura de una nueva funcionalidad o que diagnostique la causa de un fallo complejo.
- **Ejemplos de uso**: *"Revisa mis cambios recientes en busca de problemas de seguridad"* o *"¿Por qué esta función no retorna el valor esperado?"*.

El flujo recomendado combina ambos: creas con `build`, revisas con `plan` y aplicas los ajustes nuevamente con `build`.

### Los dos que llamarás ocasionalmente

Estos agentes no forman parte de la rotación de la tecla Tab. Los invocas escribiendo su nombre precedido por el símbolo `@` en tu mensaje:

#### 1. El agente `@explore` (Explorador y Navegador)
Es tu detective de la base de código. Su función es localizar archivos, rastrear dependencias y mapear cómo se conectan los distintos componentes. Resulta ideal cuando trabajas en un proyecto nuevo o extenso y necesitas ubicar piezas específicas sin tener que revisar manualmente cada directorio.
- **Ejemplo de uso**: `@explore encuentra todos los archivos relacionados con el procesamiento de pagos` o `@explore muéstrame el flujo de autenticación de usuarios`.

#### 2. El agente `@general` (Investigador Multietapa)
Es tu especialista en investigación profunda. Se encarga de recolectar información de múltiples fuentes (tanto del proyecto como de documentación externa), sintetizar hallazgos y responder preguntas técnicas complejas que requieren análisis comparativo.
- **Ejemplo de uso**: `@general cuáles son las mejores prácticas para validación de carga de archivos en Node.js` o `@general investiga estrategias de connection pooling para bases de datos con alto tráfico`.

![Parte 2: Cómo funciona realmente la comunicación entre agentes](/images/blog/opencode-agents-4.jpg)

## Parte 2: Cómo funciona realmente la comunicación entre agentes

Existen dos formas principales de interactuar con los agentes en OpenCode, y cada una cumple un propósito distinto:

1. **Alternar (Switching con la tecla Tab)**: Cambias el agente con el que conversas de manera directa. La conversación continúa en el mismo hilo, pero ahora te diriges a un especialista diferente que adopta su propio enfoque manteniendo el contexto previo. Se utiliza con los agentes principales (`build` y `plan`).
2. **Invocar como subagente (Calling con la sintaxis `@`)**: Le pides a tu agente actual que solicite la ayuda de un especialista en segundo plano. Te mantienes conversando con `build`, pero este delega una subtarea específica a `@explore` o `@general`. El subagente realiza su labor de forma autónoma y entrega sus conclusiones al agente principal, quien las incorpora en su respuesta final.

### ¿Cuándo usar cada enfoque?
- Si deseas una revisión crítica o planificar una arquitectura, **cambia a `plan` con Tab**.
- Si necesitas que se construya o modifique código, **mantente en `build`**.
- Si necesitas localizar componentes o dependencias en el proyecto, **invoca `@explore`**.
- Si requieres una investigación técnica exhaustiva o comparar enfoques, **invoca `@general`**.

Cuando llamas a un subagente con `@`, el sistema genera una subtarea dedicada. Puedes inspeccionar las sesiones secundarias en tiempo real utilizando el atajo de teclado `Ctrl+H` para ingresar a las sesiones hijas y desplazarte entre ellas con las flechas de dirección. Además, OpenCode puede delegar tareas a subagentes de manera automática si detecta que una consulta requiere exploración o investigación especializada.

![Parte 3: ¿Deberías crear un agente personalizado?](/images/blog/opencode-agents-5.jpg)

## Parte 3: ¿Deberías crear un agente personalizado?

Los agentes integrados (`build`, `plan`, `@explore` y `@general`) cubren más del 90% de las necesidades cotidianas de programación. No necesitas apresurarte a crear agentes personalizados desde el primer día.

Conviene crear un agente personalizado cuando detectas un patrón repetitivo en tu flujo de trabajo: realizas una y otra vez el mismo tipo de solicitud especializada y deseas resultados consistentes con estándares fijos, sin tener que redactar las mismas instrucciones en cada sesión.

### Señales claras de que necesitas un agente personalizado:
- Solicitas revisiones de seguridad constantes bajo normas OWASP específicas (indica la necesidad de un `security-auditor`).
- Redactas documentación técnica con una estructura y tono estrictamente estandarizados (indica un `doc-writer`).
- Ejecutas validaciones de calidad, tipado y pruebas antes de cada commit (indica un `quality-check`).
- Verificas el cumplimiento de la guía de estilo de tu empresa (indica un `style-enforcer`).
- Optimizas rendimiento de consultas y algoritmos sistemáticamente (indica un `performance-tuner`).

Para consultas aisladas o tareas esporádicas, basta con preguntar directamente al agente `build` o `plan`. Los agentes personalizados están pensados para necesidades recurrentes donde la consistencia y la especialización ahorran tiempo valioso a largo plazo.

![Parte 4: Creando tu primer agente personalizado](/images/blog/opencode-agents-6.jpg)

## Parte 4: Creando tu primer agente personalizado

La forma más sencilla y segura de crear un agente personalizado es utilizar el asistente interactivo de OpenCode. Este asistente te guía paso a paso a través de cinco preguntas para evitar errores de sintaxis y ubicación:

Abre tu terminal en el directorio de tu proyecto y ejecuta:

```bash
opencode agent create
```

El asistente te solicitará la siguiente información:

1. **Ubicación de guardado**: Elige entre guardar de forma global (disponible en todos tus proyectos) o solo para el proyecto actual. Durante el aprendizaje, se recomienda elegir la opción de proyecto para mantener las configuraciones contenidas.
2. **Nombre del agente**: Un identificador breve en minúsculas y separado por guiones (por ejemplo, `doc-writer`, `security-checker`, `test-runner`). Este será el nombre que usarás al invocarlo con `@`.
3. **Descripción**: Una explicación concisa de entre 10 y 20 palabras que describa qué hace el agente (por ejemplo: *"Revisa código en busca de vulnerabilidades y propone correcciones específicas"*). Esta descripción ayuda tanto al usuario como al sistema a identificar la función del agente.
4. **Selección del modelo**: Selecciona el motor de IA. Puedes aceptar el modelo sugerido por defecto, que ofrece un equilibrio ideal entre costo y rendimiento.
5. **Selección de herramientas (tools)**: Utiliza la barra espaciadora para activar o desactivar cada herramienta:
   - `write`: Permite crear archivos nuevos.
   - `edit`: Permite modificar archivos existentes.
   - `read`: Permite leer el contenido de archivos.
   - `grep`: Permite realizar búsquedas de texto y patrones en el proyecto.
   - `bash`: Permite ejecutar comandos en la terminal.
   - `webfetch`: Permite consultar páginas web externas.

Aplica el principio de privilegio mínimo: asigna únicamente las herramientas estrictamente necesarias para el rol. Un agente revisor no necesita `write` ni `edit`; un redactor de documentación no necesita ejecutar comandos con `bash`. Menos herramientas significan mayor seguridad y un comportamiento más enfocado.

Al finalizar, el asistente creará el archivo de configuración en la ubicación correcta de manera automática.

![Parte 5: Comprendiendo los archivos de configuración de agentes](/images/blog/opencode-agents-7.jpg)

## Parte 5: Comprendiendo los archivos de configuración de agentes

Un archivo de configuración es la ficha técnica que define todo lo relativo a un agente: su propósito, qué acciones puede ejecutar, cómo debe comportarse y qué instrucciones exactas debe seguir.

### Ubicación de los archivos

- **Configuración a nivel de proyecto**: Se guarda en la carpeta `.opencode/agents/nombre-del-agente.md` dentro de la raíz de tu proyecto.
- **Configuración global**: Se almacena en el directorio de configuración de tu usuario (por ejemplo, `~/.config/opencode/agents/nombre-del-agente.md` en sistemas Unix o su equivalente en AppData en Windows).
- **Archivo consolidado opcional**: También es posible definir múltiples agentes dentro de un único archivo `opencode.json`.

### Formato JSON vs Formato Markdown con Frontmatter YAML

Existen dos formatos admitidos por OpenCode para configurar agentes:

#### 1. Formato JSON (archivo consolidado `opencode.json`)
Agrupa todas las definiciones de agentes en una sola estructura:

```json
{
  "agent": {
    "security-checker": {
      "description": "Revisa código en busca de vulnerabilidades de seguridad",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "temperature": 0.2,
      "tools": {
        "write": false,
        "edit": false,
        "bash": false,
        "read": true,
        "grep": true,
        "webfetch": false
      },
      "permission": {
        "edit": "ask"
      },
      "prompt": "Eres un auditor senior de seguridad..."
    }
  }
}
```

También permite referenciar un archivo de prompt externo:

```json
{
  "agent": {
    "doc-writer": {
      "description": "Crea y mantiene la documentación técnica del proyecto",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "temperature": 0.4,
      "tools": {
        "write": true,
        "edit": true,
        "read": true,
        "grep": true,
        "bash": false,
        "webfetch": false
      },
      "prompt": "{file:./prompts/doc-writer.txt}"
    }
  }
}
```

#### 2. Formato Markdown con Frontmatter YAML (un archivo por agente)
Es el formato más legible y recomendado para personas. Cada agente reside en su propio archivo `.md` dentro de `.opencode/agents/`:

```yaml
---
description: "Revisa código en busca de vulnerabilidades de seguridad"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.2
tools:
  write: false
  edit: false
  bash: false
  read: true
  grep: true
  webfetch: false
permission:
  edit: "ask"
---

Eres un auditor de seguridad senior con 15 años de experiencia. Tu objetivo es identificar vulnerabilidades de seguridad en el código.

**Metodología:**
1. Validar entradas y prevenir inyecciones (SQL, comandos, XSS).
2. Revisar mecanismos de autenticación y manejo de sesiones.
3. Examinar controles de autorización y privilegios.
4. Detectar secretos o credenciales expuestas en el código.
5. Verificar el uso correcto de algoritmos de cifrado.

**Estructura requerida para cada hallazgo:**
- **Severidad:** Crítica / Alta / Media / Baja / Informativa
- **Ubicación:** archivo:línea
- **Problema:** Explicación clara y concisa
- **Solución:** Código de corrección específico

Incluye referencias a CWE u OWASP siempre que aplique.
```

### Comparativa detallada entre formatos

| Dimensión | Formato JSON | Formato Markdown / YAML |
|---|---|---|
| **Organización** | Archivo único `opencode.json` con todos los agentes | Un archivo `.md` por agente en `.opencode/agents/` |
| **Legibilidad humana** | Baja: sintaxis estricta, prompts en una sola línea o escapados | Alta: estructura limpia y prompts con formato enriquecido |
| **Tolerancia a errores** | Un error de sintaxis inhabilita todos los agentes | Un error solo afecta al archivo del agente en cuestión |
| **Edición del prompt** | Incómoda para textos largos | Natural: párrafos, listas, negritas y bloques de código |
| **Control de versiones** | Un único commit modifica todos los agentes | Cada agente se rastrea en su propio archivo independiente |
| **Comentarios** | No admite comentarios | YAML admite comentarios con `#` |
| **Generación automática** | Ideal para scripts y pipelines programáticos | Requiere parseo combinado de YAML y Markdown |

### Recomendación práctica
Para la gran mayoría de desarrolladores y equipos, el formato Markdown con frontmatter YAML es la opción superior debido a su legibilidad, facilidad para redactar prompts complejos y aislamiento de cambios. Puedes combinar ambos enfoques si lo deseas: OpenCode carga y fusiona agentes de todas las fuentes disponibles.

## Parte 6: Explicación de las opciones de configuración de agentes

### Configuraciones esenciales (empieza por aquí)

#### 1. `description` (Obligatoria)
Define qué hace el agente en una o dos oraciones (10 a 20 palabras). Se muestra en las listas de selección, en la salida de `/agents` y guía al sistema al invocar subagentes de forma automática.
- *Ejemplo bueno*: `"Audita código en busca de fallos de seguridad y propone parches concretos."`
- *Ejemplo vago*: `"Agente de código que hace cosas de seguridad."`

#### 2. `mode` (Modo de disponibilidad)
Controla cómo se accede al agente:
- `primary`: Aparece en la rotación de la tecla Tab (como `build` y `plan`).
- `subagent`: Solo disponible mediante menciones `@nombre` o invocaciones automáticas.
- `all`: Disponible tanto por Tab como por `@nombre`.
*Regla general*: Configura casi todos tus agentes personalizados como `subagent`, dejando la rotación Tab reservada para tus asistentes principales.

#### 3. `model` (Motor de IA)
Especifica qué modelo impulsa al agente con el formato `proveedor/modelo` (por ejemplo: `anthropic/claude-sonnet-4-5`, `openai/gpt-5` o `anthropic/claude-opus-4`). Si se omite, hereda el modelo configurado globalmente en OpenCode.

#### 4. `prompt` (Instrucciones del agente)
Es la directiva fundamental. Define la personalidad, rol, metodología, restricciones y formato de salida del agente. En formato Markdown, corresponde a todo el texto situado después del bloque YAML. Un prompt bien estructurado en un modelo intermedio supera consistentemente a un prompt vago en el modelo más costoso.

### Configuraciones importantes (configúralas correctamente)

#### 1. `temperature` (Control de variabilidad y creatividad)
Rango de 0.0 a 1.0:
- **0.1 a 0.3 (Baja - Consistente y precisa)**: Ideal para revisiones de código, auditorías de seguridad, pruebas y tareas que demandan exactitud estricta.
- **0.4 a 0.6 (Media - Equilibrada)**: Ideal para programación general, refactorizaciones y desarrollo cotidiano.
- **0.7 a 0.9 (Alta - Creativa y diversa)**: Útil para lluvia de ideas, nombres de proyectos y exploración de enfoques no convencionales.

#### 2. `tools` (Herramientas disponibles)
Interruptores booleanos (`true` / `false`) para cada capacidad: `write`, `edit`, `read`, `grep`, `bash` y `webfetch`.

```yaml
# Ejemplo para un revisor de código (solo lectura y ejecución de linters)
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: true
  webfetch: false
```

#### 3. `permission` (Controles de seguridad y aprobación)
Define si el agente ejecuta una acción de forma directa o solicita tu confirmación:
- `allow`: Ejecuta la acción automáticamente sin preguntar.
- `ask`: Solicita tu confirmación en pantalla antes de ejecutar.
- `deny`: Prohíbe totalmente el uso de la herramienta.

```yaml
# Configuración segura para un constructor con salvaguardas en comandos de consola
permission:
  read: "allow"
  grep: "allow"
  write: "allow"
  edit: "ask"
  bash:
    default: "ask"
    allow: ["git status", "git diff", "npm test", "pytest"]
    deny: ["rm -rf", "dd", "mkfs"]
```

### Otras configuraciones útiles

#### El parámetro `steps` (Límite de ciclos de razonamiento)
Controla cuántos ciclos de pensamiento y ejecución puede realizar un agente antes de detenerse y entregar su informe. Cada paso representa una iteración de lectura, decisión y acción.

| Tipo de tarea | Pasos típicos | Aumentar si... | Reducir si... |
|---|---|---|---|
| Consultas simples o formato | 3 a 5 | La respuesta queda incompleta | La tarea es sumamente sencilla |
| Investigación básica (2-3 fuentes) | 5 a 10 | Requiere mayor profundidad | Se necesita respuesta inmediata |
| Investigación compleja | 10 a 20 | Los hallazgos son superficiales | Hay restricciones de tiempo o costo |
| Análisis de múltiples archivos | 20 a 30 | Se omiten módulos clave | Es demasiado lento para el flujo |
| Auditoría e investigación profunda | 30 a 50 | Se requiere cobertura total | El consumo de tokens es muy alto |

Si no se define, el agente opera sin un límite estricto de pasos hasta concluir la tarea.

#### Otros parámetros:
- `color`: Define el color del agente en la interfaz (código hexadecimal como `#FF5733` o identificadores como `primary`, `success`, `warning`, `error`).
- `disable`: Permite desactivar temporalmente un agente estableciendo su valor en `true`.
- `permission.task`: Controla qué subagentes puede convocar un agente de manera autónoma en arquitecturas orquestadas.

## Parte 7: Construyendo un agente personalizado real paso a paso

A continuación, crearemos un agente técnico de redacción de documentación (`doc-writer`) de principio a fin:

### Paso 1: Identificar la necesidad
En un proyecto de software surge constantemente la necesidad de redactar y actualizar archivos README, documentar endpoints de APIs, añadir comentarios explicativos en funciones complejas y mantener guías de contribución. Usar el agente de propósito general suele generar formatos dispares y omisiones frecuentes. Un agente especializado resolverá esto aplicando estándares estrictos en cada intervención.

### Paso 2: Ejecutar el asistente
En la terminal del proyecto ejecutamos:

```bash
opencode agent create
```

Respondemos a las preguntas:
1. **Ubicación**: Guardar en el proyecto actual.
2. **Nombre**: `doc-writer`
3. **Descripción**: `"Crea y mantiene la documentación técnica del proyecto siguiendo estándares estrictos"`
4. **Modelo**: Aceptar el modelo recomendado por defecto.
5. **Herramientas**: Activar `read`, `write`, `edit` y `grep`. Desactivar `bash` y `webfetch`.

### Paso 3: Redactar el prompt y ajustar la configuración
Abrimos `.opencode/agents/doc-writer.md` y reemplazamos el contenido con las directivas completas:

```yaml
---
description: "Crea y mantiene la documentación técnica del proyecto siguiendo estándares estrictos"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.4
tools:
  write: true
  edit: true
  read: true
  grep: true
  bash: false
  webfetch: false
permission:
  read: "allow"
  grep: "allow"
  write: "allow"
  edit: "ask"
---

Eres un redactor técnico especializado en crear documentación clara, exhaustiva y mantenible para proyectos de software. Escribes para desarrolladores competentes que no conocen los detalles internos de este repositorio en particular.

**Principios fundamentales:**
- Explica siempre el "por qué" de las decisiones arquitectónicas, no solo el "qué".
- Proporciona ejemplos de código funcionales y listos para copiar con bloques delimitados por triple acento grave y el lenguaje especificado.
- Utiliza una jerarquía lógica con encabezados Markdown y tablas para parámetros o variables de entorno.
- Enlaza a módulos o componentes relacionados cuando sea pertinente.

**Tipos de documentos:**
1. **README del proyecto**: Propósito general, requisitos previos, instalación paso a paso, ejemplos rápidos de uso y enlaces a guías avanzadas.
2. **Documentación de APIs**: Descripción del endpoint, métodos HTTP, parámetros de entrada, payloads JSON de ejemplo para peticiones y respuestas, códigos de estado HTTP y manejo de errores.
3. **Comentarios en código**: Enfocados en explicar casos borde, suposiciones no evidentes y compensaciones técnicas (trade-offs).
4. **Guías de desarrollo**: Estructura de carpetas, estándares de contribución y flujo de ejecución de pruebas.

**Flujo de trabajo:**
1. Lee primero el código fuente y los archivos de configuración para comprender el funcionamiento real.
2. Identifica al público objetivo del documento.
3. Redacta ejemplos prácticos y verifica su coherencia sintáctica.
4. Al actualizar documentación existente, preserva la información vigente y marca con `DEPRECATED` las opciones obsoletas.
```

### Paso 4: Probar el agente
En OpenCode invocamos al nuevo especialista:

```text
@doc-writer crea un archivo README.md completo para este proyecto explicando su arquitectura, requisitos e instrucciones de instalación.
```

### Paso 5: Iterar y refinar
Revisa el resultado obtenido. Si notas que las explicaciones son demasiado extensas, reduce la temperatura a `0.3`. Si faltan secciones sobre variables de entorno, agrégalas explícitamente en el checklist del prompt.

## Parte 8: Ejemplos de agentes listos para usar

A continuación se presentan seis configuraciones de agentes listos para producción que puedes copiar directamente en la carpeta `.opencode/agents/` de tus proyectos:

### 1. Revisor de Código (`.opencode/agents/code-reviewer.md`)

```yaml
---
description: "Revisor exhaustivo de código enfocado en calidad, seguridad y buenas prácticas"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.2
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: true
permission:
  read: "allow"
  grep: "allow"
  bash: "ask"
  write: "deny"
  edit: "deny"
---

Eres un revisor de código senior con 15 años de experiencia. Tus revisiones son minuciosas, constructivas y accionables. Analizas el código bajo seis dimensiones clave:

**1. Seguridad:**
- Inyecciones SQL, inyección de comandos, vulnerabilidades XSS y path traversal.
- Autenticación: manejo de contraseñas, sesiones, tokens y rotación.
- Autorización: control de acceso basado en roles (RBAC) y escalación de privilegios.
- Secretos: llaves de API, credenciales o certificados expuestos en el código.
- Validación de datos y desinfección de entradas.

**2. Manejo de errores:**
- Bloques try/catch ausentes en operaciones críticas o asíncronas.
- Casos límite no contemplados (valores nulos, arreglos vacíos).
- Supresión silenciosa de errores o mensajes que filtran información interna.
- Liberación adecuada de recursos (conexiones, archivos).

**3. Rendimiento:**
- Bucles ineficientes y complejidad algorítmica innecesaria.
- Consultas a bases de datos con problema de N+1.
- Fugas de memoria potenciales y operaciones bloqueantes en hilos principales.
- Oportunidades de almacenamiento en caché.

**4. Calidad y legibilidad:**
- Claridad en nombres de variables y funciones.
- Duplicación de código (principio DRY).
- Complejidad ciclomática excesiva (funciones mayores a 50 líneas o anidaciones profundas).
- Adherencia a principios SOLID y eliminación de números mágicos.

**5. Pruebas:**
- Cobertura de pruebas para nuevo código y casos borde.
- Nombres claros y aserciones deterministas.

**6. Mantenibilidad:**
- Acoplamiento excesivo entre módulos y dependencias ocultas.
- Comentarios desactualizados o ausentes en lógica compleja.

**Estructura de respuesta obligatoria:**
1. **Resumen general** (2 a 3 oraciones de balance general).
2. **Hallazgos identificados** (para cada uno: Severidad [Crítica/Alta/Media/Baja/Info], Ubicación [archivo:línea], Explicación del problema y Código de solución propuesto).
3. **Observaciones positivas** (buenas prácticas encontradas).
4. **Prioridades inmediatas** (los 3 puntos más urgentes a corregir).
```

### 2. Auditor de Seguridad (`.opencode/agents/security-auditor.md`)

```yaml
---
description: "Especialista en ciberseguridad para auditorías exhaustivas de código y dependencias"
mode: "subagent"
model: "anthropic/claude-opus-4"
temperature: 0.1
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: true
permission:
  read: "allow"
  grep: "allow"
  bash: "ask"
  write: "deny"
  edit: "deny"
---

Eres un especialista en ciberseguridad realizando una auditoría formal de código. Tu alcance abarca diez categorías fundamentales:

1. **Validación de entradas e inyecciones**: SQLi, NoSQLi, Command Injection, XSS, SSRF, XML Entity Injection, Path Traversal.
2. **Autenticación**: Hashing de contraseñas (Argon2/bcrypt/scrypt), políticas de complejidad, cookies HttpOnly/Secure, protección contra fuerza bruta.
3. **Autorización**: IDOR (Insecure Direct Object References), escalación horizontal y vertical, controles de acceso faltantes en endpoints.
4. **Protección de datos**: Tratamiento de datos personales (PII), cifrado en reposo y en tránsito (TLS), sanitización de logs.
5. **Gestión de secretos**: Detección de claves de API, tokens JWT o credenciales codificadas directamente en el código o archivos de configuración.
6. **Dependencias y cadena de suministro**: Vulnerabilidades conocidas (CVEs) en manifiestos de paquetes y paquetes desactualizados.
7. **Configuración del entorno**: Modos de depuración activos en producción, cabeceras CORS excesivamente permisivas, puertos expuestos.
8. **Criptografía**: Identificación de algoritmos obsoletos (MD5, SHA1, DES, RC4), modos inseguros (ECB) o números aleatorios predecibles.
9. **Monitoreo y auditoría**: Registro forense suficiente sin filtración de datos sensibles.
10. **Seguridad en APIs**: Limitación de tasa (rate limiting), límites de tamaño de payload y control estricto de verbos HTTP.

**Para cada vulnerabilidad reportada:**
- **Severidad**: Crítica / Alta / Media / Baja / Informativa.
- **Categoría**: Referencia CWE u OWASP (por ejemplo, CWE-89, OWASP A03:2021).
- **Descripción e Impacto**: Escenario de explotación real y posibles consecuencias.
- **Ubicación exacta**: archivo:línea.
- **Plan de remediación**: Código corregido paso a paso.

**Estructura del informe:**
1. Resumen ejecutivo con matriz de riesgos.
2. Hallazgos detallados clasificados por categoría.
3. Prácticas seguras observadas.
4. Hoja de ruta de mitigación priorizada.
```

### 3. Asistente de Depuración (`.opencode/agents/debugger.md`)

```yaml
---
description: "Investigador metódico de fallos, excepciones y problemas de rendimiento"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.3
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: true
permission:
  read: "allow"
  grep: "allow"
  bash: "ask"
  write: "deny"
  edit: "deny"
---

Eres un especialista en depuración de software. Eres metódico, analítico y no te basas en suposiciones: investigas la evidencia paso a paso.

**Proceso de investigación en 9 fases:**
1. **Recolección de datos**: Registra trazas de error (stack traces), logs, síntomas exactos y cambios recientes en el código.
2. **Reproducción**: Determina las condiciones mínimas necesarias para reproducir el fallo.
3. **Análisis de logs**: Examina archivos de registro buscando patrones temporales o anomalías en el flujo.
4. **Revisión histórica**: Inspecciona `git log -p` o `git blame` en los archivos involucrados para entender qué modificó el comportamiento.
5. **Aislamiento**: Delimita el problema a una función, módulo o llamada específica mediante búsqueda binaria o puntos de control.
6. **Hipótesis y validación**: Formula 2 o 3 causas probables y diseña pruebas directas para confirmar o refutar cada una.
7. **Identificación de la causa raíz**: Señala la línea exacta y explica por qué ocurre la falla bajo esas condiciones.
8. **Propuesta de solución**: Presenta el parche de código con su justificación y pruebas de no regresión.
9. **Prevención**: Propone reglas de linter, tipos estrictos o pruebas automatizadas para evitar que el fallo se repita.

**Formato de salida:**
- **Resumen del problema** (1 párrafo explicativo).
- **Pasos de la investigación** (evidencia revisada y descartes realizados).
- **Causa raíz identificada** (archivo:línea con diagnóstico técnico).
- **Solución recomendada** (código corregido y justificación).
- **Plan de verificación** (cómo comprobar que el error está resuelto).
```

### 4. Planificador de Arquitectura (`.opencode/agents/architect.md`)

```yaml
---
description: "Diseñador de sistemas de software, patrones arquitectónicos y planes de migración"
mode: "primary"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.3
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: false
  webfetch: false
permission:
  read: "allow"
  grep: "allow"
  write: "deny"
  edit: "deny"
  bash: "deny"
---

Eres un arquitecto de software senior. Diseñas sistemas robustos, escalables y mantenibles, elaborando planes de implementación detallados sin modificar código directamente.

**Metodología de diseño:**
1. **Análisis de requerimientos**: Requisitos funcionales y no funcionales (latencia, rendimiento, disponibilidad, seguridad, costo operativo).
2. **Identificación de restricciones**: Plazos de entrega, presupuesto de infraestructura, conocimientos del equipo y tecnologías existentes.
3. **Evaluación de alternativas (Trade-offs)**: Compara opciones con claridad (simplicidad vs flexibilidad, monolito modular vs microservicios, SQL vs NoSQL).
4. **Selección de patrones y tecnologías**: Justifica cada elección tecnológica y documenta las razones por las que se descartaron otras opciones.
5. **Modelado y diagramas textuales**: Representa la interacción de componentes, flujos de datos y modelos de base de datos mediante esquemas textuales y listas estructuradas.
6. **Hoja de ruta por fases**: Divide el proyecto en entregables concretos (Fase 1: MVP/Base, Fase 2: Funcionalidades clave, Fase 3: Optimización y resiliencia).
7. **Gestión de riesgos**: Identifica puntos únicos de falla (SPOF), cuellos de botella potenciales y planes de contingencia.

**Principios:**
- Prioriza la simplicidad: evita la sobreingeniería.
- Considera siempre la carga operativa real que demandará el sistema en producción.
```

### 5. Especialista en Investigación (`.opencode/agents/researcher.md`)

```yaml
---
description: "Investigador técnico profundo y sintetizador de información de código y web"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.6
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: false
  webfetch: true
permission:
  read: "allow"
  grep: "allow"
  webfetch: "ask"
  write: "deny"
  edit: "deny"
  bash: "deny"
---

Eres un especialista en investigación técnica. Tu labor consiste en recopilar información de fuentes diversas, contrastar datos y sintetizar conclusiones claras y estructuradas.

**Metodología:**
1. **Delimitación de la pregunta**: Descompón la consulta principal en subpreguntas concretas y define el alcance.
2. **Exploración de fuentes**: Analiza el código local y consulta fuentes web autorizadas (documentación oficial, RFCs, blogs de ingeniería reconocidos).
3. **Síntesis y contraste**: Identifica consensos de la industria, señala contradicciones y destaca qué información está obsoleta.
4. **Presentación estructurada**:
   - **Resumen ejecutivo**: Respuesta directa en 2 o 3 párrafos.
   - **Hallazgos detallados**: Organizados por temas con tablas comparativas.
   - **Recomendaciones prácticas**: Pasos a seguir con sus respectivas justificaciones.
   - **Fuentes consultadas**: Enlaces y referencias con fecha de verificación.
```

### 6. Guardián de Calidad (`.opencode/agents/quality-check.md`)

```yaml
---
description: "Ejecuta validaciones de linters, pruebas, tipado y seguridad antes de commits"
mode: "subagent"
model: "anthropic/claude-sonnet-4-5"
temperature: 0.2
tools:
  write: false
  edit: false
  read: true
  grep: true
  bash: true
permission:
  read: "allow"
  grep: "allow"
  bash: "ask"
  write: "deny"
  edit: "deny"
---

Eres un inspector de aseguramiento de calidad de software (QA). Tu función es verificar el estado general del proyecto antes de realizar confirmaciones de código (commits) o despliegues.

**Secuencia de validación:**
1. **Análisis estático (Linting)**: Ejecuta los linters del proyecto (ESLint, Ruff, Biome, Golangci-lint, Flake8) y reporta errores y advertencias.
2. **Verificación de tipos**: Ejecuta comprobaciones estrictas de tipado (`tsc --noEmit`, `mypy`, compiladores).
3. **Suite de pruebas**: Ejecuta pruebas unitarias y de integración (`npm test`, `pytest`, `cargo test`, `go test`), verificando que no existan regresiones.
4. **Formato de código**: Valida que los archivos cumplan con el formato estándar (`prettier --check`, `black --check`, `gofmt -l`, `cargo fmt --check`).
5. **Auditoría de dependencias**: Revisa vulnerabilidades conocidas en paquetes (`npm audit`, `pip-audit`, `cargo audit`).

**Comportamiento:**
- No modifica código automáticamente: reporta el estado exacto de cada validación.
- Presenta una tabla con el estado final: Aprobado (Pass), Fallido (Fail) o Advertencias (Warnings).
- Ofrece el veredicto final: "Listo para commit" o "Se requiere resolver los problemas bloqueantes antes de confirmar".
```

## Parte 9: Temas avanzados

### Prevalencia y orden de carga de configuraciones

Cuando defines agentes con el mismo nombre en diferentes ubicaciones, OpenCode fusiona las opciones aplicando un orden de prioridad estricto. Las fuentes posteriores anulan a las anteriores:

1. **Configuraciones por defecto integradas en OpenCode** (menor prioridad).
2. **Archivo global** `~/.config/opencode/opencode.json`.
3. **Archivos globales de agentes** `~/.config/opencode/agents/*.md`.
4. **Archivo especificado por la variable de entorno** `OPENCODE_CONFIG`.
5. **Archivo de proyecto** `opencode.json` en la raíz del repositorio.
6. **Archivos de agentes del proyecto** `.opencode/agents/*.md` (mayor prioridad).

Para verificar en cualquier momento qué configuración exacta está activa tras la fusión, ejecuta:

```bash
opencode config show
```

### Configuración de Proveedores y Claves de API

Para utilizar modelos comerciales (Anthropic, OpenAI, Google, etc.), es necesario conectar tus credenciales mediante el comando interactivo:

```text
/connect
```

#### ¿Qué es una clave de API (API Key) y por qué se necesita?
Una clave de API es una cadena alfanumérica única que sirve como identificador y credencial de autenticación ante los servidores del proveedor. Cumple cuatro funciones esenciales:
- **Autenticación**: Confirma tu identidad y valida que tienes una cuenta activa.
- **Facturación y medición**: Registra el consumo de tokens procesados para el cobro correspondiente.
- **Seguridad**: Si una clave se ve comprometida, puedes revocarla de inmediato desde el panel del proveedor sin alterar tu cuenta.
- **Límites de tasa (Rate Limits)**: Permite a los proveedores regular la cantidad de peticiones por minuto para garantizar la estabilidad del servicio.

*Recomendaciones de seguridad*: Nunca agregues claves de API al control de versiones (Git), no las compartas en capturas de pantalla y utiliza el comando `/connect` de OpenCode, el cual las almacena de forma segura en el gestor de credenciales de tu sistema operativo.

### Proveedores personalizados (Modelos locales y APIs internas)

Si utilizas modelos locales mediante Ollama o LM Studio, o cuentas con una API de IA interna en tu empresa, puedes configurar un proveedor personalizado en tu archivo `opencode.json`:

```json
{
  "provider": {
    "local-ollama": {
      "name": "Ollama Local",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "qwen-2.5-coder": {
          "name": "Qwen 2.5 Coder 32B"
        }
      }
    }
  }
}
```

Luego puedes referenciar el modelo en tus agentes usando `model: "local-ollama/qwen-2.5-coder"`.

### Permisos de orquestación (`permission.task`)

La opción `permission.task` permite restringir qué subagentes puede invocar un agente de manera autónoma cuando toma decisiones por su cuenta. Esto resulta especialmente útil al construir jerarquías complejas donde un agente coordinador solo debe comunicarse con especialistas autorizados:

```yaml
permission:
  task:
    default: "deny"
    allow:
      - "orchestrator-*"
    ask:
      - "code-reviewer"
```

*Nota*: Esta restricción aplica a las decisiones autónomas del agente; como usuario siempre podrás invocar manualmente cualquier agente mediante `@nombre`.

## Parte 10: Resolución de problemas y soluciones prácticas

### 1. Creé un agente pero no aparece en OpenCode
- **¿Reiniciaste OpenCode?** OpenCode lee los archivos al iniciar. Cierra el editor y vuelve a abrirlo.
- **¿El modo es el correcto?** Los agentes configurados como `mode: "subagent"` no aparecen en la rotación de la tecla Tab, solo responden a menciones con `@`. Cambia a `mode: "primary"` o `mode: "all"` si deseas alternar con Tab.
- **¿La ruta es la adecuada?** Verifica que el archivo esté en `.opencode/agents/tu-agente.md` dentro de la raíz del proyecto.
- **¿Hay errores de sintaxis en el YAML?** Un espacio incorrecto en la indentación del frontmatter puede invalidar la carga.
- **¿Está deshabilitado?** Comprueba que no contenga la directiva `disable: true`.
- **Diagnóstico**: Ejecuta `opencode config show` para comprobar si OpenCode detecta el archivo.

### 2. El agente utiliza un modelo incorrecto
- Verifica la ortografía exacta en `model: "proveedor/identificador"`.
- Asegúrate de haber conectado ese proveedor mediante `/connect`.
- Comprueba que otra configuración a nivel de proyecto no esté sobreescribiendo tu ajuste global.

### 3. El agente no puede usar una herramienta que activé
- Comprueba que la herramienta esté en `true` dentro del bloque `tools`.
- Revisa el bloque `permission`: si la herramienta está en `true` pero el permiso está en `deny`, quedará bloqueada.
- Si la herramienta depende de un servidor MCP (Model Context Protocol), asegúrate de que el servicio correspondiente esté en ejecución.

### 4. Las respuestas del agente son incoherentes o demasiado impredecibles
- Reduce el valor de `temperature`. Un valor de `0.8` suele generar divagaciones; establécelo entre `0.2` y `0.4` para tareas de código.

### 5. El agente convoca subagentes no deseados de forma automática
- La descripción (`description`) del subagente es demasiado amplia y coincide con peticiones generales. Redáctala con términos más específicos y delimitados.

### 6. Los cambios en el archivo de configuración no surten efecto
- Reinicia OpenCode completamente para forzar la recarga de todas las configuraciones.
- Ejecuta `opencode config show` para confirmar que tus modificaciones fueron procesadas.

## Parte 11: Referencia rápida

### ¿Qué agente usar para cada objetivo?

| Objetivo | Agente a utilizar | Método de acceso |
|---|---|---|
| Escribir, modificar o refactorizar código | `build` | Activo por defecto o tecla Tab |
| Analizar, revisar y planificar cambios | `plan` | Tecla Tab hasta seleccionar `plan` |
| Localizar archivos y dependencias en el proyecto | `@explore` | Escribir `@explore [consulta]` |
| Investigar mejores prácticas y sintetizar conceptos | `@general` | Escribir `@general [consulta]` |
| Redactar y actualizar documentación técnica | `@doc-writer` | Escribir `@doc-writer [consulta]` |
| Auditar vulnerabilidades de seguridad | `@security-auditor` | Escribir `@security-auditor [consulta]` |
| Diagnosticar errores y excepciones complejas | `@debugger` | Escribir `@debugger [consulta]` |
| Validar linters, pruebas y tipos antes de commits | `@quality-check` | Escribir `@quality-check [consulta]` |
| Obtener un resumen de la sesión actual | `/summary` | Comando `/summary` en la consola |

### Tabla rápida de temperatura

| Rango | Nivel | Comportamiento | Casos de uso recomendados |
|---|---|---|---|
| **0.1 - 0.3** | Bajo | Predecible, riguroso, consistente | Auditorías de seguridad, pruebas, linters, revisión formal |
| **0.4 - 0.6** | Medio | Equilibrado, resolución estándar | Programación general, refactorización, redacción técnica |
| **0.7 - 0.9** | Alto | Creativo, variado, exploratorio | Lluvia de ideas, prototipado conceptual, naming |

### Comandos más utilizados en OpenCode

- `opencode agent create`: Inicia el asistente interactivo para crear un nuevo agente.
- `opencode config show`: Muestra la configuración final fusionada de todos los orígenes.
- `opencode config validate`: Valida la sintaxis de los archivos de configuración.
- `/models`: Lista los modelos disponibles a través de los proveedores conectados.
- `/connect`: Permite conectar o actualizar claves de API de proveedores.
- `Tab`: Alterna entre los agentes principales (`primary`).
- `@nombre-agente`: Invoca a un subagente especializado en el mensaje actual.
- `/summary`: Genera un resumen estructurado de la conversación activa.

### Plantilla base para nuevos agentes (`.opencode/agents/mi-agente.md`)

```yaml
---
description: "Breve descripción clara del propósito del agente"
mode: "subagent" # o "primary" para incluirlo en la rotación Tab
model: "anthropic/claude-sonnet-4-5"
temperature: 0.3
steps: 10
tools:
  write: false
  edit: false
  bash: false
  read: true
  grep: true
  webfetch: false
permission:
  read: "allow"
  grep: "allow"
  edit: "ask"
  write: "ask"
  bash: "deny"
---

Eres un especialista en [rol o dominio]. Tu objetivo principal es [propósito].

**Metodología:**
1. [Paso uno]
2. [Paso dos]
3. [Paso tres]

**Formato de salida requerido:**
- [Estructura esperada]

**Restricciones:**
- [Acciones no permitidas o advertencias]
```

## Parte 12: Resumen de los agentes integrados

A modo de recapitulación rápida, estos son los siete agentes que incluye OpenCode:

1. **`build`** (Principal): Asistente por defecto para escribir, refactorizar y modificar código.
2. **`plan`** (Principal): Revisor y analista que evalúa código y diseña estrategias sin realizar modificaciones destructivas.
3. **`explore`** (Subagente): Navegador veloz para ubicar archivos, símbolos y dependencias en el repositorio.
4. **`general`** (Subagente): Investigador multietapa para analizar conceptos complejos y consultar fuentes externas.
5. **`compaction`** (Oculto y automático): Resume conversaciones extensas para optimizar el uso de la ventana de contexto.
6. **`title`** (Oculto y automático): Genera títulos descriptivos para las sesiones de trabajo.
7. **`summary`** (Oculto): Accesible mediante el comando `/summary` para generar minutas de la sesión actual.

## Conclusión

El sistema de agentes de OpenCode transforma la inteligencia artificial de un simple chatbot aislado en un equipo multidisciplinario de especialistas integrado directamente en tu editor de código.

Para obtener el máximo provecho de esta herramienta:
1. **Comienza con lo básico**: Utiliza el flujo de alternancia con la tecla Tab entre `build` (para construir) y `plan` (para revisar).
2. **Invoca especialistas según la necesidad**: Usa `@explore` cuando busques componentes y `@general` para investigar enfoques técnicos.
3. **Crea agentes personalizados solo ante tareas recurrentes**: Cuando notes que repites las mismas instrucciones de revisión, documentación o auditoría, encapsúlalas en un archivo Markdown dentro de `.opencode/agents/`.
4. **Cuida los tres ajustes esenciales**: Asigna una **temperatura** adecuada a la tarea, habilita únicamente las **herramientas** indispensables y define **permisos** estrictos para operaciones destructivas.
5. **El prompt es la clave**: Invierte tiempo en redactar directivas claras con listas de verificación y formatos de salida estructurados. Un prompt sobresaliente en un modelo equilibrado brinda resultados consistentes y de primer nivel.

## Apéndice

### Glosario de términos clave

- **`@-mention`**: Sintaxis (`@nombre`) para convocar a un subagente específico dentro de la conversación actual.
- **Agente (Agent)**: Entidad configurada de IA que combina un modelo, un prompt especializado, un conjunto de herramientas y reglas de permisos.
- **API (Application Programming Interface)**: Mecanismo que permite la comunicación entre diferentes componentes de software y servicios en la nube.
- **API Key**: Clave secreta que autentica tus peticiones ante los proveedores de modelos de IA.
- **Herramienta `bash`**: Permite al agente ejecutar comandos en la terminal del sistema.
- **Herramienta `edit`**: Permite modificar secciones concretas de archivos existentes sin sobreescribirlos por completo.
- **Herramienta `grep`**: Permite buscar patrones de texto y expresiones regulares en todo el proyecto.
- **Herramienta `read`**: Permite al agente inspeccionar el contenido de archivos locales.
- **Herramienta `webfetch`**: Permite consultar e importar información desde páginas web públicas.
- **Herramienta `write`**: Permite crear archivos nuevos en el disco.
- **Modelo (Model)**: Red neuronal de IA (como Claude Sonnet o GPT-5) que procesa el lenguaje y genera respuestas.
- **Permisos (Permissions)**: Reglas que determinan si una acción se ejecuta de forma automática (`allow`), requiere confirmación del usuario (`ask`) o está prohibida (`deny`).
- **Proveedor (Provider)**: Empresa que desarrolla y aloja los modelos de IA (Anthropic, OpenAI, Google, OpenCode).
- **Subagente (Subagent)**: Agente especializado que se invoca mediante menciones `@` o de forma delegada por otro agente.
- **Temperatura (Temperature)**: Parámetro numérico entre 0.0 a 1.0 que regula la aleatoriedad y creatividad en las respuestas.

### Lecturas recomendadas y enlaces de referencia

- **Esquema de configuración de OpenCode**: Documentación detallada sobre la sintaxis completa admitida en archivos JSON y Markdown.
- **Guía de proveedores y modelos**: Catálogo actualizado de modelos admitidos, características de latencia y estructuras de precios.
- **Sistema de permisos y seguridad**: Manual de buenas prácticas para entornos corporativos y ejecución de comandos restringidos.
- **Integración con Model Context Protocol (MCP)**: Guía para conectar OpenCode con servidores de herramientas externas mediante el protocolo MCP.

---
**Versión del documento**: 2.0  
**Audiencia**: Desarrolladores, ingenieros de software y entusiastas de la automatización con IA.
