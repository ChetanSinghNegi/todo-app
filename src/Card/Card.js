import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const onDeleteClicked = () => {
    console.log("delete Clicked");
    console.log("id of delete => ", props.id);
    props.deleteHandler(props.id);
  };
  return (
    <div className={classes.cardContainer}>
      <header className={classes.title}>{props.title}</header>
      <p className={classes.description}>
        {props.description}
        <span className={classes.delete} onClick={onDeleteClicked}>
          X
        </span>
      </p>
    </div>
  );
};

export default Card;
