---
title: "Fundamentos de Automatización para Principiantes: Un Framework de Skills Compatible con OpenClaw para la Orquestación Agéntica y Autónoma de Google Workspace en Python"
date: "19-06-2026"
excerpt: "Aprende a construir e integrar un framework de skills modular y compatible con OpenClaw para que agentes autónomos de IA gestionen correos en Gmail y eventos en Google Calendar mediante Python y OAuth 2.0."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["OpenClaw", "OpenCode", "Google Workspace", "Python", "Agentes de IA", "Skills", "Gmail API", "Google Calendar API", "OAuth 2.0", "Automatización"]
coverImage: "/images/blog/openclaw_skills_cover.png"
readTime: "55 min de lectura"
featured: false
---

![Captura de pantalla de respuesta de correo](/images/blog/google-workspace-skills/email_reply_screenshot.png)

- **Repositorio del Proyecto:** [https://github.com/cjbaezilla/Skills-Framework-for-Autonomous-Agentic-Google-Workspace-Orchestration-Tutorial](https://github.com/cjbaezilla/Skills-Framework-for-Autonomous-Agentic-Google-Workspace-Orchestration-Tutorial)

## Introducción: De Tareas Manuales a la Orquestación Autónoma

Este proyecto incluye una integración completamente configurada con Google Workspace que te permite gestionar correos electrónicos y eventos de calendario de manera programática. El sistema está construido pensando en la seguridad y en la facilidad de uso, proporcionando tanto una librería central para desarrolladores como herramientas de línea de comandos listas para usar en tareas cotidianas.

La integración soporta cuatro operaciones principales: enviar correos electrónicos, leer correos, responder a correos y crear eventos de calendario. Toda la funcionalidad está construida sobre las APIs oficiales de Google y utiliza OAuth 2.0 para una autenticación robusta y segura.

![Portada](/images/blog/google-workspace-skills/1.jpg)

## Entendiendo la Orquestación Agéntica

La orquestación agéntica representa un cambio fundamental en la forma en que los sistemas de software interactúan con el mundo. En lugar de limitarse a ejecutar scripts estáticos y predeterminados, los sistemas orquestados despliegan agentes de inteligencia artificial especializados capaces de comprender la intención del usuario, planificar acciones coordinadas y combinar múltiples capacidades para alcanzar objetivos complejos. En el ecosistema OpenCode, esto se manifiesta como una arquitectura sofisticada donde agentes autónomos poseen personalidades diferenciadas, herramientas específicas y permisos determinados, trabajando de forma independiente o colaborativa para completar flujos de trabajo de múltiples pasos.

La integración con Google Workspace que estás analizando actúa como una capacidad fundamental dentro de este marco orquestado. Transforma las tareas cotidianas de enviar correos y gestionar calendarios, pasando de ser procedimientos manuales a convertirse en habilidades programables (skills) que los agentes de IA pueden utilizar con total autonomía. Cuando un agente recibe una instrucción como "agenda una reunión con el equipo según lo que discutimos por correo", puede aprovechar estas skills para leer los mensajes entrantes, extraer las referencias temporales, crear los eventos en el calendario con los asistentes pertinentes y enviar las notificaciones correspondientes, todo sin intervención humana.

Esta capacidad encarna lo que la comunidad de código abierto denomina la visión "openclaw": sistemas que pueden tomar el control de funciones informáticas y servicios externos para actuar de forma autónoma en el entorno digital. El término evoca la imagen de una entidad inteligente que puede extender su mano y manipular herramientas digitales con la misma destreza que un humano, pero con precisión de máquina y paciencia inagotable. Analizar esta integración con Google ofrece un excelente punto de partida educativo en la orquestación agéntica porque demuestra patrones fundamentales: manejo seguro de autenticación, abstracción de APIs, definición formal de skills y composición de flujos de trabajo.

La integración opera mediante cuatro skills independientes dentro del sistema OpenCode, cada una de las cuales representa una capacidad discreta que los agentes pueden descubrir e invocar dinámicamente. Esta arquitectura basada en skills crea una estructura modular y extensible donde es posible añadir nuevas funcionalidades sin modificar los agentes existentes. Las skills siguen una estructura uniforme: declaran su propósito, definen los parámetros obligatorios y opcionales, ofrecen ejemplos claros de uso y enlazan a documentación exhaustiva. Esta naturaleza autodescriptiva permite que los agentes comprendan qué hace cada skill y cuándo invocarla, facilitando una selección dinámica de capacidades según la tarea asignada.

Comprender este sistema exige valorar la arquitectura en capas que hace posible su operación autónoma. En la base se encuentra la librería `google_operations.py`, encargada de los detalles intrincados de la autenticación OAuth 2.0, la renovación de tokens y las llamadas directas a las APIs de Google. Sobre ella se sitúan cuatro scripts de línea de comandos que ofrecen interfaces amigables para el usuario humano. En el nivel superior, las skills envuelven estos scripts con metadatos legibles por máquinas, construyendo un puente directo entre la comprensión del lenguaje natural y la ejecución concreta de acciones en la API. Esta separación de responsabilidades garantiza que cada capa pueda evolucionar de manera independiente manteniendo contratos claros entre ellas.

![La Visión de OpenClaw: De Herramientas a Actores Autónomos](/images/blog/google-workspace-skills/2.jpg)

### La Visión de OpenClaw: De Herramientas a Actores Autónomos

El concepto de "openclaw" nace de una observación sencilla pero profunda: las herramientas de software tradicionales requieren operadores humanos para dirigir cada acción. Un humano hace clic en botones, completa formularios y toma decisiones operativas. Los sistemas agénticos invierten esta relación, ubicando a la IA en el asiento del conductor mientras los humanos proporcionan directrices de alto nivel. El término "claw" (garra) simboliza la capacidad del agente para acceder al entorno digital y manipular herramientas, APIs e interfaces con el fin de cumplir metas. El prefijo "open" resalta que esta capacidad no es propietaria ni cerrada, sino un marco impulsado por la comunidad para construir sistemas autónomos.

En este contexto, la integración con Google Workspace demuestra la metáfora de openclaw en su máxima expresión: otorga a los agentes la capacidad de interactuar con una de las plataformas de productividad empresarial más extendidas del planeta. Cuando un agente envía un correo electrónico, ejerce una forma de agencia digital que antes era exclusiva de las personas. Puede redactar mensajes, seleccionar destinatarios y estructurar hilos de conversación basados en comprensión semántica, en lugar de apegarse a plantillas rígidas preprogramadas. De igual forma, la gestión del calendario permite a los agentes coordinar horarios, crear reuniones y despachar invitaciones. No son simples trucos de automatización, sino una participación auténtica en los flujos de trabajo humanos.

Examinar esta integración con fines educativos revela cómo se diseñan las capacidades "claw" en la práctica. El sistema debe resolver varios problemas complejos: autenticarse de forma segura con servicios externos, mantener sesiones activas a lo largo de múltiples invocaciones, gestionar límites de tasa (rate limits) y fallas transitorias de API, transformar entradas legibles por humanos en llamadas estructuradas para APIs y brindar retroalimentación clara tanto a supervisores humanos como a agentes de IA. Cada uno de estos desafíos cuenta con una solución bien estructurada en la base de código, sirviendo como plantilla para construir cualquier otra skill.

La filosofía de openclaw sugiere que cualquier capacidad digital puede encapsularse como una skill y ponerse a disposición de agentes autónomos. Correo electrónico, calendario, sistemas de archivos, bases de datos, APIs web y herramientas de terminal quedan disponibles a través de una interfaz estandarizada. Esta uniformidad resulta crucial porque permite a los agentes descubrir y utilizar capacidades sin preocuparse por los detalles internos de implementación. Así como una persona puede usar un destornillador sin ser experta en metalurgia, un agente puede enviar un correo sin requerir conocimientos profundos sobre los protocolos SMTP o el almacenamiento de tokens OAuth. El sistema de skills provee esta capa de abstracción, tratando cada funcionalidad como una caja negra con un contrato inequívoco.

Al inspeccionar la integración con Google, queda claro cómo se definen y aplican estos contratos. Los archivos `SKILL.md` actúan como especificaciones formales legibles tanto por humanos como por máquinas. Indican con precisión qué hace la skill, cuándo debe usarse, qué parámetros recibe, qué valores retorna y muestran ejemplos concretos. Esta especificación no es un accesorio secundario; es la interfaz principal que permite al agente razonar sobre sus capacidades disponibles. Al combinarse con la comprensión del lenguaje natural del agente, estas especificaciones le permiten decidir si una skill en particular se ajusta a la intención del usuario, construir los parámetros adecuados e interpretar los resultados obtenidos.

### Orquestación Agéntica en la Práctica: Más Allá de Skills Individuales

Aunque las skills individuales son muy útiles por sí solas, el verdadero potencial de la orquestación agéntica surge cuando múltiples skills se combinan en flujos de trabajo coordinados. En este artículo se analizan dos ejemplos contundentes: el flujo de reservas que transforma un correo entrante en un evento de calendario, y el agente de respuesta inteligente que atiende comunicaciones rutinarias. Estos casos demuestran la orquestación en acción, donde una sola instrucción en lenguaje natural activa una secuencia de skills que aportan al resultado final.

El flujo de reservas expone varios patrones de orquestación esenciales. En primer lugar, evidencia el flujo de datos entre distintas skills: la información extraída de un correo (detalles del evento, asistentes, propuestas de horario) se transfiere directamente a la skill de creación de eventos sin intervención manual. Esto exige no solo integración técnica, sino comprensión semántica, ya que el agente debe identificar qué fragmentos del correo corresponden a cada campo del calendario. En segundo lugar, aplica patrones de confirmación y recuperación: el agente resume sus hallazgos y solicita validación humana antes de proceder, reconociendo que ciertas acciones críticas exigen supervisión. En tercer lugar, contempla el manejo de errores: ¿qué sucede si el correo carece de detalles suficientes?, ¿qué pasa si la creación del evento falla? Una orquestación sólida anticipa y resuelve tales contingencias.

El agente de respuesta inteligente ilustra un patrón de orquestación diferente: monitoreo y respuesta continua. Revisa periódicamente los mensajes no leídos, filtra aquellos que requieren atención, analiza el contenido para determinar la respuesta adecuada y ejecuta la acción de responder respetando la estructura del hilo. Este patrón se asemeja a un proceso en segundo plano (daemon), pero enriquecido con capacidades cognitivas. El agente no responde indiscriminadamente a todo; aplica criterio para discernir qué mensajes ameritan respuesta y qué tono es el más apropiado. Esta toma de decisiones matizada marca la diferencia entre la automatización agéntica y los sistemas basados en reglas rígidas.

Estos flujos de trabajo también destacan la importancia del diseño de autenticación para operaciones de larga duración. Es indispensable publicar la aplicación OAuth si los agentes deben operar de forma autónoma sin reautenticaciones manuales constantes. Sin publicar, los refresh tokens expiran a los siete días, interrumpiendo cualquier proceso que deba extenderse más allá de una semana. Esta limitación revela un principio de fondo: los sistemas orquestados suelen demandar acceso persistente a servicios externos, por lo que los mecanismos de autenticación deben soportar sesiones duraderas. El límite de siete días en modo de prueba actúa como una salvaguarda de seguridad, pero para agentes autónomos en entornos productivos, la publicación se vuelve obligatoria.

La arquitectura de skills habilita estas orquestaciones mediante mecanismos dinámicos de descubrimiento e invocación. Un agente puede consultar qué skills están disponibles, leer sus especificaciones y decidir en tiempo de ejecución cuáles invocar. No se trata de un comportamiento cableado de forma rígida en el código, sino de decisiones tomadas al vuelo según el entendimiento del agente sobre sus herramientas y los requisitos de la tarea. Cuando un agente se enfrenta a un requerimiento que no puede resolver con las skills actuales, puede comunicar esa limitación con claridad en lugar de fallar de manera confusa. Esta transparencia resulta vital para construir sistemas agénticos confiables.

![Autenticación como Base: Inmersión Profunda en OAuth 2.0](/images/blog/google-workspace-skills/3.jpg)

### Autenticación como Base: Inmersión Profunda en OAuth 2.0

Comprender a fondo la integración con Google requiere analizar con detenimiento su mecanismo de autenticación, ya que una autenticación confiable y segura constituye los cimientos de todo el sistema. La solución implementa OAuth 2.0, el estándar de la industria para autorización delegada. A diferencia de las claves de API simples que otorgan acceso indiscriminado, los tokens OAuth están restringidos a permisos específicos (scopes) y pueden ser revocados de forma independiente. Más importante aún, el mecanismo de refresh token permite mantener el acceso a largo plazo sin necesidad de almacenar contraseñas ni exigir inicios de sesión reiterados.

El flujo de autenticación inicia durante la configuración inicial. El usuario descarga el archivo `google_credentials.json` desde Google Cloud Console, el cual contiene el Client ID y el Client Secret de la aplicación OAuth. Estas credenciales identifican la aplicación ante los servidores de Google, pero no otorgan acceso por sí mismas. La primera vez que el usuario ejecuta cualquier script o skill, el sistema abre una ventana del navegador con la pantalla de consentimiento de Google. El usuario inicia sesión con su cuenta y visualiza la lista de permisos solicitados: leer y enviar correos en Gmail, y administrar el calendario. Una vez concedido el consentimiento, Google redirige la petición a un endpoint local con un código de autorización. La aplicación intercambia dicho código por un access token y un refresh token.

El access token tiene una vida útil corta, típicamente de una hora. Se utiliza en cada llamada a la API para certificar que la aplicación tiene autorización para actuar en nombre del usuario. Cuando el access token expira, el refresh token (que posee una vigencia mucho más prolongada, especialmente en aplicaciones publicadas) se utiliza para obtener un nuevo access token de forma transparente sin solicitar interacción del usuario. Esta renovación ocurre automáticamente cada vez que la librería `google_operations.py` detecta un token vencido. Los tokens resultantes se almacenan en `google_token.json` para ser reutilizados en llamadas posteriores.

Para fines formativos, conviene resaltar varios aspectos de este flujo. En primer lugar, la separación entre `google_credentials.json` y `google_token.json` responde a un principio de seguridad clave: la identidad de la aplicación y la delegación del usuario deben guardarse por separado. El archivo de credenciales permanece idéntico para todos los usuarios de la aplicación, mientras que el archivo de tokens es único para cada usuario autorizado. En segundo lugar, la lógica de renovación automática ilustra cómo garantizar la continuidad de las sesiones en entornos efímeros donde el proceso no permanece en memoria de forma constante. En tercer lugar, el requisito de publicar la aplicación para obtener tokens duraderos refleja el equilibrio entre comodidad y seguridad que exigen las plataformas modernas.

Las funciones `get_gmail_service()` y `get_calendar_service()` encapsulan toda esta complejidad. Se encargan de cargar tokens, validarlos, renovarlos y reautenticarse si fuese indispensable. Quien invoca estas funciones solo necesita llamarlas y recibe objetos de servicio de API listos para operar. Esta encapsulación resulta crítica para la capa de scripts y skills, evitando duplicar código de autenticación en cada componente y centralizando aspectos transversales como seguridad y manejo de excepciones.

### Arquitectura del Sistema de Skills: El Puente Entre Humanos y APIs

El sistema de skills constituye la interfaz formal a través de la cual los agentes de IA interactúan con el mundo exterior. Cada skill se ubica en su propio directorio dentro de `skills/` siguiendo una estructura estandarizada. La pieza central es el archivo `SKILL.md`, un documento markdown que define el propósito, patrones de uso, parámetros, valores de retorno y ejemplos. Este archivo cumple una doble función: actúa como documentación clara para desarrolladores humanos y como especificación estructurada para agentes autónomos. El motor de agentes de OpenCode lee estos archivos para descubrir capacidades y aprender a invocarlas.

Tomemos como ejemplo la skill `send-email`. Su archivo `SKILL.md` expone claramente que su propósito es enviar mensajes de correo mediante Gmail. Detalla los parámetros requeridos (`--to`, `--subject`) y los opcionales (`--cc`), explicando la diferencia entre `--body` y `--body-file`. Incluye ejemplos concretos de invocación tanto simples como avanzados. También define el valor retornado (el ID del mensaje en caso de éxito) y el comportamiento ante errores (código de salida 1 con mensaje explicativo). Esta precisión resulta indispensable: un agente que procesa esta especificación puede determinar si la skill coincide con la solicitud del usuario, validar que los parámetros obligatorios estén presentes y saber qué esperar tras la ejecución.

Los metadatos de la skill también describen cuándo conviene emplearla, definiendo sus condiciones de aplicabilidad. Para `send-email`, la descripción indica: "Envía un correo electrónico usando Gmail a través de la API de Gmail con una CLI simple". Esto especifica el dominio (Gmail), la acción (enviar) y la interfaz (línea de comandos). Un agente puede contrastar estas descripciones con las solicitudes del usuario para elegir la skill idónea entre varias opciones posibles (como enviar por Gmail, publicar en Twitter o redactar en LinkedIn).

Debajo de los metadatos se ubica la implementación real: un script de Python ubicado en `scripts/google/send_email.py`. Este script es totalmente autónomo y puede ejecutarse directamente desde la terminal con los argumentos descritos. Utiliza la librería `google_operations` para realizar la autenticación y las llamadas a la API. De manera análoga, `read_email.py`, `reply_email.py` y `create_calendar_event.py` implementan sus respectivas skills. Este desacoplamiento entre la interfaz (definición de la skill) y la implementación (el script) permite modificar la lógica interna sin romper los agentes, siempre que el contrato de la skill permanezca intacto.

### Extendiendo el Sistema: Patrones y Principios

Aunque la integración con Google Workspace es muy completa, también sirve como plantilla de referencia para conectar cualquier otro servicio externo. Cualquier plataforma que ofrezca una API pública (y preferiblemente una librería oficial en Python) puede empaquetarse como un conjunto de skills siguiendo los mismos patrones. Los pasos esenciales son: obtener credenciales de la API, implementar la autenticación con gestión de tokens, escribir funciones envolventes para las operaciones clave, construir interfaces CLI, redactar los metadatos de las skills e integrar todo en la configuración del sistema.

Varios patrones derivados de esta base de código sirven como guía:
- **Patrón de módulo de librería:** centraliza la autenticación y la interacción de bajo nivel con la API, aislando las capas superiores de detalles técnicos específicos.
- **Patrón de script CLI:** proporciona interfaces de terminal con parseo uniforme de argumentos, control de errores consistente y códigos de salida estandarizados.
- **Patrón de metadatos de skill:** ofrece especificaciones legibles y autodescriptivas para agentes de IA.
- **Patrón de configuración:** registra las skills en un índice central manteniendo sus implementaciones desacopladas.
- **Patrón de documentación:** asegura que cada skill cuente con guías detalladas de referencia técnica más allá de la especificación básica.

Estos patrones responden a objetivos claros en un sistema agéntico. La modularidad permite desarrollar, probar y actualizar skills de forma independiente. La consistencia reduce la carga cognitiva tanto para los agentes como para los desarrolladores. La capacidad de descubrimiento permite a los agentes incorporar nuevas habilidades sin necesidad de reprogramar su lógica interna. Y la documentación exhaustiva actúa como la fuente única de verdad para humanos y máquinas.

Al diseñar nuevas skills, es útil responder a estas preguntas: ¿cuál es el contrato mínimo y claro que debe exponer esta skill?, ¿qué parámetros son indispensables y cuáles opcionales?, ¿qué errores pueden ocurrir y cómo deben notificarse?, ¿cómo se relaciona esta skill con otras en el mismo dominio? Las skills de Google brindan respuestas ejemplares: el trío enviar/leer/responder cubre el ciclo completo de comunicación asíncrona, mientras que las operaciones de calendario cubren la gestión de eventos de punta a punta. Cada skill hace una sola cosa, la hace bien y mantiene total coherencia.

## Configuración Paso a Paso

Esta sección te guía en la configuración completa de la integración de Google Workspace para OpenCode. El proceso incluye la creación del proyecto en Google Cloud, la habilitación de las APIs, la configuración de la autenticación y la obtención de credenciales. Sigue los pasos en el orden indicado.

Cada paso tiene un propósito concreto y consideraciones técnicas relevantes, reflejando buenas prácticas al trabajar con APIs en sistemas de producción.

### 1. Crear un Proyecto en Google Cloud

Necesitas un proyecto en Google Cloud para alojar tus credenciales de API. El proyecto actúa como un contenedor para todos los recursos vinculados a la integración, establece tu identidad como desarrollador ante Google y permite gestionar APIs, credenciales, cuotas y métricas en un solo lugar.

- Ingresa a [console.cloud.google.com](https://console.cloud.google.com)
- Haz clic en **Nuevo Proyecto** (o selecciona uno existente si prefieres)
- Asigna un nombre descriptivo, como "OpenCode AI Agent" o "Integracion Gmail"
- Haz clic en **Crear**

El nombre del proyecto aparece en la pantalla de consentimiento de OAuth que verán los usuarios al autorizar los permisos. Un nombre claro y profesional ayuda a transmitir confianza sobre la legitimidad de la aplicación.

A nivel interno, el ID del proyecto formará parte del identificador del cliente OAuth. Crear el proyecto es rápido, pero los nombres de proyectos eliminados no pueden reutilizarse en Google Cloud.

Para entornos de equipo o corporativos, evalúa si conviene usar un proyecto compartido o proyectos individuales según las políticas de gobernanza en la nube de tu organización.

![Crear un Proyecto en Google Cloud](/images/blog/google-workspace-skills/onboard1.png)

### 2. Habilitar las APIs Requeridas

La integración necesita acceso a dos APIs principales de Google: Gmail API y Calendar API. Debes habilitarlas en tu proyecto:

- En el menú lateral de Cloud Console, dirígete a **APIs y Servicios → Biblioteca** (Library)
- Busca **Gmail API** → haz clic en ella → haz clic en **Habilitar** (Enable)
- Regresa a la Biblioteca, busca **Google Calendar API** → haz clic en ella → haz clic en **Habilitar** (Enable)

Habilitar una API autoriza al proyecto a realizar solicitudes contra ese servicio y activa los paneles de monitoreo de uso y cuotas en la consola de Google.

> **Nota:** Si tu agente solo requiere enviar o leer correos electrónicos, puedes omitir la API de Calendar. No obstante, para contar con todas las capacidades de OpenCode, se recomienda habilitar ambas.

Aplica el principio de menor privilegio cuando diseñes sistemas productivos. La integración presentada en este tutorial utiliza el scope general `https://mail.google.com/` para disponer de acceso completo a Gmail y simplificar el desarrollo, pero en despliegues con requerimientos específicos puedes optar por scopes más restrictivos.

![Habilitar la API de Gmail](/images/blog/google-workspace-skills/onboard2.png)
![Habilitar la API de Google Calendar](/images/blog/google-workspace-skills/onboard3.png)

### 3. Configurar la Pantalla de Consentimiento de OAuth

Google requiere que configures una pantalla de consentimiento que los usuarios visualizarán al otorgar permisos:

En el menú lateral de Cloud Console, ve a **APIs y Servicios → Pantalla de consentimiento de OAuth** (OAuth consent screen). Selecciona entre **Externo** (External) o **Interno** (Internal). Externo permite que cualquier cuenta de Google solicite acceso (requiriendo agregar usuarios de prueba mientras esté en desarrollo), mientras que Interno restringe el uso a cuentas dentro de tu organización de Google Workspace. Para agentes personales o de equipos pequeños, Externo funciona a la perfección agregando explícitamente las cuentas autorizadas como usuarios de prueba.

Completa los campos obligatorios:

- **Nombre de la aplicación**: Aparecerá en la pantalla de consentimiento. Un nombre como "OpenCode AI Agent" identifica claramente la herramienta.
- **Correo de soporte del usuario**: Dirección de contacto para dudas o incidencias.
- **Datos de contacto del desarrollador**: Tu correo para notificaciones técnicas de Google.

En la sección **Usuarios de prueba** (Test users), añade las direcciones de Gmail que utilizarán esta aplicación. Esto es fundamental: solo los correos listados aquí podrán autenticarse mientras la aplicación permanezca en fase de pruebas.

Haz clic en **Guardar y continuar** a través de las pantallas siguientes. Los campos de logotipo, enlaces de privacidad y términos de servicio son opcionales durante la fase de desarrollo.

![Configurar Pantalla de Consentimiento](/images/blog/google-workspace-skills/onboard4.png)
![Configurar Pantalla de Consentimiento](/images/blog/google-workspace-skills/onboard5.png)

### 4. Crear Credenciales de OAuth 2.0

Ahora generarás el archivo de credenciales que la aplicación utilizará para identificarse ante Google:

En el menú lateral, dirígete a **APIs y Servicios → Credenciales**. Haz clic en **Crear credenciales** y selecciona **ID de cliente de OAuth** (OAuth client ID). En tipo de aplicación, selecciona **Aplicación de escritorio** (Desktop app). Este tipo está diseñado para herramientas que se ejecutan en computadoras locales y pueden abrir un navegador para la autenticación interactiva.

Asigna un nombre como "OpenCode Desktop Client" y haz clic en **Crear**. Google generará el Client ID y el Client Secret, mostrando una ventana emergente con el botón **Descargar JSON**. Descarga dicho archivo.

Guarda el archivo descargado con el nombre `google_credentials.json` dentro del directorio `credentials/` de tu proyecto. El nombre y la ruta deben coincidir con lo esperado por los scripts y librerías.

> **Importante:** Este archivo JSON contiene secretos de cliente. Nunca lo subas a repositorios públicos ni lo compartas. Añade inmediatamente la carpeta `credentials/` a tu archivo `.gitignore`.

![Crear Credenciales](/images/blog/google-workspace-skills/onboard6.png)
![Crear Credenciales](/images/blog/google-workspace-skills/onboard7.png)

### 5. Publicar Tu Aplicación (Crítico para Agentes)

Si estás construyendo un agente autónomo que debe operar sin requerir reautenticaciones manuales constantes, ES INDISPENSABLE publicar tu aplicación OAuth. De lo contrario, los refresh tokens vencerán automáticamente a los 7 días, deteniendo la ejecución de tus agentes de largo plazo.

Regresa a **APIs y Servicios → Pantalla de consentimiento de OAuth**. En la parte superior verás la opción **Publicar aplicación** (Publish App). Haz clic en ella. Google mostrará un aviso informando que la publicación permite que los refresh tokens no expiren. Lee las condiciones y confirma.

Al publicar la aplicación, los refresh tokens permanecerán válidos de forma indefinida (a menos que sean revocados expresamente), lo que permite a tus agentes operar sin interrupciones. Ten en cuenta que si usas una app Externa sin verificación formal, la lista de usuarios de prueba seguirá limitando quién puede autenticarse, lo cual resulta ideal para entornos de desarrollo personal y equipos cerrados.

![Publicar Aplicación](/images/blog/google-workspace-skills/onboard8.png)

### 6. Obtener un Refresh Token

Antes de que tu agente pueda utilizar las APIs de Google, necesitas autenticarte una vez para generar el refresh token. Este token permite que la aplicación solicite nuevos access tokens en segundo plano sin pedir que inicies sesión en cada ocasión.

Ejecuta el siguiente script de Python una sola vez para autenticarte y crear el archivo de tokens:

```python
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Los scopes definen los permisos que solicita la aplicación
# Se recomienda acceso completo para agentes de IA
SCOPES = ['https://mail.google.com/']

def main():
    """Autentica y guarda el refresh token en credentials/token.json"""
    creds = None

    # Si el token ya existe, se carga desde el disco
    if os.path.exists('credentials/token.json'):
        creds = Credentials.from_authorized_user_file('credentials/token.json', SCOPES)

    # Si no hay credenciales válidas, se ejecuta el flujo OAuth
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            # Renueva el token expirado de forma automática
            creds.refresh(Request())
        else:
            # Autenticación inicial: abre el navegador para consentimiento del usuario
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials/google_credentials.json', SCOPES)
            creds = flow.run_local_server(port=8080)

        # Guarda las credenciales (incluyendo el refresh token) para uso futuro
        os.makedirs('credentials', exist_ok=True)
        with open('credentials/token.json', 'w') as token:
            token.write(creds.to_json())

        print("[EXITO] Autenticacion completada con exito.")
        print("Token guardado en credentials/token.json")
        print("Tu agente ahora puede usar este token de forma indefinida.")

if __name__ == '__main__':
    main()
```

**Explicación detallada de lo que hace el script paso a paso:**

El script ejecuta el flujo de código de autorización de OAuth 2.0, convirtiendo el consentimiento inicial del usuario en un refresh token persistente reutilizable.

1. **Definición de permisos (`SCOPES`)**: Declara la lista de permisos solicitados. `https://mail.google.com/` otorga acceso total para leer, enviar y organizar correos en Gmail. Para operaciones de calendario, puedes añadir `https://www.googleapis.com/auth/calendar`.
2. **Carga y validación de credenciales existentes**: `main()` revisa si existe el archivo `credentials/token.json`. Si lo encuentra, reconstruye el objeto `Credentials` con su token de acceso, refresh token, vencimiento y scopes.
3. **Renovación automática o flujo interactivo**:
   - Si el token está vencido pero cuenta con `refresh_token`, invoca `creds.refresh(Request())`. Esto realiza una petición HTTP directa a los servidores de Google para renovar el access token sin abrir ventanas de navegador.
   - Si no existe un token previo o la renovación falla, `InstalledAppFlow.from_client_secrets_file` lee las claves de `credentials/google_credentials.json`, inicia un servidor local en el puerto 8080 con `run_local_server(port=8080)` y abre el navegador en la URL de consentimiento.
4. **Intercambio del código de autorización**: Cuando el usuario autoriza la aplicación, Google redirige la respuesta a `http://localhost:8080`, el servidor local captura el código y lo intercambia por el par de tokens (access token y refresh token).
5. **Persistencia en disco**: El script crea el directorio `credentials` si no existía y guarda el token en formato JSON estructurado mediante `creds.to_json()`.

**Notas importantes:**

Si requieres tanto capacidades de correo como de calendario, ajusta la variable `SCOPES`:

```python
SCOPES = ['https://mail.google.com/', 'https://www.googleapis.com/auth/calendar']
```

Ambos permisos se solicitan en una sola sesión de consentimiento, y el token resultante autorizará llamadas a ambas APIs.

Si el puerto 8080 está ocupado en tu equipo, puedes utilizar `flow.run_local_server(port=0)` para que el sistema seleccione un puerto libre disponible automáticamente. Para servidores sin entorno gráfico, existe el método `flow.run_console()`, el cual imprime un enlace para abrir en otro equipo y solicita pegar el código de autorización en la consola.

**Consideraciones de seguridad:**

El archivo de tokens contiene claves que permiten actuar en tu nombre. Protégelo con permisos de lectura restringidos en tu sistema operativo, no lo compartas y revócalo desde la configuración de seguridad de tu cuenta de Google si sospechas algún compromiso.

**Estructura del archivo de token:**

El JSON generado almacena:
- `token`: El access token de corta duración.
- `refresh_token`: El token de larga duración para renovaciones.
- `token_uri`: Endpoint de autenticación de Google.
- `client_id` y `client_secret`: Identificadores de tu aplicación.
- `scopes`: Lista de permisos concedidos.
- `expiry`: Marca de tiempo de expiración del access token.

**Resolución de problemas comunes:**

- Si el navegador no abre automáticamente, revisa la configuración de navegador por defecto o usa la variable de entorno `BROWSER`.
- Si el puerto 8080 da error de enlace, usa `port=0`.
- Si recibes errores de `invalid_grant` al renovar, es probable que el refresh token haya expirado (tras 7 días si la app no se publicó) o haya sido revocado. Elimina `token.json` y vuelve a ejecutar el script.
- Si los permisos no coinciden con lo esperado, verifica el contenido de la lista `SCOPES` antes de autenticarte.

Al completar este paso con éxito, se generará el archivo `credentials/google_token.json` y las distintas herramientas podrán operar de forma autónoma.

### 7. Integrar con Tu Agente

La librería `google_operations.py` (ubicada en `libs/google_operations.py`) ofrece funciones preparadas para que tu agente las invoque directamente.

En la cabecera del archivo, puedes configurar estas constantes:

```python
SENDER_NAME = "Augustus Machine"  # Nombre que se mostrara como remitente
SIGNATURE_HTML_FILE = "resources/signature.html"  # Ruta a la firma HTML
```

**Ejemplo básico de uso en Python:**

```python
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'libs'))

from google_operations import (
    get_gmail_service,
    send_email,
    list_unread_emails,
    get_email_content,
    reply_email,
    get_calendar_service,
    create_event
)

# El servicio de Gmail se inicializa automaticamente con el token guardado
gmail = get_gmail_service()

# Enviar un correo electronico
send_email(
    to="destinatario@example.com",
    subject="Saludos desde OpenCode",
    body="Este es un correo de prueba enviado mediante la integracion con Google."
)

# Listar correos no leidos
unread = list_unread_emails(max_results=10)
for email in unread:
    print(f"De: {email['from']}")
    print(f"Asunto: {email['subject']}")

# Crear un evento en el calendario
from datetime import datetime
event = create_event(
    summary="Reunion de Equipo",
    start_time=datetime(2026, 4, 15, 14, 0, 0),
    end_time=datetime(2026, 4, 15, 15, 0, 0),
    description="Discusion semanal de sincronizacion de proyectos",
    attendees=["alice@example.com", "bob@example.com"]
)
print(f"Evento creado exitosamente: {event['htmlLink']}")
```

La librería gestiona la autenticación de forma transparente, requiriendo únicamente que exista `credentials/token.json`.

### Patrones de Orquestación: Combinando Skills para Flujos de Trabajo Autónomos

El verdadero poder del sistema surge cuando se encadenan llamadas individuales, utilizando resultados intermedios para guiar acciones posteriores.

Consideremos el flujo **correo a calendario**. El agente comienza buscando correos relevantes con `list_unread_emails()` o `search_emails()`. Una vez localizados los mensajes candidatos, obtiene el cuerpo completo mediante `get_email_content()` y realiza una extracción semántica estructurada: título del evento, propuestas de fecha y hora, asistentes, ubicación y notas adicionales.

Esta fase de extracción representa un proceso cognitivo donde la IA interpreta lenguaje natural no estructurado, reconociendo fechas expresadas en formatos variados ("reunámonos el próximo martes a las 3pm"). El agente valida que los campos requeridos estén presentes y sean coherentes. Si detecta ambigüedades, puede solicitar confirmación al usuario.

Con los datos validados, el agente invoca `create_event()`, mapeando la información extraída a los parámetros correspondientes. Al incluir los correos de los asistentes, Google Calendar despacha automáticamente las invitaciones. Finalmente, el agente puede enviar una confirmación al solicitante informando que la reserva fue exitosa.

De igual forma, en el **agente de respuesta inteligente**, el sistema opera en un ciclo de monitoreo: consulta correos no leídos, analiza cuáles requieren atención inmediata, redacta una respuesta coherente con el contexto y utiliza `reply_email()` para responder manteniendo la estructura del hilo.

Estos flujos siguen el ciclo clásico: **Percibir - Razonar - Actuar** (Sense - Reason - Act):
- **Percibir**: Recopilar información del entorno digital (`list_unread_emails`, `get_email_content`, `list_events`).
- **Razonar**: Analizar la información, planificar pasos y generar contenido mediante el modelo de lenguaje.
- **Actuar**: Ejecutar cambios de estado en las APIs (`send_email`, `create_event`, `reply_email`).

Otros patrones clave incluyen la **bifurcación paralela** (consultar múltiples calendarios simultáneamente para buscar disponibilidad libre) y el **enrutamiento condicional** (tomar diferentes cursos de acción según el resultado o error de una llamada previa).

## Arquitectura Central: La Librería google_operations

En el núcleo de todas las funcionalidades se encuentra `google_operations.py`, ubicada en `libs/google_operations.py`. Esta librería concentra la lógica de autenticación y comunicación con las APIs de Google, exponiendo funciones limpias para las herramientas CLI y los agentes.

### Flujo de Autenticación

La librería utiliza OAuth 2.0. Al invocar cualquiera de las funciones, el sistema revisa si existe `credentials/google_token.json`. Si el token expiró, lo renueva en segundo plano. Si no existe, lanza el flujo inicial abriendo el navegador.

### Opciones de Configuración

Dos constantes principales controlan el formato de los correos emitidos:

```python
SENDER_NAME = "Augustus Machine"
SIGNATURE_HTML_FILE = "resources/signature.html"
```

`SENDER_NAME` define el nombre en la cabecera From, mientras que `SIGNATURE_HTML_FILE` especifica la plantilla HTML que se añadirá al final de cada mensaje enviado.

### Funciones de Servicio de Autenticación

La librería provee dos funciones principales para obtener clientes autenticados:
- `get_gmail_service()`: Retorna una instancia autenticada del servicio de la API de Gmail.
- `get_calendar_service()`: Retorna una instancia autenticada del servicio de la API de Google Calendar.

Ambas funciones encapsulan la verificación y renovación de tokens, permitiendo que scripts y automatizaciones operen sin interrupciones manuales.

## Operaciones de Correo Electrónico

El sistema ofrece tres funciones principales para correo electrónico que cubren el ciclo completo de comunicación: enviar nuevos mensajes, revisar la bandeja de entrada y responder en hilos existentes.

### Envío de Correos (send_email)

La función `send_email()` permite componer y despachar nuevos correos electrónicos:

```python
def send_email(to, subject, body_html, cc=None):
    """Envia un correo en formato HTML con firma HTML automatica"""
```

Aunque el parámetro se denomina `body_html`, en la práctica acepta texto plano y realiza una conversión automática a HTML limpio y bien estructurado. Los destinatarios en `to` y `cc` se especifican como cadenas de texto con direcciones separadas por comas.

**Reglas de conversión a HTML:**
- Dos saltos de línea consecutivos generan párrafos independientes encerrados en etiquetas `<p>`.
- Un solo salto de línea dentro de un bloque de texto se convierte en una etiqueta `<br />`.
- Los caracteres especiales de HTML se escapan debidamente para evitar inyecciones.
- La codificación UTF-8 garantiza la compatibilidad con caracteres internacionales y acentos.
- La firma HTML configurada se adjunta automáticamente al final del mensaje.

Por ejemplo, esta entrada de texto plano:

```
Hola equipo,

Actualizacion del proyecto:
- Fase 1: Completada
- Fase 2: En progreso

Por favor revisen la documentacion adjunta.

Saludos cordiales,
Director de Proyecto
```

Se transforma automáticamente en este código HTML:

```html
<div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5;">
<p>Hola equipo,</p>
<p>Actualizacion del proyecto:<br />
- Fase 1: Completada<br />
- Fase 2: En progreso</p>
<p>Por favor revisen la documentacion adjunta.</p>
<p>Saludos cordiales,<br />
Director de Proyecto</p>
</div>
```

**Ejemplo de orquestación: Reportes de estado automatizados**

Un agente programado para emitir reportes diarios puede recopilar métricas de commits y builds, redactar el resumen en texto plano y llamar a `send_email()`. La conversión automática garantiza que el correo se renderice con formato impecable en cualquier cliente de correo.

**Manejo de errores al enviar:**

`send_email()` retorna el ID del mensaje enviado en caso de éxito, o `None` si ocurre algún fallo (dirección inválida, problemas de red o cuota excedida). Los agentes deben validar este retorno e implementar reintentos o alertas en caso de fallo.

### Lectura de Correos (list_unread_emails y get_email_content)

Dos funciones complementarias gestionan la lectura de correos:

```python
def list_unread_emails(max_results=10):
    """Retorna una lista de correos no leidos (asunto, remitente, snippet, id)"""
```

```python
def get_email_content(message_id):
    """Obtiene el correo completo: asunto, remitente, cuerpo (texto plano)"""
```

`list_unread_emails()` consulta los mensajes con la etiqueta UNREAD de Gmail y devuelve una lista de diccionarios con la estructura:

```python
[
    {
        'id': '17c3a5b6f7e8a9b0c1d2e3f4',
        'from': 'alice@example.com',
        'subject': 'Actualizacion del Proyecto',
        'snippet': 'Aqui esta el reporte de los ultimos avances en la iniciativa...'
    },
]
```

El `snippet` es un extracto breve generado por Gmail que permite una evaluación rápida del contenido sin necesidad de descargar el cuerpo completo. El parámetro `max_results` limita la cantidad de mensajes devueltos.

`get_email_content(message_id)` descarga el mensaje completo, procesa las partes MIME, convierte el contenido a texto plano y trunca el cuerpo a 2000 caracteres como medida de seguridad para evitar consumos excesivos de memoria en correos masivos.

**Patrón de orquestación: Monitoreo de bandeja de entrada**

Un agente puede consultar periódicamente los correos no leídos con `list_unread_emails()`, analizar los asuntos y snippets para determinar cuáles requieren procesamiento, invocar `get_email_content()` solo para aquellos relevantes y ejecutar las acciones pertinentes.

**Manejo de errores en lectura:**

`list_unread_emails()` retorna una lista vacía ante fallos o si no hay correos pendientes. `get_email_content()` devuelve `None` si el ID del mensaje no existe o fue eliminado.

### Responder a Correos (reply_email)

La función `reply_email()` permite responder dentro de un hilo de conversación existente preservando la estructura de la conversación:

```python
def reply_email(message_id, body_html, cc=None):
    """Responde a un hilo de correo existente usando la API de Gmail"""
```

Para mantener la coherencia del hilo según los estándares RFC 5322, la función realiza automáticamente:
- Obtiene el mensaje original para extraer las cabeceras correspondientes.
- Establece la cabecera `In-Reply-To` con el Message-ID original.
- Configura la cabecera `References` para preservar la cadena genealógica de la conversación.
- Asigna el parámetro `threadId` de Gmail para que la respuesta se agrupe correctamente en la interfaz.
- Conserva el asunto original sin duplicar prefijos.
- Asigna al remitente original como destinatario principal.

**Ejemplo de orquestación: Atención automatizada de consultas**

Un agente de soporte puede escanear mensajes entrantes, analizar la inquietud del cliente, consultar bases de conocimiento y despachar una respuesta contextualizada mediante `reply_email()`. Al usar el Message-ID original, el cliente recibe la respuesta directamente dentro de su hilo de conversación.

**Consideraciones avanzadas de hilos:**

La función responde de manera predeterminada al remitente original. Si se requiere responder a todos los participantes originales (Reply All), se deben extraer las cabeceras de destinatarios del mensaje original y suministrarlas en el parámetro `cc`.

### Orquestando Operaciones de Correo Electrónico en Conjunto

La combinación de estas tres funciones permite flujos avanzados, tales como:
1. **Triaje de correo**: Escanear no leídos, clasificar por prioridad, responder de inmediato a remitentes VIP con confirmación de recepción, archivar notificaciones rutinarias y delegar temas complejos a revisión humana.
2. **Seguimiento de propuestas comerciales**: Buscar correos enviados con propuestas durante la última semana, verificar si hubo respuestas y despachar un recordatorio cortés en caso de no recibir respuesta.

## Operaciones de Calendario

La librería incorpora cinco funciones para gestionar calendarios y eventos, cubriendo el ciclo CRUD completo.

### Listar Calendarios (list_calendars)

```python
def list_calendars():
    """Retorna la lista de calendarios accesibles por el usuario"""
```

Devuelve todos los calendarios disponibles para la cuenta autenticada, incluyendo calendarios compartidos y secundarios. Cada objeto incluye su ID, nombre (summary), descripción y rol de acceso (`owner`, `writer`, `reader`). El calendario principal tiene asignado el identificador especial `'primary'`.

### Creación de Eventos (create_event)

```python
def create_event(calendar_id='primary', summary=None, start_time=None, end_time=None,
                 description=None, location=None, attendees=None, **kwargs):
```

Esta es la función más completa del módulo de calendario. Acepta parámetros obligatorios (`summary`, `start_time`, `end_time`) y numerosas opciones avanzadas.

**Parámetros clave:**
- `summary`: Título del evento (generalmente menor a 100 caracteres).
- `start_time` y `end_time`: Objetos `datetime` de Python o cadenas en formato ISO con zona horaria. Se recomienda utilizar zonas horarias explícitas con la librería `pytz`:

```python
from datetime import datetime
import pytz

santiago_tz = pytz.timezone('America/Santiago')
start = santiago_tz.localize(datetime(2026, 4, 15, 14, 0, 0))
# O directamente como cadena ISO con offset:
start = '2026-04-15T14:00:00-04:00'
```

- `description`: Admite formato HTML sencillo para incluir enlaces y notas enriquecidas.
- `location`: Ubicación física o enlace a sala virtual.
- `attendees`: Lista de correos electrónicos de los invitados. Google Calendar despacha invitaciones automáticas con botones de confirmación a cada asistente.

**Propiedades adicionales mediante `**kwargs`:**

- `recurrence`: Reglas de repetición en formato RRULE (RFC 5545):

```python
# Diario durante 10 repeticiones
recurrence=['RRULE:FREQ=DAILY;COUNT=10']

# Lunes y miercoles hasta una fecha limite
recurrence=['RRULE:FREQ=WEEKLY;BYDAY=MO,WE;UNTIL=20260430']

# Cada 2 semanas los viernes
recurrence=['RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=FR']

# Mensual el dia 15
recurrence=['RRULE:FREQ=MONTHLY;BYMONTHDAY=15']

# De lunes a viernes (dias habiles)
recurrence=['RRULE:FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR']
```

- `reminders`: Configuración de alertas y recordatorios:

```python
reminders=[
    {'method': 'email', 'minutes': 60},
    {'method': 'popup', 'minutes': 15}
]
```

- `colorId`: Asignación de colores en la interfaz visual de Google Calendar:

| colorId | Nombre del Color | Código Hex |
|---------|------------------|------------|
| 1 | Lavanda | #a4bdfc |
| 2 | Salvia | #7ae7bf |
| 3 | Uva | #dbadff |
| 4 | Flamenco | #ff887c |
| 5 | Plátano | #fbd75b |
| 6 | Mandarina | #ffb878 |
| 7 | Pavo Real | #46d6b6 |
| 8 | Grafito | #5484ed |
| 9 | Azul | #51b749 |
| 10 | Marino | #dc2127 |
| 11 | Rojo | #fff8b1 |

- `transparency`: Define si el evento bloquea la disponibilidad (`opaque` muestra ocupado, `transparent` muestra disponible).
- `visibility`: Controla quién puede ver los detalles (`default`, `public`, `private`, `confidential`).
- `conferenceData`: Crea automáticamente enlaces para salas de videoconferencia en Google Meet:

```python
conferenceData={
    'createRequest': {
        'requestId': 'unique-request-id-123',
        'conferenceSolutionKey': {
            'type': 'hangoutsMeet'
        }
    }
}
```

- Permisos para invitados:
  - `guestsCanInviteOthers`: Si los invitados pueden convocar a terceros.
  - `guestsCanModify`: Si los invitados pueden alterar detalles del evento.
  - `guestsCanSeeOtherGuests`: Si la lista de asistentes es visible para todos.

- `extendedProperties`: Almacenamiento de metadatos personalizados vinculados al evento:

```python
extendedProperties={
    'private': {
        'ticketId': 'TICKET-1234',
        'codigoInterno': 'ABC-567'
    },
    'shared': {
        'proyecto': 'redisenio-portal',
        'equipo': 'ingenieria'
    }
}
```

### Lectura de Eventos (list_events y get_event)

```python
def list_events(calendar_id='primary', time_min=None, time_max=None, max_results=100, q=None):
    """Lista eventos en un rango de tiempo con busqueda de texto opcional"""
```

```python
def get_event(calendar_id, event_id):
    """Obtiene un evento especifico por su identificador unico"""
```

`list_events()` permite consultar la agenda en un intervalo determinado. Si no se especifican fechas, consulta desde el instante actual hasta los siguientes 30 días. El parámetro `q` realiza búsquedas textuales sobre títulos y descripciones. La función expande por defecto los eventos recurrentes en instancias individuales fechadas.

`get_event()` devuelve el objeto íntegro de un evento específico a partir de su ID.

### Actualización de Eventos (update_event)

```python
def update_event(calendar_id, event_id, **updates):
    """Actualiza un evento existente con nuevas propiedades"""
```

Esta función recupera el evento existente, aplica los cambios proporcionados y envía el objeto actualizado a la API de Google, gestionando de forma transparente la conversión de fechas y horas.

### Eliminación de Eventos (delete_event)

```python
def delete_event(calendar_id, event_id):
    """Elimina un evento del calendario indicado"""
```

Remueve el evento del calendario. Devuelve `True` tanto si la eliminación fue exitosa como si el evento ya había sido borrado previamente (tratando el código HTTP 404 como éxito para garantizar idempotencia en automatizaciones).

## Dependencias de Python

El proyecto utiliza las librerías oficiales de cliente de Google para Python y sus dependencias complementarias.

### Librerías Centrales de Google

| Librería | Versión | Propósito |
|----------|---------|-----------|
| google-api-python-client | 2.193.0 | Cliente oficial de APIs de Google para Python |
| google-auth | 2.49.1 | Autenticación y gestión de credenciales |
| google-auth-httplib2 | 0.3.0 | Transporte HTTP para flujos de autenticación |
| google-auth-oauthlib | 1.3.0 | Implementación del flujo de autorización OAuth 2.0 |

### Librerías de Soporte

| Librería | Versión | Propósito |
|----------|---------|-----------|
| google-api-core | 2.30.0 | Funcionalidades centrales de APIs de Google |
| googleapis-common-protos | 1.73.0 | Definiciones de Protocol Buffers comunes |
| httplib2 | 0.31.2 | Cliente HTTP de bajo nivel |
| protobuf | 6.33.6 | Implementación de serialización Protocol Buffers |
| proto-plus | 1.27.1 | Envoltorios amigables para protobuf en Python |
| pytz | 2026.1.post1 | Definiciones de zonas horarias IANA para Calendar |
| uritemplate | 4.2.0 | Procesamiento de plantillas de URI |
| cryptography | 46.0.5 | Operaciones criptográficas requeridas por OAuth |
| certifi | 2026.2.25 | Certificados raíz SSL de confianza |
| requests | 2.33.0 | Librería HTTP estándar |
| urllib3 | 2.5.0 | Manejo de conexiones y pools HTTP |
| oauthlib | 3.3.1 | Lógica genérica de OAuth 1.0 y 2.0 |
| requests-oauthlib | 2.0.0 | Integración de OAuth con la librería requests |

### Scopes de API y Permisos

La aplicación requiere dos scopes principales:
- `https://mail.google.com/`: Acceso completo a Gmail.
- `https://www.googleapis.com/auth/calendar`: Acceso completo a Google Calendar.

## Herramientas de Línea de Comandos: Integración de Shell y Patrones de Automatización

La librería alimenta cuatro scripts ejecutables ubicados en `scripts/google/`. Cada herramienta provee una interfaz de terminal limpia e intuitiva.

### send_email.py

Envía un nuevo correo electrónico.

**Uso:**

```bash
python scripts/google/send_email.py \
  --to "destinatario@example.com" \
  --subject "Hola" \
  --body "Cuerpo del mensaje"
```

**Parámetros:**

| Parámetro | Requerido | Descripción |
|-----------|-----------|-------------|
| `--to` | Sí | Dirección de correo del destinatario |
| `--subject` | Sí | Asunto del mensaje |
| `--body` O `--body-file` | Exactamente uno | Contenido del correo |
| `--cc` | No | Destinatarios en copia (separados por coma) |

**Patrones de uso avanzado:**

*Envío con plantilla y variables en Bash*:

```bash
#!/bin/bash
FECHA_HOY=$(date +%Y-%m-%d)
python scripts/google/send_email.py \
  --to "gerencia@example.com" \
  --subject "Reporte Diario - $FECHA_HOY" \
  --body-file "plantillas/reporte_diario.txt"
```

*Envío con copia a múltiples destinatarios*:

```bash
python scripts/google/send_email.py \
  --to "lider-proyecto@example.com" \
  --cc "equipo@example.com,qa@example.com,operaciones@example.com" \
  --subject "Actualizacion de Estado Semanal" \
  --body "Adjunto encontraran el estado del avance de la semana."
```

*Envío de contenido HTML desde una variable*:

```bash
CONTENIDO="<p>Estimados,</p><p>El despliegue fue <strong>exitoso</strong>.</p>"
echo "$CONTENIDO" > /tmp/mensaje.html
python scripts/google/send_email.py \
  --to "devops@example.com" \
  --subject "Despliegue: EXITOSO" \
  --body-file /tmp/mensaje.html
rm /tmp/mensaje.html
```

**Manejo de errores en scripts de shell:**

```bash
if ! python scripts/google/send_email.py \
  --to "admin@example.com" \
  --subject "Alerta" \
  --body "Incidencia critica detectada en produccion"; then
  echo "Fallo al enviar correo de alerta" >&2
  exit 1
fi
```

**Valor de retorno:** En caso de éxito, finaliza con código de salida 0 e imprime el ID del mensaje. Ante errores, finaliza con código 1 e imprime la causa en stderr.

### read_email.py

Permite listar correos no leídos o consultar el detalle de un mensaje específico.

**Uso para listar mensajes no leídos:**

```bash
python scripts/google/read_email.py --list --max-results 10
```

**Uso para leer un mensaje específico:**

```bash
python scripts/google/read_email.py --message-id "17c3a5b6f7e8a9b0c1d2e3f4"
```

**Parámetros:**

| Parámetro | Valor por Defecto | Descripción |
|-----------|-------------------|-------------|
| `--list` | Acción por defecto | Lista los correos no leídos |
| `--message-id` | N/A | Lee el contenido de un mensaje puntual |
| `--max-results` | 10 | Cantidad máxima de correos a listar |
| `--format` | text | Formato de salida: `text` o `json` |

**Formato JSON para automatizaciones con `jq`:**

```bash
python scripts/google/read_email.py --list --format json | jq -r '.[].subject'
```

**Procesamiento por lotes en Bash:**

```bash
#!/bin/bash
EMAILS_JSON=$(python scripts/google/read_email.py --list --max-results 20 --format json)
MESSAGE_IDS=$(echo "$EMAILS_JSON" | jq -r '.[].id')

for ID in $MESSAGE_IDS; do
  echo "Procesando correo con ID: $ID"
  # Aqui puedes invocar la logica del agente o procesar el mensaje
done
```

### reply_email.py

Envía respuestas dentro de hilos existentes de Gmail.

**Uso:**

```bash
python scripts/google/reply_email.py \
  --message-id "19d275345e8b1a8d" \
  --body "Muchas gracias por tu correo. Lo revisaremos a la brevedad."
```

**Parámetros:**

| Parámetro | Requerido | Descripción |
|-----------|-----------|-------------|
| `--message-id` | Sí | ID del mensaje de Gmail al que se responde |
| `--body` O `--body-file` | Exactamente uno | Contenido de la respuesta |
| `--cc` | No | Destinatarios en copia |

**Respuesta desde archivo de texto:**

```bash
python scripts/google/reply_email.py \
  --message-id "19d275345e8b1a8d" \
  --body-file "respuestas/confirmacion.txt"
```

### create_calendar_event.py

Crea nuevos eventos en Google Calendar.

**Uso:**

```bash
python scripts/google/create_calendar_event.py \
  --year 2026 \
  --month 3 \
  --day 26 \
  --start-hour 15 \
  --end-hour 17 \
  --summary "Reunion de Coordinacion" \
  --description "Revision semanal de objetivos y entregables" \
  --attendees "alice@example.com,bob@example.com"
```

**Parámetros:**

| Parámetro | Valor por Defecto | Descripción |
|-----------|-------------------|-------------|
| `--year` | 2026 | Año del evento |
| `--month` | 3 | Mes del evento (1-12) |
| `--day` | 28 | Día del evento (1-31) |
| `--start-hour` | 17 | Hora de inicio en formato 24h |
| `--end-hour` | 19 | Hora de fin en formato 24h |
| `--timezone` | America/Santiago | Identificador de zona horaria IANA |
| `--summary` | "Calendar Event" | Título del evento |
| `--description` | None | Detalles y notas del evento |
| `--location` | None | Ubicación física o sala virtual |
| `--attendees` | None | Correos de invitados separados por coma |

**Creación masiva de eventos desde un archivo CSV:**

```bash
#!/bin/bash
CSV="eventos.csv"
while IFS=, read -r month day start_hour end_hour summary attendees; do
  python scripts/google/create_calendar_event.py \
    --month "$month" --day "$day" \
    --start-hour "$start_hour" --end-hour "$end_hour" \
    --summary "$summary" \
    --attendees "$attendees"
done < <(tail -n +2 "$CSV")
```

### Buenas Prácticas para Scripts

Al utilizar estas herramientas en scripts de Bash o tareas de cron:
- Verifica siempre el código de salida (`$?`) para detectar fallos de inmediato.
- Registra tanto stdout como stderr en archivos de log para depuración.
- Usa `--body-file` para contenidos largos y evita problemas de entrecomillado en la consola.
- Valida los formatos de fecha y correo antes de invocar los scripts.
- Implementa reintentos con espera exponencial ante fallos de conexión.

**Ejemplo de función envolvente en Bash con reintentos:**

```bash
enviar_correo_google() {
    local to=$1 subject=$2 body_file=$3
    local max_retries=3 attempt=1
    
    while [ $attempt -le $max_retries ]; do
        if python scripts/google/send_email.py \
            --to "$to" \
            --subject "$subject" \
            --body-file "$body_file"; then
            echo "Correo enviado exitosamente a $to"
            return 0
        fi
        echo "Intento $attempt fallo, reintentando en 5 segundos..." >&2
        sleep 5
        attempt=$((attempt + 1))
    done
    
    echo "Fallo definitivo al enviar correo a $to tras $max_retries intentos" >&2
    return 1
}
```

### Integración con Cron

Las herramientas CLI son ideales para tareas programadas en sistemas Unix mediante crontab:

```cron
# Revisar correos no leidos cada 15 minutos
*/15 * * * * cd /ruta/al/proyecto && /usr/bin/python3 scripts/google/read_email.py --list --max-results 20 --format json >> /var/log/correos_pendientes.log 2>&1

# Enviar reporte matutino a las 8:00 AM
0 8 * * * cd /ruta/al/proyecto && /usr/bin/python3 scripts/google/send_email.py --to "equipo@example.com" --subject "Reporte Matutino $(date +\%Y-\%m-\%d)" --body-file /ruta/reportes/diario.txt
```

*(Nota: en crontab el signo de porcentaje `%` debe escaparse como `\%`).*

### Integración con Entornos No-Python

Dado que las funciones están expuestas como scripts ejecutables de terminal, pueden ser invocadas desde cualquier lenguaje de programación capaz de lanzar subprocesos (Node.js con `child_process.exec`, Ruby con backticks, Go con `os/exec`, etc.).

## Integración del Sistema de Skills

Las cuatro herramientas están registradas formalmente como skills de OpenCode, lo que permite a los agentes descubrirlas, comprender sus parámetros e invocarlas dinámicamente.

### Estructura de una Skill

Cada skill se almacena en su propio subdirectorio dentro de `skills/` y contiene un archivo `SKILL.md` con:
- Nombre y descripción clara.
- Cuándo debe emplearse la skill.
- Ejemplos de comandos de invocación.
- Tabla detallada de parámetros y retornos.
- Enlaces a documentación extendida en `docs/`.

### Skills de Google Disponibles

| Nombre de la Skill | Propósito | Script Asociado | Documentación |
|--------------------|-----------|-----------------|---------------|
| create-calendar-event | Crear eventos de calendario | create_calendar_event.py | create_calendar_event.md |
| send-email | Enviar correos nuevos | send_email.py | send_email.md |
| read-email | Leer correos (listar o consultar) | read_email.py | list_read_email.md |
| reply-email | Responder en hilos existentes | reply_email.py | reply_email.md |

### Carga de Skills

Los agentes cargan las skills según sus necesidades mediante la herramienta `skill()`. Al cargar una skill, el agente recibe el contenido íntegro de su archivo `SKILL.md` y asimila cómo parametrizar y ejecutar la acción.

## Características Avanzadas de Calendario

La función `create_event()` soporta múltiples opciones avanzadas para escenarios de alta complejidad.

### Eventos Recurrentes

La especificación iCalendar (RRULE) permite definir reglas de repetición precisas:

```python
# Diario por 10 ocasiones
recurrence=['RRULE:FREQ=DAILY;COUNT=10']

# Lunes y miercoles hasta el 30 de abril de 2026
recurrence=['RRULE:FREQ=WEEKLY;BYDAY=MO,WE;UNTIL=20260430']

# Quincenal los viernes
recurrence=['RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=FR']

# Mensual el dia 15
recurrence=['RRULE:FREQ=MONTHLY;BYMONTHDAY=15']

# De lunes a viernes
recurrence=['RRULE:FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR']
```

### Colores de Eventos

Permite categorizar visualmente las citas con `colorId` del 1 al 11:

| colorId | Nombre del Color | Código Hex |
|---------|------------------|------------|
| 1 | Lavanda | #a4bdfc |
| 2 | Salvia | #7ae7bf |
| 3 | Uva | #dbadff |
| 4 | Flamenco | #ff887c |
| 5 | Plátano | #fbd75b |
| 6 | Mandarina | #ffb878 |
| 7 | Pavo Real | #46d6b6 |
| 8 | Grafito | #5484ed |
| 9 | Azul | #51b749 |
| 10 | Marino | #dc2127 |
| 11 | Rojo | #fff8b1 |

### Datos de Conferencia (Google Meet)

Generación automática de salas virtuales:

```python
conferenceData={
    'createRequest': {
        'requestId': 'solicitud-reunion-456',
        'conferenceSolutionKey': {
            'type': 'hangoutsMeet'
        }
    }
}
```

### Permisos de Invitados

Configuración de restricciones para los asistentes:

```python
guestsCanInviteOthers=False    # Impide que los invitados agreguen a otras personas
guestsCanModify=False          # Impide modificaciones por parte de los asistentes
guestsCanSeeOtherGuests=False  # Oculta la lista de invitados
```

### Propiedades Extendidas

Almacenamiento de identificadores internos:

```python
extendedProperties={
    'private': {
        'idIncidencia': 'INC-9876',
        'referencia': 'CRM-55'
    },
    'shared': {
        'proyecto': 'migracion-servidores',
        'squad': 'backend'
    }
}
```

### Visibilidad y Transparencia

| Valor de Visibilidad | Comportamiento |
|----------------------|----------------|
| `default` | Aplica la visibilidad predeterminada del calendario |
| `public` | Evento visible para cualquier persona con acceso al calendario |
| `private` | Detalles ocultos, se muestra solo como "Ocupado" |
| `confidential` | Privado con restricciones de seguridad adicionales |

| Valor de Transparencia | Comportamiento |
|------------------------|----------------|
| `opaque` | Predeterminado. Bloquea el horario y muestra "Ocupado" |
| `transparent` | No bloquea el horario, se muestra como "Disponible" |

## Consideraciones de Seguridad

La integración maneja datos confidenciales de correspondencia y agenda. Es imperativo aplicar normas de seguridad rigurosas.

### Protección de Credenciales

Nunca agregues estos archivos al repositorio de control de versiones:
- `credentials/google_credentials.json`: Contiene las claves secretas de la aplicación OAuth.
- `credentials/google_token.json`: Contiene los tokens de acceso y renovación.

Asegúrate de incluir la carpeta `credentials/` en tu archivo `.gitignore`.

### Principio de Menor Privilegio

Los scopes solicitados (`https://mail.google.com/` y `https://www.googleapis.com/auth/calendar`) otorgan control total sobre el correo y el calendario. Utiliza estas herramientas únicamente con cuentas de confianza y restringe los scopes si tu implementación solo requiere funciones específicas.

### Gestión de Tokens

El archivo de token almacena el refresh token. Asigna permisos estrictos de lectura en el sistema de archivos. En caso de filtración accidental, elimina el archivo y revoca los accesos de la aplicación desde la página de seguridad de tu cuenta de Google.

### Límites de Tasa (Rate Limiting)

Límites estándar de la API de Gmail:
- Consultas de lectura: hasta 1.000.000.000 diarias (prácticamente ilimitado para uso estándar).
- Envío de correos: aproximadamente 1.500 mensajes diarios en cuentas regulares de Gmail y 2.000 en Google Workspace.
- Tasa por usuario: alrededor de 250 consultas por segundo.

Si recibes respuestas con código HTTP 429 (Too Many Requests), implementa algoritmos de espera exponencial con retroceso (exponential backoff).

### Validación de Entradas

Las herramientas CLI no validan exhaustivamente los formatos de los correos. Si integras estas funciones en aplicaciones web públicas, sanitiza y valida estrictamente las direcciones suministradas por los usuarios para prevenir ataques de inyección de cabeceras.

### Manejo de Datos Sensibles

El contenido procesado puede contener información personal y corporativa sensible. Asegúrate de cumplir con regulaciones como el RGPD y las políticas de privacidad de tu organización.

## Manejo de Errores

Las funciones de la librería retornan `None` o listas vacías ante fallos, imprimiendo el diagnóstico en `stderr`.

### Patrones Comunes de Error

| Error | Causa Principal | Solución |
|-------|-----------------|----------|
| `Could not import google_operations` | La librería no se encuentra en el `PYTHONPATH` | Ejecuta desde la raíz del proyecto o agrega `libs/` a `sys.path` |
| `Gmail service not available` | Fallo de autenticación o token inválido | Elimina `google_token.json` y vuelve a ejecutar para autorizar |
| `HTTP error 403 / 429` | Cuota excedida o falta de permisos | Revisa los scopes en Cloud Console y aplica reintentos con backoff |
| `Missing credentials file` | No se encuentra `google_credentials.json` | Descarga el archivo JSON desde Google Cloud Console en `credentials/` |

### Recuperación de Autenticación

Si experimentas problemas persistentes con el token:

```bash
rm credentials/google_token.json
# Ejecuta cualquier script para abrir nuevamente la ventana de consentimiento
python scripts/google/send_email.py --to "tu_correo@example.com" --subject "Prueba" --body "Prueba"
```

## Patrones de Integración: Conectando Skills a Través de Lenguajes y Flujos de Trabajo

La naturaleza dual de estas herramientas (scripts ejecutables de terminal y módulos importables en Python) permite integrarlas en cualquier arquitectura técnica.

### Uso Independiente: Shell Scripting y Cron

Para tareas directas de administración de sistemas, invocar los scripts de terminal es la solución más rápida y limpia.

**Clasificación automática de correos no leídos en Bash:**

```bash
#!/bin/bash
python scripts/google/read_email.py --list --max-results 50 --format json |
  jq -r '.[] | "\(.id) \(.from) \(.subject)"' |
  while read msg_id sender subject; do
    echo "Procesando mensaje: $subject de $sender"
    
    case "$sender" in
      *@notificaciones.empresa.com)
        echo "Notificacion automatica ignorada"
        ;;
      *@clientes.com)
        python scripts/google/send_email.py \
          --to "soporte@empresa.com" \
          --subject "[CLIENTE PRIORITARIO] $subject" \
          --body "Mensaje recibido de cliente $sender. ID Original: $msg_id"
        ;;
      *)
        echo "$(date): $sender - $subject" >> /var/log/registro_correos.log
        ;;
    esac
  done
```

**Creación de eventos desde datos estructurados:**

```bash
#!/bin/bash
EVENTOS_ARCHIVO="/var/data/proximos_eventos.txt"
# Formato: ANIO|MES|DIA|HORA_INICIO|HORA_FIN|TITULO|DESCRIPCION|ASISTENTES

while IFS='|' read -r year month day start_hour end_hour title desc attendees; do
  python scripts/google/create_calendar_event.py \
    --year "$year" --month "$month" --day "$day" \
    --start-hour "$start_hour" --end-hour "$end_hour" \
    --summary "$title" \
    --description "$desc" \
    --attendees "$attendees"
done < "$EVENTOS_ARCHIVO"
```

### Importación como Librería: Aplicaciones Python

Para aplicaciones en Python, la importación directa elimina la sobrecarga de crear subprocesos y provee acceso directo a los objetos de retorno.

```python
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'libs'))

from google_operations import send_email, list_unread_emails, create_event
from datetime import datetime

# Consultar correos no leidos
no_leidos = list_unread_emails(max_results=10)
for email in no_leidos:
    print(f"Asunto: {email['subject']}")
    print(f"De: {email['from']}")
    print(f"Extracto: {email['snippet']}")
    print("---")

# Crear evento en calendario
evento = create_event(
    summary='Almuerzo de Planificacion',
    start_time=datetime(2026, 4, 15, 12, 0, 0),
    end_time=datetime(2026, 4, 15, 13, 30, 0),
    location='Restaurante Central',
    attendees=['alice@example.com', 'bob@example.com']
)

if evento:
    print(f"Evento agendado: {evento.get('htmlLink')}")
```

**Wrapper orientado a objetos para servicios de Google:**

```python
class ClienteGoogleWorkspace:
    def __init__(self, ruta_proyecto):
        sys.path.insert(0, os.path.join(ruta_proyecto, 'libs'))
        from google_operations import get_gmail_service, get_calendar_service
        self.gmail = get_gmail_service()
        self.calendar = get_calendar_service()
    
    def enviar_notificacion(self, destinatario, asunto, cuerpo):
        from google_operations import send_email
        return send_email(to=destinatario, subject=asunto, body_html=cuerpo)
    
    def obtener_correos_recientes(self, limite=50):
        from google_operations import list_unread_emails
        return list_unread_emails(max_results=limite)
    
    def agendar_reunion(self, titulo, inicio, fin, asistentes, ubicacion=None):
        from google_operations import create_event
        return create_event(
            summary=titulo,
            start_time=inicio,
            end_time=fin,
            location=ubicacion,
            attendees=asistentes
        )
```

**Procesamiento asíncrono con hilos y colas:**

```python
import threading
from queue import Queue

def trabajador_respuesta_correo(msg_id, cola_resultados):
    from google_operations import get_email_content, reply_email
    correo = get_email_content(msg_id)
    cuerpo_respuesta = "Gracias por su mensaje. Hemos recibido su requerimiento."
    exito = reply_email(msg_id, cuerpo_respuesta)
    cola_resultados.put((msg_id, exito))

# Obtener no leidos y procesar concurrentemente
cola = Queue()
correos = list_unread_emails(max_results=10)
hilos = []

for item in correos:
    t = threading.Thread(target=trabajador_respuesta_correo, args=(item['id'], cola))
    t.start()
    hilos.append(t)

for t in hilos:
    t.join()

while not cola.empty():
    msg_id, exito = cola.get()
    print(f"Mensaje {msg_id}: {'Exito' if exito else 'Fallo'}")
```

**Manejo de reintentos robusto con `tenacity`:**

```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def enviar_correo_confiable(destinatario, asunto, cuerpo):
    from google_operations import send_email
    resultado = send_email(to=destinatario, subject=asunto, body_html=cuerpo)
    if resultado is None:
        raise Exception("send_email retorno None (error en envio)")
    return resultado
```

### Integración por Subprocesos: Acceso Agnóstico al Lenguaje

Si tu aplicación principal está construida en otro lenguaje, puedes consumir las herramientas CLI mediante subprocesos y parsear la salida JSON:

**Ejemplo en Node.js:**

```javascript
const { exec } = require('child_process');

exec('python scripts/google/read_email.py --list --format json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar script: ${stderr}`);
    return;
  }
  try {
    const correos = JSON.parse(stdout);
    correos.forEach(email => {
      console.log(`De: ${email.from} | Asunto: ${email.subject}`);
    });
  } catch (e) {
    console.error('Error al parsear respuesta JSON:', e);
  }
});
```

**Ejemplo en Ruby:**

```ruby
require 'json'

