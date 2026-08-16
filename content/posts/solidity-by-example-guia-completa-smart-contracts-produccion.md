---
title: "Solidity by Example: Guía Completa con Código Real para Smart Contracts en Producción"
date: "02-04-2026"
excerpt: "Guía exhaustiva y práctica de Solidity: desde tipos de datos, estructuras de control y optimización de gas, hasta seguridad, patrones proxy y protocolos DeFi en producción."
author: "Carlos Baeza Negroni"
categories: ["Tutoriales", "Solidity"]
tags: ["Solidity", "Smart Contracts", "Ethereum", "EVM", "DeFi", "Seguridad Web3", "Gas Optimization", "OpenZeppelin", "ERC20", "ERC721", "Foundry", "Hardhat"]
coverImage: "/images/blog/soliditybyexample_cover.png"
readTime: "65 min de lectura"
featured: false
---

Prepárate para sumergirte en una de las áreas más apasionantes del desarrollo de software moderno. Los smart contracts están transformando la manera en que entendemos el dinero, la gobernanza y la confianza digital, y estás a punto de formar parte activa de esta revolución. Esta guía te acompañará a lo largo de todo el camino, partiendo desde los fundamentos esenciales hasta llegar a protocolos DeFi sofisticados capaces de gestionar millones de dólares en activos digitales.

A diferencia de los tutoriales de programación convencionales, aquí no abordamos los conceptos de forma aislada, porque así no funciona el desarrollo en el mundo real. En su lugar, te mostramos cómo se conecta cada pieza dentro de un sistema completo: patrones prácticos utilizados por desarrolladores profesionales, técnicas de optimización que ahorran dinero real en comisiones de gas a los usuarios, y prácticas de seguridad indispensables para proteger el valor en la red. Todo respaldado con código funcional listo para construir.

Al completar esta guía, contarás con la solidez técnica y la confianza necesarias para desarrollar smart contracts listos para producción, optimizarlos para una máxima eficiencia de gas, protegerlos contra vulnerabilidades comunes y desplegarlos con total tranquilidad en Ethereum y redes compatibles con la EVM.

![Portada: Solidity by Example](/images/blog/solidity-by-example-1.jpg)

Si estabas buscando un recurso único y exhaustivo que cubra Solidity a fondo, desde responder "¿qué es un smart contract?" hasta la construcción de préstamos flash (flash loans) y sistemas de gobernanza descentralizada, has llegado al lugar indicado. Solidity se ha consolidado como el estándar principal para el desarrollo en Ethereum y cadenas compatibles con la EVM, impulsando miles de millones de dólares en aplicaciones descentralizadas, tokens y protocolos financieros. Este documento ofrece una exploración profunda y progresiva de la programación en Solidity, estructurada en secciones modulares que se construyen una sobre otra.

El valor distintivo de este enfoque radica en su practicidad: en lugar de presentarte definiciones teóricas y pasar de largo, te mostramos cómo interactúan estos conceptos en escenarios reales. Encontrarás ejemplos de código listos para copiar y experimentar, técnicas de optimización aplicadas por ingenieros senior y pautas de seguridad nacidas de la experiencia acumulada en la industria blockchain.

Los temas cubiertos abarcan todo el espectro del desarrollo en Solidity: desde tipos de datos básicos y estructuras de control, pasando por temas avanzados como proxies actualizables y flash loans, hasta las complejidades internas de la Máquina Virtual de Ethereum (EVM). Cada sección incluye explicaciones claras, tablas comparativas y recomendaciones directas para aplicar en tus proyectos.

![1. Introducción a Solidity y Smart Contracts](/images/blog/solidity-by-example-2.jpg)

---

## 1. Introducción a Solidity y Smart Contracts

¡Te damos la bienvenida al desarrollo blockchain! Esta sección establece los cimientos para todo lo que aprenderás en adelante. Antes de escribir código, es indispensable comprender qué es realmente Solidity, por qué fue creado y cuál es su lugar dentro del ecosistema de Ethereum. Dominar estos fundamentos te permitirá entender el propósito de cada línea que escribas y evitar los errores más comunes de los principiantes.

Imagina esta sección como la preparación del terreno antes de levantar un edificio: si la pasas por alto, la estructura puede parecer sólida al principio pero terminará fallando; si le prestas atención, tendrás una base firme para soportar todo tu aprendizaje posterior.

### 1.1 ¿Qué es Solidity y para qué se utiliza?

Comencemos por lo fundamental. Solidity es el lenguaje de programación orientado a contratos diseñado para escribir smart contracts en Ethereum y otras blockchains compatibles. Puedes considerarlo como el lenguaje que da vida a los acuerdos digitales: programas que se ejecutan automáticamente cuando se cumplen condiciones específicas, sin requerir intermediarios humanos ni entidades centralizadas.

El lenguaje fue concebido específicamente para el desarrollo blockchain en 2014 y se ha convertido en el estándar indiscutible para los contratos inteligentes de Ethereum. Cada protocolo DeFi, colección NFT o token ERC-20 que ves en el ecosistema probablemente esté construido con Solidity. Su sintaxis toma elementos familiares de JavaScript, Python y C++, por lo que si ya tienes experiencia en alguno de estos lenguajes, su lectura te resultará intuitiva desde el primer momento.

Sin embargo, el entorno blockchain introduce diferencias radicales respecto a la programación tradicional. En el software convencional sueles preocuparte por el costo del servidor o la velocidad de respuesta. En Solidity, cada operación informática cuesta dinero real (denominado "gas"), los datos almacenados persisten en la blockchain de forma permanente y tu código se ejecuta de manera idéntica y sincronizada en miles de nodos alrededor del mundo. Esto exige un cambio de mentalidad absoluto.

La gran ventaja de este modelo es su determinismo: una vez que despliegas un smart contract, este ejecuta exactamente lo que programaste, sin excepciones ni sorpresas. No existe un servidor central que pueda apagarse, una base de datos que pueda corromperse ni un administrador que pueda cambiar las reglas a su favor de manera unilateral. En la comunidad de Ethereum suele decirse con razón: "el código es la ley".

**Caso de Uso en el Mundo Real: Fideicomiso Simple (Escrow)**

Para ilustrar este concepto en la práctica, imagina que deseas comprar un artículo a un desconocido por internet. En el esquema tradicional, necesitas bancos o procesadores de pago que retengan los fondos, cobren comisiones significativas y demoren días en liquidar.

Con Solidity, puedes implementar un contrato de fideicomiso (escrow) seguro y sin intermediarios. El comprador deposita los fondos en el contrato, el cual los custodia de forma inviolable. Una vez que el comprador confirma la recepción del producto, el contrato libera automáticamente el pago al vendedor. Si ocurre una disputa, un árbitro designado puede resolver y dirigir los fondos a quien corresponda. Todo el proceso funciona las 24 horas del día, con costos mínimos y total transparencia en el código.

```solidity
// Lógica eficiente para transacciones P2P sin intermediarios
// Propósito: Custodiar fondos que solo se liberan con aprobación del árbitro o se reembolsan en caso de disputa.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleEscrow {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public amount;
    bool public released;
    
    enum State { Created, Funded, Released, Refunded }
    State public state;
    
    event Funded(address funder, uint256 amount);
    event Released(address recipient, uint256 amount);
    event Refunded(address recipient, uint256 amount);
    
    modifier onlyBuyer() { require(msg.sender == buyer, "Solo el comprador"); _; }
    modifier onlyArbiter() { require(msg.sender == arbiter, "Solo el arbitro"); _; }
    modifier inState(State _state) { require(state == _state, "Estado invalido"); _; }
    
    constructor(address _seller, address _arbiter) {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
        state = State.Created;
    }
    
    function fund() external payable onlyBuyer inState(State.Created) {
        require(msg.value > 0, "Debe enviar Ether");
        amount = msg.value;
        state = State.Funded;
        emit Funded(msg.sender, msg.value);
    }
    
    function release() external onlyArbiter inState(State.Funded) {
        released = true;
        state = State.Released;
        payable(seller).transfer(amount);
        emit Released(seller, amount);
    }
    
    function refund() external onlyArbiter inState(State.Funded) {
        released = false;
        state = State.Refunded;
        payable(buyer).transfer(amount);
        emit Refunded(buyer, amount);
    }
}
```

