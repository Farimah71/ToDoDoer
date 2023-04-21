import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Search from "../../components/Search-bar/Search";
import MyButton from "../../components/buttons/MyButton";
import TodosList from "../../components/todos/TodosList";
import Filter from "../../utils/filter/Filter";
import "./main.scss";
import Modal from "../../components/modal/Modal";

const Main = () => {
  const [count, setCount] = useState(0);
  const allTasks = useAppSelector((state) => state.todos);

  const al = allTasks.length;

  useEffect(() => setCount(al));

  return (
    <div className="main">
      <div className="first-row">
        <Search />

        <span className="remained-tasks">
          {count === 0 && "Hey, You are free!"}
          {count === 1 && `${count} item left.`}
          {count > 1 && `${count} items left.`}
        </span>

        <Modal />
      </div>

      <div className="todo-list">
        <TodosList />
      </div>

      <div className="filter-tasks">
        <Filter />
      </div>
    </div>
  );
};

export default Main;
