---
title: "Construyendo una Plataforma de Bienes Raíces Fraccionados con NFTs: Tutorial Práctico de Tokenización en Ethereum con Solidity y Next.js"
date: "13-06-2026"
excerpt: "Aprende paso a paso a construir una plataforma descentralizada de bienes raíces fraccionados: smart contracts ERC-721 en Solidity, pagos con USDT (ERC-20), pruebas exhaustivas con Hardhat y dashboard Web3 en Next.js."
author: "Carlos Baeza Negroni"
categories: ["Tutoriales", "Solidity"]
tags: ["RWA", "Bienes Raíces", "NFT", "Solidity", "Ethereum", "Next.js", "Hardhat", "ERC-721", "ERC-20", "Wagmi", "RainbowKit", "Web3", "TypeChain"]
coverImage: "/images/blog/rwa_fraccion_cover.png"
readTime: "50 min de lectura"
featured: false
---

![Vista previa del Dashboard de la Plataforma](/images/blog/fractional-real-estate-screenshot-main.png)

- Repositorio del proyecto: https://github.com/cjbaezilla/Tokenize-Fractional-Real-Estate-NFT-Solidity-HandsOn-Tutorial

---

## Introducción: El Futuro de la Inversión Inmobiliaria

Imagina un mundo en el que puedas ser dueño de una fracción de un edificio de departamentos de lujo sin necesidad de haber ahorrado cientos de miles de dólares. Imagina poder comprar y vender tu participación en un bien inmueble con la misma facilidad con la que intercambias coleccionables digitales. Esta visión se está convirtiendo en realidad gracias a la poderosa combinación de la tecnología blockchain y los tokens no fungibles (NFTs). En este completo tutorial práctico, exploraremos cómo construir una aplicación descentralizada de extremo a extremo que tokeniza propiedades inmobiliarias en participaciones de propiedad fraccionada.

El proyecto que estás a punto de estudiar representa una aplicación blockchain full-stack que demuestra la tokenización de Activos del Mundo Real (Real World Assets o RWA) en su núcleo. No se trata simplemente de un concepto teórico, sino de un sistema operativo funcional que combina smart contracts con tecnología web moderna para lograr algo que antes era imposible: democratizar el acceso a la inversión en bienes raíces a través de tokens digitales.

---

## ¿Qué es la Tokenización? (Para Principiantes Absolutos)

Imagina que un edificio residencial de lujo cuesta $1,000,000 de dólares. En el mundo tradicional, solo los inversionistas millonarios podrían comprarlo en su totalidad. Pero, ¿qué sucedería si pudiéramos dividir ese edificio en 1,000 piezas digitales, cada una con un valor de $1,000 dólares? De esta forma, personas comunes y corrientes pueden adquirir una pequeña fracción. Esto es lo que llamamos **tokenización**: el proceso de transformar un activo físico en tokens digitales que representan derechos de propiedad.

La **propiedad fraccionada** significa que no eres dueño de todo el edificio, sino de una porción proporcional del mismo. Si el inmueble genera ingresos por concepto de alquileres o aumenta de plusvalía con el paso del tiempo, el valor de tu porción crece en la misma proporción. Es equivalente a poseer acciones de una empresa, pero aplicado a bienes raíces.

La **blockchain** es un libro de registro digital, público y seguro que registra con exactitud quién es el propietario de cada token. Piensa en ella como una hoja de cálculo global y distribuida que todos pueden auditar, pero en la que nadie puede hacer trampa ni alterar registros pasados.

Los **NFTs (Tokens No Fungibles)** son certificados digitales únicos e irrepetibles. Cada token emitido demuestra de manera criptográfica e irrefutable que eres el titular de una fracción específica de la propiedad.

Los **smart contracts** son programas automatizados que ejecutan y hacen cumplir reglas de negocio preestablecidas, tal como una máquina expendedora automática que te entrega un producto tan pronto como insertas el dinero exacto.

No requieres conocimientos técnicos avanzados previos para seguir este tutorial; explicaremos cada concepto detalladamente a lo largo del camino.

![Portada Principal: Plataforma de Tokenización de Bienes Raíces](/images/blog/fractional-real-estate-1.jpg)

---

## Casos de Uso del Mundo Real (Por Qué Esto Importa)

La tokenización no es solo una demostración tecnológica atractiva: está transformando activamente los modelos de inversión a escala global. A continuación, revisamos aplicaciones concretas:

### 1. Bienes Raíces de Lujo
Un penthouse valorado en $5 millones de dólares en Manhattan se divide en 5,000 tokens a un precio de $1,000 dólares cada uno. María, que es profesora de escuela, compra 10 tokens por una inversión total de $10,000 dólares. Cuando el inmueble genera $500,000 dólares en alquileres anuales, cada titular de token recibe $100 dólares por cada participación que posee. Cinco años después, la propiedad se vende en $7 millones de dólares. Los 10 tokens de María ahora tienen un valor de $14,000 dólares: obtuvo $4,000 dólares de ganancia de capital además de sus rentas periódicas, sin haber tenido que adquirir la propiedad completa.

### 2. Propiedades Comerciales
Un centro comercial en Dubái tokeniza su esquema de propiedad. Los residentes locales que confían en el crecimiento comercial de su zona pueden invertir montos accesibles. Esto democratiza la inversión en inmuebles comerciales, un segmento que históricamente estuvo reservado únicamente a grandes instituciones financieras y fondos patrimoniales.

### 3. Casas Vacacionales y Tiempos Compartidos
En lugar de adquirir un tiempo compartido tradicional con semanas restringidas y contratos rígidos, adquieres tokens que representan titularidad fraccionada. Puedes vender tus participaciones en cualquier momento en un mercado secundario, sin cláusulas de permanencia forzosa ni penalizaciones abusivas.

### 4. Distribución Automatizada de Rentas
Un complejo residencial genera $100,000 dólares mensuales en rentas. Con 1,000 tokens en circulación, cada token tiene derecho a recibir $100 dólares mensuales. Los tenedores de tokens reciben sus distribuciones de manera programada directamente en sus billeteras digitales, eliminando intermediarios, cheques físicos o demoras administrativas de administradores inmobiliarios.

### 5. Arte y Coleccionables
Una pintura emblemática de Picasso cotizada en $50 millones de dólares se tokeniza en 50,000 participaciones a $1,000 dólares por unidad. Entusiastas del arte en cualquier parte del planeta pueden poseer una fracción de la obra maestra y transferir sus títulos sin necesidad de mover físicamente la pieza de su bóveda de seguridad.

### 6. Regalías Musicales
Una canción exitosa genera $1 millón de dólares al año en regalías de plataformas de streaming. Los derechos económicos se tokenizan en 100,000 participaciones. Los titulares reciben pagos proporcionales mes a mes, permitiendo a los seguidores invertir directamente en el éxito financiero de sus artistas favoritos.

### 7. Materias Primas y Metales Preciosos
Un lingote de oro con valor de $60,000 dólares se divide en 60,000 tokens digitales. Cada token representa exactamente 1 gramo de oro físico respaldado. Puedes comprar, vender o intercambiar oro digital instantáneamente sin preocuparte por costos de almacenamiento físico, transporte o custodia especializada.

