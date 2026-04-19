import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const Navigation = () => {
  const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4 transition-all duration-300 ${isScrolled ? "glass-nav" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a href="#about" whileHover={{
        scale: 1.02
      }} className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center">
            <span className="w-3 h-3 rounded-sm" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--teal)))" }} />
          </span>
          <span className="text-base md:text-lg font-bold tracking-tight text-foreground">YASHWANTH</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 5).map((item, index) => <motion.a key={item} href={`#${item.toLowerCase()}`} initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }} className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
              {item}
            </motion.a>)}

          <ThemeToggle />

          <motion.a href="#contact" whileHover={{
          scale: 1.03
        }} className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium tracking-wide transition-all hover:shadow-[var(--shadow-elegant)]">
            Get in touch
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <motion.button whileTap={{
          scale: 0.95
        }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center text-foreground">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div initial={false} animate={{
      height: isMobileMenuOpen ? "auto" : 0,
      opacity: isMobileMenuOpen ? 1 : 0
    }} className="md:hidden overflow-hidden bg-background">
        <div className="py-6 space-y-1">
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase">
              {item}
            </a>)}
        </div>
      </motion.div>
    </motion.nav>;
};
export default Navigation;