import React from "react";
import "./SuccessStories.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const data = [
  {
    course: "Python Full Stack",
    text: "The Python Full Stack course at CodeSpark gave me real project experience and helped me land my dream job within 3 months.",
    name: "MICHEAL",
    role: "Python Full Stack Developer",
  },
  {
    course: "Frontend Development",
    text: "The frontend course at CodeSpark gave me real project experience and helped me land my dream job within 3 months.",
    name: "AJITH",
    role: "Front End Developer",
  },
  {
    course: "Java Full Stack",
    text: "The Java Full Stack course at CodeSpark gave me real project experience and helped me land my dream job within 3 months.",
    name: "VICKEY",
    role: "Java Full Stack Developer",
  },
  {
    course: "Data Analytics",
    text: "The Data Analytics course at CodeSpark gave me real project experience and helped me land my dream job within 3 months.",
    name: "RAHUL",
    role: "Data Analyst",
  },
  {
    course: "Data Science",
    text: "The Data Science course at CodeSpark gave me real project experience and helped me land my dream job within 3 months.",
    name: "VASANTH",
    role: "Data Scientist",
  },
];

function SuccessStories() {
  return (
    <div className="success-section">
      <p className="tag">STUDENT SUCCESS STORIES</p>

      <h1>
        What Our <span>Students Say</span>
      </h1>

      <p className="subtext">
        Real stories from students who transformed their careers with CodeSpark.
      </p>

      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="top">
              <FaQuoteLeft className="quote" />
              <div className="stars">★★★★★</div>
            </div>

            <p className="content">"{item.text}"</p>

            <button className="course-btn">
              <span className="book-icon">📘</span>
              {item.course}
            </button>
            <div className="line"></div>

            <hr />

            <div className="profile">
              <div className="icon-wrapper">
                <FiUser />
              </div>

              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
