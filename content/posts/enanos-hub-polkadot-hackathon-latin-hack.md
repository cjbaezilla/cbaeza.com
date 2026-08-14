---
title: "Enanos Hub: Mención Honrosa en el Hackathon LATIN HACK de Polkadot & Nerdconf"
date: "2025-10-28"
excerpt: "Arquitectura técnica, contratos inteligentes y la experiencia detrás de Enanos Hub, proyecto galardonado con Mención Honrosa en el hackathon LATIN HACK (Nerdconf / Polkadot) entre 101 proyectos y 223 hackers."
author: "Carlos Baeza Negroni"
category: "Blockchain"
tags: ["Polkadot", "Hackathon", "Solidity", "DeFi", "DAO", "NFT", "Smart Contracts", "Next.js"]
coverImage: "/images/blog/portada-enanos-hub.png"
readTime: "6 min de lectura"
---

# Enanos Hub: Mención Honrosa en el Hackathon LATIN HACK de Polkadot & Nerdconf

**Enanos Hub** (Enanos Club) es una plataforma integral de finanzas descentralizadas (DeFi) y gobernanza comunitaria diseñada y desplegada en la testnet de **Polkadot Asset Hub**. Su objetivo central es brindar utilidad real y herramientas financieras a creadores de comunidades y colecciones NFT, permitiéndoles emitir tokens, gestionar DAOs descentralizadas, crear piscinas de liquidez y realizar intercambios de tokens (*swaps*) de manera automatizada.

El proyecto fue presentado y evaluado en el hackathon internacional **LATIN HACK**, organizado por **Nerdconf** y el ecosistema **Polkadot** a través de la plataforma DoraHacks.

---

## 🎥 Demostraciones en Video del Proyecto

A continuación puedes ver los videos oficiales de demostración y presentación técnica del proyecto:

