"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Phone, Copy, CheckCheck, Send, MapPin, type LucideIcon } from "lucide-react";
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
    await navigator.clipboard.writeText(value);
    setCopied(true);
    showToast(`${label} copied to clipboard! ✨`, "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 p-5 rounded-2xl bg-surface-2 border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
    >
      <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors shrink-0">
        <Icon size={20} className="text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm font-medium text-text-primary truncate">{value}</p>
      </div>
      {copyable && (
        <button onClick={handleCopy}
          className={cn(
            "p-2 rounded-lg transition-all shrink-0",
            copied ? "text-emerald-400 bg-emerald-400/10" : "text-text-muted hover:text-text-primary hover:bg-surface"
          )}
          title={copied ? "Copied!" : "Copy to clipboard"}>
          {copied ? <CheckCheck size={15} /> : <Copy size={15} />}
        </button>
      )}
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
    <section id="contact" className="py-24 md:py-32 bg-surface/30">
      <div className="container-width section-padding">
        <SectionHeading
          number="04"
          title="Get In Touch"
          subtitle="I'm actively looking for Software Engineering Internship opportunities. Feel free to reach out!"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Whether you&apos;re a recruiter, a fellow developer, or someone with an interesting
              project — my inbox is always open. I&apos;ll do my best to get back to you!
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} copyable />
              <ContactCard icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} copyable />
              <ContactCard icon={Github} label="GitHub" value="github.com/lasith2003" href={profile.github} external />
              <ContactCard icon={Linkedin} label="LinkedIn" value="linkedin.com/in/lasith-undulanga" href={profile.linkedin} external />
            </div>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <MapPin size={14} className="text-accent" />
              <span>Based in {profile.location} · Open to Remote</span>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-surface-2 border border-border">
            <h3 className="text-lg font-bold text-text-primary mb-2">Send a Message</h3>
            {[
              { id: "contact-name", label: "Your Name", type: "text", key: "name", placeholder: "John Doe" },
              { id: "contact-email", label: "Email Address", type: "email", key: "email", placeholder: "you@example.com" },
            ].map(({ id, label, type, key, placeholder }) => (
              <div key={key}>
                <label htmlFor={id} className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-1.5">{label}</label>
                <input id={id} type={type} required placeholder={placeholder}
                  value={formState[key as keyof typeof formState]}
                  onChange={(e) => setFormState((s) => ({ ...s, [key]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm" />
              </div>
            ))}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-1.5">Message</label>
              <textarea id="contact-message" required rows={5}
                placeholder="Tell me about an opportunity or just say hi..."
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm resize-none" />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full" id="contact-submit">
              <Send size={16} />
              Send Message
            </Button>
            <p className="text-xs text-text-muted text-center">Opens your email client with the message pre-filled.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
