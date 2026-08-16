---
title: "El Manual Completo de las Propuestas de Mejora de Ethereum (EIPs y ERCs)"
date: "16-03-2026"
excerpt: "Guía exhaustiva sobre el ecosistema de las Ethereum Improvement Proposals (EIPs) y estándares ERC: gobernanza técnica, ciclo de vida, desarrollo y casos emblemáticos."
author: "Carlos Baeza Negroni"
categories: ["Ethereum", "Tutoriales"]
tags: ["Ethereum", "EIP", "ERC", "Smart Contracts", "Gobernanza", "EVM", "ERC-20", "ERC-721", "ERC-4337", "EIP-1559", "Layer 2", "Desarrollo Web3"]
coverImage: "/images/blog/eiperc_cover.png"
readTime: "45 min de lectura"
featured: false
---

Las Propuestas de Mejora de Ethereum (EIPs, por sus siglas en inglés) constituyen la columna vertebral de la evolución de Ethereum como protocolo. Ya seas un desarrollador que construye contratos inteligentes, un investigador que explora mecanismos de consenso o simplemente un curioso sobre cómo una blockchain descentralizada toma decisiones técnicas, comprender las EIPs es fundamental.

Esta guía recorre cada aspecto central del ecosistema de las EIPs: qué son, cómo se crean, quién decide su destino y por qué algunas triunfan mientras otras quedan en el camino. Encontrarás explicaciones claras organizadas desde conceptos introductorios hasta temas avanzados.

Considera esto como tu compañero práctico para navegar la gobernanza técnica de Ethereum: no solo como una referencia documental, sino como una ventana para entender cómo se toman las decisiones y de qué manera puedes participar en este proceso.

![Figura 1: Propuestas de Mejora de Ethereum - El Manual Completo](/images/blog/eip-handbook-1.jpg)

## 1. Fundamentos

Antes de profundizar en los procesos y la gobernanza, es importante entender qué son realmente las EIPs y cómo encajan dentro del ecosistema técnico de Ethereum.

### ¿Qué es una EIP?

Una EIP (Ethereum Improvement Proposal) es un documento formal que describe una propuesta de cambio, mejora o nueva funcionalidad para el protocolo de Ethereum. Imagínala como el plano arquitectónico mediante el cual evoluciona la red. Cada modificación al protocolo base de Ethereum (ya sea un cambio en la forma en que funcionan las transacciones, un nuevo opcode disponible para contratos inteligentes o una vía de estándares que defina cómo deben interactuar las aplicaciones) comienza como una EIP.

El proceso de las EIPs existe para garantizar que cualquier modificación a la blockchain de contratos inteligentes más activa del mundo sea revisada minuciosamente, debatida y documentada antes de ser implementada. No se trata únicamente de calidad técnica: también busca mantener el consenso comunitario y asegurar que la naturaleza descentralizada de Ethereum se preserve a medida que el protocolo avanza. Cualquier persona puede presentar una EIP, lo que refleja la filosofía abierta y sin permisos de Ethereum. Las propuestas atraviesan un proceso estructurado de revisión donde la comunidad puede refinarlas, cuestionarlas o rechazarlas antes de que pasen a formar parte del protocolo.

### ¿Qué es una ERC?

Una ERC (Ethereum Request for Comment) es un tipo específico de EIP que define un estándar o convención para el ecosistema de Ethereum. Si bien todas las ERCs son técnicamente EIPs (se numeran dentro de la misma secuencia), no todas las EIPs son ERCs. La denominación ERC se reserva para aquellos estándares que se espera que implementen los desarrolladores de aplicaciones, proveedores de billeteras y creadores de herramientas del ecosistema.

El nombre "Request for Comment" fue tomado prestado del proceso de RFCs de Internet, el cual ha guiado la evolución de los protocolos de red durante décadas. Esta elección de nombre subraya la ambición de Ethereum de construir un ecosistema sólido, guiado por estándares abiertos y colaborativos, tal como ocurrió en los inicios de Internet.

### ¿Cuál es la diferencia entre una EIP y una ERC?

La distinción es clara una vez que se comprenden las categorías: las ERCs son un subconjunto de las EIPs específicamente designadas para estándares a nivel de aplicación. Cuando alguien crea un nuevo estándar de tokens, una nueva forma de interactuar con contratos inteligentes o una convención para el comportamiento de aplicaciones descentralizadas, presenta una ERC. Estas son las propuestas que afectan más directamente a los desarrolladores que construyen sobre Ethereum.

Otros tipos de EIPs cumplen propósitos distintos. Las Core EIPs proponen cambios fundamentales en el funcionamiento del protocolo base de Ethereum, tales como modificaciones en los mecanismos de consenso o en la EVM (Ethereum Virtual Machine). Las Networking EIPs abordan la comunicación entre los nodos de la red. Las Interface EIPs tratan sobre la interacción entre aplicaciones, usuarios y la blockchain. Las Meta EIPs describen procesos organizativos en torno al propio Ethereum, mientras que las Informational EIPs ofrecen orientación técnica sin proponer un cambio vinculante en el código.

La diferencia práctica radica en que las ERCs requieren una adopción más amplia en el ecosistema para ser útiles. Un estándar de tokens solo tiene sentido si las billeteras lo reconocen, los exchanges lo admiten y las aplicaciones descentralizadas pueden interactuar con los tokens que siguen dicha especificación. Esto genera una curva de adopción diferente a la de los cambios del protocolo central, los cuales son implementados por los equipos de clientes y afectan automáticamente a todos los participantes de la red.

### EIP-1 y la Plantilla de EIP

Toda EIP formal se apoya en una base común: la EIP-1, el documento fundacional que define el proceso completo de las EIPs. Esta metapropuesta detalla exactamente cómo deben redactarse, enviarse, revisarse y, finalmente, aceptarse las EIPs dentro del protocolo de Ethereum. Considera a la EIP-1 como el reglamento oficial que indica las reglas del juego para proponer mejoras en la red.

Cuando estás listo para enviar una EIP, no comienzas desde una página en blanco. La plantilla oficial de EIP proporciona una estructura estandarizada que cada propuesta debe seguir. Esta plantilla incluye secciones específicas: un preámbulo con metadatos (número de EIP, título, autor, estado, etc.), un resumen breve (abstract) que sintetiza la propuesta en pocas oraciones, una sección de motivación que explica por qué se necesita el cambio, una especificación técnica detallada y, por último, una justificación (rationale) que argumenta por qué se eligió ese enfoque frente a otras alternativas.

Esta plantilla no es simple burocracia: asegura que cada EIP contenga la información indispensable para que la comunidad pueda evaluarla de forma rigurosa. Sin esta estandarización, comparar propuestas o evaluar sus méritos técnicos sería caótico. El formato también utiliza las palabras clave del estándar RFC 2119 (como "MUST", "SHOULD", "MAY") para definir los requerimientos con absoluta precisión, eliminando ambigüedades en las especificaciones técnicas.

### Categorías y Tipos de EIPs

Las EIPs se organizan en varias categorías bien diferenciadas, cada una orientada a un propósito particular dentro del ecosistema de Ethereum. Conocer estas categorías te ayuda a identificar rápidamente ante qué tipo de propuesta estás y cuáles son sus implicaciones.