Este contrato ilustra cómo Solidity hace posibles las transacciones descentralizadas: no se requieren intermediarios porque las reglas están inscritas y garantizadas por el propio código.

### 1.2 Solidity vs Otros Lenguajes: Diferencias Clave

Si vienes de otros entornos de programación, notarás que la sintaxis de Solidity resulta familiar, pero existen diferencias estructurales que pueden desconcertar incluso a desarrolladores experimentados. Conocer estas particularidades es esencial para evitar fallas de seguridad y sobrecostos en gas.

El entorno de una blockchain es radicalmente distinto al de un servidor tradicional. En una computadora normal tienes control total sobre el hardware de ejecución. En la blockchain, tu código se ejecuta en una red distribuida de nodos que deben alcanzar consenso matemático sobre el resultado exacto de cada cálculo.

| Aspecto | Lenguajes Tradicionales (Java, Python, C++) | Solidity |
|---|---|---|
| **Modelo de Ejecución** | Hardware/CPU específico o VM local | Máquina Virtual de Ethereum (EVM) |
| **Determinismo** | No determinista (punto flotante, reloj del sistema) | Estrictamente determinista para lograr consenso |
| **Persistencia de Estado** | RAM y disco local, modificables libremente | El Storage persiste en la blockchain para siempre |
| **Modelo de Costo** | Tiempo de CPU, costo fijo de servidores | Costo de gas por cada operación individual |
| **Inmutabilidad** | El código puede actualizarse en cualquier momento | El bytecode es inmutable tras el despliegue |
| **Manejo de Errores** | Excepciones, bloques try-catch estándar | Revert, require, assert (revierte estado) |
| **Concurrencia** | Hilos múltiples (multithreading) | Ejecución secuencial, estado global único |
| **Modelo de Direcciones** | Punteros en memoria, referencias de objeto | Direcciones EVM (20 bytes) |

**Distinciones Clave que Debes Comprender:**

1. **Gas y Medición de Recursos:** En Solidity cada instrucción consume gas, lo que equivale a dinero real. Un bucle de 100 iteraciones en un programa tradicional es gratuito en términos prácticos, mientras que en Ethereum puede costar varios dólares en comisiones a los usuarios. Esto obliga a replantear el diseño de bucles, estructuras de datos y decisiones sobre si almacenar información o recalcularla al vuelo.
2. **Inmutabilidad del Código:** Al desplegar un smart contract, su lógica no se puede modificar (a menos que utilices patrones de proxy actualizables). Esto brinda certeza a los usuarios de que nadie cambiará las reglas de forma imprevista, pero también implica que no puedes aplicar parches rápidos si dejas un error. Las pruebas exhaustivas previas al despliegue son obligatorias.
3. **Determinismo Absoluto:** Todo contrato debe producir exactamente el mismo resultado sin importar en qué nodo o momento se ejecute. Por esta razón no existen números aleatorios nativos ni llamadas directas a APIs externas (como el clima o precios web). Además, el timestamp del bloque (`block.timestamp`) puede ser ligeramente manipulado por los validadores, por lo que no debe usarse para lógica crítica de aleatoriedad.

### 1.3 Entendiendo los Smart Contracts en Ethereum

En su esencia, un smart contract es un programa autónomo que reside en la blockchain. Su cualidad inteligente proviene de su capacidad para ejecutarse de manera automática al verificarse condiciones predefinidas, sin intervención de terceros.

**El Ciclo de Vida de un Smart Contract:**

1. **Escritura:** El desarrollador redacta el código en Solidity definiendo la lógica de negocio, las variables de estado y las restricciones de acceso.
2. **Compilación:** El compilador (`solc`) transforma el código fuente en bytecode ejecutable por la EVM y genera el ABI (Application Binary Interface), que describe las funciones y eventos disponibles.
3. **Despliegue:** El bytecode se envía a la red Ethereum mediante una transacción especial de creación de contrato, asignándole una dirección pública única de 20 bytes.
4. **Ejecución:** Cuando un usuario o contrato interactúa con una función pública o externa, los nodos de la EVM ejecutan las instrucciones del bytecode registrando la transacción en un bloque.
5. **Cambios de Estado:** Cualquier modificación en las variables de almacenamiento queda inscrita en la blockchain de forma permanente y verificable, generando una pista de auditoría inmutable.

**Cómo Operan Realmente los Smart Contracts:**

Al desplegar un contrato, creas una cuenta de contrato en Ethereum. Posee un saldo en Ether y su propio almacenamiento independiente. A diferencia de las cuentas de usuario (EOA), controladas por claves privadas, la cuenta de contrato está controlada exclusivamente por su código. Nadie, ni siquiera el autor original, puede alterar las reglas establecidas a menos que el propio contrato contemple explícitamente esa facultad.

![2. Fundamentos: Tipos de Datos y Variables](/images/blog/solidity-by-example-3.jpg)

---

## 2. Fundamentos: Tipos de Datos y Variables

Esta sección aborda los bloques de construcción elementales que utilizarás en cada contrato de Solidity. Comprender a fondo el sistema de tipos es más crítico en Solidity que en otros lenguajes, ya que influye directamente en la seguridad del contrato y en el costo de gas de cada transacción.

### 2.1 Declaración de Variables en Solidity

La ubicación donde declaras una variable, las palabras clave que utilizas y su modificador de visibilidad determinan el costo en gas, la persistencia de los datos y el nivel de seguridad:

```solidity
// Declaracion de Variables en Solidity

contract VariableDeclaration {
    // Datos permanentes almacenados en la blockchain (Storage).
    // Escribir en storage es muy costoso; almacena solo lo estrictamente necesario.
    uint256 public publicNumber = 42;              // Public: genera getter automatico
    uint256 internal internalNumber = 100;         // Internal: solo este contrato y contratos derivados
    uint256 private privateNumber = 999;           // Private: solo accesible dentro de este contrato
    
    // Variables constantes: deben conocerse en tiempo de compilacion
    // No ocupan slots de storage porque sus valores se insertan directamente en el bytecode.
    // Leerlas tiene un costo de gas practicamente nulo.
    uint256 public constant MAX_VALUE = 1000;
    bytes32 public constant CONTRACT_HASH = keccak256("Example");
    
    // Variables inmutables: se asignan una sola vez en el constructor
    // Optimizadas para valores unicos por despliegue que no cambiaran despues.
    address public immutable OWNER;
    uint256 public immutable CREATION_TIMESTAMP;
    
    constructor() {
        OWNER = msg.sender;
        CREATION_TIMESTAMP = block.timestamp;
    }
    
    // Datos temporales que residen en Memory (RAM).
    // Estas variables desaparecen cuando finaliza la ejecucion de la funcion.
    function demonstrateLocalVariables() public pure returns (uint256) {
        uint256 localVariable = 50;           // Vive en memoria, temporal
        bool localBool = true;                // En memoria
        address localAddress = address(0x1);  // En memoria
        
        uint256 result = localVariable + 10;
        return result;
    }
    
    // Los parametros de funciones tambien son variables locales
    function processValue(uint256 input) public pure returns (uint256) {
        return input * 2;
    }
}
```

**Resumen de Ubicación y Persistencia:**

| Ubicación | Palabra Clave | Tipo de Almacenamiento | Persistencia |
|---|---|---|---|
| Nivel de contrato | Ninguna | Storage | Permanente en la blockchain |
| Nivel de contrato | `constant` | Bytecode del contrato | Permanente, sin costo de storage |
| Nivel de contrato | `immutable` | Bytecode tras constructor | Asignada una vez, de solo lectura |
| Nivel de función | Ninguna / `memory` | Memory / Stack | Temporal durante la llamada |

