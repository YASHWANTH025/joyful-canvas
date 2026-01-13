import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle OCI AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      icon: "🏆",
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
    },
    {
      title: "React Front-End Development",
      issuer: "Coursera",
      year: "2025",
      icon: "⚛️",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      title: "Flutter Development",
      issuer: "Infosys",
      year: "2025",
      icon: "📱",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "CertNexus AI Practitioner",
      issuer: "CertNexus",
      year: "2024",
      icon: "🤖",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "Data Security and Privacy",
      issuer: "Coursera",
      year: "2023",
      icon: "🔐",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
  ];

  const internship = {
    title: "AI + Sustainability Virtual Internship",
    organization: "1M1B — IBM SkillsBuild — AICTE",
    period: "Dec 2025",
    description: "Worked on AI-driven sustainability problem statements and industry-aligned workflows.",
  };

  return (
    <section id="certifications" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Certifications & Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional certifications and industry experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Internship Card */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-8 mb-12 glow-border"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                💼
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {internship.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    Internship
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">{internship.organization}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-5 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center text-2xl`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-medium text-sm text-foreground mb-1 truncate group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${cert.color}`}>{cert.year}</span>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
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