- **Core EIPs**: Son las propuestas de mayor impacto que afectan el funcionamiento fundamental de Ethereum. Involucran cambios en el mecanismo de consenso, modificaciones en la Máquina Virtual de Ethereum (EVM) o ajustes en la producción y validación de bloques. Las Core EIPs requieren el consenso más amplio posible porque impactan a cada participante de la red, pudiendo transformar la operación base de la blockchain.
- **Standards Track EIPs (ERCs)**: Son aquellas con las que la mayoría de los desarrolladores interactúa a diario. Establecen convenciones y estándares aplicables por el software del ecosistema, desde el funcionamiento de los tokens hasta la interacción de las billeteras con los contratos inteligentes. Cuando escuchas hablar de "ERC-20" o "ERC-721", estás ante propuestas de la vía de estándares que alcanzaron el estado final.
- **Networking EIPs**: Gestionan la comunicación entre los nodos de Ethereum. Estas propuestas modifican la capa del protocolo de red, influyendo en aspectos como la propagación de transacciones o el descubrimiento y conexión entre pares.
- **Interface EIPs**: Tratan sobre las formas en que las aplicaciones externas y los usuarios interactúan con Ethereum. Esto incluye cambios en la API JSON-RPC (la vía primordial de comunicación con los nodos) o en otros estándares de interacción cliente-servidor.
- **Meta EIPs**: Describen procesos organizativos y metodologías alrededor de Ethereum en lugar de cambios técnicos en el protocolo. Por ejemplo, la EIP-3675, que definió "The Merge", es una Meta EIP: documentó todo el proceso de transición de Proof-of-Work a Proof-of-Stake. Son herramientas fundamentales para coordinar actualizaciones complejas de múltiples fases.
- **Informational EIPs**: Brindan directrices, recomendaciones e información general sin proponer una modificación obligatoria. Pueden documentar fundamentos de diseño, consideraciones de seguridad o buenas prácticas. No requieren la misma ruta de implementación que los otros tipos de EIPs.

### EIPs y las Actualizaciones de Red

Uno de los conceptos más importantes es entender cómo se conectan las EIPs individuales con las actualizaciones globales de la red (frecuentemente llamadas "Hard Forks"). Ethereum no implementa EIPs de forma aislada una por una; en su lugar, agrupa múltiples EIPs en actualizaciones coordinadas que se activan simultáneamente en toda la red.

Por ejemplo, la actualización London incluyó no solo la EIP-1559 (el cambio en el mercado de comisiones), sino también varias otras EIPs enfocadas en optimizaciones diversas. De manera similar, la actualización Dencun, que introdujo proto-danksharding, integró múltiples propuestas de manera conjunta. Este empaquetamiento permite realizar pruebas y despliegues coordinados, asegurando que todos los nodos y clientes estén listos al mismo tiempo.

Esta relación opera en dos direcciones: las EIPs proponen cambios, y las actualizaciones de red brindan el vehículo para activar esos cambios en la red principal (Mainnet). Cuando una EIP alcanza el estado "Final", significa que fue aceptada formalmente, pero su activación real en Mainnet ocurre cuando se despliega la actualización de red que la contiene. Esto genera una línea clara de trabajo: las ideas se convierten en EIPs, las EIPs se implementan y prueban, y las EIPs exitosas se agrupan en actualizaciones de red que se entregan a todo el ecosistema.

Esta sección cubre los conceptos centrales: la distinción entre EIPs y ERCs, el papel de la EIP-1 como documento fundacional, las diferentes categorías de propuestas y la manera en que se relacionan con las actualizaciones de red.

![Figura 2: Fundamentos de EIP - Conceptos Clave y Categorías](/images/blog/eip-handbook-2.jpg)

---

## 2. El Proceso de Propuesta

Una vez claros los fundamentos, la siguiente pregunta obligada es: ¿cómo se transforma una idea en una EIP formal?

Esta sección recorre el ciclo de vida completo, desde la chispa inicial hasta la implementación final. Veremos quién puede presentar una EIP (la respuesta suele sorprender, ya que no está reservado a los desarrolladores core), qué secciones son obligatorias y qué distingue a una propuesta exitosa de una que pasa desapercibida.

### ¿Quién puede enviar una EIP?

Uno de los aspectos más destacados del modelo de gobernanza de Ethereum es su apertura. Cualquier persona puede enviar una EIP: no necesitas trabajar para la Fundación Ethereum, no requieres ser un desarrollador core ni contar con credenciales especiales. Este enfoque sin permisos para proponer mejoras es un pilar de la filosofía descentralizada de la red.

Ahora bien, lograr que una EIP sea aceptada e implementada exige mucho más que simplemente subir un documento. Tendrás que defender tu propuesta en debates abiertos, responder inquietudes de la comunidad y de los implementadores de clientes, y construir consenso en torno a tu enfoque. El rol de "EIP Champion" (defensor o impulsor de la EIP) se lo gana quien realiza este esfuerzo continuo, independientemente de sus antecedentes.

### ¿Cuál es el rol de un EIP Champion?

El término "EIP Champion" describe a la persona que asume la responsabilidad de guiar y empujar una propuesta a través de todas las fases del proceso de EIP. No es un cargo formal ni un nombramiento: es un papel que se asume mediante el compromiso constante requerido para convertir una idea en realidad.

Un champion hace mucho más que redactar el borrador inicial. Es quien presenta la idea ante la comunidad, responde a las críticas, ajusta la especificación técnica con base en el feedback, entabla comunicación con los desarrolladores de clientes, defiende la propuesta durante las reuniones de All Core Devs y mantiene el impulso durante los períodos de calma. Muchas EIPs excelentes han quedado en el olvido simplemente porque su autor original no pudo sostener ese nivel de dedicación.

¿Qué define el éxito de un champion? La perseverancia es vital: el proceso de EIP avanza a su propio ritmo y las propuestas pueden permanecer meses o incluso años en distintas etapas. Se requiere paciencia ante la crítica técnica y la humildad para reconocer cuándo una idea inicial necesita modificaciones de fondo. La solvencia técnica es clave, pero también lo es la habilidad de comunicarse eficazmente con diversos públicos: investigadores, desarrolladores core, creadores de aplicaciones y la comunidad general aportan perspectivas muy diversas.

La buena noticia es que no tienes por qué hacerlo solo. Los champions suelen armar pequeños grupos de trabajo en torno a sus propuestas, donde otros colaboradores aportan experiencia técnica, documentación o difusión. Las EIPs más exitosas se perciben como esfuerzos colectivos genuinos y no como agendas personales aisladas.

### ¿Cómo se propone una EIP?

El proceso formal se desarrolla en GitHub. Clonas el repositorio oficial de EIPs, creas un nuevo archivo siguiendo la plantilla estándar y lo envías mediante un Pull Request (PR). Sin embargo, el proceso informal suele arrancar mucho antes: en el foro de Ethereum Magicians, en canales de Discord o en eventos comunitarios. Las mejores EIPs suelen acumular meses de debates previos antes de que se abra el PR formal.

Cuando envías tu PR, los editores de EIPs lo revisarán para comprobar que cumpla con el formato adecuado, esté completo y posea solidez técnica básica. Su rol no es juzgar el mérito o conveniencia de tu propuesta (esa es labor de la comunidad), sino verificar que satisfaga los requisitos estructurales estipulados en la EIP-1. Una vez aceptado por los editores, se le asigna un número oficial y entra al sistema en estado de borrador (Draft).

### El flujo de trabajo en GitHub: De la idea al Pull Request

El envío formal sigue un flujo específico que garantiza el seguimiento y la revisión adecuada de cada propuesta. Comprender este procedimiento evita errores comunes en los primeros envíos.