### 8. Créditos de Carbono
Diversos proyectos ecológicos generan créditos de carbono certificados. Tokenizarlos facilita el acceso a pequeñas y medianas empresas interesadas en compensar su huella ecológica, dinamizando un mercado transparente y líquido enfocado en la sustentabilidad ambiental.

![Infografía: Beneficios de la Tokenización](/images/blog/fractional-real-estate-2.jpg)

---

## Resumen de Analogías Simples

- **Tokenización**: Cortar una pizza en porciones para que cualquier persona pueda pagar y disfrutar de una rebanada.
- **Propiedad Fraccionada**: Ser dueño de un porcentaje específico de un bien en lugar de tener que comprar la totalidad.
- **Blockchain**: Un notario digital de alcance mundial que nunca comete errores ni altera registros.
- **NFT**: Tu escritura o título de propiedad digital infalsificable.
- **Smart Contract**: Un robot programado que ejecuta reglas matemáticas al pie de la letra.
- **Gas Fee (Tarifa de Red)**: El pequeño costo de franqueo o procesamiento pagado a los validadores de la red blockchain.
- **Testnet**: Un entorno de pruebas y práctica que utiliza dinero ficticio (similar a los billetes de Monopoly).
- **Billetera Web3**: Una caja fuerte digital que resguarda tus tokens y certifica criptográficamente tu identidad.

---

## El Concepto de Propiedad Fraccionada

La inversión inmobiliaria tradicional siempre ha presentado barreras de entrada significativas. La necesidad de contar con un capital inicial elevado, la complejidad de los contratos legales y notariales, y la naturaleza ilíquida de los inmuebles han dejado fuera del mercado a miles de inversionistas potenciales. La propiedad fraccionada busca resolver estos obstáculos fragmentando un inmueble individual en múltiples participaciones digitales representadas como tokens únicos en la blockchain.

Cada token representa una participación alícuota sobre el activo subyacente. Cuando el inmueble produce rentas por arrendamiento o incrementa su plusvalía en el mercado, los rendimientos económicos se canalizan de manera proporcional a todos los titulares de tokens. Este modelo se asemeja a los fideicomisos de inversión en bienes raíces (FIBRAS o REITs), pero con las ventajas fundamentales de la tecnología Web3: transparencia absoluta, liquidación inmediata en cadena y alcance transfronterizo sin restricciones geográficas.

Nuestro tutorial implementa una variante práctica donde un inmueble específico se representa mediante una colección de NFTs. La propiedad inmobiliaria se describe mediante metadatos inmutables almacenados on-chain, mientras que cada token acuñado (minted) actúa como constancia jurídica y digital de propiedad fraccionada. El modelo económico es transparente: los participantes pagan un precio fijo establecido en USDT (una stablecoin vinculada 1:1 al dólar estadounidense) para recibir el token representativo de su cuota.

---

## Desglosando la Pila Tecnológica

Antes de profundizar en las líneas de código, comprendamos las tecnologías que hacen posible esta arquitectura. El sistema se compone de dos piezas fundamentales que operan en perfecta armonía: la capa blockchain construida con Solidity y Hardhat, y la aplicación frontend construida con Next.js y librerías modernas de Web3.

### Analogía del Mundo Real: Construir un Restaurante

Imagina la construcción de este sistema como la apertura de un restaurante de alta cocina:

- **Capa Blockchain**: La cocina donde se preparan físicamente los platillos (las operaciones fundamentales del negocio).
- **Smart Contracts**: Las recetas detalladas y los protocolos de higiene que los cocineros deben cumplir de forma estricta.
- **Solidity**: El idioma en el que los chefs redactan sus manuales y recetas.
- **Ethereum**: La autoridad sanitaria y el libro contable que certifica y audita cada movimiento.
- **Hardhat**: La cocina de entrenamiento y pruebas donde el equipo practica antes de atender comensales reales.
- **Aplicación Frontend**: El salón comedor elegante donde los clientes se sientan a ordenar y disfrutar del servicio.
- **Next.js**: Los planos arquitectónicos y los materiales de construcción utilizados para edificar el salón comedor.
- **Librerías Web3 (Wagmi / RainbowKit / viem)**: Los meseros que transmiten las órdenes de los clientes a la cocina y regresan con los resultados.
- **Billetera Web3 (MetaMask)**: Tu documento de identidad y tu medio de pago unificados en una tarjeta electrónica segura.

### Desglose Tecnológico Detallado

La capa blockchain se ejecuta sobre Ethereum o redes compatibles con la Máquina Virtual de Ethereum (EVM). Los smart contracts escritos en Solidity establecen las reglas de propiedad, el procesamiento de transferencias de pago y la administración de metadatos. Dichos contratos se despliegan en la red, donde operan de forma autónoma sin depender de servidores centrales ni intermediarios. OpenZeppelin suministra implementaciones ampliamente auditadas de los estándares ERC, garantizando seguridad y estricto apego a las mejores prácticas de la industria.

La capa frontend proporciona la interfaz de usuario que vuelve accesible el sistema a cualquier persona. Desarrollada con Next.js, ofrece renderizado optimizado, alto rendimiento y una sólida experiencia de desarrollo. La integración Web3 se realiza mediante Wagmi y RainbowKit, herramientas encargadas de administrar la conexión de billeteras, las interacciones con el nodo RPC y la sincronización de estados. viem actúa como la librería de bajo nivel que gestiona la comunicación directa con los nodos de la red Ethereum.

![Infografía: Pila Tecnológica del Proyecto](/images/blog/fractional-real-estate-3.jpg)

---

## El Smart Contract: El Corazón del Sistema

**Explicación Simple**: Un smart contract es un acuerdo digital autónomo alojado en la blockchain que ejecuta reglas de forma automática. En este proyecto, actúa como un administrador de propiedades robotizado que se encarga de tres tareas fundamentales: (1) emitir las participaciones digitales, (2) recaudar los fondos en USDT de los compradores, y (3) asentar en el registro público a quién pertenece cada fracción. No interviene ningún humano en la operación: el código se ejecuta de forma determinista.

**Analogía**: Piensa en el smart contract como una máquina expendedora automática de participaciones inmobiliarias. Introduces USDT (el dinero), presionas un botón (ejecutas la función de compra), y la máquina expulsa un token (tu certificado de propiedad). La máquina verifica todo automáticamente: ¿el comprador tiene suficiente saldo autorizado? Sí. ¿Hay fracciones disponibles en venta? Sí. Nunca se equivoca, opera las 24 horas del día y no puede ser manipulada.

Aterricemos el flujo con cifras reales:

### Ejemplo Concreto: Comprando una Participación

Supongamos los siguientes parámetros:
- Valor comercial del inmueble: $500,000 USD
- Total de tokens emitidos: 1,000 participaciones
- Precio por token: $500 USDT
- Un usuario decide comprar 2 tokens: Inversión de $1,000 USDT

