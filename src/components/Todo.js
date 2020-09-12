import React from "react";

function Todo({ text, setTodos, todos }) {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="trash-btn" onClick={deleteTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
