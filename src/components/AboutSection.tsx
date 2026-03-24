import { Code, Brain, Rocket, Target } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Enthusiast",
    description: "Passionate about machine learning, deep learning, and building intelligent systems",
  },
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Experienced in building end-to-end web applications with modern technologies",
  },
  {
    icon: Target,
    title: "GATE Qualified",
    description: "Cleared GATE 2025 in Computer Science, demonstrating strong CS fundamentals",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Dedicated to creating efficient, scalable solutions for real-world challenges",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated software developer focused on building impactful solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
            {/* Photo */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-64 md:w-72 rounded-2xl overflow-hidden border border-border shadow-glow">
                <img src={sandeepFull} alt="Sandeep Sharma" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a final-year Computer Science Engineering student at United Institute 
                of Technology, Prayagraj, graduating in 2026. My academic journey has been 
                marked by consistent excellence, achieving a CGPA of 8.8 and securing 1st 
                rank in my first year.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in leveraging technology to solve real-world problems. 
                From developing AI-powered diagnostic systems to building full-stack 
                web applications, I strive to create solutions that are both innovative 
                and practical.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Qualifying GATE 2025 in Computer Science has reinforced my strong 
                foundation in core CS concepts. I am now seeking opportunities to apply 
                my skills in a dynamic environment where I can contribute meaningfully 
                while continuing to grow as a professional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
