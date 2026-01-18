import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p 
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My Work
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-signature font-medium text-foreground mb-4 glow-text-subtle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.span 
                    className="text-primary text-sm tracking-[0.15em] uppercase mb-2 block font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.subtitle}
                  </motion.span>
                  <motion.h3 
                    className="font-signature font-medium text-3xl md:text-4xl text-foreground mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.div 
                    className="glass-card-subtle p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="relative group overflow-hidden rounded-xl glass-card p-2">
                    {/* Glowing border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))",
                      }}
                    />
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Overlay with gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      {/* Floating action button */}
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </motion.div>
                    </div>
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