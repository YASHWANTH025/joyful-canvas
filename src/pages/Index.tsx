import { useState } from "react";
import Navigation from "@/components/Navigation";
import AuroraBackground from "@/components/AuroraBackground";
import LoadingAnimation from "@/components/LoadingAnimation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingAnimation onComplete={() => setIsLoaded(true)} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-background overflow-x-hidden"
          >
            <AuroraBackground />
            <Navigation />
            <main>
              <Hero />
              <LogoMarquee />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;

