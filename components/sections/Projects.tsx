"use client";

import { Github, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState, useCallback } from "react";

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
  const cta = useScrollReveal(200);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Check window size for slide stepping
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const maxIndex = isMobile ? projects.length - 1 : Math.max(0, projects.length - 2);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-[#060810]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <div ref={heading.ref} style={heading.style} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            number="03"
            title="Featured Projects"
            subtitle="Engineered systems spanning enterprise clinical LIMS, concurrency-safe booking engines, computer vision IoT, and interactive 3D web applications."
          />

          {/* Carousel Desktop Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Project <strong className="text-white">{String(currentIndex + 1).padStart(2, "0")}</strong> of {String(projects.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-3 rounded-2xl bg-white/[0.05] hover:bg-indigo-600 border border-white/15 hover:border-indigo-400/60 text-slate-300 hover:text-white shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-3 rounded-2xl bg-white/[0.05] hover:bg-indigo-600 border border-white/15 hover:border-indigo-400/60 text-slate-300 hover:text-white shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Interactive Cyber Carousel Container */}
        <div
          className="relative overflow-hidden w-full pb-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full lg:w-1/2 flex-shrink-0 px-2 sm:px-3 md:px-4"
              >
                <div className="h-full">
                  <ProjectCard project={project} featured={project.featured} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Selector Pills & Mobile Navigation Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quick Direct Project Jump Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projects.map((project, idx) => {
              const isActive = isMobile
                ? currentIndex === idx
                : currentIndex === idx || currentIndex === idx - 1;
              return (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? "bg-indigo-600/30 text-cyan-300 border-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-105"
                      : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-cyan-400" : "bg-slate-600"}`} />
                  <span>{project.number}</span>
                  <span className="hidden md:inline font-sans font-medium text-slate-300">{project.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Slide Indicator Line on Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom GitHub Profile Banner */}
        <div ref={cta.ref} style={cta.style} className="text-center mt-12">
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