**Secuencia de eventos paso a paso:**
1. Conectas tu billetera Web3 al sitio web.
2. Haces clic en "Approve USDT" (Aprobar USDT): Esto le otorga al smart contract autorización para transferir $1,000 USDT desde tu billetera (equivalente a firmar una orden de débito específica).
3. Haces clic en "Mint NFT" (Acuñar NFT): El smart contract inmediatamente ejecuta en un solo bloque atómico:
   - Extrae $1,000 USDT de tu billetera.
   - Envía los fondos a la cuenta del propietario del proyecto.
   - Acuña los tokens digitales correspondientes (por ejemplo, el #100 y el #101).
   - Asigna la titularidad de dichos tokens a tu dirección de billetera.
   - Graba el evento en la blockchain de forma permanente.
4. Ahora eres formalmente dueño del 0.2% del inmueble (2 de 1,000 participaciones).

**Por qué este modelo es revolucionario:**
- **Bienes raíces tradicionales**: Exigen un enganche mínimo elevado (frecuentemente $50,000+ USD), revisiones notariales, trámites burocráticos y semanas o meses de espera.
- **Bienes raíces tokenizados**: Inversión accesible desde $500 USD, sin abogados intermediarios, liquidación en dos minutos y acceso internacional.

### Ejemplo de Ingresos por Alquileres

Si esta propiedad de $500,000 USD genera $30,000 USD netos al año en concepto de rentas:
- Distribución anual por token: $30,000 ÷ 1,000 tokens = $30 USD por cada token.
- Al tener 2 tokens: Recibes $60 USD al año de forma automatizada, sin tener que perseguir al administrador del edificio.
- El contrato o protocolo canaliza estos fondos directamente a tu dirección de billetera.

Examinemos en detalle el smart contract principal. El contrato `BaseErc721PropertyNFT` es una implementación ERC-721 diseñada específicamente para la tokenización de activos inmobiliarios. Su estructura exhibe patrones clave de desarrollo en Solidity.

### Estructura del Contrato y Herencia

**Qué significa esta sección**: El contrato hereda funcionalidades de dos contratos base provistos por OpenZeppelin:
- **ERC721**: Aporta toda la lógica estándar de los NFTs (creación de tokens únicos, transferencias, balances y aprobaciones).
- **Ownable**: Proporciona mecanismos de control de acceso para funciones administrativas restringidas únicamente al dueño del contrato.

Las variables de estado almacenan todos los datos operativos: el contador del siguiente token ID, el suministro máximo disponible, el precio unitario, la dirección del token de pago aceptado y la ficha técnica descriptiva del inmueble.

### Explicación Simple de las Variables Centrales:
- **Token ID**: Cada fracción posee un identificador numérico único secuencial (0, 1, 2, etc.).
- **Max Supply**: El número total de tokens que existirán en toda la vida del contrato (límite inmutable).
- **Mint Price**: El costo establecido para adquirir una participación individual.
- **USDT Token**: La dirección del contrato ERC-20 utilizado como moneda de pago (1 USDT ≈ $1 USD).

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BaseErc721PropertyNFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public immutable maxSupply;
    uint256 public mintPrice; 
    IERC20 public usdtToken;
    
    string private _propertyAddress;
    uint256 private _propertyValue;
    string private _propertyType;
    uint256 private _propertyRooms;
    uint256 private _propertyBaths;
    string private _description;
    string private _imageData;
    string private _externalUrl;

    event Purchased(address indexed buyer, uint256 tokenId, uint256 price);
```

El contrato hereda de `ERC721` y `Ownable`. La sintaxis de herencia múltiple de Solidity combina las capacidades de ambos contratos. El orden de declaración es relevante para la linearización C3 de herencia, aunque en este caso ambos padres son independientes.

Las variables de estado gestionan toda la información. El contador privado `_nextTokenId` controla los identificadores asignados. Al iniciar en cero e incrementarse secuencialmente, aseguramos que los tokens sean únicos y ordenados por su momento de acuñación. La variable `maxSupply` se declara como `immutable`, lo que implica que solo puede definirse en el constructor y jamás podrá modificarse en el futuro. Esto no solo aporta un ahorro considerable en costos de gas al leer desde bytecode, sino que garantiza a los inversionistas que la emisión nunca será diluida.

La variable `mintPrice` almacena el valor de compra en unidades base. Es fundamental recordar que USDT utiliza 6 decimales (a diferencia de los 18 decimales habituales de ETH o tokens ERC-20 tradicionales), por lo que este valor debe manejarse con cuidado al convertir entre números legibles y representaciones internas de la EVM. La variable `usdtToken` contiene la interfaz `IERC20` vinculada a la dirección del token de pago.

Los metadatos del inmueble se dividen en ocho variables independientes. Esta decisión simplifica la lectura y actualización de campos específicos desde funciones administrativas. Los metadatos son globales para toda la colección, lo que significa que todos los tokens comparten la descripción del mismo activo físico. Esto modela con exactitud el caso de negocio donde un solo inmueble se fracciona en múltiples participaciones digitales.

El evento `Purchased` registra cada compra confirmada. Los eventos en Solidity funcionan como registros indexados (logs) que los clientes Web3 pueden filtrar e indexar velozmente. El parámetro `indexed buyer` permite consultar de forma eficiente todos los tokens adquiridos por una billetera particular.

### Constructor: Inicializando el Contrato

```solidity
constructor(
    address initialOwner,
    string memory name,
    string memory ticker,
    uint256 _maxSupply,
    uint256 _mintPrice,
    address _usdtToken
)
    ERC721(name, ticker)
    Ownable(initialOwner)
{
    maxSupply = _maxSupply;
    mintPrice = _mintPrice;
    usdtToken = IERC20(_usdtToken);
}
```

El constructor se ejecuta una sola vez al momento del despliegue en la red. Recibe los parámetros necesarios para configurar la colección del inmueble. El nombre (`name`) y el símbolo (`ticker`) identifican la colección en exploradores y billeteras. El suministro máximo (`_maxSupply`) establece el límite inamovible de fracciones. El precio (`_mintPrice`) define el costo unitario en USDT base.

Observa cómo el constructor invoca los constructores de las clases padre (`ERC721` y `Ownable`) mediante la cláusula de inicialización posterior a la declaración del encabezado. El constructor de `Ownable` recibe `initialOwner`, estableciendo quién asumirá los privilegios de administración del contrato.

### Funciones de Acuñación

El contrato implementa dos funciones de acuñación destinadas a diferentes propósitos y niveles de acceso:

```solidity
function safeMint(address to) public onlyOwner returns (uint256) {
    require(_nextTokenId < maxSupply, "Max supply exceeded");
    uint256 tokenId = _nextTokenId++;
    _safeMint(to, tokenId);
    return tokenId;
}
```

La función `safeMint` permite al administrador emitir tokens de forma directa. Esto resulta útil para la asignación inicial de reservas, promociones, o para la custodia de fracciones previas a ventas secundarias. El modificador `onlyOwner` restringe la ejecución exclusivamente al dueño del contrato. La sentencia `require` corrobora que no se supere el suministro máximo (`maxSupply`). La función interna `_safeMint` crea el token y lo transfiere al destinatario. A diferencia de `_mint`, `_safeMint` verifica si la dirección de destino es un smart contract, comprobando si implementa la interfaz `IERC721Receiver`, lo que previene la pérdida irreversible de tokens enviados a contratos incapaces de gestionarlos.

```solidity
function purchase() public returns (uint256) {
    require(_nextTokenId < maxSupply, "Max supply exceeded");
    
    // Transferir USDT del comprador al propietario del contrato
    bool transferred = usdtToken.transferFrom(msg.sender, owner(), mintPrice);
    require(transferred, "USDT transfer failed");
    
    uint256 tokenId = _nextTokenId++;
    _safeMint(msg.sender, tokenId);
    
    emit Purchased(msg.sender, tokenId, mintPrice);
    
    return tokenId;
}
```

La función `purchase` implementa el mecanismo de compra pública. Cualquier usuario puede interactuar con ella para adquirir una fracción. Primero verifica la disponibilidad de suministro. Luego ejecuta el paso financiero: invoca `transferFrom` en el contrato del token USDT. Dicha función estándar transfiere los fondos desde el comprador (`msg.sender`) hacia el propietario del contrato (`owner()`). Esta instrucción solo tiene éxito si el comprador autorizó previamente al contrato NFT para gastar dicho importe.

La función `transferFrom` retorna un valor booleano indicando el resultado de la operación. El `require` evalúa dicho retorno; si la transferencia falla por fondos insuficientes, falta de autorización previa o anomalías en la ejecución, toda la transacción se revierte de inmediato. Tras recibir el pago satisfactoriamente, el contrato incrementa el contador de ID, acuña el NFT en favor del comprador mediante `_safeMint`, emite el evento `Purchased` y retorna el `tokenId` resultante para facilitar la actualización inmediata en el frontend.

### Gestión de Metadatos

El contrato facilita la administración integral de los datos del inmueble a través de funciones administrativas:

```solidity
function updatePropertyMetadata(
    string memory propertyAddress,
    uint256 propertyValue,
    string memory propertyType,
    uint256 propertyRooms,
    uint256 propertyBaths,
    string memory description,
    string memory imageData,
    string memory externalUrl
) public onlyOwner {
    _propertyAddress = propertyAddress;
    _propertyValue = propertyValue;
    _propertyType = propertyType;
    _propertyRooms = propertyRooms;
    _propertyBaths = propertyBaths;
    _description = description;
    _imageData = imageData;
    _externalUrl = externalUrl;
}
```

Existen también funciones de actualización granular para cada campo individual. Todas ellas están protegidas por el modificador `onlyOwner`. La separación conceptual entre los metadatos globales del inmueble y los balances individuales de los tokens es clave: dado que todos los tokens representan el mismo activo subyacente, comparten la información técnica de la propiedad.

### URI del Token y Estándares NFT

La función `tokenURI` produce el formato de metadatos estandarizado requerido por mercados NFT y billeteras Web3. Retorna una cadena JSON compatible con las especificaciones de OpenSea y ERC-721:

```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory) {
    require(tokenId < _nextTokenId, "Token does not exist");
    
    string memory json = string(abi.encodePacked(
        '{"name": "Property #', 
        Strings.toString(tokenId), 
        '", "description": "', 
        _description, 
        '", "image": "', 
        _imageData, 
        '", "external_url": "',
        _externalUrl,
        '", "attributes": [',
        '{"trait_type": "Type", "value": "', _propertyType, '"},',
        '{"trait_type": "Value", "value": ', Strings.toString(_propertyValue), '},',
        '{"trait_type": "Address", "value": "', _propertyAddress, '"},',
        '{"trait_type": "Rooms", "value": ', Strings.toString(_propertyRooms), '},',
        '{"trait_type": "Bathrooms", "value": ', Strings.toString(_propertyBaths), '}',
        ']}'
    ));
    
    return json;
}
```

Esta implementación ensambla el archivo JSON on-chain utilizando concatenación con `abi.encodePacked`. La librería auxiliar `Strings.toString` convierte los números enteros a texto. Nota que atributos numéricos como el valor de la propiedad, cantidad de habitaciones y baños se formatean como valores numéricos puros (sin comillas) dentro del arreglo de atributos JSON, cumpliendo con los estándares de metadatos.

La función valida primero que el token solicitado exista mediante la comparación `tokenId < _nextTokenId`.

### Funciones de Lectura (Getters)

El contrato expone funciones de visualización pública para consultar sus variables internas:

```solidity
function getPropertyAddress() public view returns (string memory) {
    return _propertyAddress;
}