1. **Trabajar con el repositorio oficial**: El repositorio reside en `github.com/ethereum/EIPs`. Debes clonarlo o hacer un fork para crear tu propuesta. Asegúrate de sincronizar los últimos cambios antes de comenzar.
2. **Crear el archivo de la EIP**: El repositorio contiene directorios organizados según el tipo de propuesta (EIPs para cambios core, ERCs para estándares, etc.). El archivo debe nombrarse con las convenciones estipuladas y utilizar la extensión `.md` para Markdown.
3. **Seguir la plantilla oficial**: El documento debe incorporar todas las secciones obligatorias definidas en la EIP-1: cabecera YAML, abstract, motivación, especificación, justificación técnica y compatibilidad hacia atrás. Los editores rechazarán envíos que no respeten esta estructura.
4. **Abrir el Pull Request**: La descripción de tu PR debe contener un resumen claro de lo que hace la propuesta y por qué es relevante. Esta será la primera impresión para editores y revisores.
5. **Colaborar con los editores**: Prepárate para iterar con los editores. Es común que soliciten ajustes de formato, aclaraciones o información adicional. Responde con prontitud y cordialidad para mantener el flujo ágil.
6. **Período de revisión**: Tu propuesta permanecerá abierta durante las fases de revisión correspondientes, incluyendo al menos dos semanas en Last Call cuando alcance dicha instancia.

Respecto a los números de EIP: se asignan de manera secuencial a medida que las propuestas ingresan formalmente, no los eligen los autores. En ocasiones se habla del término "sniping" de números, que describe el intento de enviar propuestas con rapidez para obtener un número llamativo o memorable. Aunque el número en sí no otorga ninguna ventaja técnica, los editores gestionan las asignaciones de forma transparente.

### Transferir la autoría de una EIP

Las circunstancias cambian, y a veces el autor original de una EIP no puede continuar manteniéndola por falta de tiempo o cambio de prioridades. En estos escenarios, transferir la autoría es un proceso directo.

El procedimiento consiste en actualizar el campo de autores en la cabecera YAML de la EIP para incluir al nuevo responsable. Lo ideal es que el autor original dé su visto bueno de forma explícita, pero en la práctica, si alguien asume el liderazgo de una propuesta abandonada y demuestra capacidad para impulsarla, la comunidad suele respaldar la transición.

Esta es una de las fortalezas del sistema: las buenas ideas no mueren porque su proponente original tome otro camino. Si descubres una EIP estancada que resuelve un problema que te interesa, puedes ofrecerte como nuevo autor y reactivar el trabajo.

### ¿Qué hace que una EIP sea buena?

Una buena EIP comienza con una motivación clara: ¿por qué Ethereum necesita este cambio? ¿Qué problema concreto resuelve? Las propuestas más sólidas identifican una necesidad real y demuestran que la solución planteada es la más adecuada tras haber evaluado alternativas.

La especificación técnica debe ser rigurosa e inequívoca. Recuerda que este documento servirá de base para que múltiples equipos independientes de clientes lo implementen en diferentes lenguajes de programación, por lo que debe ser lo bastante detallado para que todos lleguen al mismo resultado. El uso de términos RFC 2119 (MUST, SHOULD, MAY) ayuda a definir obligaciones y recomendaciones sin ambigüedad.

Las buenas EIPs también se anticipan a los cuestionamientos. La sección de justificación (rationale) debe explicar por qué se descartaron otros caminos técnicos posibles.

Por último, una buena EIP cuenta con un champion comprometido que responde comentarios, ajusta la propuesta y participa activamente en los debates técnicos.

### ¿Cuáles son las secciones obligatorias de una EIP?

Toda EIP debe contener ciertos elementos obligatorios para ser considerada válida:

- **Preamble (Preámbulo)**: Bloque YAML al inicio con metadatos clave: número asignado, título, autores, estado actual, tipo, categoría y fecha de creación.
- **Abstract (Resumen)**: Síntesis concisa (de tres a cinco oraciones) que resume lo que la propuesta logra técnicamente.
- **Motivation (Motivación)**: Argumentación del problema que se busca resolver y por qué las soluciones existentes son insuficientes.
- **Specification (Especificación)**: El núcleo técnico del documento con la sintaxis, reglas y comportamientos exactos que los desarrolladores y clientes deben implementar.
- **Rationale (Justificación)**: Razonamiento detrás de las decisiones de diseño y análisis de las alternativas que fueron descartadas.
- **Backwards Compatibility (Compatibilidad hacia atrás)**: Análisis detallado de si el cambio introduce incompatibilidades con contratos, clientes o herramientas existentes, y cómo mitigarlas.

### El formato de metadatos YAML de una EIP

En la parte superior de cada EIP se ubica un bloque YAML estructurado. Este encabezado permite que las herramientas y los sitios web oficiales procesen automáticamente los datos de la propuesta, clasifiquen su estado y generen paneles de seguimiento.

Un ejemplo típico luce de la siguiente manera:

```yaml
eip: 1559
title: Fee Market Change
author: Vitalik Buterin (@vbuterin), Eric Conner (@econoar)
status: Final
type: Core
category: Core
created: 2019-04-13
```

El correcto llenado de estos metadatos es fundamental. Pequeños errores de formato pueden provocar el rechazo inicial por parte de los editores o dificultar la indexación automática en las herramientas de seguimiento del ecosistema.

### Tiempos y duración: ¿Cuánto tarda el proceso?

No existe un calendario fijo para una EIP: el ritmo lo marca el consenso comunitario. Puede ser sorprendentemente veloz ante problemas críticos o tomar años para propuestas complejas o debatidas.

Un estándar ERC sencillo que resuelva una necesidad evidente y cuente con amplio respaldo puede pasar de borrador (Draft) a final (Final) en pocos meses. La fase de Last Call exige un mínimo obligatorio de dos semanas, mientras que las revisiones técnicas pueden extenderse según el volumen de retroalimentación.

Propuestas más profundas toman años. La EIP-1559 se debatió durante más de dos años antes de su inclusión en la actualización London. La transición a Proof-of-Stake a través de The Merge (EIP-3675) requirió varios años de investigación, prototipado y pruebas exhaustivas.

### ¿Cómo se implementa una EIP en la blockchain?

Alcanzar el estado "Final" no significa que una Core EIP esté activa de inmediato en la red principal: significa que la especificación técnica ha sido aprobada y está lista para su implementación en código.

La implementación real ocurre en el software cliente de Ethereum. Equipos como Geth, Nethermind, Besu y Erigon programan las nuevas reglas en sus bases de código según lo estipulado en la EIP.

Posteriormente, la activación en la red se coordina mediante una actualización de red (Hard Fork). Todos los clientes deben soportar las nuevas reglas al llegar al bloque o tiempo acordado. Si una parte relevante de los nodos no actualizara sus clientes, se correría el riesgo de una bifurcación no deseada de la cadena.

Para los estándares ERC, la dinámica es distinta: no requieren una actualización de red en el protocolo base, sino que su adopción depende de que billeteras, exchanges y aplicaciones descentralizadas decidan incorporar soporte para dicho estándar en su software.

### ¿Qué rol juegan las redes de prueba (Testnets) en la implementación de una EIP?

Las redes de prueba son el entorno donde las EIPs se validan exhaustivamente antes de manejar valor económico real. Permiten verificar la compatibilidad entre diferentes clientes, descubrir posibles vulnerabilidades de seguridad y brindar a los desarrolladores la oportunidad de probar sus aplicaciones con las nuevas características.

Redes como Sepolia y Holesky (junto a históricas como Goerli o Ropsten) cumplen funciones clave en este proceso. Los implementadores y auditores pasan meses probando las actualizaciones en testnets antes de cualquier despliegue en Mainnet.

![Figura 3: El Proceso de Propuesta de EIP - De la Idea a la Implementación](/images/blog/eip-handbook-3.jpg)

---

## 3. Discusión y Gobernanza

