import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface todoState {
  id: string;
  task_name: string;
  date: string;
  done: boolean;
}

const initialState = [
  {
    id: "asdf123",
    task_name: "Learn React.js",
    date: new Date(2023, 4, 27).toDateString(),
    done: false,
  },
  {
    id: "asdf456",
    task_name: "Pay the bills",
    date: new Date(2023, 4, 27).toDateString(),
    done: true,
  },
  {
    id: "asdf789",
    task_name: "Start new project",
    date: new Date(2023, 3, 20).toDateString(),
    done: false,
  },
] as todoState[];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: () => {},

    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const updatedTodo = state.filter((task) => task.id !== taskId);
      return (state = updatedTodo);
    },

    editTask: () => {},

    toggleDone: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      state = state.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      );
      return state;
    },
  },
});

export const { addTask, removeTask, editTask, toggleDone } = todoSlice.actions;

export default todoSlice.reducer;
