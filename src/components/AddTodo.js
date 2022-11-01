import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  

 

  
  return (
    <div>
      
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div className="input-div">
          <input
          id="input"
            type="text"
            value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder="Add Your Task..."
          />
          <button className="glow-on-hover">Add</button>
        </div>

        
      </form>

     
    </div>
  );
}
