import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "Masters in Engineering Science, Data Science",
      school: "University at Buffalo",
      year: "Aug 2024 - Present",
      description: "Focusing on AI systems, forecasting, document intelligence, and LLM pipelines"
    },
    {
      degree: "Bachelors in Computer Science and Engineering",
      school: "Amrita Vishwavidya Peetham",
      year: "Oct 2020 - Apr 2024",
      description: "Computer Science and Engineering with focus on software development and algorithms"
    }
  ];

  const motivations = [
    { name: "AI & ML Development", percentage: 35, color: "from-cyan-400 to-purple-500" },
    { name: "Production Deployment", percentage: 25, color: "from-purple-500 to-pink-500" },
    { name: "Research & Innovation", percentage: 20, color: "from-pink-500 to-green-500" },
    { name: "Cross-functional Collaboration", percentage: 20, color: "from-green-500 to-cyan-400" }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">About</span> 
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-pulse"> Me</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Data Science graduate student with hands-on experience developing AI systems for forecasting, 
            document intelligence, and LLM pipelines. Skilled in time-series modeling, NLP, and deploying 
            research-grade models into production using PyTorch, LangChain, and MLOps best practices.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio JSON Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/50 backdrop-blur-md border border-yellow-400/30 rounded-xl p-6 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">Bio</h2>
            <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm overflow-x-auto border border-yellow-400/20">
              <pre className="text-green-400">
{`{
  "name": "Nithin Reddy Yanna",
  "role": "Data Science Graduate Student",
  "location": "Buffalo, NY",
  "contact": {
    "email": "nyanna@buffalo.edu",
    "phone": "+1-716-907-8910",
    "linkedin": "linkedin.com/in/nithin-yanna-716054217"
  },
  "interests": [
    "AI Systems Development",
    "Document Intelligence", 
    "LLM Pipelines",
    "Time-series Modeling",
    "NLP & MLOps"
  ],
  "education": {
    "masters": "Data Science @ University at Buffalo",
    "bachelors": "CSE @ Amrita Vishwavidya Peetham"
  },
  "expertise": "Building scalable, production-ready 
    AI solutions with cross-functional teams",
  "currently": "AI Research & Engineering Intern @ AriesView"
}`}
              </pre>
            </div>
          </motion.div>

          {/* Motivation Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/50 backdrop-blur-md border border-yellow-400/30 rounded-xl p-6 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">Focus Areas</h2>
            <div className="space-y-4">
              {motivations.map((motivation, index) => (
                <motion.div
                  key={motivation.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{motivation.name}</span>
                    <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent font-semibold">{motivation.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 border border-yellow-400/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${motivation.percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${motivation.color} shadow-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="gradient-text">Education</span> 
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent"> Journey</span>
          </motion.h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="relative pl-8 pb-8 border-l border-yellow-400/50"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 rounded-full border-2 border-black shadow-lg shadow-yellow-400/50 animate-pulse"></div>
                <motion.div 
                  className="bg-black/50 backdrop-blur-md border border-yellow-400/30 rounded-xl p-6 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <FaGraduationCap className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent text-2xl" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent font-semibold mb-2">{edu.school}</p>
                      <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="gradient-text">Core</span> 
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent"> Strengths</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain className="text-4xl" />,
                title: "AI & ML Expertise",
                description: "Deep learning, NLP, LLM pipelines, and time-series modeling with PyTorch and LangChain. Strong foundation in algorithms, data structures, and competitive programming (LeetCode)."
              },
              {
                icon: <FaCode className="text-4xl" />,
                title: "Production Deployment",
                description: "MLOps best practices, scalable solutions, and cross-functional team collaboration. Full-stack development experience with modern web technologies and database systems."
              },
              {
                icon: <FaRocket className="text-4xl" />,
                title: "Research & Innovation",
                description: "Document intelligence, retrieval-augmented generation, and LLM evaluation frameworks. Strong problem-solving skills with expertise in algorithms and software engineering principles."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-black/50 backdrop-blur-md border border-yellow-400/30 rounded-xl p-6 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 text-center transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(234, 179, 8, 0.6)"
                }}
              >
                <motion.div 
                  className="mb-4 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: index * 0.5 }}
                >
                  <div className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                    {value.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 