---
title: "Vibe2Wizard Hackathon Update: Repositorio del Proyecto y Contratos Bajo el Capó"
date: "10-03-2026"
excerpt: "Análisis técnico exhaustivo de la arquitectura de Vibe2Wizard en Avalanche: contratos inteligentes en Solidity con cálculo de nivel por búsqueda binaria, pasaportes NFT soulbound, sistema de registro on-chain y frontend en Next.js con Wagmi y RainbowKit."
author: "Carlos Baeza Negroni"
categories: ["Noticias", "Hackathons"]
tags: ["Avalanche", "Solidity", "Smart Contracts", "Next.js", "React", "Wagmi", "RainbowKit", "ERC-721", "Soulbound", "Web3", "Hackathon", "TypeScript"]
coverImage: "/images/blog/vibe2wizard-portada3.png"
readTime: "40 min de lectura"
---

Quiero compartir con ustedes lo que nuestro equipo logró durante el **Hackathon Build Games de Avalanche**, porque creo firmemente que lo que construimos representa un aporte genuinamente significativo para la comunidad Web3, aun cuando nuestra participación en este hackathon en particular haya alcanzado su conclusión natural. Pusimos todo nuestro corazón en crear **Vibe2Wizard**, una plataforma de aprendizaje gamificada que guía a las personas desde el nivel de principiantes absolutos hasta convertirse en desarrolladores verificados on-chain, y estoy profundamente orgulloso de todo lo que entregamos durante este intenso sprint creativo.

Permítanme guiarlos a través de lo que realmente construimos, porque esto no es solo un concepto teórico o un prototipo en papel. Creamos contratos inteligentes totalmente funcionales que viven en la **testnet Fuji de Avalanche**, una interfaz de usuario completa que acompaña a los recién llegados a lo largo de toda la experiencia de incorporación (*onboarding*) en Web3, y un sistema sofisticado que integra cada pieza en una plataforma operativa lista para ser usada. Cuando digo que desplegamos en Fuji, me refiero a transacciones reales, contratos reales y funcionalidad interactiva disponible para cualquiera que cuente con una billetera y tokens de prueba.

