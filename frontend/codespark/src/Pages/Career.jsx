import React from "react";
import "./Career.css";

function Career() {
  const steps = [
    {
      step: "STEP 01",
      title: "Learn Course",
      description:
        "Enroll in your chosen program and learn from industry-expert instructors with practical assignments",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6.5C3 5.4 3.9 4.5 5 4.5H10c1.4 0 2.7.4 4 1.2 1.3-.8 2.6-1.2 4-1.2h1c1.1 0 2 .9 2 2v11.5c0 .6-.4 1-1 1h-2c-1.4 0-2.7.4-4 1.2-1.3-.8-2.6-1.2-4-1.2H5c-1.1 0-2-.9-2-2V6.5Z" />
          <path d="M12 5.7V19.2" />
        </svg>
      ),
      cardClass: "blue",
      lineClass: "line-blue",
    },
    {
      step: "STEP 02",
      title: "Build Projects",
      description:
        "Apply your knowledge by building real world projects that showcase your skills to employers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7 3 12l5 5" />
          <path d="M16 7l5 5-5 5" />
          <path d="M13 4 11 20" />
        </svg>
      ),
      cardClass: "orange",
      lineClass: "line-orange",
    },
    {
      step: "STEP 03",
      title: "Internship",
      description:
        "Join our internship program, work with real teams, and gain the professional experience you need.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
          <path d="M4 9.5C4 8.7 4.7 8 5.5 8h13c.8 0 1.5.7 1.5 1.5v8.8c0 .9-.7 1.7-1.6 1.7H5.6C4.7 20 4 19.2 4 18.3V9.5Z" />
          <path d="M4 12h16" />
        </svg>
      ),
      cardClass: "green",
      lineClass: "line-green",
    },
    {
      step: "STEP 04",
      title: "Career Growth",
      description:
        "Launch your IT career with our placement support, resume building, and interview preparation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16l5-5 4 4 7-7" />
          <path d="M15 8h5v5" />
        </svg>
      ),
      cardClass: "purple",
      lineClass: "line-purple",
    },
  ];

  return (
    <section className="career-section">
      <div className="career-header">
        <span className="career-badge">YOUR PATH TO SUCCESS</span>

        <h1 className="career-title">
          The Student <span>Journey</span>
        </h1>

        <p className="career-subtitle">
          From enrollment to employment — a proven roadmap that takes you from
          beginner to job-ready professional.
        </p>
      </div>

      <div className="career-journey">
        <div className="career-line">
          <span className="line-part line-blue"></span>
          <span className="line-part line-orange"></span>
          <span className="line-part line-green"></span>
          <span className="line-part line-purple"></span>
        </div>

        <div className="career-steps">
          {steps.map((item, index) => (
            <div className="career-step" key={index}>
              <div className={`career-icon-box ${item.cardClass}`}>
                <div className="career-icon">{item.icon}</div>
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