import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Card from "./Card/Card";
import { useState } from "react";
import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, deleteTodo } from "./store/todo-slice";
import videoSrc from "./video.mp4";

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
    setTitle("");
    setDescription("");
    dispatch(setTodo(newTodo));
  };
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="app">
      <video autoPlay loop muted className="video-background">
        <source src={videoSrc} type="video/mp4" />
      </video>
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
