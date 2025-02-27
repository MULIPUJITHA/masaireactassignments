import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

// ✅ BottomMainRight (Deepest Child)
const BottomMainRight = ({ name }) => {
  return <h3>Hello, {name || "Guest"}!</h3>;
};

// ✅ BottomMain (Intermediate Component)
const BottomMain = ({ name }) => {
  return (
    <div className="box">
      <h2>Bottom Main</h2>
      <BottomMainRight name={name} />
    </div>
  );
};

// ✅ Middle (Intermediate Component)
const Middle = ({ name }) => {
  return (
    <div className="box">
      <h2>Middle</h2>
      <BottomMain name={name} />
    </div>
  );
};

// ✅ App (Parent Component)
const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <Middle name={name} />
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.app {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 8px;
  margin: 10px;
  font-size: 16px;
}

.box {
  border: 2px solid #333;
  padding: 10px;
  margin: 10px auto;
  width: 300px;
  text-align: center;
  background: #f9f9f9;
}
*/