### 1. Presentación y Visión General
<iframe src="https://www.youtube-nocookie.com/embed/q1Eeodps-9E" title="Enanos Hub - Presentación" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
- Ver en YouTube: [https://www.youtube.com/watch?v=q1Eeodps-9E](https://www.youtube.com/watch?v=q1Eeodps-9E)

### 2. Demostración y Flujo de Interacción
<iframe src="https://www.youtube-nocookie.com/embed/esQc6P4Dytc" title="Enanos Hub - Demo de Interacción" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
- Ver en YouTube: [https://www.youtube.com/watch?v=esQc6P4Dytc](https://www.youtube.com/watch?v=esQc6P4Dytc)

### 3. Recorrido Completo de Funcionalidades y DApp
<iframe src="https://www.youtube-nocookie.com/embed/o9_mwP0P2u8" title="Enanos Hub - Walkthrough Completo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
- Ver en YouTube: [https://www.youtube.com/watch?v=o9_mwP0P2u8](https://www.youtube.com/watch?v=o9_mwP0P2u8)

---

## 🔗 Enlaces y Repositorios del Proyecto

- **DApp Frontend (Next.js)**: [https://github.com/cjbaezilla/NextApp-Hackathon-Polkadot](https://github.com/cjbaezilla/NextApp-Hackathon-Polkadot)
- **Smart Contracts (Hardhat & Solidity)**: [https://github.com/cjbaezilla/Hardhat-Contratos-Hackathon-Polkadot](https://github.com/cjbaezilla/Hardhat-Contratos-Hackathon-Polkadot)
- **Ficha del Proyecto en DoraHacks BUIDL**: [https://dorahacks.io/buidl/34225/](https://dorahacks.io/buidl/34225/)
- **DApp en Vivo (Testnet)**: [https://polka.enanos.club](https://polka.enanos.club)

---

## 🏆 El Hackathon: LATIN HACK (Nerdconf & Polkadot)

El hackathon **LATIN HACK** reunió a desarrolladores de toda Latinoamérica para construir soluciones de impacto sobre la infraestructura de Polkadot y sus parachains.

La competencia contó con una participación de **223 hackers** y un total de **101 proyectos enviados**. Tras la evaluación técnica de los jueces y mentores de Nerdconf y Polkadot, **Enanos Hub fue galardonado con una Mención Honrosa**.

![Mención Honrosa Enanos Hub en Hackathon Polkadot Nerdconf](/images/blog/enanos_mencion.jpg)

Este reconocimiento valida el esfuerzo de diseñar e implementar una arquitectura completa y funcional de extremo a extremo, desarrollada de forma individual (equipo unipersonal).

---

## 🏗️ Arquitectura y Componentes de Enanos Hub

Enanos Hub integra múltiples primitivas cripto en una sola interfaz fluida:

```text
┌─────────────────────────────────────────────────────────────┐
│                    ENANOS HUB (Next.js)                     │
│    Wagmi + RainbowKit  │  Tailwind CSS  │  shadcn/ui        │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
        ┌──────▼──────┐                ┌──────▼──────┐
        │  NFT & DAOs │                │ DeFi Router │
        └──────┬──────┘                └──────┬──────┘
               │                              │
┌──────────────▼──────────────────────────────▼───────────────┐
│              POLKADOT ASSET HUB (Paseo Testnet)             │
│  - UsersContract               - UniswapV2Factory           │
│  - NFTContract                 - UniswapV2Router02          │
│  - ERC20MembersFactory         - WETH9 (PAS Wrapper)        │
│  - DAOMembersFactory & DAO                                  │
└─────────────────────────────────────────────────────────────┘
```

### 1. Panel de Control y Dashboard
- Métricas en vivo de usuarios registrados, tokens creados, DAOs activas y piscinas de liquidez.
- Seguimiento en tiempo real de **TVL** (Total Value Locked) en tokens PAS nativos.
- Feed dinámico de actividad comunitaria.

### 2. Identidad y Registro de Perfiles On-Chain
- Contrato `UsersContract` para registrar perfiles Web3 vinculados a redes sociales (X/Twitter, GitHub, Telegram).
- Control de acceso por billetera y visualización pública de estadísticas de participación.

### 3. Fábrica de Tokens ERC-20 (`ERC20MembersFactory`)
- Despliegue de contratos ERC-20 personalizados con nombre, símbolo y suministro configurable.
- Reglas de membresía: verificación de tenencia mínima de NFTs para autorizar la creación.
- Explorador integrado de saldos y transferencias.

### 4. Gobernanza y Fábrica de DAOs (`DAOMembersFactory` / `DAOContract`)
- Creación de DAOs con parámetros de quórum, umbrales de aprobación y periodos de votación.
- Poder de voto ponderado según la posesión y categoría de NFTs comunitarios.
- Sistema de propuestas on-chain con ejecución de decisiones comunitarias.

### 5. Integración DeFi Completa (Uniswap V2 + WETH9)
- **Fábrica de Liquidez (`UniswapV2Factory`)**: Creación instantánea de pares de intercambio.
- **Enrutador (`UniswapV2Router02`)**: Intercambio de tokens con protección contra deslizamiento (*slippage*) y plazos de transacción (*deadline*).
- **Contrato WETH9**: Conversión transparente del token nativo PAS a WETH envuelto para interactuar con protocolos compatibles con EVM.

### 6. Sistema de NFTs (`NFTContract`)
- Acuñación (*minting*) de membresías en formato NFT con metadatos personalizados para acceso y privilegios en la plataforma.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Rol |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router) + TypeScript | Arquitectura moderna con renderizado optimizado y tipado estricto. |
| **Estilos** | Tailwind CSS + shadcn/ui | Sistema de diseño modular, accesible y responsivo con modo claro/oscuro. |
| **Web3** | Wagmi + Viem + RainbowKit | Conexión multicartera segura (Talisman, MetaMask, WalletConnect). |
| **Smart Contracts** | Solidity + Hardhat + OpenZeppelin | Lógica de negocio, fábricas de contratos y pruebas automatizadas. |
| **Red** | Polkadot Asset Hub Testnet (Paseo) | Red EVM de Polkadot para activos digitales descentralizados. |

---

## 📋 Conclusiones

Haber obtenido la mención honrosa en el **LATIN HACK** de Polkadot y Nerdconf demostró que es posible construir una suite DeFi y de gobernanza completa, robusta y con experiencia de usuario moderna dentro del creciente ecosistema EVM de Polkadot.

Te invito a explorar los repositorios de código abierto y probar la DApp en la testnet.
