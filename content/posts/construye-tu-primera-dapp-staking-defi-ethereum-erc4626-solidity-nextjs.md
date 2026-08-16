---
title: "Construye tu Primera DApp de Staking DeFi en Ethereum: Guía Práctica Usando el Estándar ERC-4626 de OpenZeppelin con Solidity y Next.js"
date: "25-04-2026"
excerpt: "Guía completa y exhaustiva para construir una aplicación de staking DeFi en Ethereum: arquitectura de dos tokens, estándar ERC-4626 de OpenZeppelin, mitigación de ataques de inflación y desarrollo frontend en Next.js."
author: "Carlos Baeza Negroni"
categories: ["Tutoriales", "Solidity"]
tags: ["ERC-4626", "Solidity", "DeFi", "Staking", "Ethereum", "Next.js", "OpenZeppelin", "Smart Contracts", "Wagmi", "RainbowKit", "Web3"]
coverImage: "/images/blog/stakingdapp_cover.png"
readTime: "45 min de lectura"
featured: false
---

# Construye tu Primera DApp de Staking DeFi en Ethereum: Guía Práctica Usando el Estándar ERC-4626 de OpenZeppelin con Next.js

![Portada: DApp de Staking ERC-4626](/images/blog/staking-erc4626-1.jpg)

## Introducción

Quiero contarte sobre algo que construí y que pone el mundo de las finanzas descentralizadas al alcance de cualquier persona con una computadora y curiosidad. Se trata de una aplicación funcional y completa que permite a los usuarios hacer staking de tokens de criptomonedas y ganar recompensas. La he desplegado en la red de pruebas Sepolia de Ethereum para que puedas probarla ahora mismo sin arriesgar dinero real. Cuando comencé a aprender sobre tecnología blockchain, descubrí que la mayoría de las explicaciones asumían que ya eras un experto o pasaban por alto cómo funcionan realmente las cosas por dentro. Quería crear algo que demostrara la mecánica real del staking de una forma que cualquiera pudiera entender e incluso utilizar por sí mismo.

Mi proyecto combina dos partes esenciales: un contrato inteligente escrito en Solidity que maneja toda la lógica financiera, y una interfaz web moderna construida con Next.js que te permite interactuar con él directamente desde tu navegador. El smart contract es el cerebro: vive en la blockchain y hace cumplir las reglas de forma automática. La aplicación web es la cara amigable: se conecta a tu billetera cripto y te permite hacer staking de tokens con solo unos pocos clics. Juntos forman una aplicación descentralizada completa que demuestra cómo la tecnología blockchain puede crear herramientas financieras accesibles para todos.

El corazón de este proyecto es el estándar ERC-4626, un conjunto de reglas que hace que los vaults (bóvedas) de staking sean compatibles y seguros. Imagínalo como el estándar USB para periféricos de computadora: una vez que todos se ponen de acuerdo en el mismo estándar, diferentes dispositivos funcionan juntos a la perfección. Antes de ERC-4626, cada protocolo de staking hacía las cosas de manera diferente, lo que dificultaba que las billeteras y aplicaciones pudieran soportarlos a todos. Este estándar cambió ese panorama, y decidí construir con él porque representa la madurez del ecosistema Ethereum. Mi contrato tiene solo treinta y siete líneas de código porque me apoyo en el trabajo de OpenZeppelin, un equipo que ha dedicado años a construir y auditar componentes seguros para contratos inteligentes.

Lo que más me entusiasma de este proyecto es que demuestra cuán elegantemente simples pueden ser estos sistemas. El concepto central gira en torno a dos tokens que trabajan juntos. Depositas un token subyacente (en mi ejemplo lo llamo DEMO) y a cambio recibes tokens de participación (shares) que representan tu cuota de propiedad en la bóveda. Estos tokens de participación aumentan automáticamente de valor a medida que las comisiones y recompensas ingresan al vault. No hay una empresa central administrando tu dinero, no hay una junta directiva tomando decisiones discrecionales y no existe la posibilidad de que alguien escape con tus fondos. El código hace cumplir todas las reglas y la blockchain garantiza la transparencia total. Puedo mostrarte exactamente cómo funciona cada pieza porque todo es de código abierto.

Recuerdo el momento exacto en que entendí por primera vez cómo funciona el mecanismo de tasa de cambio. Llevaba semanas leyendo sobre staking, pero la elegancia matemática solo hizo clic cuando analicé los números por mi cuenta. Cuando depositas tokens, recibes participaciones basadas en la tasa actual. Si la bóveda contiene mil tokens y existen cien participaciones, cada participación representa diez tokens. Cuando alguien añade más tokens a la bóveda (ya sea por recompensas de staking o por el depósito de otro usuario), el total aumenta pero tu número de participaciones se mantiene intacto. De repente, tus diez participaciones representan más de diez tokens. El sistema se ajusta automáticamente sin que nadie tenga que distribuir recompensas manualmente. Este crecimiento pasivo es lo que hace que el staking sea tan atractivo, y las matemáticas garantizan la equidad para todos.

Lo que construí no es un simple ejercicio teórico. El contrato inteligente está desplegado en la red de pruebas Sepolia, una versión de prueba de Ethereum donde puedes obtener tokens de prueba de forma gratuita. La aplicación web se conecta a este contrato y proporciona una experiencia idéntica a la que encontrarías en un protocolo DeFi en producción. He diseñado la interfaz para que sea lo más directa posible: conectas tu billetera, ves tus balances, ingresas una cantidad y presionas un botón. Detrás de esa simplicidad vive un sistema sofisticado de firmas criptográficas, cálculos de gas y cambios de estado en la blockchain, pero el usuario no necesita preocuparse por nada de eso. Esta separación entre una tecnología potente y una experiencia de usuario accesible es lo que me motiva a construir estas herramientas.

En las siguientes secciones, te guiaré a través del código del smart contract línea por línea, explicando no solo lo que hace cada parte sino también por qué es importante. Te mostraré cómo el frontend se comunica con la blockchain y cómo manejamos la complejidad de las transacciones en Ethereum. Hablaremos de consideraciones de seguridad, porque las aplicaciones financieras exigen el máximo rigor. Y lo más importante, explicaré los conceptos en un lenguaje claro y accesible. Mi objetivo es que obtengas tanto una comprensión práctica de cómo funciona este sistema de staking como la confianza para seguir explorando por tu cuenta. Todas las herramientas están disponibles, el código es abierto y el conocimiento es de libre acceso.

- **El código fuente completo de este proyecto está disponible en:** https://github.com/cjbaezilla/Build-Your-First-Solidity-ERC20-Staking-Contract-Tutorial

![¿Qué son los contratos de staking y por qué los necesitamos?](/images/blog/staking-erc4626-2.jpg)

## ¿Qué son los contratos de staking y por qué los necesitamos?

Cuando descubrí por primera vez los contratos de staking, comprendí que representan algo muy profundo en la evolución de las finanzas: la capacidad de crear sistemas automatizados y sin intermediarios (trustless) al servicio de cualquier persona con conexión a internet. Un contrato de staking no es simplemente una caja fuerte digital donde bloqueas tus tokens de criptomonedas. Es un participante activo en una red blockchain, una pieza de software sofisticada que custodia tus activos, participa en la seguridad de la red y distribuye recompensas de acuerdo con reglas transparentes e inmutables. Lo que me fascina es cómo este pequeño programa encarna principios con los que las finanzas tradicionales han luchado durante siglos: equidad, transparencia y accesibilidad universal.

Pienso en mis propias experiencias con la banca tradicional. Para ganar intereses sobre mis ahorros, tenía que confiar mi dinero a un banco. Debía presentar documentos de identidad, mantener saldos mínimos, aceptar que el banco prestara mi dinero a terceros pagándome solo una fracción diminuta de las ganancias, y rezar para que la institución no quebrara llevándose mis ahorros. Todo el sistema depende de intermediarios cuyos intereses casi nunca coinciden con los míos. Los contratos de staking eliminan a esos intermediarios por completo. Cuando haces staking a través de un smart contract, interactúas directamente con código que vive en la blockchain. Ese código no se puede alterar después de su despliegue, no puede ser sobornado ni presionado, y se ejecuta exactamente como fue escrito, sin importar quién seas ni dónde vivas. No hay juntas directivas tomando decisiones arbitrarias, no hay gobiernos que puedan congelar tus fondos sin el debido proceso, ni empresas que puedan declararse en quiebra y desaparecer con tu capital. El contrato hace cumplir todos los términos de forma automática y la blockchain permite que cada transacción sea verificable públicamente.

La necesidad de estos contratos surge de la propia arquitectura de las blockchains de prueba de participación (Proof of Stake). Ethereum, la red donde desplegué mi contrato, asegura sus transacciones mediante un proceso llamado validación. En lugar de mineros resolviendo acertijos matemáticos complejos como en sistemas blockchain más antiguos, Ethereum utiliza validadores que bloquean su propio ETH como garantía colateral. Estos validadores son responsables de revisar transacciones y proponer nuevos bloques. A cambio, reciben recompensas en forma de nuevo ETH emitido y comisiones de transacción. La clave está en que este trabajo de validación requiere que el participante arriesgue su propio capital: los validadores pueden perder parte de su ETH bloqueado si actúan de forma deshonesta o negligente. Este incentivo económico alinea su comportamiento con la salud de la red.

Sin embargo, no todo el mundo dispone de miles de dólares en ETH para ejecutar un nodo validador independiente (que requiere 32 ETH). Los requisitos de hardware, el conocimiento técnico y el capital necesario son sustanciales. Aquí es donde el concepto de los contratos de staking se vuelve fundamental: permiten que personas con cantidades pequeñas de criptomonedas agrupen sus tokens y participen colectivamente en la validación. El contrato de staking actúa como el administrador del pool: recolecta tokens de muchos usuarios, los combina en un fondo suficiente para operar o aportar a un validador, y distribuye las recompensas obtenidas a cada participante en proporción exacta a su cuota en el pool. Esto democratiza el acceso a las recompensas de staking. No necesitas ser millonario ni un experto en infraestructura; con unos pocos dólares en tokens y una billetera cripto puedes obtener los mismos rendimientos porcentuales que una operación de validación masiva.

