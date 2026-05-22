"use client";

import React, { useState } from "react";
import { 
  Sun, 
  Moon, 
  Sliders, 
  Check, 
  Copy, 
  Palette, 
  Eye, 
  AlertCircle,
  Sparkles,
  ExternalLink,
  Paintbrush
} from "lucide-react";
import { shadcnColors, ShadcnColorName } from "../colors";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const colorCategories = {
  neutrales: {
    label: "Neutrales y Fondo",
    colors: ["zinc", "slate", "stone", "gray", "neutral"] as ShadcnColorName[],
  },
  especiales: {
    label: "Especiales y Opacos",
    colors: ["mist", "taupe", "mauve", "olive"] as ShadcnColorName[],
  },
  cromaticos: {
    label: "Cromáticos y Vivos",
    colors: [
      "red", "rose", "orange", "amber", "yellow", "lime", 
      "green", "emerald", "teal", "cyan", "sky", "blue", 
      "indigo", "violet", "purple", "fuchsia", "pink"
    ] as ShadcnColorName[],
  }
};

const radiusOptions = [
  { label: "Ninguno (Lyra)", value: "0rem" },
  { label: "Pequeño (Nova)", value: "0.45rem" },
  { label: "Por defecto (Vega)", value: "0.625rem" },
  { label: "Grande (Maia)", value: "0.875rem" }
];

