import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import projectAnnualReport from "@/assets/project-annual-report.png";
import projectExamApp from "@/assets/project-exam-app.png";
import projectIrrigation from "@/assets/project-irrigation.png";

const Projects = () => {
  const projects = [
    {
      title: "Annual Report Portal",
      subtitle: "University Management System",
      description: "A full-stack web application to manage and publish university annual reports with structured data handling and responsive UI.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      image: projectAnnualReport,
    },
    {
      title: "ExamPrep Mobile App",
      subtitle: "Educational Platform",
      description: "A mobile exam preparation application with secure authentication and real-time database integration for seamless learning.",
      tech: ["Flutter", "Firebase", "Dart"],
      image: projectExamApp,
    },
    {
      title: "Smart Irrigation System",
      subtitle: "IoT Automation",
      description: "An IoT-based smart irrigation system using soil moisture sensors to automate water usage and optimize agricultural efficiency.",
      tech: ["IoT", "Embedded Systems", "Sensors"],
      image: projectIrrigation,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-signature font-medium text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </div>
        </ScrollReveal>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-muted-foreground text-sm tracking-[0.15em] uppercase mb-2 block">
                    {project.subtitle}
                  </span>
                  <h3 className="font-signature font-medium text-3xl md:text-4xl text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative group overflow-hidden rounded-lg border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;