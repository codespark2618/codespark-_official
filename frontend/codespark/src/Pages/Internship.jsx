import React from "react";
import "./Internship.css";
import { FaArrowUp, FaStar, FaRegStar, FaRegClock } from "react-icons/fa";
import Footer from "../Components/Footer"; // 👈 ADD THIS

import pythonImg from "../assets/python.png";
import webImg from "../assets/web.png";
import reactImg from "../assets/react.png";
import fullStackImg from "../assets/fullstack.png";

function Internship() {
  const internshipRoles = [
    {
      id: 1,
      image: pythonImg,
      title: "PYTHON DEVELOPER",
      description:
        "Work on backend logic, automation scripts, APIs, and real-time Python projects.",
      duration: "2 months",
      price: "₹ 1999",
    },
    {
      id: 2,
      image: webImg,
      title: "WEB DEVELOPER",
      description:
        "Build responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
      duration: "1 month",
      price: "₹ 1999",
    },
    {
      id: 3,
      image: reactImg,
      title: "REACT DEVELOPER",
      description:
        "Create interactive user interfaces and dynamic web applications using React.",
      duration: "2 months",
      price: "₹ 1999",
    },
    {
      id: 4,
      image: fullStackImg,
      title: "FULL STACK DEVELOPER",
      description:
        "Work on both frontend and backend development with complete project exposure.",
      duration: "2 months",
      price: "₹ 1999",
    },
  ];

  return (
    <>
      <section className="internship-page">
        <div className="internship-container">
          <h1 className="internship-title">
            Start Your <span className="highlight">Internship</span> Journey
            <br />
            <span className="highlight second-line">Learn. Build. Grow.</span>
          </h1>

          <p className="internship-subtitle">
            Kickstart your career with real-world internship opportunities and
            hands-on project experience.
          </p>

          <div className="internship-buttons">
            <button className="internship-btn primary-btn" type="button">
              Explore Roles
              <span className="btn-icon white-icon">
                <FaArrowUp />
              </span>
            </button>

            <button className="internship-btn secondary-btn" type="button">
              Apply Now
              <span className="btn-icon orange-icon">
                <FaArrowUp />
              </span>
            </button>
          </div>
        </div>

        <div className="internship-cards-container">
          {internshipRoles.map((role) => (
            <div className="internship-card" key={role.id}>
              <div className="internship-image-wrap">
                <img
                  src={role.image}
                  alt={role.title}
                  className="internship-image"
                />
              </div>

              <div className="internship-rating-price">
                <div className="internship-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <div className="internship-price">{role.price}</div>
              </div>

              <h3 className="internship-card-title">{role.title}</h3>

              <p className="internship-card-description">
                {role.description}
              </p>

              <div className="internship-card-footer">
                <div className="internship-duration">
                  <FaRegClock />
                  <span>{role.duration}</span>
                </div>

                <button className="internship-apply-link" type="button">
                  APPLY NOW →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 👇 FOOTER */}
      <Footer />
    </>
  );
}

export default Internship;