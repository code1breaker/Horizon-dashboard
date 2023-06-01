import React from "react";

const EmptyColumn = ({ visible }) => {
  return (
    <div className="min-h-[35rem] flex flex-col items-center justify-center">
      <p className="text-lg font-semibold dark:text-white">
        The board is empty. Create new column to get started.
      </p>
      <button
        onClick={() => {
          visible(true);
        }}
        className="rounded-full text-white bg-[#422AFB] dark:bg-[#7045f6] py-2 px-16 font-semibold"
      >
        Add New Column
      </button>
    </div>
  );
};

export default EmptyColumn;
