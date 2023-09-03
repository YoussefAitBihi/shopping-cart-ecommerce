import Logo from "../../assets/logo.svg";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";

const PrimaryHeader = () => {
  return (
    <header className="primary-header">
      <div className="primary-header__logo-box">
        <img src={Logo} alt="Website Logo" className="primary-header__logo" />
      </div>
      <PrimaryNavigation />
      <SecondaryNavigation />
    </header>
  );
};

export default PrimaryHeader;
