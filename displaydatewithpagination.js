import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./styles.css"; // Import for styling

const PaginatedPosts = () => {
  const [data, setData] = useState([]); // Stores fetched data
  const [currentPage, setCurrentPage] = useState(1); // Tracks current page
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error handling
  const limit = 5; // Number of posts per page

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pagination-container">
      <h2>📜 Paginated Posts</h2>
      {isLoading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={data.length < limit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PaginatedPosts />);

// ✅ CSS Styling (styles.css)
/*
.pagination-container {
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 10px;
  margin: 10px auto;
  border-radius: 8px;
  width: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.pagination-buttons {
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 5px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-weight: bold;
}
*/
