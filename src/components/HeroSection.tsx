import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6"
        >
          Arden <span className="gradient-text">Mendonca</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          AI & Data Science Graduate | Software Developer | Manchester Scholar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          I build AI-powered, data-driven products - from modeling and
          experimentation to clean, user-friendly apps people actually use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium rounded-xl transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-primary/30 hover:bg-primary/10 hover:border-primary px-8 py-4 text-lg font-medium rounded-xl transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/ardenmendonca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/ardenmendonca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="mailto:arden.mendonca@gmail.com"
            className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to education"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.a>
    </section>
  );
}