**Mejores Prácticas:**
- Declara siempre la visibilidad explícita de las variables de estado (`public`, `internal`, `private`).
- Usa `constant` para valores inmutables conocidos antes de compilar.
- Usa `immutable` para valores que se calculan o reciben durante el constructor y nunca más cambian.
- Prefiere `uint256` para operaciones aritméticas generales, ya que es el tamaño de palabra nativo de la EVM.

**Tipos de Valor Básicos:**

| Tipo | Descripción | Tamaño | Ejemplo |
|---|---|---|---|
| `bool` | Valor booleano (`true` o `false`) | 1 byte | `bool public isActive = true;` |
| `int` / `uint` | Entero con / sin signo (8 a 256 bits en pasos de 8) | 8-256 bits | `uint256 public balance = 100;` |
| `address` | Dirección de cuenta de Ethereum | 20 bytes | `address public owner = msg.sender;` |
| `address payable` | Dirección habilitada para recibir Ether | 20 bytes | `address payable public feeRecipient;` |
| `bytes1` a `bytes32` | Arreglos de bytes de tamaño fijo | 1-32 bytes | `bytes32 public dataHash;` |
| `enum` | Tipo enumerado definido por el usuario | Entero subyacente | `enum State { Pending, Active, Closed }` |

**Tipo Booleano:**

```solidity
// Declaracion y Uso de Booleanos
contract BooleanExample {
    bool public isActive = true;
    bool public isVerified = false;
    
    // Operadores logicos para bifurcaciones
    function logicalOperators(bool a, bool b) public pure returns (bool, bool, bool) {
        return (
            a && b,  // AND logico: verdadero solo si ambos son verdaderos
            a || b,  // OR logico: verdadero si al menos uno es verdadero
            !a       // NOT logico: invierte el valor
        );
    }
    
    // Operadores de comparacion
    function comparisons(int256 a, int256 b) public pure returns (bool, bool, bool) {
        return (
            a == b,  // Igualdad
            a != b,  // Desigualdad
            a > b    // Mayor que
        );
    }
    
    // Patron comun: banderas de control (flags)
    bool public paused;
    
    function togglePause() public {
        paused = !paused;
    }
    
    function deposit() public payable {
        require(!paused, "El contrato esta pausado");
        // Logica del deposito
    }
}
```

**Tipos Enteros en Profundidad:**

```solidity
// Tipos de Enteros en Solidity

// Enteros sin signo (solo valores no negativos)
uint8 public smallNumber;    // 0 a 255 (2^8 - 1)
uint16 public mediumNumber;  // 0 a 65,535
uint32 public regularNumber; // 0 a ~4.29 mil millones
uint64 public largeNumber;   // 0 a ~1.84 x 10^19
uint128 public hugeNumber;   // 0 a ~3.40 x 10^38
uint256 public maximum;      // 0 a ~1.15 x 10^77 (tamano estandar)

// Enteros con signo (admiten valores negativos)
int8 public signedSmall;     // -128 a 127
int256 public signedNormal;  // -2^255 a 2^255 - 1

// Regla general: usar uint256 por defecto
uint256 public bestPractice = 42;
```

**¿Cuándo usar `uint8` vs `uint256`?**

La EVM opera nativamente con palabras de 256 bits (32 bytes). Cuando utilizas un tipo más pequeño como `uint8` en memoria o en operaciones aisladas, la EVM debe realizar operaciones adicionales de enmascaramiento y relleno para procesarlo en un registro de 256 bits, lo que puede aumentar ligeramente el gas en lugar de reducirlo.

La única excepción donde los enteros reducidos ahorran gas es cuando se **empaquetan múltiples variables dentro del mismo slot de storage** de 32 bytes, tema que trataremos en la sección de optimización.

### 2.2 Tipo Address: Base de las Interacciones en Ethereum

El tipo `address` representa cuentas en Ethereum, tanto cuentas de usuario externo (EOA) como contratos inteligentes. Todas las transferencias de tokens, comprobaciones de permisos y registros de propiedad involucran direcciones.

Una dirección tiene una longitud exacta de 20 bytes (160 bits), correspondiente a los últimos 20 bytes del hash Keccak-256 de la clave pública asociada.

```solidity
// Tipos Address en Solidity

// Direccion estandar sin capacidad directa de transferencia de saldo
address public regularAddress = 0x1234567890123456789012345678901234567890;

// Direccion payable: habilitada para recibir Ether mediante .transfer() y .send()
address payable public payableAddress = payable(0x1234567890123456789012345678901234567890);

// Conversion entre tipos
address public fromAddress = address(0x1234);
address payable public toPayable = payable(fromAddress);

// Consulta de saldo
uint256 public contractBalance = address(this).balance;
uint256 public userBalance = regularAddress.balance;

function withdraw() public {
    payableAddress.transfer(100);  // Envia 100 wei, revierte si falla
    // regularAddress.transfer(100); // ERROR DE COMPILACION: no es payable
}
```

### 2.3 Strings, Bytes y Datos Dinámicos

La distinción entre `string` y `bytes` es fundamental para el rendimiento y el consumo de gas:

```solidity
// String vs Bytes: Implicaciones de Gas

// String: codificado en UTF-8. Usar solo para texto legible por humanos
string public name = "Hello World";

// Bytes dinamico: arreglo de bytes crudos, mas eficiente en gas para logica interna
bytes public nameBytes = "Hello World";

// Bytes de tamano fijo (bytes1 a bytes32): tipos de valor de alta eficiencia
bytes32 public fixedHash = keccak256(abi.encodePacked("data"));

// Bytes dinamico con longitud inicial
bytes public dynamicData = new bytes(20);
```

**Diferencia entre `bytes` y `byte` / `bytes1..bytes32`:**

```solidity
// Distincion entre tipos de bytes

contract BytesVsByte {
    // bytes1 representa 1 byte unico (tipo de valor)
    bytes1 public singleByte = 0xAB;
    
    // bytes dinamico: arreglo de bytes de longitud variable (tipo de referencia)
    bytes public dynamicByteArray = "Hello";
    
    // bytes1 a bytes32 son arreglos de longitud FIJA
    bytes1 public fixed1 = 0xAA;
    bytes2 public fixed2 = 0xAABB;
    bytes4 public fixed4 = 0xAABBCCDD;
    bytes32 public fixed32; // 32 bytes: el estandar para hashes y firmas
    
    function hashData(string memory input) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(input));
    }
}
```

**Cuándo utilizar `bytes32`:**
1. **Hashes y firmas criptográficas:** La función `keccak256` siempre retorna un `bytes32`.
2. **Eficiencia en storage:** Un valor `bytes32` ocupa exactamente un slot de almacenamiento de 32 bytes, sin sobrecostos de cabecera dinámica.
3. **Identificadores y roles:** En sistemas de control de acceso basados en roles (RBAC) y firmas EIP-712.

```solidity
// Casos de uso de bytes32
contract Bytes32Examples {
    bytes32 public lastHash;
    bytes32 public documentHash;
    
    // Identificadores de roles
    bytes32 public roleAdmin = keccak256("ADMIN_ROLE");
    bytes32 public roleMinter = keccak256("MINTER_ROLE");
    
    // Arreglo de hashes empaquetados
    bytes32[10] public fixedArrayOfHashes;
    
    // Empaquetado y hashing de multiples valores
    function encodePair(address user, uint256 id) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(user, id));
    }
}
```

**Manejo de Cadenas Dinámicas:**

```solidity
contract StringHandling {
    string public productName = "Producto Principal";
    string public description;
    
    function setDescription(string memory _description) public {
        description = _description;
    }
    
    // Comparacion de cadenas mediante hash
    function stringsEqual(string memory a, string memory b) public pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
    
    // Longitud en bytes (no en caracteres Unicode)
    function getByteLength(string memory s) public pure returns (uint256) {
        return bytes(s).length;
    }
}
```

