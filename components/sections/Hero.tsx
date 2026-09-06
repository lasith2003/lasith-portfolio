"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, Sparkles, Clock, Terminal, Code2, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { profile } from "@/data/profile";

const roles = [
  "Full-Stack Developer",
  "Software Engineering Intern",
  "Next.js & NestJS Engineer",
  "Spring Boot & Cloud Native",
];

const terminalLines = [
  { text: 'const lasith = {', delay: 0 },
  { text: '  role: "Full-Stack Developer",', delay: 200 },
  { text: '  university: "University of Moratuwa",', delay: 400 },
  { text: '  gpa: 3.73, // Dean\'s List', delay: 600 },
  { text: '  stack: ["Next.js", "Spring Boot", "NestJS", "PostgreSQL"],', delay: 800 },
  { text: '  status: "Open to Internship Opportunities 🚀"', delay: 1000 },
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
    <div ref={ref} className="text-left">
      <p className="text-2xl md:text-3xl font-extrabold tracking-tight">
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
      setTimeout(() => setVisibleLines(i + 1), line.delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#0a0d18]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] font-mono text-xs w-full">
      {/* Terminal header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <div className="flex items-center gap-1.5 ml-2 text-text-muted text-xs">
            <Terminal size={12} className="text-accent" />
            <span>lasith.config.ts</span>
          </div>
        </div>
        <span className="text-[10px] text-accent/80 font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">TypeScript</span>
      </div>
      {/* Terminal content */}
      <div className="p-4 md:p-5 leading-relaxed min-h-[160px] overflow-x-auto">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-slate-600 select-none w-4 text-right shrink-0">
              {i + 1}
            </span>
            <span
              className={
                line.text.startsWith("  role") || line.text.startsWith("  university") ||
                line.text.startsWith("  gpa") || line.text.startsWith("  stack") ||
                line.text.startsWith("  status")
                  ? "text-slate-300"
                  : line.text === "};"
                  ? "text-purple-400"
                  : "text-indigo-400 font-semibold"
              }
            >
              {line.text.includes('"') ? (
                <>
                  {line.text.split('"').map((part, j) =>
                    j % 2 === 0 ? (
                      <span key={j} className="text-slate-300">{part}</span>
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
                  line.text === "};" ? "text-purple-400" : "text-slate-300"
                }>{line.text}</span>
              )}
            </span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="flex gap-2">
            <span className="text-slate-600 w-4 text-right shrink-0">{visibleLines + 1}</span>
            <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

/* Interactive 3D Parallax Avatar Pod with Scanline & Depth */
function InteractiveAvatarCard() {
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

    const rotateX = ((y - centerY) / centerY) * -12; // tilt max 12 deg
    const rotateY = ((x - centerX) / centerX) * 12;

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
    <div className="relative w-full flex flex-col items-center [perspective:1000px]">
      {/* Background Cyber Ambient Aura */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-cyan-500/30 rounded-3xl blur-3xl opacity-75 pointer-events-none animate-pulse-slow" />

      {/* Main 3D Tilted Glass Pod */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.025)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: isHovered
            ? "transform 0.12s ease-out"
            : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative w-full aspect-square max-w-[360px] md:max-w-[390px] rounded-3xl p-3.5 bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(99,102,241,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer group select-none [transform-style:preserve-3d]"
      >
        {/* Dynamic Interactive Mouse Light Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.15), transparent 70%)`,
          }}
        />

        {/* Tech Cyber Corner Brackets */}
        <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-indigo-400 z-30 group-hover:scale-110 transition-transform" />
        <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-indigo-400 z-30 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 z-30 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 z-30 group-hover:scale-110 transition-transform" />

        {/* Inner Avatar Image Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#070a14]">
          
          {/* Animated Avatar Image with Breathing & Micro-Motion */}
          <div className="relative w-full h-full animate-avatar-breathe">
            <Image
              src="/avatar.jpg"
              alt="Lasith Undulanga 3D Developer Avatar"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>

          {/* Holographic Laser Scanline Beam Passing Over Avatar */}
          <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent pointer-events-none animate-scanline z-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

          {/* Smooth Bottom Shadow Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-transparent pointer-events-none z-10" />

          {/* Live Status Pill at Bottom of Avatar Box */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#090d1c]/80 backdrop-blur-xl border border-white/15 shadow-xl z-20 group-hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-white tracking-wide">Lasith Undulanga</span>
            </div>
            <span className="text-[10px] text-cyan-300 font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              Full-Stack Intern
            </span>
          </div>
        </div>
      </div>

      {/* Floating Interactive Orbit Badges (Floating Smoothly around Avatar) */}
      
      {/* Top-Right Badge: Dean's List */}
      <div className="absolute -top-3.5 -right-2 md:-right-5 px-3.5 py-2 rounded-2xl bg-[#0e1224]/90 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(99,102,241,0.35)] flex items-center gap-2.5 z-40 animate-float-slow hover:scale-105 transition-transform cursor-pointer">
        <div className="w-6 h-6 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
          <Sparkles size={13} className="animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-medium leading-none">UOM Undergrad</p>
          <p className="text-xs font-extrabold text-white leading-tight mt-0.5">Dean&apos;s List · 3.73</p>
        </div>
      </div>

      {/* Bottom-Left Badge: Core Stack */}
      <div className="absolute -bottom-3.5 -left-2 md:-left-5 px-3.5 py-2 rounded-2xl bg-[#0e1224]/90 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-2.5 z-40 animate-float-delayed hover:scale-105 transition-transform cursor-pointer">
        <div className="w-6 h-6 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
          <Code2 size={13} />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-medium leading-none">Core Tech</p>
          <p className="text-xs font-extrabold text-white leading-tight mt-0.5">Next.js &amp; Spring</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const typedText = useTypewriter(roles);
  const [viewMode, setViewMode] = useState<"avatar" | "code">("avatar");

  return (
    <section id="home" className="relative flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-width section-padding pt-28 pb-12 md:pt-36 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">

          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Software Engineering Internships
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Lasith Undulanga
              </span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="h-9 mb-5 flex items-center">
              <span className="text-lg md:text-2xl font-semibold text-slate-300 flex items-center">
                <span className="text-indigo-400 mr-2">&gt;</span>
                <span className="text-cyan-300">{typedText}</span>
                <span className="animate-pulse ml-1 text-accent font-bold">_</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-base md:text-lg text-slate-300/90 leading-relaxed max-w-xl mb-7 font-normal">
              {profile.bio}
            </p>

            {/* Featured project highlight — Durdans LIMS */}
            <div className="w-full max-w-xl p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-indigo-500/40 transition-all group">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Enterprise Healthcare System</span>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-medium border border-indigo-500/30">Spring Boot 3.5 &amp; Java 21</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white font-semibold">Durdans Hospital LIMS</strong> - Enterprise Laboratory Information Management System covering clinical verification &amp; Kafka event auditing.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-view-projects"
                className="shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                <Sparkles size={16} />
                Explore Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-contact"
              >
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={profile.resumeUrl}
                id="hero-download-cv"
                className="border border-white/10 hover:border-accent/40"
              >
                <Download size={16} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xs text-slate-400 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                {[
                  { href: profile.github, icon: Github, label: "GitHub", id: "hero-github-link" },
                  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", id: "hero-linkedin-link" },
                  { href: `mailto:${profile.email}`, icon: Mail, label: "Email", id: "hero-email-link" },
                ].map(({ href, icon: Icon, label, id }) => (
                  <a
                    key={label}
                    href={href}
                    id={id}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/40 transition-all text-xs font-medium backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) — Interactive 3D Animated Avatar Pod */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 w-full max-w-md mx-auto">
            
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl mb-4 shadow-inner">
              <button
                onClick={() => setViewMode("avatar")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  viewMode === "avatar"
                    ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <User size={13} />
                3D Avatar
              </button>
              <button
                onClick={() => setViewMode("code")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  viewMode === "code"
                    ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal size={13} />
                Config Preview
              </button>
            </div>

            {viewMode === "avatar" ? (
              /* Live Animated 3D Avatar Pod */
              <InteractiveAvatarCard />
            ) : (
              /* Live Terminal Code View */
              <div className="w-full">
                <TerminalCard />
              </div>
            )}

            {/* Micro Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-6 w-full border-t border-white/10 pt-6 px-2">
              {profile.stats.map((s) => (
                <AnimatedCounter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  label={s.label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Looping Tech Marquee */}
      <TechMarquee />
    </section>
  );
}
