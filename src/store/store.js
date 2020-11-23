import { configureStore, createSlice } from "@reduxjs/toolkit";



const defaultTasks = [
  { id: "1", title: "React", state: "TASK_INBOX" },

];

const taskReducer = createSlice({
  name: "tasks",
  initialState: defaultTasks,
  reducers: {
    pinTask: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TASK_PINNED",
          };
        } else {
          return item;
        }
      });
    },
    unPinTask: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TASK_INBOX",
          };
        } else {
          return item;
        }
      });
    },
    archive: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TASK_ARCHIVED",
          };
        } else {
          return item;
        }
      });
    },
    addTask: (state, action) => {
      let id = "0";
      if (state.length !== undefined && state.length !== null) {
        id = (state.length + 1).toString();
      }
      return [
        ...state,
        { id: id, title: action.payload.title, state: "TASK_INBOX" },
      ];
    },
  },
});


const store = configureStore({
  reducer: taskReducer.reducer,
});
export const { pinTask, unPinTask, archive, addTask } = taskReducer.actions;

export { taskReducer, store };
