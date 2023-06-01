import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { deleteTask } from "../../../../redux/boardSlice";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ column }) => {
  const dispatch = useDispatch();
  const boardColumn = useSelector((store) => store.board.column);

  const handleDeleteTask = (colId, taskId) => {
    dispatch(deleteTask({ colId, taskId }));
  };

  return (
    <>
      {boardColumn.map((col) =>
        col.task.map((t, index) => {
          if (col.id === column.id)
            return (
              <Draggable key={t.id} draggableId={t.name} index={index}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    draggaable="true"
                    className="rounded-xl border-[1px] relative shadow-lg bg-white dark:bg-[#1d2548] dark:border-[#1d3548] px-5 py-3 mt-4"
                  >
                    <RxCross2
                      className="absolute top-4 right-2 text-xl cursor-pointer dark:text-gray-400"
                      onClick={() => {
                        handleDeleteTask(col.id, t.id);
                      }}
                    />
                    <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-white capitalize">
                      {t.name}
                    </p>
                    <p className="text-sm leading-5 dark:text-gray-400">
                      {t.desc}
                    </p>
                  </div>
                )}
              </Draggable>
            );
        })
      )}
    </>
  );
};

export default Card;
