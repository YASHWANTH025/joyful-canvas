import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Information Technology",
      institution: "Alliance College of Engineering and Design",
      period: "2022 – 2026",
      score: "CGPA: 7.3",
      current: true,
    },
    {
      degree: "PUC (12th Grade)",
      institution: "Government Junior College, Malur",
      period: "2021",
      score: "Percentage: 71%",
      current: false,
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "Government PU College for Boys, Malur",
      period: "2019",
      score: "Percentage: 75.20%",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">
              Academic Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-brush text-foreground mb-4">
              Education
            </h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.degree} delay={index * 0.15} direction="left">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, type: "spring" }}
                      className={`w-3 h-3 rounded-full ${edu.current ? 'bg-foreground ring-4 ring-foreground/20' : 'bg-border border-2 border-foreground'}`}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 bg-background border border-border rounded-lg p-6 ${edu.current ? 'border-foreground' : ''}`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="px-2 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        {edu.institution}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="text-foreground font-medium">{edu.score}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;