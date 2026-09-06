"use client";

import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060810] overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container-width section-padding py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-bold text-sm text-white tracking-tight">
              Lasith Undulanga<span className="text-indigo-400">.dev</span>
            </span>
          </div>

          {/* Center Info */}
          <p className="text-xs text-slate-400 text-center font-normal">
            Built with{" "}
            <span className="text-white font-medium">Next.js 14</span>,{" "}
            <span className="text-white font-medium">Tailwind CSS</span> &amp;{" "}
            <span className="text-white font-medium">3D Parallax Glassmorphism</span>
            {" · "}
            <span className="text-slate-300 font-mono">
              © {new Date().getFullYear()} Lasith Undulanga
            </span>
          </p>

          {/* Right: Social icons + Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all hover:scale-105 active:scale-95"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
