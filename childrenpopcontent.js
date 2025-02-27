import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// ✅ Reusable Container Component
const Container = ({ title, children }) => {
  return (
    <div className="container">
      {title && <h2 className="container-title">{title}</h2>}
      <div className="container-content">{children}</div>
    </div>
  );
};

// ✅ App Component (Using Container with different content)
const App = () => {
  return (
    <div className="app">
      <Container title="Welcome">
        <h1>Hello, React!</h1>
      </Container>

      <Container title="Description">
        <p>React makes building UIs fun and easy!</p>
      </Container>

      <Container title="Click the Button">
        <button onClick={() => alert("Button Clicked!")}>Click Me</button>
      </Container>
    </div>
  );
};

// ✅ Rendering to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

.container {
  border: 2px solid #333;
  padding: 20px;
  background-color: #f5f5f5;
  width: 300px;
  text-align: center;
  border-radius: 8px;
}

.container-title {
  margin-bottom: 10px;
  font-size: 20px;
  color: #444;
}

.container-content {
  font-size: 18px;
}
*/
