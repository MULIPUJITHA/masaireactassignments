import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Content for each tab
  const tabContent = {
    Home: "Welcome to the Home Page.",
    About: "Learn more About Us.",
    Contact: "Get in touch with us via Contact Page.",
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">{tabContent[activeTab]}</div>
    </div>
  );
};

// ✅ Rendering to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TabsNavigation />);

// ✅ CSS Styling (styles.css)
/*
.tabs-container {
  text-align: center;
  margin-top: 50px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: lightgray;
}

button.active {
  background: purple;
  color: white;
  font-weight: bold;
}

.content {
  margin-top: 20px;
  font-size: 18px;
  transition: opacity 0.5s ease-in-out;
}
*/
