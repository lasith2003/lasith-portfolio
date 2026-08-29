"use client";

import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container-width section-padding py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-text-primary">
              Lasith Undulanga
            </span>
          </div>

          {/* Center */}
          <p className="text-xs text-text-muted text-center">
            Built with{" "}
            <span className="text-text-secondary font-medium">Next.js</span>,{" "}
            <span className="text-text-secondary font-medium">Tailwind CSS</span> &{" "}
            <span className="text-text-secondary font-medium">Framer Motion</span>
            {" · "}
            <span className="text-text-secondary">
              © {new Date().getFullYear()} Lasith Undulanga
            </span>
          </p>

          {/* Right: socials + back to top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
