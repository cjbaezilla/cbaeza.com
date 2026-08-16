---
title: "Entendiendo las Skills de los Agentes de IA: Guía Completa y Práctica"
date: "11-03-2026"
excerpt: "Guía completa y exhaustiva para comprender, crear, configurar y optimizar Skills para agentes de IA en Claude Code, OpenAI Codex, GitHub Copilot y Claude.ai."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["Agentes de IA", "Skills", "Claude Code", "OpenAI Codex", "GitHub Copilot", "Claude.ai", "Productividad", "Desarrollo", "Prompt Engineering", "Automatización"]
coverImage: "/images/blog/skills_portada.png"
readTime: "40 min de lectura"
featured: false
---

Si has utilizado ChatGPT, Claude, Gemini o cualquier herramienta similar de inteligencia artificial, es muy probable que hayas experimentado un tipo particular de frustración: cada conversación comienza desde cero absoluto. Te encuentras escribiendo una y otra vez el mismo contexto, las mismas preferencias y las mismas explicaciones sobre cómo te gusta que se hagan las cosas, para luego tener que repetirlo todo en el siguiente chat y en el que viene después.

Esto no solo resulta molesto; representa una limitación fundamental que impide que la inteligencia artificial se convierta en una herramienta verdaderamente útil para el trabajo recurrente en el mundo real. Puedes pasar cinco minutos explicándole a una IA los estándares de código de tu empresa, solo para obtener resultados que no coinciden del todo con lo que buscas, y luego tienes que explicarlo nuevamente, tal vez de forma ligeramente diferente, esperando que esta vez la IA lo entienda.

Las **skills** (habilidades) resuelven este problema de raíz. Te permiten enseñarle a un agente de IA una sola vez, y ese agente recordará lo que le enseñaste para siempre, o al menos durante todo el tiempo que lo necesites. En lugar de repetirte en cada conversación, creas una skill que encapsula tu conocimiento, tus preferencias, tus flujos de trabajo y tus estándares. Luego, cada vez que el agente se encuentra con una tarea relevante, carga automáticamente tus directrices y las aplica sin que tengas que decir una sola palabra adicional.

Esta guía te acompaña en todo el recorrido necesario para pasar de "nunca he usado skills" a "tengo skills funcionando de manera confiable en mi flujo de trabajo diario". Comenzaremos con los fundamentos absolutos, asegurándonos de que comprendas con claridad qué son los agentes de IA y por qué las skills son tan importantes. Después pasaremos a ejemplos prácticos que puedes copiar y adaptar de inmediato. Exploraremos los detalles clave para escribir skills efectivas, revisaremos la configuración paso a paso en las principales plataformas, analizaremos consideraciones críticas de seguridad y cubriremos técnicas avanzadas para aprovechar al máximo esta potente capacidad.

El objetivo no es solo ayudarte a crear skills, sino enseñarte a capturar y codificar tu conocimiento de una manera que haga que los agentes de IA sean genuinamente útiles para el trabajo que realizas todos los días.

![Portada del Documento](/images/blog/ai-agent-skills-cover.jpg)

## Parte 1: Los fundamentos de los agentes de IA

### ¿Qué es realmente un agente de IA?

Para entender las skills, primero debes comprender qué diferencia a un agente de IA de los chatbots tradicionales que probablemente has estado utilizando. Esta distinción es mucho más relevante de lo que parece a simple vista, ya que cambia por completo lo que puedes esperar de la IA y la forma en que interactúas con ella.

Conoces los chatbots de IA: haces una pregunta y recibes una respuesta. Puedes pegar algo de contexto, obtener un texto y ahí termina la interacción. Cada conversación está completamente aislada de las demás. La IA no recuerda quién eres, en qué consiste tu trabajo, cómo prefieres hacer las cosas ni qué discutieron en sesiones anteriores, incluso si ocurrieron hace cinco minutos. Cada nuevo chat es un lienzo en blanco.

Este modelo funciona bien para preguntas puntuales y aisladas. Si necesitas saber la capital de Francia o requieres ayuda para redactar un correo rápido, el esquema de chatbot tradicional cumple su función a la perfección. Obtienes lo que necesitas, sigues adelante y no hay un costo real al empezar de cero en cada ocasión.

Sin embargo, aquí es donde el modelo tradicional muestra sus límites. En cuanto comienzas a utilizar la IA para tareas que van más allá de lo trivial, te topas con barreras evidentes. Supongamos que eres un desarrollador de software que trabaja en una base de código compleja: tal vez deseas que la IA te ayude a revisar pull requests respetando los estándares específicos de tu equipo. O quizás eres un redactor de contenidos que necesita borradores alineados con la voz y el estilo particular de tu publicación. O tal vez eres un investigador que aplica metodologías rigurosas que tomaría demasiado tiempo explicar en cada sesión.

Sin agentes ni skills, quedas atrapado en el ciclo interminable de explicar tu contexto, tus preferencias y tus requisitos en cada conversación. Y la realidad es aún más frustrante: incluso cuando explicas todo con sumo cuidado, los resultados siguen variando según cómo redactaste las instrucciones ese día, el estado del modelo y muchas otras variables fuera de tu control.

Un agente de IA es diferente en aspectos cruciales. En lugar de limitarse a responder preguntas, un agente puede ejecutar acciones reales en tu entorno digital:

- **Utilizar herramientas**: un agente puede ejecutar código, leer y escribir archivos, enviar mensajes a través de diversos canales, interactuar con APIs y realizar operaciones en tu entorno de desarrollo u otros sistemas conectados. Esto no es solo teórico: el agente ejecuta estas acciones directamente.

- **Recordar información entre conversaciones**: cuando le enseñas algo a un agente mediante skills, ese conocimiento perdura. No necesitas volver a explicar las convenciones de tu equipo ni tus preferencias personales cada vez que inicias una nueva sesión. El agente conserva y aplica ese conocimiento.

- **Gestionar tareas de múltiples pasos de forma autónoma**: en lugar de requerir que lo guíes en cada microdecisión, puedes delegarle un flujo de trabajo completo. El agente determina los pasos necesarios, los ejecuta en secuencia y regresa con los resultados. Tú defines el objetivo deseado y el agente encuentra el camino para alcanzarlo.

