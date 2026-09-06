"use client";

import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#060810] overflow-hidden">
      {/* Subtle glowing top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="container-width section-padding py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight">
                Lasith Undulanga<span className="text-indigo-400">.dev</span>
              </span>
              <p className="text-[11px] text-slate-400 font-normal">
                Full-Stack Developer 
              </p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace("#", "");
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Social Channels & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/40 transition-all shadow-sm"
              aria-label="Email"
              title="Email"
            >
              <Mail size={15} />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-400/50 shadow-sm transition-all group"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-Line: Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Lasith Undulanga. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
