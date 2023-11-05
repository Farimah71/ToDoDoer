import freeImg from "../../assets/images/free.png";
import "./index.scss";

export const Free = () => {
  return (
    <div className="text-center pt-5 mt-4">
      <img src={freeImg} className="free-img" />
    </div>
  );
};
