import React from "react";
import "./Career.css";

function Career() {
  const steps = [
    {
      step: "STEP 01",
      title: "Learn Course",
      description:
        "Enroll and learn from industry experts with practical assignments",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 6.5C3 5.4 3.9 4.5 5 4.5H10c1.4 0 2.7.4 4 1.2 1.3-.8 2.6-1.2 4-1.2h1c1.1 0 2 .9 2 2v11.5c0 .6-.4 1-1 1h-2c-1.4 0-2.7.4-4 1.2-1.3-.8-2.6-1.2-4-1.2H5c-1.1 0-2-.9-2-2V6.5Z"/>
        </svg>
      ),
      cardClass: "blue",
    },
    {
      step: "STEP 02",
      title: "Build Projects",
      description:
        "Work on real-world projects to showcase your skills",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 7 3 12l5 5" />
          <path d="M16 7l5 5-5 5" />
        </svg>
      ),
      cardClass: "orange",
    },
    {
      step: "STEP 03",
      title: "Internship",
      description:
        "Gain real experience by working with professional teams",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M4 9.5C4 8.7 4.7 8 5.5 8h13c.8 0 1.5.7 1.5 1.5v8.8c0 .9-.7 1.7-1.6 1.7H5.6C4.7 20 4 19.2 4 18.3V9.5Z"/>
        </svg>
      ),
      cardClass: "green",
    },
    {
      step: "STEP 04",
      title: "Career Growth",
      description:
        "Get placement support and crack interviews",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 16l5-5 4 4 7-7" />
        </svg>
      ),
      cardClass: "purple",
    },
  ];

  return (
    <section className="career-section">
      {/* HEADER */}
      <div className="career-header">
        <span className="career-badge">YOUR PATH TO SUCCESS</span>

        <h1 className="career-title">
          The Student <span>Journey</span>
        </h1>

        <p className="career-subtitle">
          From learning to job-ready professional.
        </p>
      </div>

      {/* JOURNEY */}
      <div className="career-journey">

        {/* CONNECTING LINE */}
        <div className="career-line">
          <span className="line-part line-blue"></span>
          <span className="line-part line-orange"></span>
          <span className="line-part line-green"></span>
          <span className="line-part line-purple"></span>
        </div>

        {/* STEPS */}
        <div className="career-steps">
          {steps.map((item, index) => (
            <div className="career-step" key={index}>
              <div className={`career-icon-box ${item.cardClass}`}>
                {item.icon}
              </div>

              <div className={`career-step-badge ${item.cardClass}`}>
                {item.step}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Career;