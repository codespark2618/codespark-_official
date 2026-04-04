import React from "react";
import "./Courses.css";
import Footer from "../Components/Footer"; // 👈 IMPORT HERE

import {
  FaGlobe,
  FaCode,
  FaJava,
  FaDatabase,
  FaChartPie,
  FaChartBar,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const courses = [
  {
    level: "Beginner",
    title: "Web Development",
    description:
      "Master HTML, CSS, JavaScript & modern frameworks to build stunning websites.",
    duration: "4 months",
    icon: <FaGlobe />,
    theme: "blue",
  },
  {
    level: "Intermediate",
    title: "Python Full Stack",
    description:
      "Learn Python from basics to backend development and automation.",
    duration: "3 months",
    icon: <FaCode />,
    theme: "green",
  },
  {
    level: "Intermediate",
    title: "Java Full Stack",
    description:
      "Master Java, Spring Boot, REST APIs and microservices.",
    duration: "3 months",
    icon: <FaJava />,
    theme: "orange",
  },
  {
    level: "Intermediate",
    title: "Python, SQL, Django",
    description:
      "Build powerful web apps using Django and database integration.",
    duration: "4 months",
    icon: <FaDatabase />,
    theme: "purple",
  },
  {
    level: "Intermediate",
    title: "Java Springboot SQL",
    description:
      "Develop scalable backend systems using Spring Boot.",
    duration: "3 months",
    icon: <FaChartPie />,
    theme: "pink",
  },
  {
    level: "Beginner",
    title: "Data Science & Analysis",
    description:
      "Analyze data using Python, SQL, Power BI and Excel.",
    duration: "3 months",
    icon: <FaChartBar />,
    theme: "mint",
  },
];

function Courses() {
  return (
    <>
      <div className="courses-page">
        {/* HERO */}
        <section className="courses-hero">
          <div className="courses-badge">OUR CURRICULUM</div>
          <h1 className="courses-title">
            Courses Designed for the <span>Real World</span>
          </h1>
          <p className="courses-subtitle">
            Industry-aligned curriculum with real-time projects.
          </p>
        </section>

        {/* GRID */}
        <section className="courses-grid-section">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div className={`course-card ${course.theme}`} key={index}>
                <div className="course-icon-box">{course.icon}</div>

                <div className="course-level">{course.level}</div>

                <h3 className="course-name">{course.title}</h3>

                <p className="course-desc">{course.description}</p>

                <div className="course-footer">
                  <div className="course-duration">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="learn-more"
                  >
                    Learn <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 👇 FOOTER ADD HERE */}
      <Footer />
    </>
  );
}

export default Courses;