Piensa en esta analogía: un chatbot tradicional de IA es como un consultor externo al que llamas para pedir un consejo puntual. Le explicas tu situación, te da una recomendación y la relación termina ahí. Un agente de IA se parece mucho más a un colaborador de tu equipo al que puedes delegar trabajo. Lo incorporas (o configuras), lo capacitas (mediante skills e instrucciones) y luego le asignas tareas para que las ejecute. Recuerda lo aprendido, toma iniciativa en tu nombre y se adapta cada vez mejor a tus necesidades particulares con el paso del tiempo.

El salto de los chatbots a los agentes representa un cambio fundamental en la relación entre humanos e inteligencia artificial. En vez de ser una herramienta que utilizas de manera intermitente, un agente se convierte en un colaborador continuo que entiende tu contexto y trabaja con una autonomía creciente.

### ¿Qué problema resuelven las skills?

Hagamos esto tangible con un escenario cotidiano en el desarrollo de software.

Imagina que trabajas en un equipo con convenciones muy estrictas sobre cómo deben escribirse las consultas a bases de datos. Quizás tu equipo exige siempre consultas parametrizadas para evitar inyecciones SQL. Es posible que tengan reglas específicas de nomenclatura para tablas y columnas que difieren de los valores predeterminados. Tal vez aplican patrones concretos para el manejo de transacciones, registro de logs de consultas o gestión de conexiones según su arquitectura.

Sin skills, esto es lo que ocurre cada vez que necesitas ayuda de la IA con una base de datos:

Pegas el esquema de tu tabla. Explicas las convenciones de consulta de tu equipo. Indicas que la parametrización es obligatoria. Mencionas los estándares de nombres. Detallas cómo deben manejarse los errores. Pasas varios minutos redactando todo esto, o peor aún, olvidas mencionar algún detalle crítico y obtienes resultados que no cumplen con tus estándares.

Luego pasas a otra tarea. Horas más tarde, necesitas ayuda con otra consulta SQL. Abres una nueva conversación y te ves obligado a explicarlo todo nuevamente. La IA no recuerda las directrices de la sesión anterior. Estás de vuelta en el punto de partida.

Ahora multiplica este desgaste por cada tipo de tarea en la que te apoyas en la IA: revisiones de código, redacción de documentación, análisis de datos, redacción de correos o reportes técnicos. Cada área tiene sus propios estándares, sus propias convenciones y su propia forma de "hacer las cosas aquí". Y sin skills, pasas la vida explicándolo una y otra vez.

Las skills te permiten escribir estas instrucciones una sola vez. Creas una skill que capture los estándares de consultas SQL de tu equipo, otra para el estilo de documentación y otra para el proceso de revisión de código. A partir de ese momento, cada vez que el agente trabaje en algo relacionado, cargará automáticamente tus directrices y las aplicará fielmente. Cero repetición. Cero incertidumbre sobre si recordaste mencionar todos los detalles importantes.

Esto no solo ahorra una cantidad enorme de tiempo, sino que garantiza una consistencia total. Cuando dependes de explicar las cosas en cada sesión, los resultados fluctúan: algunos días eres más detallado, otros días estás apurado y omites pasos clave, o la IA interpreta las instrucciones de forma diferente según el contexto. Las skills eliminan esta variabilidad por completo. Una vez codificados tus estándares en una skill, se aplican de manera uniforme y predecible en cada ejecución.

### Las skills en lenguaje sencillo

En su esencia, las skills son notablemente sencillas. Una skill es un paquete estructurado que contiene todo lo que un agente de IA necesita para dominar un tipo específico de tarea. Este paquete incluye:

- **Instrucciones**: qué debe hacer el agente y cómo debe abordar la tarea. Esto abarca procedimientos paso a paso, criterios de decisión, estándares de calidad o comportamientos específicos que esperas observar.

- **Ejemplos**: demostraciones claras de cómo luce un trabajo bien hecho en tu contexto específico. Los ejemplos son extremadamente potentes porque transmiten matices que las instrucciones teóricas a menudo no logran capturar. Puedes mostrarle al agente exactamente el resultado esperado y también ejemplos de lo que debe evitar.

- **Scripts opcionales**: pequeños programas que ayudan a automatizar partes deterministas de la tarea. Son ideales para operaciones que deben ejecutarse con precisión matemática o idéntica en cada ocasión: cálculos, formateo estricto, transformaciones de datos o rutinas repetitivas.

- **Material de referencia**: documentación complementaria, guías de estilo, especificaciones de APIs, políticas internas o cualquier plantilla que brinde contexto profundo al agente durante la ejecución.

Al crear una skill, estás redactando el manual de procedimientos de tu agente de IA. En lugar de explicar las reglas de tu equipo cada vez que pides asistencia, las dejas por escrito en la skill. El agente consulta el manual, asimila tu contexto y aplica tus estándares de forma automática.

La gran ventaja de este enfoque es su escalabilidad. Puedes crear skills para cada una de las áreas en las que utilizas IA. Cada skill se enfoca en un dominio o flujo de trabajo específico. Cuando solicitas ayuda, la skill pertinente se activa automáticamente según lo que estés pidiendo. Obtienes experiencia especializada bajo demanda sin la sobrecarga de tener que explicar el contexto desde cero.

### ¿Para quién es esto?

Uno de los mayores mitos sobre las skills es que solo sirven para programadores. Nada más lejos de la realidad. Aunque el concepto nació en el ecosistema de herramientas para desarrolladores y funciona de maravilla con código, su utilidad es 100% universal.

Cualquier persona que se encuentre repitiendo las mismas instrucciones a una IA puede beneficiarse enormemente de las skills:

- **Redactores y creadores de contenido** que necesitan mantener un tono, una voz y un estilo editorial consistentes en cada publicación o campaña de marketing. Una skill almacena las directrices de marca y las aplica automáticamente en cada texto generado.

