import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Code2, Database, Cloud, Settings, Brain, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Flutter", level: 70 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS", level: 65 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      title: "Concepts",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "REST APIs", level: 85 },
        { name: "OOP", level: 88 },
        { name: "Data Structures", level: 82 },
        { name: "Agile/SDLC", level: 75 },
      ],
    },
    {
      title: "AI/ML",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "AI Fundamentals", level: 70 },
        { name: "OCI AI", level: 65 },
        { name: "Jupyter/Colab", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative">
      {/* Section background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
              What I Do
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-signature font-medium text-foreground mb-4 glow-text-subtle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Technical Skills
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <motion.div 
                className="glass-card-hover p-6 h-full group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-border/50 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                        >
                          {/* Glow effect on progress bar */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              boxShadow: [
                                "0 0 10px hsl(var(--primary) / 0.3)",
                                "0 0 20px hsl(var(--primary) / 0.5)",
                                "0 0 10px hsl(var(--primary) / 0.3)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;