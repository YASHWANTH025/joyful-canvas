import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle OCI AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
    },
    {
      title: "React Front-End Development",
      issuer: "Coursera",
      year: "2025",
    },
    {
      title: "Flutter Development",
      issuer: "Infosys",
      year: "2025",
    },
    {
      title: "CertNexus AI Practitioner",
      issuer: "CertNexus",
      year: "2024",
    },
    {
      title: "Data Security and Privacy",
      issuer: "Coursera",
      year: "2023",
    },
  ];

  const internship = {
    title: "AI + Sustainability Virtual Internship",
    organization: "1M1B — IBM SkillsBuild — AICTE",
    period: "Dec 2025",
    description: "Worked on AI-driven sustainability problem statements and industry-aligned workflows.",
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-20 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">
              Achievements
            </p>
            <h2 className="text-4xl md:text-5xl font-brush text-foreground mb-4">
              Certifications & Experience
            </h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </div>
        </ScrollReveal>

        {/* Internship Card */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-background border border-foreground rounded-lg p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-lg bg-foreground flex items-center justify-center text-background text-2xl font-bold">
                AI
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {internship.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                    Internship
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">{internship.organization}</p>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar className="w-4 h-4" />
                  {internship.period}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{internship.description}</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-border rounded-lg p-5 group cursor-pointer hover:border-foreground"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-medium text-sm text-foreground mb-1 group-hover:text-muted-foreground transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <span className="text-xs font-medium text-foreground">{cert.year}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-shrink-0" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;