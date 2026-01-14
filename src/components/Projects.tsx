import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, Globe } from "lucide-react";
import projectAnnualReport from "@/assets/project-annual-report.png";
import projectExamApp from "@/assets/project-exam-app.png";
import projectIrrigation from "@/assets/project-irrigation.png";

const Projects = () => {
  const projects = [
    {
      title: "Annual Report Portal",
      subtitle: "University Management System",
      description: "A full-stack web application to manage and publish university annual reports with structured data handling and responsive UI. Designed for modern institutions and futuristic digital products, it features glowing neon visuals, immersive UI, and a dynamic tone.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      image: projectAnnualReport,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "ExamPrep Mobile App",
      subtitle: "Educational Platform",
      description: "A mobile exam preparation application with secure authentication and real-time database integration for seamless learning. Built with Flutter and Firebase for cross-platform performance.",
      tech: ["Flutter", "Firebase", "Dart"],
      image: projectExamApp,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Smart Irrigation System",
      subtitle: "IoT Automation",
      description: "An IoT-based smart irrigation system using soil moisture sensors to automate water usage and optimize agricultural efficiency. Features real-time monitoring and intelligent control systems.",
      tech: ["IoT", "Embedded Systems", "Sensors"],
      image: projectIrrigation,
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hands-on projects demonstrating practical implementation of concepts.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title} 
              delay={index * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content - Left Side */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary font-medium text-sm tracking-wide uppercase mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 text-sm mb-4">{project.subtitle}</p>

                  {/* Description Card */}
                  <div className="glass-card p-6 mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-secondary/50 border border-glass-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Globe className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Image - Right Side */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative group">
                    {/* Glow effect behind image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    {/* Image container */}
                    <div className="relative rounded-2xl overflow-hidden border border-glass-border shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
