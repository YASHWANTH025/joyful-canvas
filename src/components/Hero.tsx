import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
const Hero = () => {
  const roles = ["Full-Stack Developer", "AI Enthusiast", "Problem Solver", "UI/UX Developer"];
  const typedRole = useTypingAnimation(roles, 100, 50, 2000);
  return <section id="about" className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Name and Info */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-2 lg:order-1">
            {/* Open to Opportunities Badge */}
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 border border-glass-border mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-foreground font-medium">Open to Opportunities</span>
            </motion.div>

            {/* Hello, I'm text */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="text-lg md:text-xl text-muted-foreground mb-4">
              Hello, I'm
            </motion.p>

            {/* Signature Name */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="mb-6 leading-tight">
              <span className="font-signature text-6xl md:text-7xl gradient-text glow-text italic tracking-wide block lg:text-7xl font-thin text-justify text-primary-foreground bg-primary-foreground">Yashwanth A M</span>
              <span className="font-handwritten text-3xl md:text-4xl text-primary/80 block mt-2">
            </span>
            </motion.h1>

            {/* Typing Animation Role */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} className="mb-8 h-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                I'm a{" "}
                <span className="gradient-text">
                  {typedRole}
                  <motion.span animate={{
                  opacity: [1, 0]
                }} transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }} className="inline-block w-[3px] h-8 bg-primary ml-1 align-middle" />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Specializing in{" "}
              <span className="text-primary font-medium">Full-Stack Development</span>,{" "}
              <span className="text-primary font-medium">REST APIs</span>, and{" "}
              <span className="text-primary font-medium">AI Fundamentals</span>.{" "}
              Building the future of technology-powered applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.9
          }} className="flex flex-wrap gap-4">
              <motion.a href="#projects" whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px hsl(270 91% 65% / 0.4)"
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all cursor-pointer flex items-center gap-2">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a href="/resume.pdf" download="Yashwanth_AM_Resume.pdf" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 rounded-full bg-transparent border border-primary/50 text-foreground font-medium text-sm hover:bg-primary/10 transition-all cursor-pointer flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.1
          }} className="grid grid-cols-3 gap-8 mt-12">
              {[{
              number: "3+",
              label: "Projects Completed"
            }, {
              number: "5+",
              label: "Certifications"
            }, {
              number: "2+",
              label: "Years Learning"
            }].map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1.2 + index * 0.1
            }} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>)}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated glow ring */}
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 rounded-full" style={{
              background: "conic-gradient(from 0deg, hsl(270 91% 65%), hsl(280 100% 60%), hsl(300 100% 50%), transparent, hsl(270 91% 65%))",
              padding: "6px",
              width: "320px",
              height: "320px"
            }}>
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Profile image container */}
              <motion.div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <img src={profileImage} alt="Yashwanth A M - Software Developer" className="w-full h-full object-cover object-center" />
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Outer decorative ring */}
              <motion.div animate={{
              rotate: -360
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute -inset-8 rounded-full border border-primary/20 border-dashed" />

              {/* Floating elements */}
              <motion.div animate={{
              y: [-10, 10, -10]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div animate={{
              y: [10, -10, 10]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;