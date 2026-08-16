---
title: "Construye tu Propio Bot de Telegram Inspirado en OpenClaw: Guía Práctica de Integración de OpenCode SDK con Agentes de Modelos OpenRouter"
date: "04-06-2026"
excerpt: "Aprende a integrar el SDK de OpenCode con un bot de Telegram y agentes de OpenRouter para controlar funciones de desarrollo y recibir asistencia de IA directamente desde tu teléfono móvil."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["OpenCode", "Telegram Bot", "OpenRouter", "Node.js", "Agentes de IA", "Automatización", "SDK", "Desarrollo Móvil", "JavaScript"]
coverImage: "/images/blog/openclaw_cover.png"
readTime: "45 min de lectura"
featured: false
---

¿Alguna vez has querido controlar tu computadora directamente desde tu teléfono? Imagina poder pedirle a un asistente de inteligencia artificial que te ayude con tareas de programación, genere código y gestione flujos de trabajo de desarrollo mediante simples mensajes de texto en Telegram. Esto es exactamente lo que hace posible este proyecto. Piénsalo como tener un experto técnico sentado en tu bolsillo, listo para ayudarte en cualquier momento que necesites asistencia con código, sin importar dónde estés ni qué estés haciendo. El bot une de manera transparente tu dispositivo móvil y tu entorno de desarrollo, permitiéndote acceder a la asistencia de código impulsada por IA sin necesidad de estar sentado frente a tu computadora.

Esta guía te llevará paso a paso a través de cada uno de los aspectos de la integración del SDK de OpenCode con un bot de Telegram. Al finalizar, comprenderás con exactitud cómo funciona este sistema, cómo configurarlo, cómo utilizarlo y cómo extenderlo. No se requieren conocimientos avanzados previos de programación. Comenzaremos desde los cimientos y construiremos tu entendimiento pieza por pieza, tal como se construye una casa desde los cimientos. Cada concepto se explicará en un lenguaje claro y accesible, con analogías del mundo real para que puedas asimilar incluso los aspectos más técnicos sin sentirte abrumado.

Esta implementación te permite controlar funciones de tu equipo mediante la integración del SDK del servidor de OpenCode, de forma muy similar a cómo el proyecto OpenClaw puede controlar el comportamiento del computador. El proyecto conecta la mensajería de Telegram con la IA de OpenCode a través de una aplicación en Node.js. Cuando envías un mensaje a tu bot de Telegram, este reenvía tu solicitud a un servidor de OpenCode, procesa la respuesta generada por la IA y te devuelve el resultado. Se crea así un control remoto para asistencia de código con IA al que puedes acceder desde cualquier lugar del mundo usando Telegram. Para visualizarlo mejor, imagina que estás de viaje y de pronto recuerdas que necesitas depurar una porción de código. Sin este bot, tendrías que buscar una computadora, abrir tu entorno de desarrollo y comenzar a resolver el problema. Con este bot, simplemente sacas tu teléfono, abres Telegram, describes el problema y recibes sugerencias y soluciones en cuestión de minutos. Esto transforma la manera en que trabajan los desarrolladores, poniendo la ayuda a tu disposición exactamente cuando y donde la necesitas.

La integración puede sonar compleja a primera vista, pero en el fondo se trata de tres componentes comunicándose entre sí: la plataforma de mensajería de Telegram, tu bot actuando como intermediario y el servidor de IA de OpenCode que genera las respuestas inteligentes. Cada componente cumple una función específica y todos trabajan en equipo de forma coordinada. El bot escucha tus mensajes, comprende lo que solicitas, le pide ayuda a la IA y te entrega la respuesta de vuelta. Todo esto ocurre en segundos, creando una experiencia fluida que parece magia, pero que en realidad es ingeniería bien estructurada.

Tomemos un momento para entender por qué esto resulta tan valioso en la vida cotidiana. Muchos desarrolladores pasan horas frente a sus computadoras, pero la vida continúa fuera del escritorio. Puedes estar en una reunión familiar, viajando en transporte público o simplemente lejos de tu máquina cuando surge una duda sobre código. Tradicionalmente, tendrías que esperar hasta volver a tu computadora para resolverla. Este bot elimina esa espera. Pone un potente asistente de programación en tu bolsillo, disponible a cualquier hora del día o de la noche. Ya sea que necesites recordar una sintaxis rápida, generar una función o entender un concepto complejo, el bot está listo. Esto resulta especialmente útil para estudiantes que están aprendiendo a programar, desarrolladores independientes que trabajan en múltiples proyectos o cualquier persona que desee aprovechar los pequeños momentos libres de forma productiva.

Además, esta integración demuestra cómo diferentes tecnologías pueden acoplarse para resolver problemas reales. No necesitas ser un especialista en redes, APIs o inteligencia artificial para implementarlo. El propósito de esta guía es desmitificar todos estos conceptos y darte la confianza no solo para usar el bot, sino también para modificarlo según tus propias necesidades. Al terminar de leer, entenderás cada pieza del rompecabezas y cómo encajan entre sí, y serás capaz de solucionar errores, agregar nuevas funcionalidades y desplegar el bot en tu propio entorno.

![Modificación de archivos mediante Telegram](/images/blog/opencode-telegram-file-modification.jpg)

## Primeros Pasos con Ejemplos Prácticos

Antes de profundizar en los detalles técnicos, pensemos en lo que realmente puedes hacer con este bot una vez que esté en funcionamiento. Imagina que estás en una cafetería, lejos de tu computadora, y recuerdas que necesitas escribir una función para procesar ciertos datos. Abres Telegram en tu teléfono, escribes un comando para tu bot y le pides que genere código Python para parsear archivos CSV. En segundos, recibes una función completa y funcional. Luego puedes copiar ese código y pegarlo en tu proyecto. Este es el poder de tener un asistente de código con IA en tu bolsillo.

Exploremos este escenario con más detalle. Estás sentado en un café disfrutando de una taza de café cuando recuerdas que tu proyecto de análisis de datos requiere una función para leer archivos CSV y transformarlos en un formato estructurado. Normalmente, tendrías que buscar una computadora, abrir tu editor de código, buscar ejemplos en internet o en la documentación y armar el código por tu cuenta. Con este bot, simplemente sacas tu teléfono, abres Telegram y envías un mensaje como: `"/opencode Escribe una función en Python que lea un archivo CSV y devuelva una lista de diccionarios, con manejo de errores para archivos inexistentes."` El bot se comunica con la IA de OpenCode, la cual comprende exactamente lo que necesitas, y en instantes recibes una función bien estructurada, con comentarios claros y manejo de excepciones. Puedes revisar el código, copiarlo y tenerlo listo para usar. Esto te ahorra tiempo y esfuerzo mental, permitiéndote capturar ideas y avanzar en tu trabajo sin importar dónde te encuentres.

O considera este otro escenario: estás trabajando en un error complejo y no logras descubrir por qué tu código no se comporta como esperas. Podrías describir el problema a tu bot, incluir los fragmentos de código relevantes y solicitar ayuda para depurarlo. La IA puede analizar el código, identificar posibles fallas y sugerir soluciones. Todo esto sucede a través de simples mensajes de texto, sin tener que cambiar de aplicación ni interrumpir tu concentración.