Mi implementación se enfoca específicamente en el mecanismo de bóveda de staking más que en operar validadores directamente, pero el principio subyacente es exactamente el mismo: los usuarios depositan sus tokens en el contrato y esos tokens generan rendimientos que incrementan automáticamente las tenencias de todos. No hay contabilidad manual, ni pagos mensuales diferidos, ni intervención humana requerida. Las matemáticas del sistema garantizan que las recompensas fluyan hacia los poseedores de tokens de forma continua y justa.

Lo que más me entusiasma de esta tecnología es su potencial para transformar la inclusión económica global. En muchas regiones del mundo, millones de personas carecen de acceso a servicios bancarios básicos. No pueden abrir cuentas de ahorro, invertir en mercados financieros ni generar intereses debido a requisitos burocráticos, montos mínimos inalcanzables o limitaciones geográficas. Los contratos de staking cambian esa realidad: si tienes conexión a internet y una billetera de criptomonedas, puedes interactuar con estos contratos. No hay verificaciones de crédito, ni requisitos de ciudadanía, ni intermediarios con poder de veto. El código trata a todos por igual: recibes la misma tasa de recompensa por token que cualquier otro participante. El sistema no sabe ni le importa tu origen, género, ubicación o nivel socioeconómico. Esa universalidad es verdaderamente revolucionaria.

La belleza técnica radica en cómo estos contratos logran semejante equidad mediante mecanismos simples. En el centro de mi contrato de staking está lo que denomino la danza de dos tokens: depositas lo que considero el token de trabajo (el token ERC-20 real que genera rendimiento) y a cambio recibes un token de participación (share token) que representa tu derecho de propiedad sobre el fondo total. Esta separación no es un mero detalle de programación; es una decisión de diseño fundamental que permite la distribución automática de recompensas. Cuando ingresan nuevos tokens a la bóveda desde cualquier fuente (ya sean recompensas generadas por la red, comisiones cobradas por el protocolo o depósitos adicionales), la proporción entre los tokens de trabajo y los tokens de participación cambia. Cada participación pasa a representar una fracción ligeramente mayor de los activos totales. Y como tienes esas participaciones en tu billetera, tu patrimonio aumenta sin que tengas que mover un dedo: no tienes que reclamar recompensas, ni llenar formularios, ni esperar un ciclo de liquidación. En el instante en que la bóveda recibe más tokens, tus participaciones valen más. Es la expresión más pura del ingreso pasivo programable.

Este diseño escala de forma impecable: ya sea que diez o diez mil personas depositen sus tokens, la participación de cada una se mantiene exactamente proporcional a su aporte. Las matemáticas funcionan idéntico sin importar el tamaño del fondo. Y lo más importante: dado que el token de participación es en sí mismo un token ERC-20 estándar, puedes transferirlo, intercambiarlo o utilizarlo como colateral en otras aplicaciones de finanzas descentralizadas. Tu posición de staking se convierte en un activo líquido que puedes vender o utilizar como garantía sin necesidad de retirar tus tokens subyacentes de la bóveda. Esto abre un abanico de posibilidades financieras que simplemente no existe en los esquemas de ahorro tradicionales.

Pero, ¿por qué necesitamos contratos de staking construidos específicamente bajo estándares como ERC-4626? Antes de que existiera este estándar, cada protocolo de staking creaba su propia implementación personalizada. Los desarrolladores de billeteras tenían que escribir código a medida para cada bóveda. Los auditores debían analizar arquitecturas totalmente distintas en cada proyecto. Y los usuarios tenían que aprender interfaces nuevas para cada plataforma. Esta fragmentación frenaba la adopción porque el ecosistema permanecía aislado en silos. Imagina si cada banco utilizara un formato de cheque completamente distinto que te obligara a aprender un sistema nuevo cada vez que abres una cuenta. Ese era el estado del staking antes de ERC-4626.

El estándar lo cambió todo al establecer un lenguaje común. Ahora, cada contrato que implementa ERC-4626 responde a las mismas funciones e instrucciones. Una billetera sabe cómo consultar tu saldo, cómo estimar el valor de tus participaciones y cómo procesar depósitos y retiros sin requerir integraciones personalizadas para cada bóveda. Esta universalidad acelera la innovación porque los desarrolladores pueden construir herramientas que funcionan instantáneamente en todo el ecosistema. Mi contrato se beneficia de esto de inmediato: cualquier billetera o plataforma de analítica compatible con ERC-4626 puede interactuar con él sin que yo deba escribir código adicional. Y las mejoras futuras que se incorporen al estándar llegarán a mi contrato a través de la librería OpenZeppelin que utilizo.

La seguridad es otra razón fundamental por la que necesitamos contratos de staking diseñados con estándares rigurosos. Cuando confías tus activos a un fondo común, necesitas la certeza de que las matemáticas no pueden ser manipuladas. Un ataque especialmente ingenioso que tuve muy presente durante el desarrollo es el ataque de inflación (inflation attack). En una bóveda mal diseñada que inicia vacía, un atacante podría realizar un depósito diminuto para establecer la tasa de cambio inicial y luego donar una gran cantidad de tokens directamente a la bóveda. Esto inflaría artificialmente el valor de las participaciones del atacante, provocando que los siguientes depositantes reciban cero o muchas menos participaciones de las que les corresponden debido a errores de redondeo. Luego, el atacante podría retirar sus participaciones y drenar una parte sustancial del fondo. Para defenderme de esto, implementé una técnica llamada desplazamiento de decimales (decimals offset) que añade precisión a los cálculos, creando virtualmente participaciones y activos que hacen que dicha manipulación sea económicamente irracional. Un atacante tendría que perder miles de veces más de lo que podría robar, eliminando por completo el incentivo económico. Este nivel de protección avanzada es la razón por la que confío en la implementación probada en batalla de OpenZeppelin en lugar de escribir matemáticas vulnerables por mi cuenta.

Al contemplar lo que he construido, no veo solo un artefacto técnico sino la materialización de una visión: creo firmemente que los sistemas financieros deben ser abiertos, justos y automatizados; creo que el código puede sustituir a muchos de los intermediarios costosos que hoy extraen valor de las personas comunes; y creo que educar sobre estos sistemas es indispensable para su adopción generalizada. Por eso mi contrato tiene únicamente 37 líneas de código y, sin embargo, logra lo que en las finanzas tradicionales requeriría tomos de contratos legales y costosos intermediarios. No necesito abogados, contadores ni oficiales de cumplimiento: la blockchain y el estándar proveen los cimientos, y yo aporto la personalización mínima necesaria para que esta bóveda sea totalmente funcional y segura.

Necesitamos contratos de staking porque representan un nuevo paradigma para coordinar la actividad económica a escala global sin control centralizado. Permiten la participación global, garantizan la equidad matemática, reducen costos drásticamente y eliminan puntos únicos de falla. Cuando pienso en las personas excluidas del sistema bancario tradicional o en aquellas que han sufrido por quiebras bancarias, devaluaciones monetarias o sistemas financieros opacos, veo en los contratos de staking mucho más que una simple herramienta de rendimiento: representan un camino hacia la soberanía financiera. Por supuesto, esta tecnología no está exenta de riesgos (los smart contracts pueden contener errores, las redes pueden actualizarse y los usuarios deben asumir la responsabilidad de custodiar sus claves privadas), pero cuando se diseñan con cuidado y se usan con criterio, ofrecen capacidades que hace pocos años eran impensables. Mi proyecto demuestra que podemos construir sistemas que son al mismo tiempo potentes y accesibles, sofisticados pero fáciles de usar, y rentables sin dejar de ser justos para todos los participantes.

![La magia de dos tokens: Entendiendo el sistema](/images/blog/staking-erc4626-3.jpg)

## La magia de dos tokens: Entendiendo el sistema

Cuando reflexiono sobre lo que hace que este sistema de staking sea tan elegante, siempre vuelvo a la idea simple pero profunda de utilizar dos tokens distintos trabajando en perfecta armonía. Esto no es solo un detalle técnico exigido por el estándar; es el corazón mismo de cómo el sistema genera crecimiento automático para todos los participantes. Permíteme explicarte cómo funciona en un lenguaje sencillo, utilizando el ejemplo de mis contratos desplegados donde puedes depositar tokens DEMO y recibir a cambio participaciones YIELD.

Imagina por un momento que depositas dinero en una cuenta de ahorros tradicional. En un banco convencional, cuando depositas dinero, el saldo de tu cuenta simplemente aumenta por ese monto. Luego el banco utiliza tu dinero para diversas inversiones y préstamos, y a fin de mes calcula manualmente tus intereses y los acredita a tu cuenta. Hay todo un departamento de personas realizando cálculos, monitoreando tasas y procesando pagos. Con mi contrato de staking se aplica el mismo principio básico, pero la magia ocurre de forma automática a través de las matemáticas, sin ninguna intervención humana.

Así es como el sistema de dos tokens logra esto: cuando decides hacer staking con tus tokens DEMO, no los estás dejando simplemente ociosos en una bóveda. En su lugar, intercambias tus tokens DEMO por lo que llamo tokens de participación, que en mi contrato se llaman YIELD. Considera estos tokens YIELD como tu comprobante de propiedad sobre la totalidad del fondo de staking. Si la bóveda custodia actualmente mil tokens DEMO y existen cien participaciones YIELD en circulación, cada participación YIELD representa el derecho sobre diez tokens DEMO. Esta proporción entre el total de DEMO en la bóveda y el total de participaciones YIELD en circulación es lo que llamamos tasa de cambio (exchange rate), y es el motor que impulsa el crecimiento automático.

