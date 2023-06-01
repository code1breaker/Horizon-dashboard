import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import EmptyColumn from "./board/EmptyColumn";
import { useSelector } from "react-redux";
import AddBoardColumn from "./modal/AddBoardColumn";
import BoardColumn from "./board/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { dragTask } from "../../../redux/boardSlice";

const Kanban = () => {
  const boardColumn = useSelector((store) => store.board.column);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const dispatch = useDispatch();
  const handleShowColumnModal = (data) => {
    setShowColumnModal(data);
  };
  const handleCloseColumnModal = (data) => {
    setShowColumnModal(data);
  };

  const handleDrag = (result) => {
    dispatch(dragTask(result));
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div className="w-[80%] xl:w-full">
        <Navbar title={"Kanban"} />

        <div className="m-6 overflow-auto scrollbar-hide">
          {showColumnModal && <AddBoardColumn close={handleCloseColumnModal} />}

          {boardColumn.length === 0 ? (
            <EmptyColumn visible={handleShowColumnModal} />
          ) : (
            <BoardColumn />
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
