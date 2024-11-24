import React, { useState, useEffect } from 'react';
import './App.scss';  // Main styles
import './styles/main.scss';  // Additional styles
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Persist theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <Sidebar toggleTheme={toggleTheme} />
      <Topbar />
    </div>
  );
}

export default App;