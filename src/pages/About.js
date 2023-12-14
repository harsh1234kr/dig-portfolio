import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function About() {
  return (
    <div className="About Me">
      <div className="introduction">
        <h2>About Me:</h2>
        <p>
          I'm a passionate computer science student with a focus on Cyber Security and Digital Forensics.
          This is my journey through education and certifications.
        </p>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bijendra Public School, Purnia, Bihar
          </h3>
          <p>School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VIT Bhopal University, Madhya Pradesh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">B.Tech</h4>
          <p>Computer Science and Engineering with specialization in Cyber Security and Digital Forensics</p>
        </VerticalTimelineElement>
        {/* Add your certifications below */}
        <VerticalTimelineElement
          className="vertical-timeline-element--certification"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<CheckCircleIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            AWS Certified Cloud Practitioner
          </h3>
          <p>AWS Certification for Cloud Practitioners.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--certification"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<CheckCircleIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CISCO Junior Cyber Security Analyst Career Path
          </h3>
          <p>CISCO Certification for Junior Cyber Security Analyst Career Path.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--certification"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<CheckCircleIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VMware Modern Applications
          </h3>
          <p>VMware Certification for Modern Applications.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--certification"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<CheckCircleIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Smart Bridge Modern Application Development
          </h3>
          <p>Smart Bridge Certification for Modern Application Development.</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default About;