import notFoundImg from "../../assets/images/not_found.svg";
import "./index.scss";

export const NotFound = () => {
  return (
    <div className="text-center pt-5">
      <img src={notFoundImg} alt="Not found!" className="w-25 img-fluid pb-5" />
      <p className="not-found-prompt">Nothing Found :(</p>
    </div>
  );
};
