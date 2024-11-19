// Importing necessary dependencies
import React from "react"; // React library for building user interfaces
import { motion } from "framer-motion"; // Framer Motion for animations
import "./Experience.css"; // Importing the CSS file for styling
// Importing images for each experience
import MaxiCool from "../media/MaxiCool.jpeg";
import ErsBio from "../media/ErsBio.jpeg";
import ErsRoof from "../media/ErsRoof1.jpeg";
import CADCO from "../media/CadCo1.png";
import BuildIt from "../media/BuildIt1.jpg";

const Experience = () => {
  // An array of experience objects, each containing information for a specific job experience
  const experiences = [
    {
      title: "Technician", // Job title
      company: "Maxicool, Stikland", // Company name and location
      duration: "Aug 2017 - Jan 2018", // Duration of employment
      description:
        "I specialized in installing refrigeration units on refrigerated trucks, ensuring optimal temperature control and reliability. I also repaired and maintained faulty units, quickly diagnosing and resolving issues to minimize downtime.", // Description of the responsibilities
      image: MaxiCool, // Image associated with this job
      reference: "Contact Philip @ 083 452 6202", // Reference contact for verification
    },
    {
      title: "Senior Technician",
      company: "ERS Biometrics, Cape Town",
      duration: "Nov 2018 – Apr 2021",
      description:
        "I specialized in installing biometric clocking systems at access control points for secure employee time tracking. My role included servicing and repairing these systems to ensure uninterrupted operation. I also managed job documentation and reporting, monitored stock levels for necessary materials, and maintained company vehicles to ensure they were safe and ready for on-site visits.",
      image: ErsBio,
      reference: "Contact Danie @ 076 828 9968",
    },
    {
      title: "Assistant Manager",
      company: "ERS Roofing & Steel, Gansbaai",
      duration: "May 2021 – June 2022",
      description:
        "I have a proven track record of delivering excellent customer service through various channels, including in-person, phone, and email. I assist customers with product selection, payment processing, and manage returns, refunds, and exchanges. My problem-solving skills help me resolve issues professionally, even in stressful situations. I coordinate with suppliers, ensure warehouse compliance with Health & Safety, and am skilled in data entry, inventory management, deliveries, steel cutting, and forklift operation.",
      image: ErsRoof,
      reference: "Contact Freddie @ 074 702 4366",
    },
    {
      title: "Forman, Health & Safety Officer",
      company: "CADCO Building, Rondebosch",
      duration: "June 2022 – June 2023",
      description:
        "I conducted health and safety audits, identified hazards, investigated incidents, and recommended improvements. I ensured compliance through inspections, managed the Health & Safety file, and provided protective equipment. I supervised over 30 workers, planned and managed tasks, created schedules, and oversaw machinery use. I also resolved conflicts, maintained a safe work environment, reported progress, and managed staffing and task delegation.",
      image: CADCO,
      reference: "Contact Steve @ 082 649 1884",
    },
    {
      title: "Salesman",
      company: "Build It, Gansbaai",
      duration: "June 2023 – Present",
      description:
        "I manage the paint bar, ensuring efficient organization and inventory control. I excel in sales and offer expert advice on paint products and applications to both business and individual customers. My role involves overseeing stock organization with attention to detail, handling daily tasks, and contributing to store operations and customer satisfaction. My experience with customer interactions and internal processes makes me a valuable asset in any retail environment.",
      image: BuildIt,
      reference: "Contact Tinus @ 083 294 2205",
    },
  ];

  return (
    // Using motion.section for a smooth animation when the component comes into view
    <motion.section
      id="experience" // Assigns an ID to the section for styling or linking
      className="experience" // Assigns a class for styling
      initial={{ opacity: 0, y: 50 }} // Initial animation state: hidden and positioned 50px below
      whileInView={{ opacity: 1, y: 0 }} // Animation when the component comes into view: fully visible and positioned at 0px
      viewport={{ once: true }} // Ensures the animation only happens once when it comes into view
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      <h2 className="expTag">Experience</h2> {/* Section title */}
      <ul>
        {/* Loop through each experience and render it */}
        {experiences.map((exp, index) => (
          <motion.li
            key={index} // Use index as a key for the list item
            className="experience-item" // Class for each experience item
            initial={{ opacity: 0, y: 30 }} // Initial state for individual experience item animation
            animate={{ opacity: 1, y: 0 }} // Animation when in view
            transition={{ delay: index * 0.1, duration: 0.6 }} // Delays the animation of each item for a staggered effect
          >
            {/* Image section with a background image */}
            <div
              className="expImage"
              style={{
                backgroundImage: `url(${exp.image})`, // Dynamically set background image based on experience data
              }}
            >
              <div className="expImageOverlay"></div>{" "}
              {/* Overlay for the image */}
            </div>
            {/* Text section with experience details */}
            <div className="expText">
              <h3 className="expTitle">{exp.title}</h3> {/* Job title */}
              <p className="expComp">{exp.company}</p> {/* Company name */}
              <p className="expDur">{exp.duration}</p>{" "}
              {/* Employment duration */}
              <p className="expDesc">{exp.description}</p>{" "}
              {/* Job description */}
              <p className="expRef">{exp.reference}</p>{" "}
              {/* Reference contact */}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Experience; // Export the Experience component so it can be used in other parts of the app
