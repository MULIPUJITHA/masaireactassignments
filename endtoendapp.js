import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router-dom";
import "./styles.css";

// Sample movie data
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    poster: "https://placehold.co/150",
    releaseDate: "2010-07-16",
    genre: "Sci-Fi",
    description: "A mind-bending thriller by Christopher Nolan."
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster: "https://placehold.co/150",
    releaseDate: "2008-07-18",
    genre: "Action",
    description: "The Caped Crusader takes on the Joker."
  },
  {
    id: 3,
    title: "The Matrix",
    poster: "https://placehold.co/150",
    releaseDate: "1999-03-31",
    genre: "Sci-Fi",
    description: "A hacker learns the true nature of reality and his role in the war against its controllers."
  }
];

// ✅ Navbar Component
const Navbar = ({ isLoggedIn, logout }) => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    {isLoggedIn ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
  </nav>
);

// ✅ Private Route
const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

// ✅ Login Page
const Login = ({ login }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (credentials.username === "user" && credentials.password === "password") {
      login();
      navigate("/");
    } else {
      setError("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// ✅ Home Page
const Home = () => (
  <div className="home">
    <h2>Welcome to the Movie Database!</h2>
    <p>Browse movies, view details, and manage your favorite films.</p>
  </div>
);

// ✅ Movies Page (CRUD Operations)
const Movies = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [newMovie, setNewMovie] = useState({ title: "", description: "", poster: "", releaseDate: "", genre: "" });

  const addMovie = () => {
    if (!newMovie.title) return;
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    setNewMovie({ title: "", description: "", poster: "", releaseDate: "", genre: "" });
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="movies">
      <h2>Movies</h2>
      <div className="add-movie">
        <input type="text" placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
        <input type="text" placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`}>View More</Link>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Movie Details Page
const MovieDetails = () => {
  const { id } = useParams();
  const movie = initialMovies.find(m => m.id === parseInt(id));

  return movie ? (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p>{movie.description}</p>
      <Link to="/movies">Back to Movies</Link>
    </div>
  ) : <p>Movie not found.</p>;
};

// ✅ Not Found Page
const NotFound = () => (
  <div className="not-found">
    <h2>Page Not Found</h2>
    <Link to="/movies">Go back to Movies</Link>
  </div>
);

// ✅ Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} logout={() => setIsLoggedIn(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={() => setIsLoggedIn(true)} />} />
        <Route path="/movies" element={<PrivateRoute isLoggedIn={isLoggedIn}><Movies /></PrivateRoute>} />
        <Route path="/movies/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><MovieDetails /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
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
.navbar a, .navbar button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}
.movies ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.movies li {
  width: 200px;
  margin: 10px;
}
*/
