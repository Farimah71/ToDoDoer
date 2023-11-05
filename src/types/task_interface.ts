interface iTask {
  id: string;
  title: string;
  date: string;
  done: boolean;
}

export interface iNewTask {
  id?: string;
  task: string;
  date: string;
}

interface iSearchTaskState {
  searchTerm: string;
  SearchedTasks: iTask[];
}

interface iFilterTaskState {
  filterOption: string;
  filteredTask: iTask[];
}

export interface iTodoState {
  tasks: iTask[];
  searchTask: iSearchTaskState;
  filterTask: iFilterTaskState;
}
