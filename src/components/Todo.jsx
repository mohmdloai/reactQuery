import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "./Loader";
// import '../index.css'

const Todo = () => {
  const getMutation = useMutation({
    mutationFn: async () =>
      await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    onSuccess: () => {
      console.log("Data fetched successfully");
    },
  });
  /*
  const { data,isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
*/
  if (getMutation.isPending) {
    return <Loader />;
  }
  console.log(getMutation);
  // console.log(getMutation.data);
  // console.log(getMutation.status);

  return (
    <>
      <button onClick={() => getMutation.mutate()}>Fetch Todos</button>
      <div className="container">
        {getMutation.data &&
          getMutation.data?.map((todo) => (
            <div
              className={`todo ${todo.completed ? "Completed" : "Pending"}`}
              key={todo.id}
            >
              {todo.title}
              <p className={todo.completed ? "Done" : "Open"}>
                Status: {todo.completed ? "Done" : "Open"}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todo;