Aquí es donde se pone interesante: la tasa de cambio no es fija; cambia cada vez que ingresan nuevos tokens DEMO a la bóveda desde cualquier origen. Esos nuevos tokens pueden provenir de otros usuarios depositando sus propios DEMO, de recompensas de staking generadas por la propia red blockchain, o incluso de una donación directa al contrato. En el instante en que esos tokens DEMO adicionales ingresan a la bóveda, la tasa de cambio se incrementa. Si entran cien nuevos tokens DEMO, la bóveda ahora tiene mil cien DEMO, pero siguen existiendo exactamente cien participaciones YIELD en circulación. Ahora cada participación YIELD equivale a 11 DEMO en lugar de 10. Tu cantidad de participaciones no ha cambiado, pero cada una de ellas vale más. El valor de lo que posees ha aumentado sin que hayas tenido que hacer nada, sin que nadie distribuya recompensas manualmente y sin esperar un ciclo de pago mensual.

Este mecanismo es formidable porque elimina por completo la necesidad de un sistema independiente de distribución de recompensas. En diseños antiguos de staking, el usuario debía reclamar sus recompensas manualmente mediante una transacción adicional, o el contrato debía llevar un registro exhaustivo de cuánto había ganado cada usuario a lo largo del tiempo, lo cual aumentaba la complejidad y el consumo de gas. Con este enfoque de dos tokens, las matemáticas resuelven todo limpiamente: cualquiera que posea participaciones YIELD cuando ingresan nuevos DEMO a la bóveda se beneficia de forma inmediata y proporcional a su tenencia. La persona que depositó 100 DEMO y recibió 10 participaciones YIELD experimenta exactamente el mismo incremento porcentual que quien depositó 1,000 DEMO y recibió 100 participaciones YIELD. El sistema es intrínsecamente justo y no requiere cálculos centralizados.

También quiero explicar por qué no podemos simplemente usar un solo token para esto. ¿Por qué no llevar un registro interno de cuánto DEMO depositó cada persona y añadir recompensas directamente a sus balances? Existen varias razones fundamentales:

1. **Eficiencia Computacional y Gas:** Ese enfoque obligaría al contrato a mantener un registro de saldo individual para cada usuario y actualizar cada uno de ellos cada vez que ingresan recompensas. Con miles de usuarios, esto sería inviable computacionalmente y superaría los límites de gas por bloque de la blockchain.
2. **Complejidad Contable:** Si las recompensas provienen de múltiples fuentes en diferentes momentos, necesitarías un sistema contable extremadamente complejo para rastrear cuándo ingresó cada recompensa y qué porción correspondía a cada usuario en ese instante exacto.
3. **Liquidez y Composabilidad DeFi:** Al emitir un token de participación independiente, creas un activo financiero líquido que puede transferirse, intercambiarse o utilizarse en otras aplicaciones DeFi independientemente del DEMO subyacente. Podrías vender tus tokens YIELD a otra persona sin necesidad de retirar DEMO de la bóveda, lo que abre posibilidades para apalancamiento, garantías y mercados secundarios.

El token de participación es en sí mismo un token ERC-20 completamente funcional, lo que significa que sigue el mismo estándar que DEMO y puede almacenarse en cualquier billetera, transferirse a otros usuarios o integrarse en otros smart contracts. Esto crea todo un ecosistema alrededor de tu posición en staking: puedes usar tus tokens YIELD como colateral para solicitar préstamos, o negociarlos en un exchange descentralizado si alguien desea comprar tu posición de rendimiento sin esperar a que el DEMO subyacente se desbloquee. Esta liquidez simplemente no existiría si tu participación fuera solo una entrada contable interna en la bóveda.

Otro aspecto fantástico de este diseño es lo que ocurre cuando nuevos usuarios se unen al fondo. Cuando un usuario nuevo llega y deposita sus tokens DEMO, adquiere participaciones YIELD a la tasa de cambio vigente en ese instante. Dicha tasa ya incorpora todo el crecimiento previo que ha experimentado la bóveda, por lo que el nuevo participante paga el precio justo de mercado por su cuota en el pool. Mientras tanto, los titulares existentes conservan exactamente su porcentaje de propiedad sobre los activos acumulados porque el número total de participaciones aumenta en la proporción correcta. Tu porción del pastel mantiene su valor relativo, mientras que el pastel entero continúa creciendo.

Este sistema es matemáticamente elegante porque se alinea con el principio de que la propiedad debe ser proporcional a la contribución y que el crecimiento debe distribuirse de acuerdo con la propiedad. No hay discrecionalidad, ni decisiones humanas sobre quién recibe qué porcentaje, ni vías para manipular el sistema mediante privilegios especiales. El cálculo de la tasa de cambio es transparente y verificable por cualquiera: puedes consultar el contrato en la blockchain, observar la cantidad total de tokens DEMO custodiados, revisar el total de participaciones YIELD existentes, hacer la división por ti mismo y comprobar que tu saldo de participaciones YIELD representa exactamente la cuota de propiedad esperada.

Esta arquitectura de dos tokens es lo que formaliza el estándar ERC-4626, convirtiéndose en el cimiento de una nueva generación de bóvedas y productos generadores de rendimiento en Ethereum y redes compatibles. Lo que comenzó como una solución ingeniosa al problema de la distribución automática de recompensas ha evolucionado hacia una interfaz estandarizada que permite a billeteras, plataformas de analítica y otros protocolos interactuar con cualquier vault ERC-4626 de manera predecible. Elegí este estándar para mi proyecto porque representa la convergencia del conocimiento de la comunidad y me permite apoyarme en implementaciones auditadas y probadas en batalla de OpenZeppelin, en lugar de reinventar la rueda con riesgos innecesarios.

Al reflexionar sobre cómo encajan todas las piezas, veo un sistema que es simultáneamente simple y profundo. La idea de dos tokens que representan la propiedad del activo y la acumulación de rendimiento se puede explicar en pocas frases, pero sus repercusiones transforman por completo las finanzas descentralizadas: resuelve la distribución justa de recompensas sin intervención manual, crea tokens líquidos reutilizables, establece compatibilidad en todo el ecosistema y logra todo esto mediante matemáticas transparentes en lugar de contabilidad opaca.

![Qué sucede tras bambalinas](/images/blog/staking-erc4626-4.jpg)

## Qué sucede tras bambalinas

Quiero llevarte detrás del telón digital y mostrarte con exactitud qué ocurre cuando interactúas con este sistema de staking. La belleza de lo que he construido no reside solo en su funcionalidad, sino en su transparencia absoluta: cada paso está codificado en Solidity, desplegado en la blockchain y abierto a la verificación de cualquier persona. Cuando depositas tus tokens, se ejecuta una secuencia coreografiada de eventos sin intervención humana, y quiero explicarte cada uno en detalle.

Comencemos con el momento en que decides hacer staking con tus tokens DEMO. Abres la interfaz web, conectas tu billetera, ingresas el monto y haces clic en el botón de depósito. En ese instante exacto, tu billetera te solicita aprobar una transacción. Esta es tu firma digital autorizando al contrato de staking a mover una cantidad específica de tokens DEMO desde tu billetera hacia la custodia del contrato. Una vez que confirmas y la transacción se incluye en un bloque, el contrato entra en acción. Lo primero que hace es verificar que realmente tengas suficientes tokens DEMO para completar el depósito. Esta comprobación la realiza automáticamente el contrato del token mediante su propio registro público de saldos. Si dispones de los fondos, el contrato ejecuta la transferencia: tus tokens DEMO se mueven físicamente de tu dirección a la dirección de la bóveda. A partir de ese momento, esos tokens ya no están en tu posesión directa; ahora pertenecen al contrato de staking y permanecerán allí hasta que decidas retirarlos.

Ahora el contrato debe calcular cuántos tokens de participación YIELD entregarte a cambio de tu depósito. Este cálculo es el corazón de todo el sistema y opera mediante la tasa de cambio, que representa el valor de cada participación en términos del token DEMO subyacente. El contrato mantiene dos datos críticos: la cantidad total de tokens DEMO custodiados en la bóveda (`totalAssets`) y el número total de participaciones YIELD existentes entre todos los usuarios (`totalSupply`). La tasa de cambio es simplemente el total de activos dividido entre el total de participaciones, sumando un desplazamiento de decimales para evitar ataques de redondeo. Al depositar, el contrato evalúa la tasa de cambio vigente antes de tu depósito y determina cuántas participaciones merece tu aporte. Por ejemplo, si la bóveda tiene 1,000 tokens DEMO y 100 participaciones YIELD en circulación, cada participación equivale a 10 tokens DEMO. Si depositas 100 tokens DEMO, el contrato calcula que debes recibir 10 participaciones. Este cálculo se realiza íntegramente en la blockchain mediante una fórmula determinista que nadie puede alterar.

Una vez que el contrato conoce cuántas participaciones te corresponden, acuña (mintea) nuevos tokens YIELD y los envía directamente a tu dirección de billetera. Acuñar significa crear tokens que no existían previamente, incrementando el suministro total de YIELD en circulación. El estándar ERC-20 exige un registro riguroso de suministros y balances, por lo que el contrato actualiza su libro contable interno reflejando que tu billetera posee esas nuevas participaciones y emite un evento en la blockchain para que cualquier observador pueda constatar la operación. La interfaz de tu billetera, que escucha estos eventos en tiempo real, se actualiza casi de inmediato para mostrar tu nuevo saldo de YIELD. Al finalizar este proceso, has cambiado exitosamente tus tokens DEMO por un valor equivalente en participaciones que representan tu cuota de propiedad sobre la totalidad de la bóveda. Eres libre de conservarlas, transferirlas a otra persona o utilizarlas en otras aplicaciones DeFi, ya que YIELD es un token ERC-20 estándar con plenas capacidades.