Detallemos este caso de depuración. Supongamos que llevas una hora observando un bloque de código JavaScript, intentando comprender por qué cierta función devuelve `undefined`. Has revisado los nombres de las variables, colocado `console.log` por todas partes y sigues sin encontrar el error. Frustrado, decides tomar un descanso y salir a caminar. Mientras caminas, recuerdas a tu bot. Sacas tu teléfono y envías un mensaje: `"/opencode Esta función debería devolver la suma de un arreglo pero devuelve undefined: function sum(arr) { let total; for (let i = 0; i < arr.length; i++) { total += arr[i]; } return total; } ¿Cuál es el error?"` La IA responde de inmediato: `"El problema es que total está declarada pero no inicializada. Comienza como undefined, y sumar números a undefined da como resultado NaN. Debes inicializar total en 0: let total = 0;"`. En segundos queda resuelto un problema que te tuvo bloqueado durante una hora. El bot no se frustra, no necesita café y siempre está listo para mirar el código con ojos frescos.

Otra aplicación sumamente útil es el aprendizaje de nuevos conceptos de programación. Si estás intentando entender cómo funciona la recursión, puedes pedirle a tu bot que te la explique en términos sencillos, que te proporcione ejemplos e incluso que genere ejercicios de práctica. El bot se convierte en un tutor personal disponible en todo momento.

Profundicemos en este aspecto educativo. Aprender a programar puede ser desafiante, especialmente al encontrarse con conceptos abstractos como recursión, clausuras (closures) o funciones de orden superior. Los recursos tradicionales de aprendizaje incluyen documentación, tutoriales, videos y foros. Todos ellos son valiosos, pero pueden no estar inmediatamente accesibles cuando tienes una duda puntual. Tu bot cambia esa dinámica. Puedes hacer preguntas específicas y obtener explicaciones inmediatas y personalizadas. Por ejemplo, podrías enviar: `"/opencode Explica qué es una clausura (closure) en JavaScript con una analogía simple y un ejemplo de código."` La IA podría responder con una analogía sobre un hijo que mantiene acceso a la cocina de sus padres incluso después de haberse mudado de casa, seguida de un fragmento de código que demuestre una función anidada reteniendo acceso a las variables de su ámbito exterior. A continuación, puedes hacer preguntas de seguimiento, pedir más ejemplos o solicitar aclaraciones sobre las partes que no entendiste del todo. Esto crea una experiencia de aprendizaje interactiva adaptada a tu propio ritmo y necesidades. Es como contar con un mentor paciente que jamás juzga tus preguntas y siempre ofrece explicaciones a tu nivel.

Estos ejemplos ilustran el verdadero valor de esta integración. Pone una potente asistencia de IA al alcance de cualquiera que tenga una cuenta de Telegram, convirtiendo tu teléfono en un complemento portátil para tu entorno de desarrollo. El bot democratiza el acceso a la ayuda en programación, permitiendo que los principiantes obtengan orientación, que los desarrolladores experimentados aceleren su trabajo y que cualquier persona cuente con un asistente confiable. No busca reemplazar la experiencia humana ni el estudio profundo, sino potenciar tus capacidades y darte respaldo cuando lo requieras. Piénsalo como una herramienta en tu caja de utilidades, como un corrector ortográfico para tus ideas o una calculadora para tu lógica. Te ayuda a trabajar con mayor eficiencia y seguridad, sabiendo que la ayuda está a solo un mensaje de distancia.

Más allá de los casos de uso específicos que hemos mencionado, el bot puede colaborar en muchas otras tareas: generar pruebas unitarias, refactorizar código, explicar mensajes de error crípticos, sugerir patrones de diseño, revisar código en busca de mejoras potenciales, traducir código entre diferentes lenguajes de programación, crear documentación y hacer lluvias de ideas para nuevos proyectos. Debido a que OpenCode está diseñado específicamente para labores de desarrollo, sus respuestas están enfocadas en código y conceptos técnicos, resultando mucho más útil para estos propósitos que un chatbot de uso general. Esta especialización garantiza que obtengas ayuda relevante y práctica en lugar de respuestas genéricas o fuera de tema.

En conclusión, este bot no es una simple demostración técnica; es una herramienta práctica que puede transformar genuinamente tu forma de trabajar y aprender. Al finalizar esta guía, serás capaz de configurarlo, usarlo de forma efectiva y adaptarlo a tu propio flujo de trabajo. Los ejemplos presentados son solo el comienzo: una vez que empieces a utilizarlo, descubrirás muchas más formas en las que puede asistirte en tus actividades cotidianas de desarrollo.

![Portada: Bot de Telegram con OpenCode SDK](/images/blog/opencode-telegram-2.jpg)

## Lo que Necesitas Saber Primero

Antes de sumergirnos en el código, establezcamos algunos conceptos fundamentales. Un bot de Telegram es como un asistente virtual que reside dentro de la plataforma de Telegram. Puedes enviarle mensajes y él responde de manera automática. El bot en sí es simplemente un programa que se ejecuta en una computadora (puede ser tu laptop o un servidor). En nuestro caso, ese programa está escrito en Node.js, que es un entorno para ejecutar JavaScript fuera del navegador web.

Desglosemos estos conceptos con mayor detalle. Un bot de Telegram es una cuenta especial capaz de interactuar con los usuarios automáticamente. Cuando creas un bot, BotFather te proporciona un token exclusivo, que funciona como una contraseña para identificar a tu bot ante los servidores de Telegram. Con este token, tu programa puede iniciar sesión como el bot y acceder al sistema de mensajería de Telegram. El bot puede recibir mensajes de los usuarios, enviar respuestas y ejecutar diversas acciones como editar mensajes, enviar documentos o gestionar interacciones según su configuración. Sin embargo, el bot no hace nada por sí mismo: depende totalmente del código que escribas para definir su comportamiento. Imagínalo como una marioneta: tú escribes los hilos que determinan sus movimientos, mientras que Telegram provee el escenario y la audiencia.

OpenCode es una plataforma de asistencia de programación potenciada por IA. Proporciona inteligencia artificial orientada a tareas de desarrollo: escribir código, explicar conceptos, analizar archivos y mucho más. El SDK de OpenCode es una librería que permite a otros programas comunicarse con los servidores de OpenCode. Nuestro bot utiliza esta librería para enviar tus instrucciones a OpenCode y obtener las respuestas.

Para entender OpenCode, imagínalo como un programador experto que nunca duerme y al que puedes acudir para cualquier tarea de código. Cuando envías una solicitud al servidor de OpenCode, este servidor utiliza modelos avanzados de IA para generar respuestas contextualizadas y de alto valor. OpenCode está optimizado para flujos de trabajo de desarrollo, lo que significa que comprende la sintaxis del código, los patrones habituales y las mejores prácticas. A diferencia de un chatbot genérico que podría dar consejos vagos sobre código, OpenCode está entrenado para brindar asistencia técnica precisa. Puede leer archivos, ejecutar comandos en un entorno controlado y mantener el hilo de una conversación sobre un problema de desarrollo específico. El SDK (Software Development Kit) es el conjunto de herramientas que facilita la comunicación entre tu bot y el servidor de OpenCode. Sin el SDK, tendrías que construir manualmente las solicitudes de red, dar formato a los datos según las especificaciones de OpenCode y procesar las respuestas; el SDK resuelve todo eso ofreciendo métodos sencillos que puedes invocar directamente.

La aplicación de Node.js que construiremos se sitúa en el medio. Recibe los mensajes de Telegram, utiliza el SDK de OpenCode para procesarlos y devuelve los resultados. Piénsalo como un traductor que domina tanto el lenguaje de Telegram como el de OpenCode.

