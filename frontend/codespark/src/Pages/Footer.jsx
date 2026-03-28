import React from "react";
import "./Footer.css";
import codespark from "../assets/codespark.png";
import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section brand">
          <h2 className="logo">
  <img src={codespark} alt="CodeSpark Logo" className="logo-img" />
</h2>
          <p className="content">
            Empowering the next generation of tech professionals through quality
            training, real projects, and industry connections.
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Internship</li>
            <li>Our Journey</li>
            <li>Testimonials</li>
            <li>Apply Now</li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h3>Our Courses</h3>
          <ul>
            <li>Web Development</li>
            <li>Python Programming</li>
            <li>Java Full Stack</li>
            <li>Java Springboot SQL</li>
            <li>Python, SQL, Django</li>
            <li>Data Analytics</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Chennai</p>
          <p>📧 vigneshwaran2618@gmail.com</p>
          <p>📞 +91 90253 53470</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 CodeSpark. All rights reserved. Made with ❤️ for students</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Refund Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;