- **Investigadores y analistas** que siguen protocolos rigurosos y metodologías específicas en revisiones de literatura, análisis de mercado o síntesis científica. Una skill codifica dichos requisitos metodológicos para garantizar que cada entrega cumpla con los estándares académicos o corporativos.

- **Emprendedores y dueños de negocios** que gestionan atención al cliente, procesos de soporte, reembolsos y escalamiento de casos. Una skill estandariza la comunicación para que las respuestas asistidas por IA reflejen siempre los valores y políticas del negocio.

- **Equipos multidisciplinarios** que buscan uniformidad en sus flujos de trabajo. En lugar de que cada miembro capacite a la IA por su cuenta, el equipo comparte skills comunes que garantizan resultados consistentes sin importar quién interactúe con el agente.

- **Desarrolladores de software**, por supuesto, que desean que la IA respete los patrones arquitectónicos, convenciones de nombres, pruebas unitarias y flujos de trabajo de sus repositorios.

El concepto es universal. La implementación puede variar ligeramente entre plataformas, pero el principio subyacente se mantiene intacto: captura tu conocimiento una sola vez y aplícalo automáticamente siempre que sea relevante.

![Visión General de las Skills de Agentes de IA](/images/blog/ai-agent-skills-overview.jpg)

---

## Parte 2: Creando tu primera skill

En esta sección construiremos una skill completamente funcional desde cero. Explicaremos cada elemento en el camino para que obtengas un ejemplo listo para copiar, usar y adaptar a tus propias necesidades. Al finalizar este bloque, conocerás todos los componentes que integran una skill y comprenderás cómo encajan entre sí.

### Qué necesitas

Para crear y ejecutar skills, requieres una plataforma de IA que soporte este estándar. Diversas plataformas líderes ya lo han adoptado:

**Claude Code** — Es la herramienta de línea de comandos de Anthropic diseñada específicamente para desarrolladores. Si pasas la mayor parte del tiempo en la terminal, Claude Code se integra de forma natural con tu flujo de trabajo: escribe código, depura errores, revisa pull requests, refactoriza y ejecuta pruebas. Lo que hace a Claude Code especialmente potente es su integración nativa con skills, convirtiéndolas en el mecanismo principal para dotar al agente de contexto persistente.

**OpenAI Codex** — El agente de codificación de OpenAI adopta un enfoque orientado a la autonomía. Mientras que Claude Code actúa como un compañero interactivo en la terminal, Codex puede explorar repositorios completos, comprender arquitecturas complejas, modificar múltiples archivos en simultáneo y llevar a cabo tareas de gran envergadura con mínima supervisión. También soporta skills para definir cómo debe abordar cada tipo de trabajo.

**GitHub Copilot en VS Code** — El asistente de código más extendido del mundo integra soporte para skills en su interfaz de chat dentro de Visual Studio Code. Esto permite personalizar la asistencia más allá de la autocompletación básica, guiando a Copilot según los estándares de tu equipo sin abandonar tu editor preferido.

**Claude.ai (interfaz web)** — Si prefieres prescindir de la terminal o el editor de código, la plataforma web de Claude permite cargar skills personalizadas en formato ZIP. Es la opción ideal para experimentar con redacción, análisis de datos, finanzas o cualquier tarea no técnica sin configuraciones locales complejas.

La estructura de archivos de una skill es prácticamente idéntica en todas las plataformas. Una vez que dominas la estructura base, adaptarla a cualquier entorno resulta sumamente sencillo.

### La skill más simple posible

Un detalle sorprendente del sistema de skills es su mínima complejidad inicial: puedes crear una skill válida con tan solo **una carpeta y un único archivo markdown**. No requieres herramientas de compilación, configuraciones pesadas ni dependencias externas.

Esta simplicidad es deliberada para permitir que cualquier usuario capture su conocimiento sin barreras técnicas.

La estructura de carpetas mínima luce así:

```
my-first-skill/
└── SKILL.md
```

El nombre de la carpeta funciona como el identificador de la skill (en este caso, `my-first-skill`). Dentro de ella, el archivo debe llamarse obligatoriamente `SKILL.md` (con mayúsculas). Si utilizas otro nombre, la plataforma no lo reconocerá como una skill válida.

La carpeta puede albergar otros archivos complementarios (scripts o documentación de referencia), pero el núcleo indiscutible es siempre el archivo `SKILL.md`.

### El formato de SKILL.md

Todo archivo `SKILL.md` consta de dos secciones fundamentales:

**1. El Frontmatter YAML**

Ubicado en la parte superior del archivo, delimitado por dos líneas con tres guiones (`---`), el Frontmatter proporciona metadatos clave en formato YAML legible por humanos. El agente utiliza estos metadatos para saber qué hace la skill y bajo qué condiciones debe activarse. Es la tarjeta de presentación de tu skill.

Un Frontmatter básico luce de la siguiente manera:

```yaml
---
name: friendly-code-reviews
description: Realiza revisiones de código constructivas con un tono positivo y pedagógico. Usar al solicitar revisiones, críticas o retroalimentación sobre código fuente.
---
```

- El campo `name` define el identificador único (en minúsculas y con guiones).
- El campo `description` es el componente más importante: el agente lee esta descripción para evaluar si la petición del usuario coincide con el propósito de la skill.

**2. La sección de contenido**

Debajo del Frontmatter se escribe el cuerpo principal de la skill utilizando Markdown estándar. Aquí se detallan las instrucciones, principios, listas de verificación y ejemplos prácticos.

Veamos un ejemplo completo y listo para producción:

