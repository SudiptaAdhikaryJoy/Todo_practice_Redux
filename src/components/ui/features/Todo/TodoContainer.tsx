import React from "react";
import TodoCard from "./TodoCard";

function TodoContainer() {
  return (
    <div>
      <div className="  ">
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className=" h-[500px] w-full rounded-xl bg-red-500 p-5">
        <div className=" bg-white rounded-md flex justify-between item-center ">
        <input type="checkbox" name="" id="" />
        <p>Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div>
            <button>Del</button>
            <button>Edit</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
