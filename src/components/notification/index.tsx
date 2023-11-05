import { iNotification } from "../../types/notification_interface";
import "./index.scss";


export const Notification = ({ activeTasks, searchedResults }: iNotification): JSX.Element => {
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
