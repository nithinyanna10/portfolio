import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import QuickBuilds from './pages/QuickBuilds';
import GravityMaze from './pages/GravityMaze';
import AdminAnalytics from './pages/AdminAnalytics';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/quick-builds" element={<QuickBuilds />} />
            <Route path="/gravity-maze" element={<GravityMaze />} />
            <Route path="/admin-analytics" element={<AdminAnalytics />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