La verdadera magia se manifiesta en lo que ocurre a continuación: tus participaciones quedan en tu poder y no necesitas realizar ninguna otra acción para generar rendimiento. Cuando la bóveda recibe tokens DEMO adicionales desde cualquier fuente (ya sean recompensas generadas por la red de Ethereum, comisiones del protocolo o nuevos depósitos de otros usuarios), la tasa de cambio se incrementa automáticamente. Como posees una cantidad fija de participaciones, cada una de ellas pasa a representar una cantidad mayor de DEMO. Tu saldo numérico de tokens YIELD en tu billetera permanece exactamente igual, pero tu derecho sobre los activos subyacentes ha crecido. No requieres una transacción para reclamar recompensas, ni calendarios de distribución, ni supervisores manuales: las matemáticas de la tasa de cambio garantizan que todos los que poseían participaciones antes del incremento de activos reciban su beneficio proporcional en tiempo real. Podrías revisar tu billetera en cualquier momento y notar que tus 10 participaciones YIELD, que antes equivalían a 100 DEMO, ahora equivalen a 105 DEMO gracias a 5 tokens extra que ingresaron a la bóveda mientras dormías. Es rendimiento pasivo en su estado más puro, sin intermediarios cobrando comisiones ni operadores decidiendo arbitrariamente tus ganancias.

Cuando finalmente decides retirar tu posición, el proceso se ejecuta a la inversa con total simetría. Inicias el retiro indicándole al contrato cuántos tokens DEMO subyacentes deseas recibir, o bien cuántas participaciones YIELD deseas quemar. Si especificas la cantidad de DEMO, el contrato calcula cuántas participaciones debes destruir en función de la tasa de cambio actual. Si especificas las participaciones, calcula cuántos DEMO equivalen. En ambos casos, el contrato valida que tengas suficientes participaciones y procede a quemarlas (burn), eliminándolas de manera permanente del suministro total. La quema reduce el contador de `totalSupply` y descuenta las participaciones de tu saldo personal. Esto tiene un efecto interesante: quemar participaciones incrementa la tasa de cambio para los usuarios que permanecen, ya que el fondo de activos se distribuye ahora entre menos participaciones en circulación. Quien se retira obtiene sus activos correspondientes y quienes se quedan mantienen intacta su cuota proporcional sin verse perjudicados.

Tras quemar tus participaciones, el contrato transfiere la cantidad calculada de tokens DEMO directamente a tu dirección de billetera a través del contrato ERC-20 del token DEMO. Tu billetera recibe los fondos, tu saldo se actualiza y la transacción queda registrada para siempre en la blockchain. Al concluir el retiro, tu balance de participaciones YIELD disminuye (o llega a cero si retiraste la totalidad) y tu balance de tokens DEMO aumenta por el monto retirado junto con todo el rendimiento acumulado. Cabe destacar que no estás obligado a retirar todo en una sola operación: puedes hacer retiros parciales cuantas veces desees y en cada ocasión el contrato manejará las conversiones y transferencias a la perfección.

Lo que encuentro más sobresaliente de este flujo es la cantidad de fallas tradicionales que elimina: no hay riesgo de que el operador de la bóveda se fugue con tu dinero porque el código del contrato gobierna todo y nadie tiene una clave maestra para saltarse las reglas; no hay riesgo de olvidar reclamar recompensas porque estas se reflejan automáticamente en el valor de tus participaciones desde el segundo en que ingresan a la bóveda; y no hay riesgo de inconsistencias contables porque cada cambio de estado queda registrado en un libro inmutable que cualquiera puede auditar. El sistema es completamente libre de permisos (permissionless): cualquier persona con una billetera puede interactuar con él, sin importar su país de origen, historial crediticio o acceso bancario. Hemos creado una primitiva financiera universal que opera según reglas matemáticas transparentes y equitativas.

![Cómo ERC-4626 lo cambia todo](/images/blog/staking-erc4626-5.jpg)

## Cómo ERC-4626 lo cambia todo

Antes de que existiera el estándar ERC-4626, construir contratos de staking era como intentar encajar piezas cuadradas en agujeros redondos. Cada proyecto abordaba el diseño de bóvedas de manera distinta. Las billeteras debían configurarse manualmente para reconocer cada nuevo contrato de staking. Los desarrolladores se encontraban reinventando la rueda una y otra vez, escribiendo código a medida para funciones que debían haber sido universales. Los usuarios enfrentaban un ecosistema fragmentado donde mover activos entre plataformas implicaba aprender interfaces y modelos de confianza completamente nuevos cada vez. La innovación avanzaba con lentitud porque todos resolvían los mismos problemas fundamentales de forma aislada.

ERC-4626 estableció un lenguaje universal para bóvedas tokenizadas. Para mí, esto representa un hito de madurez colectiva en Ethereum: tras años de observar a desarrolladores brillantes construir sistemas similares con variaciones mínimas que los hacían incompatibles, la comunidad consensuó un conjunto unificado de reglas. Ese acuerdo lo cambió todo al crear interoperabilidad donde antes reinaba la fragmentación.

En términos prácticos, cuando construyo mi contrato de staking utilizando ERC-4626, hablo automáticamente el mismo idioma que cualquier otra bóveda que implemente el estándar. Ese lenguaje compartido tiene beneficios directos para todos los actores:

- **Para desarrolladores de billeteras:** Pueden programar una única integración que funcione con cualquier bóveda ERC-4626. En lugar de requerir código especial para cada protocolo, pueden crear una interfaz genérica que los soporte a todos de forma consistente. Cuando conectas MetaMask o cualquier otra billetera compatible a mi DApp, la billetera ya sabe cómo leer tu saldo, calcular el valor de tus participaciones y procesar depósitos y retiros.
- **Para otros protocolos DeFi:** Se abren posibilidades de composabilidad sin precedentes. Un protocolo de préstamos puede reconocer automáticamente tu posición en staking como garantía colateral consultando las funciones estándar `balanceOf` y `convertToAssets`. Un agregador de rendimientos puede mover fondos entre distintas bóvedas sin necesidad de adaptadores específicos para cada una.
- **Para los usuarios:** Brinda total transparencia y previsibilidad. Puedes revisar cualquier bóveda ERC-4626 en un explorador de bloques y entender de inmediato cómo interactuar con ella: los nombres de las funciones y sus parámetros son siempre los mismos (`deposit`, `withdraw`, `redeem`, `mint`). No necesitas leer manuales extensos para saber si una bóveda llama a su función `stake` o `deposit`, o si requiere un paso adicional para reclamar.
- **Para desarrolladores como yo:** Significa que no tenemos que diseñar estos mecanismos desde cero. Podemos apoyarnos en implementaciones auditadas de OpenZeppelin que cumplen la especificación al pie de la letra. Al heredar de `ERC4626`, obtengo no solo las funciones básicas de depósito y retiro, sino también el manejo de casos extremos, la emisión de eventos, las comprobaciones de seguridad y las funciones de simulación (`previewDeposit`, `previewWithdraw`, etc.).

El estándar también estandarizó con exactitud cómo deben calcularse las participaciones. Antes de ERC-4626, cada bóveda tenía su propio método para determinar cuántas participaciones correspondían a un depósito: algunas redondeaban a favor de los participantes antiguos, otras a favor de los nuevos, y muchas utilizaban fórmulas complejas y difíciles de auditar. Al unificar las matemáticas mediante funciones como `convertToShares` y `convertToAssets`, el estándar asegura que cualquiera pueda simular y conocer con total certeza el resultado exacto de su transacción antes de enviarla mediante `previewDeposit`, `previewMint`, `previewWithdraw` y `previewRedeem`.

ERC-4626 sigue la misma trayectoria histórica que ERC-20: así como ERC-20 estandarizó los tokens transferibles y desató el auge de DeFi, ERC-4626 estandariza las bóvedas con rendimiento, convirtiendo el staking en un bloque de construcción modular y seguro al alcance de todos.

---

## La mecánica: Cómo se mueve realmente el dinero

Quiero guiarte paso a paso por lo que sucede en la práctica cuando un usuario interactúa con este sistema de staking. No estamos hablando de conceptos financieros abstractos; esto es lo que ocurre con cada transacción:

1. **Conexión y Selección:** Abres la interfaz web, conectas tu billetera cripto, ingresas el monto de tokens DEMO que deseas poner a trabajar y presionas el botón de staking.
2. **Aprobación de Tokens (Approve):** Tu billetera te pide firmar una transacción de aprobación. Esta es tu autorización digital para que el contrato de staking pueda transferir una cantidad específica de tokens DEMO desde tu billetera hacia su propia dirección. En Ethereum, un contrato no puede tomar tus tokens sin tu consentimiento explícito previo.
3. **Depósito y Transferencia (Deposit):** Con la aprobación confirmada, se ejecuta la transacción de depósito. El contrato valida que dispongas del saldo necesario y transfiere los tokens DEMO a la bóveda.
4. **Cálculo de Tasa y Acuñación de Shares:** El contrato consulta la tasa de cambio actual (ajustada por el desplazamiento de decimales), calcula la cantidad exacta de participaciones YIELD que te corresponden y acuña (mintea) esos tokens directamente en tu billetera.
5. **Acumulación Automática de Rendimientos:** A medida que ingresan nuevos tokens DEMO al contrato, la tasa de cambio sube de forma continua. Tu cantidad de participaciones YIELD se mantiene fija, pero cada una de ellas vale más DEMO en cualquier momento.
6. **Retiro y Quema (Withdraw / Redeem):** Cuando decides retirar, indicas la cantidad de DEMO deseada o las participaciones YIELD que deseas quemar. El contrato destruye las participaciones correspondientes de tu saldo y te transfiere los tokens DEMO equivalentes junto con todo el rendimiento acumulado.

---

## El contrato SimpleStaking: Recorrido detallado por el código

Ahora que entendemos la mecánica conceptual, examinemos el código real que da vida a este sistema de staking. A continuación, presento el contrato completo en Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleStaking is ERC4626 {

    constructor(
        IERC20 asset_,
        string memory name_,
        string memory symbol_
    ) ERC4626(asset_) ERC20(name_, symbol_) {}

    function _decimalsOffset() internal view virtual override returns (uint8) {
        return 3;
    }
}
```

Analicemos cada fragmento en detalle:

### Los cimientos: Iniciando tu contrato

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
```

