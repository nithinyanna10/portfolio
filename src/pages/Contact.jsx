import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import Background from '../components/Background';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xrbyearj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} via Portfolio Contact Form`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        console.log('Email sent successfully!');
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen pt-20 px-4 bg-black relative overflow-hidden">
      <Background />
      <div className="max-w-4xl mx-auto relative z-10">
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
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2"
              >
                <FaCheck className="text-green-400" />
                <span className="text-green-400">Message sent successfully!</span>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2"
              >
                <FaExclamationTriangle className="text-red-400" />
                <span className="text-red-400">Failed to send message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-gray-800 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
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