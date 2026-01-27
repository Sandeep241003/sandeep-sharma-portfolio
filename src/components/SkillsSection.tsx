import { Code, Database, Globe, Wrench, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C"],
  },
  {
    title: "AI / ML & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "CNN", "LangChain", "FAISS", "RAG", "NumPy", "Pandas"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Spring Boot", "REST APIs"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Team Work", "Decision Making"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set spanning programming, AI/ML, web development, and more
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-gradient-card border border-border hover-lift group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