function getPropertyValue() public view returns (uint256) {
    return _propertyValue;
}

// ... getters análogos para los demás atributos de la propiedad

function mintPrice() public view returns (uint256) {
    return mintPrice;
}
```

Las variables públicas generan automáticamente sus propios métodos de consulta, mientras que las variables privadas cuentan con funciones `view` dedicadas que permiten obtener la información descriptiva del bien raíz.

---

## El Token Mock USDT: Probando Pagos

**Explicación Simple**: Durante el desarrollo y las pruebas locales, no queremos gastar dinero real. Por ello, creamos un "USDT simulado" que replica el comportamiento exacto de la stablecoin oficial pero con emisión ilimitada para pruebas. Funciona como los billetes de juguete en un juego de mesa.

El segundo contrato, `MockUSDT`, sirve como sustituto del token Tether real. Implementa el estándar ERC-20 con la precisión exacta de 6 decimales que utiliza USDT en producción:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockUSDT is ERC20, Ownable {
    uint8 private constant DECIMALS = 6;

    constructor(address initialOwner) ERC20("Tether USD", "USDT") Ownable(initialOwner) {
        _mint(initialOwner, 1000000 * 10 ** DECIMALS); // 1,000,000 USDT iniciales
    }

    function decimals() public view virtual override returns (uint8) {
        return DECIMALS;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

La función `decimals` sobrescribe los 18 decimales por defecto de ERC-20 para retornar 6. El constructor emite un suministro inicial de un millón de unidades para el desplegador. La función `mint` permite al dueño crear tokens adicionales a discreción para simular múltiples usuarios y escenarios de prueba.

En un entorno de producción sobre mainnet, se configuraría la dirección del contrato oficial de USDT en la red correspondiente.

---

## Estrategia de Pruebas: Garantizando el Comportamiento Correcto

**Analogía: Por Qué Hacemos Pruebas**
Los smart contracts son similares a los tatuajes permanentes: una vez desplegados en la red principal, no se pueden modificar. Un error imprevisto podría provocar pérdidas económicas irreparables. Probar el código es como ensayar el diseño 35 veces en papel antes de aplicarlo. La suite de pruebas de este proyecto contiene 35 casos que simulan minuciosamente cada escenario posible para asegurar que el sistema responda con exactitud.

Al construir un puente vehicular, no se permite el tránsito sin antes probar la resistencia de cada viga. Los smart contracts custodian capital, por lo que demandan el mismo nivel de rigor. Nuestras pruebas automatizadas comprueban:
- ¿Solo el administrador puede emitir tokens directos? (Seguridad de accesos).
- ¿El contrato rechaza compras con fondos o autorizaciones insuficientes? (Lógica de negocio).
- ¿Qué ocurre si un usuario intenta comprar cuando se agotaron los tokens? (Casos límite o edge cases).
- ¿Se transfiere el saldo de USDT de forma exacta entre cuentas? (Movimiento de dinero).
- ¿Un usuario sin saldo autorizado es bloqueado correctamente? (Control de pagos).

### Ejemplo de Prueba Concreta

Veamos una prueba real de nuestra suite escrita en Hardhat con ethers.js:

```javascript
it("Should allow anyone to purchase a token with correct USDT payment", async function () {
    // Configuración: El usuario posee 1,000 USDT y el token cuesta 500 USDT
    await usdt.connect(nonOwner).approve(
        await baseErc721PropertyNFT.getAddress(),
        1000 * 10 ** 6  // 1,000 USDT con 6 decimales
    );

    // Acción: El usuario adquiere un token
    const tx = await baseErc721PropertyNFT.connect(nonOwner).purchase();
    await tx.wait();

    // Verificación 1: El usuario es ahora dueño del token #0
    expect(await baseErc721PropertyNFT.ownerOf(0)).to.equal(nonOwner.address);

    // Verificación 2: El saldo del usuario disminuyó en 500 USDT exactamente
    const balanceAfter = await usdt.balanceOf(nonOwner.address);
    expect(balanceAfter).to.equal(500 * 10 ** 6); // 500 USDT restantes

    // Verificación 3: El propietario del contrato recibió los 500 USDT
    const ownerBalanceAfter = await usdt.balanceOf(owner.address);
    expect(ownerBalanceAfter).to.equal(initialOwnerBalance + 500 * 10 ** 6);

    // Verificación 4: El suministro total en circulación aumentó a 1
    expect(await baseErc721PropertyNFT.totalSupply()).to.equal(1);

    // Verificación 5: El evento Purchased se emitió con los datos correctos
    await expect(tx).to.emit(baseErc721PropertyNFT, "Purchased")
        .withArgs(nonOwner.address, 0, 500 * 10 ** 6);
});
```

Esta prueba individual valida 5 condiciones críticas de manera simultánea. Los 35 tests cubren transferencias, excepciones, restricciones de roles y consistencia de datos.

### Configuración del Test Suite

```javascript
describe("BaseErc721PropertyNFT", function () {
  let BaseErc721PropertyNFT;
  let MockUSDT;
  let baseErc721PropertyNFT;
  let usdt;
  let owner;
  let nonOwner;
  let anotherUser;

  const NAME = "TestPropertyNFT";
  const SYMBOL = "TPNFT";
  const MAX_SUPPLY = 100;
  const MINT_PRICE_USDT = ethers.parseUnits("100", 6); // 100 USDT con 6 decimales
```

El bloque `beforeEach` despliega instancias limpias de los contratos antes de cada grupo de pruebas, garantizando total aislamiento. `ethers.parseUnits("100", 6)` convierte las cifras humanas a las unidades mínimas del token considerando sus 6 decimales.

### Pruebas de Despliegue

Verifican que el constructor configure adecuadamente los parámetros iniciales:

```javascript
it("Should set the correct name and symbol", async function () {
    expect(await baseErc721PropertyNFT.name()).to.equal(NAME);
    expect(await baseErc721PropertyNFT.symbol()).to.equal(SYMBOL);
});

it("Should set the correct max supply", async function () {
    expect(await baseErc721PropertyNFT.maxSupply()).to.equal(MAX_SUPPLY);
});
```

### Pruebas de Acuñación Administrativa

Validan el comportamiento de `safeMint`, comprobando permisos, asignación de identificadores y límites de emisión:

```javascript
it("Should mint a token to the owner (onlyOwner)", async function () {
    await expect(baseErc721PropertyNFT.connect(nonOwner).safeMint(nonOwner.address))
        .to.be.reverted; // Un usuario no autorizado no puede acuñar

    const tx = await baseErc721PropertyNFT.safeMint(nonOwner.address);
    await tx.wait();

    expect(await baseErc721PropertyNFT.ownerOf(0)).to.equal(nonOwner.address);
    expect(await baseErc721PropertyNFT.balanceOf(nonOwner.address)).to.equal(1);
});
```

### Pruebas del Flujo de Compra

Evalúan la interacción completa donde un usuario adquiere participaciones pagando con tokens USDT:

```javascript
it("Should allow anyone to purchase a token with correct USDT payment", async function () {
    const purchasePrice = await baseErc721PropertyNFT.mintPrice();

    await expect(baseErc721PropertyNFT.connect(nonOwner).purchase())
        .to.emit(baseErc721PropertyNFT, "Purchased")
        .withArgs(nonOwner.address, 0, purchasePrice)
        .and.to.emit(baseErc721PropertyNFT, "Transfer")
        .withArgs(ethers.ZeroAddress, nonOwner.address, 0);

    expect(await baseErc721PropertyNFT.ownerOf(0)).to.equal(nonOwner.address);
    expect(await baseErc721PropertyNFT.balanceOf(nonOwner.address)).to.equal(1);
});
```

También se validan las rutas de error, tales como una autorización (allowance) insuficiente:

```javascript
it("Should reject if insufficient USDT allowance", async function () {
    // Revocar autorización
    await usdt.connect(nonOwner).approve(
        await baseErc721PropertyNFT.getAddress(),
        0
    );

    await expect(
        baseErc721PropertyNFT.connect(nonOwner).purchase()
    ).to.be.revertedWithCustomError(usdt, "ERC20InsufficientAllowance");
});
```

Y el movimiento patrimonial efectivo:

```javascript
it("Should transfer USDT from buyer to owner upon purchase", async function () {
    const purchasePrice = await baseErc721PropertyNFT.mintPrice();
    const ownerUSDTBefore = await usdt.balanceOf(owner.address);
    const buyerUSDTBefore = await usdt.balanceOf(nonOwner.address);

    await baseErc721PropertyNFT.connect(nonOwner).purchase();

    const ownerUSDTAfter = await usdt.balanceOf(owner.address);
    const buyerUSDTAfter = await usdt.balanceOf(nonOwner.address);

    expect(ownerUSDTAfter - ownerUSDTBefore).to.equal(purchasePrice);
    expect(buyerUSDTBefore - buyerUSDTAfter).to.equal(purchasePrice);
});
```

### Pruebas de Metadatos y JSON del Token URI

Garantizan que la información del inmueble pueda modificarse y que el formato JSON sea plenamente válido:

```javascript
it("Should return correct JSON format with updated metadata", async function () {
    await baseErc721PropertyNFT.safeMint(nonOwner.address);
    await baseErc721PropertyNFT.updatePropertyMetadata(
        "123 Main St, City, Country",
        500000,
        "Apartment",
        3,
        2,
        "Premium apartment",
        "https://ipfs.io/ipfs/example",
        "https://baeza.me"
    );

    const tokenURI = await baseErc721PropertyNFT.tokenURI(0);
    const parsed = JSON.parse(tokenURI);

    expect(parsed.name).to.equal("Property #0");
    expect(parsed.description).to.equal("Premium apartment");
    expect(parsed.attributes).to.be.an("array").with.lengthOf(5);

    expect(parsed.attributes[0]).to.deep.equal({
        trait_type: "Type",
        value: "Apartment"
    });
});
```

### Pruebas de Casos Extremos

Comprueban que la actualización de los metadatos globales mantenga consistencia:

```javascript
it("Should maintain metadata separately from token existence", async function () {
    await baseErc721PropertyNFT.updatePropertyMetadata("Address 1", 100, "A", 1, 1, "D1", "I1", "U1");
    await baseErc721PropertyNFT.safeMint(nonOwner.address);
    let tokenURI = await baseErc721PropertyNFT.tokenURI(0);
    expect(tokenURI).to.include("Address 1");

    // Modificar metadatos después de acuñar
    await baseErc721PropertyNFT.updatePropertyMetadata("Address 2", 200, "B", 2, 2, "D2", "I2", "U2");

    // El nuevo token reflejará los metadatos vigentes
    await baseErc721PropertyNFT.safeMint(anotherUser.address);
    tokenURI = await baseErc721PropertyNFT.tokenURI(1);
    expect(tokenURI).to.include("Address 2");
});
```

---

## La Aplicación Frontend: Haciendo la Blockchain Accesible

**Explicación Simple**: La mayoría de las personas no desean escribir comandos de terminal ni interactuar con código crudo; prefieren una interfaz gráfica intuitiva. El frontend traduce los datos de la blockchain en un panel visual claro: muestra tus saldos, ofrece botones de "Aprobar" y "Comprar", y presenta las características del inmueble en lenguaje comprensible.

**Analogía**: El frontend es como la pantalla de un cajero automático (ATM). Al retirar dinero en un cajero, no necesitas entender los protocolos bancarios interbancarios que ocurren de fondo; únicamente introduces tu tarjeta, digitas tu clave y seleccionas una opción. Del mismo modo, este portal conecta tu billetera, consulta tus saldos en USDT y NFTs, y te permite adquirir participaciones con un clic.

### Lo Que Experimenta el Usuario

Sigamos el recorrido de María al invertir $1,000 USD:
1. **Página Principal**: Revisa los detalles del inmueble: "Apartamento de Lujo en 123 Main St", fotografía, valor de $500,000 USD, 3 habitaciones y 2 baños.
2. **Conexión de Billetera**: Presiona el botón "Connect Wallet", se abre la ventana emergente de MetaMask y confirma la conexión.
3. **Actualización del Panel**: El dashboard muestra en tiempo real:
   - "Tus NFTs de la propiedad: 0"
   - "Tu Saldo USDT: $2,500.00"
   - "Precio por participación: $500.00 USDT"
   - "Participaciones disponibles: 847 de 1,000"
4. **Paso de Autorización**: Observa el mensaje indicando que debe autorizar el uso de USDT. Hace clic en "Approve USDT" y confirma la transacción en su billetera pagando una pequeña tarifa de red (gas de ~$0.50 USD).
5. **Compra**: Tras confirmarse la aprobación, el botón cambia dinámicamente a "Mint NFT Now". Hace clic en él y confirma la transacción en su billetera por $1,000 USDT.
6. **Confirmación**: El panel se actualiza y muestra "Tus NFTs de la propiedad: 2". María es formalmente dueña del 0.2% del inmueble.
7. **Portafolio**: Visualiza el valor acumulado de su posición, el historial de transacciones recientes y la proyección de sus rendimientos por alquiler.

### Arquitectura de la Aplicación en React / Next.js

La aplicación frontend implementa el enrutador de páginas de Next.js (Pages Router) junto con TypeScript para garantizar tipado estricto. Sus archivos principales son:

- `pages/index.tsx`: Componente del panel de control principal.
- `hooks/usePropertyNft.ts`: Hook personalizado para interactuar con el smart contract de NFTs.
- `hooks/useMockUsdt.ts`: Hook personalizado para interactuar con el token de pago USDT.
- `contracts/propertyNFT.ts` y `contracts/mockUSDT.ts`: Definiciones de ABI y direcciones.
- `styles/Home.module.css`: Estilos modulares en CSS.

### Configuración Web3

El archivo `wagmi.ts` define la conexión a la red blockchain:

```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'Real Estate Fractional NFT App',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
    chains: [sepolia],
    ssr: true,
});
```

Se configura la red de pruebas Sepolia. La propiedad `ssr: true` garantiza compatibilidad con el renderizado en servidor de Next.js evitando inconsistencias de hidratación en el cliente.

El archivo `_app.tsx` envuelve la aplicación en los proveedores de contexto requeridos:

```typescript
import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../wagmi';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
                <RainbowKitProvider>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default MyApp;
