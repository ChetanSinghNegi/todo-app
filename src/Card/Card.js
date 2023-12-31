import React, { useState } from "react";
import classes from "./Card.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Update from "../update/Update";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todo-slice";
import Modal from "../pages/Modal";

const Card = (props) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const onDeleteClicked = () => {
    setOpenModal((state) => !state);
  };
  const onEditClicked = () => {
    // redirect to Update.js
    setOpenEdit((state) => !state);
  };

  const modalHandler = (value) => {
    if (value == true) {
      dispatch(deleteTodo(props.id));
    }
    setOpenModal((state) => !state);
  };
  return (
    <>
      <div className={classes.cardContainer}>
        <header className={classes.title}>{props.title}</header>
        <p className={classes.description}>
          {props.description}
          <FiEdit className={classes.edit} onClick={onEditClicked} />
          <AiOutlineClose
            className={classes.delete}
            onClick={onDeleteClicked}
            title="Delete"
          />
        </p>
      </div>
      {openEdit && <Update id={props.id} closeEdit={onEditClicked} />}
      {openModal && <Modal modalHandler={modalHandler} />}
    </>
  );
};

export default Card;
