import React from "react";

export default function TodoList({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo-list"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <button className=" complete-btn" onClick={() => completeTodo(index)}>
        Complete
      </button>
      <button className="delete-btn" onClick={() => removeTodo(index)}>
        x
      </button>
    </div>
  );
}
