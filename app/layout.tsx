import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/I18nContext";
import { GoogleTranslate } from "@/components/GoogleTranslate";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cbaeza.com"),
  title: {
    default: "Carlos Baeza Negroni | Consultor Senior Blockchain & Contratos Inteligentes",
    template: "%s | Carlos Baeza Negroni"
  },
  description: "Ingeniero Consultor Senior Especializado en Blockchain y Contratos Inteligentes. Experto en Solidity, DeFi, EVM, DAOs, NFTs, RWA y mecanismos avanzados de staking.",
  keywords: [
    "Carlos Baeza Negroni",
    "Carlos Baeza",
    "cbaeza",
    "cbaeza.com",
    "Blockchain Consultant",
    "Smart Contracts",
    "Solidity Developer",
    "DeFi Specialist",
    "Ethereum Developer",
    "EVM Architect",
    "RWA Tokenization",
    "DAO Governance",
    "Staking Mechanisms",
    "Web3 Development",
    "Santiago de Chile",
    "USACH"
  ],
  authors: [{ name: "Carlos Baeza Negroni", url: "https://cbaeza.com" }],
  creator: "Carlos Baeza Negroni",
  alternates: {
    canonical: "https://cbaeza.com",
    languages: {
      "es": "https://cbaeza.com/?lang=es",
      "en": "https://cbaeza.com/?lang=en",
      "zh": "https://cbaeza.com/?lang=zh",
      "ar": "https://cbaeza.com/?lang=ar",
      "ru": "https://cbaeza.com/?lang=ru",
      "ja": "https://cbaeza.com/?lang=ja",
      "pt": "https://cbaeza.com/?lang=pt",
      "ko": "https://cbaeza.com/?lang=ko",
      "de": "https://cbaeza.com/?lang=de",
      "fr": "https://cbaeza.com/?lang=fr"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Carlos Baeza Negroni | Consultor Senior Blockchain & Contratos Inteligentes",
    description: "Ingeniero Consultor Senior Especializado en Blockchain y Contratos Inteligentes. Experto en Solidity, DeFi, EVM, DAOs, NFTs, RWA y mecanismos avanzados de staking.",
    url: "https://cbaeza.com",
    siteName: "Carlos Baeza Negroni - cbaeza.com",
    images: [
      {
        url: "/images/logo.png",
        alt: "Carlos Baeza Negroni - Blockchain & Smart Contracts Consultant",
      },
    ],
    locale: "es_CL",
    type: "profile",
    firstName: "Carlos",
    lastName: "Baeza Negroni",
    username: "cjbaezilla",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Baeza Negroni | Consultor Senior Blockchain & Contratos Inteligentes",
    description: "Ingeniero Consultor Senior Especializado en Blockchain y Contratos Inteligentes. Experto en Solidity, DeFi, EVM, DAOs, NFTs, RWA y mecanismos avanzados de staking.",
    creator: "@cjbaezilla",
    images: ["/images/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Carlos Baeza Negroni",
    "alternateName": "Carlos Baeza",
    "jobTitle": "Senior Consulting Engineer Specialized in Blockchain & Smart Contracts",
    "url": "https://cbaeza.com",
    "image": "https://cbaeza.com/images/logo.png",
    "sameAs": [
      "https://github.com/cjbaezilla",
      "https://www.linkedin.com/in/carlos-baeza-negroni/",
      "https://twitter.com/cjbaezilla",
      "https://www.youtube.com/@cjbaezilla"
    ],
    "knowsAbout": [
      "Solidity",
      "Smart Contracts",
      "Blockchain",
      "Decentralized Finance (DeFi)",
      "Ethereum Virtual Machine (EVM)",
      "Decentralized Autonomous Organizations (DAOs)",
      "Non-Fungible Tokens (NFTs)",
      "Real World Assets (RWA)",
      "Stablecoins",
      "Staking",
      "Tokenomics",
      "Layer 1 and Layer 2 Networks (L1/L2)",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Universidad de Santiago de Chile",
      "sameAs": "https://www.usach.cl/"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${heading.variable} ${mono.variable} h-full antialiased dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleTranslate />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
