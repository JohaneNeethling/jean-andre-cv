// Importing necessary libraries
import React from "react"; // Import React for building the component
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation effects
import "./Skills.css"; // Importing the CSS file for styling the component

// Defining the Skills component
const Skills = () => {
  // Defining an array of skills with their names and proficiency levels (in percentage)
  const skills = [
    { name: "Problem-Solving", level: 90 },
    { name: "Honesty", level: 95 },
    { name: "Communication", level: 80 },
    { name: "Time Management", level: 85 },
  ];

  return (
    // Motion section for animating the entire component
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden with some vertical offset
      whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and positioned correctly
      viewport={{ once: true }} // Animation triggers once when the section is in view
      transition={{ duration: 0.8 }} // Animation duration of 0.8 seconds
    >
      {/* Skills section with a custom class for styling */}
      <section id="skills" className="skills">
        <h2 className="skillsProg">Skills</h2>{" "}
        {/* Heading for the Skills section */}
        <div className="progress-list">
          {/* Mapping over the skills array and rendering each skill's name and progress bar */}
          {skills.map((skill, index) => (
            <div key={index} className="progress-item">
              <label>{skill.name}</label>{" "}
              {/* Displaying the name of the skill */}
              <div className="progress-bar">
                {/* Motion div for the progress bar animation */}
                <motion.div
                  className="progress" // Class for the progress bar style
                  initial={{ width: 0 }} // Initial width is 0 (hidden)
                  animate={{ width: `${skill.level}%` }} // Animate width to the skill level (percentage)
                  transition={{
                    duration: 1.2, // Animation duration of 1.2 seconds
                    ease: "easeInOut", // Smooth easing function for the animation
                    delay: 0.2 * index, // Delay each progress bar animation based on its index
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

// Exporting the Skills component to be used elsewhere in the app
export default Skills;
