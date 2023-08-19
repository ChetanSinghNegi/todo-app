import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const TodoList = () => {
  const todoListRedux = useSelector((state) => state.todo.value);
  return (
    <>
      {todoListRedux.map((todo) => {
        return (
          <Card
            id={todo.id}
            title={todo.title}
            description={todo.description}
            key={todo.id}
          />
        );
      })}
    </>
  );
};

export default TodoList;
