import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import heroImg from "../assets/heroimg1.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SuccessStories from "../Components/SuccessStories";
import CoursesSection from "../Components/CoursesSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import Contact from "../Components/Contact";


function Homepage() {
  return (
    <>
      <Navbar />

      <div className="homepage">
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
        <WhyChooseUs />
        <CoursesSection />
        <SuccessStories />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default Homepage;