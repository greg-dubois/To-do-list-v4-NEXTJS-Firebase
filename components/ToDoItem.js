import classes from "./ToDoItem.module.css";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase/clientApp";

const ToDoItem = (props) => {
  const deleteToDoHandler = (id) => {
    deleteDoc(doc(db, "todos", id))
      .then(() => {
        console.log("todo deleted");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <li className={classes.li} onClick={() => deleteToDoHandler(props.id)}>
      TASK: {props.text} <br /> COMPLETE BY: {props.date}
    </li>
  );
};

export default ToDoItem;
