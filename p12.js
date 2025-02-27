import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

// ✅ Problem 1: Toggle User Details
const ToggleUserDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
  };

  return (
    <div className="section">
      <h2>Toggle User Details</h2>
      <p><strong>Username:</strong> {user.username}</p>
      {showDetails && <p><strong>Email:</strong> {user.email}</p>}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

// ✅ Problem 2: Dark/Light Mode Toggle
const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`section ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h2>Dark/Light Mode Toggle</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div className="app">
      <ToggleUserDetails />
      <ToggleDarkMode />
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
}

.section {
  border: 2px solid #333;
  padding: 20px;
  width: 350px;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.dark-mode {
  background-color: #333;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}
*/
