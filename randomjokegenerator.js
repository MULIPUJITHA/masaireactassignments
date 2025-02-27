import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState("");

  const fetchJoke = () => {
    setError(""); // Reset error before fetching
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setJoke(data))
      .catch(() => setError("Failed to fetch joke. Try again!"));
  };

  useEffect(() => {
    fetchJoke(); // Fetch joke on mount
  }, []);

  return (
    <div className="joke-container">
      <h2>😂 Random Joke Generator</h2>
      {error && <p className="error">{error}</p>}
      {joke && (
        <div className="joke-card">
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>
      )}
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JokeGenerator />);

// ✅ CSS Styling (styles.css)
/*
.joke-container {
  text-align: center;
  margin-top: 50px;
}

.joke-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  width: 300px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-weight: bold;
}
*/
