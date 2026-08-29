"use client";

import { GraduationCap, MapPin, Award, Users, BookOpen, School } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export function About() {
  const bio = useScrollReveal();
  const edu = useScrollReveal();
  const leadership = useScrollReveal();
  const certs = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/3 via-transparent to-transparent pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="A little about who I am, where I come from, and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <div
            ref={bio.ref}
            style={{
              opacity: bio.visible ? 1 : 0,
              transform: bio.visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-6">
              I&apos;m an{" "}
              <span className="text-text-primary font-semibold">IT undergraduate at the University of Moratuwa</span>
              {" "}with a passion for building scalable, production-quality software. I specialize in
              full-stack development with{" "}
              <span className="text-accent-light font-medium">Next.js, NestJS, and Spring Boot</span>.
            </p>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-6">
              I enjoy solving complex engineering challenges — from{" "}
              <span className="text-text-primary font-medium">concurrency-safe systems</span> and
              event-driven architectures to deploying cloud-native infrastructure with{" "}
              <span className="text-accent-light font-medium">Docker, AWS CDK</span>, and CI/CD pipelines.
            </p>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-8">
              Currently seeking a{" "}
              <span className="text-text-primary font-semibold">Software Engineering Internship</span>
              {" "}to apply my skills to real-world projects and grow alongside a great engineering team.
            </p>
            <div className="flex items-center gap-2 text-text-muted">
              <MapPin size={16} className="text-accent" />
              <span className="text-sm">{profile.location} · Open to Remote</span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Education Timeline */}
            <div
              ref={edu.ref}
              style={{
                opacity: edu.visible ? 1 : 0,
                transform: edu.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
              className="p-6 rounded-2xl bg-surface-2 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent/10">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-text-primary">Education</h3>
              </div>

              <div className="relative pl-6 border-l border-accent/20 space-y-6">
                {/* 1. University of Moratuwa */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-accent bg-background flex items-center justify-center shadow-accent-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
                  </div>
                  <p className="text-xs font-mono text-accent mb-1">2024 – Present</p>
                  <p className="font-bold text-text-primary text-sm">B.Sc. (Hons) in Information Technology & Management</p>
                  <p className="text-accent-light text-sm mt-0.5">University of Moratuwa, Sri Lanka</p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold text-amber-400 bg-amber-500/10 border-amber-500/20">
                    <Award size={11} />
                    Dean&apos;s List (Semester 1) · CGPA 3.75 / 4.00
                  </div>
                </div>

                {/* 2. G.C.E. Advanced Level */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-accent/50 bg-background flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  </div>
                  <p className="text-xs font-mono text-accent/70 mb-1">2022</p>
                  <p className="font-bold text-text-primary text-sm">G.C.E. Advanced Level</p>
                  <p className="text-text-secondary text-sm mt-0.5">Rajapaksha Central College</p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                      <BookOpen size={10} />
                      Biological Science Stream
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-medium text-cyan-accent bg-cyan-accent/10 border-cyan-accent/20 font-mono">
                      Physics (C) · Chem (B) · Bio (C)
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium text-text-muted bg-surface border-border">
                      Z-score: 1.105
                    </span>
                  </div>
                </div>

                {/* 3. G.C.E. Ordinary Level */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-accent/40 bg-background flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  </div>
                  <p className="text-xs font-mono text-accent/60 mb-1">2018</p>
                  <p className="font-bold text-text-primary text-sm">G.C.E. Ordinary Level</p>
                  <p className="text-text-secondary text-sm mt-0.5">Rajapaksha Central College</p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-semibold text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                      <School size={10} />
                      8 A&apos;s · 1 B (A8 · B1)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div
              ref={leadership.ref}
              style={{
                opacity: leadership.visible ? 1 : 0,
                transform: leadership.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
              className="p-6 rounded-2xl bg-surface-2 border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-accent/10">
                  <Users size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-text-primary">Leadership & Activities</h3>
              </div>
              <div className="relative pl-6 border-l border-accent/20 space-y-4">
                {profile.leadership.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border border-accent/50 bg-surface-2 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-accent/60" />
                    </div>
                    <p className="text-sm text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div
              ref={certs.ref}
              style={{
                opacity: certs.visible ? 1 : 0,
                transform: certs.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
              className="p-6 rounded-2xl bg-surface-2 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-accent/10">
                  <Award size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-text-primary">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <div key={cert.name}
                    className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent/30 transition-all cursor-default group"
                    title={`${cert.issuer}${cert.date ? ` · ${cert.date}` : ""}`}>
                    {cert.name}
                    <span className="ml-1 text-text-muted group-hover:text-text-secondary transition-colors">· {cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
