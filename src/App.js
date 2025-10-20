import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DivisionsPage from './pages/DivisionsPage';
import HomePage from './pages/HomePage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router basename="/Agriculture_farming-OCT2025">
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <HomePage isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </>
          } />
          <Route path="/divisions" element={<DivisionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
