import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

// ✅ Creating Theme Context
const ThemeContext = createContext();

// ✅ Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// ✅ Nested Child Component
const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  return <div className={`box ${theme}`}>This is a {theme} themed box.</div>;
};

// ✅ Main App Component
const App = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1>Context API Theme Toggle</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemedBox />
    </div>
  );
};

// ✅ Rendering the App inside ThemeProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// ✅ CSS Styling (styles.css)
/*
.app {
  text-align: center;
  padding: 20px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.light {
  background: white;
  color: black;
}

.dark {
  background: black;
  color: white;
}

.container {
  margin-top: 50px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.box {
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  margin: auto;
  transition: background 0.3s ease-in-out;
}

.light .box {
  background: #f9f9f9;
}

.dark .box {
  background: #333;
}
*/