```yaml
---
name: friendly-code-reviews
description: Realiza revisiones de código constructivas con un tono positivo y pedagógico. Usar al solicitar revisiones, críticas o retroalimentación sobre código fuente.
---
# Skill de Revisión Amigable de Código

## Cuándo usar esta skill

Utiliza esta skill siempre que estés revisando el código de otra persona:
- Revisiones de pull requests
- Sesiones de pair programming  
- Solicitudes de retroalimentación sobre código
- Cualquier situación donde se evalúe la calidad del código

## Directrices

### Tono y Enfoque

- Comienza siempre destacando algo que el autor haya hecho bien
- Formula las sugerencias como preguntas o alternativas posibles, no como órdenes
- Explica el motivo ("el porqué") detrás de cada sugerencia
- Si una solución funciona pero puede optimizarse, reconoce primero que funciona

### Estructura de la Respuesta

1. **Un acierto**: Encuentra siempre un aspecto positivo que destacar
2. **Una sugerencia específica**: Selecciona la mejora más importante
3. **Una pregunta constructiva**: Pregunta sobre algún detalle de diseño o caso borde

### Ejemplos

**Correcto:**
> "Me gusta mucho cómo manejaste el caso de error aquí; es un detalle que muchos desarrolladores suelen pasar por alto. ¿Has considerado qué ocurre cuando la API responde con lentitud? Una alternativa interesante podría ser agregar un timeout con reintentos."

**Evitar:**
> "Esto está mal programado. Deberías usar X en lugar de esto."

## Aspectos a Evaluar

- Errores de lógica que puedan provocar fallos
- Manejo de excepciones y casos de error ausentes
- Oportunidades claras de simplificación
- Documentación y comentarios útiles para futuros mantenedores
- Vulnerabilidades de seguridad evidentes
- Posibles cuellos de botella en rendimiento
```

### Comprendiendo la estructura del ejemplo

Analicemos por qué este ejemplo es tan eficaz:

1. **Modelado directo de la conducta**: la skill no solo describe lo que quiere, sino que lo demuestra con ejemplos concretos de redacción adecuada e inadecuada.
2. **Instrucciones accionables**: en lugar de dar directivas ambiguas como "sé amable", establece pautas operativas precisas ("comienza destacando un acierto", "plantea sugerencias como preguntas").
3. **Enfoque quirúrgico**: no incluye digresiones teóricas sobre la historia de las revisiones de código ni párrafos de relleno. Contiene exactamente lo que el agente necesita saber para realizar la tarea con excelencia.

### Dónde ubicar esta carpeta

Una vez creada tu carpeta con el archivo `SKILL.md`, debes guardarla en la ubicación donde tu plataforma de IA la detecte.

La siguiente tabla resume las rutas estándar por plataforma:

| Plataforma | Ubicación de Skills de Proyecto | Ubicación de Skills Personales (Globales) |
| :--- | :--- | :--- |
| **Claude Code** | `.claude/skills/` | `~/.claude/skills/` |
| **OpenAI Codex** | `.agents/skills/` | `~/.agents/skills/` |
| **GitHub Copilot (VS Code)** | `.github/skills/` | `~/.copilot/skills/` |
| **Claude.ai (Web)** | Carga en archivo ZIP | Carga en Ajustes / Settings |

**Skills de Proyecto vs. Skills Personales**

