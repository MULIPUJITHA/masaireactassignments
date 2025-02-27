import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", agree: false });
  const [submittedData, setSubmittedData] = useState(null); // Stores submitted data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms!");
      return;
    }
    setSubmittedData(formData);
    setFormData({ name: "", email: "", password: "", agree: false });
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          I agree to the terms
        </label>
        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div className="card">
          <h3>Registered User</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RegistrationForm />);

// ✅ CSS Styling (styles.css)
/*
.form-container {
  text-align: center;
  margin-top: 50px;
}

input {
  display: block;
  margin: 10px auto;
  padding: 8px;
  width: 250px;
}

label {
  display: block;
  margin: 10px auto;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.card {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
*/
