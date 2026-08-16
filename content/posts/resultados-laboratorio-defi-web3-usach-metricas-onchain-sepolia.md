---
title: "Resultados del Laboratorio DeFi Web3 USACH: Análisis de Datos On-Chain, Métricas de Interacción y Adopción en Ethereum Sepolia"
date: "07-06-2026"
excerpt: "Reporte consolidado y análisis de métricas on-chain del laboratorio práctico DeFi para el Diplomado en IA y Blockchain de la USACH. Más de 2,460 transacciones, 3,331 eventos registrados, 33.32 WETH de TVL y 241 reliquias NFT acuñadas en un ecosistema 100% descentralizado sobre Ethereum Sepolia."
author: "Carlos Baeza Negroni"
categories: ["Noticias", "Docencia"]
tags: ["USACH", "Web3", "Ethereum", "Sepolia", "DeFi", "Smart Contracts", "Métricas", "AMM", "DEX", "ERC-20", "ERC-1155", "POAP", "Open Source"]
coverImage: "/images/blog/usach-lab/resultados_defilab_cover.png"
readTime: "18 min de lectura"
featured: false
---

Me complace enormemente presentar el reporte consolidado y los resultados obtenidos en el laboratorio práctico de finanzas descentralizadas (DeFi) sobre la red **Ethereum Sepolia**, diseñado e implementado para los estudiantes del **Diplomado en Inteligencia Artificial y Tecnologías Blockchain de la Universidad de Santiago de Chile (USACH)**.

A lo largo de las sesiones formativas, el ecosistema registró un volumen transaccional sobresaliente de **2,460 transacciones** y **3,331 eventos on-chain** verificables en el historial inmutable de la cadena de bloques. Este entorno operó bajo un paradigma completamente descentralizado y libre de servidores o bases de datos tradicionales para su persistencia, facilitando la comunicación directa mediante llamadas remotas de procedimiento (JSON-RPC) desde la interfaz cliente hacia los nodos de la red Ethereum.

La participación activa de **27 estudiantes** que registraron sus identidades académicas digitales permitió validar en condiciones reales la robustez de los contratos inteligentes, la dinámica de los creadores de mercado automatizados (AMM) y la certificación curricular soberana mediante firmas criptográficas.

---

![Resultados y Métricas On-Chain del Laboratorio DeFi Web3 USACH](/images/blog/usach-lab/hero_page.png)

![Resultados y Métricas On-Chain del Laboratorio DeFi Web3 USACH](/images/blog/usach-lab/resultados1.png)

---

## 📊 Resumen Ejecutivo y Métricas On-Chain

El nivel de adopción y la actividad operativa dentro de una plataforma Web3 se reflejan con total transparencia en la inmutabilidad del libro mayor descentralizado. El flujo dinámico estuvo liderado por la interacción con el contrato de Wrapped Ether (`WETH.sol`), la emisión de activos personalizados y la provisión de liquidez en las piscinas del DEX.

A continuación se presenta el resumen consolidado de las métricas on-chain extraídas directamente del bloque de consulta `11115859` en la red Sepolia:

| Contrato / Componente | Dirección en Sepolia | Transacciones Totales | Eventos Registrados |
| :--- | :--- | :---: | :---: |
| **[StudentIdentity.sol](https://sepolia.etherscan.io/address/0x652b7718F130329F3eC865f418FE2a2634fb5E29)** | `0x652b7718F130329F3eC865f418FE2a2634fb5E29` | **33** (Etherscan) | **61** |
| **[TokenFactory.sol](https://sepolia.etherscan.io/address/0x30A4CA7ad7947f7Df6fdAf0EC4D9f4540e0149bB)** | `0x30A4CA7ad7947f7Df6fdAf0EC4D9f4540e0149bB` | **115** (Etherscan) | **115** |
| **[BaseERC1155.sol](https://sepolia.etherscan.io/address/0x6b727bC4560A05AEEB9c353396395B35c6Fdb57E)** | `0x6b727bC4560A05AEEB9c353396395B35c6Fdb57E` | **2** (Etherscan) | **245** |
| **[DEXFactory.sol](https://sepolia.etherscan.io/address/0x2491e5C6d2aC321f0036fF5D561b7c72086Ba5a4)** | `0x2491e5C6d2aC321f0036fF5D561b7c72086Ba5a4` | **99** (Etherscan) | **98** |
| **[WETH.sol](https://sepolia.etherscan.io/address/0x3E7B9d0da44D0c4Edb60a2261f89007f05419317)** | `0x3E7B9d0da44D0c4Edb60a2261f89007f05419317` | **615** (Etherscan) | **960** |
| **[BatchTransfer.sol](https://sepolia.etherscan.io/address/0x3c9323F2BaDdDBB1B152feFA33FEC0b748239860)** | `0x3c9323F2BaDdDBB1B152feFA33FEC0b748239860` | **3** (Etherscan) | **2** |
| **Piscinas DEX (Agregado - 98 pools)** | *(Múltiples contratos instanciados)* | **358** (Est. por logs) | **567** |
| **Tokens Personalizados (Agregado - 115 tokens)** | *(Múltiples contratos instanciados)* | **1,235** (Est. por logs) | **1,283** |
| 📊 **TOTAL GENERAL ACUMULADO** | | 🚀 **2,460** | 🏆 **3,331** |

### Detalles Técnicos del Reporte de Consulta
* **Red Blockchain:** Ethereum Sepolia (Chain ID: `11155111`)
* **Bloque de Consulta de Datos:** `11115859`
* **Fecha y Hora de Generación:** 22 de junio de 2026, 08:39:55 AM
* **Valor Total Bloqueado de la Plataforma (WETH TVL):** `33.3264 WETH`
* **Cantidad de Pares de Intercambio con WETH:** `46 pares activos`

---

## 🌐 Recursos Públicos del Ecosistema

Para auditar y explorar de manera independiente el entorno del diplomado, se encuentran disponibles los siguientes enlaces:

* **Laboratorio Web3 en Vivo:** [web3-usach-lab.cbaeza.com](https://web3-usach-lab.cbaeza.com/)
* **Repositorio de la dApp (Frontend):** [github.com/cjbaezilla/diplomado-usach-training-dapp](https://github.com/cjbaezilla/diplomado-usach-training-dapp)
* **Repositorio de Contratos Inteligentes:** [github.com/cjbaezilla/diplomado-usach-training-dapp-contracts](https://github.com/cjbaezilla/diplomado-usach-training-dapp-contracts)
* **Ranking de Liquidez en Vivo:** [web3-usach-lab.cbaeza.com/ranking](https://web3-usach-lab.cbaeza.com/ranking)
* **Perfil Público Estudiantil (Ejemplo Profe Carlos):** [web3-usach-lab.cbaeza.com/estudiante?address=0xaEeaA55ED4f7df9E4C5688011cEd1E2A1b696772](https://web3-usach-lab.cbaeza.com/estudiante?address=0xaEeaA55ED4f7df9E4C5688011cEd1E2A1b696772)

---

## 👤 Identidad Académica Digital (`StudentIdentity.sol`)

Para establecer una gobernanza transparente y una trazabilidad óptima de los participantes, estructuré un registro de identidad digital académica donde cada dirección pública (`EOA`) se vincula de manera inmutable con los datos institucionales del alumno (nombre completo, correo institucional con dominio `@usach.cl`, perfiles profesionales de LinkedIn y GitHub, y avatar).

El contrato optimiza el consumo de gas en las aserciones iniciales mediante el uso de errores personalizados (`error InvalidName()`) en lugar de cadenas de texto tradicionales de requerimiento.

### Métricas de Adopción de Identidad
* **Estudiantes Únicos Registrados:** `27`
* **Actualizaciones de Perfil Realizadas:** `34`
* **Usuarios Únicos Interactuando:** `25`

![Captura del Módulo de Identidad](/images/blog/usach-lab/captura_identidad.png)
![Perfil Público de Usuario](/images/blog/usach-lab/user_profile.jpeg)

### Registro On-Chain de Estudiantes del Diplomado

A continuación se detalla el registro inmutable de las direcciones estudiantiles incorporadas en la red Sepolia:

| Estudiante (Dirección) | Bloque de Registro | Hash de Transacción (Etherscan) |
| :--- | :---: | :--- |
| [`0xaEea...6772`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xaEeaA55ED4f7df9E4C5688011cEd1E2A1b696772) | 10970169 | [`0x9982d43c...`](https://sepolia.etherscan.io/tx/0x9982d43cde598a7e4ca7f4de3edac78b6aa19ce03e9e9c7f23bd7987b5f980b4) |
| [`0x5953...05Cb`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x5953D009299f31fac1d7B08176Cc7a7A571405Cb) | 10976222 | [`0x6c1c746e...`](https://sepolia.etherscan.io/tx/0x6c1c746ecafa18d4c859225373a38dc3b7c6d4c1aee5cd114ba9c268f187f69e) |
| [`0x5122...1162`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x5122aECe833b38e26b63756ACC1555C99afA1162) | 10984620 | [`0x3b4dc5a0...`](https://sepolia.etherscan.io/tx/0x3b4dc5a084b673138800847f544faf694adeb91cf6ca7f2b8f51680ecba46e80) |
| [`0x760f...bf47`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x760f11004aa59d898913E5aE768C648004f3bf47) | 10984627 | [`0xbe0f3d43...`](https://sepolia.etherscan.io/tx/0xbe0f3d43f2f02d6683ee2e5fe24fae74c363d04f1a6aa7991940599c6ad966e5) |
| [`0x209D...85F0`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x209D191B60AAa4Dd8452BF42DaDC5D68aea385F0) | 10985595 | [`0xd527808f...`](https://sepolia.etherscan.io/tx/0xd527808f0475484cba68d386aa1314ce4aa240f2fb178b6020642858ac098c6b) |
| [`0x1B34...D90B`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x1B3443521CbB39b85bC3e4510f3B3b6eC315D90B) | 10996511 | [`0xfac639a3...`](https://sepolia.etherscan.io/tx/0xfac639a35117fb5841d51dbedc26eef525bd6f141e024ef1cf96df2aae6a8f36) |
| [`0x5bac...Ebf3`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x5bac18695637fbD41D5d64dCb93dc54D66FEEbf3) | 11004053 | [`0xaa5d23f7...`](https://sepolia.etherscan.io/tx/0xaa5d23f711e761a4587448e7ca6ba95eea3beb74ff33e820f491a3c6d3c2d9f0) |
| [`0x42dd...eA96`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x42ddE3F6ae39066b79767261AFD4Cb2c3d82eA96) | 11011443 | [`0xbc6167d4...`](https://sepolia.etherscan.io/tx/0xbc6167d4dabcee356e06aad16befaf121c664db0828397c40dfc021ec089a9d1) |
| [`0xC00B...fB68`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xC00B07476a6F2Fc3a3eDE442652FBcc694CCfB68) | 11018724 | [`0x71265235...`](https://sepolia.etherscan.io/tx/0x712652355824ec31d0e0b38709fe7d1845c77dca0fc3179e60f79a2e5d74b29c) |
| [`0xcDA6...c44f`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xcDA61b6aC1207262e38585cDffE2ea87a70c4e4f) | 11019258 | [`0xcb637cf1...`](https://sepolia.etherscan.io/tx/0xcb637cf198caa5cee120a27a5f35e633b904d3456b1de6d77646d5500a399522) |
| [`0x1D14...423C`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x1D14B5D0D290669741B9df14b2c4B69b3Ad0423C) | 11030068 | [`0x0c9f64f0...`](https://sepolia.etherscan.io/tx/0x0c9f64f015478aeb2b5a79d21a27822f9aab37e5d25678f71ff891264a340d1b) |
| [`0x3a21...0B39`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x3a211d4a5638E9dCEa893e7Be4b1E3ce157C0B39) | 11031359 | [`0x464464a5...`](https://sepolia.etherscan.io/tx/0x464464a512ea69c8882b87dab3ad50969e205bf438c52ea5fe5f3483edb061a4) |
| [`0x9e03...21dE`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x9e034CcB8407101B4FEd0D52D13b6D02aFa021dE) | 11033682 | [`0x099a03ea...`](https://sepolia.etherscan.io/tx/0x099a03ea4688354b85bec6825bc94ae85ecb0ab0f9b966815b701fd1afa99a52) |
| [`0xeC00...A5F5`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xeC006BA3EA4cA637cea06027b5e68Bf99062A5F5) | 11034024 | [`0x022d8b90...`](https://sepolia.etherscan.io/tx/0x022d8b90a4445d6b4a3d03f2d69b51317d8f58be24e47105978533e2f43d4c56) |
| [`0x5EB6...5c42`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x5EB6Cd3cEAE4548a459E0F255aD4d1bda4f05c42) | 11034222 | [`0x7eb1da72...`](https://sepolia.etherscan.io/tx/0x7eb1da726274cfe0736304261a058af8caa20f7c4aef62d9e4d74ec3c758bf62) |
| [`0xA78B...66F1`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xA78B57234A481d69393381Ac1642DBCadd9B66F1) | 11037907 | [`0xe420f9db...`](https://sepolia.etherscan.io/tx/0xe420f9dbeee1acde5e3a14d682e30ca011266dca46372a43ee1bfba5cf8465e3) |
| [`0x87A7...e4AF`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x87A7ef686037a25DFd53a5d7400657f09b2ce4AF) | 11041120 | [`0xbe565277...`](https://sepolia.etherscan.io/tx/0xbe5652773a89087d52c1925a032cba9c70bd3d8c71a90e9d2d8f3748f46463c7) |
| [`0x8252...Ea4F`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x82528840954594A11855a1fDA9b19AEda6BCEa4F) | 11047013 | [`0x8727134b...`](https://sepolia.etherscan.io/tx/0x8727134b0749ba0ad3f2b4c6ce56463a6892e520d4ed09e25931a0a27c32f92c) |
| [`0xf133...91a4`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xf133e655555711E25CD9723a8e83A7C53a5D91a4) | 11047114 | [`0x254005b1...`](https://sepolia.etherscan.io/tx/0x254005b1449fb19408b401f17c0ac76d3badbaccc9f7c19329a9628ae23a6863) |
| [`0x4479...DcD3`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x4479C1b9c40bBDa0473cE1757a7b1cCf1a6bDcD3) | 11047300 | [`0x5871d1ea...`](https://sepolia.etherscan.io/tx/0x5871d1eaae895ffe01aa818a3b9d5f191d1677c0a8d47a462c12a1403f053506) |
| [`0x0e51...3c70`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x0e51080164B5Eb3F028D6A85deF9273457093c70) | 11050076 | [`0xfc49d600...`](https://sepolia.etherscan.io/tx/0xfc49d6007cb9db5a87f372a9b7f2efa571746d8203a7b0b35d882bc6ef5a5532) |
| [`0x8376...3121`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x8376F6eef5362cCd91c7F2Ecae8B02Ca02043121) | 11053801 | [`0xe13bd673...`](https://sepolia.etherscan.io/tx/0xe13bd67347828b717f8fb4a0d75f611444c6f40358cb3983160d5473de5ab128) |
| [`0x131B...9a4A`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x131B7E72CdD02717F74E1529ae4Ecb7C2dD39a4A) | 11060901 | [`0x181fdaf0...`](https://sepolia.etherscan.io/tx/0x181fdaf0afa6d631d99f37c2a8b195a61fb3a20ca1a4afbe7e1ea27164905a5b) |
| [`0xe52A...03Ce`](https://web3-usach-lab.cbaeza.com/estudiante?address=0xe52A8FC5c172e38B48C15895B1e987f19DB203Ce) | 11061261 | [`0xc916c3e0...`](https://sepolia.etherscan.io/tx/0xc916c3e0b840c0cafd26c99365fea541bbab0e219235d57fc80689090d8d5782) |
| [`0x5155...A7Df`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x5155c3d1F537b094B42BCc4e3cfB295b10F4A7Df) | 11068318 | [`0x6eef3014...`](https://sepolia.etherscan.io/tx/0x6eef30149d1576f19d564ff29e4501eacbeef44483b663672c7dd53613d85c6b) |
| [`0x6848...4382`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x684858C2072Ef9eE7269B81d348a627956c44382) | 11069945 | [`0xbbdb1bbb...`](https://sepolia.etherscan.io/tx/0xbbdb1bbbe99d4edc23a94db3f618d7ad221469031bec42fd463443770f2b2c6d) |
| [`0x0BCD...DD3B`](https://web3-usach-lab.cbaeza.com/estudiante?address=0x0BCDd9fB7647f285A16BC6DA358775b816d1DD3B) | 11086978 | [`0x567906d9...`](https://sepolia.etherscan.io/tx/0x567906d97a73e63606146f8d6951522b8a80e2bf7fe975aa218abdd5c5a897e4) |

---

## 🪙 Creación y Flujo de Tokens ERC-20 (`TokenFactory.sol`)

Para simular economías de tokens y mecanismos de emisión descentralizada, implementé una fábrica de contratos inteligentes que permitió a los alumnos instanciar de forma dinámica **115 nuevos contratos individuales de tokens ERC-20** basados en OpenZeppelin `v5.6.1`.

Desde este componente, los estudiantes tuvieron control sobre la acuñación (`mint`), quema (`burn`) y transferencias entre pares, generando un flujo acumulado de **1,235 transacciones directas** y **1,283 eventos on-chain**.

![Panel de Gestión de Tokens ERC-20](/images/blog/usach-lab/captura_erc20.png)
![Despliegue de Tokens](/images/blog/usach-lab/erc20_desplegar.png)

### Principales Tokens Creados por los Alumnos

| Token (Dirección en Sepolia) | Nombre | Símbolo | Creador (Owner) | Suministro Total | Bloque |
| :--- | :--- | :---: | :--- | :---: | :---: |
| `0x3d0FDfC08B1484AE8499aF03cD744B8c7c3c6d15` | **GTO** | **FIRE** | `0xcDA6...c44f` | 21,110,000,101.0 | 11033006 |
| `0x8D1039Ce5d05E71fAaCDC6053F509081B5B1341F` | **Tokenmpino** | **MPCH** | `0x1B34...D90B` | 110,731,612.5 | 11008690 |
| `0xe49cCdD0C0b15E8461Cf01ABE488B67A41373D29` | **CuboChain** | **CBCH** | `0x209D...85F0` | 100,010,050.0 | 11033535 |
| `0xe7864240cAC19939D4EA68C5EFb4B636A8BbDf02` | **El Estable Peso** | **PESO** | `0xaEea...6772` | 100,000,000.0 | 10968907 |
| `0x885E5E5e6E1C492A6bceE71bA563906b293D3E19` | **MiguelToken** | **MGT** | `0xA78B...66F1` | 50,000,000.0 | 11037968 |
| `0xF02fb0D52Fc59549eE5fDC19bb70426D0879bbf6` | **Token Giovi** | **TKGIO** | `0x42dd...eA96` | 2,273,000.0 | 11011603 |
| `0x1810b6323D188192e5b51b76FB25112a852dDb65` | **Chococoin** | **CHC** | `0x5155...A7Df` | 1,010,000.0 | 11068440 |
| `0xEBe2A82052958bCb3E5E23f70Fd3214c5B8168c5` | **Monkey Token** | **MT** | `0x5bac...Ebf3` | 1,000,000.0 | 11062608 |
| `0xF41E16256f8d383a9BDDA38a99B899146448C23b` | **Macondo Token** | **MACONDO** | `0x5953...05Cb` | 500,000.0 | 10976167 |
| `0x9ADEC62F91687f552A6C32B9f8Bde7DD1452AB8B` | **Activo 1** | **ACT1** | `0x87A7...e4AF` | 110,000.0 | 11047756 |
| `0xB8aAEA24217c8BB49b599d24Dc89671e8bC9EAe2` | **Token NicolasD** | **TKND** | `0x8252...Ea4F` | 100,001.0 | 11047046 |
| `0x0F2c4fB4c90F2335AA7384601c22B35706536fFf` | **Mi Nuevo Tokencito** | **TOKENCIT** | `0xaEea...6772` | 100,000.0 | 11033581 |
| `0xCB6f07A9bC0ACAC9D8087956FB36B8e036609B60` | **GTO2** | **ICE** | `0xcDA6...c44f` | 100,000.0 | 11055438 |
| `0x0592D92BD2f396F35339C561F0e700e32d9a6ddd` | **MiToken** | **MTT** | `0x131B...9a4A` | 100,000.0 | 11060908 |
| `0x743b4728b6895C8957d458b023C6F90E458D1D24` | **VitokoCoin** | **VTC** | `0xf133...91a4` | 18,200.0 | 11053658 |
| `0x83f1273FF47977b271150B8A3C84097Ca633bBaF` | **polettoken** | **pltk** | `0x4479...DcD3` | 10,013.5 | 11047429 |
| `0xff7A19b2d03F13f589Ff94219b32ffaEF2CF0336` | **TokenMarti** | **TM** | `0x3a21...0B39` | 1,000.0 | 11031726 |
| `0x872BC57A7bdF3A58567a9A4cD735107e16c6B5C6` | **JanoChain** | **JCH** | `0x209D...85F0` | 1,000.0 | 11054060 |
| `0x9264698E11bb73484BA821945b81BcaD13095897` | **ITACHI TOKEN** | **ITA** | `0xC00B...fB68` | 500.0 | 11018800 |

---

## 🔄 Dinámica del Creador de Mercado Automatizado (DEX/AMM)

El núcleo financiero de la plataforma se estructuró mediante una fábrica de piscinas (`DEXFactory.sol`) y contratos de intercambio individuales (`DEXPool.sol`) basados en la regla del producto constante:

$$x \cdot y = k$$

El sistema deduce una comisión fija del **0.3% (3 por 1,000)** sobre cada transacción de intercambio, acumulándose directamente en las reservas para recompensar a los proveedores de liquidez que aportan capital al mercado.

![Panel de Intercambio (Swap)](/images/blog/usach-lab/captura_swap.png)
![Panel de Provisión de Liquidez](/images/blog/usach-lab/captura_liquidez.png)

### Métricas Consolidadas del DEX
* **Piscinas Desplegadas en la Fábrica:** `98 pools de liquidez`
* **Pares Comerciales con WETH:** `46 pares con balance positivo`
* **Valor Total Bloqueado (WETH TVL):** `33.3264 WETH`
* **Transacciones de Swap e Interacción con Piscinas:** `358 transacciones` (con 567 eventos de liquidez)
* **Operaciones de Conversión con WETH:** `140 depósitos (wrap)` y `12 retiros (unwrap)`

![Ranking Dinámico de Proveedores de Liquidez](/images/blog/usach-lab/ranking_dex.png)

### Piscinas de Liquidez con Mayor Actividad y Profundidad

A continuación se detallan las piscinas más activas creadas por los estudiantes, reflejando las reservas custodiadas, los tokens LP emitidos y el volumen de swaps:

| Piscina (Pool Address) | Par Comercial | Reserva WETH | Reserva Token Alumno | LP Emitidos | Swaps | Aportes (+) | Retiros (-) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `0xd11b93...5B971` | **WETH / VTC** | **9.5288 WETH** | 14,660.73 **VTC** | `373.47` | **4** | **24** | **1** |
| `0x0Ad777...81679` | **FIRE / WETH** | **7.8464 WETH** | 13,532,797,055 **FIRE** | `325,410.27` | **9** | **21** | **2** |
| `0xbef9a0...beedd2` | **WETH / PESO** | **3.0346 WETH** | 23,026,769 **PESO** | `8,349.63` | **15** | **21** | **2** |
| `0x80865F...1414D4` | **WETH / MPCH** | **2.5989 WETH** | 3,112.41 **MPCH** | `89.88` | **9** | **6** | **1** |
| `0x4f8bb0...6D7d4` | **WETH / TM** | **2.4784 WETH** | 366.01 **TM** | `30.10` | **15** | **12** | **1** |
| `0xC5E85e...9D45c2` | **WETH / MACONDO** | **1.4124 WETH** | 32,041.08 **MACONDO** | `212.40` | **11** | **11** | **1** |
| `0x294aF2...8F386a` | **WETH / CLT** | **1.3073 WETH** | 0.00 **CLT** | `0.003` | **1** | **3** | **1** |
| `0x02aA0c...3D857` | **CHC / WETH** | **0.6720 WETH** | 9,337.50 **CHC** | `79.19` | **1** | **2** | **0** |
| `0x1a1b6C...34B9b` | **MTT / WETH** | **0.6000 WETH** | 4.16 **MTT** | `1.58` | **1** | **1** | **0** |
| `0x92073b...D8F63` | **TOKENCIT / WETH** | **0.5390 WETH** | 48,783.96 **TOKENCIT** | `162.14` | **7** | **5** | **1** |
| `0x44069B...1B606` | **WETH / MT** | **0.5000 WETH** | 1,000.00 **MT** | `22.36` | **0** | **1** | **0** |
| `0x1aDE7B...4e7Ab` | **WETH / ICE** | **0.4878 WETH** | 99,861.59 **ICE** | `220.67` | **4** | **6** | **0** |
| `0x0C6c2F...47783` | **WETH / JALI** | **0.4496 WETH** | 0.035 **JALI** | `0.125` | **2** | **2** | **0** |
| `0xcBEA3f...73261` | **WETH / CBCH** | **0.3994 WETH** | 1,000.00 **CBCH** | `19.97` | **1** | **2** | **0** |
| `0xC4d6F9...fc1BdA` | **WETH / TKGIO** | **0.2681 WETH** | 985.22 **TKGIO** | `16.20` | **15** | **14** | **0** |
| `0xF475d6...BB7836` | **WETH / pltk** | **0.2117 WETH** | 19.07 **pltk** | `2.00` | **4** | **8** | **1** |
| `0xfc22BC...BFBF6F9`| **WETH / MGT** | **0.2056 WETH** | 29.25 **MGT** | `2.44` | **9** | **9** | **0** |
| `0x0f3Dd8...eF74cb` | **WETH / ACT1** | **0.2007 WETH** | 1,098.29 **ACT1** | `14.77` | **12** | **12** | **0** |

---

## 🏆 Acreditación Curricular con Reliquias NFT (`ChallengeMinter.sol` y `BaseERC1155.sol`)

La certificación del progreso académico se estructuró a través de una senda de **10 desafíos de dificultad progresiva**. Cuando el estudiante cumple los requisitos en la blockchain, el contrato `ChallengeMinter.sol` verifica una firma criptográfica ECDSA (`EIP-191`) emitida por la autoridad firmante autorizada y acuña una **Reliquia NFT inmutable (ERC-1155)** en la billetera del alumno.

El esquema incorpora protección contra ataques de repetición mediante un valor de sal único (`salt`) y la vinculación explícita de `address(this)`.

![Interfaz de Desafíos](/images/blog/usach-lab/screenshot_desafios.png)
![Modal de Reclamo](/images/blog/usach-lab/claiming_relic.png)
![Desafíos Completados](/images/blog/usach-lab/desafios_completados.png)

### Distribución de Reliquias EAO Acuñadas

En total, se acuñaron **241 reliquias académicas** inspiradas en el legado patrimonial de la **Escuela de Artes y Oficios (EAO)** de la USACH:

| ID | Nombre de la Reliquia Histórica EAO | Desafío Académico Asociado | Cantidad Acuñada |
| :---: | :--- | :--- | :---: |
| `0` | **Insignia #0: El Alambique y Recipiente** | Conexión de Billetera Web3 | **27** |
| `1` | **Insignia #1: La Turbina del Patio de Talleres** | Uso del Grifo de Fondos (Faucet) | **27** |
| `2` | **Insignia #2: El Tablero de Control** | Creación de Perfil Estudiantil | **27** |
| `3` | **Insignia #3: La Sala de Exhibición** | Creación de Token ERC-20 Propio | **25** |
| `4` | **Insignia #4: La Fragua y el Yunque** | Acuñación y Transferencia a Pares | **24** |
| `5` | **Insignia #5: La Caldera Babcock & Wilcox** | Intercambio en el AMM (Swap) | **22** |
| `6` | **Insignia #6: La Bodega del Laboratorio de Química** | Provisión de Liquidez en Pools | **23** |
| `7` | **Insignia #7: La Máquina de Vapor Cavé à Paris** | Despliegue de una Piscina DEX | **23** |
| `8` | **Insignia #8: La Urna Funeraria del General Las Heras** | Envoltura de Ether (WETH) | **24** |
| `9` | **Insignia #9: Los Taladros Mecánicos en Serie** | Maestría de Interacción On-Chain | **19** |

---

## 🎖️ Protocolo de Prueba de Asistencia (POAP)

Para complementar la certificación curricular en la cadena de bloques, se implementó el protocolo estándar de prueba de asistencia (POAP). Los estudiantes del curso recibieron una credencial no fungible oficial bajo el identificador **#7591359**, correspondiente al grupo académico *"Primer Grupo Exploradores Blockchain Diplomado USACH"*.

Esta credencial digital mitiga cualquier posibilidad de falsificación y permite auditar públicamente la participación en las sesiones de laboratorio directamente en [collectors.poap.xyz/token/7591359](https://collectors.poap.xyz/token/7591359).

![Protocolo de Prueba de Asistencia POAP](/images/blog/usach-lab/poap.png)

---

## 💡 Análisis de Comportamiento Estudiantil y Conclusiones

El análisis de las métricas on-chain consolidadas evidencia una adopción sumamente activa y progresiva del ecosistema descentralizado por parte de la comunidad académica:

1. **Alta Retención Inicial:** El registro de 27 identidades y la tasa de finalización del 100% en los tres primeros desafíos confirman que la interfaz intuitiva y la conexión mediante RainbowKit redujeron a cero la fricción de entrada para nuevos usuarios.
2. **Exploración de Políticas Monetarias:** La creación de 115 tokens demuestra el interés de los alumnos por experimentar con distintos suministros y mecanismos de acuñación antes de interactuar en los mercados secundarios.
3. **Comprensión Práctica del Riesgo DeFi:** Al acumular más de 33 WETH en 46 pares de liquidez y ejecutar 358 swaps, los estudiantes experimentaron directamente el impacto del deslizamiento de precios (*slippage*), la importancia de la profundidad de mercado y el efecto de la pérdida impermanente (*impermanent loss*).
4. **Validación del Paradigma Serverless:** La ejecución impecable de más de 2,400 transacciones sin requerir bases de datos centralizadas demuestra que la infraestructura de contratos inteligentes es suficiente para sustentar aplicaciones educativas dinámicas, transparentes y soberanas.

Este laboratorio marca un precedente en la educación universitaria de ingeniería y finanzas descentralizadas en Chile, consolidando una metodología donde la teoría cobra vida mediante la práctica on-chain directa.