### 2.4 Arrays, Mappings y Estructuras de Datos Complejas

**Inicialización y Manejo de Arrays:**

```solidity
contract ArrayInitialization {
    // 1. Array de tamano fijo en storage
    uint256[3] public fixedInit = [10, 20, 30];
    
    // 2. Array dinamico en storage
    uint256[] public dynamicArray;
    
    // 3. Creacion de array en memoria (debe especificarse el tamano)
    function getMemoryArray() public pure returns (uint256[] memory) {
        uint256[] memory arr = new uint256[](5);
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;
        return arr;
    }
    
    // 4. Insercion con push en storage
    function addElements() public {
        dynamicArray.push(1);
        dynamicArray.push(2);
        dynamicArray.push(3);
    }
    
    // 5. Arrays de structs
    struct Person {
        string name;
        uint256 age;
    }
    
    Person[] public people;
    
    function addPerson(string memory name, uint256 age) public {
        people.push(Person(name, age));
    }
}
```

**Métodos de Arrays:**

| Método | Descripción | Ejemplo |
|---|---|---|
| `.push(x)` | Agrega un elemento al final del array dinámico | `arr.push(42)` |
| `.push()` | Agrega un elemento inicializado en cero y retorna referencia | `arr.push()` |
| `.pop()` | Elimina el último elemento y reduce la longitud | `arr.pop()` |
| `.length` | Retorna la cantidad de elementos del array | `uint256 len = arr.length` |

**Mappings (Tablas Hash Clave-Valor):**

Los mappings proporcionan búsquedas en tiempo constante O(1) basadas en hashes internos Keccak-256:

```solidity
contract MappingExamples {
    // Mapping simple: address a balance
    mapping(address => uint256) public balanceOf;
    
    // Mapping anidado: dueno -> delegado -> monto permitido (allowance ERC-20)
    mapping(address => mapping(address => uint256)) public allowances;
    
    // Registro de firmas utilizadas
    mapping(bytes32 => bool) public usedSignatures;
    
    // Para iterar sobre un mapping, se mantiene un array paralelo de claves
    mapping(uint256 => address) public idToAddress;
    uint256[] public allIds;
    
    function register(uint256 id, address account) public {
        idToAddress[id] = account;
        allIds.push(id);
    }
}
```

**Patrón Combinado: Mappings con Arrays para Búsqueda e Iteración:**

```solidity
contract CombinedDataStructures {
    struct User {
        string name;
        uint256 balance;
        bool exists;
    }
    
    mapping(address => User) public usersByAddress;
    address[] public userAddresses;
    
    function addUser(address addr, string memory name) public {
        if (!usersByAddress[addr].exists) {
            usersByAddress[addr] = User(name, 0, true);
            userAddresses.push(addr);
        }
    }
    
    function getUserCount() public view returns (uint256) {
        return userAddresses.length;
    }
    
    function getAllUsers() public view returns (User[] memory) {
        User[] memory result = new User[](userAddresses.length);
        for (uint256 i = 0; i < userAddresses.length; i++) {
            result[i] = usersByAddress[userAddresses[i]];
        }
        return result;
    }
}
```

### 2.5 Structs y Enums: Tipos de Datos Personalizados

Los structs permiten agrupar propiedades relacionadas en una entidad única, mientras que los enums restringen los valores posibles a un conjunto estricto de opciones con nombre.

```solidity
contract ProductRegistry {
    enum ProductStatus { Inactive, Active, Discontinued }
    
    struct Product {
        string name;
        string description;
        uint256 price;
        address owner;
        uint256 stock;
        ProductStatus status;
    }
    
    mapping(bytes32 => Product) public products;
    bytes32[] public productIds;
    
    function addProduct(
        bytes32 productId,
        string memory name,
        string memory description,
        uint256 price,
        uint256 stock
    ) public {
        require(products[productId].owner == address(0), "El producto ya existe");
        
        products[productId] = Product({
            name: name,
            description: description,
            price: price,
            owner: msg.sender,
            stock: stock,
            status: ProductStatus.Active
        });
        
        productIds.push(productId);
    }
    
    function updateStock(bytes32 productId, uint256 newStock) public {
        Product storage p = products[productId];
        require(p.owner == msg.sender, "No autorizado");
        p.stock = newStock;
    }
}
```

**Uso de Enums para Máquinas de Estado:**

```solidity
contract CrowdFund {
    enum State {
        Fundraising,    // Recibiendo aportes
        Expired,        // Plazo vencido sin alcanzar la meta
        Successful      // Meta alcanzada, fondos liberables
    }
    
    State public currentState;
    uint256 public targetAmount;
    uint256 public deadline;
    
    function fund() public payable {
        require(currentState == State.Fundraising, "No se reciben fondos");
        require(block.timestamp < deadline, "Plazo expirado");
    }
    
    function checkGoalReached() public {
        require(currentState == State.Fundraising, "Ya finalizado");
        if (address(this).balance >= targetAmount) {
            currentState = State.Successful;
        } else if (block.timestamp >= deadline) {
            currentState = State.Expired;
        }
    }
    
    function withdraw() public {
        require(currentState == State.Successful, "Meta no alcanzada");
    }
}
```

### 2.6 Storage vs Memory: Ubicación de Datos

La ubicación de los datos es determinante para el costo de gas y la semántica de modificación:

```solidity
contract DataLocations {
    uint256[] public storageArray = [1, 2, 3];
    mapping(address => uint256) public balances;
    
    function example() public {
        // storage pointer: apunta directamente al storage del contrato. Modificarlo cambia la blockchain.
        uint256[] storage ptr = storageArray;
        ptr.push(4); // Modifica storageArray permanentemente
        
        // memory: copia temporal que se destruye al terminar la ejecucion
        uint256[] memory tempArray = new uint256[](5);
        tempArray[0] = 100; // No persiste en la blockchain
    }
    
    // calldata: area de solo lectura para parametros de funciones externas (maxima eficiencia de gas)
    function processData(uint256[] calldata data) external pure returns (uint256) {
        return data.length;
    }
}
```

### 2.7 Directiva Pragma y Versionado

La directiva `pragma` indica al compilador qué versión de Solidity debe utilizarse:

```solidity
// Version exacta para despliegues de produccion
pragma solidity 0.8.19;

// Rango de versiones para librerias o desarrollo flexible
pragma solidity >=0.8.0 <0.9.0;

// Notacion de compatibilidad de version menor
pragma solidity ^0.8.19;
```

### 2.8 Unidades de Ether: Wei, Gwei y Ether

Solidity incluye palabras clave integradas para manejar denominaciones de Ether con precisión entera:

```solidity
contract EtherUnits {
    uint256 public oneWei = 1 wei;          // 1
    uint256 public oneGwei = 1 gwei;        // 10^9 wei (1,000,000,000)
    uint256 public oneEther = 1 ether;      // 10^18 wei (1,000,000,000,000,000,000)
    
    uint256 public constant MINIMUM_DEPOSIT = 0.01 ether;
    
    function deposit() public payable {
        require(msg.value >= MINIMUM_DEPOSIT, "Deposito minimo: 0.01 ETH");
    }
    
    function getBalanceInEther() public view returns (uint256) {
        return address(this).balance / 1 ether;
    }
}
```

| Unidad | Valor en Wei | Equivalente |
|---|---|---|
| `wei` | 1 wei | 1 |
| `gwei` | 1e9 wei | 1,000,000,000 |
| `ether` | 1e18 wei | 1,000,000,000,000,000,000 |

### 2.9 Tipos de Punto Fijo y Alternativas Modernas

Los tipos de punto fijo (`fixed` y `ufixed`) están obsoletos o con soporte experimental limitado en Solidity. La mejor práctica de la industria consiste en utilizar aritmética entera escalando los valores por un factor de decimales (generalmente 18 decimales, como en ERC-20):

