import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCardPremium = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="group"
    >
      <div 
        className="border border-white/5 rounded-xl p-5 sm:p-6 bg-white/[0.02] hover:border-white/10 hover:backdrop-blur-sm transition-all duration-400"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2 group-hover:text-white/90 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="text-xs border border-white/10 px-3 py-1 rounded-full text-gray-400 bg-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-gray-500 px-2">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <Link to={`/projects/${project.id}`}>
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>View Details</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.button>
          </Link>
          
          <div className="flex items-center space-x-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <FaGithub size={16} />
            </motion.a>
            {project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardPremium;

