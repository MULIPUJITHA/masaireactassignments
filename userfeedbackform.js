import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ rating: "", comments: "", recommend: false });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.rating || !formData.comments.trim()) {
      setError("Please provide a rating and comments.");
      return;
    }
    setSubmittedData(formData);
    setError("");
    setFormData({ rating: "", comments: "", recommend: false });
  };

  return (
    <div className="feedback-container">
      <h2>Product Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="rating" value={num} checked={formData.rating === String(num)} onChange={handleChange} />
              {num}⭐
            </label>
          ))}
        </div>

        <textarea name="comments" placeholder="Write your comments..." value={formData.comments} onChange={handleChange} required></textarea>

        <label>
          <input type="checkbox" name="recommend" checked={formData.recommend} onChange={handleChange} />
          Would you recommend this product?
        </label>

        {error && <p className="error">{error}</p>}
        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div className="feedback-card">
          <h3>Feedback Submitted</h3>
          <p><strong>Rating:</strong> {submittedData.rating}⭐</p>
          <p><strong>Comments:</strong> {submittedData.comments}</p>
          <p><strong>Recommendation:</strong> {submittedData.recommend ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FeedbackForm />);

// ✅ CSS Styling (styles.css)
/*
.feedback-container {
  text-align: center;
  margin-top: 50px;
}

.rating label {
  margin-right: 10px;
}

textarea {
  display: block;
  margin: 10px auto;
  padding: 8px;
  width: 300px;
  height: 80px;
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

.error {
  color: red;
  font-weight: bold;
}

.feedback-card {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
*/
