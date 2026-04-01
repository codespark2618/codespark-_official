import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/codespark.png"; // ✅ Logo import

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="CodeSpark Logo" />
      </div>

      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/courses">COURSES</Link>
        <Link to="/career">CAREER</Link>
        <Link to="/internship">INTERNSHIP</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>

      <Link to="/coursedetails">
        <button className="enroll-btn">ENROLL NOW</button>
      </Link>
    </header>
  );
}

export default Navbar;