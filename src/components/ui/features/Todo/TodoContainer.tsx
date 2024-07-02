import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../../button";

function TodoContainer() {
  return (
    <div>
      <div className=" flex justify-between items-center ">
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className=" h-full w-full rounded-xl bg-red-500 p-5 space-y-3">
        <div className=" flex justify-center items-center bg-white p-3 font-semibold text-center text-2xl ">
          <p> There is no task pending </p>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