```

El orden jerárquico es fundamental: `WagmiProvider` provee el contexto que requiere `RainbowKitProvider`, mientras que `QueryClientProvider` de TanStack Query administra el almacenamiento en caché y la sincronización de las consultas.

### Patrón de Hooks Personalizados

El hook `usePropertyNft` concentra la lógica del contrato NFT:

```typescript
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { PROPERTY_NFT_ADDRESS, PROPERTY_NFT_ABI } from '../contracts/propertyNFT';

export const usePropertyNft = () => {
    const { writeContract, data: hash, error, isPending } = useWriteContract();
    const { isLoading: isWaitingForTransaction, isSuccess } = useWaitForTransactionReceipt({ hash });

    const name = useReadContract({ address: PROPERTY_NFT_ADDRESS, abi: PROPERTY_NFT_ABI, functionName: 'name' });
    const maxSupply = useReadContract({ address: PROPERTY_NFT_ADDRESS, abi: PROPERTY_NFT_ABI, functionName: 'maxSupply' });
    const mintPrice = useReadContract({ address: PROPERTY_NFT_ADDRESS, abi: PROPERTY_NFT_ABI, functionName: 'mintPrice' });
    const propertyAddress = useReadContract({ address: PROPERTY_NFT_ADDRESS, abi: PROPERTY_NFT_ABI, functionName: 'getPropertyAddress' });
    const propertyValue = useReadContract({ address: PROPERTY_NFT_ADDRESS, abi: PROPERTY_NFT_ABI, functionName: 'getPropertyValue' });

    return {
        name: name.data as string | undefined,
        maxSupply: maxSupply.data as bigint | undefined,
        mintPrice: mintPrice.data as bigint | undefined,
        propertyAddress: propertyAddress.data as string | undefined,
        propertyValue: propertyValue.data as bigint | undefined,
        purchase: () => writeContract({
            address: PROPERTY_NFT_ADDRESS,
            abi: PROPERTY_NFT_ABI,
            functionName: 'purchase',
        }),
        isPending,
        isWaitingForTransaction,
        isSuccess,
        hash,
        error,
    };
};
```

Este patrón desacopla la lógica de contratos de la capa de presentación. `useReadContract` gestiona automáticamente la lectura y actualización de datos de la EVM, mientras que `useWriteContract` y `useWaitForTransactionReceipt` administran el envío de la transacción y el sondeo hasta su confirmación en un bloque.

### Lógica de la Interfaz Principal

El componente `index.tsx` implementa una máquina de estados para coordinar la autorización y la compra:

```typescript
const isAllowanceSufficient = allowance && mintPrice
    ? BigInt(allowance.toString()) >= BigInt(mintPrice.toString())
    : false;
