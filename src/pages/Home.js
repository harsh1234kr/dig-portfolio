import React from "react";

import "../styles/Home.css";
import profilePicture from "../assets/profile-pic.png"; // Update the path

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h2>  Hey 👋, I'm Harsh! </h2>
        
        <div className="prompt">
          <p>iOS Developer | Cyber-Security Enthusiast | Video Editor | Student</p>
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <div className="skills-container">
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, NextJS, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
                TailwindCSS
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>NodeJS, MySQL, MongoDB</span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>Java, Swift, Python</span>
            </li>
            <li className="item">
              <h3>Video Editing</h3>
              <span>Final Cut Pro, Premiere Pro</span>
            </li>
            
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