- **Skills de Proyecto**: residen en la raíz del repositorio o carpeta de trabajo (`.claude/skills/`, `.agents/skills/`, `.github/skills/`). Aplican exclusivamente a ese proyecto en particular y son ideales para estándares de arquitectura, librerías específicas del proyecto o convenciones de equipo.
- **Skills Personales (Globales)**: residen en tu directorio de usuario principal (`~` en macOS/Linux o `C:\Users\TuUsuario\` en Windows). Están disponibles en todos tus proyectos y definen tus preferencias individuales de trabajo (por ejemplo, tu estilo preferido de redacción o tu metodología personal de depuración).

### Cómo se utilizan realmente las skills: Divulgación progresiva

Una duda lógica al trabajar con skills es: si tengo 20, 50 o 100 skills configuradas, ¿no saturará eso la ventana de contexto del agente, volviendo las respuestas lentas y costosas?

La respuesta es no, gracias a un mecanismo arquitectónico clave llamado **divulgación progresiva (progressive disclosure)**. El agente no carga todo el contenido de todas las skills simultáneamente, sino que opera en tres niveles progresivos:

```
+-------------------------------------------------------------+
| Nivel 1: Descubrimiento (Discovery)                         |
| El agente lee solo 'name' y 'description' del Frontmatter   |
| Ultraligero: milisegundos y consumo mínimo de tokens        |
+------------------------------+------------------------------+
                               |
                               v (Si la tarea coincide con la descripción)
+-------------------------------------------------------------+
| Nivel 2: Activación (Activation)                            |
| Carga el contenido completo del archivo SKILL.md específico |
| Aplica directrices, listas de verificación y ejemplos       |
+------------------------------+------------------------------+
                               |
                               v (Solo si la ejecución lo requiere)
+-------------------------------------------------------------+
| Nivel 3: Recursos (Resources)                               |
| Carga scripts/ y referencias/ bajo demanda puntual          |
+-------------------------------------------------------------+
```

1. **Nivel 1 - Descubrimiento (Discovery)**: al iniciar la sesión, el agente solo lee los campos `name` y `description` de todas las skills disponibles. Esto representa apenas unos cientos de palabras en total, ejecutándose en milisegundos sin costo perceptible de tokens.
2. **Nivel 2 - Activación (Activation)**: cuando solicitas una tarea que coincide con la descripción de una skill, el agente carga el archivo `SKILL.md` completo de esa skill específica y aplica sus instrucciones al contexto de trabajo.
3. **Nivel 3 - Recursos (Resources)**: si la skill hace referencia a scripts auxiliares o guías extensas en subcarpetas, estos archivos adicionales se leen únicamente si la tarea en curso lo requiere expresamente.

Este diseño en tres niveles permite que tu biblioteca de skills crezca indefinidamente manteniendo un rendimiento impecable.

![Biblioteca de Skills](/images/blog/ai-agent-skills-library.jpg)

---

## Parte 3: El archivo SKILL.md en profundidad

Habiendo visto los fundamentos, exploremos todas las opciones avanzadas disponibles para estructurar tus archivos `SKILL.md` y maximizar el control sobre el comportamiento de tus agentes.

### Opciones de Frontmatter

El esquema completo de propiedades disponibles en el Frontmatter YAML es el siguiente:

```yaml
---
name: nombre-de-la-skill          # Obligatorio: minúsculas con guiones
description: Descripción clara   # Obligatorio: qué hace Y cuándo usarla
argument-hint: "[archivo/pr]"     # Opcional: sugerencia de argumentos en comando slash
user-invokable: true              # Opcional: visibilidad en menús interactivos (por defecto: true)
disable-model_invocation: false   # Opcional: exigir invocación manual exclusiva (por defecto: false)
---
```

Analicemos cada parámetro:

- **`name`** (obligatorio): identificador de la skill. Debe escribirse en minúsculas, usando guiones en lugar de espacios, y coincidir exactamente con el nombre de la carpeta que lo contiene.
- **`description`** (obligatorio): el texto decisivo que evalúa el modelo para activar la skill. Debe responder tres preguntas esenciales: qué hace la skill, cuándo debe usarse y en qué contextos o tecnologías aplica.
- **`argument-hint`** (opcional): texto de ayuda que se muestra en la interfaz cuando el usuario invoca la skill mediante un comando slash (por ejemplo, `/review [ruta-del-archivo]`).
- **`user-invokable`** (opcional, booleano): determina si la skill aparece visible en menús interactivos y listas desplegables. Si se define en `false`, la skill sigue disponible para activación automática por el modelo, pero no satura los menús del usuario.
- **`disable-model_invocation`** (opcional, booleano): si se establece en `true`, impide que el agente active la skill de forma automática por coincidencia semántica, exigiendo que el usuario la invoque explícitamente mediante un comando manual. Muy útil para evitar conflictos entre skills con descripciones cercanas o para operaciones críticas.

### Cómo escribir excelentes descripciones

Dado que la descripción es la llave de activación de la skill, redactarla con precisión es vital. Si la descripción es ambigua, el agente no sabrá cuándo utilizarla.

**Plantilla recomendada para descripciones:**

> `[Qué hace la skill]. Usar cuando [situaciones concretas de activación]. Aplica a [contexto, lenguajes o tecnologías involucradas].`

**Comparativa práctica:**

- **Deficiente:** `"Ayuda con cosas de base de datos."` (Demasiado vaga; el agente no tiene criterios para activarla).
- **Deficiente:** `"Skill de revisión de código."` (No explica cuándo aplica ni qué enfoque adopta).
- **Excelente:** `"Escribe consultas SQL siguiendo las reglas de formato y estándares de seguridad del equipo. Usar al crear o editar consultas de base de datos, incluyendo sentencias SELECT, INSERT, UPDATE y DELETE. Aplica a bases de datos PostgreSQL y MySQL."`

### La sección de contenido en detalle

Para organizar el cuerpo del archivo `SKILL.md`, te recomendamos estructurarlo con encabezados claros:

1. **Cuándo usar esta skill**: refuerza y amplía las condiciones de activación mencionadas en el Frontmatter.
2. **Directrices principales**: las reglas y estándares fundamentales explicados de forma directa y sin ambigüedades.
3. **Estructura o pasos del proceso**: la secuencia ordenada que el agente debe seguir (Paso 1, Paso 2, Paso 3).
4. **Ejemplos positivos y negativos**: contrastar lo que se espera ("Correcto") con los errores comunes a evitar ("Evitar").
5. **Listas de verificación (Checklists)**: criterios técnicos puntuales que el agente debe validar antes de dar por terminada la tarea.

### Inclusión de scripts opcionales

Cuando una tarea requiere operaciones matemáticas complejas, transformaciones estrictas de datos o rutinas que no admiten variaciones estocásticas, puedes incluir scripts ejecutables dentro de una subcarpeta `scripts/`:

```
mi-skill-avanzada/
├── SKILL.md
└── scripts/
    ├── formateador.py
    └── validador-esquema.js
```

Dentro de `SKILL.md`, indicas al agente cómo y cuándo invocar el script:

> Para validar el archivo JSON resultante, ejecuta `python ./scripts/validador-esquema.py --input salida.json`. Si el script retorna un error, corrige la estructura antes de responder al usuario.

**Regla de oro:** utiliza scripts solo cuando sea estrictamente necesario para garantizar precisión o determinismo. Si una instrucción puede explicarse con claridad en lenguaje natural, prefiere siempre el texto en Markdown por transparencia y facilidad de mantenimiento.

### Inclusión de archivos de referencia

Si tu skill requiere manuales extensos, diccionarios de datos, especificaciones de APIs o plantillas de documentos que saturarían el archivo principal, puedes organizarlos en una subcarpeta `references/` o `templates/`:

```
mi-skill-avanzada/
├── SKILL.md
├── references/
│   ├── api-endpoints.md
│   └── guia-estilo-empresa.md
└── templates/
    └── reporte-incidente.md
```

El agente mantendrá `SKILL.md` como guía ligera y consultará los archivos de `references/` únicamente cuando la tarea lo amerite en el Nivel 3 de divulgación progresiva.

![Diagrama de Carga Progresiva de Recursos](/images/blog/ai-agent-skills-resources.jpg)

---

## Parte 4: Configuración de skills en tu plataforma

Revisemos paso a paso cómo instalar y utilizar skills en cada uno de los entornos principales.

### Claude Code (Anthropic)

Claude Code es la interfaz de línea de comandos de Anthropic para terminales de desarrollo.

**Paso 1: Crear la estructura de carpetas**

- Para una skill exclusiva de tu proyecto actual:
  ```bash
  mkdir -p .claude/skills
  ```
- Para una skill personal disponible en todos tus proyectos:
  ```bash
  mkdir -p ~/.claude/skills
  ```

**Paso 2: Copiar la carpeta de la skill**

Copia la carpeta que creaste dentro del directorio correspondiente:
```bash
cp -r friendly-code-reviews ~/.claude/skills/
```

**Paso 3: Verificación y uso**

Inicia Claude Code en tu terminal y formula una solicitud que coincida con la descripción:
> "¿Podrías revisar este pull request y darme tu opinión sobre los cambios?"

Claude Code detectará la coincidencia y activará automáticamente la skill `friendly-code-reviews`. También puedes invocarla directamente por su nombre:
> "Utiliza la skill friendly-code-reviews para evaluar este archivo."

### OpenAI Codex

OpenAI Codex está diseñado para operar con alta autonomía sobre bases de código.

**Paso 1: Crear la estructura de directorios**

- Para skills de proyecto:
  ```bash
  mkdir -p .agents/skills
  ```
- Para skills personales globales:
  ```bash
  mkdir -p ~/.agents/skills
  ```

**Paso 2: Copiar la skill**

```bash
cp -r friendly-code-reviews ~/.agents/skills/
```

**Paso 3: Configuración de plataforma con `openai.yaml` (Opcional)**

Codex permite añadir un archivo `openai.yaml` dentro de la carpeta de la skill para personalizar su visualización en la interfaz y declarar herramientas requeridas:

```yaml
interface:
  display_name: "Revisión Amigable de Código"
  short_description: "Revisiones constructivas orientadas al aprendizaje"
  brand_color: "#3B82F6"

policy:
  allow_implicit_invocation: true

dependencies:
  tools:
    - type: "mcp"
      value: "github"
```

### GitHub Copilot en VS Code

Para quienes trabajan en Visual Studio Code, Copilot integra soporte de skills en su panel de chat.

**Paso 1: Ubicación de las carpetas**

Copilot reconoce varias rutas estándar dentro de tu espacio de trabajo:
- `.github/skills/` (Ruta estándar recomendada)
- `.claude/skills/` y `.agents/skills/` (Compatibilidad cruzada)
- `~/.copilot/skills/` (Skills personales globales)

Crea la carpeta en tu repositorio:
```bash
mkdir -p .github/skills
```

**Paso 2: Instalar la skill**

Copia la carpeta de tu skill en `.github/skills/`.

**Paso 3: Ejecución en Copilot Chat**

1. Abre el panel de **Copilot Chat** en VS Code (`Ctrl+Alt+I` o `Cmd+Alt+I`).
2. Escribe `/` para desplegar la lista de comandos y skills disponibles.
3. Selecciona tu skill e ingresa el contexto deseado (por ejemplo, `/friendly-code-reviews revisa el archivo AuthService.ts`).

### Claude.ai (Interfaz Web)

Si utilizas Claude a través del navegador:

1. Ve a **Settings** (Ajustes) haciendo clic en tu perfil.
2. Ingresa a la sección **Skills**.
3. Comprime la carpeta de tu skill en un archivo `.zip` (que contenga `SKILL.md` en su raíz) y cárgalo directamente.
4. A partir de ese momento, la skill estará disponible en todas tus conversaciones web y se activará automáticamente cuando la conversación lo requiera.

---

## Parte 5: Cómo hacer que tus skills funcionen de forma óptima

Escribir un archivo `SKILL.md` es sencillo; lograr que funcione con máxima precisión y confiabilidad en el día a día requiere adoptar buenas prácticas de ingeniería.

### Las 5 Reglas de Oro

1. **Mantén cada skill enfocada en un único propósito**: una skill debe hacer una sola cosa y hacerla de manera sobresaliente. Es mucho mejor tener tres skills independientes (`revision-seguridad`, `formato-consultas-sql`, `redaccion-pruebas`) que una sola skill gigantesca que intente abarcar todo.
2. **Redacta descripciones nítidas y detalladas**: el agente decide la activación basándose en la descripción. Especifica claramente el qué, el cuándo y las tecnologías aplicables.
3. **Combina siempre instrucciones con ejemplos**: las instrucciones transmiten principios teóricos; los ejemplos muestran la aplicación práctica exacta. Incluye siempre ejemplos de lo que esperas y de lo que debe evitarse.
4. **Usa scripts solo cuando aporten valor real**: no compliques tus skills con código innecesario. Si una directiva en texto claro basta, prefiere el texto.
5. **Prueba y valida tus skills**: pon a prueba la skill con peticiones que deban activarla, con peticiones que NO deban activarla y con casos límite para asegurar un comportamiento robusto.

### Problemas comunes y cómo resolverlos

| Síntoma | Causa Probable | Solución |
| :--- | :--- | :--- |
| **La skill nunca se activa sola** | La descripción en el Frontmatter no coincide semánticamente con las consultas del usuario, o el nombre de la carpeta no coincide con el campo `name`. | Ajusta la descripción añadiendo frases como "Usar cuando...". Verifica que el nombre de la carpeta y el campo `name` sean idénticos en minúsculas. |
| **La skill se activa pero no sigue las reglas** | Las instrucciones son ambiguas o los ejemplos incluidos contradicen las directrices escritas. | Añade ejemplos más precisos, elimina contradicciones y estructura las reglas en pasos secuenciales numerados. |
| **Varias skills se activan al mismo tiempo** | Las descripciones de dos o más skills se solapan en su alcance. | Diferencia con claridad los disparadores en las descripciones o utiliza `disable-model_invocation: true` en una de ellas para requerir activación manual. |
| **Comportamiento inconsistente entre sesiones** | El contexto previo de la conversación está sesgando las respuestas del modelo. | Prueba la skill en una conversación limpia para aislar variables y refina las directrices eliminando ambigüedades. |

---

## Parte 6: Ejemplos y casos de uso del mundo real

Para inspirar tu propia biblioteca, revisemos ejemplos completos adaptables a distintos perfiles profesionales.

### Para Equipos de Desarrollo de Software

#### 1. Generador de Descripciones de Pull Requests

Estandariza cómo se documentan los cambios antes de fusionar código:

```yaml
---
name: pr-description-generator
description: Genera descripciones estructuradas y detalladas para Pull Requests siguiendo las convenciones del equipo. Usar al preparar, redactar o actualizar la descripción de un PR.
---
# Generador de Descripciones de PR

## Estructura Requerida

Genera siempre la descripción utilizando exactamente esta plantilla:

```markdown
## Resumen
[Explicación concisa de qué cambios se realizaron y cuál es el motivo de negocio o técnico]

## Tipo de Cambio
- [ ] Corrección de error (Bug fix)
- [ ] Nueva funcionalidad (Feature)
- [ ] Refactorización sin cambios funcionales
- [ ] Cambio que rompe compatibilidad (Breaking change)

## Pruebas Realizadas
[Describe las pruebas unitarias, de integración o manuales ejecutadas, incluyendo comandos]

## Lista de Verificación
- [ ] Pruebas agregadas o actualizadas
- [ ] Documentación interna actualizada
- [ ] Sin advertencias de linter ni errores de compilación
- [ ] Auto-revisión de código completada

## Capturas de Pantalla (si aplica)
[Antes / Después en cambios visuales]

## Tareas Relacionadas
Resuelve #[número de issue]
```
```

#### 2. Asistente de Flujo de Depuración (Debugging Workflow)

Guía al agente para que no salte a conclusiones precipitadas durante incidentes:

- Hace preguntas diagnósticas clave: ¿cuál es el mensaje de error exacto?, ¿cuándo comenzó?, ¿qué despliegues recientes ocurrieron?
- Exige recopilar métricas, logs y trazas de pila antes de proponer cambios.
- Aplica la técnica de los "5 Porqués" para identificar la causa raíz.
- Diseña un plan de mitigación inmediato y una solución definitiva a largo plazo con pruebas de regresión.

#### 3. Generador de Mensajes de Commit Convencionales

Garantiza que el historial de Git sea limpio y apto para versionado semántico automatizado (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`).

