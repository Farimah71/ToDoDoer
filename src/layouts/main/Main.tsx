import Search from "../../components/Search-bar/Search";
import MyButton from "../../components/buttons/MyButton";
import TodosList from "../../components/todos/TodosList";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="first-row">
        <Search />
        <span className="remained-tasks"> 3 items left.</span>
        <MyButton text="Add new task" />
      </div>

      <div className="todo-list">
        <TodosList />
      </div>
    </div>
  );
};

export default Main;