Las EIPs no surgen en el vacío: nacen del debate comunitario y se moldean a través de intereses diversos. Esta sección explora el componente humano de la gobernanza técnica de Ethereum.

### Dónde se discuten las EIPs

El punto de encuentro primordial para debatir EIPs es el foro **Ethereum Magicians**. Esta plataforma comunitaria aloja análisis profundos donde cualquier persona puede plantear ideas, hacer preguntas y ofrecer retroalimentación. Antes de presentar un PR formal, es una práctica estándar socializar la propuesta en este espacio.

El repositorio de GitHub cumple un rol formal mediante Pull Requests e Issues para el seguimiento técnico, mientras que las reuniones periódicas de **All Core Devs (ACDE)** son el ámbito donde los desarrolladores core evalúan qué propuestas están maduras para su implementación.

### Ethereum Magicians

El foro Ethereum Magicians fue fundado para ofrecer un espacio de discusión técnica estructurada que los issues de GitHub no podían albergar con comodidad. Es el lugar donde las propuestas se pulen mediante la revisión de expertos de todo el ecosistema.

Su valor distintivo reside en su cultura de debate técnico riguroso. Muchas EIPs que parecían ideales en el papel mejoraron significativamente gracias a las observaciones planteadas en Magicians, mientras que otras con fallas de diseño fueron descartadas a tiempo.

### ¿Es obligatorio discutir cada EIP en Ethereum Magicians primero?

No existe una regla rígida que obligue a publicar en Ethereum Magicians antes de abrir un PR en GitHub. Sin embargo, omitir este paso suele ser contraproducente.

En la práctica, editores y revisores preguntarán de inmediato si la propuesta ya fue debatida públicamente. Presentar una EIP sin discusión previa genera fricción, pues la comunidad valora las propuestas que han sido puestas a prueba ante la crítica comunitaria. Publicar en Magicians permite detectar errores tempranos, recoger sugerencias valiosas y generar respaldo anticipado.

Además, enviar una propuesta sin interacción previa puede percibirse como un intento de esquivar el debate colectivo, lo cual choca con la cultura de código abierto de Ethereum.

### Los Editores de EIPs

Los editores de EIPs actúan como guardianes del proceso. Son voluntarios que revisan que las propuestas cumplan con el formato debido, contengan todas las secciones requeridas y mantengan coherencia técnica básica. No son jueces que determinan si una idea es "buena" o "mala", sino facilitadores que garantizan la calidad estructural del repositorio.

Es una labor exigente que requiere conocer a fondo la EIP-1, mantenerse al día con la evolución de la red y procesar un flujo continuo de envíos con criterio uniforme.

### ¿Quiénes son los editores actuales de EIPs?

La lista de editores evoluciona con el tiempo a medida que nuevos voluntarios asumen esta responsabilidad. La nómina actualizada se encuentra siempre visible en el sitio oficial `eips.ethereum.org`.

Los editores no son empleados remunerados por ninguna entidad central: son miembros de la comunidad con trayectoria y compromiso demostrado con la salud técnica de Ethereum.

### ¿Quién aprueba una Core EIP?

En Ethereum no existe una autoridad única que "apruebe" una propuesta. La aprobación surge de un consenso social y técnico distribuido entre múltiples actores.

Una Core EIP debe satisfacer varios filtros: los editores verifican el cumplimiento formal, la comunidad y los investigadores debaten sus implicaciones en foros públicos, y los desarrolladores de clientes evalúan su viabilidad e impacto en las llamadas All Core Devs. Ningún individuo u organización puede imponer una Core EIP de forma unilateral.

### Entendiendo el modelo de gobernanza de Ethereum

La gobernanza de Ethereum es intencionalmente descentralizada e informal en comparación con las estructuras corporativas tradicionales.

- La **Fundación Ethereum** financia investigación y coordina eventos, pero no tiene el control absoluto del protocolo.
- Los **desarrolladores core** tienen gran peso práctico al escribir el código de los clientes, pero responden ante el ecosistema.
- Los **validadores** tienen el poder económico de decidir qué software ejecutar en sus nodos.
- Los **usuarios y desarrolladores de dapps** expresan su preferencia al elegir qué redes, contratos y estándares respaldar.

Este esquema de pesos y contrapesos asegura que las decisiones perdurables requieran un consenso genuino y amplio.

### ¿Qué es la llamada ACDE (All Core Devs Execution)?

La llamada ACDE es una reunión sincronizada semanal donde los desarrolladores que construyen los clientes de Ethereum coordinan el trabajo técnico del protocolo.

En ella participan representantes de Geth, Nethermind, Besu, Erigon y otros clientes, junto con investigadores y coordinadores de la Fundación Ethereum. Allí se analiza el estado de las EIPs, se coordinan las fechas de despliegue en testnets y Mainnet, y se debaten prioridades técnicas.

Estas reuniones son públicas: se transmiten y quedan grabadas en el canal de YouTube de la Fundación Ethereum, y sus minutas se documentan en el repositorio `ethereum/pm`.

### La fatiga de gobernanza

Participar continuamente en debates técnicos profundos sobre el futuro del protocolo puede generar agotamiento o "fatiga de gobernanza". Se manifiesta cuando las discusiones se alargan indefinidamente, los mismos argumentos se repiten sin llegar a acuerdos o los participantes experimentados reducen su actividad en los foros.

Para mitigar este desgaste, la comunidad suele organizar grupos de trabajo específicos enfocados en áreas puntuales (como la abstracción de cuentas) y establecer plazos de evaluación más claros.

### De dónde surgen las ideas antes de convertirse en EIPs

El camino de una idea comienza mucho antes del Pull Request formal en GitHub:

- **EIPIP (EIP Improvement Proposal Initiative)**: Grupo de trabajo informal que analiza mejoras al propio proceso de propuestas.
- **ethresear.ch**: Espacio de debate académico e investigación avanzada sobre criptografía, mecanismos económicos y consenso.
- **Discord**: Canales técnicos donde los equipos de clientes y desarrolladores intercambian consultas e ideas de manera cotidiana.
- **Ethereum Magicians**: Foro principal para estructurar y debatir propuestas antes de su formalización.

### Cómo influyen los diferentes actores en las EIPs

- **Desarrolladores Core e implementadores de clientes**: Poseen una gran influencia práctica, ya que evalúan la viabilidad técnica y la complejidad de mantenimiento en el código.
- **Validadores**: Protegen la seguridad económica de la red y cuidan que los cambios no encarezcan de forma desmedida la operación de los nodos.
- **Usuarios**: Ejercen su influencia mediante la adopción, eligiendo qué aplicaciones y estándares utilizar.
- **Desarrolladores de billeteras y dapps**: Determinan qué estándares ERC se integran en la interfaz cotidiana de los usuarios.
- **Exchanges y proveedores de infraestructura**: Resultan decisivos para la liquidez y adopción comercial de nuevos estándares de tokens.
- **Fundación Ethereum**: Aporta recursos y legitimidad de investigación, aunque no impone directrices unilaterales.

### Reglas y normas no escritas para participar en las EIPs

1. **Hacer la tarea antes de publicar**: Investiga propuestas previas y antecedentes técnicos antes de plantear una nueva idea.
2. **Aceptar y responder a las críticas**: La crítica técnica busca fortalecer la propuesta; responder con argumentos sólidos y respeto construye credibilidad.
3. **Tener paciencia con los tiempos**: Los consensos sólidos requieren tiempo y maduración técnica.
4. **Dar crédito a quien lo merece**: Cita los trabajos previos y las contribuciones de otros investigadores.
5. **Respetar los canales**: Utiliza cada plataforma (Magicians, GitHub, Discord) según su propósito previsto.
6. **Apoyar otras propuestas generosamente**: La revisión mutua entre autores mantiene activo y saludable al ecosistema.

