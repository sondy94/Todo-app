import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ]);

    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        class="todo-input"
        onChange={inputTextHandler}
      />
      <button class="todo-button" type="submit" onClick={addTodo}>
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