```

Si `isAllowanceSufficient` es falso, la interfaz muestra el botón "Approve USDT" que invoca la función `approve`. Una vez confirmada la aprobación en la red, el estado se actualiza automáticamente y habilita el botón "Mint NFT Now".

### Gestión y Actualización de Transacciones

Se mantiene un historial local de las transacciones ejecutadas en la sesión y se invalida la caché de TanStack Query para refrescar saldos al instante:

```typescript
useEffect(() => {
    if (isSuccess && hash) {
        setTransactions(prev => [{
            type: 'Mint NFT',
            hash,
            time: new Date()
        }, ...prev].slice(0, 5));
        
        queryClient.invalidateQueries({
            predicate: (query) => {
                const [key, params] = query.queryKey as [string, any];
                return (
                    key === 'readContract' &&
                    params?.address?.toLowerCase() === MOCK_USDT_ADDRESS?.toLowerCase() &&
                    params?.functionName === 'balanceOf'
                );
            }
        });
    }
}, [isSuccess, hash, queryClient]);
```

### Formato de Cifras Monetarias

Función utilitaria para convertir los valores de wei (con 6 decimales) a formato de moneda legible:

```typescript
const formatUSDT = (value: bigint | undefined, decimals: bigint | undefined) => {
    if (!value || decimals === undefined) return '0.00';
    const formattedValue = (Number(value) / Math.pow(10, Number(decimals))).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    return numberValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
```

---

## Ejecución del Proyecto: Guía Paso a Paso

**Analogía del Manual de Ensamblaje**: Esta sección es la guía práctica de instalación. Configuraremos el entorno de desarrollo, desplegaremos los smart contracts en una red local y en Sepolia, levantaremos la aplicación web y ejecutaremos nuestra primera compra de prueba.

### Instalación de Prerrequisitos

Asegúrate de contar con Node.js en su versión 18 o superior instalada en tu sistema. Puedes comprobarlo ejecutando en tu terminal:

```bash
node --version
```

### Configuración y Despliegue de los Smart Contracts

Navega a la carpeta de contratos (`hardhat2`) e instala las dependencias:

```bash
cd hardhat2
npm install
```

Copia el archivo de variables de entorno de ejemplo:

```bash
cp .env.example .env
```

Edita el archivo `.env` configurando tu clave privada y tu endpoint RPC de Sepolia (obtenido gratuitamente en Alchemy o Infura):

```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/tu-api-key
PRIVATE_KEY=tu_clave_privada_hexadecimal_sin_prefijo_0x
ETHERSCAN_API_KEY=tu_etherscan_api_key
```

Compila los smart contracts para verificar su sintaxis y generar los artefactos:

```bash
npx hardhat compile
```

### Ejecución de la Suite de Pruebas

Ejecuta las 35 pruebas automatizadas:

```bash
npx hardhat test
```

Para generar un reporte visual de cobertura de código:

```bash
npx hardhat coverage
```

### Despliegue en Red Local

Abre una terminal e inicia un nodo local de Ethereum:

```bash
npx hardhat node
```

En una segunda terminal, ejecuta el despliegue mediante Hardhat Ignition:

```bash
cd hardhat2
npx hardhat ignition:deploy ./ignition/modules/BaseErc721PropertyNFT.ts --network localhost
```

### Configuración de TypeChain para Tipado Seguro

TypeChain examina los ABIs compilados y genera clases TypeScript con tipado fuerte en la carpeta `typechain-types/`. Configura `hardhat.config.js` de la siguiente manera:

```javascript
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@typechain/hardhat");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
      evmVersion: "cancun",
    },
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6",
    alwaysGenerateOverloads: true,
    discardExternalAndInternalErrors: true,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
