import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const Dropdown = () => {
  const [selectedColor, setSelectedColor] = useState(""); // State to manage selected color
  const [submittedColor, setSubmittedColor] = useState(""); // State to display the selected color on submit

  const handleSubmit = () => {
    setSubmittedColor(selectedColor);
  };

  return (
    <div className="dropdown-container">
      <h2>Select Your Favorite Color</h2>
      <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
        <option value="">-- Choose a Color --</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button onClick={handleSubmit} disabled={!selectedColor}>Submit</button>

      {submittedColor && <p>You selected: <span style={{ color: submittedColor }}>{submittedColor}</span></p>}
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dropdown />);

// ✅ CSS Styling (styles.css)
/*
.dropdown-container {
  text-align: center;
  margin-top: 50px;
}

select {
  padding: 5px;
  margin: 10px;
  font-size: 16px;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

p {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}
*/
