import { useAppSelector } from "../../app/hooks";
import ControlButtons from "../../utils/controlButtons/ControlButtons";
import DateCard from "../../utils/DateCard/DateCard";
import Badge from "../../utils/badge/Badge";
import "./todosList.scss";

const TodosList = (): JSX.Element => {
  const allTasks = useAppSelector((state) => state.todos);
  const todayDate = new Date();
  const taskDateArr: Date[] = [];

  allTasks.forEach((task) => {
    const taskDate = new Date(task.date);
    const taskMonth = taskDate.getMonth() - 1;
    const correctTaskDate = taskDate.setMonth(taskMonth);
    taskDateArr.push(new Date(correctTaskDate));
  });

  return (
    <>
      <div className="task-list">
        <ul className="list-group list-group-light">
          {allTasks.map((task) => (
            <div key={task.id} className="task-row">
              <li className="list-group-item">
                <input
                  className="form-check-input clickable me-1"
                  type="checkbox"
                />

                <span className="task-name">{task.task_name}</span>

                <div className="today-badge mx-1">
                  {taskDateArr[allTasks.indexOf(task)].toDateString() ===
                    todayDate.toDateString() && <Badge label={"Today"} />}
                </div>

                <div className="control-date-group d-flex ms-auto">
                  <DateCard date={task.date} />
                  <ControlButtons />
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodosList;
