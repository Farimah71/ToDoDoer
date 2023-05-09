import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { searchTask, filterTask } from "../../features/todos/todoSlice";
import Search from "../../components/Search-bar/Search";
import AddModal from "../../components/modal/AddModal";
import TodosList from "../../components/todos/TodosList";
import Filter from "../../utils/filter/Filter";
import "./main.scss";
import Notification from "../../utils/notification/Notification";

const Main = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(0);
  const allTasks = useAppSelector((state) => state.todos.tasks);
  const { option } = useAppSelector((state) => state.todos.filterTask);

  //Counts the number of uncomplete tasks:
  const uncompleteTasks = allTasks.filter((task) => task.done === false);
  const uncompleteTasksCount = uncompleteTasks.length;

  useEffect(() => setCount(uncompleteTasksCount));

  const handleSearch = (searchTerm: string) => {
    dispatch(searchTask(searchTerm));
  };

  // Filter value("All", "Complete", "Active") is dispatched:
  const handleFilterChange = (value: string) => {
    dispatch(filterTask(value));
  };

  return (
    <div className="main">
      <div className="first-row">
        <Search handleSearch={handleSearch} />

        {/*Number of remaining tasks notification */}
        <Notification data={count} />

        {/* New task button and popup modal on click*/}
        <AddModal />
      </div>

      {/* Renders todo list */}
      <div className="todo-list">
        <TodosList filterOption={option} />
      </div>

      {/* Renders task filters*/}
      <div className="filter-tasks">
        <Filter handleClick={handleFilterChange} />
      </div>
    </div>
  );
};

export default Main;
