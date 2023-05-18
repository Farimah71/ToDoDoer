import spinnerImg from "../../assets/images/spinner.png";
import "./spinner.scss";

const Spinner = () => {

  return (
    <div>
      <img src={spinnerImg} alt="Searching..." className="rotate" />
    </div>
  );
};

export default Spinner;