El núcleo de nuestro sistema es lo que denominamos el [Wizard Passport](https://testnet.snowtrace.io/address/0x2341452ba859F19fF6D93054cb9759E118DdA50C), un token digital especial que representa la identidad de una persona como estudiante de Web3. Debo explicar qué lo diferencia de los NFTs convencionales: la mayoría de los NFTs están diseñados para comprarse y venderse en mercados como OpenSea, pero nuestro pasaporte es lo que llamamos *soulbound* (intransferible). Esto significa que una vez minteado en tu billetera, permanece allí permanentemente y no puede ser transferido a nadie más. Esta decisión convierte al pasaporte en una credencial auténtica en lugar de un simple activo especulativo. Tus logros quedan vinculados para siempre a tu identidad digital, exactamente como deben funcionar las credenciales profesionales.

Lo que más me entusiasmó durante el desarrollo fue idear la forma en que el pasaporte reflejara visualmente el progreso real de cada persona. Diseñamos diez niveles visuales diferenciados, desde un novato encapuchado hasta un resplandeciente archimago con runas animadas. Cuando alguien alcanza el nivel 20, la imagen de su pasaporte se actualiza automáticamente en la blockchain para mostrar la versión de aprendiz. Al llegar al nivel 30, cambia nuevamente al diseño de acólito. Esto no es solo estético: está vinculado matemáticamente a puntos de experiencia reales que únicamente se incrementan al completar desafíos formativos prácticos.

A continuación, les muestro un fragmento del código en Solidity que escribimos, cuya implementación es sumamente elegante. Esta función calcula el nivel alcanzado en función del total de puntos de experiencia acumulados, utilizando un algoritmo de **búsqueda binaria** para hacer el cálculo extremadamente eficiente:

```solidity
function calculateLevel(uint256 xp) internal pure returns (uint256) {
    if (xp >= 449406276829) return 100;
    
    uint256 low = 1;
    uint256 high = 100;

    while (low < high) {
        uint256 mid = (low + high + 1) / 2;
        if (getXPThreshold(mid) <= xp) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
```

Si la idea de la búsqueda binaria suena muy técnica, permítanme explicarla en lenguaje sencillo. Imaginen que tienen una lista de cien niveles y necesitan averiguar cuál le corresponde a un usuario. Un enfoque ingenuo revisaría cada nivel uno por uno, lo que podría requerir hasta 99 comparaciones. Nuestro enfoque de búsqueda binaria divide el problema a la mitad en cada paso, lo que significa que necesitamos un máximo de 7 comparaciones para encontrar cualquier nivel. Esto es fundamental porque cada cálculo en la blockchain cuesta dinero real (o en nuestro caso, gas subsidiado de testnet), y la eficiencia se traduce directamente en menores costos y una mejor experiencia de usuario.

Los requisitos de experiencia siguen una curva diseñada cuidadosamente que crece de forma exponencial. Cuando me senté a diseñar este sistema, sabía que quería algo gratificante al comienzo pero que aumentara progresivamente su dificultad. El salto del nivel 9 al nivel 10 requiere alrededor de 2,000 XP acumulados, pero alcanzar el nivel 50 exige más de 150 millones de XP, y el nivel 100 requiere casi medio billón de XP. Este crecimiento exponencial no es arbitrario; está calculado mediante una fórmula que asegura que la brecha entre niveles consecutivos crezca progresivamente. De este modo, el pasaporte evoluciona lentamente a lo largo del tiempo, creando un viaje formativo de meses o años. Queríamos construir algo que acompañara a los desarrolladores serios durante toda su carrera en Web3, no algo que se agotara en un fin de semana.

Les muestro la librería real que implementa este cálculo de XP, donde se encuentra la curva de progresión completa en un arreglo constante:

```solidity
function getXPThresholds() internal pure returns (uint256[100] memory) {
    return [
        uint256(0), 2000, 4620, 8040, 12489, 18258, 25712, 35309, 47471, 62769,
        81931, 105793, 135427, 172083, 217361, 273061, 341428, 425110, 527223, 651530,
        802642, 986112, 1208548, 1477742, 1802810, 2195341, 2667558, 3234503, 3913153, 4723663,
        5689640, 6840547, 8212351, 9846152, 11789353, 14096463, 16831047, 20067853, 23885296, 28378235,
        33661101, 39871432, 47173938, 55765952, 65874345, 77766357, 91752952, 108198746, 127528381, 150233722,
        176882007, 208205006, 245016005, 288220454, 338928478, 398466146, 468288982, 550197494, 646254491, 758906078,
        890894689, 1045579877, 1227076973, 1439953851, 1689282561, 1981631254, 2324140947, 2725587325, 3196283708, 3748202637,
        4394954871, 5153811745, 6043925470, 7087448321, 8311582169, 9747519362, 11432482473, 13408792998, 15726957889, 18445881030,
        21635100420, 25377133183, 29766851639, 34916073804, 40958389294, 48048108993, 56366324108, 66126186368, 77572434323, 90996763558,
        106745589938, 125224543914, 146906813839, 172344275890, 202180583800, 237168325084, 278217312092, 326427859821, 383023228791, 449406276829
    ];
}
```

Cada valor en ese arreglo representa la cantidad acumulada de XP requerida para alcanzar dicho nivel. El nivel 1 requiere 0 XP (punto de inicio para todos). El nivel 2 requiere 2,000 XP, alcanzable en la primera hora por un usuario motivado. El nivel 5 requiere 12,489 XP tras desplegar contratos y superar retos de seguridad. Para el nivel 20 se necesitan más de 650 mil XP, y para el nivel 50, más de 150 millones. El nivel 100 exige 449 mil millones de XP, una meta pensada para mantener motivados a los constructores más dedicados a largo plazo.

La librería proporciona la función `getXPThreshold` para consultar el umbral de cualquier nivel:

```solidity
function getXPThreshold(uint256 level) internal pure returns (uint256) {
    if (level <= 1) return 0;
    if (level > 100) level = 100;

    return getXPThresholds()[level - 1];
}
```

Esta función maneja los casos extremos de forma segura: si se solicita el nivel 1 o inferior, retorna 0; si se solicita un nivel superior a 100, lo limita a 100 para evitar desbordamientos de índice. El indexado `[level - 1]` es necesario debido a que los arreglos en Solidity comienzan en el índice 0 mientras nuestros niveles parten en 1. La palabra clave `pure` indica que no lee ni modifica el estado de la blockchain, resultando en una ejecución sumamente económica.

El cálculo del nivel mediante búsqueda binaria opera de la siguiente manera: establecemos `low` en 1 y `high` en 100. En cada iteración evaluamos el punto medio `mid = (low + high + 1) / 2`. Si el umbral de XP para `mid` es menor o igual a la experiencia del usuario, sabemos que al menos ha alcanzado ese nivel, por lo que actualizamos `low = mid`. En caso contrario, establecemos `high = mid - 1`. El ciclo reduce el rango logarítmicamente hasta que `low` y `high` convergen en el nivel exacto del usuario.

Además, incorporamos una optimización de retorno anticipado: si los puntos superan o igualan el umbral del nivel 100, se retorna directamente 100 sin ejecutar el ciclo, ahorrando unidades de gas.

Estos umbrales se encuentran almacenados de forma estática e inmutable en el contrato. Una vez desplegado, nadie puede alterar retroactivamente las reglas ni encarecer o abaratar los niveles alcanzados por los usuarios, brindando total transparencia y certeza criptográfica.

Adicionalmente, construimos el contrato complementario [UserRegistration](https://testnet.snowtrace.io/address/0x7DCDc8FFDA78400f5a32158f2D60122173E2e58A) para almacenar la información de perfil de los usuarios. Establecimos una regla arquitectónica fundamental: **no es posible registrar un perfil sin poseer previamente un Wizard Passport**. Esto garantiza que cada usuario registrado ha completado al menos la etapa inicial del proceso formativo. El registro almacena nombres de usuario, enlaces a redes sociales, correo electrónico y avatares directamente en la blockchain de Avalanche. Los nombres de usuario son inmutables una vez definidos, previniendo suplantaciones de identidad.

Nuestra interfaz web incluye un flujo de incorporación (*onboarding*) de nueve pasos diseñado específicamente para principiantes:
1. **Introducción**: Visión de la plataforma y objetivos de aprendizaje.
2. **Perfil del Estudiante**: Identificación del trasfondo del usuario (diseñador, programador junior o ingeniero senior).
3. **Conceptos de Billetera**: Explicación clara de qué es una billetera cripto.
4. **Tipos de Billeteras**: Comparativa entre billeteras de extensión, móviles y hardware.
5. **Instalación Asistida**: Guía para instalar herramientas compatibles.
6. **Conexión Criptográfica**: Vinculación de la billetera con la plataforma.
7. **Firma de Mensaje**: Demostración práctica del proceso de firma digital para autenticación.
8. **Tokens de Testnet**: Obtención de saldo de prueba subsidiado para operar sin costo.
9. **Minteo del Pasaporte**: Emisión on-chain del Wizard Passport con animación de celebración.

La plataforma cuenta con soporte bilingüe nativo (inglés y español). El frontend está desarrollado en Next.js con RainbowKit para la gestión de billeteras y Tailwind CSS para el diseño visual. Toda la información (nivel, experiencia, medallas e historial de despliegues) se refleja en un panel de control interactivo en tiempo real.

Todos los contratos están desplegados y verificados públicamente en **Avalanche Fuji**. Hemos liberado el código fuente completo: contratos en Solidity, interfaz en Next.js, scripts de despliegue y suites de pruebas en nuestro repositorio de [GitHub](https://github.com/cjbaezilla/Avalanche-Build-Games-Hackathon-Monorepo).

![Captura de Pantalla Inicio](/images/blog/v2w_screenshot_home.png)

---

## ¿Qué Buscaba Lograr Vibe2Wizard?

¿Alguna vez has querido construir algo en la blockchain pero te has sentido intimidado por la complejidad y el riesgo financiero? Ciertamente no estás solo. Todos los días, miles de talentosos diseñadores, desarrolladores y creadores miran a Web3 y ven un futuro emocionante, pero también ven un campo minado de errores potenciales que podrían costarles dinero real. He hablado con personas que han perdido sus ahorros por errores simples, que han abandonado sus sueños de construir en el espacio descentralizado porque la curva de aprendizaje se sentía imposible, y que finalmente han triunfado profesionalmente pero no tenían forma de demostrar sus habilidades a los protocolos y DAOs que buscaban contratarlos.

La historia que escucho una y otra vez es similar: alguien mira un tutorial en YouTube sobre cómo crear smart contracts, copia el código exactamente como se muestra, lo despliega en una red de prueba y ve fallar su transacción porque el grifo se ha secado o el RPC ha dejado de funcionar. Lo intentan de nuevo al día siguiente solo para descubrir que el tutorial ha quedado desactualizado porque Solidity y el ecosistema evolucionan con gran rapidez. Con el tiempo reúnen el valor para desplegar en la blockchain real donde hay dinero en juego, pero seleccionan accidentalmente la red incorrecta en su billetera y envían sus fondos a un destino irrecuperable. Su entusiasmo por Web3 se desvanece de inmediato.

Incluso para quienes superan estos obstáculos y se convierten en desarrolladores competentes, surge otro dilema: han invertido incontables horas aprendiendo y construyendo, pero no tienen forma de demostrar sus habilidades a terceros. Pueden señalar sus repositorios de GitHub, pero cualquiera puede copiar código de tutoriales. Pueden mostrar contratos desplegados, pero no hay forma de verificar si realmente escribieron el código o simplemente siguieron una guía. Nunca ha existido un LinkedIn nativo para desarrolladores Web3 donde las credenciales te acompañen y no puedan ser falsificadas ni compradas.

Ese es el problema que Vibe2Wizard fue diseñado para solucionar.

---

## El Problema Central y la Solución Soulbound

El desafío de aprender desarrollo Web3 es multidimensional:

1. **Riesgo Financiero**: En el desarrollo de software tradicional, los errores solo cuestan tiempo. Puedes escribir código con fallas, desplegarlo en un servidor de pruebas y corregirlo sin consecuencias económicas. En Web3, cada despliegue cuesta dinero real en tarifas de gas, y ante un error, ese dinero se pierde para siempre. Peor aún, un pequeño descuido en un contrato inteligente puede ser explotado por bots automáticos que escanean la red en busca de vulnerabilidades. Esto genera un ambiente intimidante donde equivocarse tiene un impacto severo.
2. **Verificación de Habilidades**: En la ingeniería tradicional existen títulos, certificaciones formales y contribuciones a proyectos reconocidos. En Web3, casi todo es susceptible de ser copiado o comprado, impidiendo validar la autoría real.
3. **Portabilidad de Credenciales**: La reputación construida en una red suele quedar aislada y no se traslada automáticamente a otros ecosistemas.
4. **Adquisición Ineficiente de Usuarios**: Los protocolos invierten enormes presupuestos en airdrops que atraen cuentas automáticas y cazadores de recompensas que desaparecen al terminar los fondos.

### Implementación del Token Soulbound (`_update`)

Para que una credencial tenga validez profesional, debe estar asociada de forma permanente a quien la obtuvo. Si los pasaportes pudieran venderse en un mercado secundario, cualquier persona con capital suficiente podría adquirir un rango de Archimago sin poseer los conocimientos necesarios.

La restricción soulbound se implementa sobreescribiendo la función interna `_update` del estándar ERC-721:

```solidity
function _update(address to, uint256 tokenId, address auth)
    internal
    override(ERC721)
    returns (address)
{
    address from = super._update(to, tokenId, auth);

    if (from != address(0) && to != address(0)) {
        revert("WizardPassport: This NFT is soulbound and cannot be transferred");
    }

    if (to != address(0)) {
        require(balanceOf(to) <= 1, "WizardPassport: Each wallet can only have one passport");
    }

    return from;
}
```

Analicemos el funcionamiento detallado de esta función:
1. `super._update(to, tokenId, auth)` ejecuta las comprobaciones estándar de OpenZeppelin y retorna la dirección del propietario anterior (`from`).
2. La condición `from != address(0) && to != address(0)` detecta si se está intentando transferir el token entre dos billeteras reales. Si ambos valores son distintos de cero, la transacción se revierte de inmediato. El minteo inicial (`from == address(0)`) y la quema (`to == address(0)`) sí están permitidos.
3. La comprobación `require(balanceOf(to) <= 1)` asegura que ninguna billetera posea más de un pasaporte, manteniendo el principio de una identidad única por cuenta.

La función de minteo seguro emite el evento `PassportMinted`:

```solidity
function safeMint() public {
    uint256 tokenId = _nextTokenId++;
    
    // Inicializar nivel si es necesario
    if (_userStats[msg.sender].level == 0) {
        _userStats[msg.sender].level = 1;
    }

    _safeMint(msg.sender, tokenId);
    emit PassportMinted(msg.sender, tokenId);
}
```

### Generación Dinámica de Metadatos On-Chain (`tokenURI`)

A diferencia de los NFTs con metadatos estáticos en servidores externos, el Wizard Passport genera su metadata en formato JSON codificado en Base64 directamente desde la blockchain:

```solidity
function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
{
    _requireOwned(tokenId);
    address owner = ownerOf(tokenId);
    UserStats memory stats = _userStats[owner];

    return string(
        abi.encodePacked(
            "data:application/json;base64,",
            Base64.encode(
                bytes(
                    abi.encodePacked(
                        '{"name": "Wizard Passport #', tokenId.toString(), 
                        '", "description": "An official identity passport for the Vibe2Wizard ecosystem.", ',
                        '"image": "', getLevelImage(stats.level), 
                        '", "attributes": [',
                        '{"trait_type": "Level", "value": ', stats.level.toString(), '}, ',
                        '{"trait_type": "XP", "value": ', stats.xp.toString(), '}, ',
                        '{"trait_type": "Type", "value": "Wizard Passport"}]}'
                    )
                )
            )
        )
    );
}
```

Cada vez que una billetera o explorador consulta el `tokenURI`, el contrato lee el nivel y XP actuales del usuario y genera un Data URI instantáneo. La imagen devuelta por `getLevelImage(stats.level)` cambia dinámicamente según el nivel alcanzado.

---

## La Experiencia de Incorporación (Paso a Paso)

El flujo de nueve pasos acompaña al usuario de forma progresiva y amigable:

### Paso 1: Introducción a la Plataforma
![Paso 1 Onboarding](/images/blog/v2w_screenshot_onboarding1.png)

### Paso 2: Selección de Trasfondo y Objetivos
![Paso 2 Onboarding](/images/blog/v2w_screenshot_onboarding2.png)

### Paso 3: ¿Qué es una Billetera Cripto?
![Paso 3 Onboarding](/images/blog/v2w_screenshot_onboarding3.png)

### Paso 4: Tipos de Billeteras
![Paso 4 Onboarding](/images/blog/v2w_screenshot_onboarding4.png)

### Paso 5: Instalación de Billetera Recomendada
![Paso 5 Onboarding](/images/blog/v2w_screenshot_onboarding5.png)

### Paso 6: Conexión con la Plataforma
![Paso 6 Onboarding](/images/blog/v2w_screenshot_onboarding6.png)

### Paso 7: Firma de Mensaje Criptográfico
![Paso 7 Onboarding](/images/blog/v2w_screenshot_onboarding7.png)

### Paso 8: Obtención de Tokens de Testnet Subsidiados
![Paso 8 Onboarding](/images/blog/v2w_screenshot_onboarding8.png)

### Paso 9: Minteo del Pasaporte Soulbound
![Paso 9 Onboarding](/images/blog/v2w_screenshot_onboarding9.png)

- **Transacción de Minteo en Fuji Snowtrace**: [Ver Transacción 0x4719...a6bfd5](https://testnet.snowtrace.io/tx/0x47193363ad70e75d4babe693fe42c64391087a4d6643cd52a1744ace75a6bfd5)

---

## El Sistema de Perfil de Usuario On-Chain

Una vez completado el onboarding, el usuario gestiona su perfil mediante el contrato `UserRegistration`.

![Página de Perfil](/images/blog/v2w_screenshot_profile1.png)

Todos los registros se efectúan on-chain y exigen la posesión obligatoria de un Wizard Passport:

![Registro On-chain](/images/blog/v2w_screenshot_profile2.png)

- **Transacción de Registro en Fuji Snowtrace**: [Ver Transacción 0x0353...15c50af](https://testnet.snowtrace.io/tx/0x035306df666c0ee8bf2a873504193e3214ed42a4a426b8c37a8d663c315c50af)

![Perfil Actualizado](/images/blog/v2w_screenshot_profile3.png)

### Contrato UserRegistration: Validación e Inmutabilidad

```solidity
modifier onlyWithPassport() {
    require(wizardPassport.balanceOf(msg.sender) > 0, "Must own a Wizard Passport NFT to register");
    _;
}

function registerUser(
    string memory _username,
    string memory _firstName,
    string memory _lastName,
    string memory _email,
    string memory _twitterUrl,
    string memory _instagramUrl,
    string memory _linkedinUrl,
    string memory _telegramUrl,
    string memory _avatarUrl
) external onlyWithPassport validateRegistration(_username) {
    bool alreadyRegistered = _users[msg.sender].isRegistered;

    _users[msg.sender] = UserProfile({
        username: _username,
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        twitterUrl: _twitterUrl,
        instagramUrl: _instagramUrl,
        linkedinUrl: _linkedinUrl,
        telegramUrl: _telegramUrl,
        avatarUrl: _avatarUrl,
        isRegistered: true
    });

    if (!alreadyRegistered) {
        _allUsernames.push(_username);
        _userAddresses.push(msg.sender);
        emit UserRegistered(msg.sender, _username);
    } else {
        emit UserUpdated(msg.sender, _username);
    }
}
```

El modificador `validateRegistration` asegura que los nombres de usuario no estén vacíos, sean únicos en el sistema y no puedan modificarse una vez establecidos:

```solidity
modifier validateRegistration(string memory _username) {
    require(bytes(_username).length > 0, "Username cannot be empty");

    if (_users[msg.sender].isRegistered) {
        require(
            keccak256(bytes(_users[msg.sender].username)) == keccak256(bytes(_username)),
            "Username cannot be changed"
        );
    } else {
        for (uint256 i = 0; i < _allUsernames.length; i++) {
            require(
                keccak256(bytes(_allUsernames[i])) != keccak256(bytes(_username)),
                "Username already taken"
            );
        }
    }
    _;
}
```

---

## Evolución Visual del NFT: De Novato a Gran Maestro

La apariencia del pasaporte evoluciona dinámicamente a través de diez rangos según el nivel de experiencia:

```solidity
function getLevelImage(uint256 level) public pure returns (string memory) {
    if (level >= 100) {
        return "https://ipfs.io/ipfs/bafybeiaq4ned3zzjaxeyrpomwemqa4a7e323bdemql3bjaz2yha6342i5q";
    }
    if (level >= 90) {
        return "https://ipfs.io/ipfs/bafybeih62jvinvvccfmsdhylev2eigyorgxpy4igmxvcoes5p7ftokaeie";
    }
    if (level >= 80) {
        return "https://ipfs.io/ipfs/bafybeicvihyvmo3d7euimen3bcbuftbho3hfapaenfh6j2stiomsrrc57u";
    }
    if (level >= 70) {
        return "https://ipfs.io/ipfs/bafybeic7oozlteewjzxf243smhvat6jcmrewhryb367u5ohqzq5zu7znlu";
    }
    if (level >= 60) {
        return "https://ipfs.io/ipfs/bafybeifgwdnylz6jjyruuqasmlwakeijz3pzs4kkly3bg6ci6puurm5lwm";
    }
    if (level >= 50) {
        return "https://ipfs.io/ipfs/bafybeigmnycqbpico4lqznj6xagdwjaocaqzzssjrumyffyt2duzd76u6m";
    }
    if (level >= 40) {
        return "https://ipfs.io/ipfs/bafybeidfmztwlyiw223mubieumegpvhb5fdfcvpmuc3sgj323iw5mkqule";
    }
    if (level >= 30) {
        return "https://ipfs.io/ipfs/bafybeidzduxp2rytrx2eqxg6skx6huffju6uvmdrnde4oashbw6lcticsq";
    }
    if (level >= 20) {
        return "https://ipfs.io/ipfs/bafybeie4ufdq7kqm6gk24kpekcpwkfijmxsxc33ogtxgeixxxnjtl5gzny";
    }
    return "https://ipfs.io/ipfs/bafybeicd5pabcwgppnekgimxur4n3jjagc2n3b6pmu5blp5td3kvuz2osu";
}
```

![Evolución de Niveles](/images/blog/v2w_evolution.png)

### Catálogo de Niveles e Ilustraciones IPFS

| Rango de Nivel | Título del Rango | Ilustración | Enlace Descentralizado en IPFS |
| :--- | :--- | :---: | :--- |
| **1 - 19** | **Novato (Novice)** | <img src="/images/blog/v2w_nft1.png" width="160" alt="Novice" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeicd5pabcwgppnekgimxur4n3jjagc2n3b6pmu5blp5td3kvuz2osu) |
| **20 - 29** | **Aprendiz (Apprentice)** | <img src="/images/blog/v2w_nft2.png" width="160" alt="Apprentice" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeie4ufdq7kqm6gk24kpekcpwkfijmxsxc33ogtxgeixxxnjtl5gzny) |
| **30 - 39** | **Acólito (Acolyte)** | <img src="/images/blog/v2w_nft3.png" width="160" alt="Acolyte" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeidzduxp2rytrx2eqxg6skx6huffju6uvmdrnde4oashbw6lcticsq) |
| **40 - 49** | **Adepto (Adept)** | <img src="/images/blog/v2w_nft4.png" width="160" alt="Adept" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeidfmztwlyiw223mubieumegpvhb5fdfcvpmuc3sgj323iw5mkqule) |
| **50 - 59** | **Mago (Mage)** | <img src="/images/blog/v2w_nft5.png" width="160" alt="Mage" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeigmnycqbpico4lqznj6xagdwjaocaqzzssjrumyffyt2duzd76u6m) |
| **60 - 69** | **Hechicero (Sorcerer)** | <img src="/images/blog/v2w_nft6.png" width="160" alt="Sorcerer" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeifgwdnylz6jjyruuqasmlwakeijz3pzs4kkly3bg6ci6puurm5lwm) |
| **70 - 79** | **Alto Mago (High Mage)** | <img src="/images/blog/v2w_nft7.png" width="160" alt="High Mage" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeic7oozlteewjzxf243smhvat6jcmrewhryb367u5ohqzq5zu7znlu) |
| **80 - 89** | **Archimago (Archmage)** | <img src="/images/blog/v2w_nft8.png" width="160" alt="Archmage" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeicvihyvmo3d7euimen3bcbuftbho3hfapaenfh6j2stiomsrrc57u) |
| **90 - 99** | **Mago Maestro (Master Wizard)** | <img src="/images/blog/v2w_nft9.png" width="160" alt="Master Wizard" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeih62jvinvvccfmsdhylev2eigyorgxpy4igmxvcoes5p7ftokaeie) |
| **100** | **Gran Maestro (Grandmaster)** | <img src="/images/blog/v2w_nft10.png" width="160" alt="Grandmaster" /> | [Ver en IPFS](https://ipfs.io/ipfs/bafybeiaq4ned3zzjaxeyrpomwemqa4a7e323bdemql3bjaz2yha6342i5q) |

---

## Integración con el Frontend: Hooks Personalizados en Wagmi y React Query

Para conectar la interfaz de usuario con los contratos inteligentes, creamos el hook `useWizardPassport`:

```typescript
export function useWizardPassport(targetAddress?: `0x${string}`) {
    const { address: connectedAddress } = useAccount();
    const address = targetAddress || connectedAddress;
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_WIZARD_PASSPORT_ADDRESS as `0x${string}`;

    // Consulta de balance para verificar propiedad
    const {
        data: balance,
        refetch: refetchBalance,
        isLoading: isBalanceLoading,
        isError: isBalanceError
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    // Consulta de estadísticas (XP y Nivel)
    const {
        data: userStats,
        refetch: refetchStats,
        isLoading: isStatsLoading,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getUserStats',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    const hasPassport = balance ? Number(balance) > 0 : false;
    const xp = userStats ? Number((userStats as any).xp) : 0;
    const level = userStats ? Number((userStats as any).level) : 1;

    // Consulta de imagen correspondiente al nivel
    const {
        data: levelImage,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getLevelImage',
        args: [BigInt(level)],
        query: {
            enabled: hasPassport,
        }
    });

    // Consulta del umbral de XP para el siguiente nivel
    const {
        data: nextLevelXP,
        isLoading: isXPThresholdLoading,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getXPThreshold',
        args: [BigInt(level + 1)],
        query: {
            enabled: hasPassport,
        }
    });

    // Lógica de minteo
    const {
        data: hash,
        writeContract,
        isPending: isWriting,
        error: writeError
    } = useWriteContract();

    const {
        isLoading: isWaiting,
        isSuccess: isMintedSuccess,
        error: waitError
    } = useWaitForTransactionReceipt({
        hash,
    });

    const isMinting = isWriting || isWaiting;

    useEffect(() => {
        if (isMintedSuccess) {
            refetchBalance();
            refetchStats();
        }
    }, [isMintedSuccess, refetchBalance, refetchStats]);

    const mintPassport = () => {
        writeContract({
            address: contractAddress,
            abi: WizardPassportABI,
            functionName: 'safeMint',
        });
    };

    return {
        hasPassport,
        balance,
        xp,
        level,
        nextLevelXP: nextLevelXP ? Number(nextLevelXP) : (level + 1) * 500,
        levelImage: levelImage as string,
        isBalanceLoading,
        isBalanceError,
        isStatsLoading,
        isXPThresholdLoading,
        mintPassport,
        isMinting,
        isMintedSuccess,
        hash,
        writeError,
        waitError,
        refetchBalance,
        refetchStats,
        address,
        connectedAddress,
        contractAddress,
    };
}
```

---

## Arquitectura de Componentes en React

La arquitectura del frontend sigue una jerarquía modular y limpia:

```text
┌─────────────────────────────────────────────────────────────┐
│                          _app.tsx                           │
│  WagmiProvider > QueryClientProvider > I18nProvider         │
│  > RainbowKitProvider > Navbar                              │
└──────────────────────────────┬──────────────────────────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
         ┌──────▼──────┐               ┌──────▼──────┐
         │ Onboarding  │               │   Profile   │
         │  (9 Pasos)  │               │  Dashboard  │
         └─────────────┘               └─────────────┘
```

### Configuración Raíz (`_app.tsx`)

```tsx
function AppContent({ Component, pageProps }: AppProps) {
  const { language } = useI18n();

  return (
    <RainbowKitProvider 
      theme={darkTheme({
        accentColor: '#ef4444',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
      initialChain={avalancheFuji}
      locale={language}
    >
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </RainbowKitProvider>
  );
}
```

---

## Principios de Seguridad y Decisiones de Diseño

1. **Librerías Auditadas de OpenZeppelin**: Uso de implementaciones probadas para `ERC721`, `Base64` y `Strings`.
2. **Inmutabilidad de Referencias**: La dirección de `WizardPassport` en `UserRegistration` se almacena como `immutable`, impidiendo su reemplazo posterior.
3. **Protección Contra Doble Minteo**: Control estricto mediante `balanceOf(to) <= 1`.
4. **Comparación Eficiente de Strings**: Empleo de hashes `keccak256` para validar nombres de usuario minimizando costos de gas.
5. **Solidity 0.8.20**: Protección nativa contra desbordamientos aritméticos sin necesidad de librerías externas.
6. **Emisión Completa de Eventos**: Cada mutación emite eventos (`PassportMinted`, `UserRegistered`, `UserUpdated`) para permitir indexación off-chain eficiente.

---

## Recursos y Enlaces del Proyecto

- **WizardPassport.sol en Snowtrace**: [0x2341452ba859F19fF6D93054cb9759E118DdA50C](https://testnet.snowtrace.io/address/0x2341452ba859F19fF6D93054cb9759E118DdA50C)
- **UserRegistration.sol en Snowtrace**: [0x7DCDc8FFDA78400f5a32158f2D60122173E2e58A](https://testnet.snowtrace.io/address/0x7DCDc8FFDA78400f5a32158f2D60122173E2e58A)
- **Repositorio Monorepo en GitHub**: [https://github.com/cjbaezilla/Avalanche-Build-Games-Hackathon-Monorepo](https://github.com/cjbaezilla/Avalanche-Build-Games-Hackathon-Monorepo)
- **Publicación y Video Pitch en LinkedIn**: [https://www.linkedin.com/posts/carlos-baeza-negroni_web3-avalanche-buildgameshackathon-activity-7432039151312490497-MqSg](https://www.linkedin.com/posts/carlos-baeza-negroni_web3-avalanche-buildgameshackathon-activity-7432039151312490497-MqSg)
- **Artículo Técnico**: [https://cbaeza.com/blog/vibe2wizard-hackathon-update-repositorio-y-contratos](https://cbaeza.com/blog/vibe2wizard-hackathon-update-repositorio-y-contratos)
- **Anuncio en X (Twitter)**: [https://x.com/cjbaezilla/status/2031362245859459129](https://x.com/cjbaezilla/status/2031362245859459129)