Este rol de intermediario es esencial. Telegram y OpenCode no pueden comunicarse entre sí de forma directa; son sistemas independientes con sus propios protocolos y formatos de datos. Nuestra aplicación en Node.js actúa como el puente entre ambos. Cuando un usuario envía un mensaje al bot en Telegram, ese mensaje llega a nuestra aplicación. La aplicación examina el contenido para determinar qué desea el usuario y luego reenvía la información pertinente a OpenCode mediante el SDK. OpenCode procesa la solicitud y devuelve la respuesta. La aplicación toma esa respuesta y se la entrega al usuario a través de Telegram. Todo este ciclo ocurre habitualmente en pocos segundos, generando la sensación de un sistema unificado. No obstante, detrás de escena intervienen múltiples pasos, redes y piezas de software colaborando. Comprender este flujo te ayuda a identificar rápidamente dónde podría originarse un problema: si el bot no puede conectarse a Telegram, si el servidor de OpenCode no responde o si existe un error en la lógica del bot.

Node.js es la plataforma que utilizamos para construir este puente. Pero, ¿qué es exactamente Node.js? Node.js es un entorno de ejecución que permite correr código JavaScript directamente en el sistema operativo de una computadora, no solo dentro de un navegador web. Tradicionalmente, JavaScript se ejecutaba en navegadores como Chrome o Firefox para hacer páginas interactivas. Node.js nos permite utilizar ese mismo lenguaje para programación de propósito general, al igual que lo haríamos con Python o Java. Esto es relevante porque JavaScript es uno de los lenguajes más populares del mundo y gran cantidad de desarrolladores ya lo dominan. Usar Node.js nos permite escribir el bot con un lenguaje familiar y aprovechar un ecosistema gigantesco de librerías. Node.js también destaca en la creación de aplicaciones de red porque gestiona múltiples conexiones de manera eficiente sin requerir hilos múltiples tradicionales. Su naturaleza asíncrona permite que nuestro bot espere respuestas de Telegram o de OpenCode sin congelar el programa, pudiendo atender a varios usuarios al mismo tiempo.

¿Por qué resulta esto tan conveniente? Porque JavaScript es ampliamente conocido, cuenta con un catálogo inmenso de librerías y Node.js simplifica la construcción de aplicaciones de red. Con Node.js podemos escuchar solicitudes entrantes, emitir peticiones a otros servicios, gestionar archivos locales y coordinar todas las operaciones del bot.

Node.js viene acompañado de npm (Node Package Manager), que funciona como una tienda de componentes y librerías de código. Cuando necesitamos comunicarnos con Telegram, no programamos toda la capa de comunicación desde cero: instalamos una librería llamada `node-telegram-bot-api` que ya conoce todos los detalles de conexión con los servidores de Telegram. Esto ahorra muchísimo tiempo y garantiza robustez.

Profundicemos en npm y los paquetes de software, ya que son la base del desarrollo moderno en JavaScript. npm cumple dos funciones esenciales: es una herramienta de línea de comandos para instalar y gestionar dependencias, y es un repositorio en línea masivo donde se publican esas librerías (el registro de npm). Cuando deseas incorporar funcionalidades a tu proyecto en Node.js (por ejemplo, conectarte a Telegram), no reinventas la rueda: descargas un paquete que ya implementa esa funcionalidad. Los paquetes son módulos de código reutilizables compartidos por desarrolladores de todo el mundo. En nuestro bot utilizamos tres paquetes principales: `dotenv` para gestionar variables de entorno, `node-telegram-bot-api` para la comunicación con Telegram y `@opencode-ai/sdk` para la integración con OpenCode. Cada uno es mantenido por su respectivo equipo y aporta estabilidad y especialización a nuestro proyecto. El uso de estos paquetes nos permite concentrarnos en la lógica única del bot en lugar de perder tiempo en detalles de bajo nivel como solicitudes HTTP manuales, protocolos de autenticación o parseo de archivos.

Pasemos ahora a las APIs, que representan el estándar de comunicación entre distintos sistemas de software. Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas que define cómo un programa puede solicitar servicios a otro. Es como el menú de un restaurante: el menú te indica qué platillos puedes pedir y cómo personalizarlos. Cuando haces tu pedido, la cocina (el otro programa) prepara la comida y te la entrega. De manera similar, cuando nuestro bot requiere algo de Telegram o de OpenCode, envía una solicitud de API con un formato específico y el servidor responde con datos estructurados. Ambas partes acuerdan este formato de antemano para poder entenderse. Las APIs están presentes en todo el software moderno: tu aplicación del clima usa una API para consultar datos meteorológicos, el mapa de tu teléfono consulta una API geográfica y tu navegador usa APIs para obtener sitios web. En nuestro bot interactuamos con dos APIs: la Bot API de Telegram y la API de OpenCode. Cada una cuenta con sus propios puntos de enlace (endpoints o URLs específicas), métodos de solicitud, requisitos de autenticación y estructuras de respuesta. Las librerías que utilizamos se encargan de gestionar estos detalles de bajo nivel para que podamos trabajar directamente con objetos y métodos sencillos en JavaScript.

Comprender las APIs es fundamental porque son el puente que conecta sistemas heterogéneos en internet.

En resumen, antes de escribir una sola línea de código, debemos tener claro que nuestro bot consiste en un programa en Node.js ubicado entre Telegram y OpenCode, utilizando librerías específicas para gestionar la comunicación. El bot se ejecuta en tu computadora o servidor, verificando constantemente la llegada de nuevos mensajes en Telegram, decidiendo para cada mensaje qué acción tomar y respondiendo directamente o consultando a la IA de OpenCode. Todo esto depende de una correcta configuración de tokens, URLs y claves de API, aspectos que abordaremos en las siguientes secciones.

![Primeros Pasos con Ejemplos Prácticos](/images/blog/opencode-telegram-1.jpg)

## Entendiendo los Conceptos Clave en Términos Cotidianos

Construyamos una base sólida explicando los conceptos clave en un lenguaje accesible. No te preocupes si algunos términos son nuevos para ti; los exploraremos en profundidad. El objetivo es hacer que el funcionamiento interno del bot sea claro y tangible, de modo que cuando revises el código o los archivos de configuración más adelante, sepas exactamente qué hace cada componente.

### ¿Qué es Realmente un Bot?

Un bot es simplemente un programa informático diseñado para automatizar tareas, como un robot pero en formato de software. En nuestro caso, el bot vive en una computadora (tu laptop, un servidor local o una máquina en la nube) y permanece a la espera de mensajes provenientes de Telegram. Cuando envías un mensaje a tu bot en Telegram, dicho mensaje viaja por internet hacia los servidores de Telegram. Tu bot, que verifica periódicamente si hay nuevos mensajes, detecta tu texto, interpreta lo que necesitas, ejecuta el procesamiento correspondiente y te envía una respuesta a través de Telegram directamente a tu teléfono.

Imagínalo como tener un asistente personal sentado en un escritorio junto a un teléfono. Tú llamas a ese asistente (le envías un mensaje de Telegram), el asistente atiende, comprende tu solicitud, realiza el trabajo necesario y te devuelve la llamada con la respuesta. El asistente no duerme, no se cansa y puede atender múltiples solicitudes a lo largo del día. Sin embargo, a diferencia de un asistente humano, este asistente sigue estrictamente las instrucciones escritas en tu código. No posee sentido común más allá de lo que tú programas y no se desvía de sus directivas a menos que le otorgues explícitamente permiso para consultar a una IA. En nuestro bot, el asistente (el programa en Node.js) gestiona comandos simples como `/time` o `/joke`, pero cuando encuentra el comando `/opencode`, transfiere la solicitud a la IA de OpenCode para generar una respuesta avanzada. El bot actúa esencialmente como un director de tráfico, derivando cada mensaje al manejador adecuado.

