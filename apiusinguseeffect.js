import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="posts-container">
      <h2>📜 Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p className="error">{error}</p>}
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Posts />);

// ✅ CSS Styling (styles.css)
/*
.posts-container {
  text-align: center;
  padding: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.post-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.post-card:hover {
  transform: scale(1.05);
}

.error {
  color: red;
  font-weight: bold;
}
*/
