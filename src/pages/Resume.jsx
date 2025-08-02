import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Placeholder for resume download functionality
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download my resume or view it online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PDF Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">PDF Version</h2>
            <div className="bg-gray-800 rounded-lg p-8 text-center border-2 border-dashed border-cyan-400/30">
              <FaEye className="text-4xl text-cyan-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-4">Resume PDF Preview</p>
              <p className="text-sm text-gray-500">PDF will be embedded here</p>
            </div>
          </motion.div>

          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Download Options</h2>
            <div className="space-y-4">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                <FaDownload className="mr-2" />
                Download PDF Resume
              </motion.button>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Or view in different formats:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="skill-badge">PDF</span>
                  <span className="skill-badge">JSON</span>
                  <span className="skill-badge">Markdown</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 