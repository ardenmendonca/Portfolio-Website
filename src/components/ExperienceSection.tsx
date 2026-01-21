import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "Allianz Logistic",
    role: "Data Analyst",
    period: "Aug 2023 - Aug 2024",
    achievements: [
      "Analyzed large operational datasets using Excel and SQL to identify performance trends and root causes behind operational issues",
      "Built automated ETL pipelines using Python (Pandas, Numpy) and SQL, improving data accuracy by 25% through built-in validation and quality controls while reducing manual data cleaning effort",
      "Created and maintained KPI dashboards and reports used by cross-functional teams for performance monitoring and weekly decision-making",
      "Developed automated reporting workflows that eliminated repetitive tasks, reducing manual reporting effort by 30% and accelerating report turnaround from days to hours",
      "Delivered clear, actionable insights to stakeholders on performance trends, risks, and improvement opportunities, accelerating operational responses",
    ],
    skills: ["MySQL", "Python", "Tableau", "KPI Dashboards", "ETL", "Excel"],
  },
  {
    company: "Cryptina India",
    role: "Software Developer",
    period: "Apr 2023 - Jul 2023",
    achievements: [
      "Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring mobile-friendly layouts across all pages",
      "Designed intuitive UI screens for 20+ web and mobile app flows, focusing on visual hierarchy, usability, and cross-platform consistency",
      "Collaborated with a 4-person team to develop Android-focused mobile interfaces using React Native, prioritising user-centric design and smooth navigation",
      "Contributed across the development lifecycle: wireframing/prototyping in Figma, component implementation, basic state handling, testing, and deployment support",
      "Worked in an Agile/Scrum environment, delivering ~3 features per sprint and participating in sprint planning, reviews, and daily stand-ups",
    ],
    skills: ["React Native", "JavaScript", "HTML/CSS", "Figma", "Agile/Scrum"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding relative bg-secondary/30"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world experience in data analytics and software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect hidden md:block" />

                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
                >
                  <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
