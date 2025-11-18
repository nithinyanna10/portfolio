import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { cardHover, cardTap, projectCardVariants } from '../utils/animations';

const ProjectCard = ({ project, index, categoryColor }) => {
  return (
    <motion.div
      custom={index}
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      whileHover={cardHover}
      whileTap={cardTap}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="glass-card h-full flex flex-col relative overflow-hidden cursor-pointer"
        style={{
          borderColor: `${categoryColor}40`,
          boxShadow: `0 4px 20px ${categoryColor}10`
        }}
      >
        {/* Neon border on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            border: `1px solid ${categoryColor}`,
            boxShadow: `0 0 20px ${categoryColor}40, inset 0 0 20px ${categoryColor}10`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex-1">
          {/* Icon and Category */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{project.icon || '📦'}</span>
            <span 
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: `${categoryColor}20`,
                color: categoryColor
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="text-xs px-2 py-1 rounded-full border"
                style={{
                  borderColor: `${categoryColor}40`,
                  color: `${categoryColor}CC`,
                  backgroundColor: `${categoryColor}10`
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span 
                className="text-xs px-2 py-1 rounded-full"
                style={{ color: `${categoryColor}CC` }}
              >
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <Link to={`/projects/${project.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold transition-colors duration-300"
              style={{ color: categoryColor }}
            >
              Learn More →
            </motion.button>
          </Link>
          <div className="flex space-x-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={18} />
            </motion.a>
            {project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaExternalLinkAlt size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${categoryColor}, transparent)`
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

