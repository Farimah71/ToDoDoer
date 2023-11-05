import { iDateCard } from "../../types/date_card_interface";
import "./index.scss";

export const DateCard = ({ date }: iDateCard): JSX.Element => {
  const myDate = new Date(date);
  return (
    // Producing "Date Card" according to the desired date format:
    <div className="date card">{myDate.toDateString().slice(4)}</div>
  );
};