### Construir consenso en las discusiones de EIP

El consenso en el proceso de EIP no se obtiene mediante una votación tradicional por mayoría, sino a través de la ausencia de objeciones técnicas insalvables por parte de los actores clave ("rough consensus"). Se alcanza cuando las inquietudes principales han sido resueltas y los implementadores manifiestan su conformidad para avanzar.

### Manejo de EIPs en competencia o en conflicto

Cuando surgen varias propuestas orientadas a resolver el mismo problema, el primer instinto de la comunidad es explorar si sus mejores elementos pueden combinarse en una única propuesta integral. Si esto no es viable, las propuestas suelen evolucionar en paralelo hasta que una de ellas gana mayor tracción y respaldo natural por parte de implementadores y usuarios.

![Figura 4: Discusión y Gobernanza de EIP - Consenso Comunitario](/images/blog/eip-handbook-4.jpg)

---

## 4. Entendiendo los Estados de las EIPs

Cada EIP cuenta con un estado formal que indica en qué punto de su ciclo de vida se encuentra.

### El viaje de los estados

Una propuesta atraviesa habitualmente las siguientes etapas:

- **Draft (Borrador)**: La propuesta está en desarrollo activo por parte de sus autores, abierta a modificaciones estructurales.
- **Review (Revisión)**: El autor considera que la especificación está completa y solicita una revisión formal y rigurosa por parte de la comunidad.
- **Last Call (Última llamada)**: Período final de revisión (con una duración mínima de dos semanas) antes de que una propuesta de la vía de estándares pase a estado final. Si no surgen objeciones críticas, avanza a Final.
- **Final**: Estándar completado y estable. Para las ERCs, indica que está listo para su adopción generalizada. Para las Core EIPs, significa que ha sido aceptada para su inclusión en una actualización de red.

### Draft vs. Review: ¿Cuál es la diferencia?

La transición de Draft a Review refleja el nivel de madurez del documento. En Draft, la propuesta puede tener secciones incompletas o en evaluación. Al moverla a Review, el autor manifiesta que la especificación es sólida y está lista para una auditoría comunitaria exhaustiva.

### ¿Qué es Last Call?

Last Call es la advertencia final previa al cierre del estándar. Permite detectar casos borde o detalles inadvertidos. Si durante estas dos semanas se descubren fallas de importancia, la EIP puede regresar a Review o a Draft para ser corregida.

### ¿Se puede modificar una EIP en estado Final?

Por regla general, una EIP en estado Final se considera inmutable para preservar la estabilidad de las implementaciones que dependen de ella. Si se requieren cambios o ampliaciones, se publica una nueva EIP que extienda o complemente a la original, manteniendo la retrocompatibilidad.

### Retirada (Withdrawn) vs. Rechazada (Rejected)

- **Withdrawn**: El autor decide retirar la propuesta por falta de tiempo, inviabilidad técnica o cambio de enfoque.
- **Rejected**: La comunidad o los desarrolladores core determinan que la propuesta no debe implementarse debido a objeciones técnicas o incompatibilidad con la visión de la red.

### EIPs Estancadas (Stagnant)

Una EIP pasa automáticamente a estado **Stagnant** si no registra actividad durante seis meses. Esto evita la acumulación de propuestas inactivas en el repositorio principal sin borrar su registro histórico.

### Criterios exactos para las transiciones de estado

- **De Draft a Review**: Decisión del autor cuando considera que la especificación está técnicamente completa.
- **De Review a Last Call**: El autor confirma que se respondieron las inquietudes de la comunidad y la propuesta está madura. Se fija una fecha límite de al menos 14 días.
- **De Last Call a Final**: Ocurre al vencer el plazo si no existen objeciones técnicas no resueltas.

### Actualización de EIPs Finales

Los estándares vivos (como ERC-20) pueden recibir aclaraciones menores de redacción o erratas sin alterar su comportamiento base, mientras que las nuevas funcionalidades se canalizan mediante EIPs complementarias.

### Resucitar una EIP estancada

Si encuentras una propuesta en estado Stagnant que consideras valiosa, puedes contactar al autor original o solicitar a los editores asumir el rol de autor para reactivarla, actualizar su contenido y devolverla al estado Draft o Review.

![Figura 5: Entendiendo los Estados de las EIPs - El Viaje de los Estados](/images/blog/eip-handbook-5.jpg)

---

## 5. Implementación Técnica

Esta sección aborda la ingeniería detrás de las EIPs: cómo las especificaciones en papel se convierten en código ejecutable en los clientes de Ethereum.

### Cómo participan los implementadores de clientes

Los equipos detrás de clientes como Geth, Nethermind, Besu y Erigon analizan la viabilidad técnica de cada propuesta, evalúan si genera deuda técnica y comprueban que no interfiera con otros desarrollos en curso. Su retroalimentación temprana es fundamental para evitar problemas durante la fase de despliegue.

### Costos de Gas y las EIPs

Cualquier EIP que introduzca nuevas operaciones computacionales o modifique el almacenamiento debe definir cuidadosamente su costo en unidades de gas. Si una operación resulta demasiado barata, puede abrir vectores de ataques de denegación de servicio; si es excesivamente costosa, desalentará su uso legítimo. El cálculo del gas se apoya en pruebas de rendimiento (benchmarks) y análisis computacional riguroso.

### EIPs de Precompilaciones vs. EIPs de Opcodes

- **Opcodes**: Son las instrucciones nativas que la Máquina Virtual de Ethereum (EVM) ejecuta directamente. Añadir un opcode expande las capacidades base del lenguaje máquina de la EVM.
- **Precompilaciones (Precompiles)**: Son contratos especiales embebidos en el protocolo que realizan cálculos criptográficos complejos (como operaciones con curvas elípticas) de forma altamente eficiente en código nativo, con un costo de gas significativamente menor al que requeriría implementarlos mediante opcodes estándar en Solidity.

### Las EIPs y la retrocompatibilidad

La compatibilidad hacia atrás es un principio rector en Ethereum. Los contratos inteligentes desplegados en el pasado deben continuar funcionando tras cualquier actualización. Las EIPs deben incluir obligatoriamente una sección de "Backwards Compatibility" donde justifiquen cualquier impacto potencial y detallen las medidas para mitigar fricciones.

### Reglas de formato de una EIP

- **Estilo Markdown**: Estructura limpia con títulos jerárquicos, tablas y bloques de código debidamente formateados.
- **Términos RFC 2119**: Empleo estricto de palabras como MUST, SHOULD y MAY para evitar ambigüedades en los requerimientos.
- **Convenciones de enlaces**: Referencias estandarizadas a otras EIPs utilizando enlaces directos para facilitar la navegación cruzada.

### Cómo funcionan las dependencias entre EIPs

Cuando una propuesta se apoya en otra para funcionar, debe declararlo explícitamente en los campos `requires` de su cabecera YAML. Esto ayuda a los revisores e implementadores a comprender la secuencia correcta de desarrollo e integración.

![Figura 6: Implementación Técnica - De la Especificación al Código](/images/blog/eip-handbook-6.jpg)

---

## 6. Estándares ERC Explicados

Los estándares ERC representan la faceta más visible de las EIPs, ya que establecen las reglas con las que interactúan las aplicaciones descentralizadas y los usuarios.

### Los Tres Grandes: ERC-20, ERC-721 y ERC-1155

