import React, { useState, useEffect } from "react";
import "./App.scss"; // Main styles
import "./styles/main.scss"; // Additional styles
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import StatsContainer from "./Components/StatsContainer";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");

  // Load theme and country from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedCountry = localStorage.getItem("selectedCountry");

    // Set the theme based on localStorage, default to light if not set
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    } else {
      // If no theme is set in localStorage, default to light
      setIsDarkTheme(false);
    }

    // Set the selected country from localStorage
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []); // Empty dependency array to run once on component mount

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]); // Only run when the theme changes

  // Handle country change (optional if you want to force reload on country change)
  useEffect(() => {
    const interval = setInterval(() => {
      const savedCountry = localStorage.getItem("selectedCountry");
      if (savedCountry && savedCountry !== selectedCountry) {
        setSelectedCountry(savedCountry);
      }
    }, 1000); // Check for country change every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedCountry]);

  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <Sidebar toggleTheme={() => setIsDarkTheme(!isDarkTheme)} theme={isDarkTheme} />
      
      <div className="content-panel">
        {/* Pass the selectedCountry to Topbar */}
        <Topbar theme={isDarkTheme} selectedCountry={selectedCountry} />
        <StatsContainer theme={isDarkTheme} />
      </div>
    </div>
  );
}

export default App;