La primera línea declara la licencia de código abierto MIT, una de las más permisivas de la industria. Establece con claridad que cualquier persona puede usar, copiar, modificar y distribuir este código libremente. La directiva `pragma solidity ^0.8.20;` instruye al compilador a utilizar la versión 0.8.20 o cualquier versión menor compatible dentro de la serie 0.8.x, garantizando que el contrato aproveche las comprobaciones automáticas contra desbordamientos aritméticos (overflow/underflow) integradas en Solidity 0.8.

### Importando bloques de construcción probados en batalla

```solidity
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```

Estas declaraciones importan contratos auditados de la librería OpenZeppelin Contracts. La primera importación nos proporciona la implementación completa de la bóveda ERC-4626, mientras que la segunda nos brinda las capacidades estándar de un token ERC-20. Al heredar de OpenZeppelin, evitamos escribir lógica propensa a errores y nos beneficiamos de años de auditorías de seguridad.

### Declarando nuestro contrato

```solidity
contract SimpleStaking is ERC4626 {
```

La palabra clave `contract` inicia la definición del smart contract bajo el nombre `SimpleStaking`. La cláusula `is ERC4626` establece la herencia: `SimpleStaking` extiende el contrato `ERC4626` y adquiere automáticamente todas sus funciones públicas e internas. En términos de programación orientada a objetos, `SimpleStaking` es un contrato hijo que obtiene todas las capacidades de la bóveda estándar de forma inmediata.

### La función de configuración: Constructor

```solidity
constructor(
    IERC20 asset_,
    string memory name_,
    string memory symbol_
) ERC4626(asset_) ERC20(name_, symbol_) {}
```

El `constructor` se ejecuta una única vez en el momento en que el contrato se despliega en la blockchain:
- `asset_`: La dirección del token ERC-20 que los usuarios depositarán (el token subyacente DEMO). El tipo `IERC20` es una interfaz que asegura que el token responda a las funciones estándar como `transfer`, `balanceOf` y `allowance`.
- `name_`: El nombre legible para el token de participación (por ejemplo, "Simple Staking Shares").
- `symbol_`: El símbolo del token de participación (por ejemplo, "YIELD").

La sintaxis `ERC4626(asset_) ERC20(name_, symbol_)` invoca a los constructores de los contratos padre, inicializando la bóveda con el activo subyacente y configurando los metadatos del token de participación. El cuerpo del constructor permanece vacío porque toda la inicialización es manejada de forma limpia por los contratos padre.

### El corazón de la seguridad: Decimals Offset

```solidity
function _decimalsOffset() internal view virtual override returns (uint8) {
    return 3;
}
```

Esta pequeña función es la personalización de seguridad más importante de todo el contrato para neutralizar ataques de inflación (inflation attacks):
- `_decimalsOffset()`: El guión bajo inicial indica que se trata de una función interna diseñada para ser sobrescrita.
- `internal`: Solo puede ser invocada dentro de este contrato y por contratos que hereden de él.
- `view`: Función de solo lectura que no modifica el estado de la blockchain.
- `virtual override`: `override` indica que reemplaza la implementación por defecto de `ERC4626`, mientras que `virtual` permite que futuros contratos derivados puedan sobrescribirla si fuera necesario.
- `returns (uint8)`: Devuelve un entero sin signo de 8 bits.
- `return 3;`: Establece un desplazamiento de 3 decimales.

**¿Qué hace este desplazamiento en la práctica?**
Añade 3 órdenes de magnitud (un factor de 10^3 = 1,000) a los cálculos de participaciones. Esto produce dos efectos vitales:
1. **Mayor Precisión Inicial:** Cuando la bóveda está vacía, los cálculos virtuales actúan como si ya existieran participaciones y activos base en circulación, impidiendo que los primeros depósitos pequeños reciban cero participaciones por redondeo a la baja.
2. **Inviabilidad Económica de Ataques:** Si un atacante intenta inflar artificialmente la tasa de cambio donando tokens a una bóveda vacía, las participaciones virtuales absorben gran parte de la donación, forzando al atacante a perder más de 1,000 veces el valor que hipotéticamente podría intentar sustraer.

---

### El poder de la herencia: Lo que obtenemos gratis

Al heredar de `ERC4626`, nuestro contrato incorpora automáticamente todas las operaciones estándar sin requerir código adicional:
- `deposit(uint256 assets, address receiver)`: Transfiere activos subyacentes a la bóveda y acuña participaciones para el destinatario.
- `mint(uint256 shares, address receiver)`: Acuña una cantidad exacta de participaciones cobrando los activos subyacentes requeridos.
- `withdraw(uint256 assets, address receiver, address owner)`: Quema participaciones del propietario para entregarle una cantidad exacta de activos.
- `redeem(uint256 shares, address receiver, address owner)`: Quema una cantidad exacta de participaciones y entrega los activos proporcionales correspondientes.
- `totalAssets()`: Retorna el balance total de activos custodiados.
- `totalSupply()`: Retorna la cantidad total de participaciones en circulación.
- `convertToShares(uint256 assets)` / `convertToAssets(uint256 shares)`: Realizan conversiones exactas basadas en la tasa de cambio.
- `previewDeposit`, `previewMint`, `previewWithdraw`, `previewRedeem`: Permiten simular el resultado de cualquier operación antes de ejecutar la transacción en la red.

---

### Cómo se materializa el sistema de dos tokens

En este contrato, la separación entre el token de activo y el token de participación se implementa con absoluta claridad:

El token de activo es la dirección ERC-20 que se pasa al constructor. La bóveda solo custodia ese token específico. El activo es gestionado internamente por el contrato padre `ERC4626` y se utiliza en todas las transferencias y consultas de saldo.

El token de participación es el propio contrato `SimpleStaking`. Al heredar de `ERC20`, `SimpleStaking` es un contrato de token en sí mismo. Su `totalSupply` equivale al número de participaciones en circulación. Cuando se invoca `deposit`, el contrato acuña nuevas participaciones para el depositante. Cuando se invoca `withdraw` o `redeem`, el contrato quema participaciones del usuario.

La tasa de cambio se calcula internamente como: `(totalAssets() * 10^_decimalsOffset()) / totalSupply()`. Si la bóveda custodia 1,000 tokens con offset=3 y 100 participaciones en circulación, cada participación equivale a 10 tokens en escala real. El desplazamiento multiplica la precisión efectiva por 1,000, permitiendo que incluso los depósitos más pequeños generen participaciones válidas sin pérdidas por redondeo.

---

### Qué sucede cuando entra rendimiento (Yield)

La bóveda se beneficia automáticamente de cualquier token enviado directamente a su dirección. Supongamos que la bóveda custodia 1,000 tokens DEMO con 100 participaciones YIELD en circulación (tasa de 10 DEMO por participación). Si ingresan 50 tokens DEMO adicionales (por recompensas de la red o transferencias), `totalAssets()` pasa a 1,050 mientras que `totalSupply()` sigue siendo 100. Ahora cada participación vale 10.5 DEMO. Todos los poseedores de participaciones se benefician de forma proporcional sin necesidad de ejecutar ninguna transacción extra.

---

### Cómo crecen tus acciones cuando otros depositan

Cuando haces staking con tus tokens, recibes participaciones que representan tu derecho de propiedad sobre los activos totales. El valor por participación se calcula como los activos totales divididos entre las participaciones totales. A medida que nuevos tokens ingresan a la bóveda desde cualquier fuente, tus participaciones se vuelven automáticamente más valiosas porque representan una cuota sobre un fondo más grande.

Considera este ejemplo: tienes 10 participaciones cuando la bóveda contiene 1,000 tokens, lo que hace que cada participación valga 100 tokens. Si alguien deposita 100 tokens adicionales, el saldo de la bóveda aumenta a 1,100 mientras que tu conteo de participaciones sigue siendo 10. Ahora cada participación equivale a 110 tokens, otorgándote 100 tokens adicionales en valor sin que tengas que realizar ninguna acción.

Diseñé el sistema para que el crecimiento ocurra de forma totalmente pasiva. La tasa de cambio se actualiza instantáneamente cada vez que llegan tokens, ya sea por depósitos de otros usuarios, recompensas de staking o transferencias directas. Simplemente conservas tus participaciones y observas cómo se valorizan. Sin reclamaciones periódicas, sin transacciones extra y sin pasos manuales. Las matemáticas garantizan que todos los que poseían participaciones antes del depósito se beneficien proporcionalmente, mientras que los nuevos depositantes reciben participaciones a la tasa actualizada.

---

### Un diseño minimalista con máxima seguridad

La simplicidad de este contrato es su mayor fortaleza. Con solo 37 líneas en total, es sumamente conciso en comparación con lo que logra. Esa brevedad es el resultado directo de apoyarse en la implementación integral de OpenZeppelin. Mi contribución consistió en identificar la personalización de seguridad indispensable (el desplazamiento de 3 decimales) y aplicarla con precisión.

Este enfoque refleja un principio fundamental en el desarrollo de smart contracts: no programes desde cero lo que puedes heredar de librerías auditadas. Los contratos de OpenZeppelin han sido probados en batalla en cientos de implementaciones y auditados por múltiples firmas de seguridad reconocidas mundialmente. Manejan casos extremos sutiles que serían fáciles de pasar por alto en una implementación propia. Al heredar en lugar de copiar código, recibimos mejoras y actualizaciones de seguridad de forma limpia.

Si en el futuro necesitáramos añadir comisiones, podríamos sobrescribir las funciones `deposit` y `withdraw` para deducir un porcentaje antes de calcular las participaciones. Si quisiéramos restricciones de retiro, podríamos incorporar bloqueos temporales (timelocks) o listas de acceso. Pero para una bóveda de staking fundamental, esta implementación mínima es óptima y suficiente.

---

### Referencia completa de funciones públicas

