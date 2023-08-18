import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Card from "./Card/Card";
import { useState } from "react";
import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, deleteTodo } from "./store/todo-slice";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const todoListRedux = useSelector((state) => state.todo.value);
  const onTitleChange = (e) => {
    setTitle(() => e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(() => e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.length == 0 || description.length == 0) {
      alert("Bhery Clever!!! Please fill an info");
      return;
    }
    const newTodo = { id: uuidv4(), title: title, description: description };
    // console.log("newTodo =>", newTodo);
    setTitle("");
    setDescription("");
    dispatch(setTodo(newTodo));
    console.log("values of redux", todoListRedux);
  };
  const deleteHandler = (id) => {
    console.log("id at app =>", id);
    dispatch(deleteTodo(id));
  };
  return (
    <div className="app">
      <form className="input-form">
        <input
          type="text"
          placeholder="please type title"
          onChange={onTitleChange}
          value={title}
        />
        <input
          type="text"
          placeholder="please type Description"
          onChange={onDescriptionChange}
          value={description}
        />
        <button type="submit" onClick={onSubmitHandler} className="submit">
          Add Todo
        </button>
      </form>
      {todoListRedux.map((todo) => {
        return (
          <Card
            id={todo.id}
            title={todo.title}
            description={todo.description}
            key={todo.id}
            deleteHandler={deleteHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
