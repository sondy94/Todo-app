import React, { useState } from "react";
import "./styles.css";

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([""]);
  return (
    <div className="App">
      <header>
        <h1>Odeson's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>
  );
}