---

### Para Equipos de Marketing y Contenido

#### 1. Guía de Voz y Tono de Marca

Asegura que todos los textos mantengan una identidad coherente sin importar quién interactúe con la IA:

- Define la personalidad de la marca: cercana, rigurosa, pedagógica y libre de tecnicismos pretenciosos.
- Lista palabras recomendadas y términos prohibidos o en desuso.
- Modula el tono según el formato: conciso y directo para redes sociales; profundo, detallado y reflexivo para artículos de blog.

#### 2. Optimización SEO y Redacción Web

- Aplica la regla de un solo encabezado `H1` por página con jerarquía estricta `H2` y `H3`.
- Estructura metadescripciones atractivas de entre 140 y 155 caracteres con llamado a la acción.
- Incorpora directrices de enlazado interno estratégico y textos alternativos descriptivos para imágenes.

---

### Para Equipos de Soporte y Atención al Cliente

#### 1. Clasificación y Triaje de Tickets

- Clasifica solicitudes entrantes por categoría (Falla crítica, Consulta técnica, Facturación, Sugerencia).
- Calcula la prioridad multiplicando Impacto x Urgencia para asignar SLAs adecuados.
- Identifica cuándo una consulta debe responderse de inmediato con base de conocimiento o escalarse a ingeniería.

