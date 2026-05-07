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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/enroll/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
          }),
        });

        let result = null;
        const text = await response.text();
        try {
          result = JSON.parse(text);
        } catch (parseError) {
          result = { error: text || 'Unexpected server response' };
        }

        if (response.ok) {
          alert("Enrollment Successful! We will contact you soon. 🚀");
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
          });
          setErrors({});
        } else {
          console.error('Enroll error response:', result);
          alert(`Error: ${result.error || 'Server returned an error'}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting enrollment. Please try again.');
      }
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
