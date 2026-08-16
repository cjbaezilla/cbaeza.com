---
title: "15m.chat: Chat Privado y Encriptado que se Autodestruye en 15 Minutos"
date: "21-02-2026"
excerpt: "Documentación técnica completa sobre la arquitectura, seguridad y desarrollo de 15m.chat: una aplicación web de mensajería efímera construida con CodeIgniter 4, encriptación AES-256 y autodestrucción automática."
author: "Carlos Baeza Negroni"
categories: ["Desarrollo Web", "Tutoriales"]
tags: ["PHP", "CodeIgniter", "Seguridad", "Criptografía", "MySQL", "Tailwind CSS", "Privacidad", "Chat Efímero", "Open Source", "Web Development"]
coverImage: "/images/blog/15chat_cover.png"
readTime: "25 min de lectura"
---

## Introducción

**15m.chat** es una aplicación web de mensajería privada diseñada para aquellas conversaciones que necesitan desaparecer después de un tiempo determinado. El nombre del proyecto hace referencia directa a los 15 minutos de vida útil que tiene cada sala de chat, una filosofía que pone la privacidad del usuario en primer plano y elimina la preocupación por conversaciones que ya no deberían existir.

A diferencia de las aplicaciones de mensajería tradicionales que almacenan tus conversaciones indefinidamente en sus servidores, 15m.chat opera bajo un principio fundamental: **la conversación existe solo durante el tiempo necesario y luego se desvanece para siempre**. No hay registros, no hay bases de datos permanentes de conversaciones, no hay cuentas que crear. Simplemente te conectas, hablas y cuando el tiempo se agota, todo desaparece como si nunca hubiera existido.

![15m.chat Portada Principal](/images/blog/15m-chat-horizontal-es.jpg)

Esta filosofía responde a una necesidad real en un mundo donde la privacidad digital se ha convertido en un lujo. Ya sea que necesites discutir información sensible con un colega, tener una conversación personal que no quieres que quede registrada, o simplemente prefieres no dejar rastro de tus comunicaciones, 15m.chat ofrece una solución elegante y funcional.

El proyecto está construido sobre el robusto framework **CodeIgniter 4**, utilizando **PHP 8.1+** como lenguaje de programación del lado del servidor. La arquitectura sigue el patrón MVC (Modelo-Vista-Controlador) que permite una separación limpia de responsabilidades y facilita el mantenimiento del código a largo plazo. La base de datos utiliza **MySQL** con un sistema de migraciones que permite versionar los cambios en la estructura de datos de manera controlada y ordenada.

A lo largo de este artículo, exploraremos cada componente del proyecto, desde la arquitectura general hasta los detalles más técnicos de implementación, pasando por las decisiones de diseño que hacen posible ofrecer una experiencia de chat segura, privada y efímera.

---

## Arquitectura General del Sistema

### Stack Tecnológico

El proyecto 15m.chat está construido sobre un stack tecnológico cuidadosamente seleccionado para cumplir con los objetivos de seguridad, rendimiento y mantenibilidad:

- **Backend**: El servidor está desarrollado en **PHP 8.1** o superior, aprovechando las características modernas del lenguaje como los tipos estrictos, las propiedades tipadas y las mejoras en el manejo de errores. CodeIgniter 4 fue elegido como framework por su ligereza, flexibilidad y excelente documentación. A diferencia de frameworks más pesados, CodeIgniter permite un control granular sobre cada aspecto de la aplicación sin imponer una estructura rígida que podría limitar las optimizaciones de rendimiento.
- **Base de Datos**: Se utiliza **MySQL** como sistema de gestión de base de datos relacional. La elección de MySQL se basa en su popularidad, estabilidad y excelente rendimiento para aplicaciones web de tamaño mediano. El sistema incluye un completo sistema de migraciones que permite crear, modificar y eliminar tablas de manera controlada, llevando un registro de versiones de la estructura de datos.
- **Frontend**: La interfaz de usuario está construida con **HTML5** semántico y **Tailwind CSS** para los estilos. Tailwind fue seleccionado porque permite crear interfaces modernas y adaptativas sin escribir CSS personalizado, lo que reduce la superficie de errores y facilita el mantenimiento. Para la funcionalidad dinámica, se utiliza **JavaScript vanilla** sin dependencias de frameworks pesados como React o Vue, manteniendo las páginas ligeras y rápidas.
- **Testing**: El proyecto incluye un completo conjunto de pruebas unitarias utilizando **PHPUnit**, el estándar de la industria para pruebas en PHP. Esto asegura que cada componente funcione correctamente antes de ser desplegado a producción.

