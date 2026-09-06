export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
  status: "Completed" | "Featured";
  highlight?: string;
  featured: boolean;
  image?: string;
  note?: string;
  academicContext?: string;
};

export const projects: Project[] = [
  {
    id: "durdans-lims",
    number: "01",
    name: "Durdans Hospital LIMS",
    tagline: "Enterprise Laboratory Information Management System",
    description:
      "Enterprise clinical laboratory information management system covering the complete lab testing lifecycle. Built on a Gradle multi-module Java 21 / Spring Boot 3.5 backend with Kafka event streaming and Next.js frontend. Implemented technical verification for lab technologists, clinical authorization for pathologists, and automated multi-channel report dispatch.",
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
    status: "Featured",
    highlight: "Event-driven architecture (Kafka) with full clinical audit traceability",
    featured: true,
    image: "/projects/durdans-lims.jpg",
    note: "Team project — repo hosted under teammate's GitHub account",
    academicContext: "UOM 2nd-Year Group Project",
  },
  {
    id: "courthub",
    number: "02",
    name: "CourtHub",
    tagline: "Multi-Vendor Sports Court Booking Platform",
    description:
      "Full-stack sports booking platform engineered with a concurrency-safe booking engine that prevents double-bookings via PostgreSQL database transactions and row-level locking. Features role-based access control for Admins, Venue Owners, and Customers, real-time availability calendar, and automated booking notifications.",
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
    status: "Featured",
    highlight: "Concurrency-safe slot engine (Row-Level Locking + DB Transactions) with AWS CDK IaC",
    featured: true,
    image: "/projects/courthub.jpg",
    academicContext: "Individual Full-Stack Project",
  },
  {
    id: "anpr-parking",
    number: "03",
    name: "Smart Car-Parking & ANPR System",
    tagline: "Computer Vision & IoT Automated Vehicle Parking",
    description:
      "End-to-end automated smart parking system pairing Roboflow-trained YOLO object detection and EasyOCR for real-time license plate recognition. Features automated duration billing, occupancy tracking dashboard, unauthorized-access alerts, and physical IoT ESP32 P10 LED display integration.",
    stack: [
      "Python",
      "YOLO (Roboflow)",
      "EasyOCR",
      "TensorFlow",
      "Docker",
      "OpenAI",
      "ESP32",
      "IoT",
    ],
    github: "https://github.com/kalanas210/anpr-ai-parking-system",
    demo: null,
    status: "Completed",
    highlight: "YOLO Computer Vision model + IoT ESP32 real-time display hardware integration",
    featured: false,
    image: "/projects/anpr-parking.jpg",
    note: "Team project — repo hosted under teammate's GitHub account",
    academicContext: "UOM 1st-Year Group Project",
  },
  {
    id: "blog-app",
    number: "04",
    name: "Blog Hut",
    tagline: "Full-Featured PHP & MySQL Web Publishing Platform",
    description:
      "Modern, maintainable web publishing platform built for the University of Moratuwa IN2120 module. Features secure user authentication with password recovery, rich post CRUD with image uploads, AJAX-powered instant comment and reaction engine, dynamic category search, and a comprehensive admin moderation panel.",
    stack: [
      "PHP 8",
      "MySQL 8",
      "JavaScript (ES6)",
      "Bootstrap 5",
      "HTML5",
      "CSS3",
      "Apache",
    ],
    github: "https://github.com/lasith2003/blog-app",
    demo: null,
    status: "Completed",
    highlight: "AJAX-driven reaction & comment system with full role-based admin moderation",
    featured: false,
    image: "/projects/blog-app.jpg",
    academicContext: "UOM IN2120 Web Programming Project",
  },
  {
    id: "portfolio-website",
    number: "05",
    name: "Personal Developer Portfolio",
    tagline: "Interactive 3D Engineering Portfolio & System Showcase",
    description:
      "Modern, high-performance personal developer portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features an interactive 3D Pixar developer avatar with real-time cursor parallax tilt, holographic laser scanline animations, a 3D cyber skills matrix, and a floating glassmorphic capsule navbar.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Netlify / Vercel",
    ],
    github: "https://github.com/lasith2003/lasith-portfolio",
    demo: "https://lasith-undulanga.netlify.app",
    status: "Completed",
    highlight: "Interactive 3D Avatar with real-time cursor parallax tilt & holographic scanline shaders",
    featured: false,
    image: "/projects/portfolio-preview.jpg",
    academicContext: "Personal Portfolio & Branding",
  },
];
