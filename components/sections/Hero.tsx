"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, Sparkles, Clock, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { profile } from "@/data/profile";

const roles = [
  "Full-Stack Developer",
  "Software Engineering Intern",
  "Next.js & NestJS Engineer",
  "Cloud-Native Builder",
];

const terminalLines = [
  { text: 'const lasith = {', delay: 0 },
  { text: '  role: "Full-Stack Developer",', delay: 200 },
  { text: '  university: "UOM",', delay: 400 },
  { text: '  gpa: 3.75,', delay: 600 },
  { text: '  stack: ["Next.js","NestJS","Spring"],', delay: 800 },
  { text: '  status: "Open to Internships 🚀"', delay: 1000 },
  { text: '};', delay: 1200 },
];

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) setTimeout(() => setDeleting(true), pause);
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") { setDeleting(false); setWordIndex((i) => i + 1); }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function AnimatedCounter({ value, suffix, decimals, label }: {
  value: number; suffix: string; decimals: number; label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const duration = 1500, steps = 60, step = value / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= value) { setCount(value); clearInterval(t); }
          else setCount(parseFloat(cur.toFixed(decimals)));
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl md:text-3xl font-bold">
        <span className="text-gradient-accent">
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        </span>
        <span className="text-accent text-lg">{suffix}</span>
      </p>
      <p className="text-xs text-text-muted mt-1 font-medium">{label}</p>
    </div>
  );
}

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay + 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-[#0d0f16] shadow-card font-mono text-xs md:text-sm w-full max-w-sm">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <div className="flex items-center gap-1.5 ml-3 text-text-muted text-xs">
          <Terminal size={11} />
          <span>lasith.config.ts</span>
        </div>
      </div>
      {/* Terminal content */}
      <div className="p-5 leading-loose min-h-[180px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="text-text-muted mr-3 select-none w-4 text-right shrink-0">
              {i + 1}
            </span>
            <span
              className={
                line.text.startsWith("  role") || line.text.startsWith("  university") ||
                line.text.startsWith("  gpa") || line.text.startsWith("  stack") ||
                line.text.startsWith("  status")
                  ? "text-text-secondary"
                  : line.text === "};"
                  ? "text-purple-400"
                  : "text-accent-light"
              }
            >
              {line.text.includes('"') ? (
                <>
                  {line.text.split('"').map((part, j) =>
                    j % 2 === 0 ? (
                      <span key={j} className="text-text-secondary">{part}</span>
                    ) : (
                      <span key={j} className="text-emerald-400">&quot;{part}&quot;</span>
                    )
                  ).reduce((acc: React.ReactNode[], el, j) => {
                    if (j > 0) acc.push(<span key={`q${j}`}></span>);
                    acc.push(el);
                    return acc;
                  }, [])}
                </>
              ) : (
                <span className={
                  line.text.startsWith("const") ? "text-purple-400" :
                  line.text === "};" ? "text-purple-400" : "text-text-secondary"
                }>{line.text}</span>
              )}
            </span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="flex">
            <span className="text-text-muted mr-3 w-4 text-right shrink-0">{visibleLines + 1}</span>
            <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const typedText = useTypewriter(roles);

  return (
    <section id="home" className="relative flex flex-col justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-width section-padding pt-28 pb-12 md:pt-36 md:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internship Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient-accent">Lasith</span>
              <span className="text-accent">.</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 mb-4">
              <p className="text-xl md:text-2xl font-semibold text-text-secondary">
                <span className="text-accent-light">{typedText}</span>
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
              {profile.bio}
            </p>

            {/* Currently building card */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-2 border border-border mb-8 max-w-md hover:border-accent/30 transition-colors">
              <div className="mt-0.5 p-1.5 rounded-lg bg-amber-500/10 shrink-0">
                <Clock size={14} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-400 mb-0.5 tracking-wide uppercase">Currently Building</p>
                <p className="text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">CourtHub</span>
                  {" "}— Multi-Vendor Sports Court Booking Platform with concurrency-safe engine
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button variant="primary" size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-view-projects">
                <Sparkles size={16} />
                View My Work
              </Button>
              <Button variant="secondary" size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-contact">
                Get In Touch
              </Button>
              <Button variant="ghost" size="lg" href={profile.resumeUrl} id="hero-download-cv">
                <Download size={16} />
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-text-muted font-medium">Find me on</span>
              <div className="flex items-center gap-2">
                {[
                  { href: profile.github, icon: Github, label: "GitHub", id: "hero-github-link" },
                  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", id: "hero-linkedin-link" },
                  { href: `mailto:${profile.email}`, icon: Mail, label: "Email", id: "hero-email-link" },
                ].map(({ href, icon: Icon, label, id }) => (
                  <a key={label} href={href} id={id}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 border border-border hover:border-accent/30 transition-all text-sm font-medium">
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo + Terminal */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-6 shrink-0">
            {/* Photo with gradient ring */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-cyan-accent/20 blur-xl" />
              <div className="relative w-52 h-52 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-purple-500 to-cyan-accent p-0.5 animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <Image src={profile.photoUrl} alt="Lasith Undulanga" fill className="object-cover object-top" priority />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-3 -left-6 px-3 py-2 rounded-xl glass border border-border shadow-card text-xs font-semibold text-text-primary whitespace-nowrap">
                🎓 UOM · Dean&apos;s List
              </div>
              <div className="absolute -top-3 -right-4 px-3 py-2 rounded-xl glass border border-border shadow-card text-xs font-semibold text-text-primary">
                GPA <span className="text-accent">3.75</span>
              </div>
            </div>

            {/* Terminal card */}
            <TerminalCard />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm md:max-w-md border-t border-border pt-8">
          {profile.stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
          ))}
        </div>
      </div>

      {/* Tech Marquee — seamlessly placed at bottom without overlapping elements */}
      <TechMarquee />
    </section>
  );
}
