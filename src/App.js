import React, { useState, useEffect } from "react";
import "./App.scss"; // Main styles
import "./styles/main.scss"; // Additional styles
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import StatsContainer from "./Components/StatsContainer";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Initialize theme based on localStorage or default to false (light theme)
    return localStorage.getItem("theme") === "dark";
  });
  const [selectedCountry, setSelectedCountry] = useState(() => {
    // Initialize country based on localStorage or default to "US"
    return localStorage.getItem("selectedCountry") || "US";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // Handle country change from localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const savedCountry = localStorage.getItem("selectedCountry");
      if (savedCountry && savedCountry !== selectedCountry) {
        setSelectedCountry(savedCountry);
      }
    }, 1000); // Check every second for changes

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedCountry]);

  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <Sidebar toggleTheme={() => setIsDarkTheme(!isDarkTheme)} theme={isDarkTheme} />
      
      <div className="content-panel">
        <Topbar theme={isDarkTheme} selectedCountry={selectedCountry} />
        <StatsContainer theme={isDarkTheme} />
      </div>
    </div>
  );
}

export default App;