```solidity
contract DecimalMath {
    uint8 public constant DECIMALS = 18;
    uint256 public constant SCALE = 10**DECIMALS;
    
    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        return (a * b) / SCALE;
    }
    
    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        return (a * SCALE) / b;
    }
}
```

### 2.10 Eliminación de Elementos en Arrays y Mappings

```solidity
contract ArrayAndMappingDeletion {
    uint256[] public numbers = [10, 20, 30, 40, 50];
    mapping(address => uint256) public balances;
    
    // Metodo 1: pop() elimina el ultimo elemento y reduce la longitud
    function removeLast() public {
        numbers.pop();
    }
    
    // Metodo 2: delete resetea el valor a 0 pero MANTIENE la longitud
    function deleteAtIndex(uint256 index) public {
        delete numbers[index]; // numbers[index] queda en 0
    }
    
    // Metodo 3: Swap and Pop (O(1) en gas si el orden no importa)
    function removeSwap(uint256 index) public {
        require(index < numbers.length, "Indice fuera de rango");
        numbers[index] = numbers[numbers.length - 1];
        numbers.pop();
    }
    
    // Resetear mapping individual
    function clearUserBalance(address user) public {
        delete balances[user]; // Asigna 0
    }
}
```

### 2.11 Arrays Fijos vs Dinámicos y Empaquetado de Storage

```solidity
// No optimizado: ocupa 5 slots completos de 32 bytes cada uno
contract UnoptimizedStorage {
    bool public a = true;          // Slot 0 (32 bytes usados para 1 byte)
    uint256 public b = 100;        // Slot 1 (32 bytes)
    bool public c = false;         // Slot 2 (32 bytes)
    uint256 public d = 200;        // Slot 3 (32 bytes)
    bool public e = true;          // Slot 4 (32 bytes)
}

// Optimizado: empaqueta variables contiguas en menos slots
contract OptimizedStorage {
    // Slot 0: empaqueta 3 booleanos (1 byte c/u) y un uint232 (29 bytes) = 32 bytes totales
    bool public a = true;          // 1 byte
    bool public c = false;         // 1 byte
    bool public e = true;          // 1 byte
    uint232 public dSmall = 200;   // 29 bytes
    
    // Slot 1 y Slot 2: tipos completos de 32 bytes
    uint256 public b = 100;        // 32 bytes
    uint256 public d = 200;        // 32 bytes
}
```

![3. Estructuras de Control y Funciones](/images/blog/solidity-by-example-4.jpg)

---

## 3. Estructuras de Control y Funciones

### 3.1 Estructuras de Control de Flujo

Solidity admite las estructuras de control habituales:

```solidity
contract ControlStructures {
    function checkValue(uint256 value) public pure returns (string memory) {
        if (value > 100) {
            return "Mayor a 100";
        } else if (value > 50) {
            return "Mayor a 50";
        } else {
            return "50 o menor";
        }
    }
    
    function sumArray(uint256[] memory arr) public pure returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }
}
```

### 3.2 Manejo de Errores: Require, Assert, Revert y Custom Errors

Solidity 0.8.4 introdujo los errores personalizados (`custom errors`), que permiten ahorrar grandes cantidades de gas al reemplazar cadenas de texto por selectores de 4 bytes:

```solidity
contract ErrorHandling {
    error InsufficientBalance(uint256 available, uint256 required);
    error Unauthorized();
    
    address public owner = msg.sender;
    
    // require: validacion de entradas y condiciones de usuario (devuelve el gas no consumido)
    function deposit(uint256 amount) public pure {
        require(amount > 0, "El monto debe ser positivo");
    }
    
    // revert con Custom Errors (la mejor practica en produccion)
    function withdraw(uint256 amount) public view {
        uint256 balance = address(this).balance;
        if (amount > balance) {
            revert InsufficientBalance(balance, amount);
        }
        if (msg.sender != owner) {
            revert Unauthorized();
        }
    }
    
    // assert: comprueba invariantes internas (si falla, indica un error critico del contrato)
    function checkInvariant(uint256 a, uint256 b) public pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}
```

| Mecanismo | Propósito | Comportamiento de Gas | Recomendación |
|---|---|---|---|
| `require(cond, msg)` | Validación de entradas y permisos | Revierte y reembolsa gas restante | Entradas de usuario |
| `revert CustomError()` | Errores con parámetros estructurados | Máximo ahorro de gas | Estándar de producción |
| `assert(cond)` | Verificación de invariantes internas | Consume todo el gas disponible | Detección de bugs graves |

### 3.3 Tipos de Funciones y Visibilidad

```solidity
contract FunctionsShowcase {
    uint256 public storedValue = 100;
    
    // public: accesible interna y externamente
    function setPublic(uint256 v) public { storedValue = v; }
    
    // external: solo invocable desde fuera del contrato (parametros calldata mas baratos)
    function callExternal(uint256[] calldata items) external pure returns (uint256) {
        return items.length;
    }
    
    // internal: accesible solo en este contrato y contratos derivados
    function helperInternal() internal view returns (bool) {
        return storedValue > 0;
    }
    
    // private: accesible estrictamente en este contrato
    function helperPrivate() private pure returns (uint256) {
        return 42;
    }
    
    // view: lee el estado pero no lo modifica
    function readState() public view returns (uint256) {
        return storedValue;
    }
    
    // pure: no lee ni modifica el estado de la blockchain
    function pureCalculation(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }
    
    // payable: habilitada para recibir pagos en Ether
    function receiveFunds() public payable returns (uint256) {
        return msg.value;
    }
    
    // receive: invocada cuando se envia Ether simple sin msg.data
    receive() external payable {}
    
    // fallback: invocada cuando ninguna otra funcion coincide o con msg.data desconocido
    fallback() external payable {}
}
```

### 3.4 Modificadores de Función (Modifiers)

Los modificadores permiten encapsular lógica reutilizable de validación y control de acceso:

```solidity
contract ModifiersExample {
    address public owner;
    bool public paused;
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "No autorizado");
        _; // El guion bajo marca el punto donde se ejecuta el cuerpo de la funcion
    }
    
    modifier whenNotPaused() {
        require(!paused, "El contrato esta pausado");
        _;
    }
    
    modifier validAddress(address target) {
        require(target != address(0), "Direccion invalida");
        _;
    }
    
    function sensitiveAction(address recipient) 
        external 
        onlyOwner 
        whenNotPaused 
        validAddress(recipient) 
    {
        // Se ejecuta solo si todos los modificadores son satisfechos en orden
    }
}
```

### 3.5 Eventos y Logs

Los eventos permiten a aplicaciones descentralizadas (dApps) y servicios de indexación (como The Graph) escuchar cambios de estado de manera económica:

```solidity
contract EventExample {
    // Hasta 3 parametros pueden ser indexados (indexed) para permitir filtros eficientes en el frontend
    event Transfer(address indexed from, address indexed to, uint256 value);
    event StatusChanged(string message, uint256 timestamp);
    
    mapping(address => uint256) public balances;
    
    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Saldo insuficiente");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        
        // Emision del evento
        emit Transfer(msg.sender, to, amount);
    }
}
```

![4. Tipos de Datos y Estructuras Avanzadas](/images/blog/solidity-by-example-5.jpg)

---

## 4. Tipos de Datos y Estructuras Avanzadas

### 4.1 Mappings Anidados y Librerías

```solidity
// Libreria de matematicas seguras para ilustrar su estructura
library MathHelper {
    function max(uint256 a, uint256 b) internal pure returns (uint256) {
        return a >= b ? a : b;
    }
}

contract LibraryUsage {
    // Directiva using for para enlazar funciones de la libreria al tipo uint256
    using MathHelper for uint256;
    
    mapping(address => mapping(address => uint256)) public allowances;
    
    function findLarger(uint256 x, uint256 y) public pure returns (uint256) {
        return x.max(y); // Invocacion directa gracias a using for
    }
}
```

### 4.2 Ensamblador Inline (Inline Assembly / Yul)

El ensamblador inline permite ejecutar instrucciones de bajo nivel directamente en la EVM:

```solidity
contract AssemblyExamples {
    function addAssembly(uint256 a, uint256 b) public pure returns (uint256 result) {
        assembly {
            result := add(a, b)
        }
    }
    
    function isZeroAddress(address account) public pure returns (bool result) {
        assembly {
            result := iszero(account)
        }
    }
}
```

![5. Herencia y Programación Orientada a Objetos](/images/blog/solidity-by-example-6.jpg)

---

## 5. Herencia y Programación Orientada a Objetos

### 5.1 Herencia y Linealización C3

Solidity utiliza el algoritmo de linealización C3 para resolver el orden de resolución de métodos en herencia múltiple:

```solidity
contract BaseA {
    function message() public pure virtual returns (string memory) {
        return "BaseA";
    }
}

contract BaseB is BaseA {
    function message() public pure virtual override returns (string memory) {
        return "BaseB";
    }
}

// El orden en la clausula 'is' va de lo mas general a lo mas derivado
contract DerivedC is BaseA, BaseB {
    function message() public pure override(BaseA, BaseB) returns (string memory) {
        return super.message(); // Retorna "BaseB" debido a la linealizacion C3
    }
}
```

### 5.2 Interfaces y Contratos Abstractos

```solidity
// Interfaz formal de ERC-20
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

// Contrato abstracto base
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }
}
```

![6. Optimización de Gas y Mejores Prácticas](/images/blog/solidity-by-example-7.jpg)

---

## 6. Optimización de Gas y Mejores Prácticas

### 6.1 Patrones Clave de Optimización

1. **Lectura en Memoria (Storage Caching):** Leer múltiples veces una variable de storage en un bucle genera múltiples instrucciones `SLOAD` (2100 gas frío / 100 caliente). Almacenarla en una variable local de memoria reduce el costo a 3 gas por lectura (`MLOAD`).
2. **Uso de `calldata` en lugar de `memory`:** Para parámetros de funciones externas que no se modifican, `calldata` evita la copia innecesaria de datos en memoria.
3. **Bloques `unchecked`:** En Solidity 0.8+, cuando sabes con certeza matemática que una operación no puede desbordarse (como el incremento de un bucle `i++`), envolver la operación en `unchecked { ++i; }` ahorra entre 30 y 40 gas por iteración.
4. **Constantes e Inmutables:** Las variables `constant` e `immutable` no ocupan storage; sus valores se incrustan directamente en el bytecode.

```solidity
contract GasOptimizedPatterns {
    mapping(address => uint256) public balances;
    
    // Suma optimizada con storage caching y unchecked
    function sumUserBalances(address[] calldata accounts) external view returns (uint256) {
        uint256 total = 0;
        uint256 len = accounts.length; // Cache de longitud de calldata
        
        for (uint256 i = 0; i < len;) {
            total += balances[accounts[i]];
            unchecked { ++i; } // Incremento sin comprobacion de overflow
        }
        return total;
    }
}
```

### 6.2 Tabla de Referencia de Costos de Gas de la EVM

| Operación | Costo de Gas | Descripción |
|---|---|---|
| `SLOAD` (Acceso frío) | 2,100 | Primera lectura de un slot de storage en la transacción |
| `SLOAD` (Acceso caliente) | 100 | Lecturas posteriores del mismo slot en la transacción |
| `SSTORE` (De 0 a distinto de 0) | 20,000 | Creación de nuevo valor en storage |
| `SSTORE` (Modificación de valor existente) | 2,900 / 5,000 | Modificación de un slot ya ocupado |
| `SSTORE` (Reembolso por limpieza) | Reembolso hasta 20% | Asignar valor a cero libera espacio |
| `MLOAD` / `MSTORE` | 3 | Lectura y escritura en memoria temporal |
| `CALL` | 100 + gas transferido | Llamada externa a otro contrato |
| `CREATE` / `CREATE2` | 32,000 | Despliegue de un nuevo smart contract |

![7. Consideraciones de Seguridad](/images/blog/solidity-by-example-8.jpg)

---

## 7. Consideraciones de Seguridad

### 7.1 Ataque de Reentrancia y Patrón Checks-Effects-Interactions

La reentrancia ocurre cuando un contrato transfiere fondos o cede el control de ejecución a un contrato externo antes de actualizar sus propias variables de estado interno. El contrato receptor malicioso puede volver a invocar la función de retiro en bucle hasta vaciar el saldo.

```solidity
// VULNERABLE: No usar en produccion
contract VulnerableBank {
    mapping(address => uint256) public balances;
    
    function withdraw() public {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Sin fondos");
        
        // ERROR: La llamada externa ocurre antes de actualizar el balance
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Fallo el retiro");
        
        balances[msg.sender] = 0;
    }
}

// SEGURO: Implementacion del patron Checks-Effects-Interactions
contract SecureBank {
    mapping(address => uint256) public balances;
    
    function withdraw() public {
        // 1. CHECKS (Comprobaciones)
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Sin fondos");
        
        // 2. EFFECTS (Efectos: actualizar estado ANTES de interactuar)
        balances[msg.sender] = 0;
        
        // 3. INTERACTIONS (Interacciones externas al final)
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Fallo el retiro");
    }
}
```

### 7.2 Tabla de Vulnerabilidades Más Comunes y su Prevención

| Vulnerabilidad | Mecanismo del Ataque | Estrategia de Mitigación |
|---|---|---|
| **Reentrancia** | Llamada externa recursiva antes de actualizar balances | Patrón Checks-Effects-Interactions y `ReentrancyGuard` |
| **Desbordamiento Aritmético** | Números que superan el rango del tipo | Solidity 0.8+ (verificación nativa) o `SafeMath` |
| **Dependencia de Timestamp** | Validadores ajustan ligeramente el tiempo del bloque | No usar `block.timestamp` para lógica de aleatoriedad crítica |
| **Uso indebido de `tx.origin`** | Ataque de phishing simulando ser el usuario | Usar siempre `msg.sender` para autorizaciones |
| **Denegación de Servicio (DoS)** | Reversión intencional en llamadas de bucle | Patrón Pull over Push (retiros iniciados por el usuario) |
| **Front-Running / MEV** | Transacciones visibles en el mempool interceptadas | Esquemas Commit-Reveal o subastas por lotes |

### 7.3 Protección Contra Ataques de Reproducción de Firmas (Replay Attacks)

```solidity
contract SignatureVerification {
    mapping(bytes32 => bool) public usedSignatures;
    
    function verifyAndExecute(
        bytes32 message,
        bytes calldata signature,
        uint256 nonce
    ) public {
        // Inclusión de nonce y dirección del contrato para evitar replay
        bytes32 txHash = keccak256(abi.encodePacked(message, nonce, address(this), block.chainid));
        
        require(!usedSignatures[txHash], "Firma ya utilizada");
        usedSignatures[txHash] = true;
        
        // Verificacion criptografica con ECDSA
    }
}
```

![8. Conceptos Avanzados: Tokens, DeFi y Protocolos](/images/blog/solidity-by-example-9.jpg)

---

## 8. Conceptos Avanzados: Tokens, DeFi y Protocolos

### 8.1 Implementación Completa del Estándar ERC-20

