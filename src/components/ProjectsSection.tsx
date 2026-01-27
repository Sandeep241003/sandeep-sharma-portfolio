import { ExternalLink, Github, Brain, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Based Tomato Disease Diagnosis System",
    category: "AI / ML",
    date: "November 2025",
    problem: "Farmers need quick, accurate diagnosis of tomato plant diseases and actionable care recommendations to prevent crop loss.",
    approach: "Built a CNN-based deep learning model trained on real-field tomato leaf images. Implemented a RAG (Retrieval-Augmented Generation) pipeline using LangChain, FAISS, and LLMs to provide context-aware, explainable crop-care guidance.",
    outcome: "System accurately identifies disease categories and provides real-time, weather-aware agricultural recommendations to farmers.",
    technologies: ["Python", "CNN", "Deep Learning", "LangChain", "FAISS", "LLMs", "RAG"],
    icon: Brain,
    featured: true,
  },
  {
    title: "JobSyde - Job Application Platform",
    category: "Full Stack",
    date: "April 2025",
    problem: "Job seekers need an accessible, simple platform to browse and apply for jobs without complex interfaces.",
    approach: "Developed a full-stack job platform using HTML, Tailwind CSS, and JavaScript for the frontend. Built scalable backend services with Spring Boot and REST APIs, managing authentication, job listings, and application workflows using MySQL.",
    outcome: "Created an accessible, user-friendly job platform with seamless authentication and efficient job application management.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Spring Boot", "REST APIs", "MySQL"],
    icon: Briefcase,
    featured: true,
  },
  {
    title: "Currency Converter",
    category: "Desktop App",
    date: "August 2023",
    problem: "Users need a quick, offline-capable tool for accurate currency conversions.",
    approach: "Developed a desktop-based application using Python and Tkinter with a clean GUI interface for easy currency conversion.",
    outcome: "Built a fast, reliable currency converter providing accurate real-time conversions with an intuitive user interface.",
    technologies: ["Python", "Tkinter", "GUI Development"],
    icon: ArrowUpRight,
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work in AI/ML, full-stack development, and software engineering
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 hover-lift"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <p className="text-xs text-muted-foreground">{project.date}</p>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                {/* Approach */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Approach</h4>
                  <p className="text-sm text-muted-foreground">{project.approach}</p>
                </div>

                {/* Outcome */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Outcome</h4>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <project.icon className="text-primary" size={18} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.problem}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
