import React from "react";
import ReactDOM from "react-dom/client";

// Reusable Card Component
const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
};

// Parent Component rendering multiple Cards
const App = () => {
  return (
    <div className="container">
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2">
        <p>Dynamic content goes here for Card 2.</p>
      </Card>
      <Card title="Card 3">
        <p>Another card with unique content.</p>
      </Card>
    </div>
  );
};

// Render the App component inside root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// CSS Styling (Injected into the document)
const style = document.createElement("style");
style.textContent = `
  .container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
  }
  .card {
    width: 200px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
    text-align: center;
  }
  .card-title {
    color: #2c3e50;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .card-body {
    font-size: 16px;
    color: #34495e;
  }
`;
document.head.appendChild(style);