- **ERC-20**: El estándar fundamental para tokens fungibles (donde cada unidad es idéntica e intercambiable por otra, como el dinero). Define funciones para transferir saldo, consultar balances y autorizar retiros a terceros. Impulsó el auge de las ICOs y sostiene la gran mayoría de los activos en DeFi.
- **ERC-721**: El estándar para tokens no fungibles (NFTs), donde cada activo es único e indivisible. Habilitó el desarrollo del arte digital, coleccionables, identidades digitales y la tokenización de activos del mundo real.
- **ERC-1155**: El estándar multi-token que permite gestionar tokens fungibles y no fungibles dentro de un mismo contrato inteligente. Resulta especialmente eficiente para videojuegos y aplicaciones complejas, reduciendo costos de transacción y simplificando el despliegue.

### ¿Están los desarrolladores obligados a seguir las ERCs finalizadas?

Las ERCs no son normas obligatorias por ley técnica, pero seguirlas ofrece inmensas ventajas prácticas. Al utilizar un estándar establecido como ERC-20 o ERC-721, tu token funciona de inmediato con billeteras, plataformas de intercambio, exploradores de bloques y protocolos DeFi existentes sin requerir integraciones personalizadas.

### ¿Por qué "Request for Comment"?

El nombre rinde homenaje al proceso de RFCs que modeló el desarrollo de Internet desde la década de 1960. Simboliza la búsqueda de estándares construidos a partir de la deliberación comunitaria abierta y no mediante imposiciones centrales.

### El proceso de las ERCs frente a otras EIPs

Mientras que una Core EIP cobra vigencia en cuanto se activa en una actualización de red de los clientes, una ERC solo adquiere relevancia práctica cuando los desarrolladores de aplicaciones, billeteras y exchanges deciden implementarla en sus plataformas.

### ¿Por qué las billeteras soportan algunas ERCs y otras no?

Las billeteras como MetaMask, Rainbow o Coinbase Wallet evalúan diversos factores antes de incorporar soporte para un nuevo estándar:

- **Demanda real de los usuarios**: Se priorizan los estándares que los usuarios utilizan masivamente.
- **Recursos de desarrollo y mantenimiento**: Cada nueva integración demanda horas de ingeniería, pruebas y soporte continuo.
- **Seguridad y estabilidad**: Los equipos verifican que el estándar cuente con auditorías sólidas y suficiente tiempo de prueba en el mercado.
- **Curaduría práctica**: Con cientos de ERCs finalizadas, las billeteras seleccionan aquellas con impacto comprobado para no saturar sus interfaces.

### Otras ERCs importantes más allá de los Tres Grandes

- **ERC-4626**: Estándar para bóvedas tokenizadas (Tokenized Vaults), fundamental para protocolos de rendimiento y staking en DeFi.
- **ERC-4337**: Revolucionario estándar de Abstracción de Cuentas que permite crear billeteras basadas en contratos inteligentes sin modificar el protocolo base, facilitando recuperación de cuentas, transacciones agrupadas y pagos de gas con tokens secundarios.
- **ERC-777**: Propuesta avanzada para tokens fungibles que introdujo ganchos (hooks) de transferencia, influyendo en diseños posteriores.
- **Extensiones de ERC-721**: Módulos como Metadata (para asociar URIs y datos descriptivos) y Enumerable (para listar tokens por propietario) que amplían las capacidades de los NFTs.

### Los estándares ERC más importantes

1. **ERC-20**: Base del ecosistema de tokens fungibles e intercambiables.
2. **ERC-721**: Estándar de referencia para activos digitales únicos y NFTs.
3. **ERC-165**: Mecanismo estándar que permite a un contrato inteligente publicar qué interfaces y funciones implementa para que otros contratos puedan consultarlo en tiempo de ejecución.
4. **ERC-721 y ERC-1155 Metadata**: Estructuras clave para mostrar nombres, descripciones e imágenes asociadas a tokens.
5. **ERC-2612**: Permite autorizaciones de tokens mediante firmas criptográficas fuera de cadena (permit), habilitando experiencias de usuario sin costo de gas previo para aprobaciones.

---

## 7. Historia y Evolución

Comprender el origen de las EIPs permite entender por qué el sistema funciona de esta manera en la actualidad.

### Los orígenes de las EIPs

El sistema de EIPs se inspiró directamente en los BIPs (Bitcoin Improvement Proposals) de Bitcoin. Al diseñar Ethereum entre 2014 y 2015, sus creadores entendieron que se requería un método estructurado para coordinar el desarrollo de una plataforma abierta y multifacética. Vitalik Buterin y los primeros colaboradores establecieron el repositorio público en GitHub para registrar todas las propuestas bajo un flujo transparente.

### La primera EIP jamás creada (EIP-1)

La EIP-1, titulada "EIP Purpose and Guidelines", fue el documento inicial que definió las reglas del juego antes de que la red de Ethereum se lanzara públicamente. Diseñar el proceso de mejora antes de que la propia tecnología estuviera en producción demostró una visión orientada a la gobernanza comunitaria de largo plazo.

### Cómo ha evolucionado EIP-1 a lo largo del tiempo

Con el paso de los años, la EIP-1 ha incorporado aprendizajes continuos: diferenció con mayor claridad los tipos de propuestas (Core, ERC, Networking, Interface, Meta e Informational), precisó los requisitos de cada estado de revisión y sumó recomendaciones prácticas sobre cómo redactar justificaciones técnicas y resolver controversias.

### Los editores originales de EIPs

Los primeros editores fueron colaboradores fundacionales de Ethereum que fijaron los estándares de calidad técnica, rigor en la redacción y énfasis en la retrocompatibilidad que perduran hasta hoy.

### EIPs fallidas y abandonadas notables

No todas las propuestas logran su cometido. Algunas son retiradas por sus autores al encontrar obstáculos insalvables; otras son rechazadas formalmente por la comunidad al plantear riesgos de seguridad o desviarse de los principios de descentralización de la red.

### El Hard Fork de TheDAO y su impacto en la gobernanza

En 2016, la vulnerabilidad explotada en TheDAO resultó en la sustracción de aproximadamente 3.6 millones de ETH. La decisión de intervenir mediante una bifurcación para restituir los fondos a los usuarios afectados dividió a la comunidad entre quienes defendían el principio estricto de "el código es ley" y quienes consideraban que se trataba de una falla extraordinaria del contrato que requería acción colectiva.

Esto derivó en la separación entre Ethereum (ETH) y Ethereum Classic (ETC), dejando lecciones profundas sobre la cautela requerida al plantear cambios contenciosos en el protocolo.

### El Fork de la EIP-155 y Ethereum Classic

La EIP-155 introdujo protección contra ataques de reproducción (replay attacks) entre las dos cadenas resultantes tras la bifurcación, convirtiéndose en un hito histórico de la convivencia entre redes con visiones divergentes.

### Cómo ERC-20 se convirtió en el estándar de tokens

Propuesto en 2015 por Fabian Vogelsteller y Vitalik Buterin, el estándar ERC-20 resolvió la incompatibilidad entre los primeros contratos de tokens. Su sencillez de implementación y su llegada oportuna justo antes del auge de 2017 lo consagraron como el estándar universal del ecosistema.

### La historia de las llamadas All Core Devs

Lo que comenzó como charlas informales entre desarrolladores pioneros se transformó en las reuniones estructuradas de All Core Devs (ACDE y ACDC), donde los equipos de clientes coordinan la hoja de ruta técnica de forma abierta y documentada.

### La historia del foro Ethereum Magicians

Creado en 2017 para superar las limitaciones de Reddit y los chats grupales, Ethereum Magicians se consolidó como el foro de referencia para análisis técnicos detallados y maduración de propuestas.

### El contexto histórico de la EIP-1559

