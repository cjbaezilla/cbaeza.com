"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { useTranslation } from "@/context/I18nContext";

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch {
        // Fallback a copiar al portapapeles
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground hover:bg-muted/80 hover:border-primary/40 transition-all cursor-pointer shadow-xs"
      title="Compartir este artículo"
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-green-500" />
          <span className="text-green-500">{(t("blog.copiedToClipboard") as string) || "¡Enlace copiado!"}</span>
        </>
      ) : (
        <>
          <Share2 className="size-3.5 text-primary" />
          <span>{(t("blog.shareArticle") as string) || "Compartir"}</span>
        </>
      )}
    </button>
  );
}
