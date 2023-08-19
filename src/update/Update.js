import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../store/todo-slice";
import Form from "../util/Form";

// const Update = (props) => {
//   const todoReduxList = useSelector((state) => state.todo.value);
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   useEffect(() => {
//     for (let i = 0; i < todoReduxList.length; i++) {
//       if (todoReduxList[i].id == props.id) {
//         setTitle(todoReduxList[i].title);
//         setDescription(todoReduxList[i].description);
//       }
//     }
//   }, []);
//   const onTitleChange = (e) => {
//     setTitle(() => e.target.value);
//   };
//   const onDescriptionChange = (e) => {
//     setDescription(() => e.target.value);
//   };
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     if (title.length == 0 || description.length == 0) {
//       alert("Bhery Clever!!! Please fill an info");
//       return;
//     }
//     const newTodo = { id: props.id, title: title, description: description };
//     setTitle("");
//     setDescription("");
//     dispatch(updateTodo(newTodo));
//     props.closeEdit();
//   };
//   const onCancel = (e) => {
//     e.preventDefault();
//     console.log("Cancelled Clicked");
//     props.closeEdit();
//   };
//   return (
//     <form className="input-form">
//       <input
//         type="text"
//         placeholder="update title"
//         onChange={onTitleChange}
//         value={title}
//         title="update title"
//       />
//       <input
//         type="text"
//         placeholder="Update Description"
//         onChange={onDescriptionChange}
//         value={description}
//         title="Update Description"
//       />
//       <button
//         type="submit"
//         onClick={onSubmitHandler}
//         className="submit"
//         title="Update Current TODO"
//       >
//         Update Todo
//       </button>
//       <button onClick={onCancel} className="cancel">
//         Cancel
//       </button>
//     </form>
//   );
// };

const Update = (props) => {
  return <Form update id={props.id} closeEdit={props.closeEdit} />;
};

export default Update;
