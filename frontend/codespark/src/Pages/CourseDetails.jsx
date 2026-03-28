import React from "react";
import "./CourseDetails.css";

function CourseDetails() {
  return (
    <div className="course-container">

      {/* Top Section */}
      <div className="header">
        <div className="icon">🌐</div>
        <h1>Web Development</h1>
        <p>
          Master HTML, CSS, JavaScript & modern frameworks to build stunning,
          responsive websites from scratch.
        </p>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card">
          <span>⏱ Duration</span>
          <h3>4 Months</h3>
        </div>

        <div className="card price">
          <span>💰 Course Fee</span>
          <h3>₹2,999</h3>
        </div>
      </div>

      {/* What You Get */}
      <div className="benefits">
        <h3>WHAT YOU GET</h3>

        <div className="benefit-grid">
          <div className="benefit">🎓 Placement Assistance</div>
          <div className="benefit">🎧 24x7 Support</div>
          <div className="benefit">👨‍💻 Industry Experts</div>
          <div className="benefit">📜 Certification</div>
        </div>
      </div>

      {/* Syllabus */}
      <div className="syllabus">
        <h3>Course Syllabus</h3>
        <span className="topics">12 Topics</span>
      </div>

      {/* Button */}
      <button className="enroll-btn">Enroll Now →</button>

    </div>
  );
}

export default CourseDetails;