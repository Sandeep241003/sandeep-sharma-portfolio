import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "International Educational Innovation Training",
    organization: "Asian Institute of Technology, Thailand",
    type: "Training Program",
    duration: "September 2024",
    location: "Thailand",
    description: [
      "Completed a 15-day international training program focused on emerging technologies",
      "Gained hands-on exposure to GIS, Data Analytics, Virtual Reality, and Generative AI",
      "Achieved 1st place in Group Work on Python EDA (Exploratory Data Analysis) with Interpretation",
      "Collaborated with international peers on innovative technology projects",
    ],
    technologies: ["Python", "Data Analytics", "GIS", "VR", "Generative AI"],
    highlight: "1st Place - Python EDA Group Work",
  },
  {
    title: "Summer Training in Python for Data Science",
    organization: "United Institute of Technology",
    type: "Training Program",
    duration: "August 2023",
    location: "Prayagraj, India",
    description: [
      "Completed intensive 60-hour training covering Python fundamentals for data science",
      "Developed proficiency in NumPy and Pandas for data manipulation and analysis",
      "Built desktop applications using Tkinter for GUI development",
      "Applied learnings to build a Currency Converter desktop application",
    ],
    technologies: ["Python", "NumPy", "Pandas", "Tkinter"],
    highlight: null,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional training and hands-on experience in software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative p-6 md:p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 size={16} />
                      <span>{exp.organization}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-1.5 md:justify-end">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 md:justify-end">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlight Badge */}
                {exp.highlight && (
                  <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                    <span className="text-primary font-medium">{exp.highlight}</span>
                  </div>
                )}

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-lg bg-secondary text-secondary-foreground"
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
    </section>
  );
};

export default ExperienceSection;
