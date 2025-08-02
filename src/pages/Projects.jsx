import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LLM Agent Evaluation & Reasoning Analyzer",
      description: "Developed an agent-based evaluation framework for Android automation tasks using Gemma 12B via Ollama, with few-shot prompting and self-reflection modules.",
      technologies: ["Gemma 12B", "Ollama", "Chain-of-Thought", "Self-Reflection", "Evaluation Framework"],
      category: "AI Research",
      github: "https://github.com/nithinyanna10/llm-agent-evaluation",
      live: "#"
    },
    {
      id: 2,
      title: "Loan Predictor",
      description: "Achieved 92% accuracy with XGBoost for loan prediction, integrated with FastAPI backend and Streamlit interface for real-time predictions.",
      technologies: ["XGBoost", "FastAPI", "Streamlit", "DagsHub", "Machine Learning"],
      category: "ML Application",
      github: "https://github.com/nithinyanna10/loan-predictor",
      live: "#"
    },
    {
      id: 3,
      title: "Taxi Demand Prediction",
      description: "Developed ML pipeline for taxi demand prediction using Hopworks Feature Store and MLflow, achieving MAE under 6 rides per hour with LightGBM.",
      technologies: ["LightGBM", "Hopworks", "MLflow", "GitHub Actions", "Streamlit"],
      category: "ML Pipeline",
      github: "https://github.com/nithinyanna10/taxiproject",
      live: "#"
    },
    {
      id: 4,
      title: "NYC Taxi Dashboard Analytics",
      description: "End-to-end data analytics pipeline for NYC taxi data using AWS services with automated ETL, optimized querying, and interactive Power BI dashboard.",
      technologies: ["AWS Lambda", "AWS Glue", "Amazon Athena", "Power BI", "Data Analytics"],
      category: "Data Analytics",
      github: "https://github.com/nithinyanna10/etl_pipeline",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my work in AI research, machine learning, and data analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="mb-4">
                <span className="text-cyan-400 text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link to={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-400 hover:text-white transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
                <div className="flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 