import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { ToastContainer } from "@/components/ui/Toast";

export default function Home() {
  return (
    <>
      {/* Global interactive effects */}
      <MouseSpotlight />
      <ToastContainer />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
