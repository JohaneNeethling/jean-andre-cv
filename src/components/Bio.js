import React from "react"; // Importing React library to create components
import { motion } from "framer-motion"; // Importing motion from framer-motion to animate components
import JeanAndre from "../media/JeanAndre.jpg"; // Importing an image for the profile picture
import School from "../media/School.png"; // Importing an image related to education
import Drive from "../media/Drive.png"; // Importing an image related to driver's license
import Interests from "../media/Interests.png"; // Importing an image related to personal interests
import Lang from "../media/Languages.png"; // Importing an image related to language skills

import "./Bio.css"; // Importing the CSS file for styling

const Bio = () => {
  return (
    <motion.section
      id="bio" // Section identifier for styling and potential linking
      className="bio" // Applying CSS class for styling
      initial={{ opacity: 0, x: -100 }} // Initial animation state (invisible, from the left)
      animate={{ opacity: 1, x: 0 }} // Final animation state (fully visible, aligned to the left)
      transition={{ duration: 1 }} // Animation duration set to 1 second
    >
      <div className="bio-content-container">
        {/* Profile Picture and bio content */}
        <img src={JeanAndre} alt="ProfilePicture" className="profile-pic" />
        <div className="bio-content">
          <h2 className="hiTag">Hi, I'm Jean-Andre</h2>
          <p>
            {/* Bio paragraph describing the individual */}
            I’m a 26-year-old results-driven professional known for my
            dedication and proactive approach. I thrive in team environments
            where I build strong relationships with colleagues, clients, and
            suppliers. Outside of work, I’m an avid fisherman, which fuels my
            patience and focus. I’m passionate about tackling new challenges and
            using my problem-solving skills and creativity to drive team
            success. With excellent communication, adaptability, and a keen
            desire to learn, I’m excited to contribute to a dynamic team and
            advance my career in a role that values continuous improvement and
            expertise.
          </p>
        </div>
      </div>

      <div className="divLinks">
        {/* Section with various personal and professional details */}
        <img src={School} alt="School" className="divLink" />
        <p>Earned NSC Certificate from Monument Park High School (2012-2016)</p>

        <img src={Drive} alt="Driver's License" className="divLink" />
        <p>Holds a Code B Driver's License (25 April 2017)</p>

        <img src={Interests} alt="Interests" className="divLink" />
        <p>
          I enjoy fishing, watching sports, catching up on the latest movies,
          and socializing with new people.
        </p>

        <img src={Lang} alt="Languages" className="divLink" />
        <p>Fluent in both English and Afrikaans.</p>
      </div>
    </motion.section>
  );
};

export default Bio; // Exporting the Bio component for use in other parts of the application
