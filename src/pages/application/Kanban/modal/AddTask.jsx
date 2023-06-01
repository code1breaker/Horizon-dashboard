import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../redux/boardSlice";
import { v4 as uuid } from "uuid";

const AddTask = ({ close, column }) => {
  const dispatch = useDispatch();
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDescInput, setTaskDescInput] = useState("");

  const handleSaveTask = (id) => {
    if (taskNameInput != "" || taskDescInput != "") {
      dispatch(
        addTask([{ id: uuid(), name: taskNameInput, desc: taskDescInput }, id])
      );
      close();
    }
  };
  return (
    <div
      id="container"
      onClick={(e) => e.target.id === "container" && close()}
      className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-20"
    >
      <div className="bg-white sm:mx-5 dark:bg-[#131c41] w-[28rem] rounded-xl p-6 flex flex-col gap-5">
        <p className="text-xl text-gray-800 font-semibold dark:text-white">
          Add New Task : {column.name}
        </p>

        <div>
          <p className="font-semibold mb-2 dark:text-white ">Task Name</p>
          <input
            className="w-full outline-none border-[1px] border-black dark:bg-[#0d1435] dark:text-gray-400 dark:border-[#0d1435] py-1 px-4 rounded-md text-md text-gray-800 font-semibold"
            type="text"
            value={taskNameInput}
            onChange={(e) => setTaskNameInput(e.target.value)}
            placeholder="e.g. Take coffee break"
          />
        </div>

        <div>
          <p className="font-semibold mb-2 dark:text-white ">Description</p>
          <textarea
            className="w-full min-h-[10rem] outline-none border-[1px] border-black dark:bg-[#0d1435] dark:text-gray-400 dark:border-[#0d1435] py-1 px-4 rounded-md text-md text-gray-800 font-semibold"
            value={taskDescInput}
            onChange={(e) => setTaskDescInput(e.target.value)}
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          />
        </div>

        <div>
          <button
            onClick={() => {
              handleSaveTask(column.id);
            }}
            className="rounded-full w-full text-white bg-[#422AFB] dark:bg-[#7045f6] py-2 px-16 font-semibold"
          >
            Create task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
