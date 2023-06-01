import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addBoardColumn } from "../../../../redux/boardSlice";

const AddBoardColumn = ({ close }) => {
  const dispatch = useDispatch();
  const boardColumn = useSelector((store) => store.board.column);
  const [addColumn, setAddColumn] = useState([]);

  useEffect(() => {
    setAddColumn(
      boardColumn.map((col) => {
        return { ...col };
      })
    );
  }, []);

  const handleAddColumn = () => {
    setAddColumn([...addColumn, { id: uuid(), name: "", task: [] }]);
  };

  const handleSaveColumn = () => {
    const filterColumn = addColumn.filter((col) => col.name !== "");
    dispatch(addBoardColumn(filterColumn));
    close();
  };

  const handleChange = (id, newValue) => {
    const column = addColumn.find((col) => col.id === id);
    column.name = newValue;
    setAddColumn([...addColumn]);
  };

  const handleDelete = (id) => {
    const column = addColumn.filter((col) => col.id !== id);
    setAddColumn([...column]);
  };

  return (
    <div
      id="container"
      onClick={(e) => e.target.id === "container" && close()}
      className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-20"
    >
      <div className="w-[28rem] sm:mx-5 px-8 py-10 rounded-xl bg-white dark:bg-[#131c41] flex flex-col gap-6">
        <p className="text-gray-800 text-xl font-semibold dark:text-white">
          Edit Board
        </p>

        <div>
          <p className="font-semibold mb-2 dark:text-white ">Board Name</p>

          <input
            className="w-full outline-none border-[1px] border-black py-1 px-4 rounded-md text-md text-gray-800 dark:bg-[#0d1435] dark:text-gray-400 font-semibold"
            type="text"
            value="Launch"
          />
        </div>

        <div>
          <p className="font-semibold mb-2 dark:text-white">Board Column</p>

          {addColumn.map((column, index) => {
            return (
              <div key={index} className="flex items-center mb-4">
                <input
                  className="w-full outline-none border-[1px] border-black dark:bg-[#0d1435] dark:text-gray-400 py-1 px-4 rounded-md text-md text-gray-800 font-semibold"
                  type="text"
                  value={column.name}
                  onChange={(e) => {
                    handleChange(column.id, e.target.value);
                  }}
                />
                <RxCross2
                  onClick={() => {
                    handleDelete(column.id);
                  }}
                  className="ml-3 text-xl cursor-pointer dark:text-gray-400"
                />
              </div>
            );
          })}

          <button
            onClick={handleAddColumn}
            className="rounded-full w-full sm:px-8 text-white bg-[#422AFB] dark:bg-[#7045f6] py-2 px-16 font-semibold"
          >
            Add New Column
          </button>
        </div>

        <button
          onClick={handleSaveColumn}
          className="rounded-full w-full sm:px-8 text-white bg-[#422AFB] dark:bg-[#7045f6] py-2 px-16 font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AddBoardColumn;