![Logo 15m.chat](/images/blog/15m-chat-logo-gradient.png)

### Patrón MVC

La arquitectura del proyecto sigue estrictamente el patrón **Modelo-Vista-Controlador (MVC)**, que es el corazón de CodeIgniter:

- **Modelos (`app/Models/`)**: Los modelos son los encargados de interactuar directamente con la base de datos. Contienen toda la lógica relacionada con la persistencia de datos y las operaciones CRUD (Create, Read, Update, Delete). Cada tabla de la base de datos tiene su propio modelo que encapsula las consultas y la lógica de negocio relacionada.
- **Vistas (`app/Views/`)**: Las vistas son los archivos que generan la interfaz de usuario. Contienen HTML, CSS y JavaScript necesario para presentar la información al usuario. CodeIgniter utiliza un sistema de plantillas que permite reutilizar componentes comunes como la barra de navegación y el pie de página.
- **Controladores (`app/Controllers/`)**: Los controladores actúan como intermediarios entre las solicitudes del usuario y el resto de la aplicación. Reciben las peticiones, procesan los datos utilizando los modelos y devuelven las vistas apropiadas o respuestas JSON para las peticiones asíncronas.

Esta separación permite que el código sea más organizado, más fácil de probar y más sencillo de mantener. Si necesitas cambiar cómo se ven las páginas, trabajas en las vistas. Si necesitas cambiar la lógica de negocio, modificas los controladores. Si necesitas cambiar cómo se almacenan los datos, ajustas los modelos.

---

## Modelos de Datos

La base de datos de 15m.chat está diseñada para ser mínima y efímera. Solo almacena la información absolutamente necesaria para el funcionamiento del chat, y cada dato tiene una vida útil limitada por el tiempo de expiración de la sala.

### Chatroom (Salas de Chat)

El modelo **Chatroom** representa cada sala de conversación temporal. Es el contenedor principal donde ocurren las discusiones y tiene asociadas todas las demás entidades del sistema.

```php
class Chatroom extends Model
{
    protected $table = 'chatrooms';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'codigo_unico',
        'fecha_creacion',
        'fecha_expiracion',
        'creado_por'
    ];
}
```

La tabla de salas contiene los siguientes campos fundamentales:

- **id**: Identificador único de la sala, clave primaria auto-incremental.
- **codigo_unico**: Un identificador generado criptográficamente que permite acceder a la sala. Este código tiene 64 caracteres hexadecimales y es prácticamente imposible de adivinar o reutilizar.
- **fecha_creacion**: Timestamp de cuándo se creó la sala.
- **fecha_expiracion**: Timestamp de cuándo la sala dejará de existir. Inicializado a 15 minutos después de la creación.
- **creado_por**: Referencia al participante que creó la sala, usado para determinar quién tiene permisos de eliminación.

Cada sala tiene una vida útil máxima de 15 minutos, aunque los usuarios pueden eliminarla antes manualmente si lo desean. Una vez que la fecha de expiración pasa, la sala y todos sus datos asociados (mensajes y participantes) son eliminados automáticamente de la base de datos.

El modelo Chatroom incluye métodos especializados para gestionar el ciclo de vida de las salas:

- **`generarCodigoUnico()`**: Crea un código aleatorio seguro utilizando SHA-256 y el identificador único de PHP. El bucle do-while asegura que no haya colisiones con códigos existentes.
- **`crearSala()`**: Inicializa una nueva sala con su código único y calcula la fecha de expiración automáticamente.
- **`obtenerPorCodigo()`**: Recupera una sala válida (no expirada) usando su código único.
- **`eliminarExpiradas()`**: Método de limpieza que elimina todas las salas cuya fecha de expiración ya pasó.

### Mensaje

El modelo **Mensaje** representa cada mensaje enviado dentro de una sala. Cada mensaje está encriptado antes de ser almacenado, por lo que incluso si alguien obtuviera acceso a la base de datos, no podría leer el contenido de las conversaciones.

```php
class Mensaje extends Model
{
    protected $table = 'mensajes';
    protected $allowedFields = [
        'chatroom_id',
        'participante_id',
        'texto_encriptado',
        'fecha_envio'
    ];
}
```

Los campos de la tabla mensajes son:

- **id**: Identificador único del mensaje.
- **chatroom_id**: Referencia a la sala a la que pertenece el mensaje.
- **participante_id**: Referencia al usuario que envió el mensaje.
- **texto_encriptado**: El contenido del mensaje encriptado usando el sistema de encriptación de CodeIgniter.
- **fecha_envio**: Timestamp de cuándo se envió el mensaje.

