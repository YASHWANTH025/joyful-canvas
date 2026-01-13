import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yashwanthyashum2003@gmail.com",
      href: "mailto:yashwanthyashum2003@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-6363626713",
      href: "tel:+916363626713",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
    },
  ];

  const socials = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yashwanth-a-m-0b8198294",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/YASHWANTH025",
    },
  ];

  return (
    <section id="contact" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-glass-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-xl bg-secondary/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Send a Message
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 91% 65% / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 transition-all"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
