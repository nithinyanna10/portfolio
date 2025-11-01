import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import Background from '../components/Background';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      issueDate: "October 22, 2025",
      expirationDate: "October 22, 2027",
      description: "The Oracle Cloud Infrastructure 2025 Generative AI Professional certification is designed for Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals. Individuals who earn this credential have a strong understanding of Large Language Models (LLMs) and are skilled at using OCI Generative AI Service. They are also familiar with techniques such as Retrieval-Augmented Generation, Semantic Search, Vector database, and LangChain, to build, trace, evaluate, and deploy LLM applications.",
      skills: [
        "Large Language Models (LLMs)",
        "OCI Generative AI Service",
        "Retrieval-Augmented Generation (RAG)",
        "Semantic Search",
        "Vector database",
        "LangChain"
      ],
      badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E82C310EF6955D7797FB930E39EF26BA39A23D5065E017B9740ABC5694D1BDD8",
      logo: "https://www.oracle.com/a/ocom/img/rc30hporacle-logo.svg",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Google Cloud Skills Profile",
      issuer: "Google Cloud",
      issueDate: "Various Dates",
      expirationDate: "Ongoing",
      description: "Comprehensive Google Cloud Platform certifications and skills validated through Google Cloud Skills Boost. Demonstrates expertise in cloud computing, data engineering, and machine learning on GCP.",
      skills: [
        "Google Cloud Platform (GCP)",
        "Cloud Computing",
        "Data Engineering",
        "Machine Learning",
        "BigQuery",
        "Cloud Infrastructure"
      ],
      badgeUrl: "https://cloudskillsboost.google/public_profiles/75336f99-07cd-4da6-86b8-ea6104906ac8",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v906a1686c38acf7b4f2c96f8f7d2b2c5/cloud/images/favicons/onecloud/svg/cloud.svg",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 relative overflow-hidden bg-black">
      <Background />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Certifications</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional certifications validating expertise in AI, cloud computing, and generative AI technologies
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="glass-card hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Badge/Logo Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br ${cert.color} p-4 flex items-center justify-center shadow-2xl`}>
                    <FaAward className="text-white text-5xl md:text-6xl" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      >
                        {cert.title}
                      </motion.h2>
                      <motion.p 
                        className="text-xl text-cyan-400 font-semibold mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        {cert.issuer}
                      </motion.p>
                    </div>
                  </div>

                  <motion.p 
                    className="text-gray-300 mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                  >
                    {cert.description}
                  </motion.p>

                  {/* Date Information */}
                  <motion.div 
                    className="flex flex-wrap gap-4 mb-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    <div>
                      <span className="text-gray-400">Issued: </span>
                      <span className="text-cyan-400 font-semibold">{cert.issueDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Expires: </span>
                      <span className={cert.expirationDate === "Ongoing" ? "text-green-400" : "text-yellow-400"}>{cert.expirationDate}</span>
                    </div>
                  </motion.div>

                  {/* Skills */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                    className="mb-6"
                  >
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Key Skills & Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1 + index * 0.2 + skillIndex * 0.05 }}
                          className="skill-badge"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Verify Button */}
                  <motion.a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  >
                    <span>Verify Certification</span>
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block">
            <p className="text-gray-300">
              <span className="text-cyan-400 font-semibold">Note:</span> All certifications are verifiable through the official issuer portals linked above.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;

