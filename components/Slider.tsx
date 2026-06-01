"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/I18nContext";

interface SliderItem {
  title: string;
  tag: string;
  link: string;
  description?: string;
  icon?: string;
}

interface SliderProps {
  items: SliderItem[];
}

export default function Slider({ items }: SliderProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative min-h-[18rem] md:min-h-[19rem] flex flex-col justify-between">
        <div className="relative w-full flex-1 overflow-hidden">
          {items.map((item, index) => {
            const isCurrent = index === activeIndex;
            return (
              <div
                key={index}
                className={`w-full flex flex-col justify-between transition-all duration-500 ease-in-out ${
                  isCurrent
                    ? "relative opacity-100 translate-x-0 scale-100 z-10"
                    : "absolute inset-0 w-full h-full opacity-0 translate-x-full scale-95 pointer-events-none z-0"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                      {item.tag}
                    </span>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 flex items-center justify-center text-primary cursor-pointer transition-colors"
                      aria-label="Article Link"
                    >
                      <i className={`${item.icon || "fa-solid fa-newspaper"} text-xs`}></i>
                    </Link>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground leading-snug">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline group/title"
                    >
                      {item.title}
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-2 text-muted-foreground group-hover/title:text-primary transition-colors inline-block align-middle"></i>
                    </Link>
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-8 border-t border-border/40 pt-4">
          <div className="flex gap-1.5 overflow-x-auto py-1 w-1/2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`size-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-5"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="size-9 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer transition-colors"
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={handleNext}
              className="size-9 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer transition-colors"
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
