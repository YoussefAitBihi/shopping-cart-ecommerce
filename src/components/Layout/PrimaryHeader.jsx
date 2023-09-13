import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";

const PrimaryHeader = () => {
  return (
    <header className="primary-header">
      <div className="primary-header__logo-box">
        <Link to="/">
          <Logo className="primary-header__logo" />
        </Link>
      </div>
      <PrimaryNavigation />
      <SecondaryNavigation />
    </header>
  );
};

export default PrimaryHeader;
