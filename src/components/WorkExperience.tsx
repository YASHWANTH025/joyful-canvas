import { motion } from "framer-motion";
import { Smartphone, Palette, Globe, Zap } from "lucide-react";
import WorkCard from "./WorkCard";

const WorkExperience = () => {
  const projects = [
    {
      title: "CIB on the Mobile",
      description: "A comprehensive mobile banking solution with intuitive design and seamless user experience.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
    {
      title: "Design System",
      description: "Created a scalable design system that improved development speed by 40%.",
      icon: <Palette className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      title: "Web Platform",
      description: "Redesigned the web experience focusing on accessibility and performance.",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "Performance App",
      description: "Built a high-performance application with real-time data visualization.",
      icon: <Zap className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-brush text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of the projects I've worked on in the industry for 3+ years now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <WorkCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
