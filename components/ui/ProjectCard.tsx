"use client";

import { cn } from "@/lib/utils";
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowUpRight, Layers, ShieldCheck, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setSpotlight({ x: 50, y: 50 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div className="[perspective:1000px] h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.015)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: isHovered
            ? "transform 0.12s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className={cn(
          "group relative flex flex-col h-full rounded-3xl overflow-hidden",
          "bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-[#0a0d18]/90",
          "border border-white/10 backdrop-blur-2xl",
          "hover:border-indigo-500/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]",
          "transition-all duration-300",
          featured && "ring-1 ring-indigo-500/30",
          className
        )}
      >
        {/* Dynamic Interactive Light Sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-3xl"
          style={{
            background: `radial-gradient(circle 280px at ${spotlight.x}% ${spotlight.y}%, rgba(99,102,241,0.15) 0%, transparent 70%)`,
          }}
        />

        {/* Project Image Container */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0a0d18]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/40 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />

            {/* Top Left: Cyber Number Badge + Status */}
            <div className="absolute top-4 left-4 flex items-center gap-2.5 z-30">
              <span className="font-mono text-sm font-black px-3 py-1 rounded-xl bg-black/70 backdrop-blur-xl border border-indigo-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] tracking-wider">
                {project.number}
              </span>

              {featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-indigo-600/90 text-white backdrop-blur-md border border-indigo-400/40 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <Sparkles size={11} />
                  Featured System
                </span>
              )}
            </div>

            {/* Top Right: GitHub & Live Links */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-30">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-black/70 backdrop-blur-xl border border-white/15 text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-400/50 shadow-md transition-all duration-200 hover:scale-110"
                  title="View Source Code on GitHub"
                >
                  <Github size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-indigo-600/90 backdrop-blur-xl border border-indigo-400/40 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-200 hover:scale-110"
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Bottom Tagline on Image */}
            <div className="absolute bottom-3 left-4 right-4 z-20">
              <p className="text-xs font-mono font-medium text-indigo-300/90 uppercase tracking-wider">
                {project.academicContext || "Full-Stack Project"}
              </p>
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-6 relative z-10">
          
          {/* Project Title & Tagline */}
          <div className="mb-3">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
              {project.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-slate-300/90 leading-relaxed mb-5 flex-1 font-normal">
            {project.description}
          </p>

          {/* Highlight Pill */}
          {project.highlight && (
            <div className="mb-5 flex items-start gap-2.5 p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-md">
              <Sparkles size={13} className="text-indigo-400 mt-0.5 shrink-0" />
              <p className="text-xs text-indigo-200 font-medium leading-snug">
                {project.highlight}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] rounded-lg font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Team / Repo Note */}
          {project.note && (
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 italic">
              <span>{project.note}</span>
            </div>
          )}

          {/* GitHub CTA Action Button */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-cyan-300 transition-colors group/link"
            >
              <Github size={14} />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