El estándar ERC-20 define la interfaz para tokens fungibles en Ethereum:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract ERC20 is IERC20 {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    string private _name;
    string private _symbol;
    
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }
    
    function name() public view returns (string memory) { return _name; }
    function symbol() public view returns (string memory) { return _symbol; }
    function decimals() public pure returns (uint8) { return 18; }
    
    function totalSupply() public view override returns (uint256) { return _totalSupply; }
    function balanceOf(address account) public view override returns (uint256) { return _balances[account]; }
    
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }
    
    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }
    
    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _spendAllowance(sender, msg.sender, amount);
        _transfer(sender, recipient, amount);
        return true;
    }
    
    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0), "Transferencia desde direccion cero");
        require(to != address(0), "Transferencia a direccion cero");
        
        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "Saldo insuficiente");
        
        _balances[from] = fromBalance - amount;
        _balances[to] += amount;
        emit Transfer(from, to, amount);
    }
    
    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "Emision a direccion cero");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }
    
    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "Quema desde direccion cero");
        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "Monto excede el saldo");
        
        _balances[account] = accountBalance - amount;
        _totalSupply -= amount;
        emit Transfer(account, address(0), amount);
    }
    
    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "Aprobacion desde cero");
        require(spender != address(0), "Aprobacion a cero");
        
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
    
    function _spendAllowance(address owner, address spender, uint256 amount) internal {
        uint256 currentAllowance = _allowances[owner][spender];
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "Permiso insuficiente");
            _approve(owner, spender, currentAllowance - amount);
        }
    }
}
```

### 8.2 Estándares ERC-721 (NFTs) y ERC-1155 (Multi-Tokens)

```solidity
// Interfaz ERC-721 (Tokens No Fungibles)
interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function setApprovalForAll(address operator, bool approved) external;
    function getApproved(uint256 tokenId) external view returns (address);
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
}

// Interfaz ERC-1155 (Multi-Token)
interface IERC1155 {
    function balanceOf(address account, uint256 id) external view returns (uint256);
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory);
    function setApprovalForAll(address operator, bool approved) external;
    function isApprovedForAll(address account, address operator) external view returns (bool);
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
    function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;
    
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
    event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values);
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);
    event URI(string value, uint256 indexed id);
}
```

### 8.3 Préstamos Flash (Flash Loans)

Los préstamos flash permiten solicitar prestado cualquier volumen de capital sin colateral, bajo la condición atómica de que el principal más una comisión sea devuelto en la misma transacción:

```solidity
interface IFlashLoanReceiver {
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) external returns (bool);
}

contract FlashLoanPool {
    mapping(address => uint256) public reserves;
    
    function flashLoan(
        IFlashLoanReceiver receiver,
        address[] calldata assets,
        uint256[] calldata amounts,
        bytes calldata params
    ) public {
        require(assets.length == amounts.length, "Discrepancia en longitud");
        uint256[] memory premiums = new uint256[](assets.length);
        
        // 1. Transferir activos al receptor
        for (uint256 i = 0; i < assets.length; i++) {
            uint256 amount = amounts[i];
            premiums[i] = amount / 100; // Comision del 1%
            reserves[assets[i]] -= amount;
            IERC20(assets[i]).transfer(address(receiver), amount);
        }
        
        // 2. Ejecutar la logica de negocio del receptor
        require(
            receiver.executeOperation(assets, amounts, premiums, msg.sender, params),
            "Fallo la ejecucion de la operacion"
        );
        
        // 3. Recuperar fondos y comision en la misma transaccion
        for (uint256 i = 0; i < assets.length; i++) {
            uint256 totalRepay = amounts[i] + premiums[i];
            require(
                IERC20(assets[i]).transferFrom(address(receiver), address(this), totalRepay),
                "Fallo el reembolso del prestamo"
            );
            reserves[assets[i]] += totalRepay;
        }
    }
}
```

---

## 9. EVM y Conocimiento de Bajo Nivel

### 9.1 Llamadas de Bajo Nivel: Call, Delegatecall y Staticcall

```solidity
contract LowLevelCalls {
    // CALL: Ejecuta en el contexto del contrato destino. msg.sender es este contrato.
    function executeCall(address target, bytes memory data) public returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "CALL fallo");
        return result;
    }
    
    // DELEGATECALL: Ejecuta el codigo del destino en el CONTEXTO de este contrato (mismo storage y msg.sender)
    function executeDelegate(address target, bytes memory data) public returns (bytes memory) {
        (bool success, bytes memory result) = target.delegatecall(data);
        require(success, "DELEGATECALL fallo");
        return result;
    }
    
    // STATICCALL: Llamada de solo lectura, revierte si el destino intenta modificar el storage
    function executeStatic(address target, bytes memory data) public view returns (bytes memory) {
        (bool success, bytes memory result) = target.staticcall(data);
        require(success, "STATICCALL fallo");
        return result;
    }
}
```

### 9.2 Selectores y Codificación ABI

```solidity
contract ABIEncodingExamples {
    // Selector = primeros 4 bytes del keccak256 de la firma de la funcion
    bytes4 public constant TRANSFER_SELECTOR = bytes4(keccak256("transfer(address,uint256)"));
    
    function encodeStandard() public pure returns (bytes memory) {
        return abi.encode(uint256(1), address(0x123), "hola");
    }
    
    function encodePackedData() public pure returns (bytes memory) {
        return abi.encodePacked(uint256(1), address(0x123), "hola");
    }
    
    function decodeData(bytes memory data) public pure returns (uint256, address) {
        return abi.decode(data, (uint256, address));
    }
}
```

---

## 10. Herramientas de Testing y Desarrollo

### 10.1 Comparativa de Frameworks

| Herramienta | Tipo | Fortalezas | Caso de Uso Óptimo |
|---|---|---|---|
| **Foundry** | Framework (Rust) | Pruebas ultrarrápidas, Fuzzing nativo, scripts en Solidity | Proyectos de alto rendimiento |
| **Hardhat** | Framework (Node.js) | Ecosistema de plugins, TypeScript, depuración flexible | Equipos JavaScript/TypeScript |
| **Remix** | IDE Web | Prototipado inmediato en navegador, sin instalación | Aprendizaje y pruebas rápidas |
| **Anvil / Hardhat Network** | Nodo local | Minado instantáneo, forks de mainnet, snapshots | Testing automatizado local |

### 10.2 Ejemplo de Test en Foundry

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/ERC20.sol";

contract TokenTest is Test {
    ERC20 public token;
    address public alice = address(0x1);
    address public bob = address(0x2);
    
    function setUp() public {
        token = new ERC20("TestToken", "TTK");
    }
    
    function testInitialSupply() public view {
        assertEq(token.totalSupply(), 0);
    }
    
    function testTransfer() public {
        vm.prank(address(this));
        token.approve(alice, 100 ether);
        assertEq(token.allowance(address(this), alice), 100 ether);
    }
}
```

---

## 11. Despliegue y Gestión de Gas con EIP-1559

El modelo de tarifas de la propuesta EIP-1559 divide el costo de gas en:
1. **Base Fee:** Determinado automáticamente por el protocolo según la congestión del bloque previo; este monto es quemado.
2. **Priority Fee (Tip):** Propina opcional destinada directamente al validador para priorizar la transacción.
3. **Max Fee:** El precio total máximo por unidad de gas que el usuario está dispuesto a pagar (`Base Fee + Priority Fee`).

```solidity
contract GasManagement {
    function getRemainingGas() public view returns (uint256) {
        return gasleft(); // Retorna el gas restante disponible en la llamada actual
    }
}
```

---

## 12. Patrones de Actualización (Proxies)

### 12.1 Patrón Proxy con Fallback en Ensamblador

El patrón proxy separa el almacenamiento (Proxy) de la lógica de negocio (Implementación), utilizando `delegatecall`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ImplementationV1 {
    uint256 public value;
    
    function setValue(uint256 _value) external {
        value = _value * 2;
    }
}

contract ImplementationV2 {
    uint256 public value;
    
    function setValue(uint256 _value) external {
        value = _value * 3;
    }
}

