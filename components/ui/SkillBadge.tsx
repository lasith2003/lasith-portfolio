"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon: string;
  color?: string;
  className?: string;
}

export function SkillBadge({ name, icon, color, className }: SkillBadgeProps) {
  const hasIcon = icon && icon.length > 0;

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl",
        "bg-white/[0.03] border border-white/10 backdrop-blur-md",
        "hover:bg-white/[0.08] hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
        "hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none",
        className
      )}
    >
      {/* Glowing Icon Container */}
      <div
        className="relative w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-1 shrink-0 group-hover:scale-110 transition-transform shadow-inner"
        style={{
          borderColor: color ? `${color}40` : undefined,
        }}
      >
        {hasIcon ? (
          <Image
            src={`https://cdn.simpleicons.org/${icon}`}
            alt={name}
            width={18}
            height={18}
            className="w-4 h-4 object-contain filter group-hover:brightness-110 transition-all"
            unoptimized
            onError={(e) => {
              const parent = (e.currentTarget as HTMLImageElement).parentElement;
              if (parent) {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const span = document.createElement("span");
                span.className = "w-2.5 h-2.5 rounded-full block";
                span.style.backgroundColor = color || "#6366f1";
                parent.appendChild(span);
              }
            }}
          />
        ) : (
          <span
            className="w-2.5 h-2.5 rounded-full block"
            style={{ backgroundColor: color || "#6366f1" }}
          />
        )}
      </div>

      {/* Name */}
      <span className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
        {name}
      </span>
    </div>
  );
}