Es importante comprender que un bot no es un ser consciente; es pura lógica y datos. Cuando decimos que el bot "interpreta lo que deseas", lo que ocurre en realidad es un proceso de coincidencia de patrones (pattern matching): el bot examina el texto de tu mensaje y verifica si coincide con determinados patrones definidos (como comenzar con `/start` o `/opencode`). Según el patrón que coincida, el bot ejecuta un bloque de código específico diseñado para ese comando. Este comportamiento es determinista: el mismo mensaje siempre producirá la misma respuesta, a menos que la lógica involucre aleatoriedad (como el comando `/joke`) o consulte a una IA que genere salidas dinámicas en cada ocasión. El bot no aprende ni cambia con el tiempo a menos que modifiques su código fuente, lo cual es excelente para garantizar estabilidad y predictibilidad en su operación.

### ¿Qué es Node.js y por qué lo Usamos?

Node.js es un entorno que permite ejecutar código JavaScript directamente en una computadora, sin requerir un navegador web. Tradicionalmente, JavaScript funcionaba únicamente dentro de navegadores como Chrome o Firefox para añadir interactividad a las páginas. Node.js nos permite utilizar ese mismo lenguaje para programación de propósito general, al igual que Python, Ruby o Java.

¿Por qué resulta esto tan útil? Porque JavaScript es un lenguaje universalmente extendido, cuenta con un ecosistema gigantesco de librerías y Node.js facilita enormemente la creación de aplicaciones orientadas a red como nuestro bot. Con Node.js podemos escuchar conexiones entrantes, realizar peticiones hacia otros servicios, manipular el sistema de archivos y coordinar todas las operaciones que nuestro asistente requiere.

Profundicemos en la naturaleza de Node.js. JavaScript fue creado originalmente para brindar dinamismo a los sitios web en el navegador. En 2009, Ryan Dahl creó Node.js al tomar el motor V8 de Google (el componente de Chrome que compila y ejecuta JavaScript a gran velocidad) e integrarlo en un entorno independiente capaz de ejecutarse sobre el sistema operativo. Esto abrió la posibilidad de escribir aplicaciones completas en JavaScript para servidores, herramientas de línea de comandos y sistemas automatizados.

Node.js incluye módulos nativos para tareas comunes: lectura y escritura de archivos en disco (`fs`), gestión de rutas (`path`), creación de servidores y conexiones de red (`http`, `https`, `net`) e interacción con el sistema operativo (`os`, `process`). Pero su verdadero poder radica en su ecosistema de paquetes gestionado por npm. Gracias a la enorme comunidad de JavaScript, existen miles de librerías prediseñadas listas para integrarse en cualquier proyecto. Esto significa que para comunicarnos con Telegram no tenemos que implementar todo el protocolo de la API desde cero: simplemente instalamos una librería probada por miles de desarrolladores que ya resuelve los casos límite y errores de red.

Otro pilar clave de Node.js es su modelo de entrada y salida (I/O) asíncrono y no bloqueante. Analicemos esto con detenimiento. Las operaciones de I/O comprenden acciones como leer un archivo del disco, hacer una consulta a una base de datos o esperar la respuesta de una solicitud de red. En los modelos tradicionales sincrónicos, cuando un programa solicita leer un archivo o hacer una petición de red, el hilo de ejecución se detiene (se bloquea) por completo hasta recibir los datos. Mientras espera, el programa no puede realizar ninguna otra tarea. En un servidor que atiende a múltiples usuarios, esto representaría un cuello de botella crítico. Node.js utiliza una arquitectura basada en eventos y un bucle de eventos (event loop): cuando solicita una operación de red, inicia la petición y continúa ejecutando otras tareas de inmediato. Cuando la respuesta de red llega, Node.js emite un evento que activa la función correspondiente (callback o resolución de promesa) para continuar procesando esa solicitud. Esto permite que un único proceso de Node.js gestione miles de operaciones concurrentes de manera sumamente eficiente sin la sobrecarga de múltiples hilos pesados. Para nuestro bot, esto significa que mientras espera una respuesta del servidor de OpenCode (lo cual puede tomar algunos segundos), puede continuar recibiendo y respondiendo mensajes de otros usuarios en Telegram sin congelarse.

Node.js se complementa con npm, que funciona como un catálogo global de librerías. Cuando necesitamos integrar Telegram, instalamos `node-telegram-bot-api`, ahorrando tiempo y asegurando confiabilidad.

Un paquete o módulo en Node.js es simplemente un bloque de código reutilizable acompañado de un archivo `package.json` que describe su contenido, versiones y dependencias. Al ejecutar `npm install`, las dependencias se descargan en la carpeta `node_modules` de tu proyecto. Luego puedes importarlas en tu código usando `import` (en módulos ES) o `require()` (en CommonJS). Esta modularidad fomenta la reutilización de código de alta calidad. En conjunto, Node.js y npm constituyen una plataforma robusta y moderna para el desarrollo en el lado del servidor.

### ¿Qué es una API?

API son las siglas de Interfaz de Programación de Aplicaciones (Application Programming Interface). Se trata de un contrato formal que establece: "Si me envías una solicitud con esta estructura específica, yo te devolveré una respuesta con este formato determinado". Las APIs son el mecanismo estándar mediante el cual diferentes sistemas de software se comunican entre sí.

Telegram ofrece una API que permite a los bots recibir y enviar mensajes. OpenCode ofrece una API que permite a las aplicaciones solicitarle a su IA la generación de respuestas y ejecución de herramientas. Nuestro bot interactúa con ambas APIs: envía peticiones a la API de Telegram para capturar mensajes y despachar respuestas, y envía peticiones a la API de OpenCode para procesar las consultas de desarrollo.

Visualicemos las APIs con la clásica analogía del restaurante. Imagina que estás en un restaurante: tú, el comensal, representas una aplicación cliente. La cocina representa el servidor donde se procesan los recursos. Tú no puedes entrar directamente a la cocina a preparar tu comida; debes interactuar a través del mesero, que representa la API. Realizas tu pedido siguiendo las opciones del menú (los endpoints y parámetros permitidos). El mesero lleva tu solicitud a la cocina, la cocina elabora el platillo y el mesero te lo entrega en tu mesa. El menú y el protocolo del mesero constituyen la API: definen qué puedes solicitar y cómo recibirás el resultado. En el software ocurre exactamente lo mismo: una aplicación cliente hace una petición HTTP a un servidor siguiendo las reglas acordadas y el servidor responde con la información requerida.

En el caso de nuestro bot, Telegram expone su Bot API a través de endpoints HTTP. Por ejemplo, para obtener las últimas actualizaciones (mensajes nuevos) se consulta el endpoint `getUpdates`, y para emitir una respuesta se invoca `sendMessage` pasando parámetros como `chat_id` y `text`. El servidor de Telegram procesa estas peticiones y devuelve datos en formato JSON (JavaScript Object Notation), un estándar de texto ligero y legible basado en pares clave-valor que se convierte fácilmente en objetos de JavaScript.

