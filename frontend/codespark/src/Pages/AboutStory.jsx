import React from "react";
import "./AboutStory.css";
import storyImg from "../assets/about.png";
import { FaBullseye, FaEye } from "react-icons/fa";

function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        {/* Left side */}
        <div className="about-story-left">
          <img src={storyImg} alt="Our Story" className="about-story-image" />
        </div>

        {/* Right side */}
        <div className="about-story-right">
          <div className="story-badge">OUR STORY</div>

          <h1 className="story-title">
            Empowering Learners for a
            <br />
            <span>Brighter Future</span>
          </h1>

          <p className="story-description">
            At CodeSpark, we empower individuals by unlocking their
            potential through quality education. We equip learners with tools,
            resources, and expertise to excel.
          </p>

          <div className="story-divider"></div>

          {/* Mission */}
          <div className="story-item">
            <div className="story-item-top">
              <div className="story-icon-box">
                <FaBullseye className="story-icon" />
              </div>
              <h2>OUR MISSION</h2>
            </div>

            <p>
              To empower students and aspiring developers with industry-ready
              skills through practical learning, real-world projects, and expert
              mentorship, helping them build successful careers in technology.
            </p>
          </div>

          {/* Vision */}
          <div className="story-item">
            <div className="story-item-top">
              <div className="story-icon-box">
                <FaEye className="story-icon" />
              </div>
              <h2>OUR VISION</h2>
            </div>

            <p>
              To become a leading platform in tech education by shaping future
              developers, innovators, and problem-solvers through high-quality
              learning experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;