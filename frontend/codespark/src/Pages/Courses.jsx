import React, { useState, useEffect } from "react";
import "./Courses.css";
import Footer from "../Components/Footer";

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
    description: "Master HTML, CSS, JavaScript & modern frameworks.",
    duration: "4 months",
    price: "₹15,000",
    syllabus: ["HTML", "CSS", "JavaScript", "React"],
    icon: <FaGlobe />,
    theme: "blue",
  },
  {
    level: "Intermediate",
    title: "Python Full Stack",
    description: "Learn Python, Django and backend development.",
    duration: "3 months",
    price: "₹18,000",
    syllabus: ["Python", "Django", "API", "Projects"],
    icon: <FaCode />,
    theme: "green",
  },
  {
    level: "Intermediate",
    title: "Java Full Stack",
    description: "Java + Spring Boot + REST APIs + Microservices.",
    duration: "3 months",
    price: "₹20,000",
    syllabus: ["Core Java", "Spring Boot", "Hibernate", "APIs"],
    icon: <FaJava />,
    theme: "orange",
  },
  {
    level: "Intermediate",
    title: "Python + SQL + Django",
    description: "Backend apps using Django and database systems.",
    duration: "4 months",
    price: "₹17,000",
    syllabus: ["Python", "SQL", "Django", "Projects"],
    icon: <FaDatabase />,
    theme: "purple",
  },
  {
    level: "Intermediate",
    title: "Java Spring Boot + SQL",
    description: "Enterprise backend development using Spring Boot.",
    duration: "3 months",
    price: "₹19,000",
    syllabus: ["Spring Boot", "SQL", "API Dev", "Deployment"],
    icon: <FaChartPie />,
    theme: "pink",
  },
  {
    level: "Beginner",
    title: "Data Science & Analytics",
    description: "Analyze data using Python, Power BI, Excel.",
    duration: "3 months",
    price: "₹16,000",
    syllabus: ["Python", "Pandas", "Power BI", "Excel"],
    icon: <FaChartBar />,
    theme: "mint",
  },
  {
    level: "Beginner",
    title: "UI/UX Design",
    description: "Design modern apps using Figma and design systems.",
    duration: "2 months",
    price: "₹12,000",
    syllabus: ["Figma", "Wireframes", "Prototyping", "UI Design"],
    icon: <FaGlobe />,
    theme: "blue",
  },
  {
    level: "Intermediate",
    title: "MERN Stack Development",
    description: "MongoDB, Express, React, Node full stack apps.",
    duration: "4 months",
    price: "₹22,000",
    syllabus: ["MongoDB", "Express", "React", "Node"],
    icon: <FaCode />,
    theme: "green",
  },
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [showFormModal, setShowFormModal] = useState(false);
  const [formType, setFormType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // 🔥 Google Meet Link
  const meetLink = "https://meet.google.com/abc-xyz-demo";

  useEffect(() => {
    const cards = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      formType === "demo"
        ? "Demo Class Booked 🎉"
        : "Enrollment Successful 🎉"
    );

    setShowFormModal(false);
    setSelectedCourse(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="courses-page">
        <section className="courses-hero">
          <h1 className="courses-title">
            Courses Designed for the <span>Real World</span>
          </h1>
          <p className="courses-subtitle">
            Industry-aligned curriculum with real-time projects.
          </p>
        </section>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className={`course-card ${course.theme}`} key={index}>
              <div className="course-icon-box">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="course-footer">
                <span><FaClock /> {course.duration}</span>

                <button onClick={() => setSelectedCourse(course)}>
                  Learn <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS POPUP */}
      {selectedCourse && (
        <div className="course-modal-overlay">
          <div className="course-modal">

            <button className="close-btn" onClick={() => setSelectedCourse(null)}>✖</button>

            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>

            <ul className="no-bullets">
              {selectedCourse.syllabus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4>{selectedCourse.price}</h4>

            <div className="modal-buttons">
              <button
                className="enroll-btn"
                onClick={() => {
                  setFormType("enroll");
                  setShowFormModal(true);
                }}
              >
                Enroll Now
              </button>

              <button
                className="demo-btn"
                onClick={() => {
                  setFormType("demo");
                  setShowFormModal(true);
                }}
              >
                Book Demo
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FORM POPUP */}
      {showFormModal && (
        <div className="form-modal-overlay">
          <div className="form-modal">

            <button className="close-btn" onClick={() => setShowFormModal(false)}>✖</button>

            <h3>
              {formType === "demo" ? "Book Demo Class" : "Enroll Now"}
            </h3>

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />

              <button type="submit">Submit</button>
            </form>

            {/* 🔥 GOOGLE MEET LINK ONLY FOR DEMO */}
            {formType === "demo" && (
              <div className="meet-link-box">
                <p>Join your demo class:</p>
                <a href={meetLink} target="_blank" rel="noreferrer">
                  Join Google Meet
                </a>
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Courses;