contract Proxy {
    address public implementation;
    address public admin;
    
    constructor(address _implementation) {
        implementation = _implementation;
        admin = msg.sender;
    }
    
    function upgradeTo(address newImplementation) external {
        require(msg.sender == admin, "No autorizado");
        implementation = newImplementation;
    }
    
    fallback() external payable {
        address impl = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 { revert(0, returndatasize()) }
            default { return(0, returndatasize()) }
        }
    }
}
```

### 12.2 Comparación UUPS vs Proxy Transparente

| Patrón | Ubicación de la Lógica de Actualización | Ventajas | Desventajas |
|---|---|---|---|
| **UUPS (Universal Upgradeable Proxy Standard)** | En el contrato de implementación | Menor costo de despliegue y menor sobrecosto de gas | Si se despliega una implementación sin función de upgrade, el proxy queda bloqueado |
| **Transparent Proxy** | En el contrato Proxy | Imposible bloquear por olvido de la función | Mayor consumo de gas por verificación de administrador en cada llamada |

### 12.3 Storage Gaps en Contratos Actualizables

Para evitar colisiones de almacenamiento al añadir nuevas variables en contratos base que heredan otros, se reserva un espacio (`__gap`):

```solidity
abstract contract BaseUpgradeable {
    uint256 public baseData;
    
    // Reserva 49 slots para futuras variables sin desplazar el storage de contratos hijos
    uint256[49] private __gap;
}
```

---

## 13. Patrones Avanzados y DeFi

### 13.1 Creador de Mercado Automatizado Simple (AMM - Estilo Uniswap V2)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleAMM {
    IERC20 public token0;
    IERC20 public token1;
    uint256 public reserve0;
    uint256 public reserve1;
    uint256 public totalSupply;
    mapping(address => uint256) public liquidity;
    
    constructor(address _token0, address _token1) {
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }
    
    function addLiquidity(uint256 amount0, uint256 amount1) external returns (uint256 shares) {
        token0.transferFrom(msg.sender, address(this), amount0);
        token1.transferFrom(msg.sender, address(this), amount1);
        
        if (totalSupply == 0) {
            shares = sqrt(amount0 * amount1);
        } else {
            shares = min((amount0 * totalSupply) / reserve0, (amount1 * totalSupply) / reserve1);
        }
        
        require(shares > 0, "Liquidez insuficiente emitida");
        liquidity[msg.sender] += shares;
        totalSupply += shares;
        
        reserve0 = token0.balanceOf(address(this));
        reserve1 = token1.balanceOf(address(this));
    }
    
    function swap(address tokenIn, uint256 amountIn) external returns (uint256 amountOut) {
        require(tokenIn == address(token0) || tokenIn == address(token1), "Token invalido");
        bool isToken0 = tokenIn == address(token0);
        
        (IERC20 tIn, IERC20 tOut, uint256 rIn, uint256 rOut) = isToken0 
            ? (token0, token1, reserve0, reserve1) 
            : (token1, token0, reserve1, reserve0);
            
        tIn.transferFrom(msg.sender, address(this), amountIn);
        
        // Formula de producto constante: x * y = k (con comision del 0.3%)
        uint256 amountInWithFee = (amountIn * 997) / 1000;
        amountOut = (rOut * amountInWithFee) / (rIn + amountInWithFee);
        
        tOut.transfer(msg.sender, amountOut);
        
        reserve0 = token0.balanceOf(address(this));
        reserve1 = token1.balanceOf(address(this));
    }
    
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
    
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }
}
```

### 13.2 Sistema de Gobernanza Descentralizada (DAO)

```solidity
contract GovernanceDAO {
    struct Proposal {
        address target;
        uint256 value;
        bytes data;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
        uint256 deadline;
    }
    
    mapping(bytes32 => Proposal) public proposals;
    mapping(address => uint256) public votingPower;
    uint256 public proposalCount;
    
    function propose(address target, bytes memory data) external returns (bytes32) {
        bytes32 id = keccak256(abi.encodePacked(proposalCount++, target, data));
        proposals[id] = Proposal({
            target: target,
            value: 0,
            data: data,
            votesFor: 0,
            votesAgainst: 0,
            executed: false,
            deadline: block.timestamp + 3 days
        });
        return id;
    }
    
    function vote(bytes32 id, bool support) external {
        Proposal storage p = proposals[id];
        require(block.timestamp < p.deadline, "Votacion concluida");
        require(!p.executed, "Propuesta ya ejecutada");
        
        uint256 power = votingPower[msg.sender];
        require(power > 0, "Sin poder de voto");
        
        if (support) {
            p.votesFor += power;
        } else {
            p.votesAgainst += power;
        }
    }
    
    function execute(bytes32 id) external {
        Proposal storage p = proposals[id];
        require(block.timestamp >= p.deadline, "Periodo de votacion activo");
        require(p.votesFor > p.votesAgainst, "Propuesta rechazada");
        require(!p.executed, "Ya ejecutada");
        
        p.executed = true;
        (bool success, ) = p.target.call{value: p.value}(p.data);
        require(success, "Fallo la ejecucion");
    }
}
```

---

## 14. Herramientas y Ecosistema de Seguridad

### 14.1 Uso de Librerías Estándar (OpenZeppelin)

```solidity
// Ejemplo de uso de OpenZeppelin en produccion
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProductionToken is ERC20, Ownable {
    constructor() ERC20("ProductionToken", "PRD") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
    
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
```

### 14.2 Herramientas de Análisis y Auditoría de Seguridad

| Herramienta | Metodología | Propósito Principal |
|---|---|---|
| **Slither** | Análisis Estático de Código | Detecta errores comunes, reentrancias y variables no inicializadas en segundos |
| **Mythril** | Ejecución Simbólica | Descubre rutas de ejecución que vulneran invariantes del contrato |
| **Echidna** | Pruebas Fuzzing Basadas en Propiedades | Genera millones de entradas aleatorias para romper aserciones del contrato |
| **Certora Prover** | Verificación Formal | Demuestra matemáticamente que el código satisface especificaciones formales |

---

## 15. Recursos y Enlaces Recomendados

- [Documentación Oficial de Solidity](https://docs.soliditylang.org/en/latest/): Guía completa de referencia y sintaxis del lenguaje.
- [CryptoZombies](https://cryptozombies.io/): Tutorial interactivo y gamificado para aprender Solidity creando juegos coleccionables.
- [Alchemy University](https://university.alchemy.com/): Cursos interactivos gratuitos sobre desarrollo Web3 y contratos inteligentes.
- [Cyfrin Updraft](https://updraft.cyfrin.io/courses/solidity): Programa integral gratuito de formación en Solidity y seguridad blockchain.
- [Speedrun Ethereum](https://speedrunethereum.com/): Retos prácticos para dominar NFTs, staking y protocolos DeFi.
- [Remix Ethereum IDE](https://remix.ethereum.org/): Entorno de desarrollo en el navegador para compilar y desplegar contratos al instante.
- [Awesome Solidity (GitHub)](https://github.com/bkrem/awesome-solidity): Catálogo curado de recursos, librerías, artículos y herramientas.
- [Solidity by Example (Web)](https://solidity-by-example.org/): Colección concisa de ejemplos prácticos de código.
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts): Librerías de smart contracts auditadas y estándar de la industria.

---

## 16. Conclusión y Próximos Pasos

¡Felicitaciones por completar esta guía exhaustiva! Hemos recorrido juntos todo el panorama del desarrollo en Solidity: desde los tipos de valor y la gestión de storage/memoria, hasta el manejo de errores, patrones de herencia, optimización de gas, directrices de seguridad, estándares de tokens ERC y protocolos DeFi avanzados.

La maestría en Solidity se consolida con la práctica continua:
- **Prioriza la seguridad en cada línea:** En la blockchain los errores en producción son irreversibles.
- **Aplica el patrón Checks-Effects-Interactions:** Tu defensa principal contra reentrancias y vulnerabilidades de estado.
- **Optimiza el consumo de gas conscientemente:** Utiliza empaquetado de storage, `calldata` y bloques `unchecked` donde sea seguro.
- **Apóyate en código probado:** Utiliza contratos auditados de OpenZeppelin en lugar de reinventar primitivas críticas.
- **Escribe pruebas exhaustivas:** Implementa tests unitarios, de integración y fuzzing con Foundry o Hardhat antes de cada despliegue.

El espacio blockchain ofrece oportunidades ilimitadas para desarrolladores que combinan rigor técnico, creatividad y disciplina de seguridad. ¡Es hora de construir la próxima generación de aplicaciones descentralizadas!
