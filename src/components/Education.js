// Importing necessary modules from React and Framer Motion
import React from "react";
import { motion } from "framer-motion";
import "./Education.css"; // Importing the CSS for styling the component

const Education = () => {
  // Define an array of education data
  const education = [
    {
      degree: "Demonstrate knowledge pertaining to fires in working places",
      institution: "CPME: Construction Training Provider",
      year: "05-04-2023",
    },
    {
      degree: "Conduct a continuous risk assessment in a workplace [HIRA]",
      institution: "CPME: Construction Training Provider",
      year: "01-03-2023",
    },
    {
      degree: "Explain emergency preparedness and response procedures",
      institution: "CPME: Construction Training Provider",
      year: "15-02-2023",
    },
    {
      degree:
        "Describe the functions of the workplace health and safety representative [SHE REP]",
      institution: "CPME: Construction Training Provider",
      year: "15-03-2023",
    },
  ];

  // Return JSX that renders the education section with animation effects
  return (
    // motion.section applies animations to the section
    <motion.section
      id="education" // Unique identifier for this section
      className="education" // Class for styling this section
      initial={{ opacity: 0, y: 50 }} // Initial animation state (invisible, slightly moved down)
      whileInView={{ opacity: 1, y: 0 }} // Animation when the element comes into view (fully visible and in its original position)
      viewport={{ once: true }} // Animation triggers only once when the element is in view
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      <h2 className="didYou">Did you know...?</h2>
      {/* Introduction paragraph explaining the user's qualifications */}
      <p className="introDidYou">
        I’m certified in Occupational Health and Safety with extensive
        experience in implementing safety protocols in steel construction!
        Skilled in conducting risk assessments, developing safety plans, and
        ensuring compliance with safety regulations, I have a proven ability to
        promote a safe working environment through training, inspections, and
        effective communication. Don't believe me? See for yourself.
      </p>
      <ul>
        {/* Loop through the education array to render each item */}
        {education.map((edu, index) => (
          // motion.li applies animations to each list item
          <motion.li
            key={index} // Assigning a unique key to each list item for efficient rendering
            className="education-item" // Class for styling each list item
            initial={{ opacity: 0, x: -100 }} // Initial state for the list item (invisible, moved left)
            whileInView={{ opacity: 1, x: 0 }} // Animation when the list item comes into view (fully visible and in its original position)
            transition={{ duration: 0.6, delay: index * 0.1 }} // Animation duration and delay based on the index
          >
            {/* Display degree title, institution, and year for each education item */}
            <h3 className="degreeTag">{edu.degree}</h3>
            <p className="eduTag">{edu.institution}</p>
            <span>{edu.year}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

// Export the Education component to be used elsewhere in the application
export default Education;
