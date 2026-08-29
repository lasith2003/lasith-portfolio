"use client";

const TECHS = [
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Spring Boot", icon: "spring" },
  { name: "React", icon: "react" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Kafka", icon: "apachekafka" },
  { name: "Prisma", icon: "prisma" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "Vercel", icon: "vercel" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Java", icon: "openjdk" },
  { name: "Figma", icon: "figma" },
  { name: "Postman", icon: "postman" },
];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 mx-3 rounded-xl bg-surface-2 border border-border whitespace-nowrap shrink-0 hover:border-accent/30 transition-colors group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${icon}/6366f1`}
        alt={name}
        width={16}
        height={16}
        className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-sm font-medium text-text-muted group-hover:text-text-secondary transition-colors">
        {name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const doubled = [...TECHS, ...TECHS]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-border bg-surface/50">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex w-max animate-marquee">
        {doubled.map((tech, i) => (
          <TechItem key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
}
