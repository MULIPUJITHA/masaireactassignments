import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return <h2 className="header">Welcome to React</h2>;
};

// Body Component
const Body = () => {
  return <p className="body">React makes building UIs fun and easy!</p>;
};

// Footer Component
const Footer = () => {
  return <p className="footer">Happy Coding!</p>;
};

// WelcomeCard Component (Parent)
const WelcomeCard = () => {
  return (
    <div className="card">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// Render the WelcomeCard component inside root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomeCard />);

// CSS Styling (Injected into the document)
const style = document.createElement("style");
style.textContent = `
  .card {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
  }
  .header {
    color: #2c3e50;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .body {
    font-size: 16px;
    color: #34495e;
  }
  .footer {
    font-size: 14px;
    color: #7f8c8d;
    margin-top: 15px;
    font-style: italic;
  }
`;
document.head.appendChild(style);
