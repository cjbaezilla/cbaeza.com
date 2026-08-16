---
title: "Construyendo una Organización Autónoma Descentralizada: Guía práctica y completa de gobernanza DAO"
date: "12-04-2026"
excerpt: "Guía paso a paso y exhaustiva para construir un sistema completo de gobernanza DAO desde cero con Solidity, OpenZeppelin y la interfaz Tally, desplegado y verificado en la red de pruebas Sepolia."
author: "Carlos Baeza Negroni"
categories: ["Tutoriales", "Solidity"]
tags: ["DAO", "Gobernanza", "Solidity", "Smart Contracts", "OpenZeppelin", "Tally", "Ethereum", "Sepolia", "Web3", "ERC20Votes", "TimelockController"]
coverImage: "/images/blog/dao_handson_cover.png"
readTime: "40 min de lectura"
featured: false
---

Me complace presentar un sistema de gobernanza de organización autónoma descentralizada (DAO) totalmente funcional que empodera a las comunidades para tomar decisiones colectivas de manera transparente y democrática. Lo que he creado proporciona un enfoque efectivo sobre cómo las personas pueden trabajar juntas y gobernarse a sí mismas, ofreciendo una alternativa real frente a las estructuras jerárquicas tradicionales. Esto no es un concepto abstracto encerrado en documentos de investigación teóricos. Es un sistema en funcionamiento que cualquiera puede utilizar para construir su propia organización impulsada por la comunidad, diseñado como una experiencia práctica de aprendizaje.

A través de esta guía, aprenderás paso a paso utilizando la biblioteca de contratos inteligentes seguros de OpenZeppelin y la interfaz intuitiva de Tally, adquiriendo las habilidades prácticas necesarias para lanzar y gestionar tu propia DAO. Mi misión es hacer que la gobernanza descentralizada sea accesible para todos, sin importar tu formación técnica previa. Mi objetivo es equiparte con conocimientos reales y aplicables que te permitan convertirte en un constructor de DAOs. Las herramientas disponibles y los enfoques documentados te permitirán explorar cómo esta tecnología puede habilitar nuevas formas para que las comunidades se organicen, tomen decisiones y generen valor compartido.

