import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  date: string;
  done: boolean;
}

interface SearchTaskState {
  searchTerm: string;
  filteredTasks: Task[];
}

interface TodoState {
  tasks: Task[];
  searchTask: SearchTaskState;
}

const initialState = {
  tasks: [
    {
      id: "asdf123",
      title: "Learn React.js",
      date: new Date(2023, 4, 30).toDateString(),
      done: false,
    },
    {
      id: "asdf456",
      title: "Pay the bills",
      date: new Date(2023, 5, 1).toDateString(),
      done: true,
    },
    {
      id: "asdf789",
      title: "Start new project",
      date: new Date(2023, 5, 2).toDateString(),
      done: false,
    },
  ],
  searchTask: {
    searchTerm: "",
    filteredTasks: [],
  },
} as TodoState;

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adds new task to the list
    addTask: () => {},

    // Removes a task from the list
    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      return state;
    },

    // Edits an existing task
    editTask: () => {},

    // Filters tasks according to user search query
    searchTask: (state, action: PayloadAction<string>) => {
      let searchTerm = action.payload;
      if (searchTerm) {
        const filteredTasks = state.tasks.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        state.searchTask = {
          searchTerm,
          filteredTasks,
        };
      }
      return state;
    },

    // Toggles between complete and uncomplete task
    toggleDone: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      );
      return state;
    },
  },
});

export const { addTask, removeTask, editTask, searchTask, toggleDone } =
  todoSlice.actions;

export default todoSlice.reducer;