#### 2. Plantillas de Respuesta Empática

- Directrices para responder con calma y empatía ante clientes insatisfechos.
- Límites claros sobre compensaciones y reembolsos autorizados.
- Pautas de cumplimiento legal sobre qué información técnica puede compartirse externamente.

---

## Parte 7: Cómo se relacionan las skills con otros conceptos

En el ecosistema de la inteligencia artificial moderna existen varios términos que suelen confundirse. Comprender la función de cada uno te permitirá diseñar arquitecturas robustas combinando las herramientas correctas.

### Skills vs. MCP (Model Context Protocol)

MCP (Model Context Protocol) es un protocolo estándar para conectar a los agentes con herramientas y fuentes de datos del mundo exterior (bases de datos, APIs de GitHub o Jira, sistemas de archivos locales).

- **MCP representa las "Manos" del agente**: le otorga la capacidad física de conectarse a un servidor PostgreSQL, leer una tabla o crear un issue en GitHub.
- **Las Skills representan el "Cerebro" del agente**: le enseñan cómo analizar esos datos, qué estándares de seguridad aplicar y cómo estructurar las respuestas según las reglas de tu organización.

| Característica | MCP (Model Context Protocol) | Skills |
| :--- | :--- | :--- |
| **Propósito principal** | Conectividad con sistemas externos | Conocimiento, metodología y estándares |
| **Qué suministra** | Herramientas ejecutables y conexiones | Instrucciones, directrices y ejemplos |
| **Analogía funcional** | Las manos (capacidad de actuar) | El cerebro (saber cómo actuar) |
| **Ejemplo típico** | Conector a base de datos PostgreSQL | Directrices de optimización de consultas SQL |

Ambos trabajan en conjunto: el agente usa MCP para consultar la base de datos y utiliza una Skill para auditar y formatear los resultados con precisión profesional.

---

### Skills vs. Function Calling, System Prompts y Prompt Templates

- **Function Calling (Llamada a Funciones)**: capacidad del modelo para emitir parámetros en formato JSON estructurado que ejecutan una función programada específica. Las skills pueden instruir al agente sobre cuándo invocar ciertas funciones, pero la skill aporta el contexto global y las reglas de negocio.
- **System Prompts (Prompts del Sistema)**: directivas globales que definen la personalidad base y el rol general del agente para todas las sesiones. Las skills son modulares y se activan solo para tareas específicas dentro de ese marco general.
- **Prompt Templates (Plantillas de Prompts)**: textos con variables para rellenar en un solo uso. Una skill es un cuerpo vivo de conocimiento que guía al agente a lo largo de interacciones complejas de múltiples pasos.

```
+-------------------------------------------------------------+
| System Prompt: Define la identidad global del agente        |
| "Eres un ingeniero de software senior enfocado en calidad"  |
+------------------------------+------------------------------+
                               |
+------------------------------v------------------------------+
| Skills: Guías especializadas por dominio de trabajo         |
| [Skill: SQL Standards] [Skill: PR Review] [Skill: Security] |
+------------------------------+------------------------------+
                               |
+------------------------------v------------------------------+
| MCP / Function Calling: Conectividad y ejecución técnica    |
| [API GitHub] [Base de Datos PostgreSQL] [Sistema Archivos]   |
+-------------------------------------------------------------+
```

---

## Parte 8: Consideraciones de seguridad

Una skill modifica la forma en que un agente razona y actúa en tu entorno digital. Por esta razón, la seguridad debe ser una prioridad desde el primer día.

### Trata las skills como código fuente

Una skill maliciosa o descuidada puede instruir al agente a ejecutar acciones destructivas en tu sistema de archivos, realizar llamadas a endpoints no autorizados o exponer datos sensibles.

