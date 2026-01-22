import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    institution: "University of Manchester",
    degree: "MSc Advanced Computer Science: Artificial Intelligence",
    period: "Sep 2024 - Sep 2025",
    modules:
      "Machine Learning, Text Mining, Computer Vision, Cognitive Robotics and Modelling Data",
    grade: "Merit (2:1)",
    highlight: "Bicentenary Global Futures Scholarship Recipient",
    highlightDesc:
      "Awarded the Bicentenary Global Futures Scholarship in recognition of academic merit",
  },
  {
    institution: "Fr. Conceicao Rodrigues College of Engineering",
    degree: "B.E Artificial Intelligence and Data Science",
    period: "Jun 2020 - Jun 2024",
    modules:
      "Database Systems, Data Structures, Operating Systems, Programming Paradigms, Cryptography",
    grade: "8.54/10 SGPI (First Class Honours)",
    highlight: "Top Project Recognition",
    highlightDesc:
      "Project selected as one of the top in the AI & Data Science department",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building a strong foundation in AI, Data Science, and Software
            Engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold font-heading text-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-primary font-medium text-sm">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-lg text-foreground/90 mb-3">
                    {edu.degree}
                  </p>

                  {"grade" in edu && edu.grade && (
                    <p className="text-primary font-medium mb-3">
                      Grade: {edu.grade}
                    </p>
                  )}

                  <p className="text-muted-foreground text-sm mb-4">
                    <span className="font-medium">Modules:</span> {edu.modules}
                  </p>

                  {edu.highlight && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">
                          {edu.highlight}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.highlightDesc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