```

**Opciones de Configuración de TypeChain**

| Opción | Valor por Defecto | Recomendado | Propósito |
| :--- | :--- | :--- | :--- |
| `outDir` | `typechain-types` | `typechain-types` | Directorio de salida para los tipos generados en TypeScript |
| `target` | N/A | `ethers-v6` | Genera definiciones compatibles con ethers.js versión 6 |
| `alwaysGenerateOverloads` | `false` | `true` | Crea sobrecargas de funciones para optimizar la inferencia de tipos |
| `discardExternalAndInternalErrors` | `false` | `true` | Simplifica la jerarquía de errores en TypeScript |

Para regenerar los tipos tras cualquier modificación en los contratos, ejecuta:

```bash
npx hardhat compile
```

### Módulos de Despliegue con Hardhat Ignition

#### Módulo BaseErc721PropertyNFT
Archivo: `hardhat2/ignition/modules/BaseErc721PropertyNFT.ts`

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BaseErc721PropertyNFTModule = buildModule("BaseErc721PropertyNFTModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", "0xaEeaA55ED4f7df9E4C5688011cEd1E2A1b696772");
  const name = m.getParameter("name", "Luxury 3-Bedroom Apartment: 123 Main St, City, Country");
  const ticker = m.getParameter("ticker", "123-Main-St-City-Country");
  const maxSupply = m.getParameter("maxSupply", 1000n);
  const mintPrice = m.getParameter("mintPrice", 1000000n); // 1 USDT (6 decimales)
  const usdtToken = m.getParameter("usdtToken", "0x18648D890d389438a12962965E5c47d9C667B20c");

  const propertyAddress = m.getParameter("propertyAddress", "123 Main St, City, Country");
  const propertyValue = m.getParameter("propertyValue", 500000n);
  const propertyType = m.getParameter("propertyType", "Apartment");
  const propertyRooms = m.getParameter("propertyRooms", 3n);
  const propertyBaths = m.getParameter("propertyBaths", 2n);
  const description = m.getParameter("description", "Este departamento fraccionado representa una oportunidad premium de inversion inmobiliaria en el corazon del centro de la ciudad.");
  const imageData = m.getParameter("imageData", "https://ipfs.io/ipfs/bafybeiceq4fw66eswi34axd6423kqawmurkwjg7haotwmar7r4luzobeem");
  const externalUrl = m.getParameter("externalUrl", "https://baeza.me");

  const baseErc721PropertyNFT = m.contract("BaseErc721PropertyNFT", [
    initialOwner,
    name,
    ticker,
    maxSupply,
    mintPrice,
    usdtToken
  ]);

  m.call(baseErc721PropertyNFT, "updatePropertyMetadata", [
    propertyAddress,
    propertyValue,
    propertyType,
    propertyRooms,
    propertyBaths,
    description,
    imageData,
    externalUrl
  ]);

  return { baseErc721PropertyNFT };
});

export default BaseErc721PropertyNFTModule;
```

#### Módulo MockUSDT
Archivo: `hardhat2/ignition/modules/MockUSDT.ts`

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockUSDTModule = buildModule("MockUSDTModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  const mockUSDT = m.contract("MockUSDT", [initialOwner]);

  m.call(mockUSDT, "mint", [initialOwner, 1000000n * 10n ** 6n]);

  return { mockUSDT };
});

export default MockUSDTModule;
```

### Configuración del Frontend en Next.js

Cambia al directorio `nextjs` e instala los paquetes:

```bash
cd ../nextjs
npm install
```

Copia el archivo `.env.example` como `.env.local`:

```bash
cp .env.example .env.local
```

Configura las direcciones de los contratos desplegados y tu Project ID de WalletConnect:

```env
NEXT_PUBLIC_PROPERTY_NFT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
NEXT_PUBLIC_MOCK_USDT_ADDRESS=0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=tu_walletconnect_project_id
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Ingresa en tu navegador a `http://localhost:3000`.

---

## El Ciclo de Vida de la Compra: Guía Visual Paso a Paso

A continuación documentamos la secuencia visual y técnica que experimenta el usuario durante el proceso de compra.

### Paso 1: Aprobación del Token USDT

Antes de que el contrato NFT pueda debitar los tokens USDT, debes concederle autorización mediante la función estándar `approve`. Haz clic en el botón "Approve USDT" y confirma la transacción en tu billetera.

