import React, { useState } from "react";
import "./AboutStory.css";
import storyImg from "../assets/about.png";
import Footer from "../Components/Footer";
import {
  FaBullseye,
  FaEye,
  FaTimes,
  FaBookOpen,
  FaCode,
  FaBriefcase,
  FaArrowUp,
} from "react-icons/fa";

function AboutStory() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    phoneNumber: "",
    courseName: "",
    email: "",
    availableTime: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    console.log("Demo Class Form Data:", formData);

    alert("Demo class request submitted successfully!");

    setFormData({
      studentName: "",
      phoneNumber: "",
      courseName: "",
      email: "",
      availableTime: "",
    });

    setShowDemoForm(false);
  };

  return (
    <>
      <section className="about-story-section">
        {/* TOP JOURNEY SECTION */}
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

                <div className={`journey-step ${item.theme}`}>{item.step}</div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT STORY SECTION */}
        <div className="about-story-container">
          {/* Left side */}
          <div className="about-story-left">
            <img src={storyImg} alt="Our Story" className="about-story-image" />

            <button
              className="demo-class-btn"
              onClick={() => setShowDemoForm(true)}
            >
              Demo Class
            </button>
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
              At CodeSpark, we empower individuals by unlocking their potential
              through quality education. We equip learners with tools,
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
                skills through practical learning, real-world projects, and
                expert mentorship, helping them build successful careers in
                technology.
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

        {/* DEMO CLASS POPUP FORM */}
        {showDemoForm && (
          <div
            className="demo-form-overlay"
            onClick={() => setShowDemoForm(false)}
          >
            <div
              className="demo-form-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="demo-form-close"
                onClick={() => setShowDemoForm(false)}
              >
                <FaTimes />
              </button>

              <div className="demo-form-header">
                <h2>Book a Demo Class</h2>
                <p>Fill your details and we will contact you soon.</p>
              </div>

              <form className="demo-form" onSubmit={handleDemoSubmit}>
                <div className="demo-form-group">
                  <label>Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="demo-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="demo-form-group">
                  <label>Course Name</label>
                  <input
                    type="text"
                    name="courseName"
                    placeholder="Enter course name"
                    value={formData.courseName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="demo-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="demo-form-group">
                  <label>Available Time</label>
                  <input
                    type="text"
                    name="availableTime"
                    placeholder="Example: 6 PM - 8 PM"
                    value={formData.availableTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="demo-submit-btn">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default AboutStory;