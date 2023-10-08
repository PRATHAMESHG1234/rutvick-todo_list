import React, { useState } from "react";
import axios from "axios";

function Create({ onAddTodo }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = async () => {
    if (!task) {
      alert("Task cannot be empty!");
      return;
    }
    try {
      await axios
        .post("http://localhost:3001/add", { task: task })
        .then((result) => {
          console.log("Task added successfully:", result.data);
          setTask("");
        });
      onAddTodo();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <div className="create_form">
      <input
        type="text"
        className="input"
        placeholder="Enter task"
        value={task}
        onChange={handleInputChange}
      />
      <button type="button" className="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
