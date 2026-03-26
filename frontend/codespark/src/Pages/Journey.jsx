import React from "react";
import "./Journey.css";

function Journey() {
  return (
    <div className="journey">
      <div className="header">
        <span className="badge">YOUR PATH TO SUCCESS</span>

        <h1>
          The Student <span>Journey</span>
        </h1>

        <p>
          From enrollment to employment — a proven roadmap that takes you from
          beginner to job-ready professional.
        </p>
      </div>

      <div className="steps">
        <div className="card blue">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6.5C3 5.1 4.1 4 5.5 4H10c1.1 0 2 .9 2 2v14c0-1.1-.9-2-2-2H5.5A2.5 2.5 0 0 1 3 15.5v-9Z"/>
              <path d="M21 6.5C21 5.1 19.9 4 18.5 4H14c-1.1 0-2 .9-2 2v14c0-1.1.9-2 2-2h4.5A2.5 2.5 0 0 0 21 15.5v-9Z"/>
            </svg>
          </div>
          <div className="tag">STEP 01</div>
          <h4>Learn Course</h4>
          <p>
            Enroll in your chosen program and learn from industry-expert instructors
            with practical assignments
          </p>
        </div>

        <div className="card orange">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 16 4 12l4-4"/>
              <path d="m16 8 4 4-4 4"/>
              <path d="m14 4-4 16"/>
            </svg>
          </div>
          <div className="tag">STEP 02</div>
          <h4>Build Projects</h4>
          <p>
            Apply your knowledge by building real world projects that showcase
            your skills to employers.
          </p>
        </div>

        <div className="card green">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 8h12l-1 11H7L6 8Z"/>
              <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
            </svg>
          </div>
          <div className="tag">STEP 03</div>
          <h4>Internship</h4>
          <p>
            Join our internship program, work with real teams, and gain the
            professional experience you need.
          </p>
        </div>

        <div className="card purple">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 16l5-5 4 4 7-7"/>
              <path d="M14 8h6v6"/>
            </svg>
          </div>
          <div className="tag">STEP 04</div>
          <h4>Career Growth</h4>
          <p>
            Launch your IT career with our placement support, resume building,
            and interview preparation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Journey;