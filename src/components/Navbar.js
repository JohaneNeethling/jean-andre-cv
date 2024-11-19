import React, { useEffect, useState } from "react"; // Importing React and hooks for component functionality
import "./Navbar.css"; // Importing the CSS file for styling the Navbar

const Navbar = () => {
  // useState hook to manage the state of whether the page is scrolled or not
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the scroll event and set the state based on the scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Check if the scroll position is more than 50px
      setIsScrolled(true); // Set isScrolled to true if scrolled
    } else {
      setIsScrolled(false); // Set isScrolled to false if less than 50px
    }
  };

  // useEffect hook to add an event listener for the scroll event when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adding the scroll event listener

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle smooth scrolling to different sections of the page
  const handleSectionScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior (instant scroll)
    document.querySelector(id).scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element with the corresponding id
  };

  return (
    // The navbar has a conditional class 'scrolled' based on the isScrolled state
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul className="nav-links">
        <li>
          {/* About link that triggers smooth scrolling to the #bio section */}
          <a href="#bio" onClick={(e) => handleSectionScroll(e, "#bio")}>
            About
          </a>
        </li>
        <li>
          {/* Experience link that triggers smooth scrolling to the #experience section */}
          <a
            href="#experience"
            onClick={(e) => handleSectionScroll(e, "#experience")}
          >
            Experience
          </a>
        </li>
        <li>
          {/* Education link that triggers smooth scrolling to the #education section */}
          <a
            href="#education"
            onClick={(e) => handleSectionScroll(e, "#education")}
          >
            Education
          </a>
        </li>
        <li>
          {/* Contact link that triggers smooth scrolling to the #contact section */}
          <a
            href="#contact"
            onClick={(e) => handleSectionScroll(e, "#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component for use in other parts of the app
