import spinnerImg from "../../assets/images/spinner.png";
import "./index.scss";

export const Spinner = () => {
  return (
    <div>
      <img src={spinnerImg} alt="Searching..." className="rotate" />
    </div>
  );
};
