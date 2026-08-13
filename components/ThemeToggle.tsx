"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center size-9 rounded-full border border-border/70 bg-card/80 text-muted-foreground opacity-50 shadow-sm"
        aria-hidden="true"
      >
        <span className="size-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center size-9 rounded-full border border-border/70 bg-card/80 hover:bg-accent/80 hover:border-primary/40 text-foreground transition-all duration-200 shadow-sm cursor-pointer active:scale-90 group relative"
      aria-label={isDark ? "Cambiar a tema claro estilo Ghibli" : "Cambiar a tema oscuro"}
      title={isDark ? "Modo Claro (Ghibli Crema)" : "Modo Oscuro"}
    >
      <div className="relative size-4 flex items-center justify-center">
        <Sun
          className={`size-4 text-amber-500 transition-all duration-300 absolute ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 group-hover:rotate-45"
          }`}
        />
        <Moon
          className={`size-4 text-emerald-400 transition-all duration-300 absolute ${
            isDark
              ? "rotate-0 scale-100 opacity-100 group-hover:-rotate-12"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
