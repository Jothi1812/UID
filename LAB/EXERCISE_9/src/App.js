
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      if (isEditing) {
        
        const updatedTasks = [...tasks];
        updatedTasks[currentTaskIndex] = newTask;
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        
        setTasks([...tasks, newTask]);
      }
      setNewTask(""); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  
  const editTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setNewTask(tasks[index]);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>{isEditing ? "Update Task" : "Add Task"}</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>Your to-do list is empty</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <div className="task-buttons">
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default App;