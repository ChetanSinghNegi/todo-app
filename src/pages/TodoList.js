import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todoListRedux = useSelector((state) => state.todo.allTodos);
  if (todoListRedux && todoListRedux?.length === 0) {
    const valueFromLocalStore = JSON.parse(
      localStorage.getItem("allTodos") || "[]"
    );
    if (valueFromLocalStore && valueFromLocalStore.length > 0)
      todoListRedux = valueFromLocalStore;
  }
  return (
    <>
      {todoListRedux?.map((todo) => {
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
