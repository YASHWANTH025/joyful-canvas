import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Profile Picture with Glowing Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative mx-auto mb-8 w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            {/* Animated glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(270 91% 65%), hsl(280 100% 60%), hsl(300 100% 50%), hsl(270 91% 65%))",
                padding: "4px",
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </motion.div>
            
            {/* Profile image container */}
            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src={profileImage}
                alt="Yashwanth A M - Software Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Outer decorative ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-primary/20 border-dashed"
            />
          </motion.div>

          {/* Open to Opportunities Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 border border-glass-border mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-foreground font-medium">Open to Opportunities</span>
          </motion.div>

          {/* Hello, I'm text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name with distinctive styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6 leading-tight"
          >
            <span className="font-signature text-5xl md:text-7xl lg:text-8xl gradient-text glow-text italic tracking-wide block">
              Yashwanth
            </span>
            <span className="font-handwritten text-2xl md:text-3xl text-muted-foreground block mt-1">
              A M
            </span>
          </motion.h1>

          {/* Role with typing effect styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Software
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text">
              Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Specializing in{" "}
            <span className="text-primary font-medium">Full-Stack Development</span>,{" "}
            <span className="text-primary font-medium">REST APIs</span>, and{" "}
            <span className="text-primary font-medium">AI Fundamentals</span>.{" "}
            Building the future of technology-powered applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(270 91% 65% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Yashwanth_AM_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-transparent border border-primary/50 text-foreground font-medium text-sm hover:bg-primary/10 transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-transparent border border-glass-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all cursor-pointer"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          {[
            { number: "3+", label: "Projects Completed" },
            { number: "5+", label: "Certifications" },
            { number: "2+", label: "Years Learning" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
