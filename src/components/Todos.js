import React from "react";

// ReactStrap
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
