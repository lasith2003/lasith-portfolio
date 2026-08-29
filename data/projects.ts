export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
  status: "In Progress" | "Ongoing" | "Completed";
  highlight?: string;
  featured: boolean;
  image?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "courthub",
    name: "Multi-Vendor Sports Court Booking Platform",
    description:
      "Full-stack booking platform with role-based access control for Admin, Venue Owner, and Customer roles. Features a concurrency-safe booking engine preventing double-bookings via DB transactions and row-level locking, real-time venue/court management, and a secure payment and booking confirmation flow with automated notifications.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS CDK",
      "GitHub Actions",
    ],
    github: "https://github.com/lasith2003/sports-court-booking-system",
    demo: null,
    status: "Ongoing",
    highlight: "Concurrency-safe booking engine (DB transactions + row-level locking)",
    featured: true,
    image: "/projects/courthub.jpg",
  },
  {
    id: "durdans-lims",
    name: "Durdans Hospital LIMS",
    description:
      "Enterprise Laboratory Information Management System covering the full clinical-lab lifecycle. Co-developed on a Gradle multi-module Java 21 / Spring Boot backend with PostgreSQL, Kafka, and a Next.js frontend. Implemented the Technical Verification workflow, Clinical Authorization workflow, and the Report Dispatch & Delivery module.",
    stack: [
      "Java 21",
      "Spring Boot 3.5",
      "PostgreSQL",
      "Kafka",
      "Keycloak",
      "AWS S3",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    github: "https://github.com/kalanas210/durdans-lims",
    demo: null,
    status: "Completed",
    highlight: "Event-driven architecture (Kafka) with full audit traceability",
    featured: true,
    image: "/projects/durdans-lims.jpg",
    note: "Team project — repo hosted under a teammate's GitHub account",
  },
  {
    id: "anpr-parking",
    name: "Vehicle Number-Plate Detection & Smart Car-Parking System",
    description:
      "End-to-end vehicle number-plate recognition system (Roboflow-trained YOLO + EasyOCR) paired with a smart car-parking system featuring duration tracking, automated billing, and an admin dashboard for live occupancy and unauthorized-access alerts.",
    stack: [
      "Python",
      "YOLO (Roboflow)",
      "EasyOCR",
      "TensorFlow",
      "Docker",
      "OpenAI",
      "ESP32",
    ],
    github: "https://github.com/kalanas210/anpr-ai-parking-system",
    demo: null,
    status: "Completed",
    featured: false,
    image: "/projects/anpr-parking.jpg",
    note: "Team project — repo hosted under a teammate's GitHub account",
  },
  {
    id: "blog-app",
    name: "Blog Application",
    description:
      "A full-featured blog platform with Markdown-based rich text editing, user authentication, category tagging, comment system, and a responsive reading experience. Supports author profiles, draft management, and post publishing workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    github: "https://github.com/lasith2003", // [PLACEHOLDER — update with actual repo link]
    demo: null,
    status: "Completed",
    highlight: "Markdown editor with live preview and draft management",
    featured: false,
    image: "/projects/blog-app.jpg",
  },
];
