import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";
import db from "../firebase/clientApp";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ToDoList = (props) => {
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     collection(db, "todos"),

  //     (snapshot) => {
  //       setTodos(
  //         snapshot.docs.map((doc) => ({
  //           data: doc.data(),
  //           id: doc.id,
  //         }))
  //       );
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <>
      <ul className={classes.ul}>
        {props.todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            date={todo.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
