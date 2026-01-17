import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socials = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/YASHWANTH025", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/in/yashwanth-a-m-0b8198294", 
      label: "LinkedIn" 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:yashwanthyashum2003@gmail.com", 
      label: "Email" 
    },
  ];

  const quickLinks = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-signature font-semibold text-foreground italic">/Y</span>
              <span className="font-heading font-medium text-foreground">Yashwanth A M</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineering student passionate about building innovative solutions and learning new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Feel free to reach out for collaborations or opportunities.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Yashwanth A M. Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Bengaluru
            </p>
            <p className="text-muted-foreground text-xs">
              B.Tech Information Technology | Alliance University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;