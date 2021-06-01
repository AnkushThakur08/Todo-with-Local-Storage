import React, { useState, useEffect } from "react";

// reactStrap
import { Container } from "reactstrap";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

// Custom CSS
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container fluid>
      <h1> Todo With Local Storage UseEffect </h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