El modelo Mensaje proporciona métodos esenciales para el funcionamiento del chat:

- **`enviarMensaje()`**: Encripta el texto del mensaje y lo almacena en la base de datos. Utiliza el servicio de encriptación de CodeIgniter para garantizar que el contenido sea ilegible sin la clave adecuada.
- **`obtenerMensajesSala()`**: Recupera todos los mensajes de una sala, desencriptando automáticamente el contenido antes de devolverlos. Realiza un JOIN con la tabla de participantes para obtener el nombre del autor de cada mensaje.
- **`enviarMensajeSistema()`**: Método especial para enviar mensajes del sistema, como notificaciones de entrada o salida de participantes.
- **`obtenerUltimoMensajeParticipante()`**: Recupera el mensaje más reciente de un participante específico, útil para implementar el sistema de cooldown.

### Participante

El modelo **Participante** representa a cada persona que se une a una sala de chat. No existe un concepto de "cuenta de usuario" persistente; en su lugar, cada sesión de chat genera una identidad temporal aleatoria.

```php
class Participante extends Model
{
    protected $table = 'participantes';
    protected $allowedFields = [
        'chatroom_id',
        'nombre_usuario'
    ];
}
```

Los campos son simples y directos:

- **id**: Identificador único del participante.
- **chatroom_id**: Código o referencia de la sala a la que pertenece el participante.
- **nombre_usuario**: Nombre temporal asignado aleatoriamente al participante.

El sistema de nombres aleatorios es una de las características más interesantes del proyecto. En lugar de pedir a los usuarios que creen cuentas o inventen sobrenombres, el sistema genera automáticamente nombres únicos y memorables compuestos por un adjetivo, un sustantivo y un número. Por ejemplo: "Alegre Tiburón Treinta y Dos" o "Valiente Astronauta Siete".

---

## Controladores

Los controladores son el cerebro de la aplicación, manejando las solicitudes HTTP y coordinando las respuestas apropiadas. Cada controlador está especializado en un aspecto específico de la funcionalidad.

### ChatroomController

El **ChatroomController** es responsable de toda la gestión de las salas de chat: creación, unión, verificación y eliminación. Es el controlador más complejo y el que más lógica de negocio contiene.

```php
class ChatroomController extends BaseController
{
    public function crear() { ... }
    public function unirse($codigo = null) { ... }
    public function verificar($codigo = null) { ... }
    public function sala($codigo = null) { ... }
    public function eliminar($codigo = null) { ... }
}
```

El método **`crear()`** es el punto de entrada para iniciar una nueva conversación:

1. Valida que el tipo de contenido de la solicitud sea correcto (JSON o form-data).
2. Genera un nombre aleatorio para el creador usando el `GeneradorNombres`.
3. Crea la sala en la base de datos con su código único y fecha de expiración.
4. Une automáticamente al creador como participante de la sala.
5. Almacena los datos del participante en la sesión, encriptados para mayor seguridad.
6. Devuelve el código de la sala y el enlace para compartir.

El método **`unirse($codigo)`** permite a un nuevo participante entrar a una sala existente:

1. Verifica que el código de sala sea válido y la sala no haya expirado.
2. Comprueba si el usuario ya tiene una sesión activa en esa sala (para mantener la identidad).
3. Si no tiene sesión, genera un nuevo nombre aleatorio y crea un nuevo participante.
4. Regenera el ID de sesión como medida de seguridad contra ataques de fijación de sesión.
5. Almacena los datos del participante en la sesión encriptada.
6. Devuelve la información necesaria para que el usuario pueda participar en el chat.

El método **`verificar($codigo)`** se utiliza para comprobar el estado de una sala desde el frontend:

1. Valida que el código exista y no haya expirado.
2. Recupera la lista de participantes actuales.
3. Sanitiza los datos de los participantes para prevenir ataques XSS.
4. Devuelve la información de expiración y participantes.

El método **`sala($codigo)`** renderiza la vista principal del chat:

1. Verifica que la sala exista y no haya expirado.
2. Determina si el usuario actual es el creador de la sala (para mostrar opciones de eliminación).
3. Carga la vista del chat con los datos necesarios.

El método **`eliminar($codigo)`** permite al creador borrar la sala antes de que expire:

1. Verifica que la solicitud sea POST (medida de seguridad).
2. Valida que el usuario sea efectivamente el creador de la sala.
3. Elimina todos los mensajes, participantes y la sala misma.
4. Limpia las sesiones de todos los participantes.
5. Notifica a todos los usuarios que la sala ha sido eliminada.