OpenCode expone de forma similar su propia API. El servidor de OpenCode se ejecuta en un puerto específico (por defecto el puerto 4096) y escucha solicitudes HTTP en rutas como `/session` para crear sesiones de trabajo, `/session/{id}/prompt` para enviar instrucciones a la IA y `/session/{id}` para liberar y eliminar sesiones. Cuando llamamos a estos endpoints con los datos apropiados, el servidor interactúa con los modelos de IA y devuelve las respuestas en JSON. El SDK de OpenCode simplifica todo esto: en lugar de configurar llamadas HTTP a mano, invocamos métodos claros como `opencodeClient.session.create()`, encargándose la librería de enviar la petición, recibir los datos y convertirlos en objetos nativos de JavaScript.

Las APIs son la base de la interoperabilidad en internet. Permiten que sistemas creados por distintos equipos, en diferentes lenguajes y sobre infraestructuras variadas, colaboren de forma fluida. Conocer su existencia y funcionamiento resulta indispensable para depurar problemas de red, revisar códigos de estado HTTP o gestionar límites de peticiones (rate limits) y credenciales de autenticación.

### ¿Qué es OpenCode?

OpenCode es una plataforma de asistencia de programación impulsada por inteligencia artificial. A diferencia de soluciones de chat genéricas, OpenCode está concebido específicamente para resolver desafíos de desarrollo de software. Puede escribir código, explicar conceptos arquitectónicos, analizar repositorios completos, ejecutar comandos de terminal, editar archivos y mantener el contexto técnico de un proyecto. Es el equivalente a tener un ingeniero senior sentado a tu lado listo para colaborar.

La plataforma de OpenCode consta de un servidor que ejecuta los modelos de IA y proporciona herramientas para manipulación de archivos, ejecución de comandos y análisis de código. Dicho servidor expone una API que los clientes utilizan para abrir sesiones e interactuar con la IA.

OpenCode se distingue de los chats tradicionales de IA porque está diseñado desde su núcleo para entornos de desarrollo. Comprende la estructura del código fuente, puede inspeccionar archivos de tu equipo, ejecutar comandos en la terminal (bajo tu autorización) y conservar el contexto a lo largo de una sesión de trabajo.

Exploremos qué hace que OpenCode sea tan potente. Cuando interactúas con OpenCode, operas dentro de una "sesión" que tiene acceso a herramientas especializadas. Estas herramientas incluyen la lectura y escritura de archivos en tu espacio de trabajo, la ejecución de comandos en la terminal (como correr un script de pruebas o consultar el estado de Git) y la búsqueda semántica en el código. La IA puede decidir autónomamente invocar estas herramientas según lo requiera tu instrucción. Por ejemplo, si le preguntas "¿Qué archivos tengo en mi directorio actual?", la IA puede recurrir a la herramienta de listado de archivos para verificarlo. Si le pides corregir un error en un archivo, puede leer el contenido, analizarlo, formular la solución y aplicar el cambio mediante la herramienta de edición. Esto convierte a OpenCode en un colaborador activo en tu flujo de trabajo de programación.

La arquitectura de OpenCode incluye un servidor que puedes ejecutar localmente en tu propia máquina o en un servidor remoto bajo tu control. Este servidor carga la configuración definida en `opencode.json` (que especifica qué proveedores de IA y qué agentes están disponibles) y expone su API sobre HTTP. Cuando usamos el SDK de OpenCode en nuestro bot de Telegram, nos conectamos a la API de ese servidor. El SDK abstrae la complejidad de la comunicación: inicializamos un cliente con la URL base, creamos una sesión, enviamos el prompt y obtenemos la respuesta técnica directamente.

Un concepto esencial en OpenCode son los **agentes**. Un agente es una personalidad especializada de IA con sus propias directivas, herramientas asignadas y niveles de permisos. Por ejemplo, puede existir un agente `documentor` optimizado para redactar documentación técnica clara, un agente `gitmasters` especializado en operaciones de Git o un agente general para programación diaria. El archivo de configuración `opencode.json` define estos agentes. Al iniciar una sesión, podemos especificar con qué agente deseamos trabajar.

OpenCode también ofrece sesiones persistentes donde la IA recuerda todo el historial de la conversación dentro de ese contexto, permitiendo diálogos continuos y refinamiento progresivo del código. En nuestra implementación base del bot utilizamos sesiones desechables (se crea una sesión, se envía la consulta, se obtiene la respuesta y se elimina la sesión), manteniendo cada comando `/opencode` independiente. Más adelante veremos cómo extender esto hacia sesiones persistentes.

OpenCode se conecta a múltiples proveedores de IA mediante una capa de abstracción. La configuración de proveedores en `opencode.json` le indica a OpenCode cómo conectarse a servicios como OpenRouter, Anthropic u OpenAI. Esto evita el bloqueo con un solo proveedor: puedes cambiar de modelo o de proveedor simplemente editando un archivo de configuración, sin tocar una sola línea del código de tu bot.

## Estructura del Proyecto

Revisemos los archivos que componen este proyecto y la función de cada uno. Conocer la estructura de un proyecto de software es como conocer la distribución de una casa: cada habitación tiene un propósito y saber dónde está cada elemento te permite trabajar con orden y seguridad. A continuación se presenta la estructura típica de directorios:

```text
project-root/
├── .env                    # Archivo de configuración secreta
├── .gitignore              # Archivos excluidos del control de versiones
├── package.json            # Metadatos del proyecto y dependencias
├── package-lock.json       # Versiones exactas de dependencias (autogenerado)
├── opencode.json           # Configuración de agentes y proveedores de OpenCode
├── bot.js                  # Código principal de la aplicación
├── prompts/               # Plantillas de instrucciones para agentes
└── images/                # Imágenes de documentación
```

### Tabla de Referencia de Archivos del Proyecto

Para una consulta rápida sobre el propósito y tipo de cada archivo, consulta esta tabla:

| Archivo / Directorio | Propósito | Tipo |
|---|---|---|
| `.env` | Configuración secreta (claves de API, tokens) | Configuración |
| `.gitignore` | Archivos excluidos de Git | Configuración |
| `package.json` | Metadatos del proyecto y dependencias de npm | Configuración |
| `package-lock.json` | Registro de versiones exactas de dependencias | Autogenerado |
| `opencode.json` | Configuración de agentes y proveedores de OpenCode | Configuración |
| `bot.js` | Código fuente principal del bot | Código Fuente |
| `prompts/` | Plantillas de prompts del sistema para los agentes | Directorio |
| `images/` | Imágenes utilizadas en la documentación | Directorio |

Exploremos cada uno de estos elementos en profundidad:

**bot.js** es el corazón del proyecto. Es el programa principal que ejecuta el bot. Es un archivo de JavaScript que contiene toda la lógica operativa: carga de configuración, registro de oyentes de eventos, procesamiento de mensajes entrantes y llamadas al SDK de OpenCode. Cuando ejecutas `node bot.js`, Node.js lee y ejecuta este archivo. Comienza con las sentencias `import` para incorporar las librerías externas, define funciones auxiliares y manejadores de comandos, y pone en marcha el bot manteniéndolo en ejecución continua. Aquí pasarás la mayor parte de tu tiempo cuando quieras añadir nuevos comandos o personalizar el comportamiento del bot. El código está escrito en JavaScript moderno (módulos ES) y utiliza el patrón `async/await` para gestionar las operaciones asíncronas de red con total claridad.

**package.json** es el manifiesto del proyecto en Node.js. Escrito en formato JSON, describe la información fundamental: el tipo de sistema de módulos (`"type": "module"` para módulos ES), las dependencias externas requeridas y los scripts de ejecución abreviados. Al ejecutar `npm install`, npm lee este archivo e instala todas las librerías listadas dentro de la carpeta `node_modules`. La sección `scripts` define atajos: `"start": "node bot.js"` permite iniciar la aplicación simplemente ejecutando `npm start`.

