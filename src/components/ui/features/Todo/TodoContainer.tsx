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
      <div className=" h-[500px] w-full rounded-xl bg-gray-300 p-3">
        <div className=" bg-gray-400 rounded-md flex justify-between item-center p-5">
        <input type="checkbox" name="" id="" />
        <p>Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className=" space-x-3 ">
            <Button>Del</Button>
            <Button>Edit</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
