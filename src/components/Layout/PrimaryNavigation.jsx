import FormSearch from "../Forms/FormSearch";
import HamburgerIcon from "../UI/HamburgerIcon";

const PrimaryNavigation = () => {
  return (
    <>
      <HamburgerIcon />
      <nav
        className="primary-navigation"
        id="main-nav"
        aria-label="Main Navigation"
      >
        <ul className="primary-navigation__list">
          <li className="primary-navigation__item">
            <a className="primary-navigation__link" href="#!">
              Home
            </a>
          </li>
          <li className="primary-navigation__item">
            <a className="primary-navigation__link" href="#!">
              Sneakers
            </a>
          </li>
          <li className="primary-navigation__item">
            <FormSearch />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PrimaryNavigation;
