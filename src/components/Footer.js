import React from "react"; // Import React library to build the component
import { motion } from "framer-motion"; // Import motion for animation effects from the 'framer-motion' library
import "./Footer.css"; // Import CSS for styling the Footer component

const Footer = () => {
  return (
    <motion.footer // Using motion component to animate the footer
      className="footer" // Applying CSS class to the footer element
      initial={{ opacity: 0 }} // Initial opacity set to 0 (invisible) when the component first loads
      animate={{ opacity: 1 }} // Animate to opacity of 1 (fully visible)
      transition={{ duration: 1.5 }} // Animation transition duration of 1.5 seconds
    >
      <p>
        © 2024{" "}
        <motion.a
          href="https://your-digital-architect.onrender.com" // The URL that the anchor tag links to
          target="_blank" // Open the link in a new tab
          rel="noreferrer" // Prevents sending the referrer information when opening the link
          whileHover={{ scale: 1.1, color: "#06deff" }} // When hovered, the link will slightly enlarge and change color
          transition={{ type: "spring", stiffness: 200 }} // Applies a spring transition effect with a stiffness of 300 when hovering
        >
          Neethling Development
        </motion.a>{" "}
        | All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer; // Exporting the Footer component so it can be used in other parts of the application
