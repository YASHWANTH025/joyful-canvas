import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import OrbitalElement from "@/components/OrbitalElement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <WorkExperience />
        <OrbitalElement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
