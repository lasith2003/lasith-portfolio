export type SkillItem = {
  name: string;
  icon: string;
  color?: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  description: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    description: "Strong foundation in object-oriented, typed, and functional paradigms",
    items: [
      { name: "Java", icon: "openjdk", color: "#ED8B00" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "SQL", icon: "postgresql", color: "#4169E1" },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    description: "Building responsive, modern, high-performance web applications",
    items: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "HTML5 / CSS3", icon: "html5", color: "#E34F26" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    description: "Architecting scalable RESTful services, microservices & concurrency control",
    items: [
      { name: "Spring Boot 3.5", icon: "spring", color: "#6DB33F" },
      { name: "NestJS", icon: "nestjs", color: "#E0234E" },
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "REST APIs", icon: "fastapi", color: "#009688" },
    ],
  },
  {
    category: "Databases & ORM",
    icon: "database",
    description: "Designing ACID-compliant schemas, transactions & row-level locking",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Prisma ORM", icon: "prisma", color: "#2D3748" },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    description: "Containerization, infrastructure as code & automated CI/CD pipelines",
    items: [
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
      { name: "AWS CDK & S3", icon: "amazonwebservices", color: "#FF9900" },
      { name: "Vercel", icon: "vercel", color: "#FFFFFF" },
    ],
  },
  {
    category: "Tools & Collaboration",
    icon: "wrench",
    description: "Modern developer tooling, API testing, and agile workflows",
    items: [
      { name: "Git & GitHub", icon: "github", color: "#F05032" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Jira", icon: "jira", color: "#0052CC" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
    ],
  },
];