### MensajeController

El **MensajeController** maneja todo lo relacionado con el envío y recepción de mensajes dentro de las salas de chat.

```php
class MensajeController extends BaseController
{
    public function enviar() { ... }
    public function obtener($codigo = null) { ... }
    public function participantes($codigo = null) { ... }
}
```

El método **`enviar()`** procesa los nuevos mensajes:

1. Acepta tanto JSON como datos de formulario para mayor compatibilidad.
2. Valida que todos los campos requeridos estén presentes.
3. Verifica que la sala exista y no haya expirado.
4. Sanitiza el mensaje para prevenir XSS usando `htmlspecialchars`.
5. Verifica que el mensaje no exceda los 500 caracteres.
6. Implementa un sistema de cooldown de 3 segundos entre mensajes del mismo usuario.
7. Encripta el mensaje y lo almacena en la base de datos.

El método **`obtener($codigo)`** recupera los mensajes de una sala:

1. Verifica que la sala exista y no haya expirado.
2. Obtiene los mensajes desencriptados junto con la información de los participantes.
3. Sanitiza todos los datos antes de enviarlos al cliente.
4. Devuelve también la fecha de expiración para que el frontend pueda actualizar la cuenta regresiva.

El método **`participantes($codigo)`** devuelve la lista de usuarios en una sala:

1. Verifica que la sala exista.
2. Recupera la lista de participantes.
3. Devuelve el conteo y la lista de nombres.

### HomeController

El **HomeController** es el más simple de todos, responsable únicamente de renderizar la página principal del sitio:

```php
class Home extends BaseController
{
    public function index(): string
    {
        return view('home');
    }
}
```

La página principal es una landing page completa que incluye:

- Una sección hero con el llamado a la acción principal (crear sala).
- Información sobre las características del servicio.
- Una explicación de cómo funciona.
- Sección de seguridad y aspectos técnicos.
- Preguntas frecuentes (FAQ).
- Enlaces al wiki de documentación.

### WikiController

El **WikiController** gestiona el sistema de documentación del proyecto:

```php
class WikiController extends BaseController
{
    public function index(): string { ... }
    public function pagina(string $slug): string { ... }
}
```

Las páginas disponibles en el wiki son:

- **ayuda**: Guía de uso básico de la aplicación.
- **seguridad**: Explicación detallada de las medidas de seguridad implementadas.
- **como-funciona**: Explicación del funcionamiento técnico del sistema.
- **preguntas-frecuentes**: Respuestas a las dudas más comunes.
- **casos-uso**: Ejemplos prácticos de situaciones donde usar la aplicación.
- **referencia-tecnica**: Documentación técnica para desarrolladores.
- **vpn-privacidad**: Guía sobre privacidad digital y uso de VPNs.

---

## Librerías Personalizadas

El proyecto incluye varias librerías personalizadas que encapsulan funcionalidad específica y reutilizable en toda la aplicación.

### MensajeEncrypter

La librería **MensajeEncrypter** es responsable de toda la encriptación y desencriptación de mensajes en el sistema. Utiliza el sistema de encriptación nativo de CodeIgniter, que a su vez emplea el algoritmo AES-256 en modo CBC.

```php
class MensajeEncrypter
{
    private $encrypter;

    public function encriptar(string $mensaje): string
    {
        return $this->encrypter->encrypt($mensaje);
    }

    public function desencriptar(string $mensajeEncriptado): string
    {
        return $this->encrypter->decrypt($mensajeEncriptado);
    }
}
```

Esta librería proporciona varios métodos esenciales:

- **`encriptar()`**: Convierte texto plano en texto cifrado ilegible.
- **`desencriptar()`**: Revierte el proceso para recuperar el texto original.
- **`encriptarArray()`**: Permite encriptar estructuras de datos complejas (como objetos JSON).
- **`desencriptarArray()`**: Recupera estructuras de datos encriptadas.
- **`estaEncriptado()`**: Método de utilidad para verificar si un texto ya está encriptado.

La encriptación es fundamental para el modelo de seguridad del proyecto. Aunque la base de datos está protegida, hipotéticamente un atacante que ganara acceso a los registros no podría leer las conversaciones. Las claves de encriptación se configuran a nivel de aplicación y no se almacenan en la base de datos.

### GeneradorNombres

La librería **GeneradorNombres** es responsable de crear los identificadores amigables para los participantes. Es una de las características más distintivas del proyecto y añade personalidad a la experiencia de usuario.

