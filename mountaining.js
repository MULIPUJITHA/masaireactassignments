import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

// ✅ 1. Mounting (Component Did Mount)
const UserInfo = () => {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  return <h2>Welcome to React!</h2>;
};

// ✅ 2. Updating (Component Did Update)
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) console.log("Component Updated!");
  }, [count]);

  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// ✅ 3. Unmounting (Component Will Unmount)
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer Mounted!");
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted!");
    };
  }, []);

  return <h3>Timer: {seconds} seconds</h3>;
};

// ✅ Parent Component to handle mounting/unmounting
const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="app">
      <UserInfo />
      <Counter />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.app {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 10px;
}

button:hover {
  background-color: #0056b3;
}

.counter {
  margin: 20px;
}
*/
