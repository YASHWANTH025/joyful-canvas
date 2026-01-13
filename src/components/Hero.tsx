import { motion } from "framer-motion";

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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="gradient-text glow-text">Yashwanth</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Software Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Information Technology undergraduate with hands-on experience in{" "}
            <span className="text-primary border-b border-primary/50">full-stack development</span>,{" "}
            <span className="text-primary border-b border-primary/50">REST APIs</span>, and{" "}
            <span className="text-primary border-b border-primary/50">AI fundamentals</span>.
            Passionate about creating impactful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(270 91% 65% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all cursor-pointer"
            >
              View Projects
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
          transition={{ duration: 0.8, delay: 0.9 }}
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
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
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
