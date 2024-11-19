import React, { useEffect, useState } from "react"; // Import React and hooks
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
  // State to track if the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false);

  // State to manage the visibility of the mobile menu (hamburger menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle scroll event and change the navbar style based on scroll position
  const handleScroll = () => {
    // Check if scroll position is greater than 50 pixels to set the navbar style
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add "scrolled" class if scrolled down
    } else {
      setIsScrolled(false); // Remove "scrolled" class if near the top
    }
  };

  // useEffect hook to add and clean up the scroll event listener
  useEffect(() => {
    // Add the scroll event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  // Function to handle smooth scrolling to specific sections of the page
  const handleSectionScroll = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior (page jumping)
    document.querySelector(id).scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section with the given id
  };

  // Function to toggle the mobile menu visibility (hamburger menu)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state between true and false for menu visibility
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Navbar container with dynamic class "scrolled" when scrolled */}
      <div className="logo">MyLogo</div> {/* Logo section */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {/* Navigation links */}
        <li>
          <a href="#bio" onClick={(e) => handleSectionScroll(e, "#bio")}>
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={(e) => handleSectionScroll(e, "#experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => handleSectionScroll(e, "#education")}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleSectionScroll(e, "#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component for use in other parts of the app
