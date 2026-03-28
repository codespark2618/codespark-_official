import React from "react";
import "./StudentJourney.css";

function StudentJourney() {
  const steps = [
    {
      id: "01",
      title: "Learn Course",
      desc: "Enroll in your chosen program and learn from industry-expert instructors with practical assignments",
      icon: "📘",
      color: "blue"
    },
    {
      id: "02",
      title: "Build Projects",
      desc: "Apply your knowledge by building real world projects that showcase your skills to employers.",
      icon: "</>",
      color: "orange"
    },
    {
      id: "03",
      title: "Internship",
      desc: "Join our internship program, work with real teams, and gain the professional experience you need.",
      icon: "🛍️",
      color: "green"
    },
    {
      id: "04",
      title: "Career Growth",
      desc: "Launch your IT career with our placement support, resume building, and interview preparation.",
      icon: "📈",
      color: "purple"
    }
  ];

  return (
    <div className="journey-container">
      <p className="tag">YOUR PATH TO SUCCESS</p>

      <h1 className="title">
        The Student <span>Journey</span>
      </h1>

      <p className="subtitle">
        From enrollment to employment — a proven roadmap that takes you from
        beginner to job-ready professional.
      </p>

      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.id}>
            <div className={`icon ${step.color}`}>{step.icon}</div>
            <p className="step-id">STEP {step.id}</p>
            <h3>{step.title}</h3>
            <p className="desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentJourney;