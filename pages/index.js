import Head from "next/head";
import NewToDo from "../components/NewToDo";
import ToDoList from "../components/ToDoList";
import db from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";

export default function Home(props) {
  const addToDoHandler = async (newToDo) => {
    const response = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify(newToDo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>ToDo</title>
        <meta
          name="description"
          content="send your productivity off the chart by using this ToDo tracker"
        />
      </Head>

      <NewToDo onAddToDo={addToDoHandler} />
      <ToDoList todos={props.todos} />
    </>
  );
}

export async function getServerSideProps() {
  let todos = [];

  try {
    const fetchedToDos = await getDocs(collection(db, "todos"));

    fetchedToDos.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      todos: todos,
    },
  };
}