**opencode.json** es el archivo de configuración que lee el SDK de OpenCode para conocer qué proveedores de IA utilizar y cómo configurar a sus agentes. OpenCode lo utiliza para definir los agentes (especialistas de IA) y los proveedores (conexiones a servicios de modelos de lenguaje). Al inicializar el cliente con `createOpencodeClient(config)`, el SDK busca automáticamente este archivo en el directorio de trabajo y carga las definiciones de agentes, modelos, herramientas y permisos. Puedes modificar este archivo para incorporar nuevos modelos de IA o ajustar los permisos de las herramientas sin necesidad de modificar `bot.js`.

**.env** almacena las variables de entorno, es decir, valores de configuración confidenciales que nunca deben quedar escritos en el código fuente. Contiene tu token del bot de Telegram y la URL del servidor de OpenCode. Es un archivo de texto plano con el formato `CLAVE=valor`. La librería `dotenv` lee este archivo al arrancar la aplicación y carga sus valores en el objeto global `process.env`. Al incluir `.env` en `.gitignore`, evitas que tus credenciales secretas se suban al repositorio de control de versiones.

**node_modules/** es el directorio donde npm descarga e instala todas las dependencias y sus submódulos. Se genera automáticamente al ejecutar `npm install` y puede contener miles de archivos. Nunca debe editarse manualmente ni subirse a Git, ya que se reconstruye en cualquier momento a partir de `package.json` y `package-lock.json`.

**package-lock.json** es generado automáticamente por npm para fijar las versiones exactas de cada paquete y subdependencia instalada. Esto garantiza la reproducibilidad absoluta: cualquier persona que clone el repositorio e instale dependencias obtendrá exactamente el mismo árbol de paquetes, evitando discrepancias de compatibilidad.

**.gitignore** le indica a Git qué archivos y carpetas debe ignorar al rastrear cambios en el repositorio. En este proyecto se incluyen elementos como `node_modules/`, `.env` y archivos temporales o registros de depuración, manteniendo el repositorio limpio, ligero y seguro.

El directorio **prompts/** alberga archivos de texto plano con las instrucciones del sistema para los agentes de OpenCode (por ejemplo, `./prompts/documentor.txt`). Estas instrucciones definen el tono, restricciones, objetivos y formato de salida del agente. Separar los prompts en archivos independientes permite editarlos cómodamente sin alterar la configuración estructural de `opencode.json`.

El directorio **images/** contiene las imágenes y capturas utilizadas para documentar el proyecto.

### La Estructura del Proyecto en Profundidad

Imaginemos el proyecto como una cocina profesional:
- El archivo `bot.js` es el chef principal que coordina y ejecuta todas las preparaciones.
- El archivo `package.json` es el libro de recetas que enumera los ingredientes y utensilios requeridos.
- El archivo `opencode.json` es el manual de procedimientos que instruye a los ayudantes de cocina (agentes de IA) sobre cómo elaborar especialidades concretas.
- El archivo `.env` es la tarjeta de seguridad donde se guardan las claves de acceso a los almacenes de insumos especiales.
- La carpeta `node_modules` es la despensa donde se almacenan todos los ingredientes adquiridos mediante `npm install`.

Cuando ejecutas `npm start`, ocurre la siguiente secuencia paso a paso:

1. Node.js lee `package.json` para reconocer la sintaxis de módulos ES (`"type": "module"`) y ubicar el comando de inicio en la propiedad `scripts.start`.
2. Node.js carga en memoria los módulos importados en la cabecera de `bot.js` desde la carpeta `node_modules` (`dotenv`, `node-telegram-bot-api`, `@opencode-ai/sdk`).
3. La función `dotenv.config()` lee el archivo `.env` en el directorio de trabajo e inyecta las variables en `process.env`.
4. El código de `bot.js` valida la existencia del token de Telegram (`TELEGRAM_BOT_API_KEY`), inicializa el cliente de OpenCode con `initOpencode()` y prepara los escuchadores de eventos.
5. El bot establece la conexión con Telegram e inicia el ciclo de sondeo (polling) para recibir mensajes.
6. El bot queda listo para recibir instrucciones de los usuarios y enrutar las solicitudes técnicas hacia el servidor de OpenCode.

### Diagnóstico de Errores Comunes de Configuración

Si algún elemento falta o está mal configurado, el bot lo reflejará con síntomas específicos:

- **Falta `"type": "module"` en package.json**: Node.js arrojará un error de sintaxis al procesar las sentencias `import`.
- **Falta la carpeta `node_modules`**: El sistema mostrará un error del tipo `Cannot find module 'dotenv'`. Solución: ejecutar `npm install`.
- **Falta `.env` o el token de Telegram**: El bot se detendrá de inmediato mostrando el mensaje `TELEGRAM_BOT_API_KEY not found in .env file`.
- **Falta `opencode.json` o tiene formato JSON inválido**: La inicialización del cliente de OpenCode fallará y `opencodeClient` permanecerá en `null`.
- **El servidor de OpenCode no está encendido o la URL es incorrecta**: El cliente se inicializará, pero al enviar un comando `/opencode` la petición fallará con un error de red (`ECONNREFUSED` o `fetch failed`).
- **Token de Telegram erróneo**: Telegram rechazará las peticiones de sondeo y se disparará el evento `polling_error`.
- **Falta `.gitignore`**: Riesgo de subir accidentalmente el archivo `.env` o la carpeta `node_modules` a repositorios públicos.

## Entendiendo package.json a Fondo

Revisemos el contenido completo de `package.json` y analicemos sus implicaciones técnicas:

```json
{
  "type": "module",
  "dependencies": {
    "dotenv": "^17.3.1",
    "node-telegram-bot-api": "^0.67.0",
    "@opencode-ai/sdk": "^1.2.26"
  },
  "scripts": {
    "start": "node bot.js"
  }
}
```

La declaración `"type": "module"` define que el proyecto utiliza el estándar moderno de módulos de ECMAScript (ESM), permitiendo el uso de `import` y `export` en lugar del formato tradicional CommonJS (`require` y `module.exports`).

El objeto `"dependencies"` enumera las tres librerías esenciales del proyecto junto a sus versiones semánticas (SemVer). El símbolo de intercalación (`^`) indica compatibilidad con versiones superiores que no alteren el número mayor (MAJOR), asegurando la recepción de parches y mejoras menores sin introducir cambios incompatibles.

### Las Tres Dependencias en Detalle:

1. **dotenv** (`^17.3.1`): Carga automáticamente las variables definidas en el archivo `.env` dentro de `process.env` al iniciar la aplicación, gestionando comentarios, espacios y valores entrecomillados.
2. **node-telegram-bot-api** (`^0.67.0`): Wrapper completo sobre la API de bots de Telegram. Gestiona el ciclo de sondeo largo (long polling), la reconexión automática ante fallas de red, el parseo de mensajes y el envío de respuestas formateadas.
3. **@opencode-ai/sdk** (`^1.2.26`): Librería cliente oficial para interactuar con la API del servidor de OpenCode. Ofrece métodos estructurados para crear sesiones, enviar prompts a los modelos, consultar agentes y liberar recursos sin lidiar manualmente con peticiones HTTP en bajo nivel.

### Tabla Resumen de Dependencias

| Paquete | Versión | Propósito |
|---|---|---|
| `dotenv` | `^17.3.1` | Cargar variables de entorno desde `.env` hacia `process.env` |
| `node-telegram-bot-api` | `^0.67.0` | Comunicación con la Bot API de Telegram (sondeo y envío de mensajes) |
| `@opencode-ai/sdk` | `^1.2.26` | Interfaz con el servidor de OpenCode (sesiones, prompts y agentes) |

## Entendiendo opencode.json a Fondo

El archivo `opencode.json` define la configuración técnica del SDK de OpenCode:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "documentor": { ... },
    "gitmasters": { ... }
  },
  "provider": {
    "openrouter-hunter-alpha": { ... },
    "openrouter-nemotron": { ... },
    "openrouter-stepfun": { ... },
    "openrouter-trinity": { ... }
  }
}
```

La propiedad `$schema` permite que editores de código como VS Code validen la estructura del archivo, muestren autocompletado y describan cada propiedad al pasar el cursor sobre ella.

La sección `agent` define agentes especializados:

- **documentor**: Especializado en redactar artículos y explicaciones claras para audiencias no técnicas. Posee una temperatura de 0.8 (mayor creatividad) y carga sus instrucciones desde `./prompts/documentor.txt`.
- **gitmasters**: Especializado en operaciones autónomas de Git. Posee una temperatura de 0.3 (alta precisión determinista) y requiere confirmación previa antes de descargar contenidos web (`"webfetch": "ask"`).

### Tabla Comparativa de Configuración de Agentes

| Propiedad | documentor | gitmasters |
|---|---|---|
| **Descripción** | Redacción accesible para audiencias generales | Operaciones de Git autónomas |
| **Modo** | subagent | subagent |
| **Modelo** | `stepfun/step-3.5-flash:free` | `stepfun/step-3.5-flash:free` |
| **Temperatura** | 0.8 (creativo) | 0.3 (preciso) |
| **Bash** | allow | allow |
| **Write** | allow | allow |
| **Read** | allow | allow |
| **WebFetch** | allow | ask |
| **Herramientas** | Bash, Glob, Grep, Read, Edit, Write, Task, WebFetch | Bash, Glob, Grep, Read, Edit, Write, Task, WebFetch |

### Herramientas y Sistema de Permisos

Las herramientas representan las acciones concretas que la IA puede ejecutar:
- `Bash`: Ejecución de comandos de terminal (compilar, ejecutar scripts, consultar git).
- `Read`: Lectura del contenido de archivos en el espacio de trabajo.
- `Write` y `Edit`: Creación y modificación de archivos.
- `Glob` y `Grep`: Búsqueda de archivos por nombre o búsqueda de patrones en el código.
- `WebFetch`: Descarga de páginas y recursos web.
- `Task`: Descomposición de tareas complejas en subtareas delegadas.

El objeto `permission` establece el nivel de autorización para cada herramienta:
- `allow`: La IA puede ejecutar la herramienta de forma directa.
- `ask`: La IA debe solicitar confirmación al usuario antes de ejecutar la acción.
- `deny`: La herramienta queda completamente deshabilitada.

### Configuración de Proveedores (Providers)

La sección `provider` configura el acceso a los modelos de lenguaje mediante OpenRouter:

| Proveedor | Nombre | URL Base | Paquete npm |
|---|---|---|---|
| `openrouter-hunter-alpha` | OpenRouter Hunter Alpha | `https://openrouter.ai/api/v1` | `@ai-sdk/openai-compatible` |
| `openrouter-nemotron` | OpenRouter Nemotron | `https://openrouter.ai/api/v1` | `@ai-sdk/openai-compatible` |
| `openrouter-stepfun` | OpenRouter Stepfun | `https://openrouter.ai/api/v1` | `@ai-sdk/openai-compatible` |
| `openrouter-trinity` | OpenRouter Trinity | `https://openrouter.ai/api/v1` | `@ai-sdk/openai-compatible` |

> [!IMPORTANT]
> **Seguridad de Claves de API**: Nunca escribas tus claves de API reales directamente en `opencode.json` si vas a compartir o versionar el archivo. Utiliza referencias a variables de entorno como `"apiKey": "${OPENROUTER_API_KEY}"` para mantener tus credenciales protegidas.

## Entendiendo .env a Fondo

El archivo `.env` almacena las variables de entorno locales:

```env
# Configuración del bot de Telegram
TELEGRAM_BOT_API_KEY=tu_token_de_telegram_aqui
# URL del servidor de OpenCode (local o remoto)
OPENCODE_SERVER_URL=http://localhost:4096
```

### Tabla de Referencia Rápida de Variables de Entorno

| Variable | Valor de Ejemplo | Requerida | Descripción |
|---|---|---|---|
| `TELEGRAM_BOT_API_KEY` | `1234567890:ABCdefGHI...` | Sí | Token secreto entregado por BotFather para autenticar el bot |
| `OPENCODE_SERVER_URL` | `http://localhost:4096` | No | URL del servidor de OpenCode (por defecto `http://localhost:4096`) |

### Razones para Utilizar Archivos .env:

1. **Seguridad**: Al estar incluido en `.gitignore`, tus secretos nunca se publican en repositorios compartidos.
2. **Flexibilidad de Configuración**: Permite alternar fácilmente entre entornos de desarrollo, pruebas y producción sin tocar el código fuente.
3. **Separación de Responsabilidades**: El código define la lógica de negocio y la configuración define los recursos a los que se conecta.
4. **Facilidad de Mantenimiento**: Cambiar un puerto o un token requiere solo editar una línea en el archivo de texto y reiniciar el proceso.

## El Componente Principal: bot.js

Llegamos al núcleo de la aplicación. `bot.js` orquesta todas las piezas a través de una arquitectura dirigida por eventos organizada en cinco capas lógicas:

1. **Capa de Configuración**: Importa módulos y carga las variables de entorno.
2. **Capa de Inicialización**: Valida los tokens y crea las instancias del bot de Telegram y del cliente de OpenCode.
3. **Capa de Registro de Eventos**: Asocia funciones manejadoras a los eventos de mensajes y errores.
4. **Capa de Procesamiento de Mensajes**: Evalúa el texto mediante expresiones regulares, enruta los comandos y ejecuta las operaciones.
5. **Capa de Respuesta**: Envía las respuestas al usuario a través de `bot.sendMessage`.

Analicemos cada bloque de código de `bot.js`:

### 1. Importaciones y Configuración Inicial (Líneas 1 a 6)

```javascript
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import { createOpencodeClient } from '@opencode-ai/sdk';
import path from 'path';

dotenv.config();
```

Se importan las librerías necesarias y se ejecuta inmediatamente `dotenv.config()` para que `process.env` contenga las variables del archivo `.env` antes de cualquier otra operación.

### 2. Carga y Validación del Token de Telegram (Líneas 8 a 14)

```javascript
const token = process.env.TELEGRAM_BOT_API_KEY;

if (!token) {
  console.error('Error: TELEGRAM_BOT_API_KEY not found in .env file');
  process.exit(1);
}
```

Se verifica la presencia del token. Si no existe, la aplicación emite un mensaje de error claro y termina su ejecución de inmediato con `process.exit(1)`, aplicando el principio de detección temprana de fallos (fail-fast).

### 3. URL del Servidor y Cliente de OpenCode (Líneas 16 a 19)

```javascript
const opencodeServerUrl = process.env.OPENCODE_SERVER_URL || 'http://localhost:4096';
let opencodeClient = null;
```

Se define la URL del servidor con un valor por defecto hacia `http://localhost:4096` y se declara la variable `opencodeClient` en el ámbito superior para ser asignada tras la inicialización asíncrona.

### 4. Función de Inicialización de OpenCode (Líneas 21 a 37)

```javascript
async function initOpencode() {
  try {
    const config = {
      baseUrl: opencodeServerUrl,
      throwOnError: false,
      directory: process.cwd(),
    };

    opencodeClient = createOpencodeClient(config);
    
    console.log('✓ Opencode client initialized');
    return true;
  } catch (error) {
    console.error('Failed to initialize Opencode client:', error.message);
    return false;
  }
}
```

La opción `throwOnError: false` permite que el SDK devuelva objetos de resultado con propiedades `{ data, error }` en lugar de lanzar excepciones no controladas, facilitando una gestión de errores más limpia y ordenada. `directory: process.cwd()` asegura que el SDK localice `opencode.json` en el directorio de trabajo del proyecto.

### 5. Creación del Bot de Telegram en Modo Sondeo (Líneas 40 a 49)

```javascript
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is starting...');

// Inicializar OpenCode
initOpencode().then(() => {
  console.log('Opencode integration ready');
});
```

Al configurar `{ polling: true }`, la librería inicia el ciclo de sondeo largo (long polling), verificando periódicamente si hay nuevos mensajes en Telegram sin requerir que expongas un servidor web público con certificado SSL.

### 6. Colección de Chistes para el Comando /joke (Líneas 51 a 60)

```javascript
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "Why did the developer go broke? Because he used up all his cache! 💸",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
  "Why do Java developers wear glasses? Because they can't C#! 👓",
  "What's a programmer's favorite place to hang out? Foo Bar! 🍻",
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings! 😢",
  "What do you call a programmer from Finland? Nerdic! 🇫🇮",
  "Why did the programmer quit his job? Because he didn't get arrays! 📊"
];
```

Un arreglo con elementos temáticos de programación que el bot selecciona al azar cuando el usuario solicita `/joke`.

### 7. Procesamiento de Mensajes y Enrutamiento de Comandos (Líneas 62 a 232)

```javascript
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || '';
```

El manejador de eventos `message` captura cada mensaje entrante. Se extrae el `chatId` para responder a la misma conversación y se normaliza el texto. A partir de allí, una serie de comprobaciones con expresiones regulares identifica el comando solicitado:

- **`/start`**: Da la bienvenida al usuario y describe las capacidades generales del bot.
- **`/help`**: Muestra la lista de comandos disponibles (`/opencode`, `/health`, `/joke`, `/echo`, `/time`).
- **`/time`**: Devuelve la fecha y hora actual del servidor.
- **`/echo <texto>`**: Repite el texto proporcionado por el usuario.
- **`/joke`**: Selecciona y envía un chiste aleatorio de la colección.
- **`/opencode <prompt>`**: Crea una sesión en el servidor de OpenCode, envía la instrucción del usuario a la IA, espera la respuesta generada, la envía de vuelta al chat de Telegram y elimina la sesión para liberar recursos.
- **`/health`**: Consulta al servidor de OpenCode mediante `session.list()` para verificar el estado de conexión y la cantidad de sesiones activas.
- **Comandos no reconocidos**: Si el mensaje comienza con `/` pero no coincide con ningún comando, el bot informa que el comando es desconocido y sugiere usar `/help`.
- **Mensajes normales de texto**: Si el mensaje no inicia con `/`, el bot responde con un eco indicando que ha recibido el mensaje.

#### Estrategia de Retorno y Concurrencia Asíncrona

Cada bloque de comando finaliza con `return;`. Esto evita que tras procesar un comando válido, la ejecución continúe hacia los bloques siguientes o caiga en el manejador por defecto.

Dado que el manejador está declarado como `async`, cada mensaje se procesa de forma independiente en el bucle de eventos de Node.js. Si una consulta de OpenCode tarda unos segundos en completarse, el bot continúa recibiendo y respondiendo mensajes de otros usuarios sin interrupciones ni bloqueos.

## Inmersión Profunda en la Gestión de Sesiones

Las sesiones constituyen la unidad de trabajo fundamental dentro de OpenCode. Una sesión representa un espacio de trabajo aislado que cuenta con:
- Un identificador único (ID).
- Un título descriptivo.
- Contexto sobre el sistema de archivos local.
- Historial de la conversación con la IA.
- Estado que perdura a través de múltiples instrucciones.

### Sesiones Desechables vs. Sesiones Persistentes

En la implementación actual de nuestro bot utilizamos el patrón de **sesiones desechables** (use and discard):

1. El usuario envía `/opencode <pregunta>`.
2. El bot crea una nueva sesión con `session.create()`.
3. Se envía la consulta mediante `session.prompt()`.
4. Se recibe la respuesta y se reenvía a Telegram.
5. Se elimina la sesión inmediatamente con `session.delete()`.

Este enfoque es ideal para consultas independientes y preguntas puntuales porque no acumula memoria ni historial innecesario en el servidor.

Si deseas mantener conversaciones continuas donde la IA recuerde el contexto de los mensajes anteriores, puedes evolucionar el bot hacia **sesiones persistentes**:
- Almacenar el `sessionId` asociado al `chatId` del usuario en memoria o en una base de datos.
- Reutilizar la misma sesión en llamadas consecutivas de `/opencode`.
- Añadir comandos como `/newsession` para reiniciar el contexto o `/sessions` para listar sesiones existentes.

### Tabla de Referencia de Operaciones de Sesión en el SDK

| Operación | Método en el SDK | Endpoint HTTP | Descripción |
|---|---|---|---|
| **Crear** | `session.create({ body: { title } })` | `POST /session` | Crea una nueva sesión de trabajo con un título |
| **Listar** | `session.list()` | `GET /session` | Lista todas las sesiones activas en el servidor |
| **Enviar Prompt** | `session.prompt({ path: { id }, body: { parts } })` | `POST /session/{id}/prompt` | Envía una instrucción a una sesión específica |
| **Eliminar** | `session.delete({ path: { id } })` | `DELETE /session/{id}` | Elimina la sesión y libera sus recursos asociados |
| **Heartbeat** | `session.heartbeat({ path: { id } })` | Interno | Mantiene viva la sesión para evitar expiración por inactividad |

## Conclusión y Buenas Prácticas de Seguridad

La seguridad en aplicaciones conectadas a IA debe abordarse en múltiples capas. Para un bot de uso personal o de equipo, los principales riesgos a considerar son la exposición de tokens y el acceso no autorizado a herramientas locales:

1. **Protección de Credenciales**: Mantén siempre `.env` y tus claves de API fuera del control de versiones. Si sospechas que un token se ha filtrado, revócalo inmediatamente en BotFather o en tu panel de OpenRouter.
2. **Control de Acceso (Lista Blanca)**: Si tu bot ejecuta comandos en tu computadora a través de OpenCode, implementa una validación por `chatId` para que únicamente tu cuenta de Telegram pueda interactuar con él.
3. **Entorno Controlado (Sandboxing)**: Ejecuta el servidor de OpenCode dentro de un directorio acotado o en un contenedor para evitar que modificaciones accidentales afecten archivos críticos del sistema operativo.
4. **Mantenimiento Continuo**: Conserva actualizadas las dependencias de Node.js y el SDK de OpenCode para aprovechar mejoras de rendimiento y parches de seguridad.

Integrar el SDK de OpenCode con Telegram abre un abanico inmenso de posibilidades para la asistencia de desarrollo móvil. Ahora tienes en tus manos un asistente de programación personalizado, disponible las 24 horas del día, listo para ayudarte a escribir código, resolver errores y potenciar tus proyectos desde cualquier lugar del mundo.
