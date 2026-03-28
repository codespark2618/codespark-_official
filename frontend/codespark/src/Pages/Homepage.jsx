import React from "react";
import { Link } from "react-router-dom";   // 👈 ADD THIS
import "./Homepage.css";
import heroImg from "../assets/heroimg.png";

function Homepage() {

  return (
    <div className="homepage">
      
      <header className="navbar">
        <div className="logo">CodeSpark</div>

        <nav>
          <Link to="/">HOME</Link>              {/* 👈 CHANGE */}
          <Link to="/Courses">COURSES</Link>   {/* 👈 CHANGE */}
          <Link to="/Career">CAREER</Link>     {/* 👈 CHANGE */}
          <Link to="/internship">INTERNSHIP</Link>
          <Link to="/Studentjourney">JOURNEY</Link>
          <Link to="/about">ABOUT</Link>
        </nav>

        <button className="enroll-btn">ENROLL NOW</button>
      </header>

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

            {/* 👇 THIS ALSO CONNECT PANLAM */}
            <Link to="/courses">
              <button className="secondary-btn">Explore Courses</button>
            </Link>

          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="hero" />
        </div>
      </section>

    </div>
  );
}

export default Homepage;