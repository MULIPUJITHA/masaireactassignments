import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./styles.css"; // Import for styling

// ✅ Navigation Bar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
      <NavLink to="/services" className="nav-item">Services</NavLink>
    </nav>
  );
};

// ✅ Page Components
const Home = () => <h2 className="page">🏠 Welcome to Home Page</h2>;
const About = () => <h2 className="page">📖 About Us</h2>;
const Contact = () => <h2 className="page">📞 Contact Us</h2>;
const Services = () => <h2 className="page">🛠 Services</h2>;

// ✅ Main App Component with Routing
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
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
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background: #333;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease-in-out;
}

.nav-item:hover {
  color: blue;
}

.nav-item.active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}

.page {
  text-align: center;
  margin-top: 50px;
}

/* Responsive Navbar */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }
}
*/
