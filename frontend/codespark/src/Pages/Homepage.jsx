import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import heroImg from "../assets/heroimg.png";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <div className="homepage">

        {/* Navbar */}
        <header className="navbar">
          <div className="logo">CodeSpark</div>

          <nav>
            <Link to="/">HOME</Link>
            <Link to="/courses">COURSES</Link>
            <Link to="/career">CAREER</Link>
            <Link to="/internship">INTERNSHIP</Link>
            <Link to="/about">ABOUT</Link>
          </nav>

          <Link to="/coursedetails">
            <button className="enroll-btn">ENROLL NOW</button>
          </Link>
        </header>

        {/* Hero Section */}
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Homepage;