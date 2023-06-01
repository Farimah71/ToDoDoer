import notFoundImg from "../../assets/images/not_found.svg";
import "./notFound.scss";

const NotFound = (): JSX.Element => {
  return (
    <div className="text-center pt-5">
      <img src={notFoundImg} alt="Not found!" className="w-50 img-fluid pb-5" />
      <p className="not-found-prompt">Nothing Found :(</p>
    </div>
  );
};

export default NotFound;
