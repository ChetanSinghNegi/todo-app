import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, updateTodo } from "../store/todo-slice";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  //for update => update prop
  //for create => create prop
  const todoReduxList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    for (let i = 0; i < todoReduxList.length; i++) {
      if (todoReduxList[i].id == props.id) {
        setTitle(todoReduxList[i].title);
        setDescription(todoReduxList[i].description);
      }
    }
  }, []);
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
    setTitle("");
    setDescription("");
    let newTodo;
    if (props.create) {
      newTodo = { id: uuidv4(), title: title, description: description };
      props.create && dispatch(setTodo(newTodo));
    } else if (props.update) {
      newTodo = { id: props.id, title: title, description: description };
      props.update && dispatch(updateTodo(newTodo));
      props.closeEdit();
    }
  };
  const onCancel = (e) => {
    e.preventDefault();
    console.log("Cancelled Clicked");
    props.closeEdit();
  };
  return (
    <form className="input-form">
      <input
        type="text"
        placeholder="update title"
        onChange={onTitleChange}
        value={title}
        title="update title"
      />
      <input
        type="text"
        placeholder="Update Description"
        onChange={onDescriptionChange}
        value={description}
        title="Update Description"
      />
      <button
        type="submit"
        onClick={onSubmitHandler}
        className="submit"
        title="Update Current TODO"
      >
        {props.create ? "Create TODO" : "Update TODO"}
      </button>
      {props.update && (
        <button onClick={onCancel} className="cancel">
          Cancel
        </button>
      )}
    </form>
  );
};

export default Form;