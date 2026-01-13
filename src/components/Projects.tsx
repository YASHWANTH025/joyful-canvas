import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, Smartphone, Globe, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Annual Report Portal",
      subtitle: "University Management System",
      description: "A full-stack web application to manage and publish university annual reports with structured data handling and responsive UI.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-600",
      featured: true,
    },
    {
      title: "ExamPrep Mobile App",
      subtitle: "Educational Platform",
      description: "A mobile exam preparation application with secure authentication and real-time database integration for seamless learning.",
      tech: ["Flutter", "Firebase", "Dart"],
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      featured: true,
    },
    {
      title: "Smart Irrigation System",
      subtitle: "IoT Automation",
      description: "An IoT-based smart irrigation system using soil moisture sensors to automate water usage and optimize agricultural efficiency.",
      tech: ["IoT", "Embedded Systems", "Sensors"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Academic Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hands-on projects demonstrating practical implementation of concepts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-card p-6 h-full relative overflow-hidden group ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-lg bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-lg bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="text-xs text-primary font-medium mb-1">{project.subtitle}</p>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary/50 border border-glass-border text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