```php
class GeneradorNombres
{
    private array $adjetivos = [...];
    private array $sustantivos = [...];
    private array $numeros = [...];

    public function generarNombre(): string
    {
        $adjetivo = $this->adjetivos[array_rand($this->adjetivos)];
        $sustantivo = $this->sustantivos[array_rand($this->sustantivos)];
        $numero = $this->numeros[array_rand($this->numeros)];

        return ucfirst($adjetivo) . ' ' . ucfirst($sustantivo) . ' ' . ucfirst($numero);
    }
}
```

El generador contiene arrays extensos de más de 500 adjetivos, 700 sustantivos y 100 números en español, creando millones de combinaciones posibles. Los nombres resultantes son memorables y únicos, como "Magnífico Dragón Cuarenta y Tres" o "Épico Unicornio Nueve".

La librería incluye varios métodos:

- **`generarNombre()`**: Genera un nombre completo con adjetivo, sustantivo y número.
- **`generarNombreSimple()`**: Versión sin número para usos donde se prefiera algo más conciso.
- **`generarAvatarSeed()`**: Genera una semilla MD5 consistente para generar avatares únicos.
- **`generarNombresMultiples()`**: Crea varios nombres únicos a la vez.
- **`getTotalCombinaciones()`**: Devuelve el número total de combinaciones posibles.

---

## Sistema de Seguridad

La seguridad es el pilar fundamental de 15m.chat. Cada decisión de diseño gira en torno a proteger la privacidad del usuario. El sistema implementa múltiples capas de protección que trabajan en conjunto.

### Encriptación de Mensajes

Como se mencionó anteriormente, todos los mensajes almacenados en la base de datos están encriptados. Esto significa que incluso si alguien lograra acceder a la base de datos, los mensajes serían texto ilegible sin las claves de desencriptación.

CodeIgniter utiliza el algoritmo **AES-256** en modo **CBC** para la encriptación, que es el estándar de la industria para encriptación de datos sensibles. Las claves se configuran externamente y nunca se almacenan junto con los datos encriptados.

### Filtros de Seguridad

El proyecto implementa varios filtros de CodeIgniter que se ejecutan en cada solicitud HTTP:

- **ContentSecurityPolicy (CSP)**: Este filtro añade encabezados HTTP de Política de Seguridad de Contenido que instruyen al navegador qué recursos puede cargar la página. Esta es una defensa fundamental contra ataques de Cross-Site Scripting (XSS).

El filtro CSP configurado permite:
- Scripts solo desde el mismo dominio y las CDN necesarias (TailwindCSS, FontAwesome, Flag Icons).
- Estilos desde el mismo dominio y las CDN configuradas.
- Imágenes desde el mismo dominio y la API de avatares (DiceBear).
- Fuentes desde CDN específicas.
- Bloquea objetos y frames de fuentes no confiables.

- **ContentTypeValidation**: Este filtro valida que las solicitudes tengan el tipo de contenido correcto para cada endpoint. Previene ataques donde un atacante podría enviar datos en un formato inesperado para explotar vulnerabilidades.

- **CustomCors**: Configura los encabezados de Cross-Origin Resource Sharing (CORS) para controlar qué dominios pueden acceder a la API. En producción, esto debería estar configurado de forma más restrictiva.

- **CsrfJson**: Implementa protección contra ataques Cross-Site Request Forgery (CSRF). El sistema genera un token CSRF único para cada sesión y lo verifica en cada solicitud POST, PUT o DELETE.

- **RateLimitCreate y RateLimitJoin**: Implementan limitación de tasa para evitar abusos en la creación de salas y unión a las mismas. Esto previene ataques de denegación de servicio y la creación masiva de salas.

### Validación de Entrada

Todos los datos que entran al sistema son validados y saneados:

- Los mensajes se sanitizan con `htmlspecialchars` para prevenir XSS.
- Los códigos de sala se validan para asegurar que tienen el formato correcto.
- Los parámetros se verifican para asegurar que no estén vacíos.
- Se implementan límites de longitud (500 caracteres por mensaje).

### Manejo de Sesiones

Las sesiones de los usuarios se manejan de forma segura:

- Los datos de los participantes se almacenan en la sesión encriptados.
- Se regenera el ID de sesión al unirse a una sala para prevenir ataques de fijación de sesión.
- Las sesiones son específicas para cada sala de chat.

---

## Sistema de Internacionalización

