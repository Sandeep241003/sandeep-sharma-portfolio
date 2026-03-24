import { ArrowDown, FileText, Mail, Github, Linkedin } from "lucide-react";
import sandeepPhoto from "@/assets/sandeep-photo.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow animate-pulse-glow" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in-up opacity-0">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
              <img src={sandeepPhoto} alt="Sandeep Sharma" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-fade-in-up opacity-0">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Open to Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 stagger-1">
            Hi, I'm{" "}
            <span className="text-gradient">Sandeep Sharma</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 stagger-2">
            Aspiring Software Developer | GATE CS 2025 Qualified
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Final-year Computer Science student passionate about building efficient, 
            scalable solutions. Experienced in AI/ML, full-stack development, and 
            solving complex problems with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              <FileText className="mr-2" size={18} />
              View My Work
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
              <Mail className="mr-2" size={18} />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-5">
            <a
              href="https://github.com/sandeep241003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-sharma24103/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sandeeps24103@gmail.com"
              className="p-3 rounded-lg glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
