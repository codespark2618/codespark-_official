import React from "react";
import "./homepage.css";
import heroImg from "./assets/heroimg.png";

function Homepage() {
  return (
    <div className="homepage">
      
      <header className="navbar">
        <div className="logo">CodeSpark</div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">COURSES</a>
          <a href="/journey">CAREER</a>
          <a href="#">INTERNSHIP</a>
          <a href="#">ABOUT</a>
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
            <button className="secondary-btn">Explore Courses</button>
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