- **Repositorio de GitHub con los contratos funcionales en Solidity:** [https://github.com/cjbaezilla/Your-First-DAO-Solidity-Token-OpenZeppelin-Tally-Tutorial](https://github.com/cjbaezilla/Your-First-DAO-Solidity-Token-OpenZeppelin-Tally-Tutorial)

![Panel Principal de Tally](/images/blog/dao-screenshot-tally2.png)

## ¿Qué son las DAOs?

Cuando me encontré por primera vez con el concepto de DAO, me impactó profundamente cómo reimagina algo fundamental: la manera en que las personas se organizan para alcanzar metas comunes. Una DAO, que significa Organización Autónoma Descentralizada, representa una nueva forma para que las comunidades se gobiernen colectivamente mediante código, en lugar de recurrir a jerarquías corporativas tradicionales o estructuras burocráticas. En esencia, una DAO es simplemente un grupo de personas que han acordado seguir un conjunto de reglas codificadas en software que ejecuta automáticamente las decisiones colectivas. Imagínalo como una cooperativa digital donde cada miembro tiene voz y voto, y donde las reglas no las imponen gerentes o jefes, sino programas informáticos transparentes que se ejecutan sobre una cadena de bloques (blockchain).

Lo que hace que este enfoque sea tan poderoso es que las reglas residen en contratos inteligentes (smart contracts), que son programas autoejecutables que no pueden alterarse sin el consentimiento explícito de la comunidad. Esto genera un nivel de confianza y transparencia muy difícil de lograr en organizaciones tradicionales. Cuando una DAO toma una decisión, dicha decisión se ejecuta automáticamente según las reglas predefinidas, y todo el proceso queda registrado de forma permanente en la blockchain, donde cualquiera puede auditarlo. No existen reuniones secretas, ni acuerdos a puertas cerradas, ni una persona individual que pueda cambiar arbitrariamente las reglas o desviar fondos. La tesorería, que representa los recursos compartidos de la comunidad, se controla colectivamente mediante votaciones, y cada transacción es visible para todos los miembros.

Quiero enfatizar que las DAOs no son una fantasía futurista; existen hoy y ya gestionan recursos sustanciales en múltiples sectores. Desde protocolos de finanzas descentralizadas (DeFi) que gobiernan miles de millones en fondos de usuarios, hasta comunidades de creadores que coordinan proyectos artísticos; desde clubes de inversión que reúnen capital para adquirir activos valiosos, hasta grupos sociales organizados en torno a valores compartidos. Las DAOs están experimentando con nuevas formas de coordinación humana. Lo que más me entusiasma es lo accesible que puede ser este modelo: cualquier persona con conexión a internet y una pequeña cantidad de criptomonedas puede participar o crear una DAO, derribando las barreras geográficas e institucionales que históricamente limitaban quién podía participar en la toma de decisiones colectivas.

La base de la mayoría de las gobernanzas de DAO es el token. Cuando posees tokens de gobernanza en una DAO, esos tokens representan tu participación en la comunidad y, por lo general, te otorgan poder de voto sobre las propuestas. La economía del token varía según el proyecto. Algunas DAOs utilizan un modelo de un token, un voto, donde el poder de voto se correlaciona con la participación financiera, mientras que otras emplean tokens intransferibles (soulbound tokens) o votaciones basadas en NFTs, donde cada miembro obtiene una representación equitativa independientemente de sus posesiones. Esta flexibilidad permite que diferentes comunidades elijan el modelo de gobernanza que mejor se adapte a sus valores y objetivos. Lo primordial es que el mecanismo de votación sea transparente, matemáticamente justo y resistente a manipulaciones.

La historia de las DAOs nos enseña tanto las grandes promesas como los riesgos de este enfoque. Las semillas conceptuales se plantaron alrededor de 2013 dentro de las primeras comunidades cripto que soñaban con organizaciones descentralizadas, pero el primer gran experimento llegó en 2016 con un proyecto llamado simplemente "The DAO". Esta ambiciosa iniciativa llevó a cabo una venta de tokens en la blockchain de Ethereum y recaudó más de 150 millones de dólares de miles de colaboradores de todo el mundo. Su propósito era funcionar como un fondo de capital de riesgo descentralizado donde los titulares de tokens votaban sobre las propuestas de inversión. El entusiasmo era enorme: se trataba de una prueba real de si personas desconocidas entre sí podían coordinarse eficazmente solo a través de código.

![Portada: Construyendo una Organización Autónoma Descentralizada](/images/blog/dao-governance-1.jpg)

Lamentablemente, el lanzamiento de The DAO estuvo acompañado por uno de los sucesos más conocidos en la historia de las criptomonedas. Atacantes desconocidos aprovecharon una vulnerabilidad en el código del contrato inteligente y drenaron aproximadamente 60 millones de dólares en Ethereum. El incidente generó gran conmoción en el ecosistema emergente y forzó una profunda reflexión sobre las prácticas de seguridad. Lo que ocurrió después se convirtió en un hito: la comunidad de Ethereum decidió realizar una bifurcación dura (hard fork) en la blockchain para restaurar los fondos sustraídos, dando lugar a dos cadenas separadas. Ethereum continuó con la reversión, mientras que Ethereum Classic persistió con el registro inmutable original. Esta bifurcación demostró que la descentralización enfrenta pruebas complejas ante fallas críticas, y enseñó a la industria lecciones invaluables sobre la necesidad de auditorías rigurosas, verificación formal y patrones de diseño conservadores.

A partir de ese difícil comienzo, las DAOs han madurado drásticamente. El panorama actual cuenta con miles de DAOs activas que gestionan miles de millones de dólares en activos: desde DAOs de gobernanza de protocolos que controlan aplicaciones DeFi como Uniswap y Compound, hasta DAOs de coleccionistas en proyectos NFT como PleasrDAO (que agrupan recursos para adquirir arte digital de gran relevancia cultural), sindicatos de inversión como Flamingo DAO, organizaciones de subsidios como MolochDAO (que financia el desarrollo de infraestructura en Ethereum), y clubes sociales o medios de comunicación que experimentan con la propiedad comunitaria. La diversidad es notable y demuestra la gran adaptabilidad del modelo DAO.

Lo que continúa inspirándome es la cultura de colaboración de código abierto que rodea el desarrollo de las DAOs. La mayoría de las bases de código de las DAOs son auditables públicamente, con contratos verificados en exploradores de bloques para que cualquiera los examine. Existen firmas de seguridad especializadas en auditar estos contratos y protocolos de seguros como Nexus Mutual para ofrecer cobertura ante fallas técnicas. El ecosistema de herramientas se ha expandido enormemente. Marcos de trabajo como OpenZeppelin Governor y Aragon ofrecen plantillas probadas en batalla que evitan tener que reinventar la rueda, mientras que interfaces de usuario como Tally, Snapshot y Commonwealth hacen que la participación sea accesible para usuarios sin perfil técnico. La curva de aprendizaje sigue existiendo, pero cada día es más accesible gracias a una mejor documentación y recursos educativos.

Las aplicaciones potenciales se extienden mucho más allá de la gobernanza financiera. Veo DAOs utilizándose en colectivos de acción climática que coordinan iniciativas de sostenibilidad, comunidades de músicos que comparten regalías y decisiones, grupos de investigación académica que gestionan financiamiento y derechos de publicación, experimentos de planificación urbana que otorgan a los vecinos voz directa en decisiones locales, y fondos globales para bienes públicos. El elemento común es que las DAOs destacan al coordinar grupos de personas que quizás no se conocen personalmente, pero que comparten incentivos alineados y desean tomar decisiones con total transparencia en lugar de depender de una autoridad centralizada.

Sin embargo, también reconozco los desafíos existentes. El estatus legal sigue siendo incierto en muchas jurisdicciones: ¿son las DAOs sociedades comerciales, corporaciones o una figura completamente nueva? La claridad regulatoria avanza a diferentes ritmos. La participación a menudo se ve afectada por una baja concurrencia de votantes, ya que muchos miembros no disponen del tiempo o los conocimientos técnicos para evaluar cada propuesta. Los ataques a la gobernanza, como la compra de votos o los ataques Sybil (creación de múltiples identidades para acumular votos), continúan siendo riesgos a considerar. La complejidad técnica puede resultar intimidante, y las consecuencias de una gobernanza mal diseñada pueden ser serias. Estas limitaciones no significan que las DAOs no tengan futuro; significan que debemos seguir aprendiendo a diseñar sistemas descentralizados que equilibren eficiencia con equidad, agilidad con seguridad e inclusión con resiliencia.

Lo que me da optimismo es que estos retos se están abordando mediante mejoras iterativas. Nuevos mecanismos como la votación cuadrática y la votación por convicción buscan representar mejor la intensidad de las preferencias y evitar el dominio de las grandes cuentas (ballenas). Los experimentos con delegación de voto permiten concentrar conocimientos especializados manteniendo una amplia base de participación. Los enfoques híbridos combinan la gobernanza on-chain con la señalización off-chain para reducir los costos de transacción. Los marcos regulatorios están surgiendo gradualmente para dar a las DAOs un respaldo legal más claro. Y lo más importante: la comunidad global de constructores de DAOs comparte sus conocimientos abiertamente, aprendiendo tanto de los éxitos como de los errores.

Para mí, las DAOs representan más que una innovación técnica; encarnan un cambio filosófico hacia una mayor transparencia, participación democrática y propiedad colectiva. Desafían la premisa de que las organizaciones deban tener una estructura piramidal con el poder concentrado en la cúspide. Plantean la posibilidad de construir sistemas donde las reglas se apliquen a todos por igual, donde los miembros puedan verificar los procesos por sí mismos y donde el poder fluya desde las bases hacia arriba. No creo que las DAOs reemplacen por completo a las corporaciones o gobiernos, pero sí considero que ofrecen un camino intermedio muy valioso: organizaciones que no son burocracias rígidas ni estructuras desorganizadas, sino espacios donde los miembros moldean activamente su destino común a través de procesos claros y basados en reglas.

Si tienes curiosidad sobre las DAOs pero te sientes abrumado por los detalles técnicos, quiero asegurarte que la comprensión llega de manera gradual. Empieza uniéndote a una DAO existente como espectador, observa cómo se presentan y votan las propuestas, participa en los foros comunitarios y profundiza poco a poco. La riqueza de este ecosistema radica en que la propia participación genera conocimiento. Cada voz cuenta en estos experimentos, y todos estamos aprendiendo juntos a hacer que la gobernanza descentralizada funcione a escala. Lo que he construido aquí es una contribución a esa exploración continua: una demostración práctica de cómo implementar una gobernanza segura y transparente mediante componentes probados. Tómalo como una invitación a explorar lo que las comunidades descentralizadas pueden lograr cuando se gobiernan con claridad y un propósito común.

![Diferentes Tipos de DAOs](/images/blog/dao-governance-2.jpg)

## Diferentes Tipos de DAOs

Quiero compartir contigo la notable variedad de DAOs que existen hoy en día, ya que demuestra la gran versatilidad de este modelo de gobernanza. Cuando exploro el ecosistema DAO, veo a comunidades utilizando esta tecnología para resolver desafíos humanos reales de maneras que las organizaciones tradicionales difícilmente pueden igualar. Cada tipo de DAO representa una aplicación distinta de los mismos principios fundamentales: reglas transparentes, toma de decisiones colectiva y ejecución automatizada a través de código.

Las **Protocol DAOs** representan una de las aplicaciones más maduras e influyentes de esta tecnología. Estas DAOs gobiernan protocolos de finanzas descentralizadas que administran miles de millones de dólares en fondos de usuarios. Cuando interactúas con una plataforma de préstamos como Compound o un intercambio descentralizado como Uniswap, esos protocolos son gestionados por los titulares de tokens que votan sobre decisiones críticas. Resulta fascinante ver cómo estas comunidades deciden desde las estructuras de comisiones que impactan a miles de usuarios, hasta actualizaciones técnicas que deben sopesar seguridad y funcionalidad. Las decisiones de gestión de tesorería tomadas por estas DAOs determinan cómo se utilizan los ingresos del protocolo, si se distribuyen rendimientos o cómo se financia el desarrollo continuo. Lo que más destaca es que estos protocolos operan sin una estructura corporativa tradicional; en su lugar, confían en los titulares de tokens con incentivos alineados para tomar decisiones que beneficien la salud a largo plazo del sistema. Los tokens de gobernanza funcionan de manera análoga a las acciones en una cooperativa, pero con la transparencia de tener todas las acciones registradas on-chain para que cualquiera pueda auditarlas.

Las **Collector DAOs** llaman la atención porque combinan la propiedad digital con la coordinación comunitaria de forma natural. Estas DAOs se forman en torno a colecciones de NFTs, creando comunidades donde cada token representa membresía y derechos de voto. Pensemos en PleasrDAO, que nació como un grupo de coleccionistas que unieron recursos para adquirir obras de arte digital de alto impacto cultural, o en Flamingo DAO, que tokeniza la propiedad de NFTs para permitir inversiones fraccionadas en piezas de gran valor. Lo que hace especiales a las Collector DAOs es que el propio NFT se convierte en la insignia de membresía, creando una alineación directa entre el valor artístico o cultural y la participación en la gobernanza. Estas comunidades deciden colectivamente cómo utilizar sus fondos compartidos, ya sea para adquirir nuevas obras, licenciar creaciones existentes para uso comercial o colaborar en nuevos proyectos. El modelo de gobernanza funciona adecuadamente aquí porque cada NFT único suele otorgar un voto sin importar cuántas copias posea una persona, evitando que los grandes compradores monopolicen las decisiones y asegurando que cada miembro conserve una voz equitativa. Veo a las Collector DAOs como pioneras de nuevas formas de mecenazgo digital, donde artistas y coleccionistas establecen relaciones duraderas regidas por reglas compartidas.

Las **Investment DAOs** extienden este modelo de coordinación al mundo de las inversiones financieras, democratizando el acceso a oportunidades que antes estaban reservadas para inversionistas acreditados. Estas DAOs agrupan capital de múltiples participantes y toman decisiones de inversión colectivas mediante votaciones. Se trata de estructuras donde los miembros proponen inversiones en startups, adquisiciones de bienes raíces o acuerdos de capital de riesgo, y la comunidad evalúa y vota cada oportunidad. La tesorería se gestiona de manera transparente on-chain y cada decisión de inversión sigue el mismo proceso de gobernanza. Lo valioso de las Investment DAOs es su capacidad para sumar pequeños montos de capital de muchas personas y dirigirlos hacia proyectos que las finanzas tradicionales podrían pasar por alto. El mecanismo asegura que las decisiones reflejen la inteligencia colectiva en lugar del criterio de un único gestor de fondos. Si bien estas DAOs enfrentan desafíos regulatorios a medida que evolucionan las leyes de valores, el experimento demuestra cómo las comunidades pueden aunar recursos y tomar decisiones financieras complejas en conjunto.

Las **Social DAOs** son quizás las más ambiciosas, ya que buscan recrear el sentido de comunidad cercana con valores compartidos en un formato digital y distribuido globalmente. Estas DAOs suelen requerir que los miembros posean tokens específicos o NFTs para acceder a canales privados, eventos o recursos compartidos. Considero a las Social DAOs como clubes digitales donde la membresía tiene un significado que va más allá del beneficio financiero. Algunas funcionan como redes profesionales exclusivas, otras como colectivos creativos, y otras como clubes sociales con encuentros presenciales coordinados mediante gobernanza digital. Su éxito radica en que alinean incentivos en torno a una identidad y un propósito común. Los miembros pueden financiar un espacio de trabajo compartido, organizar conferencias, publicar investigaciones o apoyar mutuamente sus proyectos. Las decisiones de gobernanza reflejan el tipo de comunidad que desean construir. Resulta de gran interés ver cómo las Social DAOs experimentan con nuevos esquemas económicos para el trabajo creativo, el intercambio de conocimientos y el apoyo mutuo, explorando alternativas a las relaciones laborales tradicionales.

Las **Grant DAOs** representan una de las aplicaciones con mayor impacto social, ya que canalizan financiamiento hacia bienes públicos y el desarrollo del ecosistema. Estas DAOs reciben donaciones o generan ingresos a través de tarifas para luego distribuir subvenciones a desarrolladores, investigadores, artistas y organizadores comunitarios. Un ejemplo claro son los fondos del propio ecosistema de Ethereum, que han respaldado numerosos proyectos de infraestructura, o Gitcoin Grants, que utiliza financiamiento cuadrático para amplificar las donaciones pequeñas. El proceso habitual implica que los miembros propongan beneficiarios, deliberen sobre el impacto y voten la asignación de fondos. Las Grant DAOs crean mecanismos de financiamiento sostenibles para labores que tal vez no atraerían capital de riesgo tradicional, pero que benefician a todo el ecosistema. La transparencia permite a los donantes ver con exactitud el destino de sus aportes, y el proceso democrático asegura que las decisiones reflejen las prioridades comunitarias.

Las **Media DAOs** están experimentando con enfoques novedosos para la creación de contenidos y el periodismo. En estas DAOs, los titulares de tokens votan sobre las líneas editoriales, las prioridades temáticas e incluso sobre investigaciones específicas a desarrollar. Existen modelos donde los periodistas son financiados directamente por la comunidad en lugar de depender de anunciantes o suscripciones, logrando independencia de la economía tradicional de medios. Algunas Media DAOs permiten a sus miembros curar lo que se publica, otras facilitan que los titulares de tokens financien investigaciones mediante propuestas, y otras prueban esquemas de atribución e ingresos compartidos donde los colaboradores reciben tokens por su trabajo. La ventaja de las Media DAOs reside en realinear los incentivos entre creadores y audiencias: cuando la audiencia participa en la gobernanza, las decisiones editoriales priorizan las necesidades de información de la comunidad en lugar de métricas de clics fáciles. Aunque estos experimentos son incipientes y enfrentan retos sobre sostenibilidad y estándares periodísticos, constituyen un esfuerzo relevante por reconstruir la confianza a través de la transparencia y la propiedad compartida.

La flexibilidad de este modelo permite que cualquier grupo con un objetivo común adapte las estructuras DAO a sus requerimientos particulares. Existen DAOs educativas que coordinan comunidades de aprendizaje, DAOs climáticas que financian iniciativas ecológicas y proyectos de desarrollo comunitario donde los vecinos participan en decisiones locales mediante votación con tokens. El factor común es la búsqueda de una coordinación basada en reglas transparentes sin concentrar el poder en una sola persona, permitiendo a los miembros verificar los procesos y evolucionar la gobernanza según la experiencia. Esta adaptabilidad permite que las DAOs complementen a muchas organizaciones existentes, ofreciendo una estructura organizada y flexible donde las comunidades establecen sus normas y rinden cuentas a través del código.

Al analizar estos tipos de DAOs, se observa cómo cada uno resuelve un problema específico de coordinación que las estructuras tradicionales atienden con dificultad: las Protocol DAOs permiten gobernar infraestructura técnica compartida; las Collector DAOs crean esquemas para la custodia cultural; las Investment DAOs democratizan la asignación de capital; las Social DAOs generan pertenencia a distancia; las Grant DAOs financian bienes de beneficio general; y las Media DAOs exploran un periodismo transparente. Juntas demuestran que la gobernanza descentralizada es un conjunto de herramientas adaptable a cada circunstancia particular.

![Nuestra Implementación: La Base Técnica](/images/blog/dao-governance-3.jpg)

## Nuestra Implementación: La Base Técnica

Al momento de construir mi propio sistema de gobernanza DAO, busqué diseñar una solución que fuera tanto segura como comprensible, sirviendo como una base sólida para que las comunidades puedan autogobernarse eficazmente. Elegí desarrollar utilizando los contratos de OpenZeppelin por ser la biblioteca de contratos inteligentes más confiable y extendida de la industria. OpenZeppelin ha dedicado años a crear, probar y auditar su código mediante investigación de seguridad y revisión comunitaria. Al emplear sus contratos, nos apoyamos en soluciones maduras en lugar de implementar mecanismos complejos de seguridad desde cero. Sus contratos Governor proveen un marco completo que puede personalizarse según las necesidades de cada comunidad, heredando los estándares de seguridad acumulados durante años.

El sistema consta de dos contratos principales que interactúan de forma continua:
1. **DAOToken**: Administra la creación y gestión de los tokens de gobernanza que representan el poder de voto.
2. **DAOGovernor**: Gestiona todo el ciclo de vida de las propuestas, desde su creación y votación hasta su ejecución.

Ambos contratos se encuentran vinculados a través de un tercer componente: el **TimelockController**, que añade un período de espera obligatorio de seguridad antes de que cualquier propuesta aprobada surta efecto. Esta arquitectura de tres partes establece un equilibrio donde ningún componente concentra excesivo control y cada acción relevante requiere la aprobación de la comunidad.

El contrato **DAOToken** implementa el estándar ERC20 comúnmente utilizado para tokens digitales, incorporando extensiones especializadas para registrar con precisión el poder de voto. Cuando un usuario posee estos tokens, puede participar en las decisiones de gobernanza. El token incluye la funcionalidad de puntos de control (checkpoints), lo que significa que registra el saldo de cada titular en momentos específicos en el tiempo. Esto resulta fundamental para garantizar votaciones justas, impidiendo que alguien compre tokens justo antes del cierre de una propuesta o los venda inmediatamente después de emitir su voto. La instantánea (snapshot) se toma en un momento predeterminado, fijando el poder de voto de cada participante para esa propuesta en particular, garantizando que el resultado refleje la postura genuina de la comunidad.

El contrato **DAOGovernor** contiene la lógica central de la gobernanza. Hereda de múltiples módulos de OpenZeppelin, cada uno aportando una función específica:
- `GovernorSettings`: Permite configurar los parámetros temporales, tales como la duración de la votación y el período de espera previo.
- `GovernorCountingSimple`: Proporciona el mecanismo básico de votación con opciones a favor (For), en contra (Against) o abstención (Abstain).
- `GovernorVotes`: Se conecta con el contrato del token para consultar el poder de voto de cada usuario a partir de los checkpoints.
- `GovernorVotesQuorumFraction`: Establece el porcentaje del suministro total que debe participar para que una propuesta sea válida.
- `GovernorTimelockControl`: Se integra con el TimelockController para asegurar que las propuestas aprobadas no se ejecuten de inmediato, sino tras un período de seguridad.

Este diseño modular ofrece la flexibilidad necesaria para ajustar el sistema sin añadir complejidad innecesaria. Si en el futuro se requiere cambiar el contrato del token, es posible desplegar un nuevo gobernador que apunte a ese nuevo token. Si la comunidad determina mediante votación que se necesitan períodos de votación más extensos, esos parámetros pueden actualizarse mediante el propio proceso de gobernanza. El constructor recibe dos parámetros (la dirección del token y la dirección del timelock) y vincula todos los componentes, facilitando el mantenimiento y las mejoras progresivas.

Respecto a la distribución del poder de voto, la mayoría de las DAOs emplean tokens ERC20 donde cada token equivale a un voto, de modo que quien posee más tokens tiene mayor influencia. Este esquema asocia el poder de voto con la participación económica, resultando adecuado para protocolos donde una mayor inversión conlleva un mayor interés en el rumbo del proyecto. No obstante, existen comunidades que prefieren utilizar NFTs bajo el estándar ERC721, donde cada pieza única confiere un voto sin importar la cantidad total que posea un individuo, evitando que los mayores poseedores concentren las decisiones. Mi implementación emplea ERC20 por adaptarse al caso de uso establecido, si bien el marco de OpenZeppelin admite ambas opciones según los objetivos de cada organización.

Los parámetros definidos en los constructores establecen las reglas iniciales de gobernanza:
- En el contrato del token, se asignó la dirección del desplegador como propietario inicial (`initialOwner`). Dicha cuenta poseía facultades para emitir nuevos tokens y pausar transferencias en situaciones de emergencia. Tras el despliegue, la propiedad del token fue transferida al **TimelockController**, garantizando que tales acciones solo puedan ejecutarse tras una votación comunitaria aprobada.
- En el **TimelockController**, se definió un retardo mínimo (`minDelay`) de 172.800 segundos (exactamente 2 días). Esto implica que una propuesta aprobada debe esperar al menos dos días antes de ejecutarse, otorgando tiempo a la comunidad para reaccionar si existe desacuerdo o necesidad de respuesta. La lista de proponentes (`proposers`) se inicializó vacía para luego otorgar dicho rol exclusivamente al gobernador; la de ejecutores (`executors`) se asignó a la dirección cero (`address(0)`), permitiendo que cualquier miembro pueda detonar la ejecución una vez cumplido el plazo; y el rol de administrador (`admin`) se transfirió al propio Timelock.
- En el contrato del **DAOGovernor**, el retardo de votación (`votingDelay`) se configuró en 1 día (período de espera para la toma de la instantánea), el período de votación (`votingPeriod`) en 1 semana (7 días para revisión y voto), el umbral de propuesta (`proposalThreshold`) en 0 (permitiendo a cualquier titular presentar iniciativas sin barreras de entrada), y el quorum en 4% del suministro total en circulación.

Todos estos parámetros son modificables mediante propuestas y votaciones de la propia comunidad, permitiendo que las normas evolucionen con el tiempo.

Para la interacción práctica de los usuarios, interactuar directamente con funciones de contratos inteligentes mediante billeteras puede resultar complejo. Es aquí donde herramientas como **Tally** cobran relevancia. Tally ofrece una interfaz web que se conecta a la billetera Web3, detecta automáticamente el contrato gobernador y muestra los parámetros en lenguaje accesible: propuestas activas, descripciones, cómputo de votos y tiempo restante. Asimismo, Tally admite la delegación de voto, permitiendo asignar el poder de votación a un representante de confianza sin transferir ni comprometer la custodia de los tokens.

La compatibilidad con los contratos de OpenZeppelin es directa, ya que estos emiten eventos estándar (`ProposalCreated`, `VoteCast`, `ProposalExecuted`) que los indexadores y paneles frontend interpretan sin configuraciones adicionales.

![Entendiendo el Gobernador: Compound vs Personalizado](/images/blog/dao-governance-4.jpg)

## Entendiendo el Gobernador: Compound vs Personalizado

Al momento de diseñar un sistema de gobernanza, resulta conveniente revisar los modelos adoptados por proyectos establecidos. Compound, el protocolo de préstamos descentralizados, cuenta con uno de los sistemas de gobernanza más conocidos del ecosistema. Su contrato gobernador (conocido como Compound Governor) surgió de la necesidad práctica de administrar miles de millones de dólares en fondos de usuarios, equilibrando seguridad y operatividad. Dicho diseño sirvió como base para numerosas DAOs iniciales.

Sin embargo, las necesidades varían según la comunidad. Compound gestiona parámetros técnicos para un protocolo financiero complejo con usuarios habituados a especificaciones técnicas: define un retardo de votación de aproximadamente dos días, períodos de votación de cinco días y requisitos de quorum relativamente altos. Esta configuración resulta idónea para gestionar altos volúmenes de capital, pero puede no ajustarse a colectivos creativos que requieran mayor agilidad o clubes sociales que prioricen la inclusión sobre umbrales estrictos. Compound Governor presenta una arquitectura monolítica que dificulta su modificación sin realizar cambios profundos en el código.

Frente a esto, el enfoque basado en módulos de OpenZeppelin ofrece ventajas significativas. En lugar de adoptar un diseño rígido, permite ensamblar componentes específicos y configurarlos según el perfil de la organización. A modo de analogía: Compound Governor equivale a una estructura prefabricada que funciona de inmediato pero resulta difícil de alterar; en cambio, el gobernador modular funciona como bloques estandarizados que pueden combinarse, intercambiarse o reconfigurarse a medida que la comunidad madura.

A continuación se detallan los módulos implementados:
- **GovernorSettings**: Actúa como panel de control para los parámetros temporales de la gobernanza, definiendo la antelación para iniciar la votación, la duración de la misma y el tiempo de espera para la ejecución de propuestas aprobadas.
- **GovernorCountingSimple**: Gestiona la lógica de emisión de votos, ofreciendo tres opciones claras: a favor (For), en contra (Against) y abstención (Abstain). La opción de abstención permite participar registrando presencia sin inclinar la balanza, facilitando el cálculo transparente del quorum.
- **GovernorVotes**: Conecta el sistema de gobernanza con el token `DAOToken`, consultando los saldos registrados en los checkpoints para determinar el peso de cada participante en el momento exacto del snapshot.
- **GovernorVotesQuorumFraction**: Implementa el requisito de quorum porcentual sobre el suministro total. Al fijarse en 4%, si el suministro total de tokens varía por emisiones o quemas, el quorum se recalcula de forma automática manteniendo la proporción requerida.
- **GovernorTimelockControl**: Introduce un retardo de seguridad obligatorio entre la aprobación de una propuesta y su ejecución efectiva en la blockchain (establecido en 2 días), protegiendo a la comunidad ante imprevistos o propuestas maliciosas.

Estos módulos se integran en el constructor del gobernador recibiendo las direcciones del token y del timelock, reduciendo la superficie de posibles vulnerabilidades al apoyarse en código auditado y probado en múltiples entornos de producción.

## Votación ERC20 vs ERC721: ¿Cuál es la diferencia?

La elección del estándar para distribuir el poder de voto define el carácter y funcionamiento de una organización descentralizada:

1. **Votación basada en ERC20**: Emplea tokens fungibles e intercambiables, donde el poder de voto es directamente proporcional a la cantidad de tokens que posee cada dirección (esquema de accionistas o cuotas de participación). Quien posee el 10% del suministro cuenta con el 10% del peso en las votaciones. Resulta apropiado para protocolos financieros o de inversión donde la influencia se alinea con el compromiso económico asumido.
2. **Votación basada en ERC721 (NFTs)**: Emplea tokens no fungibles y únicos, donde habitualmente cada pieza confiere un voto independiente de la cantidad total que posea el usuario (esquema de membresía equitativa). Resulta idóneo para comunidades artísticas, culturales o clubes sociales, garantizando que cada miembro conserve una voz equivalente y evitando que grandes patrimonios concentren las decisiones.

Ambos modelos requieren la captura de instantáneas (snapshots) mediante checkpoints para evitar manipulaciones de última hora (como adquirir tokens temporalmente para votar y venderlos de inmediato). En el caso de ERC20, la extensión `ERC20Votes` gestiona este registro histórico de forma transparente. En el caso de ERC721, se registra la titularidad de los identificadores específicos de token al momento del snapshot. Asimismo, es posible plantear esquemas híbridos donde un NFT otorgue la membresía base y los tokens ERC20 aporten ponderación adicional según el tipo de decisión.

## Parámetros del Constructor: Qué Significan

Los parámetros seleccionados durante el despliegue reflejan una estructura orientada a la seguridad, la apertura y la descentralización:

- **DAOToken (`initialOwner`)**: Inicialmente configurado con la dirección del desplegador y transferido de inmediato al `TimelockController`. Las funciones de emisión (`mint`) y detención de emergencia (`pause`) quedan bajo control exclusivo de la gobernanza colectiva.
- **TimelockController (`minDelay`)**: Fijado en 172.800 segundos (2 días), brindando un margen de tiempo para que los miembros evalúen las propuestas aprobadas antes de su ejecución.
- **TimelockController (`proposers`)**: Lista inicial vacía, asignando posteriormente el rol `PROPOSER_ROLE` de forma exclusiva al contrato `DAOGovernor`.
- **TimelockController (`executors`)**: Configurado con la dirección cero (`0x0000000000000000000000000000000000000000`), permitiendo que cualquier usuario pueda ejecutar una propuesta una vez transcurrido el tiempo de espera.
- **TimelockController (`admin`)**: Asignado inicialmente al desplegador para completar la configuración y transferido posteriormente al propio Timelock para lograr autogobernanza.
- **DAOGovernor (`votingDelay`)**: 1 día (86.400 segundos) para deliberación previa y registro del snapshot.
- **DAOGovernor (`votingPeriod`)**: 1 semana (604.800 segundos) para facilitar la participación de usuarios en diferentes zonas horarias.
- **DAOGovernor (`quorumNumerator`)**: 4 (equivalente al 4% del suministro total).
- **DAOGovernor (`proposalThreshold`)**: 0 (permite a cualquier titular presentar iniciativas sin requerir un mínimo de saldo).

Cada uno de estos parámetros puede actualizarse en el futuro mediante el mismo proceso de votación comunitaria.

## Interacción con Tally y Otras Interfaces de Usuario

![Creación de DAO en Tally](/images/blog/dao-screenshot-tally1.png)

Tally proporciona un entorno gráfico para interactuar con la gobernanza sin necesidad de ejecutar transacciones manuales por consola:

![Creación de Propuesta en Tally](/images/blog/dao-screenshot-tally4.png)

A través de la plataforma es posible revisar propuestas, consultar el avance de las votaciones, delegar poder de voto y detonar la ejecución de iniciativas aprobadas:

![Finalización de Propuesta en Tally](/images/blog/dao-screenshot-tally5.png)

Puedes explorar la DAO implementada en los siguientes enlaces oficiales de Tally:
- [Página Principal de la DAO en Tally](https://www.tally.xyz/gov/dao-tutorial)
- [Página de Propuestas en Tally](https://www.tally.xyz/gov/dao-tutorial/proposals)
- [Propuesta de Prueba de Ejemplo en Tally](https://www.tally.xyz/gov/dao-tutorial/proposal/55668039265640376542534466764247011469981353354712600333202966157762151218731)

![Direcciones y Configuración en Tally](/images/blog/dao-screenshot-tally3.png)

## El Rol Crucial de OpenZeppelin

La disponibilidad de bibliotecas abiertas y auditadas como las de OpenZeppelin ha permitido democratizar la creación de contratos inteligentes seguros. Tras incidentes tempranos en la historia de Ethereum, la adopción de patrones estandarizados y revisiones de seguridad continuas ha establecido una base confiable para el desarrollo de DAOs.

El enfoque modular de OpenZeppelin permite aislar responsabilidades en componentes independientes (`GovernorSettings`, `GovernorVotes`, `GovernorTimelockControl`), facilitando auditorías específicas y actualizaciones selectivas sin alterar el funcionamiento global del sistema. Asimismo, la estandarización de eventos permite que exploradores de bloques y plataformas como Tally reconozcan y procesen automáticamente la actividad de gobernanza.

## Dentro de Nuestros Smart Contracts: El Código que Hace Funcionar Todo

A continuación se examina la estructura técnica de los contratos desplegados:

### Nuestro Contrato de Token: La Base de la Gobernanza

El contrato `DAOToken` reúne las extensiones necesarias para habilitar el seguimiento del poder de voto y los controles de seguridad:

```solidity
contract DAOToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC1363, ERC20Permit, ERC20Votes {
    constructor(address initialOwner)
        ERC20("DAOToken", "DAOT")
        Ownable(initialOwner)
        ERC20Permit("DAOToken")
    {}
```

Las funciones de control de emergencia y emisión están restringidas al propietario del contrato (el Timelock):

```solidity
function pause() public onlyOwner {
    _pause();
}

function unpause() public onlyOwner {
    _unpause();
}

function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
}
```

La función interna `_update` se ejecuta en cada transferencia, emisión o quema de tokens, actualizando los saldos y registrando los puntos de control para la gobernanza:

```solidity
function _update(address from, address to, uint256 value)
    internal
    override(ERC20, ERC20Pausable, ERC20Votes)
{
    super._update(from, to, value);
}
```

El contrato define el cómputo de tiempo mediante marcas de tiempo en segundos (`timestamp`):

```solidity
function clock() public view override returns (uint48) {
    return uint48(block.timestamp);
}

function CLOCK_MODE() public pure override returns (string memory) {
    return "mode=timestamp";
}

function nonces(address owner)
    public
    view
    override(ERC20Permit, Nonces)
    returns (uint256)
{
    return super.nonces(owner);
}
```

### El Contrato Gobernador: El Cerebro de Nuestra DAO

El contrato `DAOGovernor` centraliza la gestión de las propuestas y su flujo de votación:

```solidity
contract DAOGovernor is Governor, GovernorSettings, GovernorCountingSimple, GovernorStorage, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
    constructor(IVotes _token, TimelockController _timelock)
        Governor("DAOGovernor")
        GovernorSettings(1 days, 1 weeks, 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
        GovernorTimelockControl(_timelock)
    {}
```

El contrato implementa las resoluciones de herencia requeridas por Solidity para coordinar el estado de las propuestas y el almacenamiento:

```solidity
function state(uint256 proposalId)
    public
    view
    override(Governor, GovernorTimelockControl)
    returns (ProposalState)
{
    return super.state(proposalId);
}

function _propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, address proposer)
    internal
    override(Governor, GovernorStorage)
    returns (uint256)
{
    return super._propose(targets, values, calldatas, description, proposer);
}
```

Una vez que una propuesta es aprobada tras superar el quorum y obtener mayoría favorable, se ingresa en la cola del Timelock:

```solidity
function _queueOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
    internal
    override(Governor, GovernorTimelockControl)
    returns (uint48)
{
    return super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);
}

function _executeOperations(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
    internal
    override(Governor, GovernorTimelockControl)
{
    super._executeOperations(proposalId, targets, values, calldatas, descriptionHash);
}
```

Para optimizar costos de gas, el contrato almacena el identificador calculado de la propuesta en lugar de todos los datos en texto plano, permitiendo que los detalles completos se reconstruyan a partir de los eventos emitidos.

### Cómo Funcionan Todas las Piezas en Conjunto

La interacción entre contratos establece una separación clara de atribuciones:
- **DAOToken**: Registra la titularidad y los puntos de control de voto.
- **DAOGovernor**: Procesa propuestas, gestiona votaciones y valida el quorum.
- **TimelockController**: Custodia la autoridad administrativa y aplica el período de espera previo a la ejecución.

Ningún componente puede actuar de forma aislada, garantizando un flujo auditable y descentralizado.

## Despliegue y Verificación en Sepolia

El sistema completo de gobernanza DAO fue desplegado y verificado satisfactoriamente en la red de pruebas **Sepolia Testnet**.

### 📍 Direcciones de Despliegue

| Contrato | Dirección | Enlace en Explorador | Transacción de Creación |
| :--- | :--- | :--- | :--- |
| **DAOToken** | `0x66CdB0c60E5b40290cD16a00916Be34453939a48` | [Etherscan](https://sepolia.etherscan.io/address/0x66CdB0c60E5b40290cD16a00916Be34453939a48#code) | [0xe24b...1405](https://sepolia.etherscan.io/tx/0xe24b012e00cd82ea05c3dae0628c89caab7e0767ec77081ea8c9ecb2d6f31405) |
| **TimelockController** | `0x3Df2d32fe95EB42daEb4Dc81c1981C52b5aF25D2` | [Etherscan](https://sepolia.etherscan.io/address/0x3Df2d32fe95EB42daEb4Dc81c1981C52b5aF25D2#code) | [0x04c2...5e8b](https://sepolia.etherscan.io/tx/0x04c222cf8ed585cd346008eb9d36f4918eca985737e63555bb0ef1daae955e8b) |
| **DAOGovernor** | `0xF34Bf4a2e4cc6819d025410625775e16ba4728a0` | [Etherscan](https://sepolia.etherscan.io/address/0xF34Bf4a2e4cc6819d025410625775e16ba4728a0#code) | [0x8cd2...4cfa](https://sepolia.etherscan.io/tx/0x8cd2f0d22ba59c5e41ad53cf5b463f71a1736bdb533470a83749f20907a2c4fa) |

---

### ⚙️ Parámetros de Configuración del Constructor

| Contrato | Parámetro | Valor | Propósito |
| :--- | :--- | :--- | :--- |
| **DAOToken** | `initialOwner` | `Deployer` | Derechos administrativos iniciales (transferidos al Timelock tras el despliegue). |
| **TimelockController** | `minDelay` | `172800` (2 días) | Tiempo de espera de seguridad antes de ejecutar propuestas aprobadas. |
| **TimelockController** | `proposers` | `[]` | Sin proponentes iniciales (incorporado vía `grantRole` tras el despliegue). |
| **TimelockController** | `executors` | `["0x0...0"]` | Ejecución abierta: cualquier usuario puede detonar la propuesta tras vencer el plazo. |
| **TimelockController** | `admin` | `Deployer` | Administrador inicial de roles (transferido posteriormente al Timelock). |
| **DAOGovernor** | `_token` | `0x66Cd...9a48` | Conecta el Gobernador con el token de votación. |
| **DAOGovernor** | `_timelock` | `0x3Df2...25D2` | Conecta el Gobernador con el controlador de tiempo de ejecución. |

---

### 🔐 Traspaso de Roles y Permisos

Para asegurar una descentralización efectiva, se realizaron los siguientes pasos automatizados tras el despliegue:

1. **Gobernador como Proponente**: Se otorgó el rol `PROPOSER_ROLE` del `TimelockController` al contrato `DAOGovernor`, garantizando que únicamente las propuestas aprobadas puedan ingresar en la cola de ejecución. ([Transacción](https://sepolia.etherscan.io/tx/0xea56688b4a2acac4d5a2b847d4c46750d7187d91332ee3a78027827b75dbbcc1))
2. **Ejecución Pública**: Se otorgó el rol `EXECUTOR_ROLE` a la dirección cero (`0x0...0`), permitiendo que cualquier miembro de la comunidad pueda ejecutar una propuesta una vez expirado el plazo del timelock. ([Transacción](https://sepolia.etherscan.io/tx/0xabd279f2cabad804d51c7be6d05f7bcf7aaf75b08e607a168c2b4d449970b799))
3. **Propiedad de la Gobernanza**: La propiedad del contrato `DAOToken` fue transferida al `TimelockController`. De este modo, las funciones administrativas como `mint`, `pause` y `unpause` **únicamente** pueden ejecutarse mediante el resultado de una votación oficial de gobernanza. ([Transacción](https://sepolia.etherscan.io/tx/0x27a579830d0f456f2a209552b78436f1841d813b1654d9b245227b6823bacc00))

---

## Conclusión

El desarrollo de sistemas de gobernanza descentralizada demuestra el potencial de coordinar comunidades de manera abierta y transparente mediante herramientas accesibles y seguras.

Con los contratos en Solidity, las direcciones de verificación en Sepolia y la integración en Tally presentadas en esta guía, dispones de una referencia funcional para implementar modelos de gobernanza adaptados a las necesidades particulares de tu proyecto o comunidad. La naturaleza modular de esta arquitectura permite iniciar con esquemas sencillos e incorporar complejidad de forma progresiva a medida que la organización evoluciona.

La tecnología provee el marco operativo, pero es la participación activa, el diálogo y la experimentación continua de los miembros lo que da vida y relevancia a una Organización Autónoma Descentralizada.
