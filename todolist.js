import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(1);

  // ✅ Add Predefined Task
  const addTask = () => {
    setTasks([...tasks, { id: taskCount, title: `Task ${taskCount}`, completed: false }]);
    setTaskCount(taskCount + 1);
  };

  // ✅ Mark Task as Done
  const markAsDone = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // ✅ Delete a Single Task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // ✅ Clear All Tasks
  const clearAll = () => {
    setTasks([]);
    setTaskCount(1);
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <button className="add-btn" onClick={addTask}>Add Task</button>
      <button className="clear-btn" onClick={clearAll} disabled={tasks.length === 0}>Clear All</button>

      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              {task.title}
              <button className="done-btn" onClick={() => markAsDone(task.id)}>
                {task.completed ? "Undo" : "Mark as Done"}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.todo-container {
  border: 2px solid #333;
  padding: 20px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
  background-color: #f9f9f9;
}

button {
  margin: 10px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.add-btn {
  background-color: #28a745;
  color: white;
}

.clear-btn {
  background-color: #dc3545;
  color: white;
}

.clear-btn:disabled {
  background-color: #ccc;
}

.done-btn {
  background-color: #007bff;
  color: white;
}

.delete-btn {
  background-color: #ff4444;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
*/
