import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Contact</span> Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities and collaborations in AI/ML and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Send Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">nyanna@buffalo.edu</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1-716-907-8910</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Buffalo, NY, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <a href="https://github.com/nithinyanna10" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    github.com/nithinyanna10
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/nithin-yanna-716054217" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    linkedin.com/in/nithin-yanna-716054217
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Available For</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Full-time Roles</span>
                <span className="skill-badge">AI/ML Research</span>
                <span className="skill-badge">Data Science</span>
                <span className="skill-badge">MLOps Engineering</span>
                <span className="skill-badge">Full stack </span>
                <span className="skill-badge">Data Analytics</span>
                <span className="skill-badge">Computer Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 