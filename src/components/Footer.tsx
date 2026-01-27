import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-xl font-bold text-foreground">
                Sandeep Sharma
              </span>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sandeep241003"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-sharma24103/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sandeeps24103@gmail.com"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Made with love */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="text-primary" size={14} /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
