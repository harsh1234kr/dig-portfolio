// ProjectItem.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectItem.css"; // Adjust the path if needed

function ProjectItem({ image, name, id, description, technology, link }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className={`projectItem ${showInfo ? "blur" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-container">
        <div className="flipper">
          <div className="front" style={{ backgroundImage: `url(${image})` }} />
          <div className="back">
            <h1>{name}</h1>
            <div className="additionalInfo">
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Technology:</strong> {technology}</p>
              <p>
                <strong>More:</strong>{" "}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/project/${id}`} style={{ textDecoration: "none", color: "black" }}>
      </Link>
    </div>
  );
}

export default ProjectItem;
