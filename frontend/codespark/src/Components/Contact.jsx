import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const courses = [
    "Web Development",
    "Python Full Stack",
    "Java Full Stack",
    "Python, SQL, Django",
    "Java Spring Boot",
    "Data Science and Data Analysis"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "Enter your first name";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Enter your last name";
    }

    if (!form.email) {
      newErrors.email = "Enter your email";
    } else if (!form.email.endsWith("@gmail.com")) {
      newErrors.email = "Only @gmail.com emails allowed";
    }

    if (!form.course) {
      newErrors.course = "Select a course";
    }

    if (!form.message.trim()) {
      newErrors.message = "Enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✅");
      console.log(form);

      // reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        course: "",
        message: ""
      });
    }
  };

  return (
    <div className="contact-container">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <span className="badge">CONTACT US</span>

        <h1>
          How Can We <span>Assist</span>
          <br /> You Today?
        </h1>

        <p>
          Our customer support team is here to assist you from Monday to Friday,
          available daily from 8:00 AM to 8:30 PM.
        </p>

        <div className="contact-info">
          <div className="info-item">
            {/* <div className="icon">📞</div> */}
            <div>
              <h4> 📞  Have any questions </h4>
              <p>+91 90253 53470</p>
            </div>
          </div>

          <div className="info-item">
            {/* <div className="icon">✉️</div> */}
            <div>
              <h4>  ✉️  Write mail </h4>
              <p>codespark2618@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <small className="error">{errors.firstName}</small>}
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <small className="error">{errors.lastName}</small>}
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="input-group">
          <label>Select Courses</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
          >
            <option value="">-- Select Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <small className="error">{errors.course}</small>}
        </div>

        <div className="input-group">
          <label>Messages / Query</label>
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <button type="submit" className="submit-btn">
          Submit Enquiry <span>↗</span>
        </button>
      </form>
    </div>
  );
}

export default Contact;