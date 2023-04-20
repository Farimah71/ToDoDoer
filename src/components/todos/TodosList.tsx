import { useAppSelector } from "../../app/hooks";

const TodosList = (): JSX.Element => {
  const allTasks = useAppSelector((state) => state.todos);

  return (
    <>
      <ul>
        {allTasks.map((task) => (
          <li key={task.id}>
            {task.task_name} | {task.date.toDateString()}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosList;
