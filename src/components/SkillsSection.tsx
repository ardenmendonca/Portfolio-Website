import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "C", "C++", "Java", "SQL"],
  },
  {
    title: "Data Science & ML",
    skills: [
      "NumPy",
      "Pandas",
      "SciPy",
      "Scikit-learn",
      "TensorFlow",
      "NLP",
      "Jupyter",
    ],
  },
  {
    title: "Visualization",
    skills: ["Matplotlib", "Seaborn", "Recharts"],
  },
  {
    title: "Web Development",
    skills: ["React", "React Native", "Node.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "AWS", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Figma", "Agile/Scrum", "Android Studio"],
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "Punjabi", level: "Fluent" },
  { name: "Konkani", level: "Fluent" },
  { name: "Marathi", level: "Advanced" },
  { name: "Urdu", level: "Beginner" },
];

const interests = [
  "Deep Learning",
  "AI-Powered Automation",
  "Self-Driving Technology",
  "Space Exploration",
  "Financial Markets",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Skills & Interests</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technical expertise and personal interests that drive my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold font-heading text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + i * 0.02,
                    }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold font-heading text-foreground mb-6">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold font-heading text-foreground mb-6">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-secondary text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
