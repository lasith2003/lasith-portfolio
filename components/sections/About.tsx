"use client";

import { GraduationCap, MapPin, Award, Users, BookOpen, School, Sparkles, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#070912]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="A snapshot of my background, academic excellence, leadership experience, and verified certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 cols) — Bio & Highlights */}
          <div
            ref={bio.ref}
            style={{
              opacity: bio.visible ? 1 : 0,
              transform: bio.visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-indigo-400" />
                Engineering Philosophy
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4 font-normal">
                I&apos;m an <strong className="text-white font-semibold">IT undergraduate at the University of Moratuwa</strong> with a strong focus on building scalable full-stack web applications and robust distributed systems.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4 font-normal">
                My hands-on experience includes developing <span className="text-indigo-300 font-medium">concurrency-safe transaction engines</span>, enterprise laboratory workflows with <span className="text-cyan-300 font-medium">Spring Boot &amp; Kafka</span>, and containerized cloud pipelines using <span className="text-indigo-300 font-medium">Docker &amp; AWS CDK</span>.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6 font-normal">
                Currently seeking a <span className="text-white font-semibold">Software Engineering Internship</span> where I can apply my engineering skills to impactful enterprise applications.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-indigo-400" />
                  <span>{profile.location} · Open to Remote</span>
                </div>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Ready to Join
                </span>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-1">Academic Standing</p>
                <p className="text-base font-bold text-white">Dean&apos;s List</p>
                <p className="text-xs text-slate-400 mt-0.5">CGPA 3.73 / 4.00</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">Primary Track</p>
                <p className="text-base font-bold text-white">Full-Stack Dev</p>
                <p className="text-xs text-slate-400 mt-0.5">Next.js &amp; Spring Boot</p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) — Education, Leadership, & Certifications */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Education Timeline Card */}
            <div
              ref={edu.ref}
              style={{
                opacity: edu.visible ? 1 : 0,
                transform: edu.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
              className="p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Education History</h3>
                  <p className="text-xs text-slate-400">Academic milestones and performance</p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-indigo-500/25 space-y-6">
                
                {/* University of Moratuwa */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#070912] flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-indigo-400">2024 – Present</span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      Dean&apos;s List (Sem 1) · CGPA 3.73 / 4.00
                    </span>
                  </div>
                  <p className="font-bold text-white text-sm md:text-base mt-1">B.Sc. (Hons) in Information Technology &amp; Management</p>
                  <p className="text-xs text-slate-400 mt-0.5">Faculty of Information Technology, University of Moratuwa</p>
                </div>

                {/* G.C.E. Advanced Level */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500/50 bg-[#070912] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-400">2022</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      Z-score: 1.105
                    </span>
                  </div>
                  <p className="font-bold text-white text-sm mt-1">G.C.E. Advanced Level - Biological Science Stream</p>
                  <p className="text-xs text-slate-400 mt-0.5">Rajapaksha Central College · Physics (C), Chemistry (B), Biology (C)</p>
                </div>

                {/* G.C.E. Ordinary Level */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500/40 bg-[#070912] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/40" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-400">2018</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      8 A&apos;s · 1 B (A8 · B1)
                    </span>
                  </div>
                  <p className="font-bold text-white text-sm mt-1">G.C.E. Ordinary Level</p>
                  <p className="text-xs text-slate-400 mt-0.5">Rajapaksha Central College</p>
                </div>

              </div>
            </div>

            {/* 2. Leadership & Extracurriculars */}
            <div
              ref={leadership.ref}
              style={{
                opacity: leadership.visible ? 1 : 0,
                transform: leadership.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
              className="p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Leadership &amp; Community Roles</h3>
                  <p className="text-xs text-slate-400">Active university leadership and society engagements</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.leadership.map((role, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Briefcase size={12} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-white leading-snug">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Certifications & Courses */}
            <div
              ref={certs.ref}
              style={{
                opacity: certs.visible ? 1 : 0,
                transform: certs.visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
              className="p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">Verified Certifications</h3>
                  <p className="text-xs text-slate-400">Industry &amp; Academic credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-white leading-snug">
                        {cert.name}
                      </p>
                      <ShieldCheck size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                      <span className="text-cyan-300 font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {cert.issuer}
                      </span>
                      {cert.date && <span>{cert.date}</span>}
                    </div>
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
