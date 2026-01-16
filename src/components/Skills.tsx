import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GlowCard from "./GlowCard";
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
      gradient: "from-violet-500 to-purple-600",
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
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 75 },
      ],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS", level: 65 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ],
      gradient: "from-amber-500 to-orange-600",
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
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "AI/ML",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "AI Fundamentals", level: 70 },
        { name: "OCI AI", level: 65 },
        { name: "Jupyter/Colab", level: 80 },
      ],
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section id="skills" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <GlowCard className="h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </motion.div>
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
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-primary font-medium"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.gradient} relative`}
                          >
                            <motion.div
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
