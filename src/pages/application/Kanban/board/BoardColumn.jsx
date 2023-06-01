import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "../modal/AddTask";
import Card from "./Card";
import AddBoardColumn from "../modal/AddBoardColumn";
import { Droppable } from "react-beautiful-dnd";

const BoardColumn = () => {
  const boardColumn = useSelector((store) => store.board.column);

  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [column, setColumn] = useState();

  const handleCloseColumnModal = (data) => {
    setShowColumnModal(data);
  };
  const handleCloseTaskModal = (data) => {
    setShowTaskModal(data);
  };

  const handleTaskModal = (col) => {
    setColumn(col);
    setShowTaskModal(true);
  };

  return (
    <div className="flex gap-5 min-h-[35rem]">
      {boardColumn.map((column) => {
        return (
          <Droppable key={column.id} droppableId={column.name}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-50 dark:bg-[#131c41] h-fit min-w-[22rem] max-w-[22rem] rounded-2xl p-5"
              >
                <div className="flex justify-between">
                  <p className="text-gray-800 text-xl font-semibold dark:text-white">
                    {column.name}
                  </p>
                  <button
                    onClick={() => {
                      handleTaskModal(column);
                    }}
                    className="rounded-xl py- px-9 bg-gray-100 text-2xl text-[#422AFB] dark:bg-[#1d2548] dark:text-white"
                  >
                    +
                  </button>
                </div>
                <Card column={column} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}

      {showTaskModal && (
        <AddTask close={handleCloseTaskModal} column={column} />
      )}

      <div className="rounded-xl min-w-[15rem]">
        <button
          onClick={() => {
            setShowColumnModal(true);
          }}
          className="text-[#422AFB] bg-gray-50 dark:bg-[#131c41] dark:text-white w-full h-full text-xl font-bold rounded-xl py-2 px-4 "
        >
          Add New Column
        </button>
      </div>

      {showColumnModal && <AddBoardColumn close={handleCloseColumnModal} />}
    </div>
  );
};

export default BoardColumn;
