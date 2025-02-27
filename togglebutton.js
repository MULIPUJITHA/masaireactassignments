import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="message">Hello, welcome to React state management!</p>}
    </div>
  );
};

// ✅ Rendering to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToggleMessage />);

// ✅ CSS Styling (styles.css)
/*
.container {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.message {
  margin-top: 15px;
  font-size: 18px;
  color: #333;
}
*/