Para que puedas interactuar con `SimpleStaking` con total seguridad, aquí tienes la referencia completa de funciones disponibles:

#### Operaciones Principales de Staking

| Nombre de la Función | Qué hace | Cuándo utilizarla |
| :--- | :--- | :--- |
| `deposit(uint256 assets, address receiver)` | Envía la cantidad exacta de `assets` a la bóveda; la bóveda acuña participaciones y las entrega a `receiver`. | Cuando deseas hacer staking de una cantidad específica de tokens y recibir participaciones a cambio. Requiere aprobación previa (`approve`). |
| `mint(uint256 shares, address receiver)` | Envía la cantidad necesaria de tokens para adquirir exactamente `shares` participaciones y las entrega a `receiver`. | Cuando quieres obtener una cantidad exacta de participaciones. Puedes consultar el costo previamente con `previewMint`. |
| `withdraw(uint256 assets, address receiver, address owner)` | Quema suficientes participaciones de `owner` para entregar exactamente `assets` tokens subyacentes a `receiver`. | Cuando deseas retirar una cantidad exacta del token subyacente. Puedes consultar las participaciones a quemar con `previewWithdraw`. |
| `redeem(uint256 shares, address receiver, address owner)` | Quema exactamente `shares` participaciones de `owner` y entrega los activos correspondientes a `receiver`. | Cuando quieres liquidar una cantidad específica de participaciones o la totalidad de tu posición. |

#### Funciones de Simulación (Preview)

| Nombre de la Función | Qué hace | Ejemplo de uso |
| :--- | :--- | :--- |
| `previewDeposit(uint256 assets)` | Retorna cuántas participaciones recibirías al depositar `assets` tokens. | Conocer con exactitud cuántas participaciones obtendrás antes de gastar gas. |
| `previewMint(uint256 shares)` | Retorna cuántos tokens subyacentes necesitas para acuñar `shares` participaciones. | Calcular el costo exacto antes de adquirir un número específico de participaciones. |
| `previewWithdraw(uint256 assets)` | Retorna cuántas participaciones debes quemar para retirar `assets` tokens. | Saber cuántas participaciones te costará retirar una suma determinada de tokens. |
| `previewRedeem(uint256 shares)` | Retorna cuántos tokens subyacentes recibirás al quemar `shares` participaciones. | Consultar el monto exacto a recibir antes de liquidar tus participaciones. |

#### Funciones de Conversión de Tasa

| Nombre de la Función | Qué hace | Retorno |
| :--- | :--- | :--- |
| `convertToShares(uint256 assets)` | Convierte un monto de `assets` a su equivalente en participaciones a la tasa actual (sin redondeo). | Cantidad teórica de participaciones. |
| `convertToAssets(uint256 shares)` | Convierte una cantidad de `shares` a su equivalente en activos subyacentes a la tasa actual (sin redondeo). | Cantidad teórica de tokens subyacentes. |

#### Consulta de Estado de la Bóveda

| Nombre de la Función | Qué hace | Caso de uso |
| :--- | :--- | :--- |
| `totalAssets()` | Retorna el total de tokens subyacentes custodiados en la bóveda. | Calcular el Total Value Locked (TVL) del protocolo. |
| `totalSupply()` | Retorna el total de tokens de participación en circulación. | Conocer el suministro global de participaciones emitidas. |
| `asset()` | Retorna la dirección del contrato del token ERC-20 subyacente. | Verificar qué token específico gestiona la bóveda. |

#### Funciones Estándar ERC-20 del Token de Participación

Dado que `SimpleStaking` hereda de `ERC20`, tus tokens de participación cuentan con todas las funciones estándar:

| Nombre de la Función | Qué hace | Cuándo utilizarla |
| :--- | :--- | :--- |
| `balanceOf(address account)` | Retorna las participaciones que posee una cuenta. | Consultar tu saldo de participaciones o el de otro usuario. |
| `transfer(address recipient, uint256 amount)` | Transfiere `amount` participaciones a `recipient`. | Enviar participaciones a otra billetera o contrato inteligente. |
| `transferFrom(address sender, address recipient, uint256 amount)` | Transfiere participaciones desde `sender` hacia `recipient` usando autorización previa. | Utilizado por contratos externos y exchanges para mover tokens en tu nombre tras autorizarlos. |
| `approve(address spender, uint256 amount)` | Otorga permiso a `spender` para disponer de hasta `amount` participaciones. | Autorizar a un protocolo DeFi externo a interactuar con tus participaciones. |
| `allowance(address owner, address spender)` | Retorna el cupo de gasto restante otorgado a `spender`. | Verificar qué límite de autorización tiene concedido un contrato externo. |
| `increaseAllowance(address spender, uint256 addedValue)` | Incrementa la autorización concedida a `spender` en `addedValue`. | Aumentar el cupo concedido de forma segura sin reiniciar la aprobación previa. |
| `decreaseAllowance(address spender, uint256 subtractedValue)` | Disminuye la autorización concedida a `spender` en `subtractedValue`. | Reducir la autorización concedida para limitar riesgos de exposición. |

#### Nota sobre la nomenclatura de funciones

Es posible que al inspeccionar el código fuente de OpenZeppelin notes algunas funciones internas con sufijos específicos. En la implementación de OpenZeppelin, utilizan patrones modulares preparados para contratos actualizables y llamadas optimizadas. Las funciones públicas que tú y tus aplicaciones invocan son las versiones limpias sin sufijos que documentamos aquí.

---

## Riesgos de seguridad y cómo nos protegemos

En cualquier desarrollo sobre blockchain, la seguridad financiera es primordial. Al diseñar este sistema de staking, abordamos con especial atención dos riesgos principales:

1. **Ataques de Inflación (Inflation Attacks):** En bóvedas sin protección, un atacante que realiza el primer depósito puede donar tokens directamente al contrato para desbalancear la tasa de cambio y forzar a que los siguientes usuarios reciban cero participaciones por truncamiento numérico. Nuestro contrato mitiga este vector mediante el `_decimalsOffset()` de 3 niveles de magnitud, añadiendo activos y participaciones virtuales a los cálculos para que el ataque resulte financieramente imposible y provoque pérdidas masivas al atacante.
2. **Ataques de Reentrancia (Reentrancy):** Las implementaciones de OpenZeppelin siguen rigurosamente el patrón de diseño Checks-Effects-Interactions (Comprobaciones, Efectos, Interacciones) y aplican protectores de reentrancia cuando corresponde, actualizando los saldos internos antes de ejecutar cualquier transferencia externa de tokens.

---

## Manejo de errores y seguridad práctica

La inmutabilidad de la blockchain exige comprender las precauciones necesarias durante el uso diario:

- **Tokens no compatibles:** El contrato está programado exclusivamente para custodiar el token DEMO asignado en su despliegue. Si un usuario envía otros tokens ERC-20 directamente a la dirección del contrato mediante `transfer`, esos tokens quedarán inaccesibles para siempre, ya que el contrato no posee funciones de rescate para activos ajenos.
- **Transferencias directas de ETH:** El contrato no implementa funciones `receive()` ni `fallback()` pagables, por lo que cualquier intento de enviarle ETH nativo será rechazado de inmediato por la red, protegiendo tus fondos contra pérdidas accidentales.
- **Flujo de dos pasos (Approve y Deposit):** En Ethereum, un contrato no puede descontar tokens de tu billetera a menos que lo hayas autorizado previamente mediante una transacción `approve`. La interfaz web gestiona esto automáticamente solicitando primero la aprobación y luego el depósito.
- **Fondos de Gas en Sepolia:** Toda transacción requiere gas pagado en ETH de Sepolia. Asegúrate de contar con una pequeña fracción de testnet ETH en tu billetera antes de operar.
- **Previsualización antes de firmar:** Te recomendamos verificar siempre los montos simulados con `previewDeposit` y `previewRedeem` en la interfaz antes de firmar cualquier transacción en tu billetera.
- **Seguridad en retiros y posiciones:** Tus participaciones YIELD permanecen siempre en tu billetera bajo tu custodia y clave privada; el contrato no toma posesión de tus participaciones.

---

## Manteniendo el sistema seguro

La seguridad ha sido la prioridad absoluta en este proyecto. Utilicé las librerías de OpenZeppelin, ampliamente reconocidas por sus estándares de código auditado.

El riesgo específico del "Ataque de Inflación" se resuelve con la técnica del desplazamiento de decimales (`decimals offset`). Añade precisión matemática extra para que resulte inviable engañar al sistema. Es equivalente a añadir decimales adicionales al saldo de una cuenta bancaria para que hasta la fracción más diminuta quede registrada con exactitud, sin dejar margen para que nadie se beneficie indebidamente por redondeos.

---

## Por qué OpenZeppelin es fundamental en este camino

Al comenzar en el desarrollo blockchain, es común pensar que se debe programar todo desde cero para comprenderlo. Sin embargo, en smart contracts, apoyarse en librerías probadas en batalla es la decisión más inteligente y responsable.

OpenZeppelin provee los cimientos sobre los que opera la economía descentralizada:
- Cumplimiento estricto y testeado de los estándares ERC-20 y ERC-4626.
- Funciones seguras de transferencia de tokens con manejo de casos extremos.
- Emisión estandarizada de eventos para total visibilidad on-chain.
- Protección integrada contra desbordamientos numéricos y reentrancia.

Mi contrato `SimpleStaking` tiene únicamente 37 líneas porque OpenZeppelin absorbe toda la complejidad subyacente. Yo me concentro en la configuración de seguridad y la lógica de negocio, logrando un contrato robusto, conciso y fácilmente auditable.

---

## Dándole vida al contrato: Construyendo la interfaz de usuario

Un contrato inteligente brillante es inútil si los usuarios no pueden interactuar con él con comodidad. Necesitaba construir una interfaz amigable que permitiera a cualquier persona hacer staking con solo unos clics. A continuación, exploraremos cómo construí el frontend con Next.js, Wagmi y RainbowKit.

### Los cimientos: Configuración del proyecto Next.js

