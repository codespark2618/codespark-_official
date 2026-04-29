import React, { useState } from "react";
import "./CourseDetails.css";

function CourseDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      alert("Enrollment Successful 🚀");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="enroll-container">
      <div className="form-box">
        <h2>Enroll Now 🚀</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Python FullStack">Python FullSTack</option>
            <option value="Java FullStack">Java FullStack</option>
          </select>

          <button type="submit">Submit Enrollment</button>
        </form>
      </div>
    </div>
  );
}

export default CourseDetails;
