import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/projects" className="inline-flex items-center text-cyan-400 hover:text-white transition-colors duration-300 mb-8">
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>

          <div className="glass-card">
            <h1 className="text-4xl font-bold mb-6 gradient-text">
              Project {id} Details
            </h1>
            <p className="text-gray-300 mb-8">
              Detailed view of the project will be implemented here with code snippets, 
              before/after comparisons, and interactive elements.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="btn-primary"
              >
                <FaGithub className="mr-2" />
                View Code
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="btn-secondary"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 