Utilicé Next.js por su robustez, excelente ecosistema de desarrollo y capacidad de compilación optimizada. Aquí está la estructura de la página principal (`pages/index.tsx`):

```typescript
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { StakingCard } from '../components/StakingCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ERC4626 Staking Vault</title>
        <meta
          content="Interfaz premium de staking para bóvedas ERC4626"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>💎</span>
          <span>YieldVault</span>
        </div>
        <ConnectButton showBalance={false} chainStatus="icon" />
      </nav>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Maximiza tu Rendimiento con <span className={styles.gradientText}>ERC-4626</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Staking seguro, transparente y conforme al estándar. 
            Deposita tus tokens DEMO y gana participaciones YIELD automáticamente.
          </p>
        </div>

        <div className={styles.stakingContainer}>
          <StakingCard />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Bóveda Estandarizada con Rendimiento &copy; 2026</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/cjbaezilla/Build-Your-First-Solidity-ERC20-Staking-Contract-Tutorial" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://sepolia.etherscan.io/address/0x637a4de5e0068d1F0dfc91B3C00A1B7c92Ed3458" target="_blank" rel="noreferrer">Explorador</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
```

---

### La interfaz de staking: Una tarjeta intuitiva

El componente `StakingCard` gestiona las pestañas de Stake y Unstake, consulta balances y decide si se debe solicitar aprobación o depósito directo:

```typescript
import { useState } from 'react';
import { useStaking } from '../hooks/useStaking';
import styles from '../styles/Staking.module.css';

export function StakingCard() {
  const {
    assetBalance,
    shareBalance,
    allowance,
    totalAssets,
    previewAssets,
    approve,
    deposit,
    withdraw,
    isPending,
    isWaitingForTransaction,
    address
  } = useStaking();

  const [amount, setAmount] = useState('');
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');

  const handleAction = async () => {
    if (!amount || isNaN(Number(amount))) return;

    if (activeTab === 'stake') {
      if (Number(allowance) < Number(amount)) {
        await approve(amount);
      } else {
        await deposit(amount);
      }
    } else {
      await withdraw(amount);
    }
  };

  if (!address) {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>Bienvenido al Staking</h2>
        <p className={styles.description}>Por favor conecta tu billetera para comenzar a generar rendimientos.</p>
      </div>
    );
  }

  const isApproved = Number(allowance) >= Number(amount) && Number(amount) > 0;

  return (
    <div className={styles.card}>
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'stake' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('stake')}
        >
          Stake
        </button>
        <button 
          className={activeTab === 'unstake' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('unstake')}
        >
          Unstake
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Activos Totales en la Bóveda</span>
          <span className={styles.statValue}>{Number(totalAssets).toLocaleString()} DEMO</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Tu Balance en Staking</span>
          <span className={styles.statValue}>{Number(previewAssets).toLocaleString()} DEMO</span>
          <span className={styles.statSubValue}>({Number(shareBalance).toLocaleString()} YIELD)</span>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputHeader}>
          <span>Monto</span>
          <span>Balance: {activeTab === 'stake' ? assetBalance : previewAssets}</span>
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          className={styles.input}
        />
        <div className={styles.maxButton} onClick={() => setAmount(activeTab === 'stake' ? assetBalance : previewAssets)}>
          MÁX
        </div>
      </div>

      <button 
        className={styles.actionButton} 
        disabled={isPending || isWaitingForTransaction || !amount}
        onClick={handleAction}
      >
        {isPending || isWaitingForTransaction ? (
          <span className={styles.loader}></span>
        ) : (
          activeTab === 'stake' 
            ? (isApproved ? 'Hacer Staking de DEMO' : 'Aprobar DEMO') 
            : 'Retirar DEMO'
        )}
      </button>

      {(isPending || isWaitingForTransaction) && (
        <p className={styles.statusText}>
          {isPending ? 'Confirma en tu billetera...' : 'Transacción en proceso...'}
        </p>
      )}
    </div>
  );
}
```

---

### El puente hacia la blockchain: El hook useStaking

El hook `useStaking` concentra toda la lógica de conexión con los smart contracts mediante `wagmi` y `viem`:

```typescript
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { 
  ERC20_MOCK_ADDRESS, 
  ERC20_MOCK_ABI, 
  SIMPLE_STAKING_ADDRESS, 
  SIMPLE_STAKING_ABI 
} from '../constants/contracts';
import { useState, useEffect } from 'react';

export function useStaking() {
  const { address } = useAccount();
  const { writeContract, data: hash, error: writeError, isPending } = useWriteContract();
  
  const { isLoading: isWaitingForTransaction, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  // Consultar decimales de los tokens
  const { data: assetDecimals } = useReadContract({
    address: ERC20_MOCK_ADDRESS,
    abi: ERC20_MOCK_ABI,
    functionName: 'decimals',
  });

  const { data: shareDecimals } = useReadContract({
    address: SIMPLE_STAKING_ADDRESS,
    abi: SIMPLE_STAKING_ABI,
    functionName: 'decimals',
  });

  const aDec = assetDecimals ?? 18;
  const sDec = shareDecimals ?? 18;

  // Consultar balances y aprobaciones
  const { data: assetBalance, refetch: refetchAssetBalance } = useReadContract({
    address: ERC20_MOCK_ADDRESS,
    abi: ERC20_MOCK_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  const { data: shareBalance, refetch: refetchShareBalance } = useReadContract({
    address: SIMPLE_STAKING_ADDRESS,
    abi: SIMPLE_STAKING_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: ERC20_MOCK_ADDRESS,
    abi: ERC20_MOCK_ABI,
    functionName: 'allowance',
    args: address ? [address, SIMPLE_STAKING_ADDRESS] : undefined,
    query: {
      enabled: !!address,
    }
  });

  const { data: totalAssets, refetch: refetchTotalAssets } = useReadContract({
    address: SIMPLE_STAKING_ADDRESS,
    abi: SIMPLE_STAKING_ABI,
    functionName: 'totalAssets',
  });

  // Simulación: calcular cuántos activos corresponden al saldo actual de participaciones
  const { data: previewAssets } = useReadContract({
    address: SIMPLE_STAKING_ADDRESS,
    abi: SIMPLE_STAKING_ABI,
    functionName: 'convertToAssets',
    args: shareBalance ? [shareBalance] : undefined,
    query: {
      enabled: !!shareBalance,
    }
  });

  const refetchAll = () => {
    refetchAssetBalance();
    refetchShareBalance();
    refetchAllowance();
    refetchTotalAssets();
  };

  useEffect(() => {
    if (isSuccess) {
      refetchAll();
    }
  }, [isSuccess]);

  const approve = async (amount: string) => {
    const value = parseUnits(amount, aDec);
    writeContract({
      address: ERC20_MOCK_ADDRESS,
      abi: ERC20_MOCK_ABI,
      functionName: 'approve',
      args: [SIMPLE_STAKING_ADDRESS, value],
    });
  };

  const deposit = async (amount: string) => {
    if (!address) return;
    const value = parseUnits(amount, aDec);
    writeContract({
      address: SIMPLE_STAKING_ADDRESS,
      abi: SIMPLE_STAKING_ABI,
      functionName: 'deposit',
      args: [value, address],
    });
  };

  const redeem = async (amount: string) => {
    if (!address) return;
    const value = parseUnits(amount, sDec);
    writeContract({
      address: SIMPLE_STAKING_ADDRESS,
      abi: SIMPLE_STAKING_ABI,
      functionName: 'redeem',
      args: [value, address, address],
    });
  };

  const withdraw = async (amount: string) => {
    if (!address) return;
    const value = parseUnits(amount, aDec);
    writeContract({
      address: SIMPLE_STAKING_ADDRESS,
      abi: SIMPLE_STAKING_ABI,
      functionName: 'withdraw',
      args: [value, address, address],
    });
  };

  return {
    address,
    assetBalance: assetBalance ? formatUnits(assetBalance, aDec) : '0',
    shareBalance: shareBalance ? formatUnits(shareBalance, sDec) : '0',
    allowance: allowance ? formatUnits(allowance, aDec) : '0',
    totalAssets: totalAssets ? formatUnits(totalAssets, aDec) : '0',
    previewAssets: previewAssets ? formatUnits(previewAssets, aDec) : '0',
    approve,
    deposit,
    redeem,
    withdraw,
    isPending,
    isWaitingForTransaction,
    writeError,
    refetchAll
  };
}
```

---

### Entendiendo los ABIs: El manual de usuario del contrato

Los Application Binary Interfaces (ABI) actúan como el diccionario que permite a JavaScript comunicarse con los contratos compilados en la EVM:

```typescript
export const ERC20_MOCK_ADDRESS = '0x22c26E2278Fb64bF367dE2121762e174ce02c4ED' as const;
export const SIMPLE_STAKING_ADDRESS = '0x637a4de5e0068d1F0dfc91B3C00A1B7c92Ed3458' as const;

export const ERC20_MOCK_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "symbol", "type": "string" },
      { "internalType": "address", "name": "initialAccount", "type": "address" },
      { "internalType": "uint256", "name": "initialBalance", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const SIMPLE_STAKING_ABI = [
  {
    "inputs": [
      { "internalType": "contract IERC20", "name": "asset_", "type": "address" },
      { "internalType": "string", "name": "name_", "type": "string" },
      { "internalType": "string", "name": "symbol_", "type": "string" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "assets", "type": "uint256" },
      { "internalType": "address", "name": "receiver", "type": "address" }
    ],
    "name": "deposit",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "assets", "type": "uint256" },
      { "internalType": "address", "name": "receiver", "type": "address" },
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "withdraw",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "shares", "type": "uint256" },
      { "internalType": "address", "name": "receiver", "type": "address" },
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "redeem",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalAssets",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "shares", "type": "uint256" }],
    "name": "convertToAssets",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
```

---

### Conexión de billetera con RainbowKit

Configuramos la conexión en `wagmi.ts`:

