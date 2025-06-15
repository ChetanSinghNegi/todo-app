import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearTodo, saveTodo, updateTodo } from "../slice/todoSlice";
import { v4 as uuidv4 } from "uuid";
import Modal from "../pages/Modal";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(() => e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(() => e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.length == 0 || description.length == 0) {
      alert("Please fill complete info");
      return;
    }
    let newTodo;
    if (props.create) {
      newTodo = { id: uuidv4(), title: title, description: description };
      dispatch(saveTodo(newTodo));
    } else if (props.update) {
      newTodo = { id: props.id, title: title, description: description };
      dispatch(updateTodo(newTodo));
      props.closeEdit();
    }
    setTitle("");
    setDescription("");
  };

  const deleteAllTodosHandler = (e) => {
    e.preventDefault();
    setOpenModal((state) => !state);
  };

  const modalHandler = (flag) => {
    if (flag) {
      dispatch(clearTodo());
    }
    setOpenModal(false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    props.closeEdit();
  };
  return (
    <form className="input-form">
      <input
        type="text"
        placeholder={props.create ? "Create Title" : "Update Title"}
        onChange={onTitleChange}
        value={title}
        title={props.create ? "Create Title" : "Update Title"}
        className="input-text"
      />
      <input
        type="text"
        placeholder={props.create ? "Create Description" : "Update Description"}
        onChange={onDescriptionChange}
        value={description}
        title={props.create ? "Create Description" : "Update Description"}
        className="input-text"
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
      {props.create && (
        <button onClick={deleteAllTodosHandler} className="submit">
          Delete All Todos
        </button>
      )}
      {openModal && <Modal modalHandler={modalHandler} />}
    </form>
  );
};

export default Form;
