"use client";

import { Github, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(35px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  }};
}

export function Projects() {
  const heading = useScrollReveal(0);
  const card0 = useScrollReveal(0);
  const card1 = useScrollReveal(100);
  const card2 = useScrollReveal(150);
  const card3 = useScrollReveal(200);
  const cta = useScrollReveal(250);

  const reveals = [card0, card1, card2, card3];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-[#060810]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <div ref={heading.ref} style={heading.style}>
          <SectionHeading
            number="03"
            title="Featured Projects"
            subtitle="Engineered systems spanning concurrency-safe web platforms, enterprise clinical LIMS, computer vision IoT, and full-stack web publishing."
          />
        </div>

        {/* 01-04 Projects Grid — 2x2 Clean Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={reveals[i]?.ref}
              style={reveals[i]?.style}
              className="h-full"
            >
              <ProjectCard project={project} featured={project.featured} />
            </div>
          ))}
        </div>

        {/* Bottom GitHub Profile Banner */}
        <div ref={cta.ref} style={cta.style} className="text-center">
          <a
            href="https://github.com/lasith2003"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wide backdrop-blur-2xl bg-white/[0.04] text-white border border-white/15 hover:border-indigo-400/50 hover:bg-indigo-600/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-[0.98] transition-all duration-300 group"
          >
            <Github size={18} className="text-indigo-400 group-hover:text-white transition-colors" />
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight size={15} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