salida = `python scripts/google/read_email.py --list --format json 2>&1`
if $?.success?
  correos = JSON.parse(salida)
  correos.each { |c| puts "#{c['from']}: #{c['subject']}" }
else
  puts "Error: #{salida}"
end
```

### Comparativa: Cuándo Usar Cada Patrón de Integración

- **Scripts CLI desde Shell/Cron**: Automatizaciones rápidas, tareas de mantenimiento, pipelines CI/CD y scripts de servidor.
- **Importación de Librería en Python**: Aplicaciones complejas, canalizaciones de datos de alto rendimiento y lógica agéntica en Python.
- **Subprocesos desde otros lenguajes**: Microservicios en Node.js, Go, Rust o Ruby que requieren interactuar con Google Workspace con aislamiento de procesos.
- **Skills de Agentes OpenCode**: Automatización inteligente guiada por lenguaje natural donde el agente planifica y ejecuta acciones autónomas.

## Referencia de Documentación

Cada skill cuenta con guías técnicas exhaustivas en la carpeta `docs/`:
- `create_calendar_event.md`: Referencia completa de parámetros de eventos de calendario (326 líneas).
- `list_read_email.md`: Operaciones de lectura y resolución de incidencias en Gmail (430 líneas).
- `reply_email.md`: Estructuración de hilos de respuesta y composición (529 líneas).
- `send_email.md`: Envío de correos, conversión a HTML y manejo de errores (419 líneas).

## Flujos de Trabajo de Agentes en Acción: Patrones de Orquestación en Detalle

A continuación se exploran casos reales de uso donde agentes de IA interpretan solicitudes en lenguaje natural y coordinan múltiples skills para completar tareas complejas.

### 📧 Del Correo al Calendario: El Flujo Completo de Agendamiento

Este flujo demuestra cómo un agente identifica una solicitud de reunión recibida por correo, analiza su contenido y agenda automáticamente la cita en Google Calendar.

**Desglose detallado paso a paso:**

1. **Interpretación de la Intención**: El usuario solicita: "Busca el correo sobre el inicio del proyecto y agéndalo en el calendario". El agente descompone la solicitud en dos tareas: localizar el correo pertinente y crear el evento con los datos extraídos.
2. **Descubrimiento del Mensaje**: El agente consulta la bandeja de entrada mediante `list_unread_emails()` o realiza búsquedas por palabras clave ("inicio del proyecto").
3. **Extracción y Comprensión del Contenido**: Obtiene el cuerpo con `get_email_content()` e identifica semánticamente el título propuesto, la fecha, la hora de inicio y fin, y los asistentes involucrados.
4. **Evaluación de Certeza y Validación con el Usuario**: Antes de ejecutar la acción, el agente resume los datos detectados y solicita confirmación al usuario para evitar errores de interpretación.
5. **Creación del Evento**: Tras recibir la aprobación, invoca `create_event()` en el calendario adecuado con los asistentes correspondientes.
6. **Notificación a los Asistentes**: Google Calendar envía automáticamente las invitaciones formales por correo electrónico con los enlaces de RSVP a cada asistente.
7. **Cierre del Ciclo**: El agente confirma al usuario que el evento ha sido programado con éxito y adjunta el enlace directo al calendario.

![Instrucción inicial al agente para buscar correo y agendar evento](/images/blog/google-workspace-skills/prompt1_booking.png)

*El usuario emite la instrucción en lenguaje natural. El agente interpreta el objetivo e inicia la búsqueda.*

![El agente finalizando y validando el proceso de reserva](/images/blog/google-workspace-skills/prompt2_booking.png)

*Tras extraer las fechas y participantes, el agente resume su propuesta y solicita confirmación previa.*

![Evento creado con éxito en Google Calendar](/images/blog/google-workspace-skills/calendar.png)

*El evento aparece registrado en Google Calendar con título, horario, descripción y lista de asistentes.*

![Correo de confirmación recibido por los asistentes](/images/blog/google-workspace-skills/calendar_email_confirmation.png)

*Los participantes reciben la notificación oficial de Google Calendar para confirmar su asistencia.*

![Notificación de cierre enviada por el agente](/images/blog/google-workspace-skills/agent_email_notification.png)

*El agente despacha una notificación de éxito al usuario, cerrando el flujo de orquestación.*

### 💬 El Agente de Respuesta Inteligente: Lectura y Respuesta de Correos

El agente escanea mensajes pendientes, comprende su contexto y formula respuestas profesionales de manera asistida o autónoma.

**Desglose detallado paso a paso:**

1. **Escaneo de Bandeja**: Consulta los correos no leídos con `list_unread_emails()`.
2. **Triaje de Mensajes**: Clasifica qué correos requieren respuesta obligatoria, cuáles son informativos y cuáles pueden ignorarse.
3. **Análisis de Contexto**: Descarga el cuerpo completo con `get_email_content()` y analiza las preguntas o solicitudes formuladas.
4. **Redacción de Respuesta**: Genera un borrador adaptando el tono (formal o cercano) y resolviendo las inquietudes planteadas.
5. **Confirmación y Envío**: Muestra el borrador al usuario para validación y lo despacha mediante `reply_email()`, garantizando que la respuesta conserve el hilo original en Gmail.
6. **Cierre**: Registra la interacción y marca la tarea como cumplida.

![Instrucción al agente para revisar no leídos y responder](/images/blog/google-workspace-skills/prompt1_reply.png)

*El usuario instruye al agente a atender los correos pendientes indicando las directrices de respuesta.*

![El agente analizando el contenido del correo no leído](/images/blog/google-workspace-skills/prompt2_reply.png)

*El agente extrae el contenido del mensaje y determina los puntos clave que deben abordarse.*

![El agente confirmando la respuesta redactada antes de enviarla](/images/blog/google-workspace-skills/prompt3_reply.png)

*El agente presenta el borrador redactado para su aprobación antes de emitir la respuesta.*

![Lista de correos no leídos en la interfaz del agente](/images/blog/google-workspace-skills/email_unread_question_screenshot.png)

*Vista estructurada de los correos detectados por el agente con sus respectivos identificadores y remitentes.*

![Detalle completo del mensaje analizado](/images/blog/google-workspace-skills/email_details_question_screenshot.png)

*Texto plano procesado por el agente a partir de las partes MIME del correo original.*

![Respuesta enviada con éxito en el hilo de conversación](/images/blog/google-workspace-skills/email_reply_screenshot.png)

*La respuesta despachada aparece correctamente vinculada dentro de la conversación en Gmail.*

### Patrones de Casos de Uso Extendidos

- **Reprogramación de Reuniones**: El agente localiza un evento por su título mediante `list_events()`, extrae la nueva fecha solicitada por correo, verifica que no existan solapamientos y ejecuta `update_event()`.
- **Generador de Resumen Matutino**: Recopila las reuniones del día con `list_events()`, resume los correos urgentes con `list_unread_emails()` y despacha un informe consolidado a las 8:00 AM con `send_email()`.
- **Rastreador de Seguimiento**: Identifica correos enviados sin respuesta tras un periodo de 5 días y genera borradores de seguimiento para reactivar la conversación.
- **Detección Proactiva de Conflictos**: Analiza periódicamente la agenda semanal y alerta al usuario si dos compromisos se superponen, sugiriendo bloques horarios alternativos.

### Uso de la API de Google en Cargas de Producción

![Uso de la API de Google](/images/blog/google-workspace-skills/google_api_usage.png)

El gráfico de métricas en Google Cloud Console ilustra la distribución de peticiones en entornos reales, demostrando cómo el reciclaje de tokens y la gestión eficiente de consultas optimizan el consumo dentro de las cuotas gratuitas de Google.

### Diseñando Nuevas Skills: Patrones de la Integración con Google

La integración con Google Workspace actúa como modelo de diseño para incorporar cualquier servicio externo al ecosistema OpenCode.

**Principios fundamentales de diseño:**
1. **Responsabilidad Única**: Cada skill debe ejecutar una tarea concreta y bien delimitada (`send_email` solo envía, `create_event` solo crea).
2. **Contratos Explícitos**: Parámetros obligatorios y opcionales documentados con precisión, especificando formatos y retornos esperados.
3. **Arquitectura en Capas**: Script CLI → Función de Librería → Cliente de API.
4. **Tratamiento Uniforme de Errores**: Retornos predecibles y códigos de salida estándar (0 para éxito, 1 para error).
5. **Metadatos Autodescriptivos**: Archivos `SKILL.md` legibles por agentes para su descubrimiento dinámico.
6. **Externalización de Configuraciones**: Parámetros de entorno, credenciales y firmas desacoplados del código fuente.

**Pasos para crear una nueva skill:**
1. Obtener credenciales y configurar el proyecto en la plataforma del servicio externo.
2. Desarrollar el módulo de autenticación y renovación de tokens en `libs/`.
3. Escribir las funciones centrales de la librería con validaciones e idempotencia.
4. Construir el script ejecutable en `scripts/` utilizando `argparse`.
5. Redactar el archivo `skills/<nombre-skill>/SKILL.md`.
6. Añadir la documentación técnica de referencia en `docs/`.
7. Registrar la skill en la tabla de referencia de `AGENTS.md`.
8. Ejecutar pruebas integrales (directa por CLI, importada en Python y mediante agentes).

## Resumen

La integración de Google Workspace en OpenCode proporciona una solución completa, segura y ampliamente documentada para automatizar operaciones de correo electrónico y calendario. Representa fielmente la visión de OpenClaw: otorgar a los agentes de inteligencia artificial la capacidad de interactuar con herramientas empresariales del mundo real y ejecutarlas de forma autónoma.

La arquitectura modular separa limpiamente las responsabilidades: `google_operations.py` gestiona la interacción directa con las APIs de Google, los scripts en `scripts/google/` brindan interfaces CLI para humanos y procesos del sistema operativo, y los archivos `SKILL.md` permiten que los agentes de IA descubran, comprendan y ejecuten estas herramientas mediante lenguaje natural.

Dominar estos patrones de autenticación OAuth 2.0, diseño de contratos y orquestación agéntica te permitirá no solo automatizar tareas cotidianas, sino construir verdaderos ecosistemas de agentes autónomos, confiables y listos para producción.
