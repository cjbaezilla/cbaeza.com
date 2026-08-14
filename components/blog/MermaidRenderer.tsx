"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export function MermaidRenderer() {
  const { theme } = useTheme();
  const renderCounter = useRef(0);

  useEffect(() => {
    let isCancelled = false;

    async function initMermaid() {
      const wrappers = document.querySelectorAll(".mermaid-wrapper");
      if (wrappers.length === 0) return;

      try {
        const mermaid = (await import("mermaid")).default;
        const isDark = theme === "dark";

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "inherit",
          themeVariables: isDark
            ? {
                darkMode: true,
                background: "transparent",
                mainBkg: "#0f172a",
                primaryColor: "#3b82f6",
                primaryTextColor: "#f8fafc",
                primaryBorderColor: "#60a5fa",
                lineColor: "#94a3b8",
                secondaryColor: "#1e293b",
                tertiaryColor: "#020817",
                nodeBorder: "#3b82f6",
                clusterBkg: "#1e293b",
                titleColor: "#f8fafc",
                edgeLabelBackground: "#0f172a",
              }
            : {
                darkMode: false,
                background: "transparent",
                mainBkg: "#f8fafc",
                primaryColor: "#2563eb",
                primaryTextColor: "#0f172a",
                primaryBorderColor: "#3b82f6",
                lineColor: "#64748b",
                secondaryColor: "#f1f5f9",
                tertiaryColor: "#ffffff",
                nodeBorder: "#2563eb",
                clusterBkg: "#f1f5f9",
                titleColor: "#0f172a",
                edgeLabelBackground: "#ffffff",
              },
        });

        const nodesToProcess: HTMLElement[] = [];

        wrappers.forEach((wrapper, index) => {
          let pre = wrapper.querySelector("pre.mermaid") as HTMLElement | null;
          let rawCode = wrapper.getAttribute("data-original-code");

          if (!rawCode && pre) {
            rawCode = pre.textContent || "";
            wrapper.setAttribute("data-original-code", rawCode);
          }

          if (rawCode) {
            if (!pre || pre.getAttribute("data-processed") === "true") {
              wrapper.innerHTML = `<pre class="mermaid notranslate">${rawCode}</pre>`;
              pre = wrapper.querySelector("pre.mermaid") as HTMLElement;
            }
            if (pre) {
              pre.removeAttribute("data-processed");
              pre.id = `mermaid-chart-${index}-${renderCounter.current}`;
              nodesToProcess.push(pre);
            }
          }
        });

        renderCounter.current += 1;

        if (!isCancelled && nodesToProcess.length > 0) {
          await mermaid.run({
            nodes: nodesToProcess,
          });
        }
      } catch (error) {
        console.error("Error al renderizar diagramas Mermaid:", error);
      }
    }

    initMermaid();

    return () => {
      isCancelled = true;
    };
  }, [theme]);

  return null;
}
