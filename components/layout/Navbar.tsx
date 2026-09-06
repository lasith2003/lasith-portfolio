"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download, Code2, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      // Section spy
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-5 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      {/* Scroll progress bar at very top */}
      <div className="fixed top-0 left-0 h-[2.5px] bg-transparent w-full pointer-events-none z-[60]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 transition-all duration-100 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Logo Capsule */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-2xl bg-[#0a0d18]/80 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all group"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white pr-1">
            Lasith<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Center: Floating Capsule Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center p-1.5 rounded-full backdrop-blur-2xl bg-[#0a0d18]/70 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 relative flex items-center gap-1.5",
                      isActive
                        ? "text-white bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Resume CTA Button */}
        <div className="flex items-center gap-2.5">
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide backdrop-blur-2xl bg-indigo-600/90 text-white border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:scale-105 active:scale-[0.98] transition-all duration-300"
          >
            <Download size={13} />
            CV
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-full backdrop-blur-2xl bg-[#0a0d18]/80 border border-white/15 text-slate-300 hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-3xl backdrop-blur-2xl bg-[#0a0d18]/95 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center justify-between",
                    isActive
                      ? "text-white bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.5)] font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(6,182,212,1)]" />}
                </a>
              );
            })}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:bg-indigo-500 transition-all"
            >
              <Download size={14} />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
