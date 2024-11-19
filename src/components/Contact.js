import React from "react"; // Importing React to create components
import { motion } from "framer-motion"; // Importing 'motion' from framer-motion for animations
import Phone from "../media/Phone.png"; // Importing a phone icon image
import Mail from "../media/Email.png"; // Importing an email icon image
import "./Contact.css"; // Importing the styles for the contact section

// The Contact component, which represents the contact section on a webpage
const Contact = () => {
  return (
    <motion.section
      id="contact" // This sets the ID of the section for styling and navigation
      className="contact" // This sets the CSS class for styling the section
      initial={{ opacity: 0, y: 50 }} // Initial animation state (opacity 0, 50px down)
      whileInView={{ opacity: 1, y: 0 }} // Animation state when in view (fade in, move to normal position)
      viewport={{ once: true }} // The animation triggers only once when the section enters the viewport
      transition={{ duration: 0.8 }} // Duration of the animation (0.8 seconds)
    >
      <h2 className="getInTouch">Want to get in touch?</h2>{" "}
      {/* Heading of the section */}
      <p className="introContact">
        I welcome the opportunity to connect and discuss potential
        collaborations or job opportunities.
        <br /> Feel free to reach out to me through any of the methods below!
      </p>{" "}
      {/* Introductory text explaining how to get in touch */}
      {/* Container for contact methods (phone and email) */}
      <div className="contact-links">
        {/* Phone contact container with animations */}
        <motion.div
          className="phoneContainer"
          initial={{ opacity: 0 }} // Initial state (invisible)
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 0.6, delay: 0.2 }} // Animation duration and delay
        >
          {/* Phone icon with hover animation */}
          <motion.img
            src={Phone} // Phone icon image
            aria-label="Phone Icon" // Accessibility label for the image
            className="iconPhone" // CSS class for the icon
            whileHover={{ scale: 1.2, rotate: 15 }} // Hover effect (scale and rotate the icon)
            transition={{ type: "spring", stiffness: 300 }} // Animation details for the hover effect
          />
          {/* Email link with hover effect */}
          <a
            href="mailto:dup2344@gmail.com" // Email link
            className="contact-link" // CSS class for the link
            whileHover={{ color: "#00d1b2" }} // Hover effect (color change)
            transition={{ duration: 0.3 }} // Hover effect duration
          >
            Email me at dup2344@gmail.com
          </a>
        </motion.div>

        {/* Email contact container with animations */}
        <motion.div
          className="mailContainer"
          initial={{ opacity: 0 }} // Initial state (invisible)
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 0.6, delay: 0.4 }} // Animation duration and delay
        >
          {/* Email icon with hover animation */}
          <motion.img
            src={Mail} // Email icon image
            aria-label="Email Icon" // Accessibility label for the image
            className="iconMail" // CSS class for the icon
            whileHover={{ scale: 1.2, rotate: -15 }} // Hover effect (scale and rotate the icon)
            transition={{ type: "spring", stiffness: 300 }} // Animation details for the hover effect
          />
          {/* Phone call link with hover effect */}
          <a
            href="tel:+27762938390" // Phone link
            className="contact-link" // CSS class for the link
            whileHover={{ color: "#00d1b2" }} // Hover effect (color change)
            transition={{ duration: 0.3 }} // Hover effect duration
          >
            Call me at 076 293 8390
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; // Exporting the component for use in other parts of the app
