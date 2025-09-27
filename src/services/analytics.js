// Simple Analytics Service for Portfolio
class AnalyticsService {
  constructor() {
    // Use Netlify function for production, local storage for development
    this.apiUrl = process.env.NODE_ENV === 'production' 
      ? '/.netlify/functions/analytics' 
      : 'https://api.analytics.nithinportfolio.com';
    this.sessionId = this.generateSessionId();
    this.isOnline = navigator.onLine;
    this.pendingEvents = [];
    
    // Listen for online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushPendingEvents();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Track portfolio visits
  trackPortfolioVisit() {
    const event = {
      type: 'portfolio_visit',
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href,
      page: window.location.pathname
    };
    
    this.sendEvent(event);
  }

  // Track game events
  trackGameStart() {
    const event = {
      type: 'game_start',
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    };
    
    this.sendEvent(event);
  }

  trackGameComplete(moves, timeSpent) {
    const event = {
      type: 'game_complete',
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      moves: moves,
      timeSpent: timeSpent,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    };
    
    this.sendEvent(event);
  }

  trackGameAbandon(timeSpent) {
    const event = {
      type: 'game_abandon',
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      timeSpent: timeSpent,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    };
    
    this.sendEvent(event);
  }

  trackPageView(page) {
    const event = {
      type: 'page_view',
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      page: page,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    };
    
    this.sendEvent(event);
  }

  // Send event to analytics service
  async sendEvent(event) {
    if (!this.isOnline) {
      this.pendingEvents.push(event);
      return;
    }

    try {
      // Always store locally as backup
      const events = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
      events.push(event);
      localStorage.setItem('portfolio_analytics', JSON.stringify(events));
      
      // Try to send to Netlify function in production
      if (this.apiUrl.includes('netlify')) {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event)
        });
        
        if (response.ok) {
          console.log('Analytics stored in JSON file:', event.type);
        }
      }
    } catch (error) {
      console.log('Analytics event stored locally:', event);
      // Store locally if external service fails
      this.pendingEvents.push(event);
    }
  }

  // Flush pending events when back online
  async flushPendingEvents() {
    if (this.pendingEvents.length > 0) {
      for (const event of this.pendingEvents) {
        await this.sendEvent(event);
      }
      this.pendingEvents = [];
    }
  }

  // Get analytics data
  getAnalytics() {
    const events = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    const portfolioVisits = events.filter(e => e.type === 'portfolio_visit').length;
    const gameStarts = events.filter(e => e.type === 'game_start').length;
    const gameCompletes = events.filter(e => e.type === 'game_complete').length;
    const gameAbandons = events.filter(e => e.type === 'game_abandon').length;
    const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
    const uniqueVisitors = new Set(events.filter(e => e.type === 'portfolio_visit').map(e => e.sessionId)).size;
    
    return {
      totalPortfolioVisits: portfolioVisits,
      uniqueVisitors: uniqueVisitors,
      totalGameStarts: gameStarts,
      totalGameCompletes: gameCompletes,
      totalGameAbandons: gameAbandons,
      uniquePlayers: uniqueSessions,
      completionRate: gameStarts > 0 ? (gameCompletes / gameStarts * 100).toFixed(1) : 0,
      events: events
    };
  }

  // Clear analytics data (for testing)
  clearAnalytics() {
    localStorage.removeItem('portfolio_analytics');
    this.pendingEvents = [];
  }
}

// Create singleton instance
const analytics = new AnalyticsService();

export default analytics;
