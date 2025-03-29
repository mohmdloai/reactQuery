import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "./Loader";
// import '../index.css'

const Todo = () => {
  const { data,isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (isLoading ){return <Loader />}
  return (
    <div className="container">
      {data &&
        data?.map((todo) => (
          <div className={`todo ${todo.completed ? "Completed" : "Pending"}`} key={todo.id}>
            {todo.title}
            <p className= {todo.completed ? "Done" : "Open"}>Status: {todo.completed ? "Done" : "Open"}</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
