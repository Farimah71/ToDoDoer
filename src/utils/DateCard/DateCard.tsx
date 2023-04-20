interface DateProps {
  date: Date;
}

const DateCard = (props: DateProps) => {
  return (
    <div className="date card">
      {props.date.getMonth()}/{props.date.getDate()}/{props.date.getFullYear()}
    </div>
  );
};

export default DateCard;
