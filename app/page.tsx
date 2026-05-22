import Link from "next/link";
import { Palette, ArrowRight, Settings, Sparkles, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Fondos degradados decorativos */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-8 relative z-10 py-20">
        
        {/* Badge del Icono de la marca */}
        <div className="bg-card border border-border p-4 rounded-3xl text-purple-400 mb-2 shadow-2xl relative group hover:border-purple-500/50 transition-colors">
          <Palette className="size-12 animate-pulse" />
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
              "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 font-semibold px-8 py-6 rounded-xl shadow-lg shadow-purple-500/20 active:translate-y-0.5 transition-all group flex items-center gap-2 cursor-pointer"
            )}
          >
            Ingresar al Playground
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-16 text-left">
          <div className="bg-card/50 backdrop-blur-md border border-border/60 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-purple-400 p-1.5 bg-purple-500/10 rounded-lg w-fit">
              <Sparkles className="size-5" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-2">26 Colores Base</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Prueba paletas cromáticas, neutrales y especiales extraídas directamente de las especificaciones oficiales de oklch de shadcn.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md border border-border/60 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-pink-400 p-1.5 bg-pink-500/10 rounded-lg w-fit">
              <Settings className="size-5" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-2">Parámetros Dinámicos</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Modifica el radio de borde de los componentes (0rem a 0.875rem) y simula estados interactivos (deshabilitado, error) al instante.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md border border-border/60 p-6 rounded-2xl flex flex-col gap-2">
            <div className="text-amber-400 p-1.5 bg-amber-500/10 rounded-lg w-fit">
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