```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'YieldVault Staking App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  ssr: true,
});
```

---

### El panorama completo: Cómo fluye todo en conjunto

Repasemos el flujo completo cuando un usuario interactúa con la aplicación:
1. El usuario abre la página web. La aplicación Next.js se carga y presenta la tarjeta de bienvenida solicitando conectar la billetera.
2. El usuario hace clic en "Connect Wallet" de RainbowKit y aprueba la conexión en su extensión de billetera.
3. `wagmi` recibe la dirección y activa automáticamente las consultas de lectura (`useReadContract`), mostrando los balances actualizados en pantalla.
4. El usuario escribe un monto (por ejemplo, 100 DEMO). La aplicación detecta que la autorización previa es insuficiente y muestra el botón "Aprobar DEMO".
5. El usuario hace clic en "Aprobar DEMO", confirma la transacción en su billetera y, una vez minada, el botón cambia automáticamente a "Hacer Staking de DEMO".
6. El usuario hace clic en "Hacer Staking de DEMO", firma la transacción de depósito y, al confirmarse en la blockchain, la interfaz refresca los datos mostrando el nuevo saldo de participaciones YIELD y el total de activos del vault.

---

### Manteniendo todo sincronizado

En aplicaciones Web3, mantener los datos visuales actualizados tras cada transacción es vital. Por ello definimos la función `refetchAll()` dentro de un `useEffect` que escucha el estado `isSuccess` del hook `useWaitForTransactionReceipt`. Cada vez que una transacción de aprobación, depósito o retiro se confirma en un bloque, todos los saldos se refrescan en tiempo real de forma automática.

---

### Manejo de errores y retroalimentación

La interfaz proporciona retroalimentación visual clara en cada etapa: deshabilita el botón mientras una transacción está pendiente, muestra un indicador de carga animado e informa al usuario mediante textos de estado si debe revisar su billetera o si la transacción está siendo procesada por la red.

---

### Qué hace que esta integración funcione

La arquitectura del proyecto mantiene una separación limpia de responsabilidades:
- El smart contract custodia los fondos y ejecuta las reglas financieras con máxima seguridad.
- El hook `useStaking` sirve como puente exclusivo entre React y la blockchain.
- El componente `StakingCard` se encarga de la presentación visual y la interacción del usuario.
- La página principal coordina el diseño general y la navegación.

---

### El papel de TypeScript

TypeScript ofrece tipado estricto y prevención de errores en tiempo de compilación. En aplicaciones blockchain, donde las transacciones son irreversibles y manejan activos reales, garantizar que los montos se conviertan con precisión usando `parseUnits` y `formatUnits` con los decimales correctos evita fallos críticos en tiempo de ejecución.

---

### Despliegue y pruebas del stack completo

Con los contratos compilados y verificados en Sepolia y el frontend estático listo, la aplicación puede alojarse en cualquier proveedor de hosting moderno (como Vercel, Netlify o servidores estáticos) ofreciendo una experiencia Web3 instantánea y sin fricción.

---

### Detalles del despliegue de los contratos en Sepolia

Los contratos están desplegados y verificados en la red de pruebas Sepolia:

- **Token ERC-20 Mock (DEMO):**
  - Dirección: [`0x22c26E2278Fb64bF367dE2121762e174ce02c4ED`](https://sepolia.etherscan.io/address/0x22c26E2278Fb64bF367dE2121762e174ce02c4ED)
  - Hash de Despliegue: [`0xbe3dd6773d7b8b18b553293eaa7f90a72cc129fe3c9919587e3cb1da31f3d2e3`](https://sepolia.etherscan.io/tx/0xbe3dd6773d7b8b18b553293eaa7f90a72cc129fe3c9919587e3cb1da31f3d2e3)
- **Bóveda SimpleStaking (YIELD):**
  - Dirección: [`0x637a4de5e0068d1F0dfc91B3C00A1B7c92Ed3458`](https://sepolia.etherscan.io/address/0x637a4de5e0068d1F0dfc91B3C00A1B7c92Ed3458)
  - Hash de Despliegue: [`0xb89c9a91d4e4a073205b6da9fdc6e1f12a7103372b590210881e30fca8518aef`](https://sepolia.etherscan.io/tx/0xb89c9a91d4e4a073205b6da9fdc6e1f12a7103372b590210881e30fca8518aef)

---

### Operaciones de demostración en Sepolia

Para validar la funcionalidad completa, se ejecutaron las siguientes transacciones on-chain:

1. **Aprobación de Tokens (Approve):**
   - Transacción: [`0xcd7587f1fd9674f1d062fc5f6136602aa5ab823a8e4677ca4c855f041ea4e557`](https://sepolia.etherscan.io/tx/0xcd7587f1fd9674f1d062fc5f6136602aa5ab823a8e4677ca4c855f041ea4e557)
2. **Staking / Depósito (Deposit):**
   - Transacción: [`0x9398016f758ff85ddb7a3ebf7625a0aebaba155f3004a2d817c844796efeb833`](https://sepolia.etherscan.io/tx/0x9398016f758ff85ddb7a3ebf7625a0aebaba155f3004a2d817c844796efeb833)
3. **Retiro / Des-staking (Withdraw):**
   - Transacción: [`0x0906c0677bcba0823306863d5e06829a3e9d0087c80fdb22d75a08054b956d31`](https://sepolia.etherscan.io/tx/0x0906c0677bcba0823306863d5e06829a3e9d0087c80fdb22d75a08054b956d31)

---

## Usando la DApp: Guía visual paso a paso

A continuación, puedes seguir el recorrido completo de uso de la aplicación mediante capturas de pantalla de cada etapa:

### Paso 1: Página de inicio (Landing Page)
Al ingresar a la aplicación, el usuario encuentra una interfaz limpia con la tarjeta de staking y el botón de conexión en la barra superior.

![Paso 1: Página de inicio](/images/blog/screenshot_dapp_1_connect.png)

### Paso 2: Conectar billetera
Al hacer clic en "Connect Wallet", se despliega la ventana emergente de RainbowKit para seleccionar tu billetera Web3 preferida.

![Paso 2: Conectar billetera](/images/blog/screenshot_dapp_2_wallet_popup.png)

### Paso 3: Billetera conectada
Una vez conectada, la tarjeta muestra los saldos actuales del usuario en DEMO y YIELD, así como los activos totales custodiados en la bóveda.

![Paso 3: Billetera conectada](/images/blog/screenshot_dapp_3_connected.png)

### Paso 4: Aprobación de tokens (Approve)
Antes de depositar, se presiona "Aprobar DEMO" para autorizar al contrato a transferir los tokens necesarios.

![Paso 4: Aprobación de tokens](/images/blog/screenshot_dapp_4_approving_tokens.png)

### Paso 5: Depósito de tokens (Deposit)
Con la aprobación lista, el botón cambia a "Hacer Staking de DEMO". El usuario ingresa el monto y firma el depósito.

![Paso 5: Depósito de tokens](/images/blog/screenshot_dapp_5_staking_tokens.png)

### Paso 6: Tokens depositados
Tras confirmarse la transacción, el balance en staking se actualiza automáticamente reflejando las nuevas participaciones YIELD obtenidas.

![Paso 6: Tokens depositados](/images/blog/screenshot_dapp_6_tokens_staked.png)

### Paso 7: Retiro de tokens (Unstake)
Para retirar fondos, el usuario pasa a la pestaña "Unstake", especifica la cantidad deseada y ejecuta la transacción de retiro.

![Paso 7: Retiro de tokens](/images/blog/screenshot_dapp_7_unstaking_tokens.png)

### Paso 8: Tokens retirados
Al confirmarse el retiro, las participaciones son quemadas y los tokens DEMO correspondientes regresan a la billetera del usuario.

![Paso 8: Tokens retirados](/images/blog/screenshot_dapp_8_tokens_unstaked.png)

---

## Enlaces útiles

### Estándar ERC-4626 y OpenZeppelin
- [Especificación Oficial ERC-4626 (EIP-4626)](https://eips.ethereum.org/EIPS/eip-4626): Documento canónico del estándar para bóvedas tokenizadas.
- [Documentación de OpenZeppelin ERC4626](https://docs.openzeppelin.com/contracts/5.x/erc4626): Guía detallada sobre implementación, desplazamiento de decimales y protección contra ataques de inflación.
- [Código Fuente de ERC4626.sol en GitHub](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC4626.sol): Implementación base utilizada en este tutorial.

### Frontend y Herramientas Web3
- [Documentación de Wagmi](https://wagmi.sh/react/getting-started): Hooks de React para interactuar con contratos inteligentes en Ethereum.
- [Documentación de RainbowKit](https://rainbowkit.com/docs): Componentes y utilidades para conexión de billeteras Web3.
- [Documentación de Viem](https://viem.sh): Librería ligera y tipada para la comunicación con la EVM.

### Faucets para la Testnet Sepolia (ETH de prueba gratis)
- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia): Faucet confiable de testnet ETH.
- [Google Cloud Sepolia Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia): Faucet oficial de Google Web3 para Sepolia.

---

## Conclusión

Los contratos de staking representan una piedra angular del futuro descentralizado. Demuestran con contundencia cómo el código puede crear sistemas financieros automatizados, justos y sin intermediarios que tratan a cada participante con total equidad. El estándar ERC-4626, con su elegante arquitectura de dos tokens y sus garantías matemáticas, proporciona una base sólida e interoperable para toda la economía digital.

Si estás leyendo esto y te sientes inspirado, te animo a dar el siguiente paso: clona el repositorio, despliega tu propio contrato en una red de pruebas, interactúa con él usando tu billetera y explora la documentación técnica. Las habilidades que adquieres al construir aplicaciones descentralizadas completas te permitirán ser parte activa de la transformación tecnológica global.

El futuro de las finanzas no está reservado para unos pocos expertos; pertenece a cualquiera que decida aprender y construir. Y me llena de entusiasmo saber que estamos construyendo ese futuro juntos, un contrato inteligente a la vez.
