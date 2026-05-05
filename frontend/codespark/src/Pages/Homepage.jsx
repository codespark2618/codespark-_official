import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import heroImg from "../assets/heroimg1.png";
import Footer from "../Components/Footer";
import SuccessStories from "../Components/SuccessStories";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/WhyChooseUs";
import Contact from "../Components/Contact";

function Homepage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student data from the Django backend API
    fetch('/api/students/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load students');
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="homepage">
        <section className="hero">
          <div className="hero-left">
            <h1>
              Launch Your Tech <br />
              Career <span>With CodeSpark</span>
            </h1>

            <p>
              Master in-demand skills, work on real projects, and launch your IT career.
            </p>

            <div className="buttons">
              <button className="primary-btn">Start Learning →</button>

              <Link to="/courses">
                <button className="secondary-btn">Explore Courses</button>
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <img src={heroImg} alt="hero" />

            {/* Floating Badges */}
            <Link to="/internship" className="floating-badge badge-top-left">
  Paid Internship
</Link>

            <div className="floating-badge badge-bottom-left">
              Real Projects
            </div>

            <div className="floating-badge badge-top-right">
              Certification
            </div>
          </div>
        </section>

        <section className="student-api-section">
          <div className="student-api-header">
            <h2>Student Records from Backend</h2>
            <p>This section loads student data from the Django API at <code>/api/students/</code>.</p>
          </div>

          {loading ? (
            <p>Loading student data...</p>
          ) : error ? (
            <p className="error">Error: {error}</p>
          ) : (
            <div className="student-list">
              {students.length > 0 ? (
                <ul>
                  {students.map((student) => (
                    <li key={student.id}>
                      <strong>{student.name}</strong> - {student.email} - {student.course}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No student records found.</p>
              )}
            </div>
          )}
        </section>

        <WhyChooseUs />
        <Courses />
        <SuccessStories />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;