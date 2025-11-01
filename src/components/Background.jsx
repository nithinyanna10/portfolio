import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
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

  // Initialize neural network nodes
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

  return (
    <>
      <div ref={containerRef} className="absolute inset-0" />
      
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
              {neuralNodes.slice(index + 1, index + 2).map((targetNode) => (
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

      {/* Floating Data Points Layer */}
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
        <svg className="w-full h-full">
          {/* Neural Network Connections */}
          {neuralNodes.map((node, index) => (
            <g key={node.id}>
              {/* Connections to nearby nodes */}
              {neuralNodes.slice(index + 1).map((targetNode) => {
                const distance = Math.sqrt(
                  Math.pow(node.x - targetNode.x, 2) + 
                  Math.pow(node.y - targetNode.y, 2)
                );
                if (distance < 25) {
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

      {/* Code Rain Overlay */}
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
    </>
  );
};

export default Background;

