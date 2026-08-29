<div align="center">

# ⚡ Lasith Undulanga — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, fast, responsive, and recruiter-focused personal portfolio website engineered with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

[✨ Live Demo](https://lasith-portfolio.vercel.app/) · [🐛 Report Issue](https://github.com/lasith2003/lasith-portfolio/issues)

</div>

---

## 🌟 Key Features

- 🎨 **Modern Dark Aesthetics**: Deep slate/indigo palette with subtle glassmorphism and ambient glow effects.
- 🖱️ **Interactive Mouse Spotlight**: Real-time cursor-following radial gradient with background grid mesh.
- 💻 **Live Animated Developer Terminal**: Interactive `lasith.config.ts` type-in terminal preview in Hero.
- 🎞️ **Infinite Tech Marquee**: Seamless horizontally looping tech stack banner powered by SimpleIcons CDN.
- 🔄 **3D Card Hover Tilt**: Perspective-based card tilt with dynamic hover reflection on project showcase.
- 📊 **Scroll Progress Bar**: Gradient scroll indicator integrated into the sticky glassmorphic navbar.
- 📍 **Vertical Glowing Timeline**: Education & Leadership milestones with glowing node indicators.
- 🔔 **Instant Toast Feedback**: 1-click clipboard copy for email and contact information with toast alerts.
- 📱 **100% Responsive**: Tailored for mobile, tablet, laptop, and ultra-wide screens.
- ⚡ **SEO Optimized**: Complete metadata, OpenGraph tags, and fast page load speeds.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, Inter font, SEO metadata
│   ├── page.tsx                # Single-page layout composing all sections
│   └── globals.css             # Design tokens, glassmorphism, scrollbars
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky glass navbar with scroll progress
│   │   └── Footer.tsx          # Social links and back-to-top button
│   ├── sections/
│   │   ├── Hero.tsx            # Typewriter, terminal card, stats, photo ring
│   │   ├── About.tsx           # Bio, Moratuwa / AL / OL timeline, certs
│   │   ├── Skills.tsx          # Category filter + icon badge grid
│   │   ├── Projects.tsx        # Featured 3D tilt cards & status tags
│   │   └── Contact.tsx         # Copy cards, toast triggers & mailto form
│   └── ui/
│       ├── Button.tsx          # Reusable polymorphic button
│       ├── MouseSpotlight.tsx  # Cursor spotlight glow
│       ├── ProjectCard.tsx     # 3D tilt project card
│       ├── SectionHeading.tsx  # Styled section titles with numbering
│       ├── SkillBadge.tsx      # Tech badge with CDN fallback
│       ├── TechMarquee.tsx     # Continuous animated logo ticker
│       └── Toast.tsx           # Lightweight toast notification system
├── data/
│   ├── profile.ts              # Bio, education, contact info, stats
│   ├── skills.ts               # Categorized skills list with icon slugs
│   └── projects.ts             # Projects showcase with tags & highlights
└── public/
    ├── profile.jpeg            # Profile photo
    ├── resume.pdf              # Downloadable CV
    └── projects/               # Project preview mockups
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm / pnpm / yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lasith2003/lasith-portfolio.git
   cd lasith-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 👤 Author

**Lasith Undulanga**
- 🎓 Undergraduate at University of Moratuwa
- 🌐 LinkedIn: [@lasith-undulanga](https://www.linkedin.com/in/lasith-undulanga)
- 🐙 GitHub: [@lasith2003](https://github.com/lasith2003)
- 📧 Email: [ludulanga@gmail.com](mailto:ludulanga@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
