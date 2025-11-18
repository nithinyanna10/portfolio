import { motion } from 'framer-motion';
import CategoryUniverse from './CategoryUniverse';
import { fadeInUp, staggerContainer } from '../utils/animations';

const UniverseContainer = ({ projectsByCategory, categoryConfig }) => {
  const categories = Object.keys(projectsByCategory);

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {categories.map((category, index) => {
        const projects = projectsByCategory[category];
        const config = categoryConfig[category];
        
        if (!projects || projects.length === 0) return null;
        
        return (
          <CategoryUniverse
            key={category}
            category={category}
            projects={projects}
            config={config}
            index={index}
          />
        );
      })}
    </motion.div>
  );
};

export default UniverseContainer;

