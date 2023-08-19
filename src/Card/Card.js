import React, { useState } from "react";
import classes from "./Card.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Update from "../update/Update";

const Card = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  const onDeleteClicked = () => {
    props.deleteHandler(props.id);
  };
  const onEditClicked = () => {
    // redirect to Update.js
    setOpenEdit((state) => !state);
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
    </>
  );
};

export default Card;
