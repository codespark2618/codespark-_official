import React from "react";
import "./Career.css";
import careerImg from "../assets/careerlogo.png";

function Career() {
  return (
    <section className="career-page">
      <div className="career-container">

        {/* LEFT */}
        <div className="career-left">
          <h1 className="career-title">
            Build Careers —
            <br />
            <span>Starting with Yours</span>
          </h1>

          <p className="career-description">
            Join the team that's shaping the next generation of tech
            talent in India. At CodeSpark, every role has real impact.
          </p>

          <div className="career-buttons">
            <button className="career-btn primary">
              View Open Roles →
            </button>

            <button className="career-btn outline">
              General Application
            </button>
          </div>

          <div className="career-stats">
            <div>
              <h2>10+</h2>
              <p>Team Members</p>
            </div>

            <div>
              <h2>1+</h2>
              <p>Years Running</p>
            </div>

            <div>
              <h2>20+</h2>
              <p>Students Impacted</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="career-right">
          <img src={careerImg} alt="Career Team" />

          <div className="career-badge">
            <span className="badge-icon">🏆</span>
            Great Place to Work
          </div>
        </div>

      </div>
    </section>
  );
}

export default Career;
