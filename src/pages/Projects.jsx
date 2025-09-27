import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [neuralNodes, setNeuralNodes] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const [codeRain, setCodeRain] = useState([]);
  const containerRef = useRef(null);

  // AI/ML terminology for code rain
  const aiTerms = [
    'Neural Network', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Machine Learning',
    'Data Science', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Keras',
    'Computer Vision', 'NLP', 'Reinforcement Learning', 'Gradient Descent',
    'Backpropagation', 'CNN', 'RNN', 'LSTM', 'Transformer', 'BERT', 'GPT',
    'Clustering', 'Classification', 'Regression', 'Ensemble', 'Random Forest',
    'XGBoost', 'LightGBM', 'Feature Engineering', 'Cross Validation',
    'Hyperparameter Tuning', 'Model Evaluation', 'AUC', 'Precision', 'Recall'
  ];

  // Mathematical equations for floating display
  const equations = [
    'f(x) = σ(Wx + b)', '∇L = ∂L/∂W', 'y = mx + b', 'P(A|B) = P(B|A)P(A)/P(B)',
    'J(θ) = 1/2m Σ(h_θ(x) - y)²', 'σ(z) = 1/(1 + e^(-z))', 'ReLU(x) = max(0, x)',
    'LSTM: f_t = σ(W_f · [h_{t-1}, x_t] + b_f)', 'Attention(Q,K,V) = softmax(QK^T/√d_k)V'
  ];

  // Initialize neural network nodes
  useEffect(() => {
    const nodes = [];
    for (let i = 0; i < 20; i++) {
      nodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: []
      });
    }
    setNeuralNodes(nodes);
  }, []);

  // Initialize floating data points
  useEffect(() => {
    const points = [];
    for (let i = 0; i < 15; i++) {
      points.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        value: (Math.random() * 100).toFixed(1),
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]
      });
    }
    setDataPoints(points);
  }, []);

  // Initialize code rain
  useEffect(() => {
    const rain = [];
    for (let i = 0; i < 8; i++) {
      rain.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        term: aiTerms[Math.floor(Math.random() * aiTerms.length)],
        speed: Math.random() * 2 + 1
      });
    }
    setCodeRain(rain);
  }, []);

  // Mouse tracking for interactive particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Generate interactive particles (optimized for mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 30;
    
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    setParticles(newParticles);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Web Monitor RAG - Full-Stack Monitoring Platform",
      description: "A comprehensive automated pipeline for monitoring, scraping, and analyzing websites using RAG (Retrieval-Augmented Generation), PostgreSQL, ChromaDB, and LLMs. Features 5 mock sites, automated scraping, delta detection, and Streamlit dashboard.",
      technologies: ["RAG", "PostgreSQL", "ChromaDB", "Streamlit", "Flask", "Gemma", "Ollama", "Automation"],
      category: "Full-Stack AI",
      github: "https://github.com/nithinyanna10/web_monitor_rag",
      live: "#"
    },
    {
      id: 2,
      title: "LLM Agent Evaluation & Reasoning Analyzer",
      description: "Developed an agent-based evaluation framework for Android automation tasks using Gemma 12B via Ollama, with few-shot prompting and self-reflection modules.",
      technologies: ["Gemma 12B", "Ollama", "Chain-of-Thought", "Self-Reflection", "Evaluation Framework"],
      category: "AI Research",
      github: "https://github.com/nithinyanna10/llm-agent-evaluation",
      live: "#"
    },
    {
      id: 3,
      title: "Loan Predictor",
      description: "Achieved 92% accuracy with XGBoost for loan prediction, integrated with FastAPI backend and Streamlit interface for real-time predictions.",
      technologies: ["XGBoost", "FastAPI", "Streamlit", "DagsHub", "Machine Learning"],
      category: "ML Application",
      github: "https://github.com/nithinyanna10/loan-predictor",
      live: "#"
    },
    {
      id: 4,
      title: "Taxi Demand Prediction",
      description: "Developed ML pipeline for taxi demand prediction using Hopworks Feature Store and MLflow, achieving MAE under 6 rides per hour with LightGBM.",
      technologies: ["LightGBM", "Hopworks", "MLflow", "GitHub Actions", "Streamlit"],
      category: "ML Pipeline",
      github: "https://github.com/nithinyanna10/taxiproject",
      live: "#"
    },
    {
      id: 5,
      title: "NYC Taxi Dashboard Analytics",
      description: "End-to-end data analytics pipeline for NYC taxi data using AWS services with automated ETL, optimized querying, and interactive Power BI dashboard.",
      technologies: ["AWS Lambda", "AWS Glue", "Amazon Athena", "Power BI", "Data Analytics"],
      category: "Data Analytics",
      github: "https://github.com/nithinyanna10/etl_pipeline",
      live: "#"
    },
    {
      id: 6,
      title: "Smart DetectionOps - Video Analytics Platform",
      description: "A modular, end-to-end video analytics platform for real-time object detection, tracking, depth estimation, and congestion analysis in retail environments.",
      technologies: ["YOLOv8", "DeepSORT", "MiDaS", "FastAPI", "Streamlit", "Computer Vision", "Retail Analytics"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/detection_ops",
      live: "#"
    },
    {
      id: 7,
      title: "Debt Call Analysis Dashboard",
      description: "A Streamlit dashboard for analyzing and predicting outcomes of debt collection calls using machine learning and NLP with sentiment analysis.",
      technologies: ["NLP", "Sentiment Analysis", "Machine Learning", "Streamlit", "Feature Engineering", "Predictive Analytics"],
      category: "NLP Application",
      github: "https://github.com/nithinyanna10/debt_call_analysis_dashboard",
      live: "https://nithinyanna10-debt-call-analysis-dashboard-dashboardapp-jdhiaw.streamlit.app/"
    },
    {
      id: 8,
      title: "Impostor Hunt - Fake Text Detection",
      description: "Advanced fake text detection challenge solution using multiple models including CatBoost and BERT for improved accuracy in text classification.",
      technologies: ["BERT", "CatBoost", "NLP", "Text Classification", "Machine Learning", "Ensemble Methods"],
      category: "NLP Research",
      github: "https://github.com/nithinyanna10/impostor_hunt_project",
      live: "#"
    },
                    {
                  id: 9,
                  title: "3D Video Diffusion - AI Image/Video Generation",
                  description: "Advanced diffusion model implementation for generating images and videos using 3D-aware techniques. Features FSDP training, custom kernels, and comprehensive model architecture.",
                  technologies: ["Diffusion Models", "3D Vision", "PyTorch", "FSDP", "Custom Kernels", "AI Generation", "Computer Vision"],
                  category: "AI Generation",
                  github: "https://github.com/nithinyanna10/3d-video-diffusion",
                  live: "#"
                },
                {
                  id: 10,
                  title: "Cryptocurrency TradeBots - ML Trading System",
                  description: "Advanced cryptocurrency trading system with real-time data processing, ML predictions, and automated trading bots. Features Docker orchestration, 12 trained models, and comprehensive technical analysis.",
                  technologies: ["Machine Learning", "Docker", "Real-time Data", "Technical Analysis", "Streamlit", "Cron Jobs", "Trading Bots"],
                  category: "ML Trading",
                  github: "https://github.com/nithinyanna10/crypto",
                  live: "#"
                },
                {
                  id: 11,
                  title: "Medical Vision Transformer - Pneumonia Detection",
                  description: "State-of-the-art Vision Transformer model for detecting pneumonia in chest X-ray images, achieving 91.10% test accuracy and 97.14% AUC. Features advanced XAI, MLOps pipeline, and production-ready deployment.",
                  technologies: ["Vision Transformers", "PyTorch", "Medical AI", "XAI", "MLOps", "Streamlit", "FastAPI", "Docker", "Grad-CAM"],
                  category: "Medical AI",
                  github: "https://github.com/nithinyanna10/vision_transformers",
                  live: "#"
                },
                {
                  id: 12,
                  title: "NYC Traffic Analytics - Real-time AI Monitoring",
                  description: "Comprehensive real-time traffic monitoring system combining computer vision, AI detection, and data analytics. Features live video processing, YOLOv8 integration, and interactive dashboards with Kafka streaming.",
                  technologies: ["YOLOv8", "Computer Vision", "Real-time Analytics", "Kafka", "PostgreSQL", "Streamlit", "Docker", "OpenCV", "Object Detection"],
                  category: "Computer Vision",
                  github: "https://github.com/nithinyanna10/traffic_nyc",
                  live: "#"
                },
                {
                  id: 13,
                  title: "AI Meme Generator - Viral Content Creator",
                  description: "A fun and interactive web application that generates viral memes from trending topics using AI! Combines trending data from Reddit, AI image generation with Stable Diffusion, and smart caption generation to create shareable memes.",
                  technologies: ["Streamlit", "Stable Diffusion", "Hugging Face", "Reddit API", "Python", "AI Generation", "Web Scraping", "Image Processing"],
                  category: "AI Application",
                  github: "https://github.com/nithinyanna10/ai_meme_generator",
                  live: "#"
                }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-black relative overflow-hidden" ref={containerRef}>
      {/* Multi-Layer AI Background System */}
      
      {/* Base Layer: Animated Neural Network */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {neuralNodes.map((node, index) => (
            <g key={node.id}>
              {/* Neural Network Nodes */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="4"
                fill="#00ffff"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
              
              {/* Neural Network Connections */}
              {neuralNodes.slice(index + 1, index + 3).map((targetNode, targetIndex) => (
                <motion.line
                  key={`${node.id}-${targetNode.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="#00ffff"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </g>
          ))}
        </svg>
      </div>

      {/* Middle Layer: Floating Data Points */}
      <div className="absolute inset-0 opacity-30">
        {dataPoints.map((point) => (
          <motion.div
            key={point.id}
            className="absolute"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              color: point.color
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            <div className="text-xs font-mono font-bold">
              {point.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mathematical Equations Layer */}
      <div className="absolute inset-0 opacity-25">
        {equations.slice(0, 6).map((equation, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-cyan-400"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            {equation}
          </motion.div>
        ))}
      </div>

      {/* Top Layer: Interactive Particles */}
      <div className="absolute inset-0 opacity-40">
        {particles.map((particle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - mousePosition.x, 2) + 
            Math.pow(particle.y - mousePosition.y, 2)
          );
          const attraction = Math.max(0, 50 - distance) / 50;
          
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity
              }}
              animate={{
                x: [0, particle.vx * 20, 0],
                y: [0, particle.vy * 20, 0],
                scale: [1, 1 + attraction * 0.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          );
        })}
      </div>

      {/* Overlay: Code Rain */}
      <div className="absolute inset-0 opacity-20">
        {codeRain.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-xs font-mono text-green-400"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + item.speed,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {item.term}
          </motion.div>
        ))}
      </div>

      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
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