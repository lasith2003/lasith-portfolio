"use client";

import { useState, useRef, useCallback } from "react";
import { Code2, Layout, Server, Database, Cloud, Wrench, Sparkles, Terminal, Cpu, CheckCircle2, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: Layout,
  "Backend & APIs": Server,
  "Databases & ORM": Database,
  "DevOps & Cloud": Cloud,
  "Tools & Collaboration": Wrench,
};

function CyberSkillCard({ group }: { group: SkillCategory }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = categoryIcons[group.category] ?? Code2;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

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
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative h-full flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-300 group overflow-hidden"
      >
        {/* Dynamic Light Sheen */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, rgba(99,102,241,0.18), transparent 70%)`,
          }}
        />

        {/* Tech Corner Accents */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-indigo-400/40 pointer-events-none group-hover:border-indigo-400 transition-colors" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-indigo-400/40 pointer-events-none group-hover:border-indigo-400 transition-colors" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-cyan-400/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-cyan-400/40 pointer-events-none group-hover:border-cyan-400 transition-colors" />

        {/* Card Header */}
        <div className="relative z-10 mb-5">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600/25 transition-all shadow-inner">
                <Icon size={18} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                {group.category}
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {group.items.length} Techs
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {group.description}
          </p>
        </div>

        {/* Skills List */}
        <div className="relative z-10 flex flex-col gap-2 mt-auto">
          {group.items.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-[#070912]">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <SectionHeading
          number="02"
          title="Skills & Technologies"
          subtitle="Full-Stack developer toolchain engineered for enterprise reliability, performance, and clean architecture."
          align="center"
        />

        {/* Category Filter Pills (Floating Capsule Style) */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
              activeCategory === null
                ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400/40 scale-105"
                : "bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/20 hover:text-white"
            )}
          >
            All Categories ({skills.reduce((acc, s) => acc + s.items.length, 0)})
          </button>
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            const isSelected = activeCategory === group.category;
            return (
              <button
                key={group.category}
                onClick={() =>
                  setActiveCategory(isSelected ? null : group.category)
                }
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
                  isSelected
                    ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400/40 scale-105"
                    : "bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/20 hover:text-white"
                )}
              >
                <Icon size={14} />
                {group.category}
              </button>
            );
          })}
        </div>

        {/* 3D Cyber Cards Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((group) => (
            <CyberSkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
