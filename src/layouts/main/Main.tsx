import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { searchTask } from "../../features/todos/todoSlice";
import Search from "../../components/Search-bar/Search";
import Modal from "../../components/modal/Modal";
import TodosList from "../../components/todos/TodosList";
import Filter from "../../utils/filter/Filter";
import "./main.scss";

const Main = () => {
  const [count, setCount] = useState<number>(0);
  const allTasks = useAppSelector((state) => state.todos.tasks);
  const dispatch = useAppDispatch();

  //Counts the number of uncomplete tasks:
  const uncompleteTasks = allTasks.filter((task) => task.done === false);
  const uncompleteTasksCount = uncompleteTasks.length;

  useEffect(() => setCount(uncompleteTasksCount));

  const handleSearch = (searchTerm: string) => {
    dispatch(searchTask(searchTerm));
  };

  return (
    <div className="main">
      <div className="first-row">
        <Search handleSearch={handleSearch} />

        {/*Number of remaining tasks notification */}
        <span className="remained-tasks">
          {count === 0 && "Hey, You are free!"}
          {count === 1 && `${count} item left.`}
          {count > 1 && `${count} items left.`}
        </span>

        <Modal />
      </div>

      {/* Renders todo list */}
      <div className="todo-list">
        <TodosList />
      </div>

      {/* Renders task filters*/}
      <div className="filter-tasks">
        <Filter />
      </div>
    </div>
  );
};

export default Main;
