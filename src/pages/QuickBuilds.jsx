import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaRocket, FaBrain, FaChartLine, FaShieldAlt, FaLink, FaCamera, FaGlobe } from 'react-icons/fa';

const QuickBuilds = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const quickBuilds = [
    {
      id: 1,
      title: "Face Blur App",
      description: "Privacy-focused face detection and blurring application with emoji overlay capabilities.",
      technologies: ["OpenCV", "Face Detection", "Streamlit", "Computer Vision", "Privacy"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/face_blur_app",
      live: "#",
      icon: <FaCamera />,
      color: "from-purple-500 to-pink-500",
      features: ["Real-time face detection", "Privacy protection", "Emoji overlays", "Streamlit UI"],
      complexity: "Quick Build",
      timeToBuild: "2-3 days"
    },
    {
      id: 2,
      title: "ShortSphere",
      description: "Smart URL shortener with real-time analytics, geolocation tracking, and privacy-respecting design.",
      technologies: ["FastAPI", "Streamlit", "Redis", "Analytics", "Geolocation"],
      category: "Web App",
      github: "https://github.com/nithinyanna10/shortsphere",
      live: "#",
      icon: <FaLink />,
      color: "from-blue-500 to-cyan-500",
      features: ["URL shortening", "Click analytics", "Geolocation tracking", "Privacy-focused"],
      complexity: "Quick Build",
      timeToBuild: "3-4 days"
    },
    {
      id: 3,
      title: "Positional Encoding Visualizer",
      description: "Interactive visualization of learnable positional encodings with GloVe embeddings and PyTorch.",
      technologies: ["PyTorch", "GloVe", "Streamlit", "NLP", "Visualization"],
      category: "AI Research",
      github: "https://github.com/nithinyanna10/positional_encoding_project",
      live: "#",
      icon: <FaBrain />,
      color: "from-green-500 to-emerald-500",
      features: ["Learnable encodings", "GloVe integration", "Heatmap visualization", "Interactive UI"],
      complexity: "Quick Build",
      timeToBuild: "2-3 days"
    },
    {
      id: 4,
      title: "Real-time Stock Dashboard",
      description: "Live stock analytics with AI-generated summaries, sentiment analysis, and financial forecasting.",
      technologies: ["Streamlit", "ML", "NLP", "Financial APIs", "Prophet"],
      category: "Data Analytics",
      github: "https://github.com/nithinyanna10/real_time_stock_dashboard",
      live: "#",
      icon: <FaChartLine />,
      color: "from-orange-500 to-red-500",
      features: ["Real-time data", "AI summaries", "Sentiment analysis", "Forecasting"],
      complexity: "Quick Build",
      timeToBuild: "4-5 days"
    },
    {
      id: 5,
      title: "Real-time News Summarizer",
      description: "Two-tabbed Streamlit + FastAPI application that fetches international news headlines and summarizes them using Hugging Face Transformers.",
      technologies: ["FastAPI", "Streamlit", "Hugging Face", "Transformers", "NewsData API"],
      category: "NLP Application",
      github: "https://github.com/nithinyanna10/real_time_news_summarizer",
      live: "#",
      icon: <FaGlobe />,
      color: "from-indigo-500 to-purple-500",
      features: ["Real-time news fetching", "LLM summarization", "International headlines", "Two-tab interface"],
      complexity: "Quick Build",
      timeToBuild: "3-4 days"
    },
    {
      id: 6,
      title: "AI Mood-Based Playlist Generator",
      description: "Upload a selfie + mood text to get personalized playlists powered by AI emotion detection and Spotify integration.",
      technologies: ["React", "FastAPI", "DeepFace", "Spotify API", "TensorFlow", "NLTK"],
      category: "AI Entertainment",
      github: "https://github.com/nithinyanna10/ai-mood-playlist",
      live: "https://ai-mood-playlist.vercel.app",
      icon: <FaBrain />,
      color: "from-pink-500 to-rose-500",
      features: ["Emotion detection", "Mood analysis", "Spotify integration", "React UI"],
      complexity: "Quick Build",
      timeToBuild: "4-5 days"
    },
    {
      id: 7,
      title: "Distributed Web Scraper",
      description: "Powerful web scraping system with NLP intelligence, multiprocessing, and beautiful Streamlit GUI for content analysis.",
      technologies: ["Streamlit", "Multiprocessing", "NLP", "Hugging Face", "DuckDuckGo API"],
      category: "Data Extraction",
      github: "https://github.com/nithinyanna10/DISTRIBUTED-SCRAPER",
      live: "#",
      icon: <FaShieldAlt />,
      color: "from-teal-500 to-cyan-500",
      features: ["Parallel scraping", "NLP analysis", "Content summarization", "Keyword extraction"],
      complexity: "Quick Build",
      timeToBuild: "3-4 days"
    },
    {
      id: 8,
      title: "SHA-256 Visualizer",
      description: "Interactive educational tool that visualizes the SHA-256 hashing algorithm step-by-step with animated visualizations and real-time controls.",
      technologies: ["Flask", "JavaScript", "GSAP", "Cryptography", "Educational Tool", "Web Visualization"],
      category: "Educational Tool",
      github: "https://github.com/nithinyanna10/SHA_256",
      live: "#",
      icon: <FaCode />,
      color: "from-purple-500 to-indigo-500",
      features: ["Step-by-step visualization", "Binary representations", "Animated operations", "Educational interface"],
      complexity: "Quick Build",
      timeToBuild: "2-3 days"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Quick Builds</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Rapid prototypes, experiments, and proof-of-concepts that showcase quick thinking and technical agility
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { label: "Projects", value: quickBuilds.length, icon: <FaRocket /> },
              { label: "Avg Build Time", value: "3 days", icon: <FaCode /> },
              { label: "Technologies", value: "25+", icon: <FaBrain /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl text-cyan-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {quickBuilds.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white text-2xl`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <span className="text-xs text-cyan-400 font-semibold">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Complexity Badge */}
                    <div className="flex flex-col items-end">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-semibold">
                        {project.complexity}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">{project.timeToBuild}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <FaGithub size={16} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt size={16} />
                          <span className="text-sm">Live</span>
                        </motion.a>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      <FaEye size={14} />
                      View Details
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 mb-6">
              These quick builds demonstrate rapid prototyping, technical agility, and the ability to turn ideas into working solutions fast.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Let's Build Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickBuilds; 