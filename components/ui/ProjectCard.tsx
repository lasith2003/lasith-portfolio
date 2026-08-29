"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, Github, Star, Clock, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

const statusConfig = {
  "In Progress": { icon: Clock, label: "In Progress", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  Ongoing: { icon: Clock, label: "Ongoing", className: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  Completed: { icon: CheckCircle2, label: "Completed", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
};

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  const { icon: StatusIcon, label, className: statusCls } = statusConfig[project.status];
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    setTransform(`perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.015)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.18s ease-out" }}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden",
        "bg-surface-2 border border-border",
        "hover:border-accent/30 shadow-card hover:shadow-card-hover transition-shadow duration-300",
        featured && "ring-1 ring-accent/20",
        className
      )}
    >
      {/* Dynamic cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl"
        style={{ background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,102,241,0.09) 0%, transparent 60%)` }}
      />

      {/* Project Image */}
      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/20 to-transparent" />

          {/* Status + Featured badges overlay */}
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            {featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-black backdrop-blur-sm">
                <Star size={10} className="fill-black" />
                Featured
              </span>
            )}
            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm", statusCls)}>
              <StatusIcon size={10} />
              {label}
            </span>
          </div>

          {/* GitHub link overlay */}
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/80 backdrop-blur-sm text-text-muted hover:text-text-primary hover:bg-surface transition-all"
                title="View on GitHub">
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/80 backdrop-blur-sm text-text-muted hover:text-accent transition-all"
                title="Live Demo">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500" />

      <div className="flex flex-col flex-1 p-5 relative z-10">
        {/* Title */}
        <h3 className="text-base font-bold text-text-primary leading-snug group-hover:text-accent-light transition-colors mb-3">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Highlight pill */}
        {project.highlight && (
          <div className="mb-4 flex items-start gap-2 p-2.5 rounded-xl bg-accent/5 border border-accent/15">
            <Star size={12} className="text-accent mt-0.5 shrink-0" />
            <p className="text-xs text-accent-light font-medium leading-snug">{project.highlight}</p>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech}
              className="px-2.5 py-1 text-xs rounded-lg font-mono font-medium bg-surface border border-border text-text-muted hover:text-text-secondary hover:border-accent/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {project.note && (
          <p className="mt-3 text-xs text-text-muted italic border-t border-border pt-3">{project.note}</p>
        )}
      </div>
    </div>
  );
}
