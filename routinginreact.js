import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"; // Import for styling

// ✅ Navigation Bar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

// ✅ Page Components
const Home = () => <h2 className="page">🏠 Welcome to Home Page</h2>;
const About = () => <h2 className="page">📖 About Us</h2>;
const Contact = () => <h2 className="page">📞 Contact Us</h2>;

// ✅ Main App Component with Routing
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.navbar {
  display: flex;
  gap: 20px;
  padding: 10px;
  background: #333;
  color: white;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}

.page {
  text-align: center;
  margin-top: 50px;
}
*/
