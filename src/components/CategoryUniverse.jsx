import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { categoryCardVariants, staggerContainer } from '../utils/animations';

const CategoryUniverse = ({ category, projects, config, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={categoryCardVariants}
      initial="hidden"
      animate="visible"
      className="relative mb-8"
      style={{ perspective: '1000px' }}
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        {/* Layer 1: Starfield */}
        <div 
          className="absolute inset-0 opacity-30 starfield-animation"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, ${config.color}40, transparent),
                              radial-gradient(2px 2px at 60% 70%, ${config.color}30, transparent),
                              radial-gradient(1px 1px at 50% 50%, ${config.color}50, transparent),
                              radial-gradient(1px 1px at 80% 10%, ${config.color}40, transparent)`,
            backgroundSize: '200% 200%'
          }}
        />
        
        {/* Layer 2: Gradient Nebula */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-20 blur-3xl`}
        />
        
        {/* Layer 3: Noise Texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Main Category Card */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -4,
          transition: { duration: 0.3 }
        }}
        className="glass-card relative overflow-hidden cursor-pointer"
        style={{
          borderColor: `${config.color}40`,
          boxShadow: `0 8px 32px ${config.color}20`
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{config.icon}</span>
              <div>
                <h2 
                  className="text-3xl font-bold mb-1"
                  style={{ color: config.color }}
                >
                  {category} Universe
                </h2>
                <p className="text-gray-400 text-sm">{config.description}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: config.color }}
            >
              {isExpanded ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
            </motion.div>
          </div>

          {/* Project Count Badge */}
          <div className="flex items-center space-x-2">
            <span 
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: `${config.color}20`,
                color: config.color
              }}
            >
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
        </div>

        {/* Expanded Projects Grid */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isExpanded ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10"
          >
            {projects.map((project, projectIndex) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projectIndex}
                categoryColor={config.color}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${config.color}40, transparent 70%)`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CategoryUniverse;

