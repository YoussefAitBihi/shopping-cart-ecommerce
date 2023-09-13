import { NavLink } from "react-router-dom";
import FormSearch from "../Forms/FormSearch";
import HamburgerIcon from "../UI/HamburgerIcon";

const PrimaryNavigation = () => {
  const handleActiveLink = ({ isActive }) =>
    `primary-navigation__link ${
      isActive ? "primary-navigation__link--active" : ""
    }`;

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
            <NavLink to="" className={handleActiveLink} end>
              Home
            </NavLink>
          </li>
          <li className="primary-navigation__item">
            <NavLink to="sneakers" className={handleActiveLink} end>
              Sneakers
            </NavLink>
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
