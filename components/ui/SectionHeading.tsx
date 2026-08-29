"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="font-mono text-accent text-sm font-semibold tracking-widest">
          {number}
        </span>
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent/40 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan-accent",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
