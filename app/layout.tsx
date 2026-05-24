import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/I18nContext";

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
  title: "Carlos Baeza Negroni | cbaeza.com",
  description: "Ingeniero Consultor Senior Especializado en Blockchain y Contratos Inteligentes. Especialista en Solidity, DeFi, estándar ERC-4626 y sistemas financieros.",
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
