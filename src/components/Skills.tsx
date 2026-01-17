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
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-signature font-medium text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <motion.div 
                className="bg-background border border-border rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center text-background">
                    {category.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
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
                        <span className="text-sm text-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full bg-foreground"
                        />
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