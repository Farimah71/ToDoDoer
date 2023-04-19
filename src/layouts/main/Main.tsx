import MyButton from "../../components/buttons/MyButton";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <span className="remained-tasks"> 3 items left.</span>
      <MyButton text="Add new task" />
    </div>
  );
};

export default Main;