![Aprobación de gasto de USDT en MetaMask](/images/blog/fractional-real-estate-approving-purchase.png)

Esta transacción genera un registro de `allowance` en el contrato de USDT que faculta al contrato NFT para disponer del monto autorizado.

### Paso 2: Compra y Acuñación de Tokens

Una vez confirmada la aprobación, la interfaz cambia al botón "Mint NFT Now". Al hacer clic, se ejecuta la función `purchase()`, la cual transfiere los fondos y acuña el NFT en la misma transacción atómica.

![Confirmación de compra y acuñación del NFT](/images/blog/fractional-real-estate-purchasing.png)

### Paso 3: Visualización de Tokens Acuñados en la Billetera

Al confirmarse la transacción en la blockchain, el NFT recién emitido aparece de inmediato en la pestaña de NFTs de tu billetera digital.

![Tokens NFT de propiedad en la billetera](/images/blog/fractional-real-estate-final-minted-tokens.png)

### Paso 4: Detalles de la Transacción en el Explorador de Bloques

Cada transacción queda registrada de manera inmutable y transparente en la red. Puedes auditar los costos de gas, marcas de tiempo y eventos emitidos (`Transfer` y `Purchased`) en el explorador de bloques.

![Registro de la transacción en el explorador Etherscan](/images/blog/fractional-real-estate-purchase-transaction.png)

[Consultar Transacción de Ejemplo en Sepolia Etherscan](https://sepolia.etherscan.io/tx/0x83e90fca156ee8bf93fddc33a4dcbce9eda83d36f1ce6ea5c97d38ac1bd2400e)

---

## Despliegue y Verificación en Sepolia Testnet

Para publicar los contratos en la testnet pública de Sepolia:

```bash
npx hardhat ignition:deploy ./ignition/modules/BaseErc721PropertyNFT.ts --network sepolia
```

### Verificación de Contratos en Etherscan

La verificación publica tu código fuente en Etherscan, permitiendo que la comunidad audite la lógica del contrato directamente:

```bash
npx hardhat verify --network sepolia <DIRECCION_CONTRATO_USDT> <initialOwner>
npx hardhat verify --network sepolia <DIRECCION_CONTRATO_NFT> <initialOwner> "<nombre>" "<ticker>" <maxSupply> <mintPrice> <direccionUSDT>
```

---

## Comprendiendo el Flujo de Pago en Profundidad

**La Analogía de las Dos Llaves**: Si le pides a un amigo que riegue tus plantas mientras estás de viaje, no le entregas una copia permanente de tu llave maestra; le das una llave temporal o acceso restringido. En la blockchain, el patrón de pago en dos fases opera de forma similar: primero autorizas al contrato a retirar una cantidad delimitada (`approve`) y luego el contrato efectúa el retiro exacto (`transferFrom`).

1. **Fase de Aprobación**: El usuario invoca `usdt.approve(nftContractAddress, amount)`. El contrato USDT registra la autorización del gastador.
2. **Fase de Compra**: El usuario invoca `nft.purchase()`. El contrato NFT ejecuta `usdt.transferFrom(userAddress, ownerAddress, mintPrice)`. Si la autorización cubre el precio, los fondos se transfieren y se emite el NFT.

Este esquema previene que contratos maliciosos puedan sustraer saldos de billeteras sin consentimiento previo expreso.

---

## Consideraciones de Seguridad para Producción

Si bien este proyecto implementa patrones de desarrollo auditados, una versión para producción comercial requiere incorporar capas defensivas adicionales:

- **Timelocks (Bloqueos de Tiempo)**: Cualquier modificación crítica en los metadatos o precios debería requerir un periodo de espera obligatorio para que los usuarios puedan auditar el cambio antes de su entrada en vigor.
- **Pausabilidad de Emergencia (`Pausable`)**: Implementar mecanismos que permitan suspender temporalmente las compras ante cualquier anomalía o vulnerabilidad detectada.
- **Protección contra Reentrancia (`ReentrancyGuard`)**: Aunque USDT es un estándar probado, la adopción de `nonReentrant` de OpenZeppelin blinda las funciones financieras contra vectores de ataque imprevistos.
- **Administración Multisig**: El rol de `owner` debe ser asignado a una billetera de firma múltiple (como Safe) o a un contrato de gobernanza DAO, eliminando puntos únicos de falla.

---

## Glosario de Referencia Rápida

- **Tokenización**: Proceso de convertir los derechos económicos de un activo físico en tokens digitales programables.
- **Propiedad Fraccionada**: División proporcional de un activo de alto valor en múltiples participaciones accesibles.
- **Blockchain**: Registro digital distribuido e inmutable que almacena transacciones de forma criptográficamente segura.
- **NFT (Token No Fungible)**: Activo digital único que certifica la titularidad sobre un bien específico.
- **Smart Contract**: Programa autónomo que ejecuta acuerdos y transferencias de forma determinista sin intermediarios.
- **ERC-721**: Estándar técnico de Ethereum utilizado para la creación y gestión de NFTs.
- **ERC-20**: Estándar técnico de Ethereum utilizado para tokens fungibles y monedas digitales como USDT.
- **Solidity**: Lenguaje de programación orientado a contratos diseñado para la Máquina Virtual de Ethereum (EVM).
- **Hardhat**: Entorno de desarrollo para compilar, probar y desplegar smart contracts en Ethereum.
- **MetaMask**: Billetera digital y extensión de navegador para interactuar con aplicaciones descentralizadas.
- **Gas Fee**: Costo de procesamiento abonado a los validadores de la red para computar una transacción.
- **Testnet**: Red blockchain de pruebas que emula el comportamiento de la red principal usando fondos simulados sin valor real.
- **DApp**: Aplicación descentralizada cuya lógica de backend se ejecuta sobre contratos inteligentes en blockchain.
- **Wagmi / RainbowKit**: Librerías y componentes en React para simplificar la conexión de billeteras Web3.
- **TypeChain**: Generador de tipos TypeScript a partir de los ABIs de smart contracts para desarrollo full-stack con tipado seguro.
- **Decimales**: Número de posiciones decimales que utiliza un token ERC-20 (USDT utiliza 6 decimales; ETH utiliza 18).

---

## Conclusión: Tu Viaje en Web3 Comienza

A lo largo de esta guía práctica has construido una aplicación descentralizada completa para la tokenización y fraccionamiento de bienes raíces. Has aprendido cómo los smart contracts en Solidity establecen las reglas de titularidad y pago, cómo una batería exhaustiva de pruebas garantiza la confiabilidad del código, y cómo una interfaz web moderna en Next.js acerca las capacidades de la blockchain a cualquier usuario final.

Los patrones abordados en este tutorial (integración de ERC-721 con ERC-20, aprobaciones en dos fases, hooks reactivos para Web3 y tipado integral con TypeChain) constituyen la base para crear plataformas de tokenización no solo de bienes raíces, sino también de obras de arte, derechos de propiedad intelectual, materias primas y activos del mundo real en general.

El código está listo para ser explorado, modificado y expandido. Te invitamos a clonar el repositorio, desplegarlo en tus redes de prueba y continuar construyendo el futuro de las finanzas descentralizadas.
