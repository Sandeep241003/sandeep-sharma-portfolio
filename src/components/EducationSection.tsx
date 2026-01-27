import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (CSE)",
    institution: "United Institute of Technology, Prayagraj",
    year: "2022 - 2026",
    grade: "8.8 / 10 CGPA",
    highlight: "1st Rank in First Year",
    current: true,
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "B.B.S. International School, Prayagraj",
    year: "2021",
    grade: "90.0%",
    highlight: null,
    current: false,
  },
  {
    degree: "High School (10th Grade)",
    institution: "B.B.S. International School, Prayagraj",
    year: "2019",
    grade: "93.8%",
    highlight: null,
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strong academic foundation in Computer Science and Engineering
            </p>
          </div>

          {/* GATE Highlight */}
          <div className="mb-12 p-6 rounded-xl bg-primary/10 border border-primary/30 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Award className="text-primary" size={32} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">
                GATE 2025 Qualified
              </h3>
              <p className="text-muted-foreground">
                Computer Science and Information Technology | Score: 420
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl border transition-all duration-300 ${
                  edu.current
                    ? "bg-gradient-card border-primary/30"
                    : "bg-card/50 border-border hover:border-primary/20"
                }`}
              >
                {edu.current && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                    Current
                  </span>
                )}
                
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar size={14} />
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {edu.grade}
                      </span>
                      {edu.highlight && (
                        <span className="px-3 py-1 rounded-full bg-secondary text-foreground">
                          {edu.highlight}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
