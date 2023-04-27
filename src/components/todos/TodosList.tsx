import { useAppSelector, useAppDispatch } from "../../app/hooks";
import ControlButtons from "../../utils/controlButtons/ControlButtons";
import DateCard from "../../utils/DateCard/DateCard";
import Badge from "../../utils/badge/Badge";
import { removeTask, toggleDone } from "../../features/todos/todoSlice";
import "./todosList.scss";
import React from "react";

interface handleDeleteProp {
  id: string;
}

const TodosList = (): JSX.Element => {
  const allTasks = useAppSelector((state) => state.todos);
  const todayDate = new Date().toDateString();
  const taskDateArr: Date[] = [];

  const dispatch = useAppDispatch();

  // Converting task dates to date with correct months
  allTasks.forEach((task) => {
    const taskDate = new Date(task.date);
    const taskMonth = taskDate.getMonth() - 1;
    const correctTaskDate = taskDate.setMonth(taskMonth);
    taskDateArr.push(new Date(correctTaskDate));
  });

  // Deletes a task row by clicking on "delete" icon
  const handleDelete = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleDone(event.target.value));
  };

  // Rendering all tasks list
  return (
    <>
      <div className="task-list">
        <ul className="list-group list-group-light">
          {allTasks.map((task) => (
            <div key={task.id} className="task-row">
              <li className="list-group-item">
                {/* Task checkbox */}
                <input
                  className="form-check-input clickable me-1"
                  type="checkbox"
                  value={task.id}
                  checked={task.done && true} //Completed tasks get checked
                  onChange={handleCheckboxChange}
                />

                {/* Task name */}
                {/* Completed tasks get line-through style and green color */}
                <span
                  className={task.done ? "task-name task-done" : "task-name"}
                >
                  {task.task_name}
                </span>

                {/* Renders "Today" badge for the tasks with the date of today */}
                <div className="today-badge mx-1">
                  {taskDateArr[allTasks.indexOf(task)].toDateString() ===
                    todayDate && <Badge label={"Today"} />}
                </div>

                {/* Task date and control buttons part of each list item */}
                <div className="control-date-group d-flex ms-auto">
                  <DateCard date={task.date} />
                  <ControlButtons onDelete={() => handleDelete(task.id)} />
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
