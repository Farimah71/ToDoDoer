import "./notification.scss";

interface NotificationProps {
  activeTasks: number;
  searchedResults: number | null;
}

const Notification = ({ activeTasks, searchedResults }: NotificationProps) => {
  return searchedResults === null ? (
    <span className="notif-text">
      {activeTasks === 0 && "Hey, You are free!"}
      {activeTasks === 1 && `${activeTasks} item left.`}
      {activeTasks > 1 && `${activeTasks} items left.`}
    </span>
  ) : (
    <span className="notif-text">
      {searchedResults === 0 && "Oops!"}
      {searchedResults === 1 && `${searchedResults} task found.`}
      {searchedResults > 1 && `${searchedResults} tasks found.`}
    </span>
  );
};

export default Notification;
