import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Nithin Reddy Yanna. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" />
              and lots of ☕
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <motion.a
              href="https://github.com/nithinyanna10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nithin-yanna-716054217"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:nyanna@buffalo.edu"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-6"
        >
          <span className="text-xs text-gray-500 font-mono">
            Built with React • Vite • Tailwind CSS • Framer Motion
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 