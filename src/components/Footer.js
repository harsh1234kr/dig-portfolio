import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3 className="connectTitle">Connect with me</h3>
      <div className="socialMedia">
        <a href="https://www.instagram.com/_.h_a_r_s_.h/"><InstagramIcon /></a>
        <a href="https://twitter.com/HarshKu5137516"><TwitterIcon /></a>
        <a href="https://linkedin.com/in/harsh-kumar-98424b252"><LinkedInIcon /></a>
        <a href="https://github.com/harsh1234kr"><GitHubIcon /></a>
        <a href="kumarharshhk4@gmail.com"><EmailIcon /></a>
      </div>
      <p>&copy; 2023 Harsh Kumar</p>
    </div>
  );
}

export default Footer;
