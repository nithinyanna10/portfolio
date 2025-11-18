// Categorized Projects Data for Multi-Universe Portfolio

export const projectsByCategory = {
  "Computer Vision": [
    {
      id: 6,
      title: "Smart DetectionOps - Video Analytics Platform",
      description: "A modular, end-to-end video analytics platform for real-time object detection, tracking, depth estimation, and congestion analysis in retail environments.",
      technologies: ["YOLOv8", "DeepSORT", "MiDaS", "FastAPI", "Streamlit", "Computer Vision", "Retail Analytics"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/detection_ops",
      live: "#",
      icon: "🔷"
    },
    {
      id: 12,
      title: "NYC Traffic Analytics - Real-time AI Monitoring",
      description: "Comprehensive real-time traffic monitoring system combining computer vision, AI detection, and data analytics. Features live video processing, YOLOv8 integration, and interactive dashboards with Kafka streaming.",
      technologies: ["YOLOv8", "Computer Vision", "Real-time Analytics", "Kafka", "PostgreSQL", "Streamlit", "Docker", "OpenCV", "Object Detection"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/traffic_nyc",
      live: "#",
      icon: "🚦"
    },
    {
      id: 11,
      title: "Medical Vision Transformer - Pneumonia Detection",
      description: "State-of-the-art Vision Transformer model for detecting pneumonia in chest X-ray images, achieving 91.10% test accuracy and 97.14% AUC. Features advanced XAI, MLOps pipeline, and production-ready deployment.",
      technologies: ["Vision Transformers", "PyTorch", "Medical AI", "XAI", "MLOps", "Streamlit", "FastAPI", "Docker", "Grad-CAM"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/vision_transformers",
      live: "#",
      icon: "🏥"
    },
    {
      id: 9,
      title: "3D Video Diffusion - AI Image/Video Generation",
      description: "Advanced diffusion model implementation for generating images and videos using 3D-aware techniques. Features FSDP training, custom kernels, and comprehensive model architecture.",
      technologies: ["Diffusion Models", "3D Vision", "PyTorch", "FSDP", "Custom Kernels", "AI Generation", "Computer Vision"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/3d-video-diffusion",
      live: "#",
      icon: "🎬"
    }
  ],
  "Reinforcement Learning": [
    {
      id: 14,
      title: "Drone Delivery RL - Autonomous Navigation",
      description: "Reinforcement learning system for autonomous drone delivery using Q-learning and Actor-Critic methods. Features path optimization, obstacle avoidance, and real-time decision making.",
      technologies: ["Q-Learning", "Actor-Critic", "PyTorch", "Gymnasium", "RL", "Path Planning"],
      category: "Reinforcement Learning",
      github: "#",
      live: "#",
      icon: "🚁"
    },
    {
      id: 15,
      title: "Load Balancer RL - Dynamic Resource Allocation",
      description: "Intelligent load balancing system using deep reinforcement learning to optimize server resource allocation. Achieves 40% reduction in response time through adaptive routing.",
      technologies: ["DQN", "Deep RL", "TensorFlow", "System Optimization", "Resource Management"],
      category: "Reinforcement Learning",
      github: "#",
      live: "#",
      icon: "⚖️"
    },
    {
      id: 16,
      title: "Elevator RL - Smart Scheduling System",
      description: "Multi-elevator scheduling optimization using reinforcement learning. Reduces wait times by 35% through intelligent floor selection and passenger grouping algorithms.",
      technologies: ["Multi-Agent RL", "Policy Gradient", "Optimization", "Simulation"],
      category: "Reinforcement Learning",
      github: "#",
      live: "#",
      icon: "🛗"
    }
  ],
  "AI / LLM / RAG": [
    {
      id: 1,
      title: "Web Monitor RAG - Full-Stack Monitoring Platform",
      description: "A comprehensive automated pipeline for monitoring, scraping, and analyzing websites using RAG (Retrieval-Augmented Generation), PostgreSQL, ChromaDB, and LLMs. Features 5 mock sites, automated scraping, delta detection, and Streamlit dashboard.",
      technologies: ["RAG", "PostgreSQL", "ChromaDB", "Streamlit", "Flask", "Gemma", "Ollama", "Automation"],
      category: "AI / LLM / RAG",
      github: "https://github.com/nithinyanna10/web_monitor_rag",
      live: "#",
      icon: "🌐"
    },
    {
      id: 2,
      title: "LLM Agent Evaluation & Reasoning Analyzer",
      description: "Developed an agent-based evaluation framework for Android automation tasks using Gemma 12B via Ollama, with few-shot prompting and self-reflection modules.",
      technologies: ["Gemma 12B", "Ollama", "Chain-of-Thought", "Self-Reflection", "Evaluation Framework"],
      category: "AI / LLM / RAG",
      github: "https://github.com/nithinyanna10/llm-agent-evaluation",
      live: "#",
      icon: "🧠"
    },
    {
      id: 13,
      title: "AI Meme Generator - Viral Content Creator",
      description: "A fun and interactive web application that generates viral memes from trending topics using AI! Combines trending data from Reddit, AI image generation with Stable Diffusion, and smart caption generation to create shareable memes.",
      technologies: ["Streamlit", "Stable Diffusion", "Hugging Face", "Reddit API", "Python", "AI Generation", "Web Scraping", "Image Processing"],
      category: "AI / LLM / RAG",
      github: "https://github.com/nithinyanna10/ai_meme_generator",
      live: "#",
      icon: "😂"
    }
  ],
  "Full-Stack & Systems": [
    {
      id: 3,
      title: "Loan Predictor",
      description: "Achieved 92% accuracy with XGBoost for loan prediction, integrated with FastAPI backend and Streamlit interface for real-time predictions.",
      technologies: ["XGBoost", "FastAPI", "Streamlit", "DagsHub", "Machine Learning"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/loan-predictor",
      live: "#",
      icon: "💰"
    },
    {
      id: 4,
      title: "Taxi Demand Prediction",
      description: "Developed ML pipeline for taxi demand prediction using Hopworks Feature Store and MLflow, achieving MAE under 6 rides per hour with LightGBM.",
      technologies: ["LightGBM", "Hopworks", "MLflow", "GitHub Actions", "Streamlit"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/taxiproject",
      live: "#",
      icon: "🚕"
    },
    {
      id: 5,
      title: "NYC Taxi Dashboard Analytics",
      description: "End-to-end data analytics pipeline for NYC taxi data using AWS services with automated ETL, optimized querying, and interactive Power BI dashboard.",
      technologies: ["AWS Lambda", "AWS Glue", "Amazon Athena", "Power BI", "Data Analytics"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/etl_pipeline",
      live: "#",
      icon: "📊"
    },
    {
      id: 7,
      title: "Debt Call Analysis Dashboard",
      description: "A Streamlit dashboard for analyzing and predicting outcomes of debt collection calls using machine learning and NLP with sentiment analysis.",
      technologies: ["NLP", "Sentiment Analysis", "Machine Learning", "Streamlit", "Feature Engineering", "Predictive Analytics"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/debt_call_analysis_dashboard",
      live: "https://nithinyanna10-debt-call-analysis-dashboard-dashboardapp-jdhiaw.streamlit.app/",
      icon: "📞"
    },
    {
      id: 8,
      title: "Impostor Hunt - Fake Text Detection",
      description: "Advanced fake text detection challenge solution using multiple models including CatBoost and BERT for improved accuracy in text classification.",
      technologies: ["BERT", "CatBoost", "NLP", "Text Classification", "Machine Learning", "Ensemble Methods"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/impostor_hunt_project",
      live: "#",
      icon: "🕵️"
    },
    {
      id: 10,
      title: "Cryptocurrency TradeBots - ML Trading System",
      description: "Advanced cryptocurrency trading system with real-time data processing, ML predictions, and automated trading bots. Features Docker orchestration, 12 trained models, and comprehensive technical analysis.",
      technologies: ["Machine Learning", "Docker", "Real-time Data", "Technical Analysis", "Streamlit", "Cron Jobs", "Trading Bots"],
      category: "Full-Stack & Systems",
      github: "https://github.com/nithinyanna10/crypto",
      live: "#",
      icon: "₿"
    }
  ]
};

export const categoryConfig = {
  "Computer Vision": {
    color: "#4cc9f0",
    gradient: "from-cyan-400 via-blue-500 to-cyan-600",
    icon: "🔷",
    description: "Advanced computer vision systems for detection, tracking, and analysis"
  },
  "Reinforcement Learning": {
    color: "#10b981",
    gradient: "from-green-400 via-emerald-500 to-green-600",
    icon: "🟢",
    description: "Intelligent agents learning through interaction and reward optimization"
  },
  "AI / LLM / RAG": {
    color: "#b5179e",
    gradient: "from-purple-400 via-pink-500 to-purple-600",
    icon: "🧠",
    description: "Large language models, RAG systems, and AI-powered applications"
  },
  "Full-Stack & Systems": {
    color: "#f59e0b",
    gradient: "from-orange-400 via-amber-500 to-orange-600",
    icon: "💻",
    description: "End-to-end systems, APIs, pipelines, and production-ready applications"
  }
};