Ideada para transformar el mercado de comisiones, la EIP-1559 sustituyó las subastas tradicionales de primer precio por una tarifa base dinámica que se quema en cada transacción. Tras años de investigación y debates económicos, se desplegó en la actualización London en 2021, aportando previsibilidad a las comisiones y una presión deflacionaria vinculada al uso de la red.

### The Merge: Años de evolución

La transición de Proof-of-Work a Proof-of-Stake, plasmada en la Meta EIP-3675, fue el resultado de años de investigación iniciados con los primeros borradores de Casper. Desplegada exitosamente en septiembre de 2022, redujo el consumo energético de Ethereum en más del 99% sin interrumpir la operación de la red.

### Cómo han cambiado los editores de EIPs con el tiempo

El equipo editorial se ha ampliado con desarrolladores, investigadores y colaboradores comunitarios, formalizando pautas de revisión objetivas para gestionar el creciente volumen de propuestas.

### Empresas e instituciones más influyentes en las EIPs

- **Fundación Ethereum**: Financia investigaciones y apoya la coordinación técnica.
- **Equipos de clientes (Geth, Nethermind, Besu, Erigon)**: Tienen el poder fáctico de implementar el código ejecutable.
- **Protocolos DeFi y empresas de infraestructura (Uniswap, Aave, MakerDAO, OpenSea)**: Promueven y validan estándares clave a nivel de aplicación.
- **Proveedores de billeteras (MetaMask, Coinbase Wallet, Rainbow)**: Resultan cruciales para la interfaz final del usuario.
- **Proyectos de Capa 2 (Optimism, Arbitrum, zkSync, StarkWare)**: Aportan activamente en propuestas de escalabilidad e interoperabilidad.

### La hoja de ruta centrada en Rollups

En 2020, Ethereum formalizó una estrategia orientada a convertir la capa base en una plataforma segura de liquidación y disponibilidad de datos, delegando la ejecución masiva en soluciones de Capa 2 (Rollups). Esto impulsó propuestas como la EIP-4844 (proto-danksharding), que habilitó los "blobs" de datos temporales para abaratar drásticamente las transacciones en Layer 2.

### Controversias significativas en torno a las EIPs

- **EIP-999**: Propuesta para desbloquear fondos congelados en la billetera multifirma de Parity, la cual fue rechazada para proteger la inmutabilidad y la confianza en la red.
- **EIP-1559**: Enfrentó reticencias iniciales de sectores de minería antes de lograr un consenso abrumador por sus beneficios para los usuarios y la economía de ETH.
- **EIP-3074**: Propuesta de delegación de cuentas que generó intensos debates sobre modelos de seguridad antes de ajustar su integración en la hoja de ruta.

---

## 8. EIPs y ERCs Notables

Algunas propuestas han marcado hitos decisivos en la historia de Ethereum:

### EIP-1559: El cambio en el mercado de comisiones

Transformó el cálculo de las tarifas al introducir una tarifa base ajustable algorítmicamente que se quema, vinculando directamente la actividad de la red con la escasez de Ether.

### The Merge: EIP-3675

La propuesta de coordinación maestra que guió el histórico paso de Proof-of-Work a Proof-of-Stake, demostrando la capacidad de Ethereum para llevar a cabo actualizaciones arquitectónicas profundas mediante consenso coordinado.

### El Salón de la Fama: Estándares ERC que impulsan el ecosistema

- **ERC-20**: Base de la economía de tokens e interoperabilidad financiera en Web3.
- **ERC-721**: Pilar de la propiedad digital única y los NFTs.
- **ERC-1155**: Estándar eficiente para gestión simultánea de múltiples tipos de activos.
- **ERC-4626**: El estándar unificado para bóvedas y estrategias de rendimiento en DeFi.
- **ERC-4337**: Abstracción de cuentas sin cambios en el protocolo base.
- **ERC-6551**: Cuentas vinculadas a tokens (Token-Bound Accounts), otorgando a cada NFT la capacidad de poseer activos e interactuar con contratos.

### ¿Qué hace que una EIP sea exitosa?

Las propuestas exitosas comparten rasgos comunes: resuelven problemas concretos que los desarrolladores padecen en el mundo real, llegan en el momento oportuno, cuentan con un champion dedicado que construye consensos y respetan la compatibilidad con el ecosistema preexistente.

---

## 9. Recursos y Herramientas

Guarda estos enlaces indispensables para seguir de cerca el desarrollo de las EIPs:

### Visualización y Listado Oficial de EIPs

