import React from "react";

import Todo from "./Todo";

function TodoList({ todos, toggleComplete }) {
  return (
    <div>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        );
      })}
    </div>
  );
}

export default TodoList;