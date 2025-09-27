import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaTrophy, FaClock, FaGamepad } from 'react-icons/fa';
import analytics from '../services/analytics';

const AnalyticsDashboard = () => {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setData(analytics.getAnalytics());
  }, []);

  if (!data) return null;

  const stats = [
    {
      icon: <FaChartLine className="text-2xl" />,
      label: 'Portfolio Visits',
      value: data.totalPortfolioVisits,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      label: 'Unique Visitors',
      value: data.uniqueVisitors,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: <FaGamepad className="text-2xl" />,
      label: 'Game Plays',
      value: data.totalGameStarts,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      label: 'Game Wins',
      value: data.totalGameCompletes,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-cyan-400 flex items-center">
          <FaChartLine className="mr-2" />
          Private Analytics (You Only)
        </h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${stat.bgColor} rounded-lg p-4 text-center border border-gray-600`}
          >
            <div className={`${stat.color} mb-2 flex justify-center`}>
              {stat.icon}
            </div>
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4"
        >
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Recent Activity</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {data.events.slice(-10).reverse().map((event, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">
                    {event.type === 'portfolio_visit' && '👁️ Portfolio Visited'}
                    {event.type === 'game_start' && '🎮 Game Started'}
                    {event.type === 'game_complete' && '🏆 Game Completed'}
                    {event.type === 'game_abandon' && '⏹️ Game Abandoned'}
                    {event.type === 'page_view' && '📄 Page Viewed'}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Data stored locally for privacy</span>
            <button
              onClick={() => {
                analytics.clearAnalytics();
                setData(analytics.getAnalytics());
              }}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Clear Data
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnalyticsDashboard;
