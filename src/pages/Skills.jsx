import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = {
    "Programming Languages": ["Python", "Java", "C/C++", "R", "JavaScript", "HTML/CSS"],
    "AI & ML": ["PyTorch", "Deep Learning", "NLP", "LLMs", "LangChain", "FAISS", "PGvector", "Gen AI"],
    "Data Science": ["pandas", "NumPy", "Matplotlib", "Data Analysis", "ETL Pipelines", "MLOps", "Feature Store"],
    "Cloud & Platforms": ["AWS S3", "AWS Lambda", "AWS Glue", "GCP", "Azure", "Google BigQuery", "Streamlit"],
    "Tools & Frameworks": ["Git", "CI/CD", "DagsHub", "MLflow", "Hopworks", "Power BI", "Jupyter Notebook", "IntelliJ"]
  };

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
            <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical expertise in AI/ML, data science, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Certifications
          </h2>
          <div className="glass-card max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-cyan-400 text-4xl">🏆</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Google Cloud Certification</h3>
                <p className="text-gray-300">30 days of Google Cloud - Fundamentals</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 