**Reglas de seguridad esenciales:**

1. **Audita minuciosamente las skills de terceros**: antes de instalar una skill descargada de internet, lee el archivo `SKILL.md` completo y revisa cada línea de cualquier script en `scripts/`.
2. **Nunca almacenes secretos ni credenciales en las skills**: jamás escribas tokens de API, contraseñas o claves privadas dentro de un archivo `SKILL.md` o script auxiliar. Utiliza siempre variables de entorno gestionadas por tu sistema operativo (`process.env.API_KEY`).
3. **Aplica el principio de mínimo privilegio**: otorga a tus agentes acceso únicamente a las carpetas y herramientas estrictamente necesarias para cumplir su labor.
4. **Cuidado con el alcance (Scope)**: recuerda que una skill instalada en un repositorio compartido afectará a todos los colaboradores del proyecto. Asegúrate de que las skills compartidas hayan pasado por revisión en un Pull Request.

---

## Parte 9: Técnicas avanzadas y optimización

Una vez dominados los aspectos básicos, puedes implementar técnicas avanzadas para elevar el nivel de tu entorno.

### Control de versiones para tus skills

Dado que las skills son simples archivos de texto dentro de carpetas, puedes versionarlas con Git junto a tu código fuente. Esto permite auditar cambios históricos, revertir ajustes que no funcionaron como esperabas y colaborar en equipo mediante revisiones de código en Pull Requests.

### Composabilidad de skills

Los agentes modernos son capaces de activar múltiples skills de manera coordinada para resolver un problema complejo. Si cuentas con una skill de `analisis-estadistico` y otra de `reportes-ejecutivos`, al solicitar "analiza estos datos de ventas y redacta un informe para gerencia", el agente encadenará ambas habilidades de forma transparente.

### Optimización y eficiencia de tokens

Aprovecha al máximo la divulgación progresiva:
- Mantén las descripciones del Frontmatter concisas pero precisas.
- Traslada guías extensas a archivos en `references/` para que solo se lean cuando sea indispensable.
- Evita redundancias innecesarias en el texto de las instrucciones.

---

## Parte 10: Primeros pasos y siguientes etapas

Pasa de la teoría a la práctica siguiendo este plan de adopción progresiva:

### Tu primera hora: Crea tu primera skill

1. **Identifica una tarea repetitiva**: elige algo que siempre tengas que explicarle a la IA (por ejemplo, el formato de tus notas de reunión o el estilo de tus comentarios de código).
2. **Crea la carpeta y el archivo `SKILL.md`**:
   ```yaml
   ---
   name: mis-notas-diarias
   description: Formatea las notas de la reunión diaria en tres bloques claros. Usar al organizar apuntes del standup diario.
   ---
   # Formato de Standup Diario
   - Qué logré ayer:
   - Qué haré hoy:
   - Bloqueos o impedimentos:
   ```
3. **Instálala en tu entorno local** y realiza una prueba directa.

### Tu primera semana: Construye tu catálogo base

- Agrega 2 o 3 skills adicionales para cubrir tus tareas más frecuentes.
- Explora repositorios públicos de la comunidad (como los repositorios oficiales de Anthropic, OpenAI o colecciones en GitHub) para estudiar cómo diseñan sus skills otros profesionales.

### Tu primer mes: Estandariza con tu equipo

- Organiza tus skills por dominios o proyectos.
- Integra las skills al repositorio principal de tu empresa para que todo el equipo trabaje con las mismas directrices de calidad.
- Itera y pule las instrucciones basándote en la experiencia del uso diario.

---

## Referencia rápida

Guarda esta sección para consultarla rápidamente cada vez que vayas a crear una nueva skill.

### Plantilla Base de `SKILL.md`

```yaml
---
name: nombre-de-tu-skill
description: Explica qué hace la skill y cuándo debe usarse de forma específica.
---

# Título de la Skill

## Cuándo usar esta skill

[Detalla los casos de activación y escenarios de uso]

## Directrices Principales

[Instrucciones claras, estructuradas y secuenciales]

## Ejemplos

### Correcto
[Muestra un ejemplo concreto del resultado esperado]

### Evitar
[Muestra un ejemplo de lo que NO se debe hacer]

## Lista de Verificación
- [ ] Criterio 1
- [ ] Criterio 2
```

### Rutas de Instalación por Plataforma

| Plataforma | Skills de Proyecto | Skills Personales (Globales) |
| :--- | :--- | :--- |
| **Claude Code** | `.claude/skills/` | `~/.claude/skills/` |
| **OpenAI Codex** | `.agents/skills/` | `~/.agents/skills/` |
| **GitHub Copilot** | `.github/skills/` | `~/.copilot/skills/` |
| **Claude.ai** | Carga en ZIP vía Ajustes | Carga en ZIP vía Ajustes |

### 10 Puntos Clave para Recordar

1. Las skills te permiten enseñarle a un agente una sola vez y recordarlo para siempre.
2. El campo `description` es el elemento más crítico: controla cuándo se activa la skill.
3. Mantén cada skill enfocada en una sola responsabilidad.
4. Incluye siempre ejemplos prácticos, no solo reglas teóricas.
5. Prueba siempre las condiciones de activación y los casos límite de tus skills.
6. La divulgación progresiva garantiza que el consumo de tokens y contexto se mantenga bajo y eficiente.
7. Al ser un estándar basado en Markdown, las skills son altamente portables entre diferentes plataformas.
8. Divide flujos de trabajo extensos en múltiples skills modulares y componibles.
9. Nunca almacenes secretos, contraseñas ni claves de API en archivos de skills.
10. Itera y perfecciona tus skills de manera continua basándote en su uso real cotidiano.

---

*Esta guía fue diseñada para ayudarte a dominar las skills de agentes de IA y transformar radicalmente tu productividad. El ecosistema evoluciona con rapidez: experimenta, construye tu propia biblioteca y comparte tus aprendizajes. Cada skill que creas es un paso adelante hacia una colaboración mucho más fluida, inteligente y personalizada entre humanos y tecnología.*
