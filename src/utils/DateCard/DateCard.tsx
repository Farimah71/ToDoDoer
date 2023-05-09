import "./dateCard.scss";

interface DateProps {
  date: string;
}

const DateCard = ({ date }: DateProps) => {
  const myDate = new Date(date);
  return (
    // Producing "Date Card" according to the desired date format:
    <div className="date card">
      {myDate.toDateString().slice(4)}
    </div>
  );
};

export default DateCard;
