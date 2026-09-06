import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasith Undulanga",
  description:
    "IT undergraduate at the University of Moratuwa. Building scalable full-stack web applications with Next.js, NestJS, Spring Boot, and PostgreSQL. Currently seeking a Software Engineering internship.",
  keywords: [
    "Lasith Undulanga",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "Spring Boot",
    "Portfolio",
    "University of Moratuwa",
    "Sri Lanka",
  ],
  authors: [{ name: "Lasith Undulanga" }],
  creator: "Lasith Undulanga",
  openGraph: {
    type: "website",
    title: "Lasith Undulanga — Software Engineering Intern | Full-Stack Developer",
    description:
      "IT undergraduate at the University of Moratuwa building scalable full-stack web applications.",
    siteName: "Lasith Undulanga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lasith Undulanga — Software Engineering Intern | Full-Stack Developer",
    description:
      "IT undergraduate at the University of Moratuwa building scalable full-stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
