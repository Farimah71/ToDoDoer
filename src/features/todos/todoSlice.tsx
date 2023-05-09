import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  date: string;
  done: boolean;
}

interface SearchTaskState {
  searchTerm: string;
  SearchedTasks: Task[];
}

interface FilterTaskState {
  option: string;
  filteredTask: Task[];
}

interface TodoState {
  tasks: Task[];
  searchTask: SearchTaskState;
  filterTask: FilterTaskState;
}

interface NewTask {
  task: string;
  date: string;
}

const initialState = {
  tasks: [
    {
      id: "asdf123",
      title: "Learn React.js",
      date: new Date(2023, 5, 9).toDateString(),
      done: false,
    },
    {
      id: "asdf456",
      title: "Pay the bills",
      date: new Date(2023, 5, 10).toDateString(),
      done: true,
    },
    {
      id: "asdf789",
      title: "Start new project",
      date: new Date(2023, 5, 11).toDateString(),
      done: false,
    },
  ],
  searchTask: {
    searchTerm: "",
    SearchedTasks: [],
  },
  filterTask: {
    option: "",
    filteredTask: [],
  },
} as TodoState;

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adds new task to the list
    addTask: (state, action: PayloadAction<NewTask>) => {
      const task = action.payload;
      const newTask = {
        id: nanoid(),
        title: task.task,
        date: task.date,
        done: false,
      };
      state.tasks.push(newTask);
    },

    // Removes a task from the list
    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      // Removes from filtered tasks
      if (state.filterTask.option) {
        state.filterTask.filteredTask = state.filterTask.filteredTask.filter(
          (task) => task.id !== taskId
        );
      }
      // Removes from searched tasks
      if (state.searchTask.searchTerm) {
        state.searchTask.SearchedTasks = state.searchTask.SearchedTasks.filter(
          (task) => task.id !== taskId
        );
      }
      // Removes from active tasks
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      return state;
    },

    // Edits an existing task
    editTask: () => {},

    // Filters tasks by search query
    searchTask: (state, action: PayloadAction<string>) => {
      let searchTerm = action.payload;
      const SearchedTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      state.searchTask = {
        searchTerm,
        SearchedTasks,
      };

      return state;
    },

    // Toggles between complete and uncomplete task
    toggleDone: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      // Toggles "complete/uncomplete" among filtered tasks
      if (state.filterTask.option) {
        state.filterTask.filteredTask = state.filterTask.filteredTask.map(
          (task) => (task.id === taskId ? { ...task, done: !task.done } : task)
        );
      }
      // Toggles "complete/uncomplete" among searched tasks
      if (state.searchTask.searchTerm) {
        state.searchTask.SearchedTasks = state.searchTask.SearchedTasks.map(
          (task) => (task.id === taskId ? { ...task, done: !task.done } : task)
        );
      }
      // Toggles "complete/uncomplete" among active tasks
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      );
      return state;
    },

    // Filters All, Complete or Active tasks
    filterTask: (state, action: PayloadAction<string>) => {
      const option = action.payload; // Filter value
      let filteredTask = [];
      switch (option) {
        case "Active":
          filteredTask = state.tasks.filter((task) => task.done === false);
          break;
        case "Complete":
          filteredTask = state.tasks.filter((task) => task.done === true);
          break;
        default:
          filteredTask = state.tasks;
      }
      state.filterTask = {
        option,
        filteredTask,
      };

      return state;
    },
  },
});

export const {
  addTask,
  removeTask,
  editTask,
  searchTask,
  toggleDone,
  filterTask,
} = todoSlice.actions;

export default todoSlice.reducer;
