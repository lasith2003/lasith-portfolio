"use client";

import { Github } from "lucide-react";
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
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  }};
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const heading = useScrollReveal(0);
  const card0 = useScrollReveal(0);
  const card1 = useScrollReveal(120);
  const card2 = useScrollReveal(0);
  const card3 = useScrollReveal(120);
  const cta = useScrollReveal(200);

  const featuredReveal = [card0, card1];
  const othersReveal = [card2, card3];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/4 via-transparent to-transparent pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <div ref={heading.ref} style={heading.style}>
          <SectionHeading
            number="03"
            title="Projects"
            subtitle="Things I've built — from enterprise-grade systems to intelligent IoT solutions."
          />
        </div>

        {/* Featured projects — 2 col */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <div key={project.id} ref={featuredReveal[i]?.ref} style={featuredReveal[i]?.style}>
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {others.map((project, i) => (
              <div key={project.id} ref={othersReveal[i]?.ref} style={othersReveal[i]?.style}>
                <ProjectCard project={project} featured={false} />
              </div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div ref={cta.ref} style={cta.style} className="mt-12 text-center">
          <a
            href="https://github.com/lasith2003"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-text-secondary border border-border hover:text-text-primary hover:border-accent/40 hover:bg-surface-2 transition-all"
          >
            <Github size={18} />
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
