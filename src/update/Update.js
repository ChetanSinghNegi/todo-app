import Form from "../util/Form";

const Update = (props) => {
  return <Form update id={props.id} closeEdit={props.closeEdit} />;
};

export default Update;
