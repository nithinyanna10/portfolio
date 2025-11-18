import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Background from '../components/Background';
import CategorySection from '../components/CategorySection';
import ProjectCardPremium from '../components/ProjectCardPremium';
import { projectsByCategory, categoryConfig } from '../data/projects';
import '../styles/gradients.css';

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const categorySubtitles = {
    "Computer Vision": "Advanced computer vision systems for detection, tracking, and analysis",
    "Reinforcement Learning": "Intelligent agents learning through interaction and reward optimization",
    "AI / LLM / RAG": "Large language models, RAG systems, and AI-powered applications",
    "Full-Stack & Systems": "End-to-end systems, APIs, pipelines, and production-ready applications"
  };

  const gradientMap = {
    "Computer Vision": "bg-gradient-cv",
    "Reinforcement Learning": "bg-gradient-rl",
    "AI / LLM / RAG": "bg-gradient-ai",
    "Full-Stack & Systems": "bg-gradient-fs"
  };

  return (
    <div className="min-h-screen pt-20 bg-black relative overflow-hidden">
      <Background />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent z-10" />
      
      {/* Content Container */}
      <div 
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-6 pb-24"
      >
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 mt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A curated collection of my work across AI, machine learning, and software engineering
          </p>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-6">
          {Object.keys(projectsByCategory).map((category, index) => {
            const projects = projectsByCategory[category];
            const gradientClass = gradientMap[category] || "bg-gradient-cv";
            const subtitle = categorySubtitles[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <CategorySection
                  title={category}
                  subtitle={subtitle}
                  gradientClass={gradientClass}
                  projects={projects}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {projects.map((project, projectIndex) => (
                      <ProjectCardPremium
                        key={project.id}
                        project={project}
                        index={projectIndex}
                      />
                    ))}
                  </motion.div>
                </CategorySection>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects; 