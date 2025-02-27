import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./styles.css"; // Import for styling

// ✅ Sample user data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// ✅ Users List Page
const Users = () => {
  return (
    <div className="container">
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ User Details Page (Dynamic)
const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="container">
      {user ? <h2>Details of {user.name}</h2> : <h2>User Not Found</h2>}
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

// ✅ Home Page
const Home = () => <h2 className="container">🏠 Welcome to the User Management App</h2>;

// ✅ Main App Component with Routing
const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
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

.container {
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

li a {
  color: #007bff;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}
*/
