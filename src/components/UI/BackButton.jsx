import { Link } from "react-router-dom";
import BackIcon from "./BackIcon";

const BackButton = () => {
  return (
    <Link className="back-button" to=".." relative="path">
      <span className="sr-only">Click to get back</span>
      <BackIcon className="back-button__icon" />
    </Link>
  );
};

export default BackButton;