- **Página principal de EIPs**: [https://eips.ethereum.org/](https://eips.ethereum.org/)
- **Listado completo de EIPs y ERCs**: [https://eips.ethereum.org/all](https://eips.ethereum.org/all)
- **Por categoría**:
  - Core: [https://eips.ethereum.org/core](https://eips.ethereum.org/core)
  - ERC (estándares): [https://eips.ethereum.org/erc](https://eips.ethereum.org/erc)
  - Interface: [https://eips.ethereum.org/interface](https://eips.ethereum.org/interface)
  - Networking: [https://eips.ethereum.org/networking](https://eips.ethereum.org/networking)
  - Meta: [https://eips.ethereum.org/meta](https://eips.ethereum.org/meta)
  - Informational: [https://eips.ethereum.org/informational](https://eips.ethereum.org/informational)

### EIP-1 y Documentos de Proceso

- **EIP-1 (Directrices oficiales y reglas del proceso)**: [https://eips.ethereum.org/EIPS/eip-1](https://eips.ethereum.org/EIPS/eip-1)
- **Plantilla oficial de EIP (Markdown)**: [https://github.com/ethereum/EIPs/blob/master/eip-template.md](https://github.com/ethereum/EIPs/blob/master/eip-template.md)

### Repositorio en GitHub (Fuente de la verdad)

- **Repositorio oficial de EIPs**: [https://github.com/ethereum/EIPs](https://github.com/ethereum/EIPs)
- **Guía de contribución (CONTRIBUTING.md)**: [https://github.com/ethereum/EIPs/blob/master/CONTRIBUTING.md](https://github.com/ethereum/EIPs/blob/master/CONTRIBUTING.md)

### Discusión y Gobernanza

- **Foro Ethereum Magicians**: [https://ethereum-magicians.org/](https://ethereum-magicians.org/)
- **Repositorio Ethereum PM (Actualizaciones de red y reuniones All Core Devs)**: [https://github.com/ethereum/pm/](https://github.com/ethereum/pm/)

### Enlaces Útiles Adicionales

- **Ethereum Stack Exchange (Preguntas y respuestas técnicas)**: [https://ethereum.stackexchange.com/](https://ethereum.stackexchange.com/)
- **Documentación de estándares en Ethereum.org**: [https://ethereum.org/en/developers/docs/standards/](https://ethereum.org/en/developers/docs/standards/)

---

## 10. Consideraciones de Seguridad y Legales

Las propuestas involucran aspectos técnicos, normativos y de propiedad intelectual que conviene conocer.

### Cómo encajan las auditorías de seguridad en el proceso de EIP

El proceso de EIP no impone de forma obligatoria auditorías externas como requisito formal previo para aceptar una propuesta, manteniendo un esquema de innovación accesible.

Sin embargo, las Core EIPs se someten a exhaustivas revisiones de seguridad por parte de los equipos de clientes, investigadores independientes y programas de recompensas de errores (bug bounties). En actualizaciones de gran envergadura como The Merge, se contratan firmas auditoras especializadas para validar las implementaciones en todos los clientes.

Para los estándares ERC complejos (como ERC-4626 o ERC-4337), las auditorías resultan indispensables en la práctica debido al volumen de capital que interactúa con ellos.

### Entendiendo el Copyright y la Licencia de las EIPs

Cada EIP publicada se libera bajo la licencia de dominio público **Creative Commons Zero 1.0 Universal (CC0 1.0)**. Esto garantiza que cualquier persona u organización pueda leer, implementar, modificar o construir sobre la especificación sin requerir permisos ni pagar regalías.

La licencia CC0 aplica al texto de la especificación técnica en sí. El software que implementa dicha especificación (como los clientes o las aplicaciones) se rige bajo sus propias licencias de código abierto o propietarias.

### ¿Se puede patentar la lógica de una EIP?

Intentar patentar conceptos descritos en una EIP choca frontalmente con la ética de código abierto de Ethereum y atraería un rechazo generalizado de la comunidad. En la práctica, el valor se genera mediante la adopción abierta y los efectos de red, beneficiando colectivamente a todo el ecosistema.

---

## 11. Capa 2 e Interoperabilidad

La estrategia de escalabilidad de Ethereum interactúa estrechamente con las soluciones de Capa 2 y los estándares entre cadenas.

### Cómo afectan las EIPs a las soluciones de Capa 2

Las propuestas del protocolo base amplían directamente las capacidades de los Rollups. La EIP-4844 introdujo espacio de datos en forma de "blobs", permitiendo a las redes de Capa 2 publicar pruebas de validez y datos de transacciones a una fracción del costo del calldata tradicional.

Asimismo, los equipos de Layer 2 aportan ideas al proceso de EIPs para facilitar la interoperabilidad y mejorar la experiencia de usuario en billeteras inteligentes.

### Cómo se relacionan las EIPs con los estándares cross-chain

La interoperabilidad entre cadenas cuenta con propuestas como la EIP-2930 (listas de acceso) y estándares externos complementarios como las CAIPs (Chain Agnostic Improvement Proposals), que definen identificadores universales para blockchains y activos sin restringirse exclusivamente a Ethereum.

---

## 12. Relación con Otros Estándares

Las EIPs conviven y se retroalimentan con otros esquemas de estandarización en la industria.

### Comparación entre las EIPs de Ethereum y los BIPs de Bitcoin

Ambos sistemas derivan conceptualmente del modelo RFC de Internet, pero reflejan prioridades distintas:

- Los **BIPs de Bitcoin** se centran primordialmente en el protocolo base y el formato de transacciones de un activo monetario, operando bajo un enfoque sumamente conservador.
- Las **EIPs de Ethereum** contemplan una gama más diversa de categorías debido a la naturaleza programable de la EVM, destacando la prolífica vía de estándares ERC para el desarrollo de aplicaciones.

### Cómo interactúan las EIPs con otros estándares del ecosistema Ethereum

- **CAIPs**: Resuelven convenciones de identificación agnósticas a la cadena para interoperabilidad multichain.
- **Estándares específicos de Layer 2**: Especificaciones técnicas desarrolladas por equipos de Rollups que interactúan con la capa base cuando es necesario.
- **Convenciones de interfaces y billeteras**: Prácticas que surgen de la experiencia de usuario y se formalizan como ERCs cuando ameritan estandarización global.
- **Estándares de protocolos DeFi**: Patrones de diseño originados en aplicaciones líderes que se extienden por el ecosistema.

### Cómo se relacionan las EIPs con las actualizaciones de red

Las Core EIPs aprobadas se integran en paquetes denominados actualizaciones de red (Hard Forks). Este esquema de empaquetamiento facilita la coordinación de pruebas conjuntas, previene bifurcaciones accidentales y brinda certeza a toda la industria sobre las fechas de activación en Mainnet.

---

## 13. Desafíos, Críticas y el Futuro

La gobernanza descentralizada enfrenta desafíos constantes en su búsqueda de equilibrio entre apertura, rigor y velocidad.

### Cómo previene el spam el proceso de EIPs

El sistema previene envíos de baja calidad mediante filtros estructurales:

1. Exigencia estricta de completar la plantilla oficial y fundamentar la especificación técnica.
2. Revisión inicial de los editores para descartar propuestas incompletas o sin rigor mínimo.
3. El filtro social de la comunidad técnica, donde la reputación profesional incentiva aportes meditados.
4. El mecanismo de pase a estado Stagnant tras seis meses de inactividad, manteniendo despejado el repositorio.

### Cómo refleja el proceso de EIPs la filosofía de gobernanza de Ethereum

El proceso materializa los principios de participación sin permisos, transparencia absoluta en las deliberaciones y búsqueda de consensos perdurables en lugar de imposiciones jerárquicas.

### La tensión entre "El código es ley" y la gobernanza de EIPs

Aunque los contratos individuales se ejecutan según su código inmutable, las reglas de la plataforma que los ejecuta evolucionan mediante la deliberación humana de las EIPs. Esta dualidad preserva la certeza de ejecución en la capa de aplicación mientras permite que el protocolo base se adapte a nuevas demandas tecnológicas.

### Equilibrando la innovación y la estabilidad

Ethereum busca un punto medio pragmático: facilitar mejoras continuas a través de estándares y optimizaciones técnicas, al tiempo que somete los cambios mayores a años de estudio para resguardar las aplicaciones y el capital que operan sobre la red.

### Cómo identificar qué EIPs realmente importan

- Desarrolladores de aplicaciones: Concéntrate en los estándares ERC de tu sector (tokens, gobernanza, abstracción de cuentas).
- Operadores de nodos e infraestructura: Sigue las Core EIPs y los calendarios de actualizaciones de red.
- Investigadores: Participa en los debates tempranos de ethresear.ch y Ethereum Magicians.

### Qué hace exitoso a un EIP Champion

Los impulsores más eficaces combinan solvencia técnica para responder dudas, capacidad de comunicación con diversas audiencias, perseverancia para acompañar el proceso a lo largo de los meses y flexibilidad para incorporar mejoras que beneficien a la comunidad.

### Cómo evolucionan los estándares vivos tras alcanzar el estado Final

Estándares como ERC-20 o ERC-721 permanecen estables en su núcleo, pero crecen mediante propuestas complementarias que agregan extensiones modulares sin romper las implementaciones existentes.

---

## 14. Meta EIPs

Las Meta EIPs representan una categoría singular orientada a coordinar procesos organizativos y transformaciones amplias.

### ¿Qué son las Meta-EIPs?

A diferencia de las EIPs técnicas que alteran funciones específicas del código o la EVM, una Meta EIP describe marcos de trabajo, directrices de proceso o grandes transiciones de protocolo que involucran múltiples componentes técnicos y requieren la alineación de numerosos equipos.

### EIP-3675: The Merge como una Meta-EIP

La EIP-3675 es el ejemplo emblemático: documentó minuciosamente la hoja de ruta de la transición a Proof-of-Stake, sirviendo como la fuente canónica de coordinación para todos los equipos de clientes, investigadores y operadores de la red.

### En qué se diferencian las Meta-EIPs de las EIPs estándar

- **Alcance**: Las EIPs estándar abordan cambios técnicos delimitados; las Meta EIPs coordinan iniciativas globales de múltiples fases.
- **Progresión de estados**: Una Meta EIP pasa a estado Final cuando la iniciativa global que describe concluye exitosamente en la red.
- **Implementación**: Su implementación se materializa mediante el conjunto de EIPs técnicas y acuerdos operativos que articula.
- **Atención comunitaria**: Generan un alto interés debido a que señalan hitos trascendentales en la evolución de Ethereum.

### Cuándo utilizar una Meta-EIP

Se emplea una Meta EIP cuando se lidera una iniciativa compleja que requiere coordinar múltiples especificaciones técnicas y alinear a diversos actores del ecosistema. Para cambios técnicos puntuales y autónomos, se utiliza una EIP estándar.
