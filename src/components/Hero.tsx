import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown, Sparkles, Download, Eye } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const roles = ["Software Developer", "Full Stack Developer", "UI/UX Designer", "Problem Solver"];
  const typedText = useTypingAnimation(roles, 120, 60, 2000);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-48 h-48"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            {/* Greeting with underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                  Hello, my name is
                </p>
              </div>
              <motion.div 
                className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Name - Large Elegant Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <motion.span 
                className="font-brush text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-foreground leading-tight block glow-text-subtle"
                whileHover={{ 
                  textShadow: "0 0 40px hsl(var(--primary) / 0.5)",
                }}
              >
                Yashwanth A M
              </motion.span>
            </motion.h1>

            {/* Role with typing animation */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-light mb-8"
            >
              <span className="gradient-text">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary ml-1"
              >
                |
              </motion.span>
            </motion.h2>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <MagneticButton
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Projects
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download="Yashwanth_AM_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-foreground rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:border-primary hover:bg-primary/5 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-primary group-hover:animate-bounce" />
                Download Resume
              </MagneticButton>
            </motion.div>

            {/* Contact Info with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <motion.a
                href="mailto:yashwanthyashum2003@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group glass-card-subtle px-4 py-3 w-fit"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm tracking-wide">YASHWANTHYASHUM2003@GMAIL.COM</span>
              </motion.a>
              <motion.a
                href="tel:+916363626713"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group glass-card-subtle px-4 py-3 w-fit"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm tracking-wide">+91 6363626713</span>
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 hidden lg:block"
            >
              <motion.a
                href="#skills"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 flex items-start justify-center pt-2 transition-colors duration-300"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-2 rounded-full bg-primary"
                  />
                </motion.div>
                <span className="tracking-wide group-hover:translate-x-1 transition-transform duration-300">SCROLL DOWN</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image in Dark Circle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 -m-4 rounded-full border border-primary/20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 -m-8 rounded-full border border-accent/10"
                animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Dark circle background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-full bg-foreground overflow-hidden relative bio-pulse"
              >
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [
                      "inset 0 0 60px hsl(var(--primary) / 0.1)",
                      "inset 0 0 100px hsl(var(--primary) / 0.2)",
                      "inset 0 0 60px hsl(var(--primary) / 0.1)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Yashwanth A M - Software Developer"
                  className="w-full h-full object-cover object-top scale-110"
                  style={{ objectPosition: "center 15%" }}
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                animate={{
                  boxShadow: [
                    "0 20px 80px hsl(var(--primary) / 0.2)",
                    "0 30px 100px hsl(var(--primary) / 0.3)",
                    "0 20px 80px hsl(var(--primary) / 0.2)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;