import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    column: [
      {
        id: 1,
        name: "To Do",
        task: [
          {
            id: 2,
            name: "Conduct 5 wireframe tests",
            desc: "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          },
          {
            id: 3,
            name: "QA and test all major user journeys",
            desc: "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
          },
        ],
      },

      {
        id: 4,
        name: "Progress",
        task: [{ id: 5, name: "Build UI for search", desc: "" }],
      },

      {
        id: 6,
        name: "Finish",
        task: [
          {
            id: 7,
            name: "Create paper prototypes and conduct 10 usability tests with potential customers",
            desc: "",
          },
          {
            id: 8,
            name: "Create wireframe prototype",
            desc: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
          },
        ],
      },
    ],
  },

  reducers: {
    addBoardColumn: (state, action) => {
      state.column = action.payload;
    },

    addTask: (state, action) => {
      const col = state.column.find((c) => c.id === action.payload[1]);
      if (col) {
        col.task = [...col.task, action.payload[0]];
      }
    },

    deleteTask: (state, action) => {
      const col = state.column.find((c) => c.id === action.payload.colId);
      if (col) {
        const newTask = col.task.filter((t) => t.id !== action.payload.taskId);
        col.task = [...newTask];
      }
    },

    dragTask: (state, action) => {
      let task;
      const { source, destination } = action.payload;
      if (destination !== null) {
        const sourceColumn = {
          ...state.column.find((col) => col.name === source.droppableId),
        };
        const destinationColumn = {
          ...state.column.find((col) => col.name === destination.droppableId),
        };

        if (sourceColumn) {
          console.log("source", sourceColumn.name);
          task = JSON.parse(
            JSON.stringify(sourceColumn.task.splice(source.index, 1))
          );
          console.log(...task);
        }

        if (destinationColumn) {
          console.log("destination", destinationColumn.name);
          destinationColumn.task.splice(destination.index, 0, ...task);
        }
      }
    },
  },
});

export const { addBoardColumn, addTask, deleteTask, dragTask } =
  boardSlice.actions;
export default boardSlice.reducer;
