import { createSlice } from "@reduxjs/toolkit";

interface todoState {
  id: string;
  task_name: string;
  date: Date;
  done: boolean;
}

const initialState = [
  {
    id: "asdf123",
    task_name: "Learn React.js",
    date: new Date(2023, 4, 25),
    done: false,
  },
  {
    id: "asdf456",
    task_name: "Pay the bills",
    date: new Date(2023, 4, 20),
    done: true,
  },
  {
    id: "asdf789",
    task_name: "Start new project",
    date: new Date(2023, 4, 20),
    done: false,
  },
] as todoState[];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: () => {},
    removeTask: () => {},
    editTask: () => {},
    toggleDone: () => {},
  },
});

export const { addTask, removeTask, editTask, toggleDone } = todoSlice.actions;

export default todoSlice.reducer;
