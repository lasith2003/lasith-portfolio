"use client";

import { useState } from "react";
import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "DevOps & Cloud": Cloud,
  "Tools & Testing": Wrench,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/30">
      <div className="container-width section-padding">
        <SectionHeading
          number="02"
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with to build modern, scalable applications."
          align="center"
        />

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-semibold transition-all",
              activeCategory === null
                ? "bg-accent text-white shadow-accent-sm"
                : "bg-surface-2 text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
            )}
          >
            All
          </button>
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <button
                key={group.category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === group.category ? null : group.category
                  )
                }
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                  activeCategory === group.category
                    ? "bg-accent text-white shadow-accent-sm"
                    : "bg-surface-2 text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
                )}
              >
                <Icon size={14} />
                {group.category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="space-y-8">
          {filtered.map((group) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <div key={group.category}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-bold text-text-secondary tracking-wide uppercase">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
