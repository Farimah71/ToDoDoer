import "./notification.scss";

interface NotificationProps {
  data: number;
}

const Notification = ({ data }: NotificationProps) => {
  return (
    <span className="notif-text">
      {data === 0 && "Hey, You are free!"}
      {data === 1 && `${data} item left.`}
      {data > 1 && `${data} items left.`}
    </span>
  );
};

export default Notification;
