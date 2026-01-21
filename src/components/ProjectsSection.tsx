import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Shield,
  MapPin,
  Building,
  TrendingDown,
  ScanFace,
} from "lucide-react";

const projectsData = [
  {
    title: "EVRP Hybrid Simulated Annealing Optimizer",
    period: "Jun 2025 - Sep 2025",
    description:
      "Engineered a feasibility-first, SoC-aware metaheuristic (SA backbone + RVND/ALNS, tabu & path-relinking) that autonomously inserts optimal charge stops and restructures routes.",
    highlights: [
      "Scales to 1k+ customers",
      "48-67% lower mean tour distance vs baseline SA + 2-opt",
      "Benchmarked against 17 CEC-2020 benchmarks",
    ],
    icon: Zap,
    tech: [
      "C++",
      "Optimization",
      "Metaheuristics",
      "Machine Learning",
      "Algorithm Design",
    ],
    github: "https://github.com/ardenmendonca/Electric_Vehicle-Routing_Problem",
  },
  {
    title: "LGBM Company Bankruptcy Predictor",
    period: "2024",
    description:
      "End-to-end machine learning application to predict company bankruptcy risk using LightGBM classifier, deployed on Google Cloud App Engine with Cloud Storage for hosting.",
    highlights: [
      "LightGBM model training & validation",
      "Google Cloud App Engine deployment",
      "Web app with prediction UI",
    ],
    icon: TrendingDown,
    tech: ["Python", "LightGBM", "Google Cloud", "Flask"],
    github:
      "https://github.com/ardenmendonca/LGBM-Company-Bankruptcy-Predictor-main",
  },
  {
    title: "Facial Image Denoising Autoencoder",
    period: "2024",
    description:
      "Built a facial image denoising model using convolutional autoencoder neural network to remove noise from face images as preprocessing for face recognition, implementing a published research paper.",
    highlights: [
      "Convolutional Autoencoder architecture",
      "ORL Face Database training",
      "Research paper implementation",
    ],
    icon: ScanFace,
    tech: ["Python", "Deep Learning", "Computer Vision", "Jupyter"],
    github:
      "https://github.com/ardenmendonca/Facial_Image_Denoising_Using_Convolutional_Autoencoder_Network",
  },
  {
    title: "Women's Safety and Security App",
    period: "Dec 2023 - Jan 2024",
    description:
      "Android app integrating Google API for live maps and location tracking with shake-activated emergency call feature and alarm function for emergency contacts.",
    highlights: [
      "Google Maps API with geospatial data processing",
      "Shake-activated emergency calls",
      "Real-time location tracking",
    ],
    icon: Shield,
    tech: [
      "Java",
      "Android Studio",
      "Google API",
      "UI/UX",
      "Event Tracking",
      "Notifications",
    ],
    github: "https://github.com/ardenmendonca/safety-app",
  },
  {
    title: "TravelAdvisor",
    period: "Aug 2022 - Sep 2022",
    description:
      "Travel planning web application using React.js with real-time, location-based recommendations for hotels, eateries and attractions via Google Maps and Travel Advisor APIs. Implemented robust API data handling (fetching, parsing, and rendering) with loading/empty/error states for reliable, data-driven UI updates",
    highlights: [
      "React.js with Tailwind CSS",
      "Google Maps integration",
      "Real-time recommendations",
    ],
    icon: MapPin,
    tech: ["React", "Node.js", "Tailwind CSS", "APIs"],
    github: "https://github.com/ardenmendonca/TravelAdvisor",
  },
  {
    title: "UrbanLink",
    period: "Feb 2020 - Mar 2020",
    description:
      "Civic community platform built with a responsive front-end and Java Spring Boot back-end, supporting structured issue/update submissions and authority/admin workflows for triage, responses, and resolution tracking using RESTful APIs, MySQL, and role-based permissions.",
    highlights: [
      "Full-stack development",
      "1000+ data transactions",
      "RESTful API implementation",
    ],
    icon: Building,
    tech: ["HTML/CSS", "JavaScript", "Java Spring Boot", "MySQL"],
    github: "https://github.com/ardenmendonca/urbanlink",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of projects showcasing my skills in AI, full-stack
            development, and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:glow-effect"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>

              <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary mb-4">{project.period}</p>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-primary/30 hover:bg-primary/10 hover:border-primary rounded-xl py-3 font-medium transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
