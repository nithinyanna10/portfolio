import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import VANTA from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [counters, setCounters] = useState({ projects: 0, models: 0, experience: 0 });
  const vantaRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Neural network background
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x00ffff,
          backgroundColor: 0x000000,
          points: 15.00,
          maxDistance: 25.00,
          spacing: 20.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
      ref={vantaRef}
      className="min-h-screen text-white flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Neural network background is handled by Vanta.js */}
      
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