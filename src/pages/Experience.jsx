import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import Background from '../components/Background';

const Experience = () => {
  const experiences = [
    {
      title: "AI Research and Engineering Intern",
      company: "AriesView (Real Estate AI startup)",
      location: "Remote",
      period: "May 2025 - Present",
      description: "Built AI systems for document intelligence and LLM pipelines in real estate domain",
      technologies: ["LangChain", "ChromaDB", "LLMs", "OCR", "FAISS", "Azure AI Studio", "LlamaIndex", "React", "Node.js", "PostgreSQL", "Docker"],
      achievements: [
        "Built retrieval-augmented generation using LangChain, ChromaDB, and LLMs (Gemma, GPT-4)",
        "Evaluated and integrated OCR tools improving document parsing accuracy by over 35%",
        "Developed document intelligence workflows including chunking, embedding and semantic search using FAISS",
        "Benchmarked LLM hallucination rates and implemented prompt tuning to reduce false data generation by ~40%",
        "Investigated Azure AI Studio and LlamaIndex as LangChain alternatives for production optimization",
        "Contributed to LLM evaluation and prompt design for legal Q&A and anomaly detection in contract terms",
        "Created tables according to given financial model and helped in backend development"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 relative overflow-hidden bg-black">
      <Background />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in AI research, data science, and software engineering
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="glass-card">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center space-x-3 mb-3">
                      <FaBriefcase className="text-cyan-400 text-xl" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg mb-2">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <FaCalendar />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3">
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-cyan-400 font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                            className="skill-badge"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 