import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import analytics from '../services/analytics';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [counters, setCounters] = useState({ projects: 0, models: 0, experience: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [neuralNodes, setNeuralNodes] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const [codeRain, setCodeRain] = useState([]);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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

  // Mathematical equations for floating display - WAY MORE FUN!
  const equations = [
    // Neural Networks & Deep Learning
    'f(x) = σ(Wx + b)', '∇L = ∂L/∂W', 'σ(z) = 1/(1 + e^(-z))', 'ReLU(x) = max(0, x)',
    'tanh(x) = (e^x - e^(-x))/(e^x + e^(-x))', 'LeakyReLU(x) = max(0.01x, x)',
    'Dropout: p = 0.5', 'BatchNorm: γ(x - μ)/σ + β', 'Adam: m_t = β₁m_{t-1} + (1-β₁)g_t',
    
    // Machine Learning Fundamentals
    'y = mx + b', 'J(θ) = 1/2m Σ(h_θ(x) - y)²', 'P(A|B) = P(B|A)P(A)/P(B)',
    'Entropy: H(X) = -Σp(x)log(p(x))', 'Gini = 1 - Σp_i²', 'Information Gain = H(S) - Σ|S_v|/|S|H(S_v)',
    'K-means: min Σ||x_i - μ_c||²', 'PCA: Y = XW', 'SVD: A = UΣV^T',
    
    // Advanced ML Algorithms
    'SVM: min ||w||² + CΣξ_i', 'Random Forest: ŷ = 1/B ΣT_b(x)', 'XGBoost: L = Σl(y_i, ŷ_i) + ΣΩ(f_k)',
    'Gradient Boosting: F_m(x) = F_{m-1}(x) + γ_m h_m(x)', 'AdaBoost: α_t = 1/2 ln((1-ε_t)/ε_t)',
    
    // Deep Learning Architectures
    'CNN: Conv2D(f, k, s, p)', 'RNN: h_t = tanh(W_hh h_{t-1} + W_xh x_t + b_h)',
    'LSTM: f_t = σ(W_f · [h_{t-1}, x_t] + b_f)', 'GRU: r_t = σ(W_r · [h_{t-1}, x_t])',
    'Transformer: Attention(Q,K,V) = softmax(QK^T/√d_k)V', 'BERT: [CLS] + tokens + [SEP]',
    
    // Optimization & Regularization
    'SGD: θ = θ - α∇J(θ)', 'Momentum: v = βv + α∇J(θ)', 'RMSprop: v = βv + (1-β)g²',
    'L1: λΣ|w_i|', 'L2: λΣw_i²', 'Early Stopping: patience = 10',
    
    // Statistics & Probability
    'Bayes: P(θ|D) = P(D|θ)P(θ)/P(D)', 'MLE: θ* = argmax P(D|θ)', 'MAP: θ* = argmax P(θ|D)',
    'Cross-Entropy: H(p,q) = -Σp(x)log(q(x))', 'KL Divergence: D_KL(P||Q) = ΣP(x)log(P(x)/Q(x))',
    
    // Data Science & Analytics
    'Correlation: r = Σ(x_i-x̄)(y_i-ȳ)/√Σ(x_i-x̄)²Σ(y_i-ȳ)²', 'R² = 1 - SS_res/SS_tot',
    'MAE = 1/n Σ|y_i - ŷ_i|', 'RMSE = √(1/n Σ(y_i - ŷ_i)²)', 'Precision = TP/(TP+FP)',
    'Recall = TP/(TP+FN)', 'F1 = 2(Precision×Recall)/(Precision+Recall)', 'AUC = ∫ROC curve',
    
    // Time Series & Forecasting
    'ARIMA: (p,d,q)', 'LSTM: c_t = f_t ⊙ c_{t-1} + i_t ⊙ g_t', 'Prophet: y(t) = g(t) + s(t) + h(t)',
    'Exponential Smoothing: ŷ_{t+1} = αy_t + (1-α)ŷ_t',
    
    // Natural Language Processing
    'TF-IDF: tf(t,d) × idf(t,D)', 'Word2Vec: CBOW & Skip-gram', 'GloVe: J = Σf(X_ij)(w_i^T w̃_j + b_i + b̃_j - log X_ij)²',
    'Attention: Attention(Q,K,V) = softmax(QK^T/√d_k)V', 'BERT: [CLS] + tokens + [SEP]',
    
    // Computer Vision
    'Convolution: (f * g)(t) = ∫f(τ)g(t-τ)dτ', 'Pooling: max/avg pooling', 'BatchNorm: γ(x - μ)/σ + β',
    'YOLO: Bounding Box + Class Probability', 'ResNet: H(x) = F(x) + x',
    
    // Reinforcement Learning
    'Q-Learning: Q(s,a) = Q(s,a) + α[r + γmax Q(s\',a\') - Q(s,a)]', 'Policy Gradient: ∇J(θ) = E[∇log π(a|s)Q(s,a)]',
    'Actor-Critic: A(s,a) = Q(s,a) - V(s)', 'PPO: L^CLIP(θ) = E[min(r_t(θ)A_t, clip(r_t(θ), 1-ε, 1+ε)A_t)]'
  ];


  // Initialize neural network nodes - MORE NODES!
  useEffect(() => {
    const nodes = [];
    for (let i = 0; i < 25; i++) {
      nodes.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      });
    }
    setNeuralNodes(nodes);
  }, []);

  // Initialize floating data points
  useEffect(() => {
    const points = [];
    for (let i = 0; i < 12; i++) {
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
    for (let i = 0; i < 6; i++) {
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

  // Track portfolio visit
  useEffect(() => {
    analytics.trackPortfolioVisit();
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
    const particleCount = isMobile ? 20 : 40;
    
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

  // Typing animation for "Hi, I'm Nithin"
  useEffect(() => {
    const text = "Hi, I'm Nithin";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Live counters animation
  useEffect(() => {
    const targetCounts = { projects: 6, models: 8, experience: 2 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const counterTimer = setInterval(() => {
      setCounters(prev => {
        const newCounters = {};
        Object.keys(targetCounts).forEach(key => {
          const target = targetCounts[key];
          const current = prev[key];
          const increment = target / steps;
          newCounters[key] = Math.min(current + increment, target);
        });
        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(counterTimer);
  }, []);

  // Mouse tracking for parallax
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Word-by-word description
  const words = "I’m a versatile engineer with a strong foundation in software development, data science, and AI; equally comfortable building scalable backend systems, deploying machine learning models, designing analytics dashboards, or crafting elegant frontend experiences. My work spans LLMs, forecasting, and document intelligence, but I never restrict myself — I take on what’s impactful.".split(' ');

  return (
    <div 
      className="min-h-screen text-white flex items-center justify-center relative overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={containerRef} className="absolute inset-0" />
      {/* Multi-Layer AI Background System */}
      
      {/* Additional Neural Network Layer */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full">
          {neuralNodes.map((node, index) => (
            <g key={node.id}>
              {/* Additional Neural Network Nodes */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                fill="#00ffff"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional Neural Network Connections */}
              {neuralNodes.slice(index + 1, index + 2).map((targetNode, targetIndex) => (
                <motion.line
                  key={`${node.id}-${targetNode.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="#00ffff"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </g>
          ))}
        </svg>
      </div>

      {/* Floating Data Points Layer - MORE VIBRANT! */}
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
              x: [0, Math.random() * 12 - 6, 0],
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 1, 0.3],
              rotate: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className="text-sm font-mono font-bold drop-shadow-lg">
              {point.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Neural Network Layer */}
      <div className="absolute inset-0 opacity-40">
        <svg 
          className="w-full h-full cursor-crosshair" 
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Add new node at click position
            const newNode = {
              id: Date.now() + Math.random(),
              x: Math.max(5, Math.min(95, x)),
              y: Math.max(5, Math.min(95, y))
            };
            
            setNeuralNodes(prev => [...prev, newNode]);
          }}
        >
          {/* Neural Network Connections */}
          {neuralNodes.map((node, index) => (
            <g key={node.id}>
              {/* Connections to nearby nodes */}
              {neuralNodes.slice(index + 1).map((targetNode) => {
                const distance = Math.sqrt(
                  Math.pow(node.x - targetNode.x, 2) + 
                  Math.pow(node.y - targetNode.y, 2)
                );
                if (distance < 25) { // Only connect nearby nodes
                  return (
                    <motion.line
                      key={`${node.id}-${targetNode.id}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="#00ffff"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                      }}
                    />
                  );
                }
                return null;
              })}
              
              {/* Neural Network Nodes */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="6"
                fill="#00ffff"
                stroke="#ffffff"
                strokeWidth="2"
                className="pointer-events-none"
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
            </g>
          ))}
        </svg>
      </div>

      {/* Interactive Particles Layer */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - mousePosition.x, 2) + 
            Math.pow(particle.y - mousePosition.y, 2)
          );
          const attraction = Math.max(0, 60 - distance) / 60;
          
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
                x: [0, particle.vx * 15, 0],
                y: [0, particle.vy * 15, 0],
                scale: [1, 1 + attraction * 0.3, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          );
        })}
      </div>

      {/* Code Rain Overlay - STABLE & READABLE! */}
      <div className="absolute inset-0 opacity-20">
        {codeRain.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-sm font-mono font-bold text-green-400 drop-shadow-lg"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 4 - 2, 0],
              scale: [1, 1.1, 1],
              opacity: [0.4, 1, 0.4],
              rotate: [0, Math.random() * 3 - 1.5, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: 0,
              ease: "easeInOut"
            }}
          >
            {item.term}
          </motion.div>
        ))}
      </div>

      
      <div className="text-center relative z-10" style={{ rotateX, rotateY }}>
        {/* Typing Animation for "Hi, I'm Nithin" */}
        <motion.h1 
          className="text-6xl font-bold mb-4 font-mono"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">
            {typedText}
          </span>
          {showCursor && (
            <span className="text-cyan-400 animate-pulse">|</span>
          )}
        </motion.h1>
        
        {/* Subheadline with blinking cursor */}
        <motion.p 
          className="text-2xl text-cyan-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          AI Researcher & Data Scientist
          <span className="text-cyan-400 animate-pulse ml-1">🤖</span>
        </motion.p>

        {/* Word-by-word description reveal */}
        <motion.div
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="flex flex-wrap justify-center gap-1">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 2.5 + index * 0.05,
                  ease: "easeOut"
                }}
                className="text-gray-300"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Discrete Game Link with Cloud Message - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Cloud Message */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 6 }}
            className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-200"
          >
            <div className="text-sm text-gray-700 font-medium">
              Wanna play a game? 🎮
            </div>
            {/* Cloud tail */}
            <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/90"></div>
          </motion.div>

          {/* Game Controller */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
          >
            <Link
              to="/gravity-maze"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              title="Hidden Game - Try it!"
            >
              <span className="text-2xl">🎮</span>
            </Link>
          </motion.div>
        </motion.div>


        {/* Live KPI Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="flex justify-center gap-8 mb-8"
        >
          {[
            { label: "Projects", value: Math.floor(counters.projects), suffix: "+", icon: <FaRocket /> },
            { label: "Models", value: Math.floor(counters.models), suffix: "+", icon: <FaBrain /> },
            { label: "Years", value: Math.floor(counters.experience), suffix: "+", icon: <FaCode /> }
          ].map((counter, index) => (
            <motion.div
              key={counter.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl mb-2 text-cyan-400">
                {counter.icon}
              </div>
              <div className="text-3xl font-bold text-cyan-400">
                {counter.value}{counter.suffix}
              </div>
              <div className="text-sm text-gray-400">{counter.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glowing Action Buttons with Ripple Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
          className="flex gap-4 justify-center mb-8"
        >
          <Link to="/projects">
            <motion.button 
              className="group relative px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">View Projects</span>
            </motion.button>
          </Link>
          
          <Link to="/about">
            <motion.button 
              className="group relative px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(34, 211, 238, 0.1)",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">About Me</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links with Glow Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5 }}
          className="flex gap-6 justify-center mb-8"
        >
          {[
            { icon: <FaGithub />, href: "https://github.com/nithinyanna10", label: "GitHub" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/nithin-yanna-716054217", label: "LinkedIn" },
            { icon: <FaEnvelope />, href: "mailto:nyanna@buffalo.edu", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ 
                scale: 1.2,
                y: -3,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5.2 + index * 0.1 }}
            >
              <div className="text-2xl">{social.icon}</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info with Fade-in Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.5 }}
          className="text-sm text-gray-400"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5.7 }}
          >
            📍 Buffalo, NY | 📧 nyanna@buffalo.edu
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5.9 }}
          >
            📱 +1-716-907-8910
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 