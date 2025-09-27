import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaTrophy, FaClock, FaGamepad, FaEye, FaDownload, FaTrash } from 'react-icons/fa';
import analytics from '../services/analytics';

const AdminAnalytics = () => {
  const [data, setData] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Simple password protection (you can change this)
  const ADMIN_PASSWORD = 'nithin2024'; // Change this to your preferred password

  useEffect(() => {
    if (isAuthenticated) {
      setData(analytics.getAnalytics());
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all analytics data?')) {
      analytics.clearAnalytics();
      setData(analytics.getAnalytics());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            🔒 Private Analytics Dashboard
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Access Analytics
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4 text-center">
            This is your private analytics dashboard
          </p>
        </motion.div>
      </div>
    );
  }

  const stats = [
    {
      icon: <FaEye className="text-2xl" />,
      label: 'Portfolio Visits',
      value: data?.totalPortfolioVisits || 0,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      label: 'Unique Visitors',
      value: data?.uniqueVisitors || 0,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: <FaGamepad className="text-2xl" />,
      label: 'Game Plays',
      value: data?.totalGameStarts || 0,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      label: 'Game Wins',
      value: data?.totalGameCompletes || 0,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
              <FaChartLine className="mr-3" />
              Private Analytics Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Your portfolio engagement metrics</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={exportData}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <FaDownload />
              <span>Export Data</span>
            </button>
            <button
              onClick={clearData}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <FaTrash />
              <span>Clear Data</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-lg p-6 border border-gray-600`}
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2 text-center`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-cyan-400">Detailed Analytics</h2>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {showDetails && (
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Recent Activity</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {data?.events.slice(-20).reverse().map((event, index) => (
                    <div key={index} className="flex items-center justify-between text-sm bg-gray-600/30 rounded p-2">
                      <span className="text-gray-300">
                        {event.type === 'portfolio_visit' && '👁️ Portfolio Visited'}
                        {event.type === 'game_start' && '🎮 Game Started'}
                        {event.type === 'game_complete' && '🏆 Game Completed'}
                        {event.type === 'game_abandon' && '⏹️ Game Abandoned'}
                        {event.type === 'page_view' && '📄 Page Viewed'}
                      </span>
                      <div className="text-right">
                        <div className="text-gray-400 text-xs">
                          {new Date(event.timestamp).toLocaleDateString()}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {new Date(event.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Session Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Sessions:</span>
                      <span className="text-white">{new Set(data?.events.map(e => e.sessionId)).size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Completion Rate:</span>
                      <span className="text-white">{data?.completionRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Data Storage</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Events:</span>
                      <span className="text-white">{data?.events.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Storage:</span>
                      <span className="text-white">Local Browser</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
