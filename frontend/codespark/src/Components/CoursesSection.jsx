import React from "react";
import "./CoursesSection.css";
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
      "Master HTML, CSS, JavaScript & modern frameworks to build stunning, responsive websites from scratch.",
    duration: "4 months",
    icon: <FaGlobe />,
    theme: "blue",
  },
  {
    level: "Intermediate",
    title: "Python Full Stack",
    description:
      "Learn Python fundamentals to advanced concepts including automation, scripting and backend development.",
    duration: "3 months",
    icon: <FaCode />,
    theme: "green",
  },
  {
    level: "Intermediate",
    title: "Java Full Stack",
    description:
      "Comprehensive Java development covering Spring Boot, Hibernate, REST APIs and microservices architecture.",
    duration: "3 months",
    icon: <FaJava />,
    theme: "orange",
  },
  {
    level: "Intermediate",
    title: "Python, SQL, Django",
    description:
      "Master HTML, CSS, JavaScript & modern frameworks to build stunning, responsive websites from scratch.",
    duration: "4 months",
    icon: <FaDatabase />,
    theme: "purple",
  },
  {
    level: "Intermediate",
    title: "Java Springboot SQL",
    description:
      "Learn Python fundamentals to advanced concepts including automation, scripting and backend development.",
    duration: "3 months",
    icon: <FaChartPie />,
    theme: "pink",
  },
  {
    level: "Beginner",
    title: "Data Science And Analysis",
    description:
      "Analyze and visualize data using Python, SQL, Power BI and Excel to derive actionable business insights.",
    duration: "3 months",
    icon: <FaChartBar />,
    theme: "mint",
  },
];

function CoursesSection() {
  return (
    <div className="courses-page">
      <section className="courses-grid-section">
        <div className="courses-header">
          <div className="courses-pill">OUR CURRICULUM</div>

          <h2 className="courses-heading">
            Courses Designed for the <span>Real World</span>
          </h2>

          <p className="courses-subheading">
            Industry-aligned Curriculum taught by experienced professionals
            <br />
            with hands-on project experience.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className={`course-card ${course.theme}`} key={index}>
              <div className="course-icon-box">{course.icon}</div>

              <div className={`course-level ${course.theme}-badge`}>
                {course.level}
              </div>

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
                  className={`learn-more ${course.theme}-text`}
                >
                  Learn More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CoursesSection;