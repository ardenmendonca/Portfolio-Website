import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold font-heading gradient-text mb-2">
              Arden Mendonca
            </p>
            <p className="text-sm text-muted-foreground">
              AI & Data Science Graduate | Software Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ardenmendonca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/ardenmendonca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:arden.mendonca@gmail.com"
              className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arden Mendonca.
          </p>
        </div>
      </div>
    </footer>
  );
}
