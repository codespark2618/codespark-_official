import React from "react";
import "./WhyChooseUs.css";
import {
  Dumbbell,
  Users,
  BadgeCheck,
  Lock,
  ArrowUpRight,
} from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-left">
          <span className="why-badge">WHY CHOOSE US</span>

          <h2 className="why-title">
            Why Students <br />
            Choose <br />
            <span>CodeSpark</span>
          </h2>

          <p className="why-description">
            At CodeSpark, students learn through hands-on projects, expert
            guidance, and industry-focused training designed to prepare them for
            real-world careers.
          </p>

          <button className="why-btn">
            Explore Courses
            <span className="why-btn-icon">
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </button>

          <div className="why-students">
            <div className="student-images">
              <img src="https://i.pravatar.cc/100?img=1" alt="student1" />
              <img src="https://i.pravatar.cc/100?img=2" alt="student2" />
              <img src="https://i.pravatar.cc/100?img=3" alt="student3" />
              <img src="https://i.pravatar.cc/100?img=4" alt="student4" />
            </div>
            <p>Joins 20+ like students</p>
          </div>

          <div className="why-stats">
            <div className="why-stat-item">
              <h3>10+ Courses</h3>
              <p>Expert-led programs</p>
            </div>

            <div className="why-stat-item">
              <h3>100% Practical</h3>
              <p>Hands-on sessions</p>
            </div>

            <div className="why-stat-item">
              <h3>Live classes</h3>
              <p>Real-time learning</p>
            </div>
          </div>
        </div>

        <div className="why-right">
          <div className="why-card blue">
            <div className="why-icon">
              <Dumbbell size={24} strokeWidth={2.2} />
            </div>
            <h3>Work on Real Projects</h3>
            <p>
              Gain hands-on experience building actual products for real
              clients. Your contributions matter and go live.
            </p>
          </div>

          <div className="why-card orange">
            <div className="why-icon">
              <Users size={24} strokeWidth={2.2} />
            </div>
            <h3>Mentorship from Developers</h3>
            <p>
              Learn directly from senior developers and industry professionals
              who guide you through every challenge.
            </p>
          </div>

          <div className="why-card green">
            <div className="why-icon">
              <BadgeCheck size={24} strokeWidth={2.2} />
            </div>
            <h3>Certificate of Completion</h3>
            <p>
              Earn an industry-recognized certificate that validates your skills
              and stands out on your resume.
            </p>
          </div>

          <div className="why-card purple">
            <div className="why-icon">
              <Lock size={24} strokeWidth={2.2} />
            </div>
            <h3>Industry Experience</h3>
            <p>
              Get exposure to professional workflows, agile teams, code reviews,
              and real developer environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;