15m.chat soporta múltiples idiomas para llegar a una audiencia global. El sistema de internacionalización (i18n) permite cambiar el idioma de la interfaz sin modificar el código.

### Idiomas Soportados

El proyecto soporta los siguientes idiomas:

- Español (es)
- Inglés (en)
- Francés (fr)
- Alemán (de)
- Chino (zh)
- Coreano (ko)
- Portugués (pt)
- Ruso (ru)
- Árabe (ar)
- Japonés (ja)
- Hindi (hi)

### Archivos de Idioma

Los textos de la interfaz se almacenan en archivos PHP dentro de `app/Language/`. Cada idioma tiene su propio directorio y los textos se organizan por funcionalidad:

- **App.php**: Textos de la página principal, botones, secciones.
- **Chatroom.php**: Textos de la sala de chat, mensajes del sistema, errores.
- **Navigation.php**: Textos de la barra de navegación.
- **Wiki.php**: Textos de las páginas de documentación.
- **Validation.php**: Mensajes de validación de formularios.

El sistema de plantillas permite usar las traducciones directamente en las vistas:

```php
<?= lang('App.hero.btn_create_room') ?>
<?= lang('Chatroom.send_button') ?>
```

---

## Frontend e Interfaz de Usuario

La interfaz de usuario de 15m.chat está diseñada para ser mínima, intuitiva y funcional. Cada elemento está pensado para facilitar la experiencia de chat efímero.

### Tecnologías Frontend

- **HTML5 Semántico**: Se utiliza HTML semántico con etiquetas apropiadas (header, nav, main, section, footer) para una estructura accesible y amigable con motores de búsqueda.
- **Tailwind CSS**: El framework de estilos utility-first permite crear interfaces modernas y adaptativas sin escribir CSS personalizado. La configuración del tema incluye colores personalizados y animaciones.
- **JavaScript Vanilla**: No se utilizan frameworks de JavaScript pesados. Todo el código del lado del cliente está escrito en JavaScript puro, lo que mantiene las páginas ligeras y rápidas.

![15m.chat en Dispositivos Móviles](/images/blog/15m-chat-vertical-es.jpg)

### Componentes de Interfaz

**Página Principal (`home.php`)**: La landing page incluye múltiples secciones:
- **Hero Section**: Imagen del producto, título, descripción y botones de acción principales.
- **Características**: Tarjetas que destacan las funcionalidades clave (privacidad, sin registro, encriptación).
- **Cómo Funciona**: Explicación paso a paso del proceso de uso.
- **Seguridad Técnica**: Información sobre VPN, privacidad y aspectos técnicos.
- **FAQ**: Preguntas frecuentes expandibles.

**Sala de Chat (`chatroom.php`)**: La interfaz del chat incluye:
- **Header**: Temporizador de cuenta regresiva, botones de copiar enlace, compartir y eliminar sala.
- **Barra de Participantes**: Muestra los usuarios actualmente en la sala con sus avatares.
- **Área de Mensajes**: Lista de mensajes con información del remitente, contenido y hora.
- **Input de Mensaje**: Campo de texto con contador de caracteres y botón de envío.

**Navegación**: Barra fija en la parte superior con:
- Enlaces a Inicio y Wiki.
- Selector de idioma con banderas.
- Botón de "Chat Ahora" para crear salas rápidamente.

### Sistema de Avatares

Los avatares de los participantes se generan dinámicamente usando la API **DiceBear**. Esta API permite generar avatares únicos y atractivos basándose en una semilla (el nombre del usuario). Esto elimina la necesidad de que los usuarios suban sus propias imágenes y asegura consistencia visual.

### Diseño Adaptativo

La interfaz está diseñada para funcionar en cualquier dispositivo, desde teléfonos celulares hasta monitores de escritorio. Tailwind CSS facilita la creación de layouts adaptativos que se ajustan al tamaño de pantalla disponible.

---

## Base de Datos y Migraciones

El sistema de migraciones de CodeIgniter permite gestionar los cambios en la estructura de la base de datos de manera controlada y versionada.

### Estructura de Tablas

**Tabla chatrooms**: Almacena las salas de chat temporales.

```sql
CREATE TABLE chatrooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo_unico VARCHAR(64) UNIQUE,
    fecha_creacion DATETIME,
    fecha_expiracion DATETIME,
    creado_por INT UNSIGNED
);
```

**Tabla participantes**: Almacena los usuarios en cada sala.

```sql
CREATE TABLE participantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chatroom_id INT UNSIGNED,
    nombre_usuario VARCHAR(100)
);
```

