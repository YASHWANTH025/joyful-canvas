import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";
const Hero = () => {
  return <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="order-2 lg:order-1">
            {/* Greeting with underline */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mb-8">
              <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">
                Hello, my name is
              </p>
              <div className="w-12 h-0.5 bg-foreground" />
            </motion.div>

            {/* Name - Large Elegant Typography */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="mb-4">
              <span className="font-signature text-5xl sm:text-6xl md:text-7xl text-foreground font-medium leading-tight block lg:text-6xl">Yashwanth A M</span>
              <span className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground font-medium leading-tight block">
            </span>
            </motion.h1>

            {/* Role */}
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="text-2xl md:text-3xl text-muted-foreground font-light mb-12">
              Software Developer
            </motion.h2>

            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className="space-y-4">
              <a href="mailto:yashwanthyashum2003@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm tracking-wide">YASHWANTHYASHUM2003@GMAIL.COM</span>
              </a>
              <a href="tel:+919019296432" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm tracking-wide">+91 6363626713
 </span>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} className="mt-16 hidden lg:block">
              <motion.a href="#skills" animate={{
              y: [0, 8, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <ArrowDown className="w-4 h-4" />
                <span className="tracking-wide">SCROLL DOWN</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image in Dark Circle */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut"
        }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Dark circle background */}
              <motion.div initial={{
              scale: 0.9,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-full bg-foreground overflow-hidden relative">
                {/* Subtle inner glow */}
                <motion.div className="absolute inset-0 rounded-full pointer-events-none" animate={{
                boxShadow: ["inset 0 0 60px hsl(0 0% 100% / 0.05)", "inset 0 0 80px hsl(0 0% 100% / 0.08)", "inset 0 0 60px hsl(0 0% 100% / 0.05)"]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
                
                {/* Profile Image */}
                <img src={profileImage} alt="Yashwanth A M - Software Developer" className="w-full h-full object-cover object-top scale-110" style={{
                objectPosition: "center 15%"
              }} />
              </motion.div>

              {/* Subtle outer glow effect */}
              <motion.div className="absolute inset-0 rounded-full -z-10" animate={{
              boxShadow: ["0 20px 60px hsl(220 15% 15% / 0.15)", "0 25px 80px hsl(220 15% 15% / 0.2)", "0 20px 60px hsl(220 15% 15% / 0.15)"]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;