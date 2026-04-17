import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import heroImg from "../assets/heroimg1.png";
import Footer from "../Components/Footer";
import SuccessStories from "../Components/SuccessStories";
import Courses from "../Pages/Courses";
import WhyChooseUs from "../Components/WhyChooseUs";
import Contact from "../Components/Contact";

function Homepage() {
  return (
    <>
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

            {/* Floating Badges */}
            <Link to="/internship" className="floating-badge badge-top-left">
  Paid Internship
</Link>

            <div className="floating-badge badge-bottom-left">
              Real Projects
            </div>

            <div className="floating-badge badge-top-right">
              Certification
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Courses />
        <SuccessStories />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;