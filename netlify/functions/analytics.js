// Netlify Function for JSON Analytics Storage
const fs = require('fs');
const path = require('path');

// Analytics data file path
const ANALYTICS_FILE = '/tmp/portfolio_analytics.json';

// Initialize analytics file if it doesn't exist
const initializeAnalytics = () => {
  if (!fs.existsSync(ANALYTICS_FILE)) {
    const initialData = {
      events: [],
      stats: {
        totalPortfolioVisits: 0,
        uniqueVisitors: 0,
        totalGameStarts: 0,
        totalGameCompletes: 0,
        totalGameAbandons: 0,
        completionRate: 0
      },
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(initialData, null, 2));
  }
};

// Load analytics data
const loadAnalytics = () => {
  try {
    initializeAnalytics();
    return JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf8'));
  } catch (error) {
    console.error('Error loading analytics:', error);
    return {
      events: [],
      stats: {
        totalPortfolioVisits: 0,
        uniqueVisitors: 0,
        totalGameStarts: 0,
        totalGameCompletes: 0,
        totalGameAbandons: 0,
        completionRate: 0
      }
    };
  }
};

// Save analytics data
const saveAnalytics = (data) => {
  try {
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving analytics:', error);
  }
};

// Update stats from events
const updateStats = (data) => {
  const events = data.events;
  const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
  const portfolioVisits = events.filter(e => e.type === 'portfolio_visit').length;
  const gameStarts = events.filter(e => e.type === 'game_start').length;
  const gameCompletes = events.filter(e => e.type === 'game_complete').length;
  const gameAbandons = events.filter(e => e.type === 'game_abandon').length;
  
  data.stats = {
    totalPortfolioVisits: portfolioVisits,
    uniqueVisitors: uniqueSessions,
    totalGameStarts: gameStarts,
    totalGameCompletes: gameCompletes,
    totalGameAbandons: gameAbandons,
    completionRate: gameStarts > 0 ? (gameCompletes / gameStarts * 100).toFixed(1) : 0
  };
  
  return data;
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (event.httpMethod === 'POST') {
      // Store analytics event
      const eventData = JSON.parse(event.body);
      
      // Load existing data
      const data = loadAnalytics();
      
      // Add new event
      const newEvent = {
        ...eventData,
        ip_address: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown',
        server_timestamp: new Date().toISOString()
      };
      
      data.events.push(newEvent);
      
      // Update stats
      const updatedData = updateStats(data);
      
      // Save data
      saveAnalytics(updatedData);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true, 
          message: 'Analytics stored in JSON file',
          stats: updatedData.stats
        })
      };
    }

    if (event.httpMethod === 'GET') {
      // Get analytics data
      const data = loadAnalytics();
      const updatedData = updateStats(data);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          analytics: updatedData,
          message: 'Analytics loaded from JSON file'
        })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error: ' + error.message })
    };
  }
};
