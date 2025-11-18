import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CategorySection = ({ 
  title, 
  subtitle, 
  gradientClass, 
  projects, 
  children 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${gradientClass} rounded-xl border border-white/5 py-6 sm:py-8 px-4 sm:px-6 md:px-10 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:backdrop-blur-sm`}
      style={{ 
        backgroundColor: 'rgba(13, 17, 23, 0.4)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Background Accent Glow */}
      <div className="background-accent-glow" />
      
      {/* Header */}
      <div 
        className="flex flex-col sm:flex-row sm:items-start sm:justify-between cursor-pointer relative z-10 gap-3 sm:gap-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 mt-1 text-xs sm:text-sm max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 sm:ml-4">
          {/* Project Count Pill */}
          {projects && (
            <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-gray-400 bg-white/5 whitespace-nowrap">
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
          )}
          
          {/* Expansion Arrow */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <FaChevronDown size={18} className="sm:w-5 sm:h-5" />
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mt-6 pt-6 border-t border-white/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CategorySection;

