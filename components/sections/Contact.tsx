"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Phone, Copy, CheckCheck, Send, MapPin, Sparkles, ArrowUpRight, MessageSquare, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { showToast } from "@/components/ui/Toast";

function ContactCard({
  icon: Icon, label, value, href, copyable, external,
}: {
  icon: LucideIcon;
  label: string; value: string; href: string; copyable?: boolean; external?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    showToast(`${label} copied to clipboard! ✨`, "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex items-center justify-between gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="p-3 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600/25 transition-all shrink-0 shadow-inner">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold font-mono text-indigo-300/80 uppercase tracking-wider mb-0.5">{label}</p>
          <p className="text-xs md:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">{value}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {copyable && (
          <button
            onClick={handleCopy}
            type="button"
            className={cn(
              "p-2 rounded-xl transition-all border",
              copied
                ? "text-emerald-400 bg-emerald-500/20 border-emerald-500/40"
                : "text-slate-400 hover:text-white bg-white/5 border-white/10 hover:bg-white/10"
            )}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
          </button>
        )}
        {external && (
          <div className="p-2 rounded-xl text-slate-400 group-hover:text-white bg-white/5 border border-white/10 group-hover:border-indigo-400/40 transition-all">
            <ArrowUpRight size={14} />
          </div>
        )}
      </div>
    </a>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[#070912]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <SectionHeading
          number="04"
          title="Get In Touch"
          subtitle="I'm actively seeking Software Engineering Internship opportunities. Whether you have an opening or a project to discuss — let's connect!"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column (5 cols) — Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-400" />
                Let&apos;s Build Together
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Whether you&apos;re a recruiter, a fellow developer, or looking for a fast-learning full-stack intern with production experience — my inbox is always open. I&apos;ll do my best to get back to you promptly!
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-white/10">
                <MapPin size={14} className="text-indigo-400 shrink-0" />
                <span>Based in {profile.location} · Available for On-Site &amp; Remote</span>
              </div>
            </div>

            {/* Contact Action Cards */}
            <div className="flex flex-col gap-3">
              <ContactCard
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                copyable
              />
              <ContactCard
                icon={Phone}
                label="Phone / WhatsApp"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                copyable
              />
              <ContactCard
                icon={Linkedin}
                label="LinkedIn Profile"
                value="linkedin.com/in/lasith-undulanga"
                href={profile.linkedin}
                external
              />
              <ContactCard
                icon={Github}
                label="GitHub Profile"
                value="github.com/lasith2003"
                href={profile.github}
                external
              />
            </div>
          </div>

          {/* Right Column (7 cols) — Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col gap-4 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-indigo-600/15 text-indigo-400">
                  <MessageSquare size={16} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">
                  Send Direct Message
                </h3>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all backdrop-blur-md"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all backdrop-blur-md"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about an internship opportunity or collaborative project..."
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all backdrop-blur-md resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2 shadow-[0_0_25px_rgba(99,102,241,0.4)]"
                id="contact-submit"
              >
                <Send size={15} />
                Send Message via Email
              </Button>

              <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                ⚡ Directly opens your email client pre-filled with the message.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
