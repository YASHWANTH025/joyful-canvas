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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-signature font-semibold text-foreground italic">/Y</span>
          <span className="text-lg font-heading font-medium text-foreground tracking-wide">YASHWANTH A M</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 5).map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              {item}
            </motion.a>
          ))}
          
          <ThemeToggle />
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0 
        }}
        className="md:hidden overflow-hidden bg-background"
      >
        <div className="py-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;