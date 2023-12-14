// Projects.js

import React, { useState, useEffect } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showProjects, setShowProjects] = useState(false);

  const categories = ["All Categories", "Engineering", "AMVs", "Research Papers"];

  const filteredProjects =
    selectedCategory === "All Categories"
      ? ProjectList
      : ProjectList.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    setShowProjects(true);
  }, []);

  return (
    <div className={`projects ${showProjects ? "show" : ""}`}>
      {/* Category buttons */}
      <div className="categoryButtons">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Conditional rendering based on the selected category */}
      {selectedCategory === "All Categories" && (
        <div className="categoryLayout allCategoriesLayout">
          <h1>Welcome to my Projects section</h1>
          <p>Where I showcase my expertise and passion across multiple technological domains.</p>
        </div>
      )}

      {selectedCategory === "Engineering" && (
        <div className="categoryLayout engineeringLayout">
          <h1>Welcome</h1>
          <p>Explore my innovative engineering projects.</p>
        </div>
      )}

      {selectedCategory === "AMVs" && (
        <div className="categoryLayout amvLayout">
          <h1>Irasshaimase</h1>
          <p>Enjoy my Anime Music Videos.</p>
        </div>
      )}

      {selectedCategory === "Research Papers" && (
        <div className="categoryLayout researchPaperLayout">
          {/* Add a container with class "content" */}
          <div className="content">
            <h1>Research Papers</h1>
            <p>Explore research papers and academic contributions.</p>
          </div>
        </div>
      )}

      {/* Project list */}
      <div className="projectList">
        {filteredProjects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
