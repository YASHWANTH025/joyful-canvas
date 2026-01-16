import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden cursor-none">
      <CustomCursor />
      <ParticleField />
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
