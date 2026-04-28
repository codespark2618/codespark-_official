import React from "react";
import {
  BookOpen,
  Code2,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentJourney() {
  const journeySteps = [
    {
      step: "STEP 01",
      title: "Learn Course",
      icon: <BookOpen size={42} />,
      bg: "#eaf2ff",
      color: "#7aa7ea",
      description:
        "Enroll in your chosen program and learn from industry-expert instructors with practical assignments",
    },
    {
      step: "STEP 02",
      title: "Build Projects",
      icon: <Code2 size={42} />,
      bg: "#fff6df",
      color: "#f59e0b",
      description:
        "Apply your knowledge by building real world projects that showcase your skills to employers.",
    },
    {
      step: "STEP 03",
      title: "Internship",
      icon: <BriefcaseBusiness size={42} />,
      bg: "#dcfce7",
      color: "#22c55e",
      description:
        "Join our internship program, work with real teams, and gain the professional experience you need.",
    },
    {
      step: "STEP 04",
      title: "Career Growth",
      icon: <TrendingUp size={42} />,
      bg: "#ede9fe",
      color: "#8b5cf6",
      description:
        "Launch your IT career with our placement support, resume building, and interview preparation.",
    },
  ];

  return (
    <section className="container-fluid py-5 bg-white overflow-hidden">
      <div className="container-fluid px-5 text-center position-relative">

        {/* Heading */}
        <div
          className="d-inline-block px-4 py-2 rounded-pill fw-semibold mb-4"
          style={{
            background: "#fff3d9",
            color: "#f59e0b",
            fontSize: "14px",
          }}
        >
          YOUR PATH TO SUCCESS
        </div>

        <h1 className="fw-bold mb-3" style={{ fontSize: "56px" }}>
          The Student <span style={{ color: "#f59e0b" }}>Journey</span>
        </h1>

        <p
          className="text-secondary mx-auto"
          style={{
            maxWidth: "900px",
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          From enrollment to employment — a proven roadmap that takes you from
          beginner to job-ready professional.
        </p>

        {/* Full Horizontal Line */}
        <div
          className="d-none d-lg-block position-absolute"
          style={{
            top: "335px",
            left: "15%",
            width: "75%",
            height: "2px",
            background: "#d8d8d8",
            zIndex: "0",
          }}
        ></div>

        {/* 4 Cards Same Line */}
        <div className="row mt-5 gx-0 flex-nowrap justify-content-between">

          {journeySteps.map((item, index) => (
            <div
              className="col-lg-3 col-md-3 col-sm-3"
              key={index}
              style={{ width: "25%" }}
            >
              <div className="text-center px-3 position-relative">

                {/* Icon */}
                <div
                  className="mx-auto d-flex align-items-center justify-content-center rounded-4 mb-3 position-relative"
                  style={{
                    width: "110px",
                    height: "110px",
                    background: item.bg,
                    color: item.color,
                    zIndex: "2",
                  }}
                >
                  {item.icon}
                </div>

                {/* Step */}
                <div
                  className="d-inline-block px-3 py-2 rounded-pill fw-bold mb-3"
                  style={{
                    background: item.bg,
                    color: item.color,
                    fontSize: "14px",
                  }}
                >
                  {item.step}
                </div>

                {/* Title */}
                <h3
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "26px",
                    minHeight: "60px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StudentJourney;