**Tabla mensajes**: Almacena los mensajes encriptados.

```sql
CREATE TABLE mensajes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chatroom_id INT UNSIGNED,
    participante_id INT UNSIGNED,
    texto_encriptado TEXT,
    fecha_envio DATETIME
);
```

### Migraciones

Cada cambio en la estructura de la base de datos se documenta en una migración:

- **2026-01-29-110656_CrearTablaChatrooms.php**: Crea la tabla de salas.
- **2026-01-29-111716_CrearTablaParticipantes.php**: Crea la tabla de participantes.
- **2026-01-29-111800_CrearTablaMensajes.php**: Crea la tabla de mensajes.
- **2026-01-29-112328_CrearTriggerAutoEliminacion.php**: Crea un evento programado de MySQL para eliminar automáticamente salas expiradas cada minuto.

### Eventos Programados de Eliminación Automática

Una de las características más importantes del sistema es la **eliminación automática** de datos. 15m.chat no deja rastros de las conversaciones: cuando el tiempo expira, todo desaparece definitivamente.

El sistema implementa esta funcionalidad mediante un **evento programado de MySQL** (MySQL Event Scheduler), que es más robusto y confiable que los triggers tradicionales para esta tarea:

```php
// Migración: 2026-01-29-112328_CrearTriggerAutoEliminacion.php
$this->db->query("
    CREATE EVENT IF NOT EXISTS limpiar_chatrooms_expirados
    ON SCHEDULE EVERY 1 MINUTE
    DO
        DELETE FROM chatrooms 
        WHERE fecha_expiracion < NOW();
");

// Activar el programador de eventos
$this->db->query("SET GLOBAL event_scheduler = ON");
```

**Cómo funciona:**

1. **Evento programado**: Se crea un evento llamado `limpiar_chatrooms_expirados` que se ejecuta automáticamente cada 1 minuto.
2. **Verificación de expiración**: En cada ejecución, el evento elimina todas las salas cuya `fecha_expiracion` sea anterior a la hora actual (`NOW()`).
3. **Eliminación en cascada**: Las tablas de mensajes y participantes tienen claves foráneas con `ON DELETE CASCADE`, por lo que al eliminar una sala automáticamente se eliminan todos sus mensajes y participantes relacionados.
4. **Activación del scheduler**: El evento activa el `event_scheduler` de MySQL para garantizar que el programador esté funcionando.

**Ventajas del sistema de eventos sobre los triggers:**

- **Evita recursión**: Los triggers de base de datos pueden crear ciclos infinitos de ejecución si no se manejan correctamente. El sistema de eventos evita este problema por completo.
- **Independencia**: Los eventos de MySQL se ejecutan a nivel de base de datos, independientemente de la aplicación PHP, garantizando limpieza continua incluso si la aplicación no está recibiendo solicitudes.
- **Fiabilidad**: El programador de eventos de MySQL es un componente robusto y bien probado que garantiza ejecución puntual.

**Eliminación en cascada:**

Gracias a las restricciones de clave externa con `CASCADE DELETE`, cuando una sala se elimina, todos los datos relacionados se eliminan automáticamente:

- Al eliminar una sala -> se eliminan todos sus participantes
- Al eliminar participantes -> se eliminan todos sus mensajes

Esto asegura que no queden datos huérfanos en la base de datos y que la limpieza sea completa y automática.

---

## Testing

El proyecto incluye un completo conjunto de pruebas unitarias que verifican el funcionamiento correcto de los componentes críticos.

### PHPUnit

Las pruebas se ejecutan utilizando PHPUnit, el estándar para pruebas en PHP. La configuración se encuentra en `phpunit.xml.dist`.

### Ejecución de Tests

Los comandos disponibles para ejecutar pruebas son:

```bash
# Ejecutar todos los tests
composer test
php vendor/bin/phpunit

# Ejecutar un test específico
php vendor/bin/phpunit tests/unit/HealthTest.php

# Ejecutar tests de un directorio
php vendor/bin/phpunit tests/unit/

# Generar reporte de cobertura
php vendor/bin/phpunit --coverage-html=tests/coverage/
```

### Cobertura de Código

El sistema puede generar reportes de cobertura de código que muestran qué porcentaje del código es ejecutado durante las pruebas. Esto ayuda a identificar áreas que necesitan más pruebas.

---

## Comandos y Utilidades

El proyecto incluye comandos CLI personalizados que facilitan tareas administrativas y de desarrollo:

- **VerificarMensajes**: Comando que verifica el estado de los mensajes en la base de datos, útil para depuración y mantenimiento.
- **NamesDictionaryGenerator**: Genera y actualiza los diccionarios de nombres aleatorios, permitiendo expandir o modificar las listas de adjetivos y sustantivos.
- **TestEventScheduler**: Utilidad para probar el sistema de programación de eventos de CodeIgniter.

---

## Características Avanzadas

### Sistema de Cooldown

Para prevenir spam y abuso, el sistema implementa un cooldown de 3 segundos entre mensajes del mismo usuario. Esto se verifica tanto en el servidor como en el cliente para una experiencia fluida.

### Eliminación Automática

Las salas expiradas se eliminan automáticamente de la base de datos. El sistema puede configurarse para ejecutar una limpieza periódica de registros expirados.

### Verificación de Permisos

Solo el creador de una sala puede eliminarla antes de que expire. El sistema verifica esto comparando el ID del participante almacenado en la sesión con el campo `creado_por` de la sala.

### Protección contra XSS

Todos los datos que se envían al navegador se sanitizan apropiadamente para prevenir ataques de Cross-Site Scripting. Esto incluye nombres de usuarios, contenido de mensajes y cualquier otro dato dinámico.

### Política de SEO para Chats

Las páginas de salas de chat incluyen meta tags que instruyen a los motores de búsqueda a no indexar ni seguir los enlaces:

```html
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
```

---

## Mejores Prácticas Implementadas

El proyecto sigue numerosas mejores prácticas de desarrollo de software:

- **Seguridad por diseño**: Cada decisión de implementación considera las implicaciones de seguridad. La encriptación, la validación de entrada y los filtros HTTP son parte fundamental del código, no añadidos posteriores.
- **Código limpio**: El código sigue las convenciones de CodeIgniter y PHP, con nombres descriptivos, métodos pequeños y responsabilidades bien definidas.
- **Separación de preocupaciones**: Cada componente tiene una responsabilidad única y clara. Los modelos manejan datos, los controladores manejan flujo, las vistas manejan presentación.
- **Mantenibilidad**: El código está documentado con comentarios cuando es necesario, utiliza tipos estrictos y sigue un estilo consistente.
- **Testing**: Las pruebas unitarias verifican el funcionamiento correcto de los componentes críticos.

---

## Casos de Uso

15m.chat es útil en diversas situaciones donde la privacidad y la naturaleza efímera de los datos son primordiales:

- **Discusiones laborales sensibles**: Cuando necesitas hablar de información confidencial con colegas sin que quede registrada.
- **Conversaciones personales**: Para esas charlas que prefieres que no queden archivadas para siempre.
- **Entrevistas y reclutamiento**: Facilita entrevistas técnicas o evaluaciones sin la preocupación de grabaciones o historiales.
- **Grupos de estudio**: Para colaborar en proyectos educativos sin dejar rastro.
- **Pruebas y demos**: Ideal para demostrar funcionalidades sin crear cuentas permanentes.
- **Periodismo**: Permite comunicarse con fuentes de manera segura y confidencial.

---

## Consideraciones Técnicas Adicionales

### Rendimiento

El sistema está diseñado para ser ligero y rápido. No hay búsquedas complejas, las consultas son simples y directas, y la base de datos se mantiene pequeña gracias a la eliminación automática de registros antiguos.

### Escalabilidad

Aunque el proyecto está diseñado para uso individual o de pequeños grupos, la arquitectura permite escalar verticalmente añadiendo más servidores web y configurando balanceo de carga.

### Privacidad

El proyecto no recopila datos personales más allá de lo necesario para el funcionamiento. No hay sistemas de analíticas complejas, no se rastrean usuarios entre sesiones, y toda la información se elimina cuando expira la sala.

---

## Conclusión

15m.chat representa una implementación sólida y bien pensada de una idea simple pero poderosa: la mensajería efímera y privada. Cada componente del sistema ha sido diseñado con la privacidad y seguridad del usuario en mente, desde la encriptación de mensajes hasta la eliminación automática de datos.

El proyecto demuestra cómo las mejores prácticas de desarrollo web moderno (framework robusto, pruebas, código limpio, seguridad por defecto) pueden combinarse para crear una herramienta que realmente respeta la privacidad del usuario.

Ya sea que necesites una herramienta para conversaciones laborales confidenciales, discusiones personales privadas, o simplemente prefieras no dejar rastro de tus comunicaciones, 15m.chat ofrece una solución elegante, funcional y segura.

El código está disponible para su estudio, modificación y mejora bajo los términos de la licencia MIT incluida en el repositorio.
