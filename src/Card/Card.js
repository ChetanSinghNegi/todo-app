import React, { useState } from "react";
import classes from "./Card.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Update from "../update/Update";
import Modal from "../pages/Modal";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../slice/todoSlice";

const Card = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const onDeleteClicked = () => {
    setOpenModal((state) => !state);
  };
  const onEditClicked = () => {
    setOpenEdit((state) => !state);
  };

  const modalActionHandler = (flag) => {
    if (flag) {
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
      {openModal && <Modal modalHandler={modalActionHandler} />}
    </>
  );
};

export default Card;
