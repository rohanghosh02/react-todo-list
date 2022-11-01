import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("please add Some text");

      return;
    }

    const newTodo = input;
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const handleRemove = (item) => {
    const finalTodo = todo.filter((element, index) => {
      return index != item;
    });
    setTodo(finalTodo);
  };

  useEffect(() => {
    const todoData = window.localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <h1 id="heading">Todo App</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div className="input-div">
          <input
          id="input"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Add Your Task..."
          />
        </div>

        <button className="glow-on-hover">Add</button>
      </form>

      {todo.map((value, index) => {
        return (
          <TodoList
            key={index}
            id={index}
            todos={value}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
}
