import { useAppSelector } from "../../app/hooks";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import Stack from "@mui/material/Stack/Stack";
import Chip from "@mui/material/Chip/Chip";
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
                  value=""
                  aria-label="..."
                />

                <span className="task-name">{task.task_name}</span>

                <div className="today-badge mx-1">
                  {taskDateArr[allTasks.indexOf(task)].toDateString() ===
                    todayDate.toDateString() && (
                    <Stack direction="row">
                      <Chip
                        label="Today"
                        color="warning"
                        size="small"
                        variant="outlined"
                      />
                    </Stack>
                  )}
                </div>

                <div className="control-date-group d-flex ms-auto">
                  <div className="date card">
                    {task.date.getMonth()}/{task.date.getDate()}/
                    {task.date.getFullYear()}
                  </div>

                  <span className="task-control">
                    <EditNoteIcon
                      color="warning"
                      className="icon-control clickable"
                    />
                    <DeleteIcon
                      color="error"
                      className="icon-control clickable"
                    />
                  </span>
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
