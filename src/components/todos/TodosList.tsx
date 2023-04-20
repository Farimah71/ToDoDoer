import { useAppSelector } from "../../app/hooks";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import "./todosList.scss";

const TodosList = (): JSX.Element => {
  const allTasks = useAppSelector((state) => state.todos);

  return (
    <>
      <div className="task-list">
        <ul className="list-group list-group-light">
          {allTasks.map((task) => (
            <div className="task-row">
              <li className="list-group-item">
                <input
                  className="form-check-input clickable me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                {task.task_name} | {task.date.toDateString()}
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
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodosList;
