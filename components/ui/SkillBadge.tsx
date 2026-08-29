"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon: string;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  const hasIcon = icon && icon.length > 0;

  return (
    <div
      className={cn(
        "group flex items-center gap-2.5 px-3.5 py-2 rounded-xl",
        "bg-surface-2 border border-border",
        "hover:border-accent/40 hover:bg-surface hover:shadow-card-hover",
        "transition-all duration-200 cursor-default",
        className
      )}
    >
      <div className="relative w-5 h-5 shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        {hasIcon ? (
          <Image
            src={`https://cdn.simpleicons.org/${icon}/94a3b8`}
            alt={name}
            width={20}
            height={20}
            className="w-5 h-5 object-contain group-hover:brightness-125 transition-all"
            unoptimized
            onError={(e) => {
              // Replace with a small accent dot on error
              const parent = (e.currentTarget as HTMLImageElement).parentElement;
              if (parent) {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const span = document.createElement("span");
                span.className = "w-2 h-2 rounded-full bg-accent/60 block";
                parent.appendChild(span);
              }
            }}
          />
        ) : (
          <span className="w-2 h-2 rounded-full bg-accent/60 block" />
        )}
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
