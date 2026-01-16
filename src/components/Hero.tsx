import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const roles = ["Full-Stack Developer", "AI Enthusiast", "Problem Solver", "UI/UX Developer"];
  const typedRole = useTypingAnimation(roles, 100, 50, 2000);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture with slow glowing pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6"
          >
            {/* Slow pulsing glow ring */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(270 91% 65% / 0.2)",
                  "0 0 40px hsl(270 91% 65% / 0.35)",
                  "0 0 20px hsl(270 91% 65% / 0.2)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ width: "220px", height: "220px" }}
            />

            {/* Subtle rotating gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(270 91% 65% / 0.6), hsl(280 100% 60% / 0.4), transparent, hsl(270 91% 65% / 0.6))",
                padding: "3px",
                width: "220px",
                height: "220px",
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </motion.div>

            {/* Profile image container */}
            <motion.div
              className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-background shadow-xl z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage}
                alt="Yashwanth A M - Software Developer"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 border border-glass-border mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-foreground font-medium">Open to Opportunities</span>
          </motion.div>

          {/* Hello, I'm text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Signature Name - Large Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6 leading-tight"
          >
            <span className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text glow-text italic tracking-wide">
              Yashwanth A M
            </span>
          </motion.h1>

          {/* Software Engineer Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Software Engineer
          </motion.h2>

          {/* Typing Animation Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 h-10"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="gradient-text font-medium">
                {typedRole}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle"
                />
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            B.Tech IT student at{" "}
            <span className="text-primary font-medium">Alliance University</span>{" "}
            with hands-on experience in full-stack development, REST APIs, IoT, and cloud technologies.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 hover:shadow-[0_0_20px_hsl(270_91%_65%_/_0.3)]"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              download="Yashwanth_AM_Resume.pdf"
              className="px-8 py-4 rounded-full bg-transparent border border-primary/50 text-foreground font-medium text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 md:gap-16 mt-16"
          >
            {[
              { number: "3+", label: "Projects Completed" },
              { number: "5+", label: "Certifications" },
              { number: "2+", label: "Years Learning" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
