import classes from "./Modal.module.css";
const Modal = (props) => {
  const onYesClicked = () => {
    props.modalHandler(true);
  };
  const onNoClicked = () => {
    props.modalHandler(false);
  };
  return (
    <>
      <div className={classes.backDrop} onClick={onNoClicked}></div>
      <div className={classes.modalContainer}>
        <div className={classes.modal}>
          <div className={classes.modalText}>Are you sure?</div>
          <div className={classes.modalButton}>
            <button onClick={onYesClicked} className={classes.yes}>
              Yes
            </button>
            <button onClick={onNoClicked} className={classes.no}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
