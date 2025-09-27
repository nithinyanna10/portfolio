// Simple Analytics Server for Portfolio
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Analytics data storage
const analyticsFile = path.join(__dirname, 'analytics.json');

// Initialize analytics file if it doesn't exist
if (!fs.existsSync(analyticsFile)) {
  fs.writeFileSync(analyticsFile, JSON.stringify({
    events: [],
    stats: {
      totalGameStarts: 0,
      totalGameCompletes: 0,
      totalGameAbandons: 0,
      uniquePlayers: 0,
      completionRate: 0
    }
  }));
}

// Load analytics data
const loadAnalytics = () => {
  try {
    return JSON.parse(fs.readFileSync(analyticsFile, 'utf8'));
  } catch (error) {
    return {
      events: [],
      stats: {
        totalGameStarts: 0,
        totalGameCompletes: 0,
        totalGameAbandons: 0,
        uniquePlayers: 0,
        completionRate: 0
      }
    };
  }
};

// Save analytics data
const saveAnalytics = (data) => {
  fs.writeFileSync(analyticsFile, JSON.stringify(data, null, 2));
};

// Update stats
const updateStats = (data) => {
  const gameStarts = data.events.filter(e => e.type === 'game_start').length;
  const gameCompletes = data.events.filter(e => e.type === 'game_complete').length;
  const gameAbandons = data.events.filter(e => e.type === 'game_abandon').length;
  const uniqueSessions = new Set(data.events.map(e => e.sessionId)).size;
  
  data.stats = {
    totalGameStarts: gameStarts,
    totalGameCompletes: gameCompletes,
    totalGameAbandons: gameAbandons,
    uniquePlayers: uniqueSessions,
    completionRate: gameStarts > 0 ? (gameCompletes / gameStarts * 100).toFixed(1) : 0
  };
  
  return data;
};

// Routes
app.get('/api/analytics', (req, res) => {
  const data = loadAnalytics();
  res.json(data);
});

app.post('/api/analytics/events', (req, res) => {
  try {
    const data = loadAnalytics();
    const event = {
      ...req.body,
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress
    };
    
    data.events.push(event);
    const updatedData = updateStats(data);
    saveAnalytics(updatedData);
    
    res.json({ success: true, message: 'Event recorded' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/analytics/stats', (req, res) => {
  const data = loadAnalytics();
  res.json(data.stats);
});

app.get('/api/analytics/events', (req, res) => {
  const data = loadAnalytics();
  const limit = parseInt(req.query.limit) || 100;
  const events = data.events.slice(-limit).reverse();
  res.json(events);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Analytics server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Analytics API: http://localhost:${PORT}/api/analytics`);
});

module.exports = app;
