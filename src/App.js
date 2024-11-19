// Importing necessary libraries and components
import React, { useState, useEffect } from "react"; // React and hooks (useState, useEffect)
import Navbar from "./components/Navbar"; // Import Navbar component
import Bio from "./components/Bio"; // Import Bio component
import Experience from "./components/Experience"; // Import Experience component
import Skills from "./components/Skills"; // Import Skills component
import Education from "./components/Education"; // Import Education component
import Contact from "./components/Contact"; // Import Contact component
import Footer from "./components/Footer"; // Import Footer component
import "./App.css"; // Import the CSS for styling

// Functional component for the main app
function App() {
  // State to manage the current theme ('dark' or 'light')
  const [theme, setTheme] = useState("dark");

  // useEffect hook to apply the correct theme class to the body tag
  useEffect(() => {
    // If the theme is dark, apply no class (default), else apply 'light-theme' class
    document.body.className = theme === "dark" ? "" : "light-theme";
  }, [theme]); // Dependency array means this effect runs whenever 'theme' changes

  // Function to toggle between 'dark' and 'light' themes
  const toggleTheme = () => {
    // Toggle the theme by setting it to the opposite value of the current theme
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Button to toggle theme */}
      <button onClick={toggleTheme} className="theme-toggle">
        {/* Display 'Light' if the theme is 'dark', and 'Dark' if the theme is 'light' */}
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      {/* Render other sections of the page */}
      <Bio />
      <Experience />
      <Education />
      <Skills />
      <Contact />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
