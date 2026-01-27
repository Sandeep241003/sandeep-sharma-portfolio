import { Award, Medal, BookOpen, Shield, Trophy } from "lucide-react";

const achievements = [
  {
    title: "GATE 2025 Qualified",
    description: "Qualified Graduate Aptitude Test in Engineering (GATE) in Computer Science and Information Technology with a score of 420.",
    icon: Award,
    type: "Qualification",
    date: "March 2025",
    highlight: true,
  },
  {
    title: "1st Rank - Academic Excellence Award",
    description: "Received Academic Excellence Award for achieving 1st rank in First Year B.Tech at United Institute of Technology, Prayagraj.",
    icon: Trophy,
    type: "Academic",
    date: "August 2023",
    highlight: true,
  },
  {
    title: "1st Place - Python EDA Group Work",
    description: "Achieved first place in Group Work on Python Exploratory Data Analysis with Interpretation at Asian Institute of Technology, Thailand.",
    icon: Medal,
    type: "Competition",
    date: "September 2024",
    highlight: true,
  },
  {
    title: "2nd Place - Cybersecurity Bootcamp",
    description: "Secured 2nd place in the Security Fundamentals & Threat Defense Bootcamp challenge (ISEA Phase III) at MNNIT Allahabad.",
    icon: Shield,
    type: "Competition",
    date: "March 2025",
    highlight: false,
  },
];

const certifications = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL - IIT Madras",
    date: "October 2025",
    score: "53%",
  },
  {
    title: "Generative AI Mastermind Workshop",
    issuer: "Outskill",
    date: "August 2025",
    description: "AI Agents, Prompting, AI Automation Tools",
  },
  {
    title: "Machine Learning Course",
    issuer: "IAIP - Softpro India Technologies Ltd.",
    date: "June 2024",
    description: "ML fundamentals and model building",
  },
  {
    title: "Security Fundamentals & Threat Defense Bootcamp",
    issuer: "MNNIT Allahabad (ISEA Phase III)",
    date: "March 2025",
    description: "Cybersecurity, Penetration Testing",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition for academic excellence and professional development
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  achievement.highlight
                    ? "bg-gradient-card border-primary/30 hover:border-primary/50"
                    : "bg-card/50 border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    achievement.highlight ? "bg-primary/20" : "bg-secondary"
                  }`}>
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {achievement.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Certifications & Courses
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <BookOpen className="text-primary" size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">{cert.date}</span>
                        {cert.score && (
                          <span className="px-2 py-0.5 rounded bg-primary/10 text-primary">
                            Score: {cert.score}
                          </span>
                        )}
                      </div>
                      {cert.description && (
                        <p className="text-xs text-muted-foreground mt-2">{cert.description}</p>
                      )}
                    </div>
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

export default AchievementsSection;
