import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// ✅ Blog Post Component
const BlogPost = ({ title, content, isFeatured }) => {
  return (
    <div className={`blog-post ${isFeatured ? "featured" : ""}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// ✅ Main Blog Page Component
const BlogPage = () => {
  const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
  ];

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      {blogs.map((blog, index) => (
        <BlogPost key={index} {...blog} />
      ))}
    </div>
  );
};

// ✅ Rendering to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BlogPage />);

// ✅ CSS Styling (styles.css)
/*
.blog-container {
  width: 60%;
  margin: auto;
  text-align: left;
}

h1 {
  text-align: center;
}

.blog-post {
  padding: 15px;
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.featured {
  background-color: lightyellow;
}
*/
