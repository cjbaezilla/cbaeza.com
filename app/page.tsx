import Link from "next/link";
import { Palette, ArrowRight, Settings, Sparkles, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Sin degradados de fondo para un diseño más sobrio y minimalista */}

      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-8 relative z-10 py-20">
        
        {/* Badge del Icono de la marca */}
        <div className="bg-card border border-border/80 p-4 rounded-3xl text-foreground/80 mb-2 shadow-sm relative group hover:border-border transition-colors">
          <Palette className="size-12" />
        </div>

        {/* Título y descripción */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            cbaeza.com
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 font-medium">
            Entorno de Pruebas de Temas y Estilos
          </p>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Una plataforma interactiva para visualizar, probar y exportar variables CSS de los 26 colores base de Shadcn UI y Tailwind CSS v4 bajo la arquitectura Base Nova.
          </p>
        </div>

        {/* Botón de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link 
            href="/colors" 
            className={cn(
              buttonVariants({ size: "lg" }), 
              "bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 rounded-xl transition-all shadow-sm border border-border/40 group flex items-center gap-2 cursor-pointer"
            )}
          >
            Ingresar al Playground
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-16 text-left">
          <div className="bg-card/30 backdrop-blur-md border border-border/40 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-foreground/75 p-1.5 bg-foreground/5 rounded-lg w-fit">
              <Sparkles className="size-5" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-2">26 Colores Base</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Prueba paletas cromáticas, neutrales y especiales extraídas directamente de las especificaciones oficiales de oklch de shadcn.
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-md border border-border/40 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-foreground/75 p-1.5 bg-foreground/5 rounded-lg w-fit">
              <Settings className="size-5" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-2">Parámetros Dinámicos</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Modifica el radio de borde de los componentes (0rem a 0.875rem) y simula estados interactivos (deshabilitado, error) al instante.
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-md border border-border/40 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-foreground/75 p-1.5 bg-foreground/5 rounded-lg w-fit">
              <CheckCircle2 className="size-5" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-2">Exportador de Variables</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Copia el código CSS generado de las variables de tema para integrarlo directamente en tu archivo globals.css.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
