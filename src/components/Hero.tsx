import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

/**
 * Versa Networks-inspired hero:
 * - Massive bold typography with one italic gradient accent word
 * - Animated gradient mesh background (rendered globally by AuroraBackground)
 * - Two CTAs: View Projects (primary) + Download Resume (ghost)
 */
const Hero = () => {
  const roles = [
    "Software Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];
  const typedText = useTypingAnimation(roles, 110, 55, 1800);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow announcement chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav text-xs md:text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for new opportunities — let’s build something</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Massive bold headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center font-extrabold tracking-[-0.04em] leading-[0.95] text-foreground"
          style={{ fontSize: "clamp(2.75rem, 8.5vw, 7.5rem)" }}
        >
          Crafting bold{" "}
          <span
            className="italic font-serif font-medium bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg, hsl(var(--accent)) 0%, hsl(var(--teal)) 60%, hsl(var(--sky)) 100%)",
            }}
          >
            digital
          </span>{" "}
          experiences with code &amp; design.
        </motion.h1>

        {/* Sub-headline + typed role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hi, I’m <span className="text-foreground font-semibold">Yashwanth A M</span> — a{" "}
            <span className="text-foreground font-semibold">{typedText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-accent ml-0.5"
            >
              |
            </motion.span>
            <br className="hidden md:block" />
            building fast, accessible, and beautifully simple products.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm md:text-base tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-elegant)]"
          >
            View Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="/resume.pdf"
            download="Yashwanth_AM_Resume.pdf"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md text-foreground font-medium text-sm md:text-base tracking-wide transition-all duration-300 hover:bg-foreground/5 hover:border-foreground/40"
          >
            <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>

        {/* Floating dashboard / stats card (Versa-style) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 md:p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Snapshot
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects", value: "20+" },
                { label: "Technologies", value: "15+" },
                { label: "Years coding", value: "3+" },
                { label: "Coffee ☕", value: "∞" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                >
                  <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide uppercase">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini animated bars */}
            <div className="mt-8 flex items-end gap-2 h-20">
              {[55, 75, 40, 90, 65, 80, 50, 95, 70, 60, 85, 45].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(var(--teal)) 100%)",
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 1 + i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
