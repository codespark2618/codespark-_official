import React from "react";
import "./AboutStory.css";
import storyImg from "../assets/about.png";
import Footer from "../Components/Footer";
import {
  FaBullseye,
  FaEye,
  FaBookOpen,
  FaCode,
  FaBriefcase,
  FaArrowUp,
} from "react-icons/fa";

function AboutStory() {

  const journeySteps = [
    {
      step: "STEP 01",
      title: "Learn Course",
      description:
        "Enroll in your chosen program and learn from industry-expert instructors with practical assignments",
      icon: <FaBookOpen />,
      theme: "blue",
    },
    {
      step: "STEP 02",
      title: "Build Projects",
      description:
        "Apply your knowledge by building real world projects that showcase your skills to employers.",
      icon: <FaCode />,
      theme: "orange",
    },
    {
      step: "STEP 03",
      title: "Internship",
      description:
        "Join our internship program, work with real teams, and gain the professional experience you need.",
      icon: <FaBriefcase />,
      theme: "green",
    },
    {
      step: "STEP 04",
      title: "Career Growth",
      description:
        "Launch your IT career with our placement support, resume building, and interview preparation.",
      icon: <FaArrowUp />,
      theme: "purple",
    },
  ];

  return (
    <>
      <section className="about-story-section">

        {/* ABOUT STORY FIRST */}
        <div className="about-story-container">
          <div className="about-story-left">
            <img src={storyImg} alt="Our Story" className="about-story-image" />
          </div>

          <div className="about-story-right">
            <div className="story-badge">OUR STORY</div>

            <h1 className="story-title">
              Empowering Learners for a
              <br />
              <span>Brighter Future</span>
            </h1>

            <p className="story-description">
              At CodeSpark, we empower individuals by unlocking their potential
              through quality education. We equip learners with tools,
              resources, and expertise to excel.
            </p>

            <div className="story-divider"></div>

            <div className="story-item">
              <div className="story-item-top">
                <div className="story-icon-box">
                  <FaBullseye className="story-icon" />
                </div>
                <h2>OUR MISSION</h2>
              </div>

              <p>
                To empower students and aspiring developers with industry-ready
                skills through practical learning, real-world projects, and
                expert mentorship, helping them build successful careers in
                technology.
              </p>
            </div>

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

        {/* JOURNEY SECOND */}
        <div className="journey-section">
          <div className="journey-badge">YOUR PATH TO SUCCESS</div>

          <h1 className="journey-title">
            The Student <span>Journey</span>
          </h1>

          <p className="journey-description">
            From enrollment to employment — a proven roadmap that takes you from
            <br />
            beginner to job-ready professional.
          </p>

          <div className="journey-grid">
            {journeySteps.map((item, index) => (
              <div className={`journey-card ${item.theme}`} key={index}>
                <div className="journey-line"></div>

                <div className={`journey-icon-box ${item.theme}`}>
                  {item.icon}
                </div>

                <div className={`journey-step ${item.theme}`}>
                  {item.step}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default AboutStory;