export default function ColorsPlayground() {
  const [selectedColor, setSelectedColor] = useState<ShadcnColorName>("mist");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [radius, setRadius] = useState<string>("0.625rem");
  const [isInvalidState, setIsInvalidState] = useState<boolean>(false);
  const [isDisabledState, setIsDisabledState] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const palette = shadcnColors[selectedColor];
  const redPalette = shadcnColors.red;

  // Generamos los estilos de variables CSS en línea para la sección de componentes
  const getThemeStyles = () => {
    const styles: Record<string, string> = {};

    if (!isDark) {
      // Modo Claro
      styles["--background"] = "oklch(1 0 0)";
      styles["--foreground"] = palette[950];
      styles["--card"] = "oklch(1 0 0)";
      styles["--card-foreground"] = palette[950];
      styles["--popover"] = "oklch(1 0 0)";
      styles["--popover-foreground"] = palette[950];
      styles["--primary"] = palette[900];
      styles["--primary-foreground"] = palette[50];
      styles["--secondary"] = palette[100];
      styles["--secondary-foreground"] = palette[900];
      styles["--muted"] = palette[100];
      styles["--muted-foreground"] = palette[500];
      styles["--accent"] = palette[100];
      styles["--accent-foreground"] = palette[900];
      styles["--destructive"] = redPalette[600];
      styles["--destructive-foreground"] = redPalette[50];
      styles["--border"] = palette[200];
      styles["--input"] = palette[200];
      styles["--ring"] = palette[400];
    } else {
      // Modo Oscuro
      styles["--background"] = palette[950];
      styles["--foreground"] = palette[50];
      styles["--card"] = palette[900];
      styles["--card-foreground"] = palette[50];
      styles["--popover"] = palette[900];
      styles["--popover-foreground"] = palette[50];
      styles["--primary"] = palette[200];
      styles["--primary-foreground"] = palette[900];
      styles["--secondary"] = palette[800];
      styles["--secondary-foreground"] = palette[50];
      styles["--muted"] = palette[800];
      styles["--muted-foreground"] = palette[400];
      styles["--accent"] = palette[800];
      styles["--accent-foreground"] = palette[50];
      styles["--destructive"] = redPalette[400];
      styles["--destructive-foreground"] = redPalette[950];
      styles["--border"] = "oklch(1 0 0 / 10%)";
      styles["--input"] = "oklch(1 0 0 / 15%)";
      styles["--ring"] = palette[500];
    }

    styles["--radius"] = radius;
    return styles as React.CSSProperties;
  };

  const currentStyles = getThemeStyles() as Record<string, string>;

  const getCssCode = () => {
    return `:root {
  --background: ${currentStyles["--background"]};
  --foreground: ${currentStyles["--foreground"]};
  --card: ${currentStyles["--card"]};
  --card-foreground: ${currentStyles["--card-foreground"]};
  --popover: ${currentStyles["--popover"]};
  --popover-foreground: ${currentStyles["--popover-foreground"]};
  --primary: ${currentStyles["--primary"]};
  --primary-foreground: ${currentStyles["--primary-foreground"]};
  --secondary: ${currentStyles["--secondary"]};
  --secondary-foreground: ${currentStyles["--secondary-foreground"]};
  --muted: ${currentStyles["--muted"]};
  --muted-foreground: ${currentStyles["--muted-foreground"]};
  --accent: ${currentStyles["--accent"]};
  --accent-foreground: ${currentStyles["--accent-foreground"]};
  --destructive: ${currentStyles["--destructive"]};
  --destructive-foreground: ${currentStyles["--destructive-foreground"]};
  --border: ${currentStyles["--border"]};
  --input: ${currentStyles["--input"]};
  --ring: ${currentStyles["--ring"]};
  --radius: ${currentStyles["--radius"]};
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCssCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 bg-[oklch(0.08_0.005_228)] text-[oklch(0.95_0.005_228)] flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-[oklch(0.18_0.005_228)] bg-[oklch(0.1_0.005_228)]/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-2 rounded-lg text-white shadow-lg">
            <Palette className="size-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Playground de Colores Base
            </h1>
            <p className="text-xs text-neutral-400">
              Entorno interactivo para testear variables CSS de Shadcn UI y Tailwind CSS v4
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
          <span>Estilo: <strong className="text-white">Base Nova</strong></span>
          <Separator orientation="vertical" className="h-4 bg-neutral-800" />
          <span>Tema Activo: <strong className="text-white capitalize">{selectedColor}</strong></span>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Panel Izquierdo: Controles */}
        <section className="lg:col-span-5 flex flex-col gap-6">
          <Card className="border-[oklch(0.18_0.005_228)] bg-[oklch(0.12_0.005_228)]">
            <CardHeader className="border-b border-[oklch(0.18_0.005_228)]/60 pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-white">
                <Sliders className="size-4 text-purple-400" />
                Configuración del Tema
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                Ajusta las propiedades generales del tema para previsualizar los cambios en tiempo real
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-5">
              
              {/* Selector de Modo */}
              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-2">
                  Modo de Color
                </label>
                <div className="grid grid-cols-2 gap-2 bg-[oklch(0.08_0.005_228)] p-1 rounded-lg border border-[oklch(0.18_0.005_228)]/40">
                  <button
                    onClick={() => setIsDark(false)}
                    className={`py-1.5 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                      !isDark 
                        ? "bg-white text-black shadow-sm" 
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Sun className="size-3.5" />
                    Modo Claro
                  </button>
                  <button
                    onClick={() => setIsDark(true)}
                    className={`py-1.5 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                      isDark 
                        ? "bg-[oklch(0.2_0.005_228)] text-white shadow-sm border border-[oklch(0.3_0.005_228)]/20" 
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Moon className="size-3.5" />
                    Modo Oscuro
                  </button>
                </div>
              </div>

              {/* Selector de Border Radius */}
              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-2">
                  Radio de Bordes (Border Radius)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {radiusOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setRadius(opt.value)}
                      className={`px-3 py-2 text-left rounded-lg text-xs border transition-all ${
                        radius === opt.value
                          ? "border-purple-500 bg-purple-500/10 text-white font-medium"
                          : "border-[oklch(0.18_0.005_228)] bg-[oklch(0.08_0.005_228)] hover:bg-[oklch(0.14_0.005_228)] text-neutral-400"
                      }`}
                    >
                      <span className="block text-[10px] text-neutral-500">
                        {opt.value}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control de Estados de Simulación */}
              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-2">
                  Simulación de Estados
                </label>
                <div className="flex flex-wrap gap-4 bg-[oklch(0.08_0.005_228)] p-3 rounded-lg border border-[oklch(0.18_0.005_228)]/40">
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isInvalidState}
                      onChange={(e) => setIsInvalidState(e.target.checked)}
                      className="rounded border-[oklch(0.18_0.005_228)] bg-neutral-900 text-purple-600 focus:ring-purple-500/20"
                    />
                    <span className="flex items-center gap-1">
                      <AlertCircle className="size-3 text-red-500" />
                      Estado Inválido
                    </span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isDisabledState}
                      onChange={(e) => setIsDisabledState(e.target.checked)}
                      className="rounded border-[oklch(0.18_0.005_228)] bg-neutral-900 text-purple-600 focus:ring-purple-500/20"
                    />
                    <span>Estado Deshabilitado</span>
                  </label>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Panel de Selección de Colores Base */}
          <Card className="border-[oklch(0.18_0.005_228)] bg-[oklch(0.12_0.005_228)]">
            <CardHeader className="border-b border-[oklch(0.18_0.005_228)]/60 pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-white">
                <Paintbrush className="size-4 text-pink-400" />
                Selección de Color Base (Base Color)
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                Elige uno de los 26 colores base provistos por shadcn v4 para generar el tema
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-4">
              {Object.entries(colorCategories).map(([key, category]) => (
                <div key={key}>
                  <h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    {category.label}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-2">
                    {category.colors.map((colorName) => {
                      const colPalette = shadcnColors[colorName];
                      const mainColor = colPalette[500];
                      return (
                        <button
                          key={colorName}
                          onClick={() => setSelectedColor(colorName)}
                          className={`relative group px-2 py-1.5 rounded-lg text-xs text-left border flex items-center gap-1.5 transition-all ${
                            selectedColor === colorName
                              ? "border-pink-500 bg-pink-500/10 text-white font-medium"
                              : "border-[oklch(0.18_0.005_228)] bg-[oklch(0.08_0.005_228)] hover:bg-[oklch(0.14_0.005_228)] text-neutral-400"
                          }`}
                        >
                          <span 
                            className="size-3 rounded-full shrink-0 border border-black/20"
                            style={{ backgroundColor: mainColor }}
                          />
                          <span className="capitalize text-[11px] truncate">
                            {colorName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Panel Derecho: Área de Pruebas y Visualización */}
        <section className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Visualizador de Escala OKLCH actual */}
          <Card className="border-[oklch(0.18_0.005_228)] bg-[oklch(0.12_0.005_228)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-white">
                <Sparkles className="size-4 text-amber-400" />
                Escala de OKLCH del Tema: <span className="capitalize text-amber-400">{selectedColor}</span>
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                Degradado y valores exactos de luminosidad, croma y tono para cada paso de la escala
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-11 gap-1.5">
                {(Object.keys(palette) as Array<keyof typeof palette>)
                  .sort((a, b) => Number(a) - Number(b))
                  .map((shade) => {
                    const colorValue = palette[shade];
                    return (
                      <div key={shade} className="flex flex-col items-center">
                        <div 
                          className="w-full h-12 rounded-md shadow-inner border border-white/5 relative group cursor-pointer"
                          style={{ backgroundColor: colorValue }}
                          title={`${selectedColor}-${shade}: ${colorValue}`}
                        >
                          <span className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-[8px] text-white px-1 py-0.5 rounded">
                            {shade}
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-500 font-mono mt-1">
                          {shade}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>

          {/* Área de Pruebas en Vivo (Live Component Preview) */}
          <div className="transition-all duration-300 rounded-xl">
            {/* Contenedor que simula el entorno de variables del componente */}
            <div 
              style={getThemeStyles()} 
              className={`p-8 border border-border bg-background text-foreground transition-all duration-200 rounded-xl ${isDark ? "dark" : ""}`}
            >
              <div className="max-w-2xl mx-auto flex flex-col gap-6">
                
                {/* Encabezado del Entorno */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <h2 className="text-lg font-bold">Vista Previa de Componentes</h2>
                    <p className="text-xs text-muted-foreground">
                      Estos componentes leen directamente de las variables CSS de su contenedor
                    </p>
                  </div>
                  <Badge variant={isDark ? "default" : "secondary"}>
                    {isDark ? "Oscuro" : "Claro"}
                  </Badge>
                </div>

                {/* Sección 1: Botones */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Botones (Button)
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="default" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Principal (Default)
                    </Button>
                    <Button variant="secondary" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Secundario
                    </Button>
                    <Button variant="outline" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Delineado (Outline)
                    </Button>
                    <Button variant="ghost" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Fantasma (Ghost)
                    </Button>
                    <Button variant="destructive" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Destructivo
                    </Button>
                    <Button variant="link" disabled={isDisabledState} aria-invalid={isInvalidState}>
                      Enlace
                    </Button>
                  </div>
                </div>

                {/* Sección 2: Badges */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Etiquetas (Badge)
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <Badge variant="default">Por Defecto</Badge>
                    <Badge variant="secondary">Secundario</Badge>
                    <Badge variant="outline">Delineado</Badge>
                    <Badge variant="destructive">Destructivo</Badge>
                  </div>
                </div>

                {/* Sección 3: Controles de Formulario */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Entradas e Interruptores (Inputs, Switch, Checkbox)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Campo de Texto */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium">Nombre de Usuario</label>
                      <Input 
                        placeholder="Ej. cbaeza" 
                        disabled={isDisabledState}
                        aria-invalid={isInvalidState}
                        defaultValue={isInvalidState ? "Valor erróneo" : ""}
                      />
                      {isInvalidState && (
                        <span className="text-[11px] text-destructive flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          Este nombre de usuario no está disponible
                        </span>
                      )}
                    </div>

                    {/* Toggles */}
                    <div className="flex flex-col gap-3 justify-center">
                      <div className="flex items-center gap-3">
                        <Switch 
                          id="airplane-mode" 
                          disabled={isDisabledState}
                          aria-invalid={isInvalidState}
                        />
                        <label htmlFor="airplane-mode" className="text-xs font-medium cursor-pointer">
                          Modo avión
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox 
                          id="terms-conditions" 
                          disabled={isDisabledState}
                          aria-invalid={isInvalidState}
                        />
                        <label htmlFor="terms-conditions" className="text-xs font-medium cursor-pointer">
                          Acepto términos y condiciones
                        </label>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Sección 4: Tarjeta Completa */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Tarjeta de Ejemplo (Card)
                  </h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Suscripción Activa</CardTitle>
                      <CardDescription>
                        Administra los detalles de tu plan y facturación mensual
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Plan actual:</span>
                        <span className="font-semibold">Developer Pro</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Costo mensual:</span>
                        <span className="font-semibold">$19.00 USD</span>
                      </div>
                      <Separator />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Los cambios de plan se aplicarán de inmediato. Las devoluciones se calculan a prorrata del tiempo consumido.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" disabled={isDisabledState}>
                        Cancelar Plan
                      </Button>
                      <Button size="sm" disabled={isDisabledState}>
                        Cambiar Plan
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

              </div>
            </div>
          </div>

          {/* Exportación de Código CSS */}
          <Card className="border-[oklch(0.18_0.005_228)] bg-[oklch(0.12_0.005_228)]">
            <CardHeader className="pb-3 border-b border-[oklch(0.18_0.005_228)]/60">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
                    Código de Variables CSS del Tema
                  </CardTitle>
                  <CardDescription className="text-xs text-neutral-400">
                    Copia estas variables en tu archivo globals.css para aplicar el tema de forma global
                  </CardDescription>
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-all ${
                    copied 
                      ? "bg-green-500/10 border-green-500 text-green-400" 
                      : "bg-[oklch(0.08_0.005_228)] border-[oklch(0.18_0.005_228)] hover:bg-[oklch(0.14_0.005_228)] text-neutral-300"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      Copiar CSS
                    </>
                  )}
                </button>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <pre className="text-xs font-mono bg-[oklch(0.08_0.005_228)] p-4 rounded-lg border border-[oklch(0.18_0.005_228)]/40 text-neutral-300 overflow-x-auto max-h-[300px]">
                {getCssCode()}
              </pre>
            </CardContent>
          </Card>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[oklch(0.18_0.005_228)] bg-[oklch(0.1_0.005_228)]/20 px-6 py-6 text-center text-xs text-neutral-500">
        <p>cbaeza.com © 2026. Diseñado para pruebas de desarrollo con Next.js y Tailwind CSS v4.</p>
      </footer>
    </div>
  );
}
