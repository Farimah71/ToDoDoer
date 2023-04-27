import "./dateCard.scss";

interface DateProps {
  date: Date;
}

const DateCard = ({ date }: DateProps) => {
  return (
    // Producing "Date Card" according to the desired date format:
    <div className="date card">
      {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
    </div>
  );
};

